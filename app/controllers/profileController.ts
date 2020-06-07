import {
  MongoClient,
  ObjectId,
  TypeOpine,
} from '../../deps.ts'
import profileModel from '../models/profileModel.ts'
import parseData from '../lib/parseData.ts'

const get = async (req: TypeOpine.Request, res: TypeOpine.Response) => {
  try {
    const result = await profileModel.findAll()
    const profiles = result.map((profile: any) => (parseData.mongoObjectIDtoID(profile)))
    res.setStatus(200).json({
      data: profiles,
      total: profiles.length,
    })
  } catch (err) {
    res.setStatus(500).json({
      succuss: false,
      message: 'Internal server error.'
    })
  }
}

const create = async (req: TypeOpine.Request, res: TypeOpine.Response) => {
  try {
    const { name, detail } = req.parsedBody
    await profileModel.insertOne({
      name,
      detail,
    })
    return res.setStatus(200).json({
      succuss: true,
    })
  } catch (err) {
    return res.setStatus(500).json({
      succuss: false,
      message: 'Internal server error.'
    })
  }
}

export default {
  get,
  create,
}