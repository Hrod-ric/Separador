const fs = require ("fs")
const path = require("path");

const listar = (pasta)=>{
    var Lista = fs.readdirSync("./mm/"+pasta);
    return Lista;
}

a = listar('a')
b = listar('b')
for(i in a){
    encontrou = b.find(p=>p.split('.')[0]==a[i].split('.')[0])
    if(!encontrou){
        const currentPath = path.join(__dirname, "mm/a", a[i]);
        const destinationPath = path.join(__dirname, "mm/b", a[i]);
        fs.rename(currentPath, destinationPath, function (err) {
            if (err) {
                throw err
            } else {
                console.log("Successfully moved the file!");
            }
        });
    }
}