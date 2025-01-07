import { Link } from "react-router-dom";
import loginImage from "../assets/login & register page/loginimage.png";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import "./css/Login.css";
import { useState } from "react";

export const Login = () => {

const[isvisible, setVisible]=useState(false);
  //  let Password=false;

  //  function showPassword(){
  //    Password=!Password
  //    console.log(Password)
  //  }
  //  const show=Password?<FaRegEye className="eye-icon" onClick={showPassword}/>:<FaRegEyeSlash className="eye-icon" onClick={showPassword}/>


  return (
    <>
      <div className="container">
        <img className="container-image" src={loginImage} alt="" data-aos="fade-right" data-aos-delay="400"/>
        <form action="" className="container-item">
          <div className="container-name" data-aos="fade-up"  data-aos-delay="600">WELCOME BACK !</div>
          <div className="container-name1" data-aos="fade-up"  data-aos-delay="600">Please login to your Account</div>
          <div className="data-container">
            <div className="input-container" data-aos="fade-up" data-aos-delay="400">
              <input type="text" id="email" required />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-container" data-aos="fade-up" data-aos-delay="200">
              <input type={isvisible?"text":"password"} id="password" required />
              <label htmlFor="password">Password</label>
              {isvisible==false && <span><FaRegEye className="eye-icon" onClick={()=>setVisible(true)} /></span>}
              {isvisible==true && <span><FaRegEyeSlash className="eye-icon" onClick={()=>setVisible(false)}/></span>}
              
            </div>
            <div className="forgot-password" data-aos="fade-up" data-aos-delay="100"><Link to={""} className="Fpass">Forgot Password ?</Link></div>
            <div className="login-button" data-aos="fade-up" data-aos-delay="100"><button>Login</button></div>
            <div className="create-account" data-aos="fade-up" data-aos-delay="100"><span>Don't have an account ? </span><Link to={"/signup"} className="createAccountLink">Create Account</Link></div>
          </div>


        </form>


      </div>
    </>
  );
};
