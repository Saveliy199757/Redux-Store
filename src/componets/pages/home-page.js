import React from 'react';
import DataList from "../data-list";

const HomePage = () => {
    const data = [
        {
            code: 9296563,
            article: 1150012,
            name:"Кама НК-241 (КАМА 365) 175/65R14 82H M+S",
            brand:"КАМА",
            type:"Легковые летние",
            model:"НК-241",
            width:175,
            height:65,
            diametr:14,
            speed_index:"H",
            load_index:82,
            thorn:0,
            runflat:0,
            season:"Лето",
            price:1558.00,
            price_recomend_rozn:1746.00,
            picture:"https://images.yst.ru/storage/9296563.jpg",
            weight:7.70,
        },
        {
            code: 9296560,
            article: 1150012,
            name:"Кама НК-241 (КАМА 365) 175/70R13 82H M+S",
            brand:"КАМА",
            type:"Легковые летние",
            model:"НК-241",
            width:175,
            height:70,
            diametr:13,
            speed_index:"K",
            load_index:82,
            thorn:0,
            runflat:0,
            season:"Зима",
            price:1558.00,
            price_recomend_rozn:1700.00,
            picture:"https://images.yst.ru/storage/9296563.jpg",
            weight:7.75,
        }
    ];

    return (
      <div>
          <DataList data={data} />
      </div>
    );
}

export default HomePage;