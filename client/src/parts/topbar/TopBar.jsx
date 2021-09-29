import React from 'react'
import './topbar.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';

export default function TopBar() {
   return (
      <div className="top">
         <div className="topLeft">
            <FacebookIcon className="topIcon"/>
            <TwitterIcon className="topIcon"/>
            <InstagramIcon className="topIcon"/>
         </div>
         <div className="topCenter">
            <ul className="topMenu">
               <li className="topMenuItem">Home</li>
               <li className="topMenuItem">About</li>
               <li className="topMenuItem">Contact</li>
               <li className="topMenuItem">Write now!</li>
               <li className="topMenuItem">Logout</li>
            </ul>
         </div>
         <div className="topRight">
            <img className="topImg" src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt=""/>
            <SearchIcon className="searchIcon"/>
         </div>

      </div>
   )
}