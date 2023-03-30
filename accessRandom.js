let arr=[3,7,1,5,8,9]

function extract(arr){
    var[first,second,...last2]=arr
    let  last = last2.pop()

    return [first,second,last]
}

console.log(extract(arr))