import { createBrowserRouter } from "react-router-dom";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { Signup } from "../components/signup";
import { Employee_details } from "../components/Employee_details";
import { Holidays } from "../components/Holidays";
import { Payroll } from "../components/Payroll";
import { Profile } from "../components/Profile";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <Employee_details />,
   
  },{
    path: "/dashboard/employee",
    element: <Employee_details />,
   
  },{
    path: "/dashboard/holiday",
    element: <Holidays />,
   
  },{
    path: "/dashboard/payroll",
    element: <Payroll />,
   
  },{
    path: "/dashboard/profile",
    element: <Profile />,
   
  },
  
 
]);
