const  mongooes = require('mongoose')
const db = mongooes.connect('mongodb://127.0.0.1:27017/day2').then(() => {
  console.log(" MongoDB connected successfully!");
})
.catch((err) => {
  console.error("MongoDB connection failed:", err.message);
});



module.exports = db;