var express = require('express');
var router = express.Router();
const userModel = require('./users');


/* GET home page. */
router.post('/home', async function(req, res) {
  console.log("in home recived request")
  console.log(req.body.data);

  const userSchema = userModel.create({
    data:req.body.data
  })
  res.json(req.body)
});

router.get('/home1', async function(req, res) {
  console.log("in home recived request")
  console.log(req.body.data);

  const userSchema = userModel.create({
    data:req.body.data
  })
  res.json(req.body)
});

module.exports = router;
