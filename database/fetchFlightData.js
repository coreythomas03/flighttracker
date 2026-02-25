/**
 * NBA Charter Flight Data Collection Script
 * Fetches live ADS-B data from Airplanes.live for each NBA team's Delta charter
 * and writes database/flights_snapshot.json. Rate-limited to 10s between requests.
 */

const fs = require('fs');
const path = require('path');

const DATABASE_DIR = path.join(__dirname, '..', 'database');
const TEAMS_PATH = path.join(DATABASE_DIR, 'teams.json');
const SNAPSHOT_PATH = path.join(DATABASE_DIR, 'flights_snapshot.json');
const API_BASE = 'http://api.airplanes.live/v2/callsign';
const DELAY_MS = 10000;

function loadTeams() {
  const raw = fs.readFileSync(TEAMS_PATH, 'utf8');
  const data = JSON.parse(raw);
  return Array.isArray(data.teams) ? data.teams : [];
}

function loadExistingSnapshot() {
  try {
    if (fs.existsSync(SNAPSHOT_PATH)) {
      const raw = fs.readFileSync(SNAPSHOT_PATH, 'utf8');
      return JSON.parse(raw);
    }
  } catch (e) {
    console.warn('Could not load existing snapshot:', e.message);
  }
  return { snapshot_time: null, teams: {} };
}

function saveSnapshot(snapshot) {
  snapshot.snapshot_time = Date.now();
  fs.writeFileSync(SNAPSHOT_PATH, JSON.stringify(snapshot, null, 2), 'utf8');
  console.log('\nSaved to', SNAPSHOT_PATH);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchCallsign(callsign) {
  const url = `${API_BASE}/${encodeURIComponent(callsign.trim())}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }
  return res.json();
}

async function main() {
  const teams = loadTeams();
  if (!teams.length) {
    console.error('No teams found in', TEAMS_PATH);
    process.exit(1);
  }

  const snapshot = loadExistingSnapshot();
  const teamsMap = snapshot.teams || {};

  console.log(`Loaded ${teams.length} teams. Starting fetch (${DELAY_MS / 1000}s between requests)...\n`);

  for (let i = 0; i < teams.length; i++) {
    const { team, callsign } = teams[i];
    const existing = teamsMap[callsign];

    try {
      const data = await fetchCallsign(callsign);
      const total = data.total === undefined ? 0 : data.total;

      if (total === 1) {
        const ts = data.now != null ? data.now : data.ctime;
        teamsMap[callsign] = {
          team,
          callsign,
          is_flying: true,
          last_seen: ts != null ? ts : Date.now(),
          raw: data,
        };
        console.log(`[${i + 1}/${teams.length}] ${team} (${callsign}): flying — updated`);
      } else {
        if (existing) {
          teamsMap[callsign] = {
            ...existing,
            team,
            callsign,
            is_flying: false,
          };
          console.log(`[${i + 1}/${teams.length}] ${team} (${callsign}): not flying — kept last known`);
        } else {
          teamsMap[callsign] = {
            team,
            callsign,
            is_flying: false,
            last_seen: null,
            raw: null,
          };
          console.log(`[${i + 1}/${teams.length}] ${team} (${callsign}): not flying — no prior data`);
        }
      }
    } catch (err) {
      console.error(`[${i + 1}/${teams.length}] ${team} (${callsign}): ERROR — ${err.message}`);
      if (existing) {
        teamsMap[callsign] = { ...existing, team, callsign, is_flying: false };
      } else {
        teamsMap[callsign] = {
          team,
          callsign,
          is_flying: false,
          last_seen: null,
          raw: null,
        };
      }
    }

    if (i < teams.length - 1) {
      await sleep(DELAY_MS);
    }
  }

  snapshot.teams = teamsMap;
  saveSnapshot(snapshot);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
