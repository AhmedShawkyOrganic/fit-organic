const { result, compact } = require('lodash');
const mongoose = require('mongoose');
const oSc = require('../models/order.js');
const oP = require('../models/prices.js')


const index_get = (req,res) =>{
    oP.findOne()
        .then((result) => {
            var priceR = result
            oSc.find({status: 'Completed'}).count(function(err, count1){
                oSc.find({status: 'Cancelled'}).count(function(err, count2){
                    oSc.find({status: 'Pending'}).count(function(err, count3){
                        oSc.find({status: 'Ready'}).count(function(err, count4){
                            res.render('./index', {orCo: count1, orCa: count2, orP: count3, orR: count4,prices:priceR});
                        });
                    });
                });
            });
        })
}

const oSc_show = (req,res) =>{
    oSc.find({status: 'Completed'}, function (req1, res1) {
        oSc.find({status: 'Cancelled'}, function (req2, res2) {
            oSc.find({status: 'Pending'}, function (req3, res3) {
                oSc.find({status: 'Ready'}, function (req4, res4) {
                    
                    res.render('./orders', {orCo: res1, orCa: res2, orP: res3, orR: res4});
                })
            })
        })
    });

}
const order_create_get = (req,res) =>{
    oSc
    .findOne()
    .sort('-orderNum')
    .then((result)=>{
        if(result != null){   
            var max = result;
            oP.findOne().then((result) =>{
                res.render('./create', {maxV: max.orderNum, prices: result});
            })
        }else{
            var max = result;
            oP.findOne().then((result) =>{
            res.render('./create', {maxV:0,prices: result});
        })
        }
    })
    

}

const order_create_post = (req,res) =>{
    const order = new oSc(req.body);
     
    order.save()
    .then((result) =>{
        res.redirect('/orders');
        console.log("Created a new order")
    })
    .catch((err) =>{
        console.log(err);
    })
}
const order_id = (req,res) =>{
    const id = req.params.id
    oSc.findById(id)
    .then(result =>{
            res.render('details',{order: result});
    })
    .catch(err =>{
        console.log(err);
    })
}
const order_id_post = (req,res) =>{
    const order = new oSc(req.body)
    oSc.deleteOne({orderNum: order.orderNum}, function (err) {
        if (err) return handleError(err);
        // deleted at most one tank document
      });

    order.save()
    .then(result =>{
        res.redirect('/orders');
        console.log('Order Number',":#",result.orderNum,'Has Been Editied')
})
}
const prices_get = (req,res) =>{
    res.render('./prices')
}
const prices_post = (req,res) =>{
    const price = new oP(req.body)
    oP.deleteOne( function (err) {
        if (err) return handleError(err);
        // deleted at most one tank document
      });

    price.save()
    .then(result =>{
        res.redirect('/');
        console.log('Prices has been changed',"EggW: ",result.eggW,"EggR",result.eggR,"EggB",result.eggB)
})
}



module.exports = {
    oSc_show,
    order_create_get,
    order_create_post,
    order_id,
    order_id_post,
    prices_post,
    prices_get,
    index_get
}