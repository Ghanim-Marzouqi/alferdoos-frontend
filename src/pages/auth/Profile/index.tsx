import React, { useState, useRef } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardContent,
  CardActions,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@material-ui/core';
import { EditRounded } from '@material-ui/icons';
import { HTMLHeader } from '../../../components/info';
import Colors from '../../../config/Colors';

import UserDto from '../../../dtos/UserDto';
import { USER_TYPE } from '../../../config/Constants';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    padding: theme.spacing(2)
  },
  title: {
    padding: theme.spacing(1)
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  card: {
    width: '100%'
  },
  avatar: {
    width: 200,
    height: 200,
    border: '#119076 1px solid'
  },
  avatarContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 350
  },
  avatarBadge: {
    backgroundColor: 'grey',
    borderRadius: 30,
    padding: 5,
    fontSize: 40
  },
  formControl: {
    width: '100%',
    marginTop: theme.spacing(2)
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  imageFile: {
    display: 'none'
  },
  heading: {
    fontWeight: "bold",
    color: Colors.primary
  },
}));

const Profile: React.FC = () => {
  const classes = useStyles();
  const imageRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string>(require("../../../assets/images/avatar.jpeg").default);
  const [form, setForm] = useState<UserDto>({
    name: "",
    email: "",
    phone: "",
    username: "",
    profileImage: new File([], ""),
    userType: USER_TYPE.ADMIN,
  });
  const [errors, setErrors] = useState<{ error: string, errorMessage: string }[]>([]);

  const imageFileClickHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    event.preventDefault();
    if (typeof imageRef.current !== "undefined" && imageRef.current !== null) {
      imageRef.current.click();
    }
  };

  const imageFileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null && typeof event.target.files !== "undefined") {
      const file = event.target.files[0];
      if (typeof file !== "undefined") {
        setImage(URL.createObjectURL(file));
        setForm(prevForm => ({ ...prevForm, profileImage: file }));
      } else {
        setImage(require("../../../assets/images/avatar.jpeg").default);
      }
    } else {
      setImage(require("../../../assets/images/avatar.jpeg").default);
    }
  };

  const showErrorMessage = (field: string): string => {
    const error = errors.find(err => err.error === field);
    if (error) return error.errorMessage;
    else return "";
  }

  const isValidEmail = (email: string): boolean => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

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

    return status;
  };

  const submitButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    if (isValidForm()) {
      console.log("submitted", form);
    }
  };

  return (
    <>
      <HTMLHeader title="مركز الفردوس الأعلى | الملف الشخصي" />
      <Grid className={classes.container} container direction="column">
        <Typography className={classes.title} variant="h5" component="h1">
          الملف الشخصي
        </Typography>
        <Card className={classes.card}>
          <CardContent>
            <Grid item container direction="row">
              <Grid item sm={6} xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  size="small"
                  fullWidth
                  autoFocus
                  label="الأسم"
                  name="name"
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
                  size="small"
                  fullWidth
                  label="البريد الإلكتروني"
                  type="email"
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
                  size="small"
                  fullWidth
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
                  size="small"
                  fullWidth
                  label="آسم المستخدم"
                  name="username"
                  error={errors.some(err => err.error === "username")}
                  helperText={showErrorMessage("username")}
                  onChange={e => {
                    setForm(prevForm => ({ ...prevForm, username: e.target.value as string }));
                    setErrors(prevErrors => prevErrors.filter(err => err.error !== "username"));
                  }}
                />
                <FormControl className={classes.formControl} variant="outlined" size="small">
                  <Select labelId="select-label" readOnly value={form.userType} onChange={e => { }}>
                    <MenuItem value="ADMIN">مشرف النظام</MenuItem>
                    <MenuItem value="TEACHER">معلم</MenuItem>
                    <MenuItem value="PARENT">ولي أمر</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid className={classes.avatarContainer} item sm={6} xs={12}>
                <Badge
                  overlap="circle"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                  badgeContent={<EditRounded className={classes.avatarBadge} color="secondary" />}
                  onClick={imageFileClickHandler}
                >
                  <Avatar className={classes.avatar} alt="User Profile" src={image} />
                </Badge>
                <input
                  className={classes.imageFile}
                  ref={imageRef}
                  type="file"
                  accept="image/*"
                  name="image"
                  id="image"
                  onChange={imageFileChangeHandler} />
                <Typography style={{ marginTop: 10 }} className={classes.heading}>الصورة الشخصية</Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button color="primary" variant="contained" onClick={submitButtonClickHandler}>حفظ</Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

export default Profile;
