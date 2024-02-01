import React from "react";
import { Box, Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ marginTop: "20px", marginBottom: "20px" }}>
        About Me
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: "20px" }}>
        Mesharet Ivan Lorica
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        I am Mesharet Ivan Lorica, a Technical professional with a proven track
        record in troubleshooting cloud-based issues, software installations,
        and application configurations. With expertise in HTML, CSS, JavaScript,
        React, and network troubleshooting, I am dedicated to delivering
        exceptional technical support and contributing to organizational
        success.
      </Typography>
    </Box>
  );
};

export default AboutMe;
