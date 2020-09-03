const express = require('express')
const app = express()
const port = 4001
const bodyParser = require("body-parser");
const employeesRouter = require('./routes/employees');
app.use('/employees', employeesRouter)

app.get('/', (req, res) => {
  res.send('Welcome to our API!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})