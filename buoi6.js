// var a = {
//     name : 'AAA',
//     run : function() {
//       var run2 = () => {
//         // console.log(this.name)
//         var run3 = () => {
//             // console.log(this.name)
//             var run4 = () => {
//                 console.log(this.name)
//             }
//             run4()
//         }
//         run3()
//       }
//       run2()
//     }
// }
  
// a.run()
// var a = {
//     foo : 'bar' ,
//     run : function() {
//       setTimeout(() =>{
//         console.log(this.foo)
//       },2000)
//     }
//   }
// a.run()

//21 : Template string

// function greeting(name){
//     return 'Hi, ' + name + '!'
//   }
  
//   function greeting(name){
//     return `Hi, ${name} !`
//   }
//   console.log(greeting("Phat")

// 22 : argument

// Array like object

// function tinhTong(){
//     const newArr = Array.from(arguments)
//     return newArr.reduce((accum , current) => accum + current,0)

// }
// console.log(tinhTong(1,2,3,4,5,6,7,8,9,10))

// 23 : Default parameters
// function tinhTong(a = 0, b = 0){
//     console.log(a + b)
// }
  
// tinhTong(10)

// 24 : Call
// function showInfo(name){
//     console.log(name , this.age)
// }
// showInfo.call({age : 20} , "phat")


// 25 : Apply
// function sum(){
//     const numbers = Array.from(arguments)
//     return numbers.reduce((sum , num )=> sum + num ,this.value)
// }
// function average(){
//     const x = sum.apply({value : 0},arguments)
//     return x / arguments.length
// }
// console.log(average(1,2,3,6))
  
// 26 : Enhanced object literals
// function createObject(name , age){
//     const obj = {name, age}
//     console.log(obj)
// }
// createObject("phat",26)

// 27 : rest (Gop vao)
// function tinhTong(...nums){
//     nums.map(value => {
//         console.log(value)
//     })
// }
// tinhTong(1,2,3,4,5)

// 28 : spread (Dãn ra : như coppy)
const teo = {
    name : "Teo",
    age : 10
}
const ti = {
    address : "Quan1",
    country : {
        name : "HCM"
    }
}
const object = Object.assign(ti,{})
console.log(object)
// const a = [teo]
// const b = [ti,...a]


// console.log(b)

// a[0].name = "Nguyen Van Ti"
// console.log(b)
