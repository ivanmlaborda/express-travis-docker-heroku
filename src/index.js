const express = require('express')
const cors = require('cors')
const compression = require('compression')
const helmet = require('helmet')

const {
  PORT
} = require('./config/environment')

const router = require('./routes')

const app = express()

app.use(helmet())
app.use(cors())
app.use(compression())
app.use(express.json())
app.use('/api', router)

app.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`)
})
