// let names = ['Abbos', 'Valentina', 'Odilbek', 'Shaxzod', 'Xojik', 'Emil', 'Saidbek', 'Morgenshtern', 'Alisher', 'Daler']

 
    let arr = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut au`tem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
  
            "completed": true
        },
        {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
        },
        {
            "userId": 1,
            "id": 6,
            "title": "qui ullam ratione quibusdam voluptatem quia omnis",
            "completed": false
        },
        {
            "userId": 1,
            "id": 7,
            "title": "illo expedita consequatur quia in",
            "completed": false
        },
        {
            "userId": 1,
            "id": 8,
            "title": "quo adipisci enim quam ut ab",
            "completed": true
        },
        {
            "userId": 1,
   
            "id": 9,
            "title": "molestiae perspiciatis ipsa",
            "completed": false
        },
        {
            "userId": 1,
            "id": 10,
            "title": "illo est ratione doloremque quia maiores aut",
            "completed": true
        }
    ]


    let suuuuu = {
        count: 0,
        arr: []
    }
   
    let gooooooooool = {
        count: 0,
        arr: []
    }
 


suuuuu = arr.filter(item => item.completed == true);
gooooooooool = arr.filter(item => item.completed == false);

suuuuu.count = arr.filter(item => item.completed == true);

gooooooooool.count = arr.filter(item => item.completed == false)

console.log(suuuuu);
console.log(gooooooooool);