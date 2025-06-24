import fs from 'fs/promises';
let a=await fs.readFile('output2.txt')
console.log(a.toString());
let b=await fs.appendFile('output2.txt','\n\n\n hello world');


//    const fs=require('fs');
//   console.log(fs)

// //   console.log('starting')
// //   fs.writeFileSync('output.txt','hello world');
// //   console.log("successful")
//   console.log('starting')
//   fs.writeFile('output2.txt','hello world',()=>{
// //   console.log('successful')
// fs.readFile('output2.txt',(err,data)=>{
//     console.log(err,data.toString())
// })
//  fs.appendFile('output2.txt','hhehehehe',(e,d)=>{
//         console.log(d);
        
//     })


//   });
//     console.log('ending')

   