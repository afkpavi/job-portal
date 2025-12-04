package com.afkpavi.jobPortal.repo;

import com.afkpavi.jobPortal.model.JobPost;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobPostRepository extends JpaRepository<JobPost, Integer> {
}
