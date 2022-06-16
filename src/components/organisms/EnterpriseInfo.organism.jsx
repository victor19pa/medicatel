import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
// import useScreenSize from "../../hooks/useScreenSize";
import { EnterpriseLogo, EnterpriseMainInfo } from "../molecules";

const EnterpriseInfo = () => {
  // const { width } = useScreenSize();
  return (
    <Grid container spacing={3} marginTop={1}>
      <Grid item>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: "42vh",
          }}
        >
          {/* imagen y titulo */}
          <EnterpriseLogo />
          {/* Empresa info */}
          <EnterpriseMainInfo />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default EnterpriseInfo;
