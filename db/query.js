var db = require('./connection');
const knex = require('knex');
const config = require('../knexfile.js');
const pg = knex(config.development)
module.exports = {
  getAll: function() {
    // Get all cartoons and return them to the route
    return pg('cartoon').select('*')
  },

  getOne: function(id) {
    // Get one cartoon by the id and return it
    return pg('cartoon').select('*').where('id', id)
  },

  create: function(cartoon) {
    // Add a cartoon to the database
    return pg('cartoon').insert(cartoon).returning('*')
  },

  update: function(id, cartoon) {
    // Update a cartoon with the specified id
  },

  remove: function(id) {
    // Delete the specified cartoon
  },

};
