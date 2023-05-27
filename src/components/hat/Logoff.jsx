import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {logffAction} from '../../features/userSlice';


function Logoff(){

    const nameUser  = useSelector( (state) => state.user.nameUser);
    const profileImg = useSelector( (state) => state.user.profileImg);
    const dispatch = useDispatch();

    const logoff = (event) => {
      event.preventDefault();
      dispatch(logffAction());   
    }
    
    return (
       <div className="logooff-container">
          <div className="userInfo">
               <p className="userName">{nameUser} </p>
               <a className="userLogoff" onClick={logoff}> Выйти </a>
          </div>
          <img className="avatar"
               src={profileImg}
               style={{
               width: '6vw',
             
          }}>

          </img>
       </div>
    )
}

export default Logoff;