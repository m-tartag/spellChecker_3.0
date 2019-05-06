const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Initialize app

const app = express();



// [Connect to MongoDB w/ Mongoose]

mongoose.connect('mongodb://localhost/wordDatabase', {
  useNewUrlParser: true
})
  .then(() => {
    console.log('MongoDB Succesfully Connected.')
  })
  .catch((err) => {
    console.log(`Whoops! ${err}`)
  });



// [*~*~*~* Middleware *~*~*~*]



// 1. [Body-Parser]

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

// 2. [Express.static] 

app.use(express.static('public'));

// 3. HandleBars


// 4. 




// [*~*~*~* Routes *~*~*~*]

// [Index]

app.get('/', (req, res) => {
  const title = 'Spell Checker';
  res.render(index.html, {
    title: title
  });
  
})

// [About]

app.get('/about', (req, res) => {
  res.render(about.html);
  
})

// [Create Account]

app.get('/account/new', (req, res) => {
  res.render(newAccount.html);
})











// Port / Listener

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server has started on port: ${port}`);
});