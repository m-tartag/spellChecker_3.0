const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');



const app = express();


// Connect to MongoDB (Mongoose)

mongoose.connect('mongodb://localhost/wordDatabase', {
  useNewUrlParser: true
})
  .then(() => {
    console.log('MongoDB Succesfully Connected.')
  })
  .catch((err) => {
    console.log(`Whoops! ${err}`)
  });



// ======= Middleware ========


// [Body-Parser]

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())








// ======= Routes ========

app.get('/', (req, res) => {
  const title = "Spell Checker";
  res.render('index', {
    title: title
  })
})











// Port / Listener

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server has started on port: ${port}`);
});