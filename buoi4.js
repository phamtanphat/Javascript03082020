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

function countOccurrences(arr) {
    return arr.reduce((total, cur) => {
      if (total[cur]){
          total[cur] += 1
      }else{
          total[cur] = 1
      }
      return total
    }, {});
  }
console.log(countOccurrences(["a", "b", "c", "b", "a", "a"]));
// {a : 3 , b : 2 , c : 1}
