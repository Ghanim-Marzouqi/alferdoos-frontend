import {
  DashboardOutlined,
  EditOutlined,
  SchoolOutlined,
  AssignmentOutlined,
  DescriptionOutlined,
  PeopleAltOutlined,
  PeopleOutlined,
  PersonOutline,
  BubbleChartOutlined,
  ViewQuiltOutlined,
  CalendarTodayOutlined,
  ReceiptOutlined,
  RowingOutlined,
  SquareFootOutlined,
  QuestionAnswerOutlined,
  AttachMoneyOutlined,
  SubjectOutlined,
  SettingsOutlined,
  CalendarToday,
  InsertDriveFileOutlined,
  MenuBookOutlined,
  BookOutlined,
  EventOutlined,
  AccountCircleOutlined,
  PrintOutlined,
  DateRangeOutlined
} from '@material-ui/icons';

// **************** AUTH PAGES *********************
import Login from '../pages/auth/Login';
import Registration from '../pages/auth/Registration';
import ForgetPassword from '../pages/auth/ForgetPassword';
import ResetPassword from '../pages/auth/ResetPassword';

// **************** ADMIN PAGES ********************
import AdminDashboard from '../pages/admin/Dashboard';
// student page list
import RegistrationRequests from '../pages/admin/students/RegistrationRequests';
import Exams from '../pages/admin/students/Exams';
import StudentList from '../pages/admin/students/StudentList';
// teacher page list
import TeacherList from '../pages/admin/teachers/TeacherList';
import TeacherSupervisionTable from '../pages/admin/teachers/TeacherSupervisionTable';
// group page list
import GroupList from '../pages/admin/groups/GroupList';
import Timetable from '../pages/admin/groups/Timetable';
import AttendanceReport from '../pages/admin/groups/AttendanceReport';
import Activities from '../pages/admin/groups/Activities';
// tools page list
import Correspondences from '../pages/admin/tools/Correspondences';
import Expenses from '../pages/admin/tools/Expenses';
import MeetingReports from '../pages/admin/tools/MeetingReports';
// reports page list
import StudentReports from '../pages/admin/reports/StudentReports';
// settings page list
import AcademicYear from '../pages/admin/settings/AcademicYear';
import ExamPreparation from '../pages/admin/settings/ExamPreparation';
import GroupPreparation from '../pages/admin/settings/GroupPreparation';
import MemorizationPreparation from '../pages/admin/settings/MemorizationPreparation';
import SubjectPreparation from '../pages/admin/settings/SubjectPreparation';
import TimetablePreparation from '../pages/admin/settings/TimetablePreparation';
import UserPermissions from '../pages/admin/settings/UserPermissions';

// ****************** TEACHER PAGES *********************
import TeacherDashboard from '../pages/teacher/Dashboard';
import AttendanceRegistration from '../pages/teacher/AttendanceRegistration';

// ****************** PARENT PAGES **********************
import StudentRegistration from '../pages/parent/StudentRegistration';

const authRoutes = [
  {
    title: "?????????? ????????????",
    path: "/login",
    component: Login,
    layout: "/auth",
    icon: null
  },
  {
    title: "?????????? ????????",
    path: "/registration",
    component: Registration,
    layout: "/auth",
    icon: null
  },
  {
    title: "?????????? ???????? ????????????",
    path: "/forget-password",
    component: ForgetPassword,
    layout: "/auth",
    icon: null
  },
  {
    title: "?????????? ?????????? ???????? ????????????",
    path: "/reset-password/:token",
    component: ResetPassword,
    layout: "/auth",
    icon: null
  }
];

const adminRoutes = [
  {
    title: "????????????????",
    path: "/dashboard",
    component: AdminDashboard,
    layout: "/admin",
    icon: <DashboardOutlined color="primary" />
  },
  {
    title: "????????????",
    path: "/students",
    layout: "/admin",
    icon: <SchoolOutlined color="primary" />,
    children: [
      {
        title: "?????????? ??????????????",
        path: "/registration-requests",
        layout: "/admin",
        icon: <AssignmentOutlined color="primary" />,
        component: RegistrationRequests,
      },
      {
        title: "????????????????????",
        path: "/exams",
        layout: "/admin",
        icon: <DescriptionOutlined color="primary" />,
        component: Exams
      },
      {
        title: "???????????? ????????????????",
        path: "/student-list",
        layout: "/admin",
        icon: <PeopleAltOutlined color="primary" />,
        component: StudentList
      }
    ]
  },
  {
    title: "????????????????",
    path: "/teachers",
    layout: "/admin",
    icon: <PeopleOutlined color="primary" />,
    children: [
      {
        title: "???????????????? ????????????????",
        path: "/teacher-list",
        layout: "/admin",
        icon: <PersonOutline color="primary" />,
        component: TeacherList,
      },
      {
        title: "???????? ?????????? ????????????????",
        path: "/teacher-supervision-table",
        layout: "/admin",
        icon: <DateRangeOutlined color="primary" />,
        component: TeacherSupervisionTable,
      }
    ]
  },
  {
    title: "??????????????????",
    path: "/groups",
    layout: "/admin",
    icon: <BubbleChartOutlined color="primary" />,
    children: [
      {
        title: "?????????????????? ??????????????",
        path: "/group-list",
        layout: "/admin",
        icon: <ViewQuiltOutlined color="primary" />,
        component: GroupList,
      },
      {
        title: "???????? ?????????? ????????????????",
        path: "/timetable",
        layout: "/admin",
        icon: <CalendarTodayOutlined color="primary" />,
        component: Timetable,
      },
      {
        title: "???????????? ???????????? ??????????????????",
        path: "/attendance-report",
        layout: "/admin",
        icon: <ReceiptOutlined color="primary" />,
        component: AttendanceReport,
      },
      {
        title: "??????????????",
        path: "/activities",
        layout: "/admin",
        icon: <RowingOutlined color="primary" />,
        component: Activities,
      }
    ]
  },
  {
    title: "?????????? ????????????",
    path: "/tools",
    layout: "/admin",
    icon: <SquareFootOutlined color="primary" />,
    children: [
      {
        title: "??????????????????",
        path: "/correspondences",
        layout: "/admin",
        icon: <QuestionAnswerOutlined color="primary" />,
        component: Correspondences,
      },
      {
        title: "?????????? ??????????????????",
        path: "/expenses",
        layout: "/admin",
        icon: <AttachMoneyOutlined color="primary" />,
        component: Expenses,
      },
      {
        title: "?????????? ????????????????????",
        path: "/meeting-report",
        layout: "/admin",
        icon: <SubjectOutlined color="primary" />,
        component: MeetingReports,
      }
    ]
  },
  {
    title: "????????????????",
    path: "/reports",
    layout: "/admin",
    icon: <PrintOutlined color="primary" />,
    children: [
      {
        title: "???????????? ????????????",
        path: "/student-report",
        layout: "/admin",
        icon: <PeopleAltOutlined color="primary" />,
        component: StudentReports,
      }
    ]
  },
  {
    title: "??????????????????",
    path: "/settings",
    layout: "/admin",
    icon: <SettingsOutlined color="primary" />,
    children: [
      {
        title: "?????????? ????????????????",
        path: "/academic-year",
        layout: "/admin",
        icon: <CalendarToday color="primary" />,
        component: AcademicYear,
      },
      {
        title: "?????????? ????????????????????",
        path: "/exam-preparation",
        layout: "/admin",
        icon: <InsertDriveFileOutlined color="primary" />,
        component: ExamPreparation,
      },
      {
        title: "?????????? ??????????????????",
        path: "/group-preparation",
        layout: "/admin",
        icon: <BubbleChartOutlined color="primary" />,
        component: GroupPreparation,
      },
      {
        title: "?????????? ??????????????????",
        path: "/memorization-preparation",
        layout: "/admin",
        icon: <MenuBookOutlined color="primary" />,
        component: MemorizationPreparation,
      },
      {
        title: "?????????? ???????????? ????????????????",
        path: "/subject-preparation",
        layout: "/admin",
        icon: <BookOutlined color="primary" />,
        component: SubjectPreparation,
      },
      {
        title: "?????????? ???????? ??????????",
        path: "/timetable-preparation",
        layout: "/admin",
        icon: <EventOutlined color="primary" />,
        component: TimetablePreparation,
      },
      {
        title: "?????????????? ????????????????????",
        path: "/user-permissions",
        layout: "/admin",
        icon: <AccountCircleOutlined color="primary" />,
        component: UserPermissions,
      }
    ]
  }
];

const teacherRoutes = [
  {
    title: "???????????? ????????????????",
    path: "/dashboard",
    component: TeacherDashboard,
    layout: "/teacher",
    icon: <DashboardOutlined color="primary" />
  },
  {
    title: "?????????? ????????????",
    path: "/attendance-registration",
    component: AttendanceRegistration,
    layout: "/teacher",
    icon: <EditOutlined color="primary" />
  }
];

const parentRoutes = [
  {
    title: "?????????? ???????? ????????",
    path: "/student-registration",
    component: StudentRegistration,
    layout: "/parent",
    icon: <EditOutlined color="primary" />
  }
];

export { authRoutes, adminRoutes, teacherRoutes, parentRoutes }