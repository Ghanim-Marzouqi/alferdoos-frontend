import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  Avatar,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  SvgIconProps,
} from '@material-ui/core';

import Colors from '../../config/Colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerTitle: {
      color: Colors.primary,
    },
    listItem: {
      backgroundColor: "white",
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
  hasChildren?: boolean;
  children?: { title: string; route: string; icon: React.ReactElement<SvgIconProps>; notifications: number; }[]
};

type Props = {
  item: DrawerItem
}

const AppDrawerOption: React.FC<Props> = ({ item }) => {
  const classes = useStyles();

  return (
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
  );
}

export default AppDrawerOption;
