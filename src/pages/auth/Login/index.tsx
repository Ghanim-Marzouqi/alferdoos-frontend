import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography
} from '@material-ui/core';

import { HTMLHeader, Copyright } from '../../../components/info';

const useStyles = makeStyles((theme: Theme) => createStyles({
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
  const [form, setForm] = useState({ username: "", password: "", isRemembered: false });
  const [errors, setErrors] = useState<{ error: string, errorMessage: string }[]>([]);

  const isValidForm = (): boolean => {
    let status = true;

    if (form.username === "") {
      setErrors(prevErrors => [...prevErrors, { error: "username", errorMessage: "الرجاء إدخال أسم المستخدم" }]);
      status = false;
    }

    if (form.password === "") {
      setErrors(prevErrors => [...prevErrors, { error: "password", errorMessage: "الرجاء إدخال كلمة المرور" }]);
      status = false;
    }

    return status;
  }

  const showErrorMessage = (field: string): string => {
    const error = errors.find(err => err.error === field);
    if (error) return error.errorMessage;
    else return "";
  }

  const submitButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    if (isValidForm()) {
      setErrors([]);
      console.log("submitted", form);
      history.push("/admin");
    }
  }

  return (
    <>
      <HTMLHeader title="مركز الفردوس الأعلى | تسجيل الدخول" />
      <div className={classes.paper}>
        <img
          className={classes.logo}
          src={require('../../../assets/images/logo.png').default}
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
            size="small"
            label="أسم المستخدم"
            name="username"
            autoFocus
            error={errors.some(err => err.error === "username")}
            helperText={showErrorMessage("username")}
            onChange={e => {
              setForm(prevForm => ({ ...prevForm, username: e.target.value as string }));
              setErrors(prevErrors => prevErrors.filter(err => err.error !== "username"));
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            size="small"
            label="كلمة المرور"
            type="password"
            name="password"
            error={errors.some(err => err.error === "password")}
            helperText={showErrorMessage("password")}
            onChange={e => {
              setForm(prevForm => ({ ...prevForm, password: e.target.value as string }));
              setErrors(prevErrors => prevErrors.filter(err => err.error !== "password"));
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="تذكرني"
            checked={form.isRemembered}
            onChange={(e, checked) => setForm(prevForm => ({ ...prevForm, isRemembered: checked }))}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={classes.submit}
            onClick={submitButtonClickHandler}
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
    </>
  );
}

export default Login;
