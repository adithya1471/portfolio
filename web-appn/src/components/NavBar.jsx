import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';
import MenuItems from './MenuItems';
const NavBar=()=>{
    return(
       <>
             <div className="nav-logo">
                <img src="Images/logo2.png" alt="Beginus" className="nav-logo-font" />
                  <ul className="nav-menu">
                   {MenuItems.map((item,index)=>{
                    return(
                        <li key={index}>
                           <Link to={item.url} className={item.cName}>{item.title}</Link>
                        </li>
                    )
                   })}
                   
                 </ul>
             </div>
            
       </>
    )
}
export default NavBar;