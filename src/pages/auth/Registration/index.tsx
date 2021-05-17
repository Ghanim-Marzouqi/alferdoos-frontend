import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Box,
  Button,
  Grid,
  Link,
  TextField,
  Typography
} from '@material-ui/core';

import { HTMLHeader, Copyright } from '../../../components/info';
import { USER_TYPE } from '../../../config/Constants';

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

const Registration: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const [form, setForm] = useState({ name: "", email: "", phone: "", username: "", password: "", confirmPassword: "", userType: USER_TYPE.PARENT });
  const [errors, setErrors] = useState<{ error: string, errorMessage: string }[]>([]);

  const isValidEmail = (email: string): boolean => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const isValidForm = (): boolean => {
    let status = true;

    if (form.name === "") {
      setErrors(prevErrors => [...prevErrors, { error: "name", errorMessage: "الرجاء إدخال الأسم الثلاثي مع القبيلة" }]);
      status = false;
    }

    if (form.email === "") {
      setErrors(prevErrors => [...prevErrors, { error: "email", errorMessage: "الرجاء إدخال البريد الإلكتروني" }]);
      status = false;
    }

    if (!isValidEmail(form.email)) {
      setErrors(prevErrors => [...prevErrors, { error: "email", errorMessage: "البريد الإلكتروني غير صحيح" }]);
      status = false;
    }

    if (form.phone === "") {
      setErrors(prevErrors => [...prevErrors, { error: "phone", errorMessage: "الرجاء إدخال رقم الهاتف" }]);
      status = false;
    }

    if (form.phone.length !== 8) {
      setErrors(prevErrors => [...prevErrors, { error: "phone", errorMessage: "رقم الهاتف غير صحيح" }]);
      status = false;
    }

    if (form.phone.substr(0, 1) !== "7" && form.phone.substr(0, 1) !== "9") {
      setErrors(prevErrors => [...prevErrors, { error: "phone", errorMessage: "رقم الهاتف غير صحيح" }]);
      status = false;
    }

    if (form.username === "") {
      setErrors(prevErrors => [...prevErrors, { error: "username", errorMessage: "الرجاء إدخال أسم المستخدم" }]);
      status = false;
    }

    if (form.password === "") {
      setErrors(prevErrors => [...prevErrors, { error: "password", errorMessage: "الرجاء إدخال كلمة المرور" }]);
      status = false;
    }

    if (form.confirmPassword === "") {
      setErrors(prevErrors => [...prevErrors, { error: "confirmPassword", errorMessage: "الرجاء تأكيد كلمة المرور" }]);
      status = false;
    }

    if (form.username.length < 6) {
      setErrors(prevErrors => [...prevErrors, { error: "username", errorMessage: "أسم المستخدم قصير جدا" }]);
      status = false;
    }

    if (form.password.length < 6) {
      setErrors(prevErrors => [...prevErrors, { error: "password", errorMessage: "كلمة المرور قصيرة جدا" }]);
      status = false;
    }

    if (form.confirmPassword.length < 6) {
      setErrors(prevErrors => [...prevErrors, { error: "confirmPassword", errorMessage: "كلمة المرور قصيرة جدا" }]);
      status = false;
    }

    if (form.password !== form.confirmPassword) {
      setErrors(prevErrors => [...prevErrors, { error: "password", errorMessage: "كلمة المرور غير متطابقة" }]);
      setErrors(prevErrors => [...prevErrors, { error: "confirmPassword", errorMessage: "كلمة المرور غير متطابقة" }]);
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
    }
  }

  return (
    <>
      <HTMLHeader title="مركز الفردوس الأعلى | تسجيل جديد" />
      <div className={classes.paper}>
        <img
          className={classes.logo}
          src={require('../../../assets/images/logo.png').default}
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
            size="small"
            label="الأسم الثلاثي مع القبيلة"
            autoFocus
            name="name"
            type="text"
            error={errors.some(err => err.error === "name")}
            helperText={showErrorMessage("name")}
            onChange={e => {
              setForm(prevForm => ({ ...prevForm, name: e.target.value as string }));
              setErrors(prevErrors => prevErrors.filter(err => err.error !== "name"));
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            size="small"
            label="البريد الإلكتروني"
            type="text"
            name="email"
            error={errors.some(err => err.error === "email")}
            helperText={showErrorMessage("email")}
            onChange={e => {
              setForm(prevForm => ({ ...prevForm, email: e.target.value as string }));
              setErrors(prevErrors => prevErrors.filter(err => err.error !== "email"));
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            size="small"
            label="رقم الهاتف"
            type="number"
            name="phone"
            error={errors.some(err => err.error === "phone")}
            helperText={showErrorMessage("phone")}
            onChange={e => {
              setForm(prevForm => ({ ...prevForm, phone: e.target.value as string }));
              setErrors(prevErrors => prevErrors.filter(err => err.error !== "phone"));
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            size="small"
            label="أسم المستخدم"
            name="username"
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
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            size="small"
            label="تأكيد كلمة المرور"
            type="password"
            name="confirmPassword"
            error={errors.some(err => err.error === "confirmPassword")}
            helperText={showErrorMessage("confirmPassword")}
            onChange={e => {
              setForm(prevForm => ({ ...prevForm, confirmPassword: e.target.value as string }));
              setErrors(prevErrors => prevErrors.filter(err => err.error !== "confirmPassword"));
            }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={classes.submit}
            onClick={submitButtonClickHandler}
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
    </>
  );
}

export default Registration;
