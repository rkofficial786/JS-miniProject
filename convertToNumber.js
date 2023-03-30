function convert(str){
    var num = +str
    if(isNaN(num)){
        return "invalid number"
    }

    else{
    return num
    }
}

var str = "236"

console.log(convert(str))