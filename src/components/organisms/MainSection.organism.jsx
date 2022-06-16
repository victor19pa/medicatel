import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import EnterpriseInfo from "./EnterpriseInfo.organism";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Features, WelcomeCard } from "../molecules";
// import useScreenSize from "../../hooks/useScreenSize";

const MainSection = () => {
  // const { height } = useScreenSize();
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: "#F8FBFD",
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
        justifyContent: "center",
      }}
    >
      <Toolbar />
      <Container sx={{ my: 4 }} lg={8}>
        <Grid container spacing={3} marginTop={1}>
          <Grid item xs={12} sm={12} md={12} lg={8}>
            {/* Welcome */}
            <WelcomeCard />
            {/* Enterprise Logo/info */}
            <EnterpriseInfo />
            {/* 3 Cards */}
            <Grid container spacing={3} marginTop={1}>
              <Features mainCharacter={"123"} title={"Colaboradores"} />
              <Features mainCharacter={"29"} title={"Citas Agendadas"} />
              <Features
                mainCharacter={"29/100"}
                title={"Positivos / Negativos"}
                covid={true}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "center",
                backgroundColor: "#EFEFEF",
              }}
            >
              <Typography
                variant="h6"
                color="#005F7F"
                align="center"
                marginTop={5}
              >
                Facturacion, <b>Proximamente</b>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MainSection;
