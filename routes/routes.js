const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const Orders = require('../models/order')
const controller = require('../Controller/controller');


router.get('', controller.index_get)

router.get('/orders',controller.oSc_show);
router.post('/orders' , controller.order_create_post);
router.get('/orders/create', controller.order_create_get);

router.get('/orders/:id', controller.order_id)
router.post('/orders/:id', controller.order_id_post)

router.get('/prices', controller.prices_get);
router.post('/prices',controller.prices_post)
router.get('/inventory', (req,res) =>{
    res.render('inventory');
});


module.exports = router;

// router.get('/addOrder', (req,res) =>{
//     const order = new Orders({
//         orderNum: 1,
//         EggW: 2,
//         Stat: 'Completed'
//     })
//     order.save();
//     const order2 = new Orders({
//         orderNum: 2,
//         EggW: 2,
//         Stat: 'Pending'
//     })
//     order2.save();
//     const order3 = new Orders({
//         orderNum: 2,
//         EggW: 2,
//         Stat: 'Ready'
//     })
//     order3.save();
//     const order4 = new Orders({
//         orderNum: 2,
//         EggW: 2,
//         Stat: 'Canclled'
//     })
//     order4.save();
// })