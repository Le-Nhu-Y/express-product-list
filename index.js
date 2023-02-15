const express = require('express');
const path=require('path');
const app = express();
const port = 3000;

app.set('view engine','ejs');
app.set('views','./src/views');
app.use(express.static('src'))

const products=[
    {
        title:'Iphone',
        src:'public/images/1.jpg'
    },
    {
        title:'SamSung',
        src:'public/images/2.jpg'
    },
    {
        title:'Oppo',
        src:'public/images/3.jpg'
    },
    {
        title:'Xiaomi',
        src:'public/images/4.jfif'
    }
];
app.get('/',((req, res)=>{
    res.render('home',{data:products})
}));
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
});