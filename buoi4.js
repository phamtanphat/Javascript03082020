// 14 : Hàm reduce
const numbers = [1,2,3,4,5,6,7,8,9,10]
const total = numbers.reduce(function(total , currentValue){
    console.log(total , currentValue)
    return total + currentValue
},0)