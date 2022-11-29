let arr = [
    {
        id: 1,
        name: 'AZIZs_KABLUK',
        budget: 500000,
        tax: 34,
        expensesPerYear: [
            {
                for: 'design',
                total: 60000
            },
            {
                for: 'material',
                total: 70000
            },
            {
                for: 'place',
                total: 120000
            },
        ]
    },
    {
        id: 2,
        name: 'KAMERON_CINEMA',
        budget: 600000,
        tax: 5,
        expensesPerYear: [
            {
                for: 'camera',
                total: 90000
            },
            {
                for: 'actors',
                total: 140000
            },
            {
                for: 'electricity',
                total: 50000
            },
        ]
    },
    {
        id: 3,
        name: 'ISKANDARs_ZOO',
        budget: 450000,
        tax: 12,
        expensesPerYear: [
            {
                for: 'animals',
                total: 100000
            },
            {
                for: 'cloune',
                total: 15000
            },
            {
                for: 'food',
                total: 70000
            },
        ]
    },
    {
        id: 4,
        name: 'AMINs_SOOOO',
        budget: 800000,
        tax: 4,
        expensesPerYear: [
            {
                for: 'house',
                total: 200000
            },
            {
                for: 'cars',
                total: 150000
            },
            {
                for: 'family',
                total: 300000
            },
        ]
    },
    {
        id: 5,
        name: 'KELLIS_park',
        budget: 500000,
        tax: 15,
        expensesPerYear: [
            {
                for: 'park',
                total: 180000
            },
            {
                for: 'cars',
                total: 130000
            },
            {
                for: 'work',
                total: 270000
            },
        ]
    },
]


let success = []
let unsuccess = []
let taxes = []
let allTaxes = 0

for (let i of arr) {
    i.totalExpenses = 0
    for(let item of i.expensesPerYear){
        i.totalExpenses += item.total
    }
    let tax = i.budget / 100 * 70
    if(tax > i.totalExpenses){
        success.push(i)
    }else {
        unsuccess.push(i)
        taxes.push(i.tax)
    }

    let tax2 = i.budget / 100 * i.tax
    allTaxes += tax2
}
console.log(allTaxes);

let min = Math.min(...taxes)
let max = Math.max(...taxes)

let objMax = {}
let objMin = {}

arr.filter((i) => {
    if(i.tax === max) objMax = i
    else if (i.tax === min) objMin = i
})

console.table(arr);
console.log(success);
console.log(unsuccess);

