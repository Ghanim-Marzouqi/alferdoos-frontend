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

const ForgetPassword: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const [form, setForm] = useState({ email: "" });
  const [errors, setErrors] = useState<{ error: string, errorMessage: string }[]>([]);

  const isValidEmail = (email: string): boolean => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const isValidForm = (): boolean => {
    let status = true;

    if (form.email === "") {
      setErrors(prevErrors => [...prevErrors, { error: "email", errorMessage: "الرجاء إدخال البريد الإلكتروني" }]);
      status = false;
    }

    if (!isValidEmail(form.email)) {
      setErrors(prevErrors => [...prevErrors, { error: "email", errorMessage: "البريد الإلكتروني غير صحيح" }]);
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
      <HTMLHeader title="مركز الفردوس الأعلى | نسيت كلمة المرور" />
      <div className={classes.paper}>
        <img
          className={classes.logo}
          src={require('../../../assets/images/logo.png').default}
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
            size="small"
            label="البريد الإلكتروني"
            name="email"
            autoFocus
            error={errors.some(err => err.error === "email")}
            helperText={showErrorMessage("email")}
            onChange={e => {
              setForm(prevForm => ({ ...prevForm, email: e.target.value as string }));
              setErrors(prevErrors => prevErrors.filter(err => err.error !== "email"));
            }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="small"
            className={classes.submit}
            onClick={submitButtonClickHandler}
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
    </>
  );
}

export default ForgetPassword;
