import {Link} from "react-router-dom"
import "../styles/Navbar.scss"


function Navbar(){
    return (
        <div className="divflex">
            <h2>React</h2>
            <ul className="ul" >
                <li> <Link to ="/"> Home </Link> </li>
                <li> <Link to ="/contact"> Contact </Link> </li>
                <li> <Link to ="/services"> Services </Link> </li>
                <li> <Link to ="/about"> About </Link> </li>
                <li> <Link to ="/secureIndex"> Secured </Link> </li>
                <li> <Link to ="/blogs"> Blogs </Link> </li>
                
            </ul>

            <ul className="ul">
            <li> <Link to ="/signup"> Register </Link> </li>
            <li> <Link to ="/login"> Login </Link> </li>
            </ul>

        </div>
    )
}

export default Navbar