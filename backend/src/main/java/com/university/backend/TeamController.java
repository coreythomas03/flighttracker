package com.university.backend;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.List;

@RestController
@RequestMapping("/api/teams")
public class TeamController {

    /*private final MockDataService mockDataService;
    public TeamController(MockDataService mockDataService) {
        this.mockDataService = mockDataService;
    }*/

    @GetMapping("")
    public ResponseEntity<List<Map<String, String>>> getTeams() {
        //return mockDataService.getTeams();

        Map<String, String> map = new HashMap<>();
        List<Map<String, String>> teams = new ArrayList<Map<String, String>>();

        Team team = new Team();
        map.put("teamName", team.getName());
        map.put("teamId", team.getNbaTeamId());
        map.put("division", team.getDivision());
        map.put("city", team.getCity());
        map.put("callSign", team.getCallsign());
        teams.add(map);
        ResponseEntity<List<Map<String,String>>> resp = ResponseEntity.ok(teams);

        return resp;
    }
}
