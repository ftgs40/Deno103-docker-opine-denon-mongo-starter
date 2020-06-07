const mongoObjectIDtoID = (mongoData: any) => {
  const newObject = {
    id: mongoData._id["$oid"],
    ...mongoData,
  }
  delete newObject._id
  return newObject
}

export default {
  mongoObjectIDtoID,
}