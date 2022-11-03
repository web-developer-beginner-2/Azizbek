let cars = [16000, 40000, 3000, 1500, 39000, 12000, 33000, 8000, 71000, 22000, 300, 18000, 13000, 9000]

let cheap = []

console.log(
   cars.filter(cheap => cheap <= 35000)
);

let number = [4, 1, 2, 5, 4, 46, 11, 9, 27, 8, 9, 0, 33]

let even = []
let odd = []

console.log(
    number.filter(odd => odd % 2)
);
console.log(
   number.filter(even => even % 3)
);



let students = ['Azamat', 'Naufal', 'Parviz', 'Amin', 'Samir', 'Daler', 'Kamron']


let name = prompt('any name')

console.log(
students.splice(name, 1)
);

console.log(students);