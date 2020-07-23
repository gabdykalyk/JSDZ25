// TASK1
let arr = ['first', 'second', 'third', 'fourth']
let div = document.querySelector('.arr')
arr.forEach((i) => {
    let newDiv = document.createElement('div')
    newDiv.innerHTML = `${i} <br>`
    div.append(newDiv)
})

// TASK2
let num = [2, 3, 4, 5, 6]
let sqr = num.map((i) => {
    let newDiv = document.createElement('div')
    newDiv.innerHTML = `${i ** 2} <br>`
    div.append(newDiv)
})

// TASK3
let newNum = [-10, -5, -2, 5, 10, 20, 45]
let neg = newNum.filter((i) => {
    return i < 0
})

console.log(neg)

let even = newNum.filter((i) => {
    return i % 2 == 0
})

console.log(even)

let str = ['Monday', 'one', 'apple', 'orange', 'go', 'call']
let moreThanFive = str.filter((i) => {
    return i.length > 5
})

console.log(moreThanFive)

function negCount() {
    let negCount = newNum.filter((i) => {
        return i < 0
    })
    return negCount.length
}

console.log(negCount())

// TASK4
function pos() {
    let pos = newNum.every((i) => {
        return i > 0
    })

    if (pos) {
        return "Все числа больше 0"
    } else {
        return "Есть отрицательные числа"
    }
}

console.log(pos())

function negExist() {
    let neg = newNum.some((i) => {
        return i < 0
    })

    if (neg) {
        return "Есть отрицательные числа"
    } else {
        return "Все числа положительные"
    }
}

console.log(negExist())

// TASK5
let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = newArr.reduce((acc, next) => {
    return acc + next
})

console.log(sum)

let newArray = [1, 2, 3, 0, 4, 5, 6]
let answer = 0
let zeroStop = newArray.reduce((acc, next) => {
    if (next == 0) {
        answer = acc;
    } else {
        return acc + next;
    }
})

console.log(answer)
