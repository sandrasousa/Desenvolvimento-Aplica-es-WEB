var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer((req, res)=>{
    var myURL = url.parse(req.url, true)
    res.writeHead(200, {'Content-Type': 'text/html'})
    if (myURL.pathname == '/index' || myURL.pathname == '/'){
        myURL.pathname = "/"
        fs.readFile('website/index.html', (erro, dados)=>{
            if(!erro)
                res.write(dados)
            else
                res.write('<p><b>ERRO: </b>'+ erro + '</p>')
            res.end()
        })
    } else if (myURL.pathname.includes('arqelem')){
        var elem = myURL.pathname.split("/")
        fs.readFile('website/html/'+ elem[2] + '.html', (erro, dados)=>{
            if(!erro){
                res.write(dados)
            }
            else
                res.write('<p><b>ERRO: </b>'+ erro + '</p>')
            res.end()
        })
    }
}).listen(4005, ()=>{
    console.log("O servidor à escuta na porta 4005 ...")
})