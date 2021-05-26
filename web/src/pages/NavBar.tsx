import { Divider, Drawer, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <Link to="/">
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link to="/register">
          <ListItem button>
            <ListItemText primary="Register" />
          </ListItem>
        </Link>
        <Link to="/login">
          <ListItem button>
            <ListItemText primary="Login" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
}

export default NavBar;