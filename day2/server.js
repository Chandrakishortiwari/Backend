const express = require('express');
// require('dotenv').config();
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');




const port = 3000;

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const personRoutes = require('./routes/personRoutes')
 app.use('/person', personRoutes);

const menuRoute = require('./routes/menuRoutes');

 app.use('/menu', menuRoute);



   



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
