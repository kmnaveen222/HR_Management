import { Link } from "react-router-dom";
import "./css/Navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        
        <div className="nav-container1">
            <div className="nav-title">HR Management</div>
          <ul className="nav-item">
          <Link to={"/dashboard/employee"}  className="nav-link"><li className="nav-component">Employee</li></Link>
          <Link to={"/dashboard/holiday"}  className="nav-link"><li className="nav-component">Holiday</li></Link>
          <Link to={"/dashboard/payroll"}  className="nav-link"><li className="nav-component">Payroll</li></Link>
          <Link to={"/dashboard/profile"}  className="nav-link"><li className="nav-component">Profile</li></Link>
          </ul>
        </div>
      </div>
    </>
  );
};
