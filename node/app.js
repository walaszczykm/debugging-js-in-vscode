const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('<h1> Hello World! </h1>')
})

app.get('/users/:id', (req, res) => {
  let id = parseInt(req.params.id)

  // This part is wrong. What needs to be fixed?
  if (typeof id !== 'number') {
    res.status(400).json({
      id: 'wrong data type'
    })
  }

  res.json({
    id: req.params.id,
    name: 'John',
    lastname: 'Doe'
  })
})

app.listen(5000, () => {
  console.log('Server is listening on http://localhost:5000')
})
