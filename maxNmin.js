let arr=[3,8,1,5,9,4]

function maxmin(arr){
    var max= Math.max(...arr);
    var min= Math.min(...arr);

    return{min,max}

}

var result=maxmin(arr);
console.log(result);