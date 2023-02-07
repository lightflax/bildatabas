var express = require('express');
var router = express.Router();

router.get("/", function(reg, res, next){
    res.send("API fungerar");
});
module.exports = router;