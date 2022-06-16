import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const EnterpriseLogo = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={5} sm={5} md={4} lg={4}>
        <img
          src={`https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:98d18f69-674c-423f-87a4-b19d4c153be6;revision=0?component_id=49bd810b-a70c-4a1d-9e1e-b9f5f050f178&api_key=CometServer1&access_token=1655354814_urn%3Aaaid%3Asc%3AUS%3A98d18f69-674c-423f-87a4-b19d4c153be6%3Bpublic_50ed773ca8af2b79963d73a0d8c02582e99b9134`}
          srcSet={`https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:98d18f69-674c-423f-87a4-b19d4c153be6;revision=0?component_id=49bd810b-a70c-4a1d-9e1e-b9f5f050f178&api_key=CometServer1&access_token=1655354814_urn%3Aaaid%3Asc%3AUS%3A98d18f69-674c-423f-87a4-b19d4c153be6%3Bpublic_50ed773ca8af2b79963d73a0d8c02582e99b9134`}
          alt={"Grupo Terra"}
          loading="lazy"
        />
      </Grid>
      <Grid item xs={12} sm={5} md={7} lg={7} marginLeft={5}>
        <Typography
          variant="h5"
          color="#005F7F"
          align="center"
          marginTop={5}
          marginLeft={3}
        >
          <b>Fundación Grupo Terra</b>
        </Typography>
        <Typography
          variant="section"
          color="#00B2E3"
          align="center"
          marginTop={5}
          // marginLeft={20}
        >
          correo@fundaciongrupoterra.com
        </Typography>
      </Grid>
    </Grid>
  );
};

export default EnterpriseLogo;
