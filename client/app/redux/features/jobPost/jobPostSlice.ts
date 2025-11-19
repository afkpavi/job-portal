import { JobPost } from "@/app/types/jobPost";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type InitialState = {
  jobPosts: JobPost[];
  loading: boolean;
  error: string;
};

const initialState: InitialState = {
  jobPosts: [],
  loading: false,
  error: "",
};

const jobPostApi = createApi({
  reducerPath: "jobPostApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
  }),
  endpoints: (builder) => ({
    getJobPosts: builder.query<JobPost[], void>({
      query: () => "/jobs",
    }),
  }),
});

export const { useGetJobPostsQuery } = jobPostApi;
export default jobPostApi;
