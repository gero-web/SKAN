import React, { useState } from "react";
import key from '../../images/key.svg';
import zamok from '../../images/zamok.svg';
import google from '../../images/google.svg';
import facebook from '../../images/facebook.svg';
import yandex from '../../images/yandex.svg';
import {  useDispatch } from "react-redux";
import { loginAction, } from "../../features/userSlice";
import {  useNavigate } from "react-router-dom";
import { getAutch } from '../../service/api/api.js'
const regPattern = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
            

function Login(){

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [valideName, setValideName] = useState(true);
    const [validePass, setValidePass] = useState(true);
    const [erro, setError] = useState(null);
    const dispatch = useDispatch();

    const callback = (errMsg) => {
        if(errMsg){
            setError(errMsg);
            return;
        }

        dispatch(loginAction({
            nameUser: name,
            isAuth: true,
        }));
        localStorage.setItem('user', JSON.stringify( {
            nameUser: name,
            isAuth: true}
        ));
        navigate('/');
      
    }


    const onLoginIn = () => {
        setError(null);
        getAutch(name, pass, callback);
    }

    const onChangeName = (event) => {
        const name = event.target.value;
        setName(name);
       
        if(name.indexOf(' ') > -1){
            if(regPattern.exec(name)){
               setValideName(true);
              
            }
            else{
                setValideName(false);
            }
        }else{
            if(name.length >= 4){
                setValideName(true);
            }
            else{
                setValideName(false);
            }
        }
    }

    const onChangePass = (event) => {
        const password = event.target.value;
        setPass(password);
        
        if(password.length >= 6){
            setValidePass(true);
        }else{
            setValidePass(false);
        }
    }


    return (
       <div className="login-container">
          <div className="login-container-preview">
            <h1>
                Для оформления подписки 
                на тариф, необходимо авторизоваться.
            </h1>
            <img src={key}></img>
          </div> 
          <div className="login-container-preview-card">
            <div className="login-container-icon">
                <img src={zamok}></img>
            </div>
            <div className="rates-container-cards" style={{border:'none'}}>
                <div className="container-tabs">
                    <button className="container-tabs-button"> Войти</button>
                    <button className="container-tabs-button" disabled={true}> Зарегистрироваться</button>
                </div>
                <div className="login-form-fields-container">
                        <div className="login-form-fields">
                            <p>Логин или номер телефона:</p>
                            <input type='text' value={name} style={{ borderColor: !valideName ? '#FF5959' : ''}} onChange={onChangeName}/>
                            {!valideName && 
                                <div className="login-form-fields-error-container">
                                    <p> Введите корректные данные</p>
                                </div>
                            }
                        </div>
                        <div className="login-form-fields">
                            <p>Пароль:</p>
                            <input type='password' value={pass}  style={{ borderColor: !validePass ? '#FF5959' : ''}} onChange={onChangePass}/>
                            {!validePass && 
                                <div className="login-form-fields-error-container">
                                    <p> Неправильный пароль</p>
                                </div>
                            }
                        </div>
                        <div className="login-form-fields">
                            {
                                erro && 
                                <div className="login-form-fields-error-container">
                                    <p> {erro}</p>
                                </div>
                            }
                        </div>
                        <div className="login-btn-container">
                            <button className="info-btn" disabled={  !(name && pass) || !(valideName && validePass)  } onClick={onLoginIn}>
                                Войти
                            </button>
                            <div className="login-reset-password">
                                <a href="">Восстановить пароль</a>
                            </div>
                            <div>
                                <p className="login-inner-social">Войти через:</p>
                                <div className="login-social-container">
                                    <button> <img src={google}></img></button>
                                    <button> <img src={facebook}></img></button>
                                    <button> <img src={yandex}></img></button>
                                </div>
                            </div>
                           
                        </div>
                        
                        
                </div>
            </div>
          </div> 
         <div className="login-keyimg-mobile">
            <img src={key}></img>
        </div>
       </div>
    )
}

export default Login;