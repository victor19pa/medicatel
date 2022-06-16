import React from "react";
import Grid from "@mui/material/Grid";
import { EnterpriseLabel } from "../atoms";

const EnterpriseMainInfo = () => {
  return (
    <Grid container spacing={1} marginTop={4}>
      <EnterpriseLabel title="RTN:" content="0801-1900-000000" />
      <EnterpriseLabel title="Teléfono:" content="(504) 2222-2222" />
      <EnterpriseLabel title="País:" content="Honduras" />
      <EnterpriseLabel title="Ciudad:" content="Tegucigalpa" />
    </Grid>
  );
};

export default EnterpriseMainInfo;
