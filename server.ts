
import {
  env,
  MongoClient,
} from './deps.ts'
import app from './app.ts'

const port = parseInt(env().PORT, 10) || 8000

app.listen(port)