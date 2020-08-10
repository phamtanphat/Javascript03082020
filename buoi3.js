// 11 - Callback function
// function nhan2(number){
//     return number * 2
// }

// function xulymang(array , callback){
//     for(var i = 0 ; i < array.length ; i++){
//         array[i] = callback(array[i])
//     }
// }

// const array = [1,2,3,4]
// xulymang(array,nhan2)
// console.log(array)

// viết các function chạy từ 1 -> 100
// function inSoChan
// function inSoLe
// function inSoChia3du1
// function inSoChinhPhuong (Lấy căn bậc 2)

// function inSoChan(){
//     for (var index = 1; index <= 100; index++) {
//         if (index % 2 === 0) {
//             console.log(index)
//         }
//     }
// }
// function inSoLe(){
//     for (var index = 1; index <= 100; index++) {
//         if (index % 2 === 1) {
//             console.log(index)
//         }
//     }
// }

// function inSoChia3Du1(){
//     for (var index = 1; index < 100; index++) {
//         if (index % 3 === 1) {
//             console.log(index)
//         }
//     }
// }

// function inSoChinhPhuong(){
//     for (var index = 1; index < 100; index++) {
//         if (Math.sqrt(index) % 1 === 0) {
//             console.log(index)
//         }
//     }
// }
// function inSoTheoDieuKien(callback){
//     for (var index = 1; index <= 100; index++) {
//         const dk = callback(index)
//         if(dk){
//             console.log(index)
//         }
//     }
// }
// inSoTheoDieuKien(function(index){
//     if(Math.sqrt(index) % 1 === 0) return true
//     return false
// })


// 12 :  Hàm map
// const arrayNums = [1,2,3,4,5]

// for (var index = 0; index < arrayNums.length; index++) {
//     arrayNums[index] = arrayNums[index] * 2
// }
// console.log(arrayNums)

// const newArrayNums = arrayNums.map(function(value , index){
//     return value * 2
// })
// console.log(newArrayNums)

// Ví dụ
// Make an array of strings of the names


Array.prototype.myMap = function(callback){
    const newArr = []
    for (var index = 0; index < this.length; index++) {
        newArr.push(callback(this[index], index))
    }
    return newArr
}

function namesOnly(arr) {
    const newArr = arr.myMap(function(person , index){
        return person.name
    })
    console.log(newArr)
}

namesOnly([
  {
    name: "Angelina Jolie",
    age: 80
  },
  {
    name: "Eric Jones",
    age: 2
  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kayne West",
    age: 16
  },
  {
    name: "Bob Ziroll",
    age: 100
  }
])
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
