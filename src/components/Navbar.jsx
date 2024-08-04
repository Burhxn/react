import {Link} from "react-router-dom"
import "../styles/Navbar.scss"
import { CiDatabase } from "react-icons/ci";
import { IoIosLogIn } from "react-icons/io";


function Navbar(){
    return (
        <div className="navbar">
            <h2>React</h2>
            <ul className="ul" >
                <li> <Link to ="/"> Home </Link> </li>

                <li> <Link to ="/contact"> Contact </Link> </li>
                <li> <Link to ="/counter"> Counter </Link> </li>
                <li> <Link to ="/services"> Services </Link> </li>
                <li> <Link to ="/about"> About </Link> </li>
                <li> <Link to ="/secureIndex"> Secured </Link> </li>
                <li> <Link to ="/blogs"> Blogs </Link> </li>
                
            </ul>

            <div className="link-btn">
            <Link to="/signup">
              Register
              <CiDatabase/>
            </Link>

            <Link className="login-link" to="/login">
              Login
              <IoIosLogIn/>
            </Link>
          </div>

        </div>
    )
}

export default Navbar