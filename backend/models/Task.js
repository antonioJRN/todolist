const {model, Schema } = require('mongoose');


const taskSchema = new Schema({
    description: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    
}, {
    timestamps: true
})
const Task = model('Task', taskSchema)

module.exports = Task