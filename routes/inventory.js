let express = requrie('express');
let router = express.Router();

let mongoose = requrie('mongoose');
let Inventory = require('../models/inventory');

router.get('/list', function(req, res, next) {
    Inventory.find((err,inventoryList) => {
    console.log(inventoryList);
    if(err)
    {
        return console.error(err);
    }
    else{
        console.log(inventoryList);
    }
    });
    res.render('index', { title: 'About' });
  });

  module.exports = router;