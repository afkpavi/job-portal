package com.afkpavi.jobPortal.model;

import lombok.Data;

import java.util.List;

@Data
public class JobPost {
    private int id;
    private String title;
    private String company;
    private String location;
    private String type;
    private String description;
    private String salary;
    private String datePosted;

//    public JobPost(int id, String title, String body, List<String> techStack, int minExp){
//        this.jobPostId = id;
//        this.jobPostTitle = title;
//        this.description = body;
//        this.jobPostTechStack = techStack;
//        this.minExp = minExp;
//    }
}
