import csv from "csvtojson"
import path from "path"

const csvFilePath = path.resolve(__dirname, "users.csv")

const readCSVFile = async () => {
  const jsonArray = await csv().fromFile(csvFilePath)
  return jsonArray
}

readCSVFile()
