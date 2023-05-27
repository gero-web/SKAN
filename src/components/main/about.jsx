import React from "react";
import Carusel from "./Carusel";
import Card from "./card";
import time from '../../images/time.svg'
import search from '../../images/search.svg'
import shield from '../../images/shield.svg'



const cards = [
    {
        'svg': time,
        'text': 'Высокая и оперативная скорость обработки заявки',
    },
    {
        'svg': search,
        'text': 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос',
    },
    {
        'svg': shield,
        'text': 'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству',
    },
    
   
]
 


const items =  cards.map( item => {
    return <Card key={item.id} card={item}></Card>
});


function About(){
     
    return (
       <div className="container-cards">
            <h1 className='caption-about'>
                ПОЧЕМУ ИМЕНО МЫ
            </h1>
            <Carusel items={items}></Carusel>
       </div>
    )
}

export default About;