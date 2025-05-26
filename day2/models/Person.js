const  mongooes = require('mongoose');

const personSchema = new mongooes.Schema({
    name:{
        type:String,
        required:true,

    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
         required:true,
    },
    mobile:{
        type:Number,
         required:true,
    },
    email:{
          type:String,
        required:true,
        unique:true,

    },
     address:{
          type:String,
       

    }, 
    salary:{
          type:String,
        required:true,
       

    }
});


//  create model

const Person = mongooes.model('Person', personSchema);
module.exports = Person;