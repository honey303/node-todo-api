const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((res) => {
//     console.log(res);
// });

//Todo.findOneAndRemove({query})

Todo.findByIdAndRemove('593929f3d1446088c996907a').then((todo) => {
    console.log(JSON.stringify(todo));
});