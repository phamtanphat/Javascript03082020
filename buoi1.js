// 1 : khai báo biến 
// dynamic type
// mutable : có thể gán lại dữ liệu
// var a = "Nguyen Van A"
// a = 10
//immutable : không thể gán lại dữ liệu 
// const b = "Nguyen Van B"
// b = 10
// console.log(b)
// mo termial
//  ctrl + ~

//2 : Kiểu dữ liệu
// null : Cố tình gán là null hoặc nhận giá trị là null
// var a = null
// console.log(a)
//undefined

// Th1 : Khai báo biến mà không có giá trị
// var a
// console.log(a)

// var a = 
// console.log(typeof a)
// Th2 : Truy vấn vào 1 thuộc tính không tồn tại
// var teo = {
//     name : "Nguyen Văn Tèo",
//     age : 20
// }
// console.log(teo['address'] , teo['age'])

// 3 : Khai báo object
// var teo = {
//     name : "Nguyen Văn Tèo",
//     age : 20
// }
// console.log(teo['address'] , teo['age'])

// 4 : Khai array
// var arrayNames = ["Teo","Ti","Tuan","Hoa","Lan","Ngoc"]
// console.log(arrayNames[6])

// 5 : Arithmetic Operators
var a = 5
var b = 6

var c = ++a - --b + b++ - --b + ++a - ++a - ++b + a++
// 6 - --b + b++ - --b + ++a - ++a - ++b + a++  (a = 6 , b = 6)
// 6 - 5 + b++ - --b + ++a - ++a - ++b + a++  (a = 6 , b = 5)
// 6 - 5 + b++ - --b + ++a - ++a - ++b + a++  (a = 6 , b = 5)
// 6 - 5 + 5 - --b + ++a - ++a - ++b + a++  (a = 6 , b = 6)
// 6 - 5 + 5 - 5 + ++a - ++a - ++b + a++  (a = 6 , b = 5)
// 6 - 5 + 5 - 5 + 7 - ++a - ++b + a++  (a = 7 , b = 5)
// 6 - 5 + 5 - 5 + 7 - 8 - ++b + a++  (a = 8 , b = 5)
// 6 - 5 + 5 - 5 + 7 - 8 - 6 + 8  (a = 8 , b = 5)
// 6 - 5 - 1 +2 => 2


// ket qua ?