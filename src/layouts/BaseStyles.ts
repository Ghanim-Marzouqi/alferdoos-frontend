import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { DRAWER_WIDTH } from '../config/Constants';
import Colors from '../config/Colors';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexGrow: 1,
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        marginLeft: DRAWER_WIDTH,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: DRAWER_WIDTH,
    },
    content: {
      flexGrow: 1,
    },
    title: {
      color: Colors.white,
      fontWeight: "bold",
      flexGrow: 1,
    },
    menuIcon: {
      color: Colors.white,
    },
  })
);