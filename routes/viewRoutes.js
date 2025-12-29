import express from "express";
import storage from "../data/items.js";
const router=express.Router();
router.get('/:id',(req,res)=>{
    const id = req.params.id;
    if (!/^\d+$/.test(id)) {
        return res.status(404).end();
    }
    const blog = storage.blogs.find(b => b.id == req.params.id);
    if (!blog) {
        return res.status(404).send("Not found");
    }
    res.render('index.ejs', { selectedItem: blog });
});
export default router;