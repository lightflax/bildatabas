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
  BilModel.findByIdAndRemove(req.params.id, req.body,  function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* UPDATE PRODUCT */



 router.put("/", function (req, res, next) {
  //req.body är innehållet i requestobjektet, dvs en json med en bil
  BilModel.findByIdAndUpdate(req.body, {new: true}, function (err, data) {
    if (err) return next(err);
    res.json(data); //Här skickar vi tillbaka datan vi skickar in i databasen, om skrivningen gick bra
  });
});
