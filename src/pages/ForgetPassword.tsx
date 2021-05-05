import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  makeStyles,
  Box,
  Button,
  Grid,
  Link,
  TextField,
  Theme,
  Typography
} from '@material-ui/core';

import Copyright from '../components/info/Copyright';

const useStyles = makeStyles((theme: Theme) => ({
  logo: {
    width: '200px',
    height: 'auto'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ForgetPassword: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.paper}>
      <img
        className={classes.logo}
        src={require('../assets/images/logo.png').default}
        alt="Icon"
      />
      <Typography component="h1" variant="h5">
        نسيت كلمة المرور
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="email"
          label="البريد الإلكتروني"
          name="email"
          autoComplete="email"
          autoFocus
          type="email"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          إرسال
        </Button>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <Link
              variant="body2"
              onClick={() => history.goBack()}
            >
              رجوع لصفحة تسجيل الدخول
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </form>
    </div>
  );
}

export default ForgetPassword;
