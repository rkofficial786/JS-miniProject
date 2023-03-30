let arr= [3,6,1,7,9,2]

function check(arr){
    return function checker(n){
        return arr.includes(n)
    }
}

const checknumber = check(arr);

console.log(checknumber(89))