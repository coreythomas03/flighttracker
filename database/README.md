# /database

Useful SQL command to see status of teams in the database:

```sql
SELECT t.name AS team_name, f.callsign, f.live_latitude, f.live_longitude,
       IF(f.status = 'ACTIVE', 'flying', 'not flying') AS flying,
       DATE_FORMAT(CONVERT_TZ(f.last_seen_utc, 'UTC', 'America/Chicago'), '%b %e, %Y %l:%i %p CT') AS last_updated
FROM flights f
JOIN teams t ON t.callsign = f.callsign;
```
