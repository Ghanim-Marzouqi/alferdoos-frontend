import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import HTMLHeader from '../../../components/info/HTMLHeader';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    padding: theme.spacing(2)
  }
}));

const StudentList: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <HTMLHeader title="مركز الفردوس الأعلى | الطلاب المسجلين" />
      <Grid className={classes.container} container>
        <Typography variant="h5" component="h1">
          الطلاب المسجلين
        </Typography>
      </Grid>
    </>
  )
}

export default StudentList;
