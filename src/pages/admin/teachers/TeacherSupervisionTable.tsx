import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import HTMLHeader from '../../../components/info/HTMLHeader';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    padding: theme.spacing(2)
  }
}));

const TeacherSupervisionTable: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <HTMLHeader title="مركز الفردوس الأعلى | جدول إشراف المعلمين" />
      <Grid className={classes.container} container>
        <Typography variant="h4" component="h1">
          جدول إشراف المعلمين
        </Typography>
      </Grid>
    </>
  );
}

export default TeacherSupervisionTable;
