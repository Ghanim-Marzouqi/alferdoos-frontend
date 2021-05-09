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

import HTMLHeader from '../../components/info/HTMLHeader';
import UserDto from '../../dtos/UserDto';
import { USER_TYPE } from '../../config/Constants';

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
    height: 200
  },
  avatarContainer: {
    display: 'flex',
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
  }
}));

const Profile: React.FC = () => {
  const classes = useStyles();
  const imageRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState<UserDto>({
    name: "",
    email: "",
    phone: "",
    username: "",
    profileImage: require("../../assets/images/avatar.jpeg").default,
    userType: USER_TYPE.ADMIN,
  });

  const imageFileClickHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    event.preventDefault();
    if (typeof imageRef.current !== "undefined" && imageRef.current !== null) {
      imageRef.current.click();
    }
  };

  const imageFileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      const file = event.target.files[0];
      setForm(preForm => ({ ...preForm, profileImage: URL.createObjectURL(file) }));
    }
  };

  const profileButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
  };

  const imageUploadButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
  };

  return (
    <>
      <HTMLHeader title="مركز الفردوس الأعلى | الملف الشخصي" />
      <Grid className={classes.container} container direction="column">
        <Typography className={classes.title} variant="h4" component="h1">
          الملف الشخصي
        </Typography>
        <Grid item>
          <Grid container spacing={1}>
            <Grid item lg={6} md={6} xs={12}>
              <Card className={classes.card}>
                <CardContent className={classes.avatarContainer}>
                  <form className={classes.form} noValidate>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      size="small"
                      fullWidth
                      id="name"
                      label="الأسم"
                      name="name"
                      autoComplete="name"
                      autoFocus
                      onChange={e => setForm(preForm => ({ ...preForm, name: e.target.value }))}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      size="small"
                      fullWidth
                      id="email"
                      label="البريد الإلكتروني"
                      name="email"
                      autoComplete="email"
                      type="email"
                      onChange={e => setForm(preForm => ({ ...preForm, email: e.target.value }))}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      size="small"
                      fullWidth
                      id="phone"
                      label="رقم الهاتف"
                      name="phone"
                      autoComplete="phone"
                      type="number"
                      onChange={e => setForm(preForm => ({ ...preForm, phone: e.target.value }))}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      size="small"
                      fullWidth
                      id="username"
                      label="آسم المستخدم"
                      name="username"
                      autoComplete="username"
                      onChange={e => setForm(preForm => ({ ...preForm, username: e.target.value }))}
                    />
                    <FormControl className={classes.formControl} variant="outlined" size="small">
                      <Select labelId="select-label" readOnly value={form.userType} onChange={e => { }}>
                        <MenuItem value="ADMIN">مشرف النظام</MenuItem>
                        <MenuItem value="TEACHER">معلم</MenuItem>
                        <MenuItem value="PARENT">ولي أمر</MenuItem>
                      </Select>
                    </FormControl>
                  </form>
                </CardContent>
                <CardActions>
                  <Button color="primary" variant="contained" onClick={profileButtonClickHandler}>حفظ</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <Card className={classes.card}>
                <CardContent className={classes.avatarContainer}>
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
                </CardContent>
                <CardActions>
                  <Button color="primary" variant="contained" onClick={imageUploadButtonClickHandler}>حفظ</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Profile;
