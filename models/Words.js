const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// [Schema]

const WordSchema = new mongoose.Schema({
  word: String
});

mongoose.model("words", WordSchema);
