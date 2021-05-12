import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  FormControl,
  IconButton,
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
import StudentDto from '../../../dtos/StudentDto';
import { CHAPTERS, SURAHS } from './Data';

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

type Props = {
  student: StudentDto;
  setStudent: React.Dispatch<React.SetStateAction<StudentDto>>;
};

const SubjectInfoForm: React.FC<Props> = ({ student, setStudent }) => {
  const classes = useStyles();
  const [selectedChapter] = useState<string>("- اختر -");
  const [selectedSurah] = useState<string>("- اختر -");

  const selectChapterChangeHandler = (chapter: string) => {
    let savedChapters = student.savedChapters;
    let found = student.savedChapters.find(c => c === chapter);

    if (!found) {
      savedChapters.push(chapter);
      setStudent(prevStudent => ({ ...prevStudent, savedChapters }));
    }
  }

  const deleteChapterButtonHandler = (chapter: string) => {
    let savedChapters = student.savedChapters.filter(c => c !== chapter);
    setStudent(prevStudent => ({ ...prevStudent, savedChapters }));
  }

  const selectSurahChangeHandler = (surah: string) => {
    let savedSurahs = student.savedSurahs;
    let found = student.savedSurahs.find(s => s === surah);

    if (!found) {
      savedSurahs.push(surah);
      setStudent(prevStudent => ({ ...prevStudent, savedSurahs }));
    }
  }

  const deleteSurahButtonHandler = (surah: string) => {
    let savedSurahs = student.savedSurahs.filter(s => s !== surah);
    setStudent(prevStudent => ({ ...prevStudent, savedSurahs }));
  }

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
            autoFocus
            label="عدد المواد بتقدير (أ)"
            type="number"
            name="subjectANumber"
            value={student.subjectANumber}
            onChange={e => setStudent(prevStudent => ({ ...prevStudent, subjectANumber: Number(e.target.value) }))}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            size="small"
            fullWidth
            label="عدد المواد بتقدير (ب)"
            type="number"
            name="subjectBNumber"
            value={student.subjectBNumber}
            onChange={e => setStudent(prevStudent => ({ ...prevStudent, subjectBNumber: Number(e.target.value) }))}
          />
        </Grid>
      </Grid>
      <Typography className={classes.heading}>الأجزاء التي يحفظها الطالب:</Typography>
      <Grid style={{ marginTop: 10 }} className={classes.section} container item spacing={1}>
        <Grid item xs={12}>
          <FormControl className={classes.formControl} variant="outlined" size="small">
            <Select labelId="select-label" value={selectedChapter} onChange={e => selectChapterChangeHandler(e.target.value as string)}>
              {CHAPTERS.map(chapter => <MenuItem key={chapter} value={chapter}>{chapter}</MenuItem>)}
            </Select>
          </FormControl>
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
              {student.savedChapters.map((chapter, i) =>
                <TableRow key={i}>
                  <TableCell scope="row">{chapter}</TableCell>
                  <TableCell align="right">
                    <IconButton aria-label="delete" className={classes.deleteButton} size="small" onClick={e => deleteChapterButtonHandler(chapter)}>
                      <Delete fontSize="inherit" color="error" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Typography className={classes.heading}>السور التي يحفظها الطالب:</Typography>
      <Grid style={{ marginTop: 10 }} className={classes.section} container item spacing={1}>
        <Grid item xs={12}>
          <FormControl className={classes.formControl} variant="outlined" size="small">
            <Select labelId="select-label" value={selectedSurah} onChange={e => selectSurahChangeHandler(e.target.value as string)}>
              {SURAHS.map((surah, i) => <MenuItem key={i} value={surah}>{surah}</MenuItem>)}
            </Select>
          </FormControl>
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
              {student.savedSurahs.map((surah, i) =>
                <TableRow key={i}>
                  <TableCell scope="row">{surah}</TableCell>
                  <TableCell align="right">
                    <IconButton aria-label="delete" className={classes.deleteButton} size="small" onClick={e => deleteSurahButtonHandler(surah)}>
                      <Delete fontSize="inherit" color="error" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </form>
  );
}

export default SubjectInfoForm;
