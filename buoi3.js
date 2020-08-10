// 11 - Callback function
function nhan2(number){
    return number * 2
}

function xulymang(array , callback){
    for(var i = 0 ; i < array.length ; i++){
        array[i] = callback(array[i])
    }
}

const array = [1,2,3,4]
xulymang(array,nhan2)
console.log(array)
