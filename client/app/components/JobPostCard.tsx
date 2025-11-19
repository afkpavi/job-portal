import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography, Box, IconButton } from "@mui/material";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import BusinessIcon from "@mui/icons-material/Business";
import { JobPost } from "../types/jobPost";

const JobPostCard = (props: JobPost) => {
  const JobIcon = props.location == "Remote" ? HomeFilledIcon : BusinessIcon;

  const cardStyle = {
    maxWidth: "345px",
    border: "1px solid #333",
    borderRadius: "10px",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.4)",
    margin: 2,
    cursor: "pointer",
  };

  return (
    <Card sx={{ ...cardStyle }}>
      <CardContent sx={{ pb: "10px !important" }}>
        <Typography fontWeight={600} variant="body1">
          {props.title}
        </Typography>
        <Typography variant="body2">{props.description}</Typography>
        <Box sx={{ mt: 3 }} display="flex" justifyContent="space-between">
          <Typography fontWeight={600} variant="body2">
            {props.company}
          </Typography>
          <Box display="flex">
            <IconButton sx={{ pt: 0, pr: "3px" }}>
              <JobIcon fontSize="small" />
            </IconButton>
            <Typography fontWeight={600} variant="body2">
              {props.location}
            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography fontWeight={500} variant="body2">
            Salary: {props.salary}
          </Typography>
          <Typography fontWeight={600} variant="body2">
            {props.type}
          </Typography>
        </Box>
        <Typography fontWeight={600} fontSize="sm" variant="body2">
          Posted at: {props.datePosted}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default JobPostCard;
