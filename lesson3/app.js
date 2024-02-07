// цикл for

var children = [1994, 2007, 2021, 2003, 2010, 2015, 2014, 2013, 1998, 2000, 2018, 2009, 2013, 2022, 2007]
var currentYear = 2024
var gifts = 0
//for..of
for(var child of children){
    var childAge = currentYear - child
    if(childAge >= 3 && childAge <= 11){
        gifts++
    }
}
console.log(`Gift total: ${gifts} of ${children.length}`)

print()
//for..in
var cars = {
    BMW: '7 марта 1916 года',
    Mercedes_benz: '28 июня 1926 года',
    Rolls_Royce: '10 февраля 2011 года'
}

for(var car in cars){
    var date = cars[car]
    console.log(`${car} был основан ${date}`)
    // console.log(car)
}
print()
for(var key of Object.keys(cars)){
    console.log(key)
}
console.log(Object.keys(cars))
console.log(Object.values(cars))
console.log(Object.entries(cars))

//function
function print(){
    console.log('-'.repeat(50))
}
print()

// strLog('fgd')
//function-declaration
function sayHello(){
    console.log('Hello')
}
sayHello()

//function-expression
var strLog = function(string){
    console.log(string)
}

var str = str => console.log(str)
str('text')
// strLog(prompt('fvdf'))

var doCalc = function(num1, num2){
    console.log(num1 - num2)
}
doCalc(45, 5)

//arrow-function
var getMax = (n1, n2) => {
    if(n1 > n2){
        console.log(n1)
    }else{
        console.log(n2)
    }
}
getMax(10,7)

//тернатрные операторы
var getMaxNum = (n1, n2) => console.log(n1 > n2 ? n1 : n2)
getMaxNum(2,8)

var sumArray = (array) => {
    var sum = 0
    for(var i = 0; i < array.length; i++){
        sum += array[i]
    }
   return console.log(sum)
}
sumArray([3,4,5,6,7,8,9,234567])

//методы массива
var fruits = ['banana', 'orange', 'apple']
//1 push
fruits.push('cherry')
//2 unshift
var addFruit = fruits.unshift('apple')
//3 shift
var firstFruit = fruits.shift()
//4 pop
var deleteFruit = fruits.pop()
console.log(deleteFruit)
//5
// fruits.splice(0, 2)
console.log(fruits.includes('cherry'))

//vdfvdjfvjdhvhjdfvhdfvjhbchdchjdbfhbvhddcbdhcbdhfvdfvdfvd