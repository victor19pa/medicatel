import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import LogoutIcon from "@mui/icons-material/Logout";
import Typography from "@mui/material/Typography";

const SecondaryListItems = () => {
  return (
    <>
      <ListSubheader component="div" inset>
        Opciones
      </ListSubheader>
      <ListItemButton>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <Typography variant="h6" color="#005F7F" align="center">
          Cerrar Sesión
        </Typography>
      </ListItemButton>
    </>
  );
};

export default SecondaryListItems;
