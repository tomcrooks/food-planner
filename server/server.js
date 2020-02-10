const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb');

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.listen(port, async () => {
    console.log(`Server is running on port ${port}...`)

    const client = new MongoClient(process.env.DB_URL, { useNewUrlParser: true , useUnifiedTopology: true });

    try {
        await client.connect();
        console.log(`Establed connection to the database.`)

        // const db = client.db(process.env.DB_NAME);
    } catch (err) {
        console.log(err.stack);
    }

    client.close();

})
