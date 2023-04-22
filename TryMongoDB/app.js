const { MongoClient } = require('mongodb')

const uri = 'mongodb://127.0.0.1:27017'
const dbName = 'wpu'

const client = new MongoClient(uri,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

client.connect((error, client)=> {
    if(error){
        return console.log('koneksi gagal')
    } 

    //select database
    const db = client.db(dbName)

    //insert one data to collection mahasiswa
    db.collection('mahasiswa').insertOne({
        nama: 'waltah',
        email: 'waltah@gmail.com'
    },
    (error, result) =>{
        if(error){
            return console.log ('gagal tambah data')
        }
        console.log(result)
    }
    )

    //insert many datas
    db.collection('mahasiswa').insertMany([
        {
        nama: 'waltahh',
        email :'waltahh@gmail.com'
    },
        {
        nama: 'waltahhNew',
        email :'waltahh@gmail.com'
    },
        {
        nama: 'waltahhFinal',
        email :'waltahh@gmail.com'
    },   
],
(error, result) => {
    if(error){
        return console.log('data gagal tambah')
    }
    console.log(result)
}
)

//display all data in collection mahasiswa
console.log(db.collection('mahasiswa').find().toArray((error, result)=>{
    console.log(result)
}))

//display all data in collection mahasiswa on criteria
console.log(db.collection('mahasiswa').find({nama:'waltahh'}).toArray((error, result)=>{
        console.log(result)
    }))

// change data based on id
 const updatePromise = db.collection('mahasiswa').updateOne({
    _id: '63d3857a870ce514207a63d2',

},{
    $set:{
        nama: 'waltahdiubah',
        email: "waltahuubah@gmail.com"
    },
})
updatePromise.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})

// change data more than one, based on criteria
db.collection('mahasiswa').updateMany({
    nama: 'waltahh',
}, {
    $set : {
        nama: 'waltahDoang'
    }
})

//delete one data
db.collection('mahasiswa').deleteOne({
    _id: '63d3857a870ce514207a63d2',
})
.then((result) => {
 console.log(result)
}).catch((error) => {
 console.log(error)
})

//delete more than one data
db.collection('mahasiswa').deleteMany({
   nama: 'waltahhDoang'
})
.then((result) => {
 console.log(result)
}).catch((error) => {
 console.log(error)
})
})