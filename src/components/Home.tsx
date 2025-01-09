import { Link } from "react-router-dom";
import "./css/Home.css";
import "aos/dist/aos.css";
import { IoMedalSharp } from "react-icons/io5";
import { TbLogin2 } from "react-icons/tb";
import bgimages1 from '../assets/home page/6976378_4565.jpg';
import bgimages2 from '../assets/home page/homepage-img.png';
import bgimages3 from '../assets/home page/rb_5423.png';

export const Home = () => {
  return (
    // <div><div data-aos="fade-right">Home</div>
    // <Link to={"/login"}><button >Login</button></Link>
    // <Link to={"/dashboard"}><button >dashboard</button></Link>
    // </div>

    <>
      <div className="home_page">
        <div className="home_nav">
          <div className="home_nav_1">
            <IoMedalSharp className="homepg_icon" />
            <p id="p_title">HR MANAGEMENT</p>
          </div>
          <div className="home_nav_2"></div>
          <div className="home_nav_3">
            <Link to={"/login"} className="getStart"><button
              className="home_nav_3_btn"
              data-aos="fade-right"
              data-aos-once="true"><TbLogin2 className="login_icon" /> <p>Let's start</p>
            </button></Link>
          </div>
        </div>
        <div className="home_content" id="hm_cnt1">
          <img
            src={bgimages1}
            className="logo"
            alt="Image loading"
            data-aos="fade-down"
          />
          <div data-aos="fade-left">
            “Leaders who don’t listen will eventually be surrounded by people
            who have nothing to say.”
          </div>
        </div>
        <div className="home_content" id="hm_cnt2">
          <div data-aos="fade-right">
            
            “Accepted that we all are human resources, but we are humans first
            and resources later.”
          </div>
          <img
            src={bgimages3}
            className="logo"
            alt="Image loading"
            data-aos="zoom-in"
          />
        </div>
        <div className="home_content" id="hm_cnt3">
          <img
            src={bgimages2}
            className="logo"
            alt="Image loading"
            data-aos="zoom-out-up"
          />
          <div data-aos="flip-up">
            “Human Resource isn’t a thing we do; it’s the thing that runs our
            business.”
          </div>
        </div>
      </div>
    </>
  );
};
