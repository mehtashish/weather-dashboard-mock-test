const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());

const weatherRoute = require('./routes/weather');
app.use('/weather', weatherRoute);

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

app.listen(PORT, () => {
    console.log(`Server is up and running on http://localhost:${PORT}`);
});