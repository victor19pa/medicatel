import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { CustomButton } from "../atoms";
// import { LocalHospitalOutlined } from "@mui/icons-material";

const Features = ({ mainCharacter, title, covid }) => {
  return (
    <Grid item xs={12} md={4} lg={4}>
      {covid && (
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: "6vh",
            // justifyContent: "center",
            // backgroundColor: "#00B2E333",
          }}
        >
          <CustomButton
            title="COVID-19"
            colorBtn={"#00B2E333"}
            colorTxt={"#00B2E3"}
          />
        </Paper>
      )}

      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: "30vh",
          justifyContent: "center",
          backgroundColor: "#FFFFFF",
        }}
      >
        {/* <LocalHospitalOutlined /> */}
        <Typography variant="h4" color="#005F7F" align="center">
          <b>{mainCharacter}</b>
        </Typography>
        <Typography variant="string" color="#707070" align="center">
          {title}
        </Typography>
      </Paper>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: "6vh",
          justifyContent: "center",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Typography variant="string" color="#005F7F" align="right">
          {new Date().toDateString()}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Features;
