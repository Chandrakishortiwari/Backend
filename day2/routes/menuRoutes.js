const express = require('express');
const router = express.Router();

const MenuItem = require('../models/MenuItem');


 router.post('/', async(req, res)=>{
 try{
    const data = req.body;
    const newMenu = new MenuItem(data);
    const response = await newMenu.save();
     return res.status(200).json({
      success: true,
      msg: 'Add Data successfully!',
      user: response,
    });
     }catch(error){
     return res.status(400).json({
      success: false,
      msg: error,
     })}

 });



 router.get('/', async(req,res)=> {
     try{
      const data = await MenuItem.find();
       return res.status(200).json({
      success: true,
      msg: ' Data Feched  successfully!',
      user: data,
    });
   }catch(error){
          return res.status(400).json({
      success: false,
      msg: error, // Corrected the typo here ('tao' to 'to')
    });
}
 })


 module.exports = router;  