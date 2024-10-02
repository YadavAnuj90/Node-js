
const fs  = require("fs");

//Sync....
// fs.writeFileSync("./test.txt" , "Hello World sync!");


// fs.writeFile("./test.txt" ,"Hello World Async!" , (err) => {});

// const result  = fs.readFileSync("./contacts.txt" , "utf-8");
// console.log(result);


 fs.readFile("./contacts.txt" , "utf-8" , (err , result) => {
    if(err) {
        console.log("Error" , err);
     
    } else {
        console.log("result is: " , result);
        
    }
})

