const arr = [2,6,1,7,23,5,8,2,5,4]

const result = arr.reduce((remove,elem)=>{
    if(remove[elem]){
        remove[elem]--
    }
    else {
        remove[elem] = 1;
      }
      return remove;
    
},{})

console.log(result);

const values= Object.keys(result).map((elem)=>{return elem})
console.log(values);