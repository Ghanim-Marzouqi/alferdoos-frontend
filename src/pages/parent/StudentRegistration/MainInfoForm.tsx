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
};

const MainInfoForm: React.FC<Props> = ({ student, setStudent }) => {
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
            onChange={e => setStudent(prevStudent => ({ ...prevStudent, firstName: e.target.value }))}
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
            onChange={e => setStudent(prevStudent => ({ ...prevStudent, secondName: e.target.value }))}
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
            onChange={e => setStudent(prevStudent => ({ ...prevStudent, thridName: e.target.value }))}
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
            onChange={e => setStudent(prevStudent => ({ ...prevStudent, familyName: e.target.value }))}
          />
        </Grid>
      </Grid>
      <Typography className={classes.heading}>انهى الصف:</Typography>
      <Grid className={classes.section} container item>
        <FormControl className={classes.radioGroupContainer} component="fieldset">
          <RadioGroup row aria-label="finishedGrade" name="finishedGrade" value={student.finishedGrade} onChange={e => setStudent(prevStudent => ({ ...prevStudent, finishedGrade: e.target.value }))}>
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
            onChange={e => setStudent(prevStudent => ({ ...prevStudent, firstPhoneNumber: e.target.value }))}
          />
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            size="small"
            fullWidth
            label="رقم ولي الأمر الثاني"
            type="number"
            name="secondPhoneNumber"
            value={student.secondPhoneNumber}
            onChange={e => setStudent(prevStudent => ({ ...prevStudent, secondPhoneNumber: e.target.value }))}
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
