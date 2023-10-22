import './helpers/doeenv'

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helment from 'helmet'

const port = parseInt(process.env.PORT, 10) || 3000

const app = express()

app.use(morgan(process.env.MORGAN_LOG))
app.use(cors({ origin: process.env.ORIGIN }))
app.use(helment())

app.get('/', (req, res) => {
  const title = process.env.TITLE || 'Server'
  res.send({ msg: title })
})

app.listen(port)