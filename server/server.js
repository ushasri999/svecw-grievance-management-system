const express = require('express');
const app = express();
const port = 5000;
const connectDB = require('./utils/dbconfig');
const User = require('./models/userModel');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes')
const complaintRoutes = require('./routes/complaintRoutes')
const studentRoutes = require('./routes/studentRoutes')
const blockRoutes = require('./routes/blockRoutes')
const messComplaintRoutes = require('./routes/messComplaintRoutes')
const contactRoutes = require('./routes/contactRoutes')


const cors = require('cors')
app.use(cors());

connectDB();
app.get('/', (req, res) => {
  res.send('Hello, Server 5000!');
});

app.get('/check', async (req, res) => {
  console.log("called checkmail");
  res.send("called check")
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Parse incoming JSON data
app.use(express.json());

const { authorizeStudent } = require('./middleware/auth');
app.use('/', userRoutes);
app.use('/', complaintRoutes);
app.use('/', studentRoutes);
app.use('/', blockRoutes)
app.use('/', messComplaintRoutes)
app.use('/', contactRoutes)
