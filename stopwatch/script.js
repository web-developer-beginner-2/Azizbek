let hourElement = document.querySelector('.hour')
let minuteElement = document.querySelector('.minute')
let secondElement = document.querySelector('.second')
let millisecondElement = document.querySelector('.millisecond')


let startButton = document.querySelector('.start')
let pauseButton = document.querySelector('.pause')
let stopButton = document.querySelector('.stop')

startButton.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})  


let hour = 00,
    minute = 00,
    second = 00,
    millisecond = 00,
    interval


    function startTimer() {
        millisecond++

        if (millisecond < 9) {
            millisecondElement.innerText = "0" + millisecond
        }

        if (millisecond > 9) {
            millisecondElement.innerText =  millisecond
        }
     if (millisecond > 99) {
        second++
        secondElement.innerText = "0" + second
        millisecond = 0
        millisecondElement.innerText = "0" + millisecond
     }


     if (second < 9) {
        secondElement.innerText = "0" + second
    }

    if (second > 9) {
        secondElement.innerText =  second
    }
 if (second > 59) {
    minute++
    minuteElement.innerText = "0" + minute
    second = 0
    secondElement.innerText = "0" + second
 }

 if (minute > 9) {
    minuteElement.innerText =  minute
}


if (hour > 9) {
    hourElement.innerText =  hour
}

}



startTimer()