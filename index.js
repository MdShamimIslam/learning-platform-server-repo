const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const courses = require('./data/courses.json');
const categories = require('./data/categories.json');

app.use(cors());

app.get('/', (req,res)=>{
    res.send('Server side is running');
})


app.get('/categories', (req,res)=>{
    res.send(categories);
})


app.get('/courses', (req,res)=>{
    res.send(courses);
})

app.get('/categories/:id', (req,res)=>{
    const id = req.params.id;
    const category_course = courses.filter( c => c.category_id === id);
    res.send(category_course);
    
})

app.get('/courses/:id', (req,res)=>{
    const id = req.params.id;
   const selected_courses = courses.find( c => c._id === id);
   res.send(selected_courses);
})


app.listen(port, ()=>{
    console.log('Server side is running on port:',port);
})