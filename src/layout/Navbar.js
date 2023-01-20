import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Tooltip } from '@mui/material';
import { routes, contact } from '../navigation/Routes';

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        My Presentaion Page
      </Typography>
      <Divider />
      <List>
        {routes.map(({id, titleEn, path}) => (
          <ListItem key={id} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={titleEn} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{ display: "flex", justifyContent: "center", marginTop: "10px" }} disablePadding>
        {contact.map(({id, title, path, element}) => (
          <ListItem key={id} disablePadding>
            <ListItemButton sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              {element}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', height: "10vh" }}>
      <CssBaseline />
      <AppBar component="nav" style={{ backgroundColor: "#fff" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{ color: "#000" }}/>
          </IconButton>
          <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center", width: "100%"}}>
            <Typography
              variant="h6"
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' }, color: "black" }}
              >
              My Presentaion Page
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: "space-between", width: "40%", height: "10vh"}}>
              {routes.map(({id, titleEn, path}) => (
                <Button key={id} sx={{ color: '#000', width: "180px",  borderRadius: "0", "&:hover": {backgroundColor: "black", color: "white"} }}>
                  {titleEn}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {contact.map(({id, title, path, element}) => (
                <Tooltip key={id} title={title}>
                  <IconButton>
                    <a href={path} target="e_blank" rel="nonreferrer" style={{ color: '#000' }}>
                      {element}
                    </a>
                  </IconButton>
                </Tooltip>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;