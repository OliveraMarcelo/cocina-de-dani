const express = require('express');
const app = express();
const path = require('path');


/*Server Funcionando*/
app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor funcionando puerto 3000');
});

const folderPublic = path.resolve(__dirname,'./public') 
app.use(express.static(folderPublic));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/index.html'))
})
app.get('/acercade',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/about.html'))
})

app.get('/contacto',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/contacto.html'))
})
app.get('/receta',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/receta.html'))
})

