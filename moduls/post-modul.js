const {Schema, model} = require('mongoose');

const PostShema = new Schema({
    title:{type: String, unique: true, required: true},
    author:{type: String, required: true},
    data:{type: Date},
    description:{type: String},
    url: {type: String, unique: true}
})

module.exports = model('Post', PostShema);