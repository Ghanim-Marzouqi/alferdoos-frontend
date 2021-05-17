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

const ResetPassword: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const [form, setForm] = useState({ password: "", confirmPassword: "" });
  const [errors, setErrors] = useState<{ error: string, errorMessage: string }[]>([]);

  const isValidForm = (): boolean => {
    let status = true;

    if (form.password === "") {
      setErrors(prevErrors => [...prevErrors, { error: "password", errorMessage: "الرجاء إدخال كلمة المرور" }]);
      status = false;
    }

    if (form.confirmPassword === "") {
      setErrors(prevErrors => [...prevErrors, { error: "confirmPassword", errorMessage: "الرجاء إدخال كلمة المرور" }]);
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
      console.log("submitted", form);
      history.push("/admin");
    }
  }

  return (
    <>
      <HTMLHeader title="مركز الفردوس الأعلى | إعادة تعيين كلمة المرور" />
      <div className={classes.paper}>
        <img
          className={classes.logo}
          src={require('../../../assets/images/logo.png').default}
          alt="Icon"
        />
        <Typography component="h1" variant="h5">
          إعادة تعيين كلمة المرور
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            size="small"
            autoFocus
            label="كلمة المرور الجديدة"
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
            label="تآكيد كلمة المرور الجديدة"
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
                onClick={() => history.replace('/auth')}
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

export default ResetPassword;
