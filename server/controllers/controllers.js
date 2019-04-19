var mongoose = require('mongoose');
require('../models/models.js');

var Pet = mongoose.model('petshellers'); //Any name is okay
module.exports={
    index: function(req, res){
        res.render('index');
    },

    AllPets: function(req, res){
        Pet.find({}, function(err, pets){
            console.log('foo');
              if(err){
                  console.log("Error:", err);
              } else{
                  return res.json({message: "Here are all the pets!", pets:pets})
              }
          }).sort({"pettype":1});
    },

    addNew: function(req,res){
        name = req.body.name
        pettype = req.body.pettype
        description = req.body.description
        skill1 = req.body.skill1
        skill2 = req.body.skill2
        skill3 = req.body.skill3
        // console.log('title:', title)
        var new_pet = new Pet ({
            name: name,
            pettype: pettype,
            description: description,
            skill1: skill1,
            skill2: skill2,
            skill3: skill3,
        });
        // console.log(new_task)
        new_pet.save(function(err, task){
            if(err){
                res.json({message: "Could not save new task", error:err})
            } else{
                res.json({message: 'success!!!!!', data: task})
                // res.redirect('/')
            }
        });
    },

    update_pet: function(req,res){
        Pet.findOne({_id:req.params._id}, function(err, thispet){

            thispet.name = req.body.name;
            thispet.pettype = req.body.pettype
            thispet.description = req.body.description
            thispet.skill1 = req.body.skill1
            thispet.skill2 = req.body.skill2
            thispet.skill3 = req.body.skill3

            thispet.save(function(err, author){
                if(err){
                    res.json({message: "Could not edit this pet", error:err})
                } else{
                    res.json({message: 'success!!!!!', data: author})
                    // res.redirect('/')
                }
            });
        });
    },

    delete_pet: function(req,res) {
        Pet.findOneAndDelete({_id:req.params._id}, function(err, task){
            if(err){
                res.json({message: "error", data: task})
            } else{
                res.json({message: "removed author", data: task});
            }
        });
    },

    find_pet: function(req,res){
        Pet.findOne({_id:req.params._id}, function(err, author){
            if(err){
                res.json({message: "Error", error:err});
            } else {
                res.json({message: "Success", data: author})
            }
        });
    },

     update_like: function(req,res){
        Pet.findOne({_id:req.params._id}, function(err, thispet){
            var countlike = thispet.like_count;
            countlike++;
            thispet.like_count = countlike;

            thispet.save(function(err, author){
                if(err){
                    res.json({message: "Could not edit this pet", error:err})
                } else{
                    res.json({message: 'success!!!!!', data: author})
                    // res.redirect('/')
                }
            });
        });
    },
}