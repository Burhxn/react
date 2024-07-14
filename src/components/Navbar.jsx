import {Link} from "react-router-dom"
import "../styles/Navbar.scss"


function Navbar(){
    return (
        <div>
            <ul className="ul" >
                <li> <Link to ="/"> Home </Link> </li>
                <li> <Link to ="/contact"> Contact </Link> </li>
                <li> <Link to ="/services"> Services </Link> </li>
                <li> <Link to ="/about"> About </Link> </li>
                
            </ul>

        </div>
    )
}

export default Navbar