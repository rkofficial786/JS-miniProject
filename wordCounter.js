var strings = "Rupraj singh is a good boy and good man"

var arr= strings.split(" ");





const wordCount = arr.reduce((count, word) => {

if(count[word]){
    count[word]++ ;
}
else{
    count[word]=1 ;
}
  return count;
}, {});

console.log(wordCount);
