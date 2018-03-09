const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use( bodyParser.json() )

app.get('/api/read', require('./controllers/CRUD_controller').read)
app.post('/api/create', require('./controllers/CRUD_controller').create)

const port = 3001
app.listen(port, () => console.log(`Server listening on port ${port}`))
