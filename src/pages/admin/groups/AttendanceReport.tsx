import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import HTMLHeader from '../../../components/info/HTMLHeader';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    padding: theme.spacing(2)
  }
}));

const AttendanceReport = () => {
  const classes = useStyles();

  return (
    <>
      <HTMLHeader title="مركز الفردوس الأعلى | تقارير الحضور والإنصراف" />
      <Grid className={classes.container} container>
        <Typography variant="h4" component="h1">
          تقارير الحضور والإنصراف
        </Typography>
      </Grid>
    </>
  );
}

export default AttendanceReport;
