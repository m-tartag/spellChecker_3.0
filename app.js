// [NPM Packages]

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

// [Initialize app]

const app = express()

// [Connect to MongoDB w/ Mongoose]

mongoose.connect('mongodb://localhost:27017/wordDatabase', {useNewUrlParser: true})
  .then(() => {console.log('MongoDB Succesfully Connected.')})
  .catch((err) => {console.log(`Whoops! ${err}`)})

// [Import Schema]

require('./models/Words')
const Word = mongoose.model('words')

// [Middleware]

  // 1. [Body-Parser]

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

  // 2. [Express.static] 

app.use(express.static(__dirname + '/public'));


// [Routes]

  // [API Route]

  app.get('/api', cors(), function(req, res) {
    const queryBuffer = req.query.word
    const query = queryBuffer.toLowerCase()

   
    

    //  Logic for multi-word input
    //                            //
    //                            //
    //                            //
    //                            //
    //                            //
    // ============================




    Word.find({
      'word': query
    }, function (err, result) {
      if (err) throw err
      if (result) {
        res.json(result)
      } else {
        res.send(JSON.stringify({
            error: 'Error'
        }))
      }
    })
})

// [About] 

app.get('/about', (req, res) => {
  res.render(about.html);

})

// [Port]

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server has started on port: ${port}`);
});