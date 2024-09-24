
// write a basic boiler plate code
const express = require('express');
const app = express() ;
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');


app.listen(3000);

app.use(express.json());

app.post('/todo', async function(req, res) {
    const createPayload = req.body ;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg : "You have sent the wrong inputs",
        })
        return ;
    }

    // put the todo in mongoDB
     
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false ,
    })

    res.json({
        msg : "todo created",
    })
})


app.get('/todos',async function(req, res) {
    const ALL_TODOS = await todo.find({});
    res.json({
        ALL_TODOS,
    })
})


app.put('/completed', async function(req, res) {
    const updatePayload = req.body ;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg : "You have sent the wrong inputs",
        })
        return ;
    }

    await todo.updateMany({_id : req.body.id }, {$set : {completed : true}});

    res.json({
        msg : "todo id marked as completed",
    })
})


