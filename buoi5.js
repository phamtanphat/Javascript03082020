// 18 : let var const

// + Redeclaration ( khai báo lại biến)
// let a = 10
// let a = 10
// console.log(a)

// + Hoisting (Khởi tạo)

// console.log(a)
// let a

// + Scope (Phạm vi) 

// if(true){
//     var a = 5
//     console.log(a)
// }
// console.log(a)

// for (let index = 0; index < 10; index++) {
//     console.log(index + " trong for")
// }

// console.log(index)

//19 : Function context

// const teo = {
//     name : "Nguyen Van Teo",
//     age : 20,
//     showName : function(){
//         console.log(this.name)
//     }
// }
// const coppyFun = teo.showName.bind({name : "Nguyen Van A"})
// coppyFun()

// function run(cb){
//     console.log('run...')
//     cb()
//   }
  
// const mouse = {
//     name : 'Mickey',
//     run : function() {
//         console.log(this.name + ' is running')
//     }
// }

  
// run(mouse.run.bind(mouse))

// 20 : Arrow function
const arrNums = [1,2,3,4,5]
// Cách viết bình thường
// const newArrNums = arrNums.map(function(value , index){
//     return value * 2
// })

// Cách viết arrow function
const newArrNums = arrNums.map(value => {
    return value * 2
})
console.log(newArrNums)
  