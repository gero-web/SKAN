import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Caption(){
  
    const navigate = useNavigate();
    const isAuth = useSelector((state) => state.user.isAuth)
    const onGetDate = () => {
        navigate('/page_search');
    }
    return (
      <div className="container-caption">
        <div className="container-caption-info">
            <h1 className="caption-about">сервис по поиску публикаций о компании по его ИНН</h1>
            <p className="caption-text">
                Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
            </p>
              { isAuth && 
                    <button className="info-btn" onClick={onGetDate}> Запросить данные </button>
              }
        </div>
        <div className="caption-img">
            <img ></img>

        </div>
      </div>
    )
}

export default Caption;