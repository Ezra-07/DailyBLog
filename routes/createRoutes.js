import express from "express";
const router=express.Router();
import storage from "../data/items.js";
let nextId=6;
function addBlog(req){
    storage.blogs.push({
        id:nextId++,
        title:req['blogTitle'],
        content:req['blogContent']
    });
}

router.get('/',(req,res)=>{
    res.render('index.ejs');
})
router.get('/create',(req,res)=>{
    res.render('index.ejs',{
        type:'create'
    });
});
router.post('/create',(req,res)=>{
    addBlog(req.body);
    res.redirect('/');
});
export default router;