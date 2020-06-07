import {
  MongoClient,
  env
} from '../deps.ts'

const client = new MongoClient()
client.connectWithUri("mongodb://mongo:27017")

export const db = client.database(env().DB_NAME)
export const profilesCollection = db.collection("profiles")

export default {
  db,
  profilesCollection,
}
