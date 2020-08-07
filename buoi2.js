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
var a = [1, 2, 4, 8, 16];
/**
 * Sử dụng vòng lặp for để hiển thị ra màn hình các phần tử của mảng a theo thứ tự ngược lại:
 * 16
 * 8
 * 4
 * 2
 * 1
 */
for (var i = a.length - 1 ; i >= 0 ; i--){
    console.log(a[i])
}

