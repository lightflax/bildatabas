var express = require("express");
var router = express.Router();

/* martin tillägg */
var mongoose = require("mongoose");
var BilModel = require("../models/BilModel.js");

//req och res här är request- respektive response-objekten
/* --------------------GET--------------- */
router.get("/", function (req, res, next) {
  //find är Mongoose funktion. err innehåller eventuellt fel, annars kommer resultatet att finnas i “bilarna”
  BilModel.find(function (err, bilarna) {
    if (err) return next(err);
    else {
      //Om det inte uppstår fel så skicka bilarna i jsonformat
      res.json(bilarna);
    }
  });
});


module.exports = router;

/* -------------------POST-------------------- */
router.post("/", function (req, res, next) {
  //req.body är innehållet i requestobjektet, dvs en json med en bil
  BilModel.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post); //Här skickar vi tillbaka datan vi skickar in i databasen, om skrivningen gick bra
  });
});
/* ------------------DELETE-------------------- */
router.delete("/:id", function (req, res, next) {
  BilModel.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* -------------------UPDATE-------------------- */

/* router.update("/:id", function (req, res, next) {
  BilModel.findOneAndUpdate(req.params.id, req.body, function (err, update) {
    if (err) return next(err);
    res.json(update);
  });
});
 */
/* New update */

router.put("/:id/update", (req, res) => {
  let updates = req.body //we set a variable equal to the entire req.body

  BilModel.findOneAndUpdate({ _id: req.params.id }, updates, { new: true })
    .then(updatedBilModel => res.json(updatedBilModel))
    .catch(err => res.status(400).json("Error: " + err))
})
