let car = {
    mark: prompt('car mark'),
    color: prompt('color'),
    engine: prompt('engine force'),
    year: prompt('year'),
    hasHatch: confirm('hatch'),
    isBox: confirm('automat or mechanic'),
    price: prompt('price')
}


let cars = [
    {
        mark: "toyota",
        color: "white",
        engine: "v8",
        year: 2021,
        hasHatch: true,
        isBox: true,
        price: 60000,
        img: "https://motor.ru/thumb/908x0/filters:quality(75):no_upscale()/imgs/2021/01/29/09/4483637/d7be1e5c6dc4ab68c0a16b4e15ffd31364b68e7f.jpg"
    },
    {
        mark: "skoda",
        color: "green",
        engine: "1.8",
        year: 2019,
        hasHatch: false,
        isBox: true,
        price: 30000,
        img: "https://a.d-cd.net/dEAAAgHAnuA-960.jpg"
    },

    {
        mark: "Daewoo",
        color: "green",
        engine: "0.8",
        year: 2000,
        hasHatch: false,
        isBox: false,
        price: 3500,
        img: "https://img.zr.ru/_ah/img/4JLvvYfr6gcI33uH0STwLA=s800"
    },

    {
        mark: "Mersedes",
        color: "black",
        engine: "S63",
        year: 2017,
        hasHatch: true,
        isBox: true,
        price: 80000,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Mercedes-Benz_S_500_%28W_222%29_%E2%80%93_Frontansicht%2C_6._April_2014%2C_Neuss.jpg/800px-Mercedes-Benz_S_500_%28W_222%29_%E2%80%93_Frontansicht%2C_6._April_2014%2C_Neuss.jpg"
    },
    {
        mark: "malibu 2",
        color: "black",
        engine: "Facelift 1.5 LT",
        year: 2019,
        hasHatch: true,
        isBox: true,
        price: 24900,
        img: "https://car24.uz/wp-content/uploads/2019/11/photo5238192627768210177.jpg"
    },
    {
        mark: "toyota",
        color: "white",
        engine: "v8",
        year: 2021,
        hasHatch: true,
        isBox: true,
        price: 60000,
        img: "https://motor.ru/thumb/908x0/filters:quality(75):no_upscale()/imgs/2021/01/29/09/4483637/d7be1e5c6dc4ab68c0a16b4e15ffd31364b68e7f.jpg"
    },
    {
        mark: "spark",
        color: "green",
        engine: "M300",
        year: 2018,
        hasHatch: false,
        isBox: true,
        price: 10050,
        img: "https://quto.ru/service-imgs/4c/03/ca/a7/4c03caa704002.jpeg"
    }
]


let filtered = cars.filter(i => {
    if (i.mark === car.mark 
        // || i.color === car.color || i.engine === car.engine || i.year === car.year || i.hasHatch === car.hasHatch || i.isBox === car.isBox || i.price === car.price  ) {
        return i
    }
})
console.log(filtered);


