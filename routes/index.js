const mongoose = require('mongoose');
const list = require("./models/list")



app.get('/',(req,res)=>{
    res.redirect("/todo");
})


app.get('/todo',(req,res)=>{
    list.find({},(err,todos)=>{
        if(err)
        {
          console.log(err)
        }
        else
        {
            res.render("index",{todos:todos});
        }
    })
    
})

// New route
app.get("/todo/new",(req,res)=>{
    res.render("new");
})

// Create Route
app.post("/todo",(req,res)=>{
   list.create(req.body.text,(err,newtodo)=>{
       if(err)
       {
        res.render("new");
       }
       else
       {
           res.redirect("/todos");
       }
   })
    
})



//UPDATE ROUTE
app.put('/todo/:id',(req,res)=>{
    list.findById(req.params.id,(err,foundtodo)=>{
        if(err)
        {
         res.redirect("/todo");
        }
        else
        {
            foundtodo.completed = true;
        }
    })
})


//DELETE
app.delete('/todo/:id',(req,res)=>{
    //destroy todo
    //redirect somewhere
    list.findOneAndRemove(req.params.id,(err)=>{
        if(err)
        {
              res.redirect("/todo")
        }
        else
        {
            res.redirect("/todo")
        }
    })

})