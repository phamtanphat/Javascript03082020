// 14 : Hàm reduce
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const total = numbers.reduce(function(total , currentValue){
//     console.log(total , currentValue)
//     return total + currentValue
// },0)

// Trả về số lượng người đã vote
// function totalVotes(arr) {
//     var total =  arr.reduce(function (acc, voter) {
//       return acc += voter.voted
//     }, 0)
//     console.log(total)
// }

// var voters = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
// ];
// totalVotes(voters) // 7

// function countOccurrences(arr) {
//     return arr.reduce((total, cur) => {
//       if (total[cur]){
//           total[cur] += 1
//       }else{
//           total[cur] = 1
//       }
//       return total
//     }, {});
//   }
// console.log(countOccurrences(["a", "b", "c", "b", "a", "a"]));
// {a : 3 , b : 2 , c : 1}


//14 : Ham sort
// const arrNums = [5,4,11,1,0,10,2,20,12,22]
// // a > b
// // lon den be
// arrNums.sort(function(a , b){
//     return b - a
// })
// console.log(arrNums)
// // be den lon
// arrNums.sort(function(a , b){
//     return a - b
// })
// console.log(arrNums)
// const arrNames = ["Teo","An","Hoa","Ngoc","Hung"]
// const arrNums = [5,4,11,1,0,10,2,20,12,22]
// arrNums.sort()
// console.log(arrNums)

// 15 : declaration class

// function constructor
// function Person(name , age){
//     this.name = name;
//     this.age = age;
//     this.printName = function(){
//         console.log(name)
//     }
// }
// Person.prototype.address = null;
// Person.prototype.printAge = function(){
//     return this.age
// };

// const teo = new Person("Nguyen Van Teo",20)

// const ti = new Person("Nguyen Van Ti",22)
// console.log(ti.printAge == teo.printAge)

// 16 : class
// class Person {
//     constructor(name , age){
//         this.name = name
//         this.age = age
//     }
//     showName(){
//         console.log(this.name)
//     }
// }
// class Nhanvien extends Person{
//     constructor(name , age , address){
//         super(name ,age)
//         this.address = address
//     }
//     showName(){
//         console.log("Ten nhan vien " + this.name)
//     }
// }
// const teo = new Person("Nguyen Van Teo",20)
// const nhanviena = new Nhanvien("Nguyen Van A",20 , "Quan 1")
// nhanviena.showName()

// 17 : function scope


// function random() {
//     this.a = 10
//     const b = function(){
//         const c = function () {
//             console.log(this.a)
//         }
//         c()
//     }
//     b()
// }

const teo ={
    age : 10,
    name : "Nguyen Van Teo",
    showName : function(){
        const b = function(){
            console.log(this.name)
        }
        b()
    }
}
teo.showName()
