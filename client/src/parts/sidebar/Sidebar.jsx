import React from 'react'
import './sidebar.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Sidebar() {
   return (
      <div className="sidebar">
         <div className="sidebarItem">
            <span className="sidebarTitle">About me</span>
            <img src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
            <h3 style={{marginTop: 10}}>Coderaulia</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam unde perferendis inventore voluptatem, delectus saepe?</p>
         </div>
         <div className="sidebarItem">
            <span className="sidebarTitle">Categories</span>
            <ul className="sidebarList">
               <li className="sidebarListItem">
                  <span className="link">Psychology </span>
               </li> 
               <li className="sidebarListItem">
                  <span className="link">Sports </span>
               </li>
               <li className="sidebarListItem">
                  <span className="link">Tech </span>
               </li>
            </ul>
         </div>
         <div className="sidebarItem">
            <span className="sidebarTitle">Find me on Social Media</span>
            <div className="sidebarSocial">
               <FacebookIcon className="socialIcon"/>
               <TwitterIcon className="socialIcon"/>
               <InstagramIcon className="socialIcon"/>
            </div>
         </div>
      </div>
   )
}
