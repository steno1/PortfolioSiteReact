import "./SidebarList.css"

import React from 'react'
import profileImage from "../../Images/onuPic.jpg"

const SidebarList = ({expandSideBar}) => {
  return (
    <>
    {expandSideBar?(
         <div className="navbar-items">
         <div className="sidebar-profile-pic">
 <img src={profileImage} alt="profilepics"/>
         </div>
 
 
     </div>
    ):(
        <div>
            <p style={{background:"white"}}>icons</p>
        </div>
    )}
   
    </>
  )
}

export default SidebarList
