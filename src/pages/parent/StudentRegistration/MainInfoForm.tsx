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
import StudentDto from '../../../dtos/StudentDto';
import { VILLAGES } from './Data';

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

type Props = {
  student: StudentDto;
  setStudent: React.Dispatch<React.SetStateAction<StudentDto>>;
  errors: { error: string; errorMessage: string; }[];
  setErrors: React.Dispatch<React.SetStateAction<{ error: string; errorMessage: string; }[]>>;
  showErrorMessage: (field: string) => string;
};

const MainInfoForm: React.FC<Props> = ({ student, setStudent, errors, setErrors, showErrorMessage }) => {
  const classes = useStyles();

  const villageChangeHandler = (event: React.ChangeEvent<{ name?: string | undefined; value: unknown; }>) => {
    if (typeof event.target.value !== "undefined" && event.target.value !== null) {
      setStudent(prevStudent => ({ ...prevStudent, village: event.target.value as string }));
    }
  }

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
            autoFocus
            label="الأسم الأول"
            name="firstName"
            value={student.firstName}
            error={errors.some(err => err.error === "firstName")}
            helperText={showErrorMessage("firstName")}
            onChange={e => {
              setStudent(prevStudent => ({ ...prevStudent, firstName: e.target.value as string }));
              setErrors(prevErrors => prevErrors.filter(err => err.error !== "firstName"));
            }}
          />
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            size="small"
            fullWidth
            label="الأسم الثاني"
            name="secondName"
            value={student.secondName}
            error={errors.some(err => err.error === "secondName")}
            helperText={showErrorMessage("secondName")}
            onChange={e => {
              setStudent(prevStudent => ({ ...prevStudent, secondName: e.target.value as string }));
              setErrors(prevErrors => prevErrors.filter(err => err.error !== "secondName"));
            }}
          />
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            size="small"
            fullWidth
            label="الأسم الثالث"
            name="thirdName"
            value={student.thridName}
            error={errors.some(err => err.error === "thridName")}
            helperText={showErrorMessage("thridName")}
            onChange={e => {
              setStudent(prevStudent => ({ ...prevStudent, thridName: e.target.value as string }));
              setErrors(prevErrors => prevErrors.filter(err => err.error !== "thridName"));
            }}
          />
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            size="small"
            fullWidth
            label="القبيلة"
            name="familyName"
            value={student.familyName}
            error={errors.some(err => err.error === "familyName")}
            helperText={showErrorMessage("familyName")}
            onChange={e => {
              setStudent(prevStudent => ({ ...prevStudent, familyName: e.target.value as string }));
              setErrors(prevErrors => prevErrors.filter(err => err.error !== "familyName"));
            }}
          />
        </Grid>
      </Grid>
      <Typography className={classes.heading}>انهى الصف:</Typography>
      <Grid className={classes.section} container item>
        <FormControl className={classes.radioGroupContainer} component="fieldset">
          <RadioGroup row aria-label="finishedGrade" name="finishedGrade" value={student.finishedGrade} onChange={e => setStudent(prevStudent => ({ ...prevStudent, finishedGrade: e.target.value as string }))}>
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
            label="رقم ولي الأمر الأول"
            type="number"
            name="firstPhoneNumber"
            value={student.firstPhoneNumber}
            error={errors.some(err => err.error === "firstPhoneNumber")}
            helperText={showErrorMessage("firstPhoneNumber")}
            onChange={e => {
              setStudent(prevStudent => ({ ...prevStudent, firstPhoneNumber: e.target.value as string }));
              setErrors(prevErrors => prevErrors.filter(err => err.error !== "firstPhoneNumber"));
            }}
          />
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            size="small"
            fullWidth
            label="رقم ولي الأمر الثاني (إختياري)"
            type="number"
            name="secondPhoneNumber"
            value={student.secondPhoneNumber}
            error={errors.some(err => err.error === "secondPhoneNumber")}
            helperText={showErrorMessage("secondPhoneNumber")}
            onChange={e => {
              setStudent(prevStudent => ({ ...prevStudent, secondPhoneNumber: e.target.value as string }));
              setErrors(prevErrors => prevErrors.filter(err => err.error !== "secondPhoneNumber"));
            }}
          />
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <FormControl className={classes.formControl} variant="outlined" size="small">
            <Select labelId="select-label" value={student.village} onChange={villageChangeHandler}>
              {VILLAGES.map(village =>
                <MenuItem
                  key={village}
                  value={village}
                >
                  {village}
                </MenuItem>
              )}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
}

export default MainInfoForm;
