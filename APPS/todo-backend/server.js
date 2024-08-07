const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://mongodb:27017/todos', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const TodoSchema = new mongoose.Schema({
    text: String,
});

const Todo = mongoose.model('Todo', TodoSchema);

app.use(bodyParser.json());

app.get('/todos', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

app.post('/todos', async (req, res) => {
    const todo = new Todo({
        text: req.body.text,
    });
    await todo.save();
    res.json(todo);
});

app.listen(4000, () => {
    console.log('Server listening on port 4000');
});
