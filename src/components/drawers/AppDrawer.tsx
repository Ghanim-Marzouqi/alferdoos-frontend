import React from 'react';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Button,
  Drawer,
  Hidden,
  List,
  SvgIconProps,
  Typography
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

import { DRAWER_WIDTH } from '../../config/Constants';
import AvatarImage from '../../assets/images/avatar.jpeg';
import Colors from '../../config/Colors';
import DrawerOption from './AppDrawerOption';
import DrawerMuliOptions from './AppDrawerMuliOptions';

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
                  أسم المستخدم
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
                item.hasChildren ? <DrawerMuliOptions key={i} item={item} /> : <DrawerOption key={i} item={item} />
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
                  أسم المستخدم
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
                item.hasChildren ? <DrawerMuliOptions key={i} item={item} /> : <DrawerOption key={i} item={item} />
              ))}
            </List>
          </div>
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default AppDrawer;
