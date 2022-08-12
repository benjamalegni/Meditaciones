import express from 'express'
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'

import indexRoutes from './routes/index.js'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.static(__dirname + '/views'));


app.use(indexRoutes)

app.use(express.static(join(__dirname, '/public')))

app.listen(3000)
console.log('server listening port 3000')
