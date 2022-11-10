const express = require('express');
const path = require('path');
require('dotenv').config();

const meetingsRoute = require('./routes/meetings')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ROUTES */
app.use('/meetings', meetingsRoute);

/* RENDER FRONTEND */
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/frontend/build/index.html')));
app.use((err, req, res, next) => res.status(500).send({ message: err.message }));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Running on: http://localhost:${port}`);
})