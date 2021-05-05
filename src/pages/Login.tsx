import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  makeStyles,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
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

const Login: React.FC = () => {
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
        تسجيل الدخول
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="username"
          label="أسم المستخدم"
          name="username"
          autoComplete="username"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="password"
          label="كلمة المرور"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="تذكرني"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={() => history.push('/admin')}
        >
          تسجيل الدخول
        </Button>
        <Grid container direction="row" justify="space-between">
          <Grid item>
            <Link
              variant="body2"
              onClick={() => history.push('/auth/registration')}
            >
              لا تملك حساب؟ تسجيل جديد
            </Link>
          </Grid>
          <Grid item>
            <Link
              variant="body2"
              onClick={() => history.push('/auth/forget-password')}
            >
              نسيت كلمة المرور؟
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

export default Login;
