import { useState } from "react";
import registerImage from "../assets/login & register page/registerimage.png";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./css/signup.css";


export const Signup = () => {
const[passwordisvisible, setPasswordVisible]=useState(false);
const[cpasswordisvisible, setCpasswordVisible]=useState(false);




  return (
    <>
    <div className="container">
    <img className="container-image" src={registerImage} alt="" data-aos="fade-right" data-aos-delay="400"/>
        <form action="" className="container-item">
          <div className="container-name" data-aos="fade-up"  data-aos-delay="600">SIGN UP</div>
          <div className="container-name1" data-aos="fade-up"  data-aos-delay="600">Please Create your Account</div>

          {/* -------------input fields start----------------- */}
          <div className="data-container">
          <div className="input-container" data-aos="fade-up" data-aos-delay="400">
              <input type="text" id="name" required />
              <label htmlFor="name">Full Name</label>
            </div>
            <div className="input-container" data-aos="fade-up" data-aos-delay="400">
              <input type="text" id="email" required />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-container" data-aos="fade-up" data-aos-delay="200">
              <input type={passwordisvisible?"text":"password"} id="password" required />
              <label htmlFor="password">Password</label>
              {passwordisvisible==false && <span><FaRegEye className="eye-icon" onClick={()=>setPasswordVisible(true)} /></span>}
              {passwordisvisible==true && <span><FaRegEyeSlash className="eye-icon" onClick={()=>setPasswordVisible(false)}/></span>}
            </div>
            <div className="input-container" data-aos="fade-up" data-aos-delay="200">
              <input type={cpasswordisvisible?"text":"password"} id="confirmPassword" required />
              <label htmlFor="confirmPassword">Confirm Password</label>
              {cpasswordisvisible==false && <span><FaRegEye className="eye-icon" onClick={()=>setCpasswordVisible(true)} /></span>}
              {cpasswordisvisible==true && <span><FaRegEyeSlash className="eye-icon" onClick={()=>setCpasswordVisible(false)}/></span>}
            </div>
                      {/* -------------input fields end----------------- */}

            <div className="forgot-password" data-aos="fade-up" data-aos-delay="100"><Link to={""} className="Fpass">Forgot Password ?</Link></div>
            <div className="login-button" data-aos="fade-up" data-aos-delay="100"><button>Register</button></div>
            <div className="create-account" /*data-aos="fade-up"*/ data-aos-delay="100"><span>Existing User ? </span><Link to={"/login"} className="createAccountLink">Login</Link></div>
         
          </div>

        </form>

      </div>
    </>
  )
}
