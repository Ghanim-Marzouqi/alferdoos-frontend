import { DashboardOutlined, EditOutlined } from '@material-ui/icons';

// auth pages
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import ForgetPassword from '../pages/ForgetPassword';
import ResetPassword from '../pages/ResetPassword';

// admin pages
import Dashboard from '../pages/admin/Dashboard';

// teacher pages
import AttendanceRegistration from '../pages/teacher/AttendanceRegistration';

// parent pages
import StudentRegistration from '../pages/parent/StudentRegistration';

const authRoutes = [
  {
    path: "/login",
    component: Login,
    layout: "/auth",
    icon: null
  },
  {
    path: "/registration",
    component: Registration,
    layout: "/auth",
    icon: null
  },
  {
    path: "/forget-password",
    component: ForgetPassword,
    layout: "/auth",
    icon: null
  },
  {
    path: "/reset-password",
    component: ResetPassword,
    layout: "/auth",
    icon: null
  }
];

const adminRoutes = [
  {
    path: "/dashboard",
    component: Dashboard,
    layout: "/admin",
    icon: DashboardOutlined
  }
];

const teacherRoutes = [
  {
    path: "/attendance-registration",
    component: AttendanceRegistration,
    layout: "/teacher",
    icon: EditOutlined
  }
];

const parentRoutes = [
  {
    path: "/student-registration",
    component: StudentRegistration,
    layout: "/parent",
    icon: EditOutlined
  }
];

export { authRoutes, adminRoutes, teacherRoutes, parentRoutes }