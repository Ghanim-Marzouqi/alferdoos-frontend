import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
  Hidden,
  Paper,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography
} from '@material-ui/core';

import { HTMLHeader } from '../../../components/info';
import MainInfoForm from './MainInfoForm';
import SubjectInfoForm from './SubjectInfoForm';
import AdditionalInfoForm from './AdditionalInfoForm';
import StudentDto from '../../../dtos/StudentDto';
import { INITIAL_STUDENT_DATA } from './Data';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    padding: theme.spacing(2)
  },
  card: {
    width: '100%',
    marginTop: 10,
    paddingBottom: 10
  },
  button: {
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

const StudentRegistration: React.FC = () => {
  const classes = useStyles();
  const steps = ['البيانات الأساسية', 'بيانات المواد الدراسية', 'بيانات إضافية'];
  const [activeStep, setActiveStep] = useState<number>(0);
  const [student, setStudent] = useState<StudentDto>(INITIAL_STUDENT_DATA);
  const [errors, setErrors] = useState<string[]>([]);

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <MainInfoForm student={student} setStudent={setStudent} errors={errors} setErrors={setErrors} />;
      case 1:
        return <SubjectInfoForm student={student} setStudent={setStudent} errors={errors} setErrors={setErrors} />;
      case 2:
        return <AdditionalInfoForm student={student} setStudent={setStudent} errors={errors} setErrors={setErrors} />;
      default:
        return <Typography>خطوة غير معروفة</Typography>;
    }
  }

  const handleNext = () => {
    if (isFormValid()) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    if (activeStep === steps.length - 1 && isFormValid()) {
      submitForm();
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const isFormValid = (): boolean => {
    let status = true;

    if (activeStep === 0 && student.firstName === "") {
      setErrors(prevErrors => [...prevErrors, "firstName"]);
      status = false;
    }

    if (activeStep === 0 && student.secondName === "") {
      setErrors(prevErrors => [...prevErrors, "secondName"]);
      status = false;
    }

    if (activeStep === 0 && student.thridName === "") {
      setErrors(prevErrors => [...prevErrors, "thridName"]);
      status = false;
    }

    if (activeStep === 0 && student.familyName === "") {
      setErrors(prevErrors => [...prevErrors, "familyName"]);
      status = false;
    }

    if (activeStep === 0 && student.firstPhoneNumber === "") {
      setErrors(prevErrors => [...prevErrors, "firstPhoneNumber"]);
      status = false;
    }

    if (activeStep === 0 && student.firstPhoneNumber.length !== 8) {
      setErrors(prevErrors => [...prevErrors, "firstPhoneNumber"]);
      status = false;
    }

    if (activeStep === 0 && (student.firstPhoneNumber.substr(0, 1) !== "7" && student.firstPhoneNumber.substr(0, 1) !== "9")) {
      setErrors(prevErrors => [...prevErrors, "firstPhoneNumber"]);
      status = false;
    }

    if (activeStep === 0 && student.secondPhoneNumber !== "" && student.secondPhoneNumber.length !== 8) {
      setErrors(prevErrors => [...prevErrors, "secondPhoneNumber"]);
      status = false;
    }

    if (activeStep === 0 && student.secondPhoneNumber !== "" && (student.secondPhoneNumber.substr(0, 1) !== "7" && student.secondPhoneNumber.substr(0, 1) !== "9")) {
      setErrors(prevErrors => [...prevErrors, "secondPhoneNumber"]);
      status = false;
    }

    if (activeStep === 2 && student.isLearntInQuranCenter && student.quranCenterLocation === "") {
      setErrors(prevErrors => [...prevErrors, "quranCenterLocation"]);
      status = false;
    }

    if (activeStep === 2 && !student.isHealthy && student.healthIssues === "") {
      setErrors(prevErrors => [...prevErrors, "healthIssues"]);
      status = false;
    }

    if (activeStep === 2 && student.certificates.length < 1) {
      setErrors(prevErrors => [...prevErrors, "certificates"]);
      status = false;
    }

    if (activeStep === 2 && student.studentImage.name === "") {
      setErrors(prevErrors => [...prevErrors, "studentImage"]);
      status = false;
    }

    return status;
  }

  const submitForm = () => {
    console.log("student", student);
  }

  return (
    <>
      <HTMLHeader title="مركز الفردوس الأعلى | طلب تسجيل طالب جديد" />
      <Grid className={classes.container} container direction="column">
        <Typography variant="h5" component="h1">
          طلب تسجيل طالب جديد
        </Typography>
        <Hidden xsDown implementation="css">
          <Grid item>
            <Grid container spacing={1}>
              <Card className={classes.card}>
                <CardContent>
                  <Stepper alternativeLabel activeStep={activeStep}>
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                  {activeStep === steps.length ? (
                    <div>
                      <Typography className={classes.instructions}>
                        تم الإنتهاء من تقديم الطلب! ستم مراجعة طلبك والتواصل معك عما قريب.
                      </Typography>
                    </div>
                  ) : (
                    <div>
                      {getStepContent(activeStep)}
                    </div>
                  )}
                </CardContent>
                <CardActions>
                  {activeStep !== steps.length ?
                    <>
                      <Button className={classes.button} disabled={activeStep === 0} onClick={handleBack}>
                        رجوع
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'حفظ' : 'التالي'}
                      </Button>
                    </> : null
                  }
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden smUp implementation="css">
          <Grid item>
            <Grid container spacing={1}>
              <Card className={classes.card}>
                <CardContent>
                  <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((label, index) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                          {getStepContent(activeStep)}
                          <div className={classes.actionsContainer}>
                            <div>
                              <Button
                                className={classes.button}
                                disabled={activeStep === 0}
                                size="small"
                                onClick={handleBack}
                              >
                                رجوع
                              </Button>
                              <Button
                                className={classes.button}
                                color="primary"
                                variant="contained"
                                size="small"
                                onClick={handleNext}
                              >
                                {activeStep === steps.length - 1 ? 'حفظ' : 'التالي'}
                              </Button>
                            </div>
                          </div>
                        </StepContent>
                      </Step>
                    ))}
                  </Stepper>
                  {activeStep === steps.length && (
                    <Paper square elevation={0} className={classes.resetContainer}>
                      <Typography>تم الإنتهاء من تقديم الطلب! ستم مراجعة طلبك والتواصل معك عما قريب.</Typography>
                    </Paper>
                  )}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
    </>
  );
}

export default StudentRegistration;
