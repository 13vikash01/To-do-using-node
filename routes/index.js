const { timeStamp } = require('console');
const mongoose = require('mongoose');  
var express = require("express")
var router = express.Router();
const list = require("../models/list")



router.get('/',(req,res)=>{
    res.redirect("/todo");
})

//Post.find({}).sort({Created:-1}).exec((err,data)=>

router.get('/todo',(req,res)=>{
    list.find({}).sort({Done:1}).exec((err,todos)=>{
    // list.find({},(err,todos)=>{
        if(err)
        {
          console.log(err)
        }
        else
        {
            //res.send(todos);
            res.render("index",{todos:todos});
        }
    })
    
})


// New route
router.get("/todo/new",(req,res)=>{
    res.render("new");
})


// Create Route
router.post("/todo/new",(req,res)=>{
   list.create({text: req.body.text},(err,newtodo)=>{
       if(err)
       {
        res.render("new");
       }
       else
       {
           res.redirect("/todo");
       }
   })
    
})


//===========edit route=====================
router.get('/todo/edit/:id',(req,res)=>{
    list.findById(req.params.id,(err,foundtodo)=>{
        if(err)
        {
         res.redirect("/todo");
        }
        else
        {
            res.render("edit" , {foundtodo: foundtodo})
        }
    })
 })

//UPDATE ROUTE
router.put('/todo/edit/:id',(req,res)=>{
  
    list.findById(req.params.id,(err,foundtodo)=>{
        if(err)
        {
         res.redirect("/todo");
        }
        else
        {
         foundtodo.text = req.body.text;
         foundtodo.save((err,todo)=>{
            if(err)
            {
                res.send(err)
            }
            else{
                res.redirect("/todo");
            }
        })
        }
    })
})








//complete task route 
router.put('/todo/complete/:id',(req,res)=>{
    list.findById(req.params.id,(err,foundtodo)=>{
        if(err)
        {
         res.redirect("/todo");
        }
        else
        {
         foundtodo.Finished = Date.now();
         foundtodo.Done = true;
         foundtodo.save((err,todo)=>{
            if(err)
            {
                res.send(err)
            }
            else{
                res.redirect("/todo");
            }
        })
        }
    })
})


//DELETE
router.delete('/delete/:id',(req,res)=>{
    list.findByIdAndRemove(req.params.id,(err)=>{
        if(err)
        {
            res.send("error");
        }
        else
        {
            res.redirect("/todo");
        }
    })

})


module.exports = router;