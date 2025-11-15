package com.afkpavi.jobPortal.controller;

import com.afkpavi.jobPortal.model.JobPost;
import com.afkpavi.jobPortal.service.JobService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/")
public class JobPostController {

    private final JobService jobPostService;

    public JobPostController(JobService jbps){
        this.jobPostService = jbps;
    }

    @GetMapping("jobs")
    public List<JobPost> getJobs(){
        return this.jobPostService.getAllJobPosts();
    }

}
