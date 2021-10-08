import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import './topbar.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
import { Context } from '../../context/Context';

export default function TopBar() {
   
   const { user, dispatch } = useContext(Context);

   const handleLogout = () => {
      dispatch({type:"LOGOUT"})
   }
   return (
      <div className="top">
         <div className="topLeft">
            <FacebookIcon className="topIcon"/>
            <TwitterIcon className="topIcon"/>
            <InstagramIcon className="topIcon"/>
         </div>
         <div className="topCenter">
            <ul className="topMenu">
               <li className="topMenuItem">
                  <Link className="link" to="/">Home</Link>
               </li>
               <li className="topMenuItem"><Link className="link" to="/about">About</Link></li>
               <li className="topMenuItem"><Link className="link" to="/">Contact</Link></li>
               <li className="topMenuItem"><Link className="link" to="/write">Write</Link></li>
               <li className="topMenuItem" onClick={handleLogout}>{user && "Logout"}</li>
            </ul>
         </div>
         <div className="topRight">
            {user ? (
            <Link className="link" to="/settings">
               <img
               className="topImg"
               src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
               alt=""
               />
            </Link>
             ) : (
            <ul className="topMenu">
               <li className="topMenuItem">
               <Link className="link" to="/login">
                  Login
               </Link>
               </li>
               <li className="topMenuItem">
               <Link className="link" to="/register">
                  Register
               </Link>
               </li>
            </ul>
         )}
         
         
            <SearchIcon className="searchIcon"/>
         </div>

      </div>
   )
}