var pets = require('../controllers/controllers');
var path = require('path');

module.exports = function(app){
    app.get('/', function (req, res) {
        // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
        pets.index(req, res) ;
    })

    // Below is example of post method
    app.post('/addNew', function (req, res) {
      pets.addNew(req, res);
    });

    app.route('/pet/:_id')
      .get(function(req,res){
        pets.find_pet(req,res);
      })
      .put(function(req,res){
        pets.update_pet(req,res);
      })
      .delete(function(req,res){
        pets.delete_pet(req,res);
      });

      app.route('/petlike/:_id')
      .put(function(req,res){
        pets.update_like(req,res);
      });

      app.get('/all', function (req, res) {
        // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
        pets.AllPets(req, res) ;
    });

    app.all("*", (req,res,next) => {
      res.sendFile(path.resolve("./public/dist/public/index.html"))
  });
}