const express = require("express");
// Import the burger module to access database functions
const db = require("../models");

// The router is like using app = express(), where the server is defined in another file
let router = express.Router();

router.get("/", (req, res) => {
    db.burgers.findAll({}).then( data => {
        let burgerObj = {
            burger: data
        }
        res.render("index", burgerObj);
    })
});

router.post("/api/burgers", (req, res) => {
    db.burgers.create({burgerName: req.body.name}).then( result => {
        res.json({ id: result.insertId });
    })
});

router.put("/api/burgers/:id", (req, res) => {
    db.burgers.update({devoured: true}, {where: {id: req.params.id} })
    .then(result => {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
    })
});

module.exports = router;