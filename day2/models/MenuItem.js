const  mongooes = require('mongoose');

const menuItemSchema = new mongooes.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    taste:{
        type:String,
        enum:['sweet','spice',"sour"],
        required:true,
    },
    is_drink:{
        type:Boolean,
        default:false,

    },
    ingredients:{
        type:[String],
        default:[]
    },
    num_sale:{
        type:Number,
        default:0,
    }
});



const MenuItem = mongooes.model('MenuItem', menuItemSchema);
module.exports = MenuItem;