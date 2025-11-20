"use client";

import JobPostCard from "./components/JobPostCard";
import { Container, Box } from "@mui/material";
import { useGetJobPostsQuery } from "./redux/features/jobPost/jobPostSlice";

export default function Home() {
  const { isLoading, isError, data } = useGetJobPostsQuery();

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (isError) {
    return <h1>Error... </h1>;
  }

  return (
    <main>
      <Container>
        <Box display="flex" flexWrap="wrap" sx={{justifyContent: {xs: 'center', lg: 'flex-start'}}}>
          {data?.map((card) => (
            <JobPostCard key={card.id} {...card} />
          ))}
        </Box>
      </Container>
    </main>
  );
}
