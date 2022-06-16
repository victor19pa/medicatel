import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { CustomButton } from "../atoms";

const WelcomeCard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} lg={12}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: "40vh",
            // marginBottom: 5,
          }}
        >
          <Typography
            variant="h4"
            color="#005F7F"
            align="left"
            marginTop={3}
            marginBottom={3}
            marginLeft={5}
          >
            Hola, <b>Fundación Grupo Terra</b>
          </Typography>
          <Typography
            variant="string"
            color="#AAAAAA"
            align="left"
            marginLeft={5}
          >
            Bienvenido a Red Medicatel.
          </Typography>
          <Typography
            variant="string"
            color="#AAAAAA"
            align="left"
            marginLeft={5}
          >
            Agenda y ten toda la información médica de tu empresa.
          </Typography>
          <CustomButton title="Agendar" />
        </Paper>
      </Grid>
      {/* //! considerar moverlo */}
      {/* <Grid item xs={12} md={8} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            // flexDirection: "row",
            height: "299px",
            justifyContent: "center",
            backgroundColor: "#EFEFEF",
          }}
        >
          <Typography variant="h6" color="#005F7F" align="center" marginTop={5}>
            Facturacion, <b>Proximamente</b>
          </Typography>
        </Paper>
      </Grid> */}
    </Grid>
  );
};

export default WelcomeCard;
