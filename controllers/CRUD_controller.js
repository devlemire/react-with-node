let data = [
   { id: 0, name: 'James' },
   { id: 1, name: 'Murray' },
   { id: 2, name: 'Richie' }
]

module.exports = {
   read: ( req, res, next ) => {
      res.status(200).send('You have successfully read me')
   },
   create: ( req, res, next ) => {
      res.status(200).send(`${req.body.age}`)
   },
   update: ( req, res, next ) => {

   },
   delete: ( req, res, next ) => {

   }
}