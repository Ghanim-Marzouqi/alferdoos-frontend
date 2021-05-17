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
  const [form, setForm] = useState<UserDto>({
    name: "",
    email: "",
    phone: "",
    username: "",
    profileImage: require("../../../assets/images/avatar.jpeg").default,
    userType: USER_TYPE.ADMIN,
  });
  const [errors, setErrors] = useState<string[]>([]);

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
        setForm(preForm => ({ ...preForm, profileImage: URL.createObjectURL(file) }));
      } else {
        setForm(preForm => ({ ...preForm, profileImage: require("../../../assets/images/avatar.jpeg").default }));
      }
    } else {
      setForm(preForm => ({ ...preForm, profileImage: require("../../../assets/images/avatar.jpeg").default }));
    }
  };

  const isValidEmail = (email: string): boolean => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const isValidForm = (): boolean => {
    let status = true;

    if (form.name === "") {
      setErrors(prevErrors => [...prevErrors, "name"]);
      status = false;
    }

    if (form.email === "") {
      setErrors(prevErrors => [...prevErrors, "email"]);
      status = false;
    }

    if (!isValidEmail(form.email)) {
      setErrors(prevErrors => [...prevErrors, "email"]);
      status = false;
    }

    if (form.phone.length !== 8) {
      setErrors(prevErrors => [...prevErrors, "phone"]);
      status = false;
    }

    if (form.phone.substr(0, 1) !== "7" && form.phone.substr(0, 1) !== "9") {
      setErrors(prevErrors => [...prevErrors, "phone"]);
      status = false;
    }

    if (form.username === "") {
      setErrors(prevErrors => [...prevErrors, "username"]);
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
                  error={errors.some(err => err === "name")}
                  onChange={e => {
                    setForm(prevForm => ({ ...prevForm, name: e.target.value as string }));
                    setErrors(prevErrors => prevErrors.filter(err => err !== "name"));
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
                  error={errors.some(err => err === "email")}
                  onChange={e => {
                    setForm(prevForm => ({ ...prevForm, email: e.target.value as string }));
                    setErrors(prevErrors => prevErrors.filter(err => err !== "email"));
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
                  error={errors.some(err => err === "phone")}
                  onChange={e => {
                    setForm(prevForm => ({ ...prevForm, phone: e.target.value as string }));
                    setErrors(prevErrors => prevErrors.filter(err => err !== "phone"));
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  size="small"
                  fullWidth
                  label="آسم المستخدم"
                  name="username"
                  error={errors.some(err => err === "username")}
                  onChange={e => {
                    setForm(prevForm => ({ ...prevForm, username: e.target.value as string }));
                    setErrors(prevErrors => prevErrors.filter(err => err !== "username"));
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
                  <Avatar className={classes.avatar} alt="Travis Howard" src={form.profileImage} />
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
          <CardActions style={{ marginTop: -30 }}>
            <Button color="primary" variant="contained" onClick={submitButtonClickHandler}>حفظ</Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

export default Profile;
