const express = require('express');
// require('dotenv').config();
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
const Person = require('./models/Person');



const port = 3000;

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/person', async (req, res) => {

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


app.get('/person', async(req, res) => {
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

 app.get('/person/:worktype', async(req,res)=>{

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

  

app.put('/person', async(req, res) => {
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


const menuRoute = require('./routes/menuRoutes');

 app.use('/menu', menuRoute);



   



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
