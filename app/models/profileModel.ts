import { profilesCollection } from '../database.ts'
import { Profile } from '../types/profile.ts'

const findAll = async () => (
  await profilesCollection.find()
)

const findByID = async (id: number) => (
  await profilesCollection.find({_id: id})
)

const insertOne = async (profile: Profile) => (
  await profilesCollection.insertOne({
    name: profile.name,
    detail: profile.detail,
  })
)

const updateByID = async (id: number, profile: Profile) => {
  const where = { _id: id };
  const set = { $set: {name: profile.name, detail: profile.detail } }
  await profilesCollection.updateOne(
    where,
    set,
  )
}

const deleteByID = async (id: number) => {
  await profilesCollection.deleteOne({ _id: id });
}

export default {
  findAll,
  insertOne,
}
