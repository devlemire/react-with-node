const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use( bodyParser.json() )

let data = [
   { id: 0, name: 'James' },
   { id: 1, name: 'Murray' },
   { id: 2, name: 'Richie' }
]

app.get('/api/read', ( req, res, next ) => {
   res.status(200).send('You have successfully read me')
})

app.post('/api/create', ( req, res, next ) => {
   res.status(200).send(`${req.body.age}`)
})

const port = 3001
app.listen(port, () => console.log(`Server listening on port ${port}`) )
