import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography
} from '@material-ui/core';

import Colors from '../../../config/Colors';

const useStyles = makeStyles((theme: Theme) => createStyles({
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  section: {
    marginBottom: 10
  },
  radioGroupContainer: {
    marginTop: 10,
    marginBottom: 10
  },
  formControl: {
    width: '100%',
    marginTop: theme.spacing(2)
  },
  heading: {
    fontWeight: "bold",
    color: Colors.primary
  }
}));

const MainInfoForm: React.FC = () => {
  const classes = useStyles();

  return (
    <form className={classes.form} noValidate>
      <Typography className={classes.heading}>أسم الطالب:</Typography>
      <Grid className={classes.section} container item spacing={1}>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            size="small"
            fullWidth
            id="firstName"
            label="الأسم الأول"
            name="firstName"
            autoComplete="firstName"
            autoFocus
          />
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            size="small"
            fullWidth
            id="secondName"
            label="الأسم الثاني"
            name="secondName"
            autoComplete="secondName"
          />
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            size="small"
            fullWidth
            id="thirdName"
            label="الأسم الثالث"
            name="thirdName"
            autoComplete="thirdName"
          />
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            size="small"
            fullWidth
            id="familyName"
            label="القبيلة"
            name="familyName"
            autoComplete="familyName"
          />
        </Grid>
      </Grid>
      <Typography className={classes.heading}>انهى الصف:</Typography>
      <Grid className={classes.section} container item>
        <FormControl className={classes.radioGroupContainer} component="fieldset">
          <RadioGroup row aria-label="finishedClass" name="finishedClass" value="seven" onChange={() => { }}>
            <FormControlLabel value="seven" control={<Radio color="primary" />} label="السابع" />
            <FormControlLabel value="eight" control={<Radio color="primary" />} label="الثامن" />
            <FormControlLabel value="nine" control={<Radio color="primary" />} label="التاسع" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Typography className={classes.heading}>رقم ولي الأمر ومحل الإقامة:</Typography>
      <Grid container item spacing={1}>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            size="small"
            fullWidth
            id="firstPhoneNumber"
            label="رقم ولي الأمر الأول"
            name="firstPhoneNumber"
            autoComplete="firstPhoneNumber"
          />
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            size="small"
            fullWidth
            id="secondPhoneNumber"
            label="رقم ولي الأمر الثاني"
            name="secondPhoneNumber"
            autoComplete="secondPhoneNumber"
          />
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <FormControl className={classes.formControl} variant="outlined" size="small">
            <Select labelId="select-label" value="M" onChange={e => { }}>
              <MenuItem value="M">معمد</MenuItem>
              <MenuItem value="A">المعري</MenuItem>
              <MenuItem value="B">البلاد</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
}

export default MainInfoForm;
