// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//   db.collection('Todos').findOneAndUpdate({
//       _id: new ObjectID('59353327d11cfe807a70bab2')
//   }, {
//       $set: {
//           completed: true
//       }
//   }, {
//       returnOriginal: false
//   }).then((result) => {
//       console.log(JSON.stringify(result))
//   });

  db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5935356fd11cfe807a70bb34')
  }, {
      $set: {
          name: 'Steven Hensgen'
      },
      $inc: {
            age: 1
      }
  }, {
      returnOriginal: false
  }).then((result) => {
      console.log(JSON.stringify(result))
  });

  // db.close();
});
