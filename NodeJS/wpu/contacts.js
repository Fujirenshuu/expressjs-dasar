const { reject } = require('assert')
const fs = require('fs')
const chalk = require('chalk')
const validator = require('validator')
const { resolve } = require('path')
// Create folder data if not exist

const dirPath = './data'
if(!fs.existsSync(dirPath)){
fs.mkdirSync(dirPath)
}

// Create file contacts.json if not exist
const dataPath = './data/contacts.json'
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]', 'utf-8')
}


const loadContact = () => {
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8')
    const contacts = JSON.parse(fileBuffer)
    return contacts
}

const saveContact = (nama, email, hp) => {
    const contact = { nama, email, hp }
    const contacts = loadContact()

    // check duplication
    const duplikat = contacts.find((contact) => contact.nama === nama)
    if(duplikat){
        console.log(chalk.red.inverse.bold("Contact sudah terdaftar, Silahkan gunakan nama lain"))
        return false
    }

    // check email
    if(email){
        if(!validator.isEmail(email)){
            console.log(chalk.red.inverse.bold("Email tidak valid"))
            return false
        }
    }
    
    // check no handphone
    if(!validator.isMobilePhone(hp, 'id-ID')){
        console.log(chalk.red.inverse.bold("Nomor Hp tidak valid"))
        return false
    }

    contacts.push(contact)

        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
    
            console.log(chalk.green.inverse.bold("Terima kasih sudah memasukan data."))
}



const listContact = () =>{
    const contacts = loadContact()

    console.log(chalk.blue.inverse.bold("Daftar Contacts."))

    contacts.forEach((contact, i) =>  {
        console.log(`${i + 1}. ${contact.nama} - ${contact.noHp} `)
    });
}

const detailContact= (nama) =>{

const contacts = loadContact()
const contact = contacts.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase())

if(!contact){
    console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan`))
    return false
    }

    console.log(chalk.blue.inverse.bold(contact.nama))
    console.log(contact.noHp)
    if(contact.email){
        console.log(contact.email)
    }
    
}

const deleteContact = (nama) => {

    const contacts = loadContact()
    const newContacts = contacts.filter(
        (contact) => contact.nama.toLowerCase() !== nama.toLowerCase())
    
    if(contacts.length === newContacts.length){
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan`))
        return false
    }

    
    fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts))
    
    console.log(chalk.green.inverse.bold(`${nama} sukses dihapus`))
}

module.exports = {saveContact, listContact, detailContact, deleteContact }