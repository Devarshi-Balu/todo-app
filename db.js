/*

Todo {
 title : String ,
 description : String, 
 completed : Boolean,


}


*/

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:<db_password>@cluster0.q8t8t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/todo-app').then('connected to the database')

const todoSchema = new mongoose.Schema({
    title : String ,
    description : String, 
    completed : Boolean,
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo,
}