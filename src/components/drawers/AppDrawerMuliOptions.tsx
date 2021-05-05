import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  SvgIconProps
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

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
  hasChildren: boolean;
  children?: { title: string; route: string; icon: React.ReactElement<SvgIconProps>; notifications: number; }[]
};

type Props = {
  item: DrawerItem
}

const AppDrawerMultiOptions: React.FC<Props> = ({ item }) => {
  const classes = useStyles();
  const [collapse, setCollapse] = useState(false);

  const toggleCollapse = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setCollapse(!collapse);
  };

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default AppDrawerMultiOptions;
