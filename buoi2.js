// 9 : Vòng lặp
// for of
// Array
// const arrayNumbers = [5,4,2,0,1,2,3,4,5,10]
// for(var value of arrayNumbers){
//     console.log(value)
// }
// Object
// không sử dụng object khi duyệt for of

// for in
// Array
// const arrayNumbers = [5,4,2,0,1,2,3,4,5,10]
// for (const key in arrayNumbers) {
//     console.log(key)
// }
// Object
// const teo = {
//     name : "Nguyen Van Teo",
//     age : 10,
//     1: 20
// }
// for (const key in teo) {
//     console.log(typeof key)
// }

// Ví dụ
// var a = [1, 2, 4, 8, 16];
/**
 * Sử dụng vòng lặp for để hiển thị ra màn hình các phần tử của mảng a theo thứ tự ngược lại:
 * 16
 * 8
 * 4
 * 2
 * 1
 */
// for (var i = a.length - 1 ; i >= 0 ; i--){
//     console.log(a[i])
// }

/**
 * Sử dụng vòng lặp for...in để in ra tất cả các key trong object sau, in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */

// var apartment = {
//     bedroom: {
//       area: 20,
//       bed: {
//         type: 'twin-bed',
//         price: 100
//       }
//     }
//   };
  
// function getkey(object){
//     for (const key in object) {
//         console.log(key)
//         for(const keyBedRomm in object[key]){
//             console.log(keyBedRomm)
//             for(const keyBed in object[key][keyBedRomm]){
//             console.log(keyBed)
//             }
//         }
//     }
// }
  
// function getkey(object){
//     for (const key in object) {
//         console.log(key)
//         if(typeof object[key] === "object" ){
//             getkey(object[key])
//         }
//     }
// }
//   getkey(apartment)
  
  /**
   * Kết quả mong muốn:
   * bedroom
   * area
   * bed
   * type
   * price
   * Chú ý: không cần hiển thị ra đúng thứ tự như trên
   */

  
// 10 : Array method
const numbers = [5,1,2,3,4]
// Thêm phần tử ở cuối
// numbers.push(10)
// Xóa phần tử ở cuối
// numbers.pop()
// Thêm phần tử ở đầu 
// numbers.unshift(10)
// Xóa phần tử ở đầu
// numbers.shift()
// Xóa ở giữa
// numbers.splice(1,2)
// Thêm ở giữa
numbers.splice(-1,0,10)
console.log(numbers)
