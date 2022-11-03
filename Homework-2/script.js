let userName = prompt('Как вас зовут ').toLowerCase().trim()

if (userName === 'alex') {
    let userPassword = +prompt('Добро пожаловать Мистер alex введите пароль')
      if (userPassword === 7777) {
        let money = +prompt('Сколько вы хотите снять')
         if (money <= 10000) {
            alert(`
                Mr Alex
                Твой баланс был 10000
                Твой баланс  ${10000 - money}
                Ты взял ${money}
            `)
        } else {
            alert('Недостаточно средств')
        }

    } else {
        alert('Не правильный  пароль ')
    }
} else {
    alert('Извините мистер ' + userName)
}

let userClub = prompt('Как вас зовут?')
let userAge  = prompt('Сколько вам лет?')
let userMoney = prompt('Сколько у вас денег?')
let userPeople = prompt('Сколько людей зайдет')

if(userClub[0] === 'A' && userAge >= 20 && userAge <= 40 && userMoney >= 100 && userPeople <= 10 ) {
    alert('Заходите');
}else {
    alert('Сейчас не время');
}


