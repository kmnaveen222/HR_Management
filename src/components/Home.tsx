
import { Link } from 'react-router-dom'
import './css/Home.css'
import 'aos/dist/aos.css'


export const Home = () => {
    
    
  return (
    <div><div data-aos="fade-right">Home</div>
    <Link to={"/login"}><button >Login</button></Link>
    <Link to={"/dashboard"}><button >dashboard</button></Link>
    </div>
  )
}
