import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const Contact = () => {
  return (
    <Box>
      <Typography variant="h4">Contact</Typography>
      <form>
        <TextField label="Name" variant="outlined" fullWidth margin="normal" />
        <TextField label="Email" variant="outlined" fullWidth margin="normal" />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary">
          Send
        </Button>
      </form>
    </Box>
  );
};

export default Contact;
