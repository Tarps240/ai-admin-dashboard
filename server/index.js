const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const client = require('./db');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Example route to get data from PostgreSQL
app.get('/data', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM my_table');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving data');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});