import React from "react";
import { useNavigate } from "react-router-dom";


function LoginAndSigIn(){
  
    const navigate = useNavigate();
    const rederectClick = (event) => {
        navigate("/login");
    }

     return (
        <div className="container-header-loginInAndSignIn">
            <a className="headers-sigIn" href=""> Зарегистрироваться</a>
            <div className="vl"></div>
            <button onClick={rederectClick}> Войти </button>
        </div>
    )
}

export default LoginAndSigIn;