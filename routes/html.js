const router = require('express').Router();
var path = require('path');

router.get("/", (req,res) => {
    res.sendFile(path.join(__dirname + "../public/index.html"));
});

router.get("/stats", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/exercise", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});


module.exports = router;
