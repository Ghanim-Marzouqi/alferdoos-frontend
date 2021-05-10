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

import HTMLHeader from '../../components/info/HTMLHeader';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    padding: theme.spacing(2)
  },
  card: {
    width: '100%',
    marginTop: 10
  },
  button: {
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
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

const getSteps = () => {
  return ['البيانات الأساسية', 'بيانات المواد الدراسية', 'بيانات إضافية'];
}

const getStepContent = (step: number) => {
  switch (step) {
    case 0:
      return 'تفاصيل البيانات الأساسية';
    case 1:
      return 'تفاصيل المواد الدراسية';
    case 2:
      return 'تفاصيل البيانات الإضافية';
    default:
      return 'خطوة غير معروفة';
  }
}

const StudentRegistration: React.FC = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState<number>(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

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
                      <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
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
                          <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
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
