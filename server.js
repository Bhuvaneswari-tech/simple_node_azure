require('dotenv').config();
const express = require('express');
const app = express();
const helloRouter = require('./routes/hello');

app.use(express.json());

// Routes
app.use('/hello', helloRouter);

app.get('/', (req, res) => {
  res.send('Welcome to Simple Node.js App on Azure!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
