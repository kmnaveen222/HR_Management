import { Link, useNavigate } from "react-router-dom";
import loginImage from "../assets/login & register page/loginimage.png";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import "./css/Login.css";
import { useState } from "react";
import axios from "axios";

interface EmployeeFormData {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const navigate=useNavigate();
  const [isvisible, setVisible] = useState(false);
  const [errormessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState<EmployeeFormData>({
    email: "",
    password: "",
  });

 

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formsubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // let email;
    const response=await axios.get("http://localhost:3000/users")
      // .then(res => email=res.data)
      const data = response.data.find(
        (emp: { email: string,password: string }) => emp.email.toLowerCase() === formData.email.toLowerCase() && emp.password ===formData.password
        
      );
     
      if(data){
        navigate('/dashboard/employee');
      }
      else{
        setErrorMessage("Please provide correct email id or password")
      }
      
  };

  return (
    <>
      <div className="container">
        <img
          className="container-image"
          src={loginImage}
          alt=""
          data-aos="fade-right"
          data-aos-delay="400"
        />
        <form action="" className="container-item" onSubmit={formsubmit}>
          <div
            className="container-name"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            WELCOME BACK !
          </div>
          <div
            className="container-name1"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Please login to your Account
          </div>
                      <div className="error">{errormessage.length>0 &&<div className="errormess"> {errormessage}</div>}</div>

          <div className="data-container">
            <div
              className="input-container"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <input
                type="text"
                id="email"
                required
                name="email"
                onChange={handleChange}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div
              className="input-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <input
                type={isvisible ? "text" : "password"}
                id="password"
                name="password"
                onChange={handleChange}
                required
              />
              <label htmlFor="password">Password</label>
              {isvisible == false && (
                <span>
                  <FaRegEye
                    className="eye-icon"
                    onClick={() => setVisible(true)}
                  />
                </span>
              )}
              {isvisible == true && (
                <span>
                  <FaRegEyeSlash
                    className="eye-icon"
                    onClick={() => setVisible(false)}
                  />
                </span>
              )}
            </div>
            <div
              className="forgot-password"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Link to={""} className="Fpass">
                Forgot Password ?
              </Link>
            </div>
            {/* <Link to={"/dashboard"}> */}
              <div
                className="login-button"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <button>Login</button>
              </div>
            {/* </Link> */}
            <div
              className="create-account"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span>Don't have an account ? </span>
              <Link to={"/signup"} className="createAccountLink">
                Create Account
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
