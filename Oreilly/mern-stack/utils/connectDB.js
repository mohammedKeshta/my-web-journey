import mongoose from 'mongoose'

let connection = {}

const connectDB = async () => {
  if (connection.isConnected) {
    console.log('Using Existing Connection')
    return
  }

  await mongoose.connect(process.env.MONGO_SRV, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })

  const db = mongoose.connection

  db.on('error', console.error.bind(console, 'connection error:'))

  db.once('open', () => {
    console.log('DB connected Successfully')
  })

  connection.isConnected = db.readyState
}

export default connectDB
