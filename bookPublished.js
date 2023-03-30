var books = {
    "Rv sharma" : 2001 ,
 "Vk aggarwal": 2010 ,
    "s malik" : 2018 ,
    "VN narayan" : 2017
}


const result = Object.entries(books).filter(([writer,year])=>{
    return year>2010
}).map(([writer,year])=>{
    return {writer:writer.toUpperCase(),year}
})

console.log(result);