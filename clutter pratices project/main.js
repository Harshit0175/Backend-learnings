
let fs = require('fs/promises')
let fsn = require('fs');
let path=require('path')

// console.log(fs);
async function readfiles(params) {
    const basepath='c:\\coding files\\backend learning\\clutter pratices project'

    const files = await fs.readdir(basepath)

    let extension = []

    for (const item of files) {
        let ext=item.split('.')[item.split('.').length-1]
        console.log(ext);
        if(ext!="js" && ext!="json" && item.split('.').length>1 )
        if(fsn.existsSync(path.join(ext)) && ext!="js" && ext!="json"){
            fsn.rename(path.join(basepath,ext),path.join(basepath,ext,item))
            //move to file to  this directory 
        }else{
            fs.mkdir(ext)
        }
        console.log(item);


    }

}
readfiles()
