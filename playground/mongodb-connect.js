//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//     if(err) {
//        return console.log('Unable to connect to mongodb server');
//     }
    
//     console.log('Connected to MongoDB server');

//     // db.collection('Todos').insertOne({
//     //     text: 'Somthing to do',
//     //     completed: false,

//     // }, (err, result) => {
//     //     if (err) {
//     //         return console.log('Unable to insert todo'. err);
//     //     }

//     //     console.log(JSON.stringify(result.ops, undefined, 2));
//     // });

//      db.collection('Users').insertOne({
//         name: 'Steve',
//         age: 39,
//         location: 'Jindabyne'

//     }, (err, result) => {
//         if (err) {
//             return console.log('Unable to insert todo'. err);
//         }

//         console.log(JSON.stringify(result.ops, undefined, 2));
//         console.log(result.ops);
//     });

//     db.close();
// });