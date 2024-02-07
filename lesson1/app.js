// console.log('hello')

//переменные
var name = 'Aidana'
console.log(name)
//camelCase
var nameAndSurname = "Aidana Bekova"
console.log(nameAndSurname)

//типы данных
// 1)string
var text = 'qwerTy'
console.log(typeof text)
var date = '31.01.2024'
console.log(typeof Number(date))

console.log(text.toUpperCase())
console.log(text.toLowerCase())
console.log(text.length)
console.log(text.repeat(34))
console.log('Сегодняшняя дата -' + date) //конкатенация

//2)number
var number = 56
console.log(typeof number.toString())

console.log('Средний возраст группы 35-1 -> ' + (23 + 18 + 18 + 15 + 17 + 19 + 18 + 24 + 22) / 9)
//*, -,
var number1 = 6
var number2 = 2
console.log(number1 ** number2)
console.log(number1 % number2)

//3) boolean - true, false
console.log(2 === 2) //строгое равенство

// //логически операторы &&(и), ||(или)
//
// var userSkills = prompt("Введите ваш стаж в сфере разработки") //65
// //условные кнострукции if, else..if, else
// if (userSkills <= 1) { //false
//     alert('Ваш уровень - Junior')
// } else if (userSkills > 1 && userSkills <= 5) { //true
//     alert('Ваш уровень - Middle')
// } else if (userSkills > 5) { //true
//     alert('Ваш уровень - Senior. Вы Бог в программировании')
// } else {
//     console.error('Произошла ошибка, повторите попытку')
// }

var login = prompt('Enter login')
var password = prompt('Enter password')
var login2 = prompt('login')
var password2 = prompt('password')
if(login === login2 && password === password2 ){
    alert('Ваша авторизация прошла успешна!')
}else{
    alert('Произoшла ошибка')
}












