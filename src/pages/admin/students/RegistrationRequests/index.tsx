import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  DataGrid,
  GridColDef,
  GridValueFormatterParams,
  GridCellParams
} from '@material-ui/data-grid';
import {
  Card,
  CardContent,
  CardActions,
  Grid,
  IconButton,
  Typography
} from '@material-ui/core';
import { VisibilityOutlined, EditOutlined, DeleteOutline } from "@material-ui/icons";

import { HTMLHeader } from '../../../../components/info';
import { STUDENT_STATUS } from '../../../../config/Constants';
import StudentRegistrationRequestDto from '../../../../dtos/StudentRegistrationRequestDto';

import { DUMMY_DATA } from './Data';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    padding: theme.spacing(2)
  },
  card: {
    width: '100%',
    marginTop: 10
  }
}));

const getFullName = (firstName: string, secondName: string, thridName: string, familyName: string) => {
  return `${firstName} بن ${secondName} بن ${thridName} ${familyName}`;
}

const getRequestStatus = (params: GridValueFormatterParams) => {
  switch (params.value) {
    case STUDENT_STATUS.REVIEW:
      return "قيد المراجعة";
    case STUDENT_STATUS.EXAM:
      return "مقبول لأداء الإختبار";
    case STUDENT_STATUS.STUDY:
      return "مقبول للدراسة في المركز";
    case STUDENT_STATUS.REJECT:
      return "تم الرفض";
    case STUDENT_STATUS.WITHDRAW:
      return "تم الإنسحاب";
  }
}

const columns: GridColDef[] = [
  {
    field: 'id',
    hide: true
  },
  {
    field: 'fullName',
    headerName: 'أسم الطالب',
    sortable: false,
    width: 160
  },
  {
    field: 'createdAt',
    headerName: 'تاريخ ووقت تقديم الطلب',
    width: 150
  },
  {
    field: 'status',
    headerName: 'حالة الطلب',
    width: 110,
    valueFormatter: getRequestStatus
  },
  {
    field: 'view',
    headerName: 'إستعراض',
    renderCell: (params: GridCellParams) => <IconButton color="primary" component="span">
      <VisibilityOutlined />
    </IconButton>
  },
  {
    field: 'edit',
    headerName: 'تعديل الحالة',
    renderCell: (params: GridCellParams) => <IconButton color="primary" component="span">
      <EditOutlined />
    </IconButton>
  },
  {
    field: 'delete',
    headerName: 'حذف',
    renderCell: (params: GridCellParams) => <IconButton color="primary" component="span">
      <DeleteOutline />
    </IconButton>
  },
];

const RegistrationRequests: React.FC = () => {
  const classes = useStyles();
  const [requests,] = useState<StudentRegistrationRequestDto[]>(DUMMY_DATA);
  const [rows, setRows] = useState<{ id: number | undefined; fullname: string; createdAt: Date | undefined; status: STUDENT_STATUS; }[]>([]);

  useEffect(() => {
    let newRows = requests.map((request, i) => ({
      id: request.id,
      fullname: getFullName(request.student.firstName, request.student.secondName, request.student.thridName, request.student.familyName),
      createdAt: request.createdAt,
      status: request.status,
    }));

    setRows(newRows);
  }, [requests]);

  return (
    <>
      <HTMLHeader title="مركز الفردوس الأعلى | طلبات التسجيل" />
      <Grid className={classes.container} container>
        <Typography variant="h5" component="h1">
          طلبات التسجيل
        </Typography>
        <Card className={classes.card}>
          <CardContent>
            <DataGrid columns={columns} rows={rows} />
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Grid>
    </>
  );
}

export default RegistrationRequests;
