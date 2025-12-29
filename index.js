import express from "express";
import createRoutes from "./routes/createRoutes.js";
import viewRoutes from "./routes/viewRoutes.js";
import updateRoutes from "./routes/updateRoutes.js";
import deleteRoutes from "./routes/deleteRoutes.js";
import storage from "./data/items.js";
const app=express();
const port=3000;

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

//middleware
// app.js
app.use((req, res, next) => {
    res.locals.blogList = storage.blogs;
    next();
});

app.use('/',createRoutes);
app.use('/',updateRoutes);
app.use('/',deleteRoutes);
app.use('/',viewRoutes);
app.listen(port,()=>{
    console.log("server running on port: ",port);
})