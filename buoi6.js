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
var a = {
    foo : 'bar' ,
    run : function() {
      setTimeout(() =>{
        console.log(this.foo)
      },2000)
    }
  }
a.run()
  
  