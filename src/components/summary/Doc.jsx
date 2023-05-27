import React from "react";
import { Markup } from 'react-render-markup';



function Doc({content, title, theme, name, img, date, url, wordCount}){

   
    const onClickRedirect = () => {
        window.location.replace(url);
    }
    return (
       <div className="document-container">
       
            <div className="document-container-data">
                <p>{date}</p>
                <p>{name}</p>
            </div>
            <div>
                <h2>{title}</h2>
            </div>
            {
                theme && 
                    <div className="document-theme">
                        <div>
                            <p>{theme}</p>
                        </div>
                    </div>
            }
            { img && 
            <figure className="document-privew-img">
                <img src={img} />
             </figure>
            }
            <div className="document-body">
                <div> <Markup markup={content}  />    </div>
            </div>
           
                <div className="document-footer">
                    <button className="btn-source" onClick={onClickRedirect}> Читать в источнике </button>
                    <p> <span>{wordCount}</span> слова</p>
                </div>
        </div>
       
    )
}

export default Doc;