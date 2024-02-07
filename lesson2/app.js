// // var d = Number(prompt(''))
// // var d2 =Number(prompt(''))
// // console.log(d + d2)
//
// //switch..case
// var amount = Number(prompt('enter amount'))
// var currency = prompt('enter currency').toUpperCase()
// var convertAmount = 0
//
// switch (currency) {
//     case 'USD':
//         convertAmount = amount / 89
//         break
//     case 'EUR':
//         convertAmount = amount / 96
//         break
//     case 'RUB':
//         convertAmount = amount / 1
//         break
//     default:
//         console.warn('INVALID CURRENCY')
// }
// console.log(convertAmount + ' ' + currency)
// //
//
// var color = 'black'.toLowerCase()
// switch(color){
//     case "green":
//         alert('иди')
//         break
//     case 'yellow':
//         alert('готовься')
//         break
//     case "red":
//         alert('cтоп')
//         break
//     default:
//         alert('введен неправильный цвет')
// }

//NaN - not a number
var ex = 'texr' / 56
console.log(typeof ex)

//120, 14
var userINN = '109092000789'
var firstNum = Number(userINN[0])
if ((firstNum === 1 || firstNum === 2 || firstNum === 0) && userINN.length === 14) {
    console.log('ok')
} else {
    console.log('error')
}

//null, undefined
var name = null
let text;
console.log(typeof text)

//object
var courseGeeks = {
    title: 'Geeks',
    foundingDate: 2018,
    address: {
        street: 'Ibraimova 103',
        building: 'Victory',
        floor: 2,
        number: null
    },
    music: undefined,
    it: true,
}
console.log(courseGeeks.address.floor)

courseGeeks.course = 'Frontend' //добавление
delete courseGeeks.music //удаление
courseGeeks['floor'] = 4 //изменение
console.log(courseGeeks)

//array - массив
// var array = [3,4,5,5,6,7,8]
// console.log(typeof array)
// console.log(array[3])
// console.log(array.length - 1)
// array[23] = 5
// console.log(array[23])
// var matrix = [
//     [1,2,3],
//     [4,5,'qwe'],
//     [7,8,9]
// ]
// console.log(matrix[2][1])

//цикл
//for
// for (var i = 0; i <= 10; i++) {
//     console.log(i)
// }

var arrayNumbers = [123, 345, 234, 22, 56, 67, 56, 55, 89, 90]
for(var i = 0; i < arrayNumbers.length; i++){
    var firstNumber = String(arrayNumbers[i])[0]
    if(firstNumber === '2' || firstNumber === '5'){
        console.log(arrayNumbers[i])
    }
}







// var i = 0
// i = i + 1
// i += 1
// i++

