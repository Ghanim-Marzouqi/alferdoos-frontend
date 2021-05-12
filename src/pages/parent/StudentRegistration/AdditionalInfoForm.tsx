import React, { useState, useRef } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Avatar,
  Badge,
  Fab,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from '@material-ui/core';
import { EditRounded, CloudUpload } from '@material-ui/icons';

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
};

const AdditionalInfoForm: React.FC<Props> = ({ student, setStudent }) => {
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
      } else {
        setImage(require("../../../assets/images/avatar.jpeg").default);
      }
    } else {
      setImage(require("../../../assets/images/avatar.jpeg").default);
    }
  };

  return (
    <form className={classes.form} noValidate>
      <Grid className={classes.section} container item spacing={1}>
        <Grid item sm={6} xs={12}>
          <Typography className={classes.heading}>هل سبق للطالب التعلم في مركز لحفظ القرآن الكريم؟</Typography>
          <FormControl className={classes.radioGroupContainer} component="fieldset">
            <RadioGroup row aria-label="finishedClass" name="finishedClass" value="no" onChange={() => { }}>
              <FormControlLabel value="yes" control={<Radio color="primary" />} label="نعم" />
              <FormControlLabel value="no" control={<Radio color="primary" />} label="لا" />
            </RadioGroup>
          </FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            size="small"
            fullWidth
            id="oldCenterLocation"
            label="موقع أو مكان المركز"
            name="oldCenterLocation"
            autoComplete="oldCenterLocation"
          />
          <Typography style={{ marginTop: 10 }} className={classes.heading}>ما هي المهارات التي يمتلكها الطالب؟</Typography>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            multiline
            rows={3}
            id="studentSkills"
            label="مهارات الطالب"
            name="studentSkills"
          />
          <Typography style={{ marginTop: 10 }} className={classes.heading}>الحالة الصحية للطالب؟</Typography>
          <FormControl style={{ marginBottom: -10 }} className={classes.radioGroupContainer} component="fieldset">
            <RadioGroup row aria-label="finishedClass" name="finishedClass" value="sick" onChange={() => { }}>
              <FormControlLabel value="healthy" control={<Radio color="primary" />} label="سليم" />
              <FormControlLabel value="sick" control={<Radio color="primary" />} label="مريض" />
            </RadioGroup>
          </FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            multiline
            rows={3}
            id="studentSkills"
            label="وصف الأمراض أو الأعراض"
            name="studentSkills"
          />
          <Typography style={{ marginTop: 10 }} className={classes.heading}>المرفقات</Typography>
          <div style={{ marginTop: 10 }}>
            <input
              accept="image/*"
              hidden
              id="file-upload"
              multiple
              type="file"
            />
            <label htmlFor="file-upload" className={classes.attachmentContainer}>
              <TextField
                style={{ width: '100%' }}
                variant="outlined"
                size="small"
                id="studentSkills"
                label="شهادات الطالب"
                name="studentSkills"
              />
              <Fab style={{ marginRight: 5 }} size="small" color="primary" component="span">
                <CloudUpload fontSize="small" />
              </Fab>
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
            <Avatar className={classes.avatar} alt="Travis Howard" src={image} />
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
