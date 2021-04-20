const router = require("express").Router();
const { Workout } = require('../models');
var db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(Workout => {
        res.json(Workout)
    })
        .catch(err => {
            res.status(400).json(err);
        });
})


module.exports = router;
