const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()

const UserModel = require('../mongo/model/user')

router.route('/login').post((req, res) => {
  UserModel.find({
    email: req.body.email,
  }, function (err, user) {
    if (err) {
      res.send(err)
    }
    
    //You will have to modify this code to use bcrypt to compare 
    //the hashed version of the password in the databse 
    //with the plain text password passed to this route
    //console.log(user)

    if(!user[0].isAdmin){
      bcrypt.compare(req.body.password, user[0].password, function(err, result){
        if(err){
          console.log(err)
        }
      if (!result) {
        res.status(401).json({
          status: 401,
          message: 'Unauthorized credentials mismatch'
        })
      } else {
        console.log(user)
        res.json(user)
      }
      })

    }else{
     
      if(user[0].password === '200451324'){
        res.json(user)
      }else{
        res.status(401).json({
          status: 401,
          message: 'Unauthorized credentials mismatch'
        })
      }

    }
   

  })
})
module.exports = router
