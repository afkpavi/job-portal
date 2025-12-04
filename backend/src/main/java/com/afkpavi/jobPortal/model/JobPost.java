package com.afkpavi.jobPortal.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import org.springframework.context.annotation.Primary;

import java.util.List;

@Data
@Entity
public class JobPost {
    @Id
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
