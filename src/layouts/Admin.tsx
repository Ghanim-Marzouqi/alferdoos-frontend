import React, { useState } from 'react';
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import {
  AppBar,
  Button,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography
} from "@material-ui/core";
import { Menu, PowerSettingsNew } from '@material-ui/icons';

import { useStyles } from './BaseStyles';
import Drawer from '../components/drawers/AppDrawer';
import { adminRoutes } from '../routes/Routes';

type Props = {
  container?: Element;
};

type RouteType = {
  title: string;
  path: string;
  component?: React.FC<{}>;
  layout: string;
  icon: JSX.Element;
  children?: { title: string; path: string; component?: React.FC<{}>; layout: string; icon: JSX.Element; }[];
};

const Admin: React.FC<Props> = ({ container }) => {
  const classes = useStyles();
  const history = useHistory();
  const [mobileOpen, setMobileOpen] = useState(false);

  const flatArray = (array: RouteType[]) => {
    let result: RouteType[] = [];
    array.forEach(element => {
      result.push(element);
      if (typeof element.children !== "undefined") {
        result = [...result, ...element.children];
      }
    });
    return result;
  }

  const getRoutes = () => {
    const routes = flatArray(adminRoutes);
    return routes.map((item, i) => <Route
      key={i}
      path={item.layout + item.path}
      component={item.component}
    />);
  }

  const getDrawerItems = () => {
    return adminRoutes.map((item, i) => ({
      title: item.title,
      route: item.layout + item.path,
      icon: item.icon,
      notifications: 0,
      hasChildren: item.children ? true : false,
      children: item.children?.map(childItem => ({ title: childItem.title, route: childItem.layout + childItem.path, icon: childItem.icon, notifications: 0 }))
    }));
  }

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleProfileButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
  };

  const handleLogoutButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    history.replace('/auth');
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="default"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <Menu className={classes.menuIcon} />
          </IconButton>
          <Typography
            className={classes.title}
            variant="h5"
            component="h1"
            noWrap
          >
            مركز الفردوس الأعلى
            </Typography>
          <Button
            endIcon={<PowerSettingsNew />}
            color="inherit"
            onClick={handleLogoutButtonClick}
          >
            تسجيل الخروج
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        user={null}
        drawerItems={getDrawerItems()}
        container={container}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        handleProfileButtonClick={handleProfileButtonClick}
      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          {getRoutes()}
          <Redirect from="/admin" to="/admin/dashboard" />
        </Switch>
      </main>
    </div>
  );
}

export default Admin;
