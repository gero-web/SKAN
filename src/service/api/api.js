import axios from 'axios';
import { setidDocumentAction } from '../../features/dataSlice';


const baseURL = `https://gateway.scan-interfax.ru/api/v1/`
const headers = {
    "Content-Type": "application/json",
    'Accept': 'application/json',
  };

export function getAutch(login, pass, callback){
    const config = {
        headers : headers,
    }
    axios.post(baseURL + 'account/login', {
        'login': login,
        'password':pass,
    },config).then(res => {
        if(res.status === 200){
            const token = JSON.stringify(res.data);
            localStorage.setItem('token', token);
            callback(null);
        }
         
    }).catch( e => {
        if(e.response)
             callback(e.response.data.message);
        
    }

    );
}



export function getInfo(callback){
    const token =  JSON.parse(localStorage.getItem('token'));
    const config = {
        headers: {
                  ...headers,
                 'Authorization': `Bearer ${token.accessToken}`
                 },
    }
    axios.get(baseURL + 'account/info', config).then(res=>{
        const data = res.data;
        callback(data);
    }).catch(e=> console.error(e));
 
}


export function targetSearchEntity(obj,callback, dispatch){
    const token =  JSON.parse(localStorage.getItem('token'));
    const config = {
        headers: {
                  ...headers,
                 'Authorization': `Bearer ${token.accessToken}`
                 },
    }
    axios.post(baseURL + 'objectsearch/histograms', obj,config).then(res=>{
        const data = res.data;
        const objData = {
            "totalDocuments":data.data[0].data,
            "riskFactors": data.data[1].data, 
        }
        callback(objData);
        objectsearch(obj, dispatch);
    }).catch(e=> console.error(e));
 
}

export function objectsearch(obj,dispatch){
    const token =  JSON.parse(localStorage.getItem('token'));
    const config = {
        headers: {
                  ...headers,
                 'Authorization': `Bearer ${token.accessToken}`
                 },
    }
    axios.post(baseURL + 'objectsearch', obj,config).then(res=>{
        const data = res.data.items;
        dispatch(setidDocumentAction({
            idDocuments:data,
        }));
       
    }).catch(e=> console.error(e));
}

export function getDocuments(obj, callback){
    const token =  JSON.parse(localStorage.getItem('token'));
    const config = {
        headers: {
                  ...headers,
                 'Authorization': `Bearer ${token.accessToken}`
                 },
    }
    axios.post(baseURL + 'documents', obj, config).then(res=>{
        const data = res.data;
        callback(data);
       
    }).catch(e=> console.error(e));
}













