package com.afkpavi.jobPortal.repo;

import com.afkpavi.jobPortal.model.JobPost;
import org.springframework.stereotype.Repository;
import tools.jackson.databind.ObjectMapper;

import java.io.File;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Repository
public class JobPostRepoLegacy {

    ObjectMapper mapper = new ObjectMapper();
    File jop_post_file = new File("src/main/java/com/afkpavi/jobPortal/model/job_posts.json");

    JobPost[] jobPostArray = mapper.readValue(jop_post_file, JobPost[].class);

    private final List<JobPost> jobPostData = new ArrayList<>(Arrays.asList(jobPostArray));

    public List<JobPost> getJobPosts(){
        return jobPostData;
    }

    public JobPost getJobPost(int id){
        for(JobPost jbp: this.jobPostData){
            if(jbp.getId() == id){
                return jbp;
            }
        }
        return null;
    }

    public void addJobPost(JobPost jbp){
        this.jobPostData.add(jbp);
    }
}
