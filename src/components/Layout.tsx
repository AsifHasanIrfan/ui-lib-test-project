import * as React from 'react';
// Material-ui imports
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';

// internals imports
import Header from './Header'
import Sidebar from './Sidebar';

export default function Layout({children}: any) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <Header
      open={open}
      handleDrawerOpen={handleDrawerOpen}
      />
      <Sidebar
      open={open}
      handleDrawerClose={handleDrawerClose}
      />
      <Box component="main" sx={{ flexGrow: 1, paddingTop: 14, backgroundColor: '#F1F3F4', height: '100vh' }}>
        <main>{children}</main>
      </Box>
    </Box>
  );
}
