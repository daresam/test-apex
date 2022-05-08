const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.Port || 4000

app.use(cors())
app.use(bodyParser.json())

// User Routes

// app.use('v1/api', require('./api/users').router)

// Property Routes

// Report Routes

app.listen(port, () => {
    console.log(`Server started successfully, listening on port ${port}`)
})
