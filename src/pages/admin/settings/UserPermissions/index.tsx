import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import { HTMLHeader } from '../../../../components/info';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    padding: theme.spacing(2)
  }
}));

const UserPermissions: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <HTMLHeader title="مركز الفردوس الأعلى | صلاحيات المستخدمين" />
      <Grid className={classes.container} container>
        <Typography variant="h5" component="h1">
          صلاحيات المستخدمين
        </Typography>
      </Grid>
    </>
  );
}

export default UserPermissions;
