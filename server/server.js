const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb');

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000
const DB_URL = process.env.DB_URL

app.use(cors())
app.use(express.json())

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`)

    // Connect to the db
    MongoClient.connect(DB_URL, { useUnifiedTopology: true }, (err, db) => {
        if (!err) console.log("DB Connection established");
    });

})
