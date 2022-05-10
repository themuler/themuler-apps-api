const express = require('express')
const app = express()

app.use(express.json())

app.get('/ping', (req, res) => res.json({"message": "Working..!"}))

// export 'app'
module.exports = app