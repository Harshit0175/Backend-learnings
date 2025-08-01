const fs=require('fs');

// fs.writeFile('output.txt', 'Hello, World!',()=>{
//     console.log('file written successfully');
// })

// fs.appendFile('output.txt', 'hows your day?',()=>{
//     console.log('file appended successfully');
// })
// fs.rename('output.txt','hello.txt', ()=>{
//     console.log('file renamed successfully');
// })
// fs.copyFile('hello.txt','./copy/copy.txt', ()=>{
//     console.log('file copied successfully');
// })
// fs.unlink('hello.txt',()=>{
//     console.log('file deleted successfully');
// })
// fs.rmdir('./copy',{ recursive: true },(err)=>{
//    if(err) console.log('err deleted', err);
//    else console.log(' directory deleted successfully');

fs.mkdir('./code',()=>{
    console.log('directory created successfully');
})