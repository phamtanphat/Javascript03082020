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

