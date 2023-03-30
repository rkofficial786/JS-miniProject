function biodata(bio){
    var Name = bio.Name
    var Age = bio.Age
if(Name  == null || Name== undefined || Age==null || Age==undefined ){
    return "invalid"
}
else{
    return {Name , Age}
}

}






console.log(biodata(["mithun" , "25"]));