//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
       return console.log('Unable to connect to mongodb server');
    }
    
    console.log('Connected to MongoDB server');
    
    // db.collection('Users').find({
    //     name: 'Steve'
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Todos').find().count().then((count) => {
        console.log(`Users ${count}`);
     }, (err) => {
        console.log('Unable to fetch user', err);
    });

    // db.collection('Users').find({name: 'Steve'}).count().then((count) => {
    //     console.log(`Users ${count}`);
    //  }, (err) => {
    //     console.log('Unable to fetch user', err);
    // });

    // db.close();
});