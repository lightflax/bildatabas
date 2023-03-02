var mongoose = require("mongoose");
var BilSchema = new mongoose.Schema(

  {
    reg: String,
    color: String,
    brand: String,
    model: String,
    pris: String,
  },
  {
    collection: "bilar"
  }
);

module.exports = mongoose.model('BilModel', BilSchema);
