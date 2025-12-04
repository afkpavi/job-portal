package com.afkpavi.jobPortal.service;

import com.afkpavi.jobPortal.model.JobPost;
import com.afkpavi.jobPortal.repo.JobPostRepository;
import org.springframework.stereotype.Service;
import tools.jackson.databind.ObjectMapper;

import java.io.File;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class JobService {
    private final JobPostRepository jobPostRepository;

    public JobService(JobPostRepository jobPostRepo){
        this.jobPostRepository = jobPostRepo;
    }

    public List<JobPost> getAllJobPosts(){
        return  this.jobPostRepository.findAll();
    }

    public JobPost getJobPost(int id){
        return this.jobPostRepository.getReferenceById(id);
    }

    public void addJobPost(JobPost jbp){
        this.jobPostRepository.save(jbp);
    };

    public void seedJobPostsFromJson() {
        ObjectMapper mapper = new ObjectMapper();
        File jop_post_file = new File("src/main/java/com/afkpavi/jobPortal/model/job_posts.json");

        JobPost[] jobPostArray = mapper.readValue(jop_post_file, JobPost[].class);

        List<JobPost> jobPostData = new ArrayList<>(Arrays.asList(jobPostArray));
        this.jobPostRepository.saveAll(jobPostData);
    }


}
