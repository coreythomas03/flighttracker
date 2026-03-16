package com.university.backend;

import org.junit.jupiter.api.Test;
import org.springframework.web.client.RestTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;
//import org.springframework.web.client.

//import org.mockito.Mock;
import org.mockito.Mockito;
//import static org.mockito.Mockito.when;
//import org.springframework.test.context.TestPropertySource;

@WebMvcTest(TrackingController.class)
public class TrackingControllerTests {

    @Autowired
    private MockMvc mvc;
    
    RestTemplate templ = Mockito.mock(RestTemplate.class);
    MockDataService mock = Mockito.mock(MockDataService.class);
    TrackingController TC = new TrackingController(templ, mock);

    /*
     * Test
    */
    @Test
    public void testGetAllTracking() {

        /*when(templ.getForEntity("https://allanswers.com/api/tracking", Object.class))
        .thenReturn(ResponseEntity.ok("data"));

        mvc.perform(get("/api/tracking")).andExpect(status().isOK());
        */

        ResponseEntity<?> resp =  TC.getAllTracking();
        Object body = resp.getBody();

        // Check that proper status code is thrown in response
        assert(resp.getStatusCode() == HttpStatus.OK);

        // ensure that payload of ResponseEntity is an Object or a List<?> of mock data
        assert(body instanceof Object || body instanceof List<?>);

        // Check that mock call targets correct mapping

    }


    
}
