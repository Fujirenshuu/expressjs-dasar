const fs = require('fs');
 
const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};
path.resolve("./filesystem/notes.txt", 'notes.txt'); //katanya bisa pake ini yaudah pake ini wkwk

// fs.readFile('./filesystem/notes.txt', 'UTF-8', fileReadCallback);