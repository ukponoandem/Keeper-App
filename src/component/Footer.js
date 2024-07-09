import React from "react";
import "../styles/footer.css";  

function Footer(){
    const  currentyear = new Date().getFullYear()
    return(
        <div className="footer">
            <footer>copyright Ukpono dev &copy; {currentyear}<br/>
                | Site by Ukpono Andem</footer>
        </div>
    )
 
}

export default Footer

// import { Link } from "react-router-dom";
// import "../styles/Navbar.css"

// function Navbar(){
//     return(
        
//     <div className="navbar">
//     <div className="togglebutton">

//     </div>
//     <div className="links">
//         <Link to="/">Login</Link>
//         <Link to="/keeper">keeper</Link>
//         </div>
//         </div>
//     )
// }
