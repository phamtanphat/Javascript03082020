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
function inSoTheoDieuKien(callback){
    for (var index = 1; index <= 100; index++) {
        const dk = callback(index)
        if(dk){
            console.log(index)
        }
    }
}
inSoTheoDieuKien(function(index){
    if(Math.sqrt(index) % 1 === 0) return true
    return false
})
