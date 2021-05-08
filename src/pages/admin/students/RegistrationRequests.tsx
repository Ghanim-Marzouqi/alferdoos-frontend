import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import HTMLHeader from '../../../components/info/HTMLHeader';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    padding: theme.spacing(2)
  }
}));

const RegistrationRequests: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <HTMLHeader title="مركز الفردوس الأعلى | طلبات التسجيل" />
      <Grid className={classes.container} container>
        <Typography variant="h4" component="h1">
          طلبات التسجيل
        </Typography>
      </Grid>
    </>
  );
}

export default RegistrationRequests;
