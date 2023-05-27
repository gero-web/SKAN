import React from "react";
import FormSearch from "./formSearch";
import dockument from '../../images/document.svg';
function PageSearch(){
  
    
    return (
        <div className="page-search-container">
            <div className="page-search-text">
                <h2>Найдите необходимые данные в пару кликов.</h2>
                <p>Задайте параметры поиска.</p>
                <img className="page-search-document-mobile" src={dockument}></img>
                <p>Чем больше заполните, тем точнее поиск</p>
            </div>
            
            <FormSearch></FormSearch>
        </div>
    )
}

export default PageSearch;