let cars = [16000, 40000, 3000, 1500, 390000, 12000, 333000, 8000, 714000, 22000, 300, 180000, 13000, 9000]

let cheap = []

console.log(
   cars.filter(cheap => cheap <= 35000)
);

let arr = [4, 1, 2, 5, 4, 46, 11, 9, 27, 8, 33, 0, 9]

let even = []
let odd = []

console.log(
    arr.filter(odd => odd % 2)
);
console.log(
   arr.filter(even => even % 3)
);



let students = ['Azamat', 'Naufal', 'Parviz', 'Amin', 'Samir', 'Daler', 'Kamron']


let name = prompt('any name')

console.log(
students.splice(name, 1)
);

console.log(students);