var mongoose = require('mongoose');
var counter = require('./ordercounter.js');
var orderSchema = mongoose.Schema({
    numorder: {type: String},
    name: {type: String},
    userid: {type: String},
    date: { type: Date, default: Date.now },
    status: {type: String, default:'Generado'},
    imagecount: {type:Number, default:0},
    specid: {type: String}, //id de la especificación
    images: [{  imagename: String, width: Number, height: Number, length: Number }]
});
orderSchema.pre('save', function(next) {
    var doc = this;
    counter.findByIdAndUpdate({_id: 'entityId'}, {$inc: { seq: 1} },{upsert:true, new: true}, function(error, counter)   {
        if(error)
            return next(error);
        doc.numorder = counter.seq;
        next();
    }); 
});

module.exports = mongoose.model('ordertests', orderSchema);
