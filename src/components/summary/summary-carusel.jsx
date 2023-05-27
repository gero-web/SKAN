import React, { useEffect, useRef, useState } from "react";
import SummaryCard from "./sammaty-card";
import { RotatingLines } from "react-loader-spinner";
import { useSelector } from "react-redux";


function SummaryCarusel(){
    
    const [next, setNext] = useState(0);
    const data  = useSelector( (state) => state.data.datas);
  
    const [items ,setItems] = useState(null);
    const ref = useRef(null);

   
    useEffect(() => {
       
        if(data !== null){

            let lst =[];
           
            for (let index = 0; index < data.riskFactors.length; index++) {
                const obj = {
                    period: data.totalDocuments[index].date.slice(0, 10).split('-').reverse().join('.'),
                    count: data.totalDocuments[index].value,
                    ricky: data.riskFactors[index].value,
                }
                lst.push(obj);
            }
            
            setItems(lst);
        }
    }, [data])
    
    const onNextCleck = () => {
        setNext(next - ref.current.clientWidth);
    }

    const onPrevCleck = () => {
            setNext(next + ref.current.clientWidth);
    }
    
    const loader = () => {
        return (
            <RotatingLines
                strokeColor="grey"
                strokeWidth="3"
                animationDuration="0.75"
                width="46"
                visible={true}
          />
        );
    }
    
    return (
       <div>
            <div className="summary-carusel-container">
                <button className="summary-btn-carusel" onClick={onPrevCleck}>&lang;</button>
                <div className="summary-body-carusel">
                  <div className="summary-body-preview">
                        <p>Период</p>
                        <p>Всего</p>
                        <p>Риски</p>
                  </div>
                    { !data  &&
                        <div   ref={ref} className="summary-carusel-loader">
                            {loader()}
                        </div>
                    }
                    {
                        data && items &&
                        <div className="summary-body" style={{left:next + 'px'}}>
                              {items.map(item =>
                                    <SummaryCard key={item.period} period={item.period} ricky={item.ricky} count={item.count}></SummaryCard> )
                               }
                               <div ref={ref} style={{visibility:'hidden'}}>
                                    <SummaryCard></SummaryCard>
                               </div>
                        </div>
                    }

                  
                </div>
                <button className="summary-btn-carusel" onClick={onNextCleck}>&rang;</button>
            </div>
       </div>
    )
}

export default SummaryCarusel;