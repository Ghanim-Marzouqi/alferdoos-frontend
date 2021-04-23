import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Button,
  Collapse,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  SvgIconProps,
  Typography
} from '@material-ui/core';
import { AccountCircle, ExpandLess, ExpandMore } from '@material-ui/icons';

import { DRAWER_WIDTH } from '../../config/Constants';
import AvatarImage from '../../assets/images/avatar.jpeg';
import Colors from '../../config/Colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      border: '1px solid #42B287'
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: DRAWER_WIDTH,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: DRAWER_WIDTH,
    },
    drawerTitle: {
      color: Colors.primary,
    },
    navLink: {
      color: Colors.primary,
      backgroundColor: Colors.primary,
    },
    listItem: {
      backgroundColor: "white",
    },
    toolbar: theme.mixins.toolbar,
    toolbarContent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    notification: {
      backgroundColor: Colors.red,
      color: Colors.white,
      width: theme.spacing(3),
      height: theme.spacing(3),
      fontSize: 12,
    },
  })
);

type DrawerItem = {
  title: string;
  route: string;
  icon: React.ReactElement<SvgIconProps>;
  notifications: number;
  hasChildren: boolean;
  children?: { title: string; route: string; icon: React.ReactElement<SvgIconProps>; notifications: number; }[]
};

type Props = {
  user: null;
  drawerItems: DrawerItem[];
  container?: Element;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  handleProfileButtonClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const AppDrawer: React.FC<Props> = ({
  user,
  drawerItems,
  container,
  mobileOpen,
  handleDrawerToggle,
  handleProfileButtonClick
}) => {
  const classes = useStyles();
  const [collapse, setCollapse] = useState(false);

  const toggleCollapse = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setCollapse(!collapse);
  };

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{ paper: classes.drawerPaper }}
          ModalProps={{ keepMounted: true }}
        >
          <div>
            <div className={classes.toolbar}>
              <div className={classes.toolbarContent}>
                <Avatar
                  className={classes.avatar}
                  src={AvatarImage}
                  variant="circular"
                  alt="Avatar"
                />
                <Typography variant="body2" component="h1">
                  غانم المرزوقي
                </Typography>
                <Button
                  variant="text"
                  startIcon={<AccountCircle color="primary" />}
                  onClick={handleProfileButtonClick}
                >
                  <Typography variant="caption" component="h1">
                    الملف الشخصي
                  </Typography>
                </Button>
              </div>
            </div>
            <List>
              {drawerItems.map((item, i) => (
                <ListItem
                  button
                  key={item.title}
                  className={classes.listItem}
                  activeClassName="Mui-selected"
                  component={NavLink}
                  to={item.route}
                  exact
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    className={classes.drawerTitle}
                  />
                  {item.notifications > 0 && (
                    <ListItemSecondaryAction>
                      <Avatar className={classes.notification}>
                        {item.notifications}
                      </Avatar>
                    </ListItemSecondaryAction>
                  )}
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{ paper: classes.drawerPaper }}
          variant="permanent"
          open
        >
          <div>
            <div className={classes.toolbar}>
              <div className={classes.toolbarContent}>
                <Avatar
                  className={classes.avatar}
                  src={AvatarImage}
                  variant="circular"
                  alt="Avatar"
                />
                <Typography variant="body2" component="h1">
                  غانم المرزوقي
                </Typography>
                <Button
                  variant="text"
                  startIcon={<AccountCircle color="primary" />}
                  onClick={handleProfileButtonClick}
                >
                  <Typography variant="caption" component="h1">
                    الملف الشخصي
                  </Typography>
                </Button>
              </div>
            </div>
            <List>
              {drawerItems.map((item, i) => (
                item.hasChildren ?
                  <React.Fragment key={i}>
                    <ListItem
                      button
                      key={item.title}
                      className={classes.listItem}
                      onClick={toggleCollapse}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText
                        primary={item.title}
                        className={classes.drawerTitle}
                      />
                      {collapse ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={collapse} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {item.children?.map((childItem, i) =>
                          <ListItem
                            key={i}
                            button
                            className={classes.listItem}
                            activeClassName="Mui-selected"
                            component={NavLink}
                            to={childItem.route}
                            exact
                          >
                            <ListItemIcon>{childItem.icon}</ListItemIcon>
                            <ListItemText
                              primary={childItem.title}
                              className={classes.drawerTitle}
                            />
                            {childItem.notifications > 0 && (
                              <ListItemSecondaryAction>
                                <Avatar className={classes.notification}>
                                  {childItem.notifications}
                                </Avatar>
                              </ListItemSecondaryAction>
                            )}
                          </ListItem>)}
                      </List>
                    </Collapse>
                  </React.Fragment> :
                  <ListItem
                    button
                    key={item.title}
                    className={classes.listItem}
                    activeClassName="Mui-selected"
                    component={NavLink}
                    to={item.route}
                    exact
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={item.title}
                      className={classes.drawerTitle}
                    />
                    {item.notifications > 0 && (
                      <ListItemSecondaryAction>
                        <Avatar className={classes.notification}>
                          {item.notifications}
                        </Avatar>
                      </ListItemSecondaryAction>
                    )}
                  </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default AppDrawer;
