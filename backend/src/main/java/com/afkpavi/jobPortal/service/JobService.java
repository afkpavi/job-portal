package com.afkpavi.jobPortal.service;

import com.afkpavi.jobPortal.model.JobPost;
import com.afkpavi.jobPortal.repo.JobPostRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {
    private final JobPostRepo jobPostRepository;

    public JobService(JobPostRepo jobPostRepo){
        this.jobPostRepository = jobPostRepo;
    }

    public List<JobPost> getAllJobPosts(){
        return  this.jobPostRepository.getJobPosts();
    }

}
