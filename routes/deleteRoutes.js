import express from "express";
const router=express.Router();
import storage from "../data/items.js";
router.get('/delete',(req,res)=>{
    res.render('index.ejs',{
        type:'delete'
    });
});
router.get('/delete/:id', (req, res) => {
    const blog = storage.blogs.find(b => b.id == req.params.id);
    res.render('index.ejs',{
        type:'delete',
        selectedBlog:blog
    })
});
router.post('/delete/:id', (req, res) => {
    const index = storage.blogs.findIndex(b => b.id == req.params.id);
    if (index !== -1) {
        storage.blogs.splice(index, 1);
    } else {
        res.status(404).send("Blog not found");
    }
    res.redirect('/');
});

export default router;