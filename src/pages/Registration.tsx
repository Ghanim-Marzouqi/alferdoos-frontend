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

const Registration: React.FC = () => {
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
        تسجيل جديد
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="name"
          label="الأسم الثلاثي مع القبيلة"
          name="name"
          autoComplete="name"
          autoFocus
          type="text"
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="email"
          label="البريد الإلكتروني"
          name="email"
          autoComplete="email"
          type="email"
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="phone"
          label="رقم الهاتف"
          name="phone"
          autoComplete="phone"
          type="number"
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
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="confirmPassword"
          label="تأكيد كلمة المرور"
          type="password"
          id="confirmPassword"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          تسجيل جديد
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

export default Registration;
