import React, { useEffect, useState } from "react";
import Links from './Links';
import LoginAndSigIn from './LoginAndSignIn'
import Panel from './Panel'
import Logoff from "./Logoff";
import hamburger from '../../images/hamburger.svg';
import close from '../../images/close.svg';
import { useSelector,useDispatch } from "react-redux";
import {loginAction} from '../../features/userSlice';

function Headers(){

   const dispatch = useDispatch();

   const links = [
          {
               'text': 'Главная',
               'href': '/',
          },
          {
               'text': 'Тарифы',
               'href': '',
          },
          {
               'text': 'FAQ',
               'href': '',
          },
    ]

    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [style, setStyle] = useState({
          backgroundColor: '#FFFFFF',
    });

     const [filter, setFilter] = useState( {
          filter:''
     });

    const authorised  = useSelector( (state) => state.user.isAuth);

    useEffect(() => {

    const user = JSON.parse(localStorage.getItem('token')) && JSON.parse(localStorage.getItem('user')) || {};
    dispatch(loginAction(user));

    }, [])
    
   
    
    const navExpandedOn = () => {
          setIsNavExpanded(true);
          setStyle({
               backgroundColor: '#029491',
          });
          setFilter({
               filter:' invert(0%) sepia(120%) saturate(00%) hue-rotate(120deg) brightness(220%) contrast(208%)'
          });
        
    }

    const navExpandedOff = () => {
      setIsNavExpanded(false);
      setStyle({
          backgroundColor: '#FFFFFF',
      });
      setFilter({
          filter:''
     });
    }

    return (
        <header style={style}>
          <div className="container-header" >
               <div className="logo" >
                    <img style={filter}></img>
               </div>
               {!isNavExpanded && 
                    <button className="header-menu-btn" onClick={navExpandedOn}>
                         <img src={hamburger}></img>
                    </button>
               }
                {isNavExpanded && 
                    <button className="header-menu-btn" onClick={navExpandedOff}>
                         <img src={close}></img>
                    </button>
               }
          
               <div className="menu-container">

                    <Links links={links} clssName='container-links-headers'></Links> 
                    { authorised && 
                         <Panel></Panel>
                    }
                    
                    {
                         !authorised && 
                         <LoginAndSigIn></LoginAndSigIn>
                         }
                    {
                         authorised && 
                         <Logoff></Logoff>
                    }
               </div>
          </div>
          {
               isNavExpanded && 
                    <div className="header-menu-navigation-menu" style={{display:'flex'}}>
                         <Links links={links} clssName='container-links-headers'></Links> 
                        
                         {
                              !authorised && 
                              <LoginAndSigIn></LoginAndSigIn>
                         }
                         {
                              authorised && 
                              <Logoff></Logoff>
                         }
                       
                    </div>
                   
          }

        </header>
    )
}

export default Headers;