package com.afkpavi.jobPortal.repo;

import com.afkpavi.jobPortal.model.JobPost;
import org.springframework.stereotype.Repository;
import tools.jackson.databind.ObjectMapper;

import java.io.File;
import java.util.Arrays;
import java.util.List;

@Repository
public class JobPostRepo {

    ObjectMapper mapper = new ObjectMapper();
    File jop_post_file = new File("src/main/java/com/afkpavi/jobPortal/model/job_posts.json");

    JobPost[] jobPostArray = mapper.readValue(jop_post_file, JobPost[].class);

    private final List<JobPost> jobPostData = Arrays.asList(jobPostArray);

    public List<JobPost> getJobPosts(){
        return jobPostData;
    }
}
