import { Link } from "react-router-dom";
import "./css/Navbar.css";
import {  useEffect, useState } from "react";
import { RiTeamFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

export const Navbar = () => {

  const [activeModule, setActiveModule] = useState<string>("");

  useEffect(() => {
    // Load active module from localStorage on component mount
    const savedModule = sessionStorage.getItem("activeModule");
    if (savedModule) {
      setActiveModule(savedModule);
    }
  }, []);

  const handleModuleClick = (moduleName: string) => {
    setActiveModule(moduleName);
    sessionStorage.setItem("activeModule", moduleName); // Save active module to localStorage
  };


  return (
    <>
      <div className="nav-container">
        
        <div className="nav-container1">
            <div className="nav-title">HR Management</div>
          <ul className="nav-item">
          
          <Link to={"/dashboard/employee"}   className={`nav-link ${activeModule === "Employee" ? "active" : ""}`}
        onClick={() => handleModuleClick("Employee")}> <li className="nav-component"><RiTeamFill className="profileimg"/>Employee</li></Link>
          
          <Link to={"/dashboard/holiday"}  className={`nav-link ${activeModule === "Holiday" ? "active" : ""}`}
        onClick={() => handleModuleClick("Holiday")}><li className="nav-component"><SlCalender className="profileimg"/>Holiday</li></Link>
          
          <Link to={"/dashboard/payroll"}   className={`nav-link ${activeModule === "Payroll" ? "active" : ""}`}
        onClick={() => handleModuleClick("Payroll")}><li className="nav-component"><FaMoneyBill1Wave className="profileimg"/>Payroll</li></Link>
          
          <Link to={"/dashboard/profile"}  className={`nav-link ${activeModule === "Profile" ? "active" : ""}`}
        onClick={() => handleModuleClick("Profile")}><li className="nav-component"><CgProfile className="profileimg"/>Profile</li></Link>
          </ul>
        </div>
      </div>
    </>
  );
};
