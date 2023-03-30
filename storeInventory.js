var inventory = {
    biscuit : 50 ,
    mango: 40 ,
    milk : 45 ,
    Sugar : 60
}

const result =Object.entries(inventory).map(([key ,value]) =>{
    return {key , value:value*80}
})

console.log(result);