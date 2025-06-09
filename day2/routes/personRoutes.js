const express = require('express');
const router = express.Router();
const Person = require('../models/Person');


router.post('/', async (req, res) => {

    try{
   const {name,  age, work, mobile, email,  address,salary} =req.body;

   const newPerson = new Person({
    name,  
    age, 
    work,
     mobile,
      email,
    address,
    salary
   })

      const  response = await newPerson.save();
     return res.status(200).json({
      success: true,
      msg: 'Registered successfully!',
      user: response,
    });
      

       }catch(error){
          return res.status(400).json({
      success: false,
      msg: error, // Corrected the typo here ('tao' to 'to')
    });
       }


    


   //  newPerson.save{(error, person) =>{
//     if(error){
//         console.log("Error Saving Person:", error);
//         res.status(500).json(error:"internal Server Error")
        
//     }else{
//            console.log("Succes fully Saving Person:");
//         res.status(200).json(person)
//     }
//  }}


});


router.get('/', async(req, res) => {
   try{
      const data = await Person.find();
       return res.status(200).json({
      success: true,
      msg: 'Registered successfully!',
      user: data,
    });
   }catch(error){
          return res.status(400).json({
      success: false,
      msg: error, // Corrected the typo here ('tao' to 'to')
    });
}
});

 router.get('/:worktype', async(req,res)=>{

  try{
    const worktype = req.params.worktype;  // get to the person type

    if(worktype == 'chef' || worktype == 'waiter' || worktype == 'manager'){
          const data = await Person.find({work: worktype});
       return res.status(200).json({
      success: true,
      msg: 'get data user worktype successfully!',
      user: data,
    });

    }else{
      res.status(400).json({
      success: false,
      msg: error,
    });
    }
  }catch{}
    
 })

  

router.put('/', async(req, res) => {
   try{
      const data = await Person.find();
       return res.status(200).json({
      success: true,
      msg: 'Registered successfully!',
      user: data,
    });
   }catch(error){
          return res.status(400).json({
      success: false,
      msg: error, // Corrected the typo here ('tao' to 'to')
    });
}
});


module.exports = router;  