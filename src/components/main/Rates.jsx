import React from "react";
import RatesCards from "./RatesCards";
import lamp from '../../images/lamp.svg'
import target from '../../images/target.svg'
import laptop from '../../images/laptop.svg'

function Rates(){
     
    const items = [ 
        {
            'caption': 'Beginer',
            'logo': lamp,
            'price': '799 ₽',
            'priceCross': '1 200 ₽ ',
            'textDiscount':'или 150 ₽/мес. при рассрочке на 24 мес.',
            'description': 'Для небольшого исследования',
            'isActive':true,
            'lstUl': [
                'Безлимитная история запросов',
                'Безопасная сделка',
                'Поддержка 24/7',
            ],

            'style': {
                border:'1px solid #FFB64F',
                backgroundColor: '#FFB64F',
                color:'#000000',
            },
            'onClick': () => { alert('hi1')},
            'textBtn': 'Перейти в личный кабинет',

        },
        {
            'caption': 'Pro',
            'logo': target,
            'price': '1299 ₽',
            'priceCross': '2 600 ₽ ',
            'textDiscount':'или 279 ₽/мес. при рассрочке на 24 мес.',
            'description': 'Для HR и фрилансеров',
            'isActive':false,
            'lstUl': [
                'Все пункты тарифа Beginner',
                'Экспорт истории',
                'Рекомендации по приоритетам',
            ],

            'style': {
                border:'none',
                backgroundColor: '#7CE3E1',
                color:'#000000',
            },
            'onClick': () => { alert('hi2')},
            'textBtn': 'Подробнее',

        },
        {
            'caption': 'Business',
            'logo': laptop,
            'price': '2 379 ₽',
            'priceCross': '3 700 ₽ ',
            'textDiscount':'',
            'description': 'Для корпоративных клиентов',
            'isActive':false,
            'lstUl': [
                'Все пункты тарифа Pro',
                'Безлимитное количество запросов',
                'Приоритетная поддержка',
            ],

            'style': {
                border:'none',
                backgroundColor: '#000000',
                color:'#FFFFFF',
            },

            'onClick': () => { alert('hi')},
            'textBtn': 'Подробнее',


        }
    ]

    return (
       <div className="container-cards">
            <h1 className='caption-about'>
                наши тарифы
            </h1>
            <div className="rates-cards">
                {items.map(item => {
                    return <RatesCards key={item.caption} item={item}></RatesCards>
                })}
                
            </div>
       </div>
    )
}

export default Rates;