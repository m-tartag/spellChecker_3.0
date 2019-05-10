const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create Schema

const WordSchema = new mongoose.Schema({
  word: String,
});

// Export Schema

mongoose.model('words', WordSchema);
