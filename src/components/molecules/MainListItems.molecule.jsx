import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import Typography from "@mui/material/Typography";

const MainListItems = () => {
  return (
    <>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <Typography variant="h6" color="#005F7F" align="center">
          Empresa
        </Typography>
        {/* <ListItemText primary="Empresa" color="#005F7F" /> */}
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <Typography variant="h6" color="#005F7F" align="center">
          Colaboradores
        </Typography>
      </ListItemButton>
    </>
  );
};

export default MainListItems;
