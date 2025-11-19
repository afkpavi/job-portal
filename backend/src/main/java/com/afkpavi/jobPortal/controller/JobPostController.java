package com.afkpavi.jobPortal.controller;

import com.afkpavi.jobPortal.model.JobPost;
import com.afkpavi.jobPortal.service.JobService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000")
public class JobPostController {

    private final JobService jobPostService;

    public JobPostController(JobService jbps){
        this.jobPostService = jbps;
    }

    @GetMapping("jobs")
    public List<JobPost> getJobs(){
        return this.jobPostService.getAllJobPosts();
    }

    @PostMapping("job")
    public void addJob(@RequestBody JobPost jobPost){
        this.jobPostService.addJobPost(jobPost);
    }

    @GetMapping("job/{id}")
    public JobPost getJobPost(@PathVariable int id){
        return this.jobPostService.getJobPost(id);
    }

}
