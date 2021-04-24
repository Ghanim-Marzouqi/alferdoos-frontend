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
  EventOutlined
} from '@material-ui/icons';

// auth pages
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import ForgetPassword from '../pages/ForgetPassword';
import ResetPassword from '../pages/ResetPassword';

// admin pages
import Dashboard from '../pages/admin/Dashboard';
import RegistrationRequests from '../pages/admin/RegistrationRequests';
import Exams from '../pages/admin/Exams';
import StudentList from '../pages/admin/StudentList';
import TeacherList from '../pages/admin/TeacherList';
import GroupList from '../pages/admin/GroupList';
import Timetable from '../pages/admin/Timetable';
import AttendanceReport from '../pages/admin/AttendanceReport';
import Activities from '../pages/admin/Activities';
import Correspondences from '../pages/admin/Correspondences';
import Expenses from '../pages/admin/Expenses';
import MeetingReports from '../pages/admin/MeetingReports';
import AcademicYear from '../pages/admin/AcademicYear';
import ExamPreparation from '../pages/admin/ExamPreparation';
import MemorizationPreparation from '../pages/admin/MemorizationPreparation';
import SubjectPreparation from '../pages/admin/SubjectPreparation';
import TimetablePreparation from '../pages/admin/TimetablePreparation';

// teacher pages
import AttendanceRegistration from '../pages/teacher/AttendanceRegistration';

// parent pages
import StudentRegistration from '../pages/parent/StudentRegistration';

const authRoutes = [
  {
    title: "تسجيل الدخول",
    path: "/login",
    component: Login,
    layout: "/auth",
    icon: null
  },
  {
    title: "تسجيل جديد",
    path: "/registration",
    component: Registration,
    layout: "/auth",
    icon: null
  },
  {
    title: "نسيان كلمة المرور",
    path: "/forget-password",
    component: ForgetPassword,
    layout: "/auth",
    icon: null
  },
  {
    title: "إعادة تعيين كلمة المرور",
    path: "/reset-password",
    component: ResetPassword,
    layout: "/auth",
    icon: null
  }
];

const adminRoutes = [
  {
    title: "الرئيسية",
    path: "/dashboard",
    component: Dashboard,
    layout: "/admin",
    icon: <DashboardOutlined color="primary" />
  },
  {
    title: "الطلاب",
    path: "/students",
    layout: "/admin",
    icon: <SchoolOutlined color="primary" />,
    children: [
      {
        title: "طلبات التسجيل",
        path: "/registration-requests",
        layout: "/admin",
        icon: <AssignmentOutlined color="primary" />,
        component: RegistrationRequests,
      },
      {
        title: "الإختبارات",
        path: "/exams",
        layout: "/admin",
        icon: <DescriptionOutlined color="primary" />,
        component: Exams
      },
      {
        title: "الطلاب المسجلين",
        path: "/student-list",
        layout: "/admin",
        icon: <PeopleAltOutlined color="primary" />,
        component: StudentList
      }
    ]
  },
  {
    title: "المعلمين",
    path: "/teachers",
    layout: "/admin",
    icon: <PeopleOutlined color="primary" />,
    children: [
      {
        title: "المعلمين المسجلين",
        path: "/teacher-list",
        layout: "/admin",
        icon: <PersonOutline color="primary" />,
        component: TeacherList,
      }
    ]
  },
  {
    title: "المجموعات",
    path: "/groups",
    layout: "/admin",
    icon: <BubbleChartOutlined color="primary" />,
    children: [
      {
        title: "المجموعات المسجلة",
        path: "/group-list",
        layout: "/admin",
        icon: <ViewQuiltOutlined color="primary" />,
        component: GroupList,
      },
      {
        title: "جدول الحصص الدراسية",
        path: "/timetable",
        layout: "/admin",
        icon: <CalendarTodayOutlined color="primary" />,
        component: Timetable,
      },
      {
        title: "تقارير الحضور والإنصراف",
        path: "/attendance-report",
        layout: "/admin",
        icon: <ReceiptOutlined color="primary" />,
        component: AttendanceReport,
      },
      {
        title: "الأنشطة",
        path: "/activities",
        layout: "/admin",
        icon: <RowingOutlined color="primary" />,
        component: Activities,
      }
    ]
  },
  {
    title: "أدوات إدارية",
    path: "/tools",
    layout: "/admin",
    icon: <SquareFootOutlined color="primary" />,
    children: [
      {
        title: "المراسلات",
        path: "/correspondences",
        layout: "/admin",
        icon: <QuestionAnswerOutlined color="primary" />,
        component: Correspondences,
      },
      {
        title: "إدارة المصروفات",
        path: "/expenses",
        layout: "/admin",
        icon: <AttachMoneyOutlined color="primary" />,
        component: Expenses,
      },
      {
        title: "محاضر الإجتماعات",
        path: "/meeting-report",
        layout: "/admin",
        icon: <SubjectOutlined color="primary" />,
        component: MeetingReports,
      }
    ]
  },
  {
    title: "الإعدادات",
    path: "/settings",
    layout: "/admin",
    icon: <SettingsOutlined color="primary" />,
    children: [
      {
        title: "السنة الدراسية",
        path: "/academic-year",
        layout: "/admin",
        icon: <CalendarToday color="primary" />,
        component: AcademicYear,
      },
      {
        title: "إعداد الإختبارات",
        path: "/exam-preparation",
        layout: "/admin",
        icon: <InsertDriveFileOutlined color="primary" />,
        component: ExamPreparation,
      },
      {
        title: "إعداد المحفوظات",
        path: "/memorization-preparation",
        layout: "/admin",
        icon: <MenuBookOutlined color="primary" />,
        component: MemorizationPreparation,
      },
      {
        title: "إعداد المواد الدراسية",
        path: "/subject-preparation",
        layout: "/admin",
        icon: <BookOutlined color="primary" />,
        component: SubjectPreparation,
      },
      {
        title: "إعداد جدول الحصص",
        path: "/timetable-preparation",
        layout: "/admin",
        icon: <EventOutlined color="primary" />,
        component: TimetablePreparation,
      }
    ]
  }
];

const teacherRoutes = [
  {
    title: "تسجيل الحضور",
    path: "/attendance-registration",
    component: AttendanceRegistration,
    layout: "/teacher",
    icon: <EditOutlined color="primary" />
  }
];

const parentRoutes = [
  {
    title: "تسجيل طالب جديد",
    path: "/student-registration",
    component: StudentRegistration,
    layout: "/parent",
    icon: <EditOutlined color="primary" />
  }
];

export { authRoutes, adminRoutes, teacherRoutes, parentRoutes }