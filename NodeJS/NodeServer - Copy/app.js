const fs = require('fs')
const http = require('http')
const port = 3000
const renderHtml = (path, res) =>{
    fs.readFile( path, (err, data)=> {
        if(err){
            res.writeHead(404)
            res.writeHead('File not Found')
        }
        else{
            res.write(data)
        }
        res.end()
    })
}

http
.createServer((req, res) =>{
    res.writeHead(200,{
        'Content-Type' : 'text/html'
    })
    const url = req.url
    switch(url){
        case '/about':
            renderHtml('./about.html', res)
            break
        case '/contact':
            renderHtml('./contact.html', res)
            break
        default:
            renderHtml('./index.html', res);
            break
        
    }
})

.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})