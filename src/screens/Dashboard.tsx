import React, { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { MainSection, Navbar, Sidebar } from '../components/organisms';

const mdTheme = createTheme();

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  }
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar
          open={open}
          toggleDrawer={toggleDrawer}
        />
        <Sidebar
          open={open}
          toggleDrawer={toggleDrawer}
        />
        <MainSection />
      </Box>
    </ThemeProvider>
  )
}

export default Dashboard