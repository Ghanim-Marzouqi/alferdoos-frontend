import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Button,
  IconButton,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  Typography
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';

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
  },
  table: {
    width: '100%'
  },
  tableHead: {
    backgroundColor: Colors.lightgrey
  },
  deleteButton: {
    margin: theme.spacing(1),
  },
}));

const SubjectInfoForm: React.FC = () => {
  const classes = useStyles();

  return (
    <form className={classes.form} noValidate>
      <Typography className={classes.heading}>تقدير علامات المواد الدراسية:</Typography>
      <Grid className={classes.section} container item spacing={1}>
        <Grid item sm={6} xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            size="small"
            fullWidth
            id="subjectANumber"
            label="عدد المواد بتقدير (أ)"
            name="subjectANumber"
            autoComplete="subjectANumber"
            autoFocus
            type="number"
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            size="small"
            fullWidth
            id="subjectBNumber"
            label="عدد المواد بتقدير (ب)"
            name="subjectBNumber"
            autoComplete="subjectBNumber"
            type="number"
          />
        </Grid>
      </Grid>
      <Typography className={classes.heading}>الأجزاء التي يحفظها الطالب:</Typography>
      <Grid className={classes.section} container item spacing={1}>
        <Grid item xs={10}>
          <FormControl className={classes.formControl} variant="outlined" size="small">
            <Select labelId="select-label" value="M" onChange={e => { }}>
              <MenuItem value="M">الأول</MenuItem>
              <MenuItem value="A">الثاني</MenuItem>
              <MenuItem value="B">الثالث</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <Button className={classes.formControl} variant="contained" color="primary">إضافة</Button>
        </Grid>
      </Grid>
      <Grid className={classes.section} container item>
        <TableContainer component={Paper}>
          <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell>الجزء</TableCell>
                <TableCell align="right">حذف</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell scope="row">الأول</TableCell>
                <TableCell align="right">
                  <IconButton aria-label="delete" className={classes.deleteButton} size="small">
                    <Delete fontSize="inherit" color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Typography className={classes.heading}>السور التي يحفظها الطالب:</Typography>
      <Grid className={classes.section} container item spacing={1}>
        <Grid item xs={10}>
          <FormControl className={classes.formControl} variant="outlined" size="small">
            <Select labelId="select-label" value="M" onChange={e => { }}>
              <MenuItem value="M">البقرة</MenuItem>
              <MenuItem value="A">آل عمران</MenuItem>
              <MenuItem value="B">النساء</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <Button className={classes.formControl} variant="contained" color="primary">إضافة</Button>
        </Grid>
      </Grid>
      <Grid container item>
        <TableContainer component={Paper}>
          <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell>السورة</TableCell>
                <TableCell align="right">حذف</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell scope="row">البقرة</TableCell>
                <TableCell align="right">
                  <IconButton aria-label="delete" className={classes.deleteButton} size="small">
                    <Delete fontSize="inherit" color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </form>
  );
}

export default SubjectInfoForm;
