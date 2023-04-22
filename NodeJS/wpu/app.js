const { argv } = require('process');
const yargs = require('yargs');
const contacts = require('./contacts');


yargs.command({
command: 'add',
describe:'Menambahkan kontak baru',
builder:{
    nama :{
        describe: "nama lengkap",
        demandOption:true,
        type: "string",
    },
    email :{
        describe: "email",
        demandOption:false,
        type: "string",
    },
    noHp :{
        describe: "nomor handphone",
        demandOption:true,
        type: "string",
    },
},
handler(argv){
    contacts.saveContact(argv.nama, argv.email, argv.noHp)
    }
})
.demandCommand()


// show all name contacts

yargs.command({
    command: 'list',
    describe:'Menampilkan semua nama dan no hp',
    handler(){
        contacts.listContact()
    }
})


// show detail contacts
yargs.command({
    command: 'detail',
    describe:'Menampilkan detail sebuah contact berdasarkan nama ',
    builder:{
        nama :{
            describe: "Nama lengkap",
            demandOption:true,
            type: "string",
        },
    },
    handler(argv){
        contacts.detailContact(argv.nama)
    }
})

// delete contacts
yargs.command({
    command: 'delete',
    describe:'Menghapus sebuah kontak berdasarkan nama ',
    builder:{
        nama :{
            describe: "Nama lengkap",
            demandOption:true,
            type: "string",
        },
    },
    handler(argv){
        contacts.deleteContact(argv.nama)
    }
})


yargs.parse()
