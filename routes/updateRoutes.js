import express from "express";
const router=express.Router();
import storage from "../data/items.js";
router.get('/update',(req,res)=>{
    res.render('index.ejs',{
        type:'update'
    });
});
router.get('/update/:id', (req, res) => {
    const blog = storage.blogs.find(b => b.id == req.params.id);
    if (!blog) return res.status(404).send("Not found");
    res.render('index.ejs',{
        type:'update',
        selectedBlog:blog
    })
});
router.post('/update/:id', (req, res) => {
    const blog = storage.blogs.find(b => b.id == req.params.id);
    if (!blog) return res.status(404).send("Not found");

    blog.title = req.body.title;
    blog.content = req.body.content;

    res.redirect('/');
});

export default router;