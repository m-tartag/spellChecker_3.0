const data = require('./data');
var fs = require('fs');

console.log(data);

const words = Object.keys(data).map(value=>{return {word:value}});

console.log(words);

const json = JSON.stringify(words);

console.log(json);

fs.writeFile('data.json', json, 'utf8', (err)=>{
    if(err){
      console.log(err)
    }else{
      console.log("Conversion complete");
    }
  });