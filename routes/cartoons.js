var express = require('express');
var router = express.Router();
// Bring in the queries object that has all of the db query functions
const queries = require('../db/query');

// Create the route for get all
router.get("/", function(request, response, next) {
  queries.getAll().then(function(all) {
      response.json(all);
    })
    .catch(err => {
      console.log(err)
    })
});
router.get('/:id', function(req, res) {
  queries.getOne(req.params.id).then((toon) => {
    res.json(toon)
  })
})

// Create the route for creating an item
router.post('/', function(req, res) {
  queries.create(req.body)
    .then((data) => {
      res.json(data)
    })
})

// Create the route for updating



// Route for deleting an item



module.exports = router;
