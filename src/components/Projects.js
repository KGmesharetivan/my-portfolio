import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  CardActionArea,
} from "@mui/material";

const Projects = () => {
  const projects = [
    {
      title: "HelloDoc",
      description: "A medical appointment booking website.",
      link: "https://kgmesharetivan.github.io/HelloDoc-KodeGo-MP1/",
    },
    {
      title: "ChatMingle",
      description: "A real-time chat application.",
      link: "https://wd92pt-mp2-chatmingle.netlify.app/",
    },
    {
      title: "Group 3 Capstone",
      description: "A capstone project by Group 3.",
      link: "https://wd92pt-group-3-capstone.netlify.app/",
    },
    // ... more projects
  ];

  return (
    <Box>
      <Typography variant="h4" sx={{ marginTop: "20px", marginBottom: "20px" }}>
        Projects
      </Typography>
      {projects.map((project, index) => (
        <Card key={index} sx={{ marginBottom: "20px" }}>
          <CardActionArea onClick={() => window.open(project.link, "_blank")}>
            <CardContent>
              <Typography variant="h5">{project.title}</Typography>
              <Typography variant="body2">{project.description}</Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => window.open(project.link, "_blank")}
              >
                Learn More
              </Button>
            </CardActions>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default Projects;
