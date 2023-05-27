import React, { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { getInfo } from "../../service/api/api";


function Panel(){
  
    const [useCompany, setUseCompany] = useState(null);
    const [limitCompany, setLimitCompany] = useState(null);
    const [isEmpty, setisEmpty] = useState(true);

    const callback = (data) => {
        setUseCompany(data.eventFiltersInfo.usedCompanyCount);
        setLimitCompany(data.eventFiltersInfo.companyLimit);
        if(useCompany === null && limitCompany === null ){
            setisEmpty(false);
        }
    }

    useEffect(() => {
        getInfo(callback);
        
    }, []);
     


    const loader = () => {
        return (
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#D9D9D9','#D9D9D9','#D9D9D9','#D9D9D9','#D9D9D9']}
                />
        );
    }

    return (
    <>
     <div className="card-header">
       { isEmpty &&  loader() }
       { !isEmpty  &&  
           <>
                <div className="left-div">
                <p> Использовано компаний </p>
                <span className="inUseCompany">{useCompany}</span>
                </div> 
                <div className="left-div">
                    <p> Лимит по компоаниям</p>
                    <span className="limitCompany">{limitCompany}</span>
                </div>
            </>
        }
        </div>
    </>
    
    )
}

export default Panel;