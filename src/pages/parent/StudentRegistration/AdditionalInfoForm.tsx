import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Avatar,
  Badge,
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from '@material-ui/core';
import { EditRounded, AttachFile } from '@material-ui/icons';

import Colors from '../../../config/Colors';
import StudentDto from '../../../dtos/StudentDto';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    padding: theme.spacing(2)
  },
  button: {
    margin: theme.spacing(1),
  },
  title: {
    padding: theme.spacing(1)
  },
  heading: {
    fontWeight: "bold",
    color: Colors.primary
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  section: {
    marginBottom: 10
  },
  card: {
    width: '100%'
  },
  avatar: {
    width: 250,
    height: 250
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
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(4)
  },
  infoImage: {
    border: '#119076 1px solid'
  },
  errorImage: {
    border: 'red 1px solid'
  },
  radioGroupContainer: {
    marginTop: 0
  },
  attachmentContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
}));

type Props = {
  student: StudentDto;
  setStudent: React.Dispatch<React.SetStateAction<StudentDto>>;
  errors: { error: string; errorMessage: string; }[];
  setErrors: React.Dispatch<React.SetStateAction<{ error: string; errorMessage: string; }[]>>;
  showErrorMessage: (field: string) => string;
};

const AdditionalInfoForm: React.FC<Props> = ({ student, setStudent, errors, setErrors, showErrorMessage }) => {
  const classes = useStyles();
  const imageRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string>(require("../../../assets/images/avatar.jpeg").default);

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
        setStudent(prevStudent => ({ ...prevStudent, studentImage: file }));
        setErrors(prevErrors => prevErrors.filter(err => err.error !== "studentImage"));
      } else {
        setImage(require("../../../assets/images/avatar.jpeg").default);
      }
    } else {
      setImage(require("../../../assets/images/avatar.jpeg").default);
    }
  };

  const attachmentsChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null && typeof event.target.files !== "undefined") {
      const attachments = Array.from(event.target.files).map(file => file);
      console.log(attachments);
      if (attachments.length > 0) {
        setStudent(prevStudent => ({ ...prevStudent, certificates: attachments }));
        setErrors(prevErrors => prevErrors.filter(err => err.error !== "certificates"));
      }
    }
  }

  const getAttachments = (attachments: File[]) => {
    const filenames = attachments.map(attachment => attachment.name);
    return filenames.join(",");
  }

  return (
    <form className={classes.form} noValidate>
      <Grid className={classes.section} container item spacing={1}>
        <Grid item sm={6} xs={12}>
          <Typography className={classes.heading}>هل سبق للطالب التعلم في مركز لحفظ القرآن الكريم؟</Typography>
          <FormControl className={classes.radioGroupContainer} component="fieldset">
            <RadioGroup row aria-label="isLearntInQuranCenter" name="isLearntInQuranCenter" value={student.isLearntInQuranCenter} onChange={e => setStudent(prevStudent => ({ ...prevStudent, isLearntInQuranCenter: JSON.parse(e.target.value as string) }))}>
              <FormControlLabel value={true} control={<Radio color="primary" />} label="نعم" />
              <FormControlLabel value={false} control={<Radio color="primary" />} label="لا" />
            </RadioGroup>
          </FormControl>
          {student.isLearntInQuranCenter &&
            <TextField
              variant="outlined"
              margin="normal"
              size="small"
              fullWidth
              hidden
              label="موقع أو مكان المركز"
              name="quranCenterLocation"
              value={student.quranCenterLocation}
              error={errors.some(err => err.error === "quranCenterLocation")}
              helperText={showErrorMessage("quranCenterLocation")}
              onChange={e => {
                setStudent(prevStudent => ({ ...prevStudent, quranCenterLocation: e.target.value as string }));
                setErrors(prevErrors => prevErrors.filter(err => err.error !== "quranCenterLocation"));
              }}
            />
          }
          <Typography style={{ marginTop: 10 }} className={classes.heading}>ما هي المهارات التي يمتلكها الطالب؟</Typography>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            multiline
            rows={3}
            label="مهارات الطالب (إختياري)"
            name="skills"
            value={student.skills}
            onChange={e => setStudent(prevStudent => ({ ...prevStudent, skills: e.target.value as string }))}
          />
          <Typography style={{ marginTop: 10 }} className={classes.heading}>الحالة الصحية للطالب؟</Typography>
          <FormControl style={{ marginBottom: -10 }} className={classes.radioGroupContainer} component="fieldset">
            <RadioGroup row aria-label="isHealthy" name="isHealthy" value={student.isHealthy} onChange={e => setStudent(prevStudent => ({ ...prevStudent, isHealthy: JSON.parse(e.target.value as string) }))}>
              <FormControlLabel value={true} control={<Radio color="primary" />} label="سليم" />
              <FormControlLabel value={false} control={<Radio color="primary" />} label="مريض" />
            </RadioGroup>
          </FormControl>
          {!student.isHealthy &&
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              multiline
              rows={3}
              label="وصف الأمراض أو الأعراض"
              name="healthIssues"
              value={student.healthIssues}
              error={errors.some(err => err.error === "healthIssues")}
              helperText={showErrorMessage("healthIssues")}
              onChange={e => {
                setStudent(prevStudent => ({ ...prevStudent, healthIssues: e.target.value as string }));
                setErrors(prevErrors => prevErrors.filter(err => err.error !== "healthIssues"));
              }}
            />
          }
          <Typography style={{ marginTop: 10 }} className={classes.heading}>المرفقات</Typography>
          <div style={{ marginTop: 10 }}>
            <input
              accept="application/pdf"
              hidden
              id="file-upload"
              multiple
              type="file"
              onChange={attachmentsChangeHandler}
            />
            <label htmlFor="file-upload" className={classes.attachmentContainer}>
              <TextField
                style={{ width: '100%' }}
                variant="outlined"
                size="small"
                dir="ltr"
                label="شهادات الطالب"
                name="certificates"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachFile color="primary" />
                    </InputAdornment>
                  )
                }}
                value={getAttachments(student.certificates)}
                error={errors.some(err => err.error === "certificates")}
                helperText={showErrorMessage("certificates")}
              />
            </label>
          </div>
        </Grid>
        <Grid className={classes.imageContainer} container item sm={6} xs={12} direction="column">
          <Badge
            overlap="circle"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            badgeContent={<EditRounded className={classes.avatarBadge} color="secondary" />}
            onClick={imageFileClickHandler}
          >
            <Avatar className={errors.some(err => err.error === "studentImage") ? clsx(classes.avatar, classes.errorImage) : clsx(classes.avatar, classes.infoImage)} alt="Student Image" src={image} />
          </Badge>
          <input
            className={classes.imageFile}
            ref={imageRef}
            type="file"
            accept="image/*"
            name="image"
            id="image"
            onChange={imageFileChangeHandler} />
          <Typography style={{ marginTop: 10 }} className={classes.heading}>صورة الطالب</Typography>
        </Grid>
      </Grid>
    </form>
  );
}

export default AdditionalInfoForm;
