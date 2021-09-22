import React from 'react'
import './topbar.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function TopBar() {
   return (
      <div className="top">
         <div className="topLeft">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
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
         <div className="topRight">right</div>

      </div>
   )
}