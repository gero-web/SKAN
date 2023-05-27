import React, { useState } from "react";
import racket from '../../images/formRacket.svg';
import racket_mobile from '../../images/raket.svg';
import validateInn from "../../service/validater/inn";
import { targetSearchEntity } from "../../service/api/api";
import { useDispatch } from "react-redux";
import {setDataAction} from '../../features/dataSlice';
import { useNavigate } from "react-router-dom";

function FormSearch(){
  
    const navigate = useNavigate();
    const [inn, setInn] = useState('');
    const [selected, setSelected] = useState('any');
    const [validateFieldInn, setValidateFieldInn] = useState(false);
    const [numberDocument, setNumberDocument] = useState(1);
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');
    const [maxP, setMaxP] = useState(true);
    const [mentionBusiness, setMentionBusiness] = useState(true);
    const [maineRole, setMaineRole] = useState(true);
    const [announcementsCalendars, setAnnouncementsCalendars] = useState(true);
    const dispatch = useDispatch();

    const errors = {
        code: 0,
        message: '',
    }

    function isValidateDate(date) {
        if(/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(date))
        {
            let currentDate = new Date().toJSON().slice(0, 10);
            if(date <= currentDate)
                 return true;
        }
        return false;
    }

    const onChangedInn = (event) => {
        const val = event.target.value;
        setInn(val);
        setValidateFieldInn(validateInn(val,errors));
    }
    
    const onSelected = (event) =>{
        const val = event.target.value;
        setSelected(val);
    }

    const onNumberDocumnt = (event) => {
        const val = event.target.value;
        setNumberDocument(val);
    }

    const onDateStart= (event) => {
        const val = event.target.value;
        if(  isValidateDate(val))
        {
           
            if(dateEnd === '')
                setDateStart(val);

            if(  dateEnd >  val){
                setDateStart(val);  
            }
        }
        else
            setDateStart('');
    }

    const onDateEnd = (event) => {
        const val = event.target.value;
        if(  isValidateDate(val))
        {
            if(dateStart === '')
                 setDateEnd(val);
            if( dateStart <  val){
                 setDateEnd(val);
            }
        }
        else
            setDateEnd('');
    }

    const onMaxP = (event) => {
        setMaxP(!Boolean(maxP));
    } 

    const onMentionBusiness = (event) => {
        setMentionBusiness(!Boolean(mentionBusiness));
    } 

    const onMaineRole = (event) => {
        setMaineRole(!Boolean(maineRole));
    } 

    const onAnnouncementsCalendars = (event) => {
        setAnnouncementsCalendars(!Boolean(announcementsCalendars));
    } 

    function callback(data){
    
        dispatch(setDataAction({
            datas:data,
        }));
        
        navigate('/summary')
    }
    const onClickSearch = () =>{
        const obj = {
          
            "issueDateInterval": {
              "startDate":  dateStart,
              "endDate": dateEnd,
            },
            "searchContext": {
              "targetSearchEntitiesContext": {
                "targetSearchEntities": [
                  {
                    "type": "company",
                    "sparkId": null,
                    "entityId": null,
                    "inn": inn,
                    "maxFullness": maxP,
                    "inBusinessNews": null
                  }
                ],
                "onlyMainRole": maineRole,
                "tonality": selected,
                "onlyWithRiskFactors": false,
                "riskFactors": {
                  "and": [],
                  "or": [],
                  "not": []
                },
                "themes": {
                  "and": [],
                  "or": [],
                  "not": []
                }
              },
              "searchEntitiesFilter": {
                "and": [],
                "or": [],
                "not": [ ]
              },
              "locationsFilter": {
                "and": [],
                "or": [ ],
                "not": [ ]
              },
              "themesFilter": {
                "and": [ ],
                "or": [],
                "not": [ ]
              }
            },
            "searchArea": {
              "includedSources": [ ],
              "excludedSources": [ ],
              "includedSourceGroups": [ ],
              "excludedSourceGroups": [  ]
            },
            "attributeFilters": {
              "excludeTechNews": true,
              "excludeAnnouncements": true,
              "excludeDigests": true
            },
            "similarMode": "duplicates",
            "limit": numberDocument,
            "sortType": "sourceInfluence",
            "sortDirectionType": "desc",
            "intervalType": "month",
            "histogramTypes": [
                "totalDocuments",
                "riskFactors"
            ]
        }

        targetSearchEntity(obj, callback, dispatch);

    }

    return (
        <div className="form-container">
            
            <div className="form-search-container">
                <div>
                    <div className="form-search-fields">
                        <p>ИНН компания <span>*</span></p>
                        <input placeholder="10 цифр" onChange={onChangedInn} value={inn} maxLength="10" required  />
                        { !validateFieldInn && <div className="fields-error-container">
                                <p>Введите корректные данные</p>    
                            </div>
                        }
                    </div>
                    <div className="form-search-fields">
                        <p>Тональность</p>
                        <select  onChange={onSelected}>
                            <option  value="any">Любая</option>
                            <option  value="positive">позитивная</option>
                            <option  value="negative">негативная</option>
                        </select>
                    </div>
                    <div className="form-search-fields">
                        <p>Количество документов в выдаче <span>*</span></p>
                        <input placeholder="От 1 до 1000" type="number" min="1" max="1000" onChange={onNumberDocumnt} value={numberDocument}  required  />
                    </div>
                    <div className="form-search-fields">
                        <p>Диапозон поиска<span>*</span></p>
                        <div className="form-search-fields-dates">
                            <input placeholder="Дата начала" value={dateStart}  required  onChange={onDateStart} type="date"    />
                            <input placeholder="Дата конца"  value={dateEnd} onChange={onDateEnd} type="date"  required  />
                          
                        </div>
                        { 
                            (!dateStart || !dateEnd) && <div className="fields-error-container">
                                    <p>Введите корректные данные</p>    
                            </div>
                        }
                    </div>
                    
                </div>
                <div>  
                <div className="form-fields-cheks-container">
                    <div>
                            <input type='checkbox' onChange={onMaxP} value={maxP} checked={maxP}/> <label>Признак максимальной полноты</label>
                    </div>
                    
                    <div>
                            <input type='checkbox' value={mentionBusiness} onChange={onMentionBusiness} checked={mentionBusiness} /> <label>Упоминания в бизнес-контексте</label>
                    </div>
                    <div>
                            <input type='checkbox'  value={maineRole} onChange={onMaineRole} checked={maineRole}/> <label>Главная роль в публикации</label>
                    </div>
                    <div>
                            <input type='checkbox' disabled /> <label>Публикации только с риск-факторами</label>
                    </div>
                    <div>
                            <input type='checkbox' disabled /> <label>Включать технические новости рынков</label>
                    </div>
                    <div>
                            <input type='checkbox' value={announcementsCalendars} onChange={onAnnouncementsCalendars} checked={announcementsCalendars} /> <label>Включать анонсы и календари</label>
                    </div>
                    <div>
                            <input type='checkbox'  disabled /> <label>Включать сводки новостей</label>
                    </div>
                        <div className="form-btn-container">

                            <button disabled={ !validateFieldInn || !dateStart ||  !dateEnd  || !numberDocument} onClick={onClickSearch} className="info-btn">
                                Поиск
                            </button>
                            <p>* Обязательные к заполнению поля</p>
                        </div>
                        
                </div>
                </div>
            
            </div>
            <div  >
                <img className="form-raket" src={racket}></img>
                <img className="form-mobile-raket" src={racket_mobile}></img>
            </div>
        
        </div>
    )
}

export default FormSearch;