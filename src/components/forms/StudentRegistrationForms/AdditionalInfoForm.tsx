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
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography
} from '@material-ui/core';
import { EditRounded } from '@material-ui/icons';

import Colors from '../../../config/Colors';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    padding: theme.spacing(2)
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
  },
  radioGroupContainer: {
    marginTop: 10,
    marginBottom: 10
  },
}));

const AdditionalInfoForm: React.FC = () => {
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
      <Typography className={classes.heading}>هل سبق للطالب التعلم في مركز لحفظ القرآن الكريم؟</Typography>
      <Grid className={classes.section} container item>
        <FormControl className={classes.radioGroupContainer} component="fieldset">
          <RadioGroup row aria-label="finishedClass" name="finishedClass" value="no" onChange={() => { }}>
            <FormControlLabel value="yes" control={<Radio color="primary" />} label="نعم" />
            <FormControlLabel value="no" control={<Radio color="primary" />} label="لا" />
          </RadioGroup>
        </FormControl>
      </Grid>
    </form>
  );
}

export default AdditionalInfoForm;
