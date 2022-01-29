import { DashboardPage } from "./views/pages/dashboards/Dashboard";
import { PieChartOutlined, UserOutlined } from "@ant-design/icons";
const routers = [
  {
    path: "dashboard",
    title: "Dashboard",
    icon: <PieChartOutlined />,
    component: <DashboardPage />,
    children: [],
  },
  {
    path: "",
    title: "Student",
    icon: <UserOutlined />,
    component: "",
    children: [
      {
        path: "create-student",
        title: "Create ",
        icon: "",
        component: <div>Create Student</div>,
        children: [],
      },
      {
        path: "list-student",
        title: "List Student",
        icon: "",
        component: <div>List Student</div>,
        children: [],
      },
    ],
  },
];
export default routers;
