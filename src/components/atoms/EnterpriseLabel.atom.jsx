import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const EnterpriseLabel = ({ title, content }) => {
  return (
    <Grid item xs={12} sm={4} md={4} lg={5} marginX={3} align="left">
      <Typography variant="string" color="#AAAAAA" align="center">
        {title}
      </Typography>
      <Typography variant="string" color="#3C3C3B" align="center">
        {content}
      </Typography>
    </Grid>
  );
};

export default EnterpriseLabel;
