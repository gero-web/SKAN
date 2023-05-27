import React, { useEffect, useRef, useState } from "react";
import Doc from './Doc';
import SummaryCarusel from "./summary-carusel";
import target from '../../images/previewTarget.svg'
import { useSelector } from "react-redux";
import { getDocuments } from "../../service/api/api";



function Summary(){
    
    const idDocument  = useSelector( (state) => state.data.idDocuments);
    const [offset, setOffset] = useState(0);
    const [disabledBtn, setDisabledBtn] = useState(false)
    const [documents, setDocuments] = useState(null);

    const onLoader = () => {
       
        if( idDocument && offset + 10 < idDocument.length)
        {
          
            const obj = {
                'ids': []
            }
           
            for (const iter of idDocument.slice(2 + offset,  offset + 10)) {
                    obj.ids.push(iter.encodedId);
            }
            setOffset(offset + 10);
            getDocuments(obj, callback);
            
        }else{
            setDisabledBtn(true);
        }
       
    }

  
    const getTheme = (attributes) => {
        if(attributes.isTechNews)
            return 'технические новости';

        if(attributes.isAnnouncement )
            return 'анонсы и события';

        if(attributes.isDigest )
            return 'сводки новостей';
        
        return null;

    }

    const getImg = (content) =>{
        const arr  =  content.match(/src\s*=\s*['\"]([^'\"]*?)['\"][^>]*?/) ;
        const img = ( arr && arr[0].split('=')[1].replaceAll('"','') ) || null;
        return img;
    }

    const callback = (documents) =>{
        const lst = []
        for (const iter of documents) {
            const obj = {
                'theme': getTheme(iter.ok.attributes),
                'name':iter.ok.source.name,
                'title':iter.ok.title.text,
                'date': iter.ok.issueDate.slice(0, 10).split('-').reverse().join('.'),
                'url':iter.ok.url,
                'content':iter.ok.content.markup,
                'wordCount':iter.ok.attributes.wordCount,
                'img':  getImg( iter.ok.content.markup) ,
            }
            lst.push(obj);
        }

        setDocuments(lst);
    }
    useEffect(() => {
        if (idDocument !== null) {

           const obj = {
                'ids': []
            }
           
           for (const iter of idDocument.slice(0, 2 )) {
                obj.ids.push(iter.encodedId);
           }

           getDocuments(obj, callback);

        }
      
    }, [idDocument])
    
   
    
    return (
        <div className="summary-container">
            <div className="summary-preview-container">
                <div className="summary-preview">
                    <h1>Ищем. Скоро будут результаты</h1>
                    <p>Поиск может занять некоторое время, просим сохранять терпение.</p>
                </div>
                <div className="summary-img-preview">
                    <img src={target}></img>
                </div>
            </div>
            <div>
                <SummaryCarusel></SummaryCarusel>
                
            </div>
                    
                <div className="summary-doc-container">
                    {
                        documents && documents.map(item => {
                            return  <Doc key={item.title} img={item.img} content={item.content} title={item.title} theme={item.theme} name={item.name} date={item.date} url={item.url} wordCount={item.wordCount}>
                            </Doc>
                        })
                        }
                 
            </div>
            <div className="summary-button-loader">
                <button onClick={onLoader} disabled={disabledBtn} className="info-btn">Показать больше</button>
            </div>
        </div>
    )
}

export default Summary;