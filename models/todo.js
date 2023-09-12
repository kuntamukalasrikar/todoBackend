const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    title: {
        type: "String",
        required: true,
    },
    description: {
        type: "String",
    },
    date:{
        type:"string",
    }
});

const Todo = mongoose.model("todo", TodoSchema);

module.exports = Todo;