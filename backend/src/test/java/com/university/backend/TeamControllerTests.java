package com.university.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.resttestclient.autoconfigure.AutoConfigureRestTestClient;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.client.RestTestClient;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@AutoConfigureRestTestClient
public class TeamControllerTests {
 
    @Autowired
    private RestTestClient testClient;

    @Autowired
    private TeamController controller;

    @Autowired
    private MockDataService mds;

    @Test
    void contextLoads() {
        assertThat(controller).isNotNull();
        assertThat(testClient).isNotNull();
        assertThat(mds).isNotNull();
    }


    public void testTeamControllerCalls() {
        
    }

}
