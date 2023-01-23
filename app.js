const express = require('express');
const cors = require('./middleware/cors');
const homeRoutes = require('./routes/home')
const addRoutes = require('./routes/add')

const app = express();

app.use(cors);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', homeRoutes);
app.use('/add', addRoutes);

app.listen(3001, () => {
  console.log('Server Listening on port 3001')
});