const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.get('/api/read', ( req, res, next ) => {
   res.status(200).send('You have successfully read me')
})

const port = 3001
app.listen(port, () => console.log(`Server listening on port ${port}`) )
