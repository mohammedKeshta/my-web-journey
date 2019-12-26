import config from '../config'
import { User } from '../resources/user/user.model'
import jwt from 'jsonwebtoken'

export const newToken = user => {
  return jwt.sign({ id: user.id }, config.secrets.jwt, {
    expiresIn: config.secrets.jwtExp
  })
}

export const verifyToken = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, config.secrets.jwt, (err, payload) => {
      if (err) return reject(err)
      resolve(payload)
    })
  })

export const signup = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) return res.status(400).send('Invalid Data')
  try {
    const user = await User.create(...req.body)
    const token = newToken(user)
    return res.status(201).send({ token })
  } catch (error) {
    console.log(error)
    req.send(400).end()
  }
}

export const signin = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) return res.status(400).json({ status: 'error', message: 'need email and password' })
  try {
    const user = await User.findOne({ email })
      .select('email password')
      .exec()

    if (!user) return res.status(400).json({ status: 'success', message: 'Invalid email and password combination' })
    // check if the password is valid
    const match = await user.checkPassword(password)
    if (!match) return res.status(401).json({ status: 'error', message: 'Invalid email and password combination' })
    // Create new Token
    const token = newToken(user)
    // return the information including token as JSON
    res.status(200).send({ token })
  } catch (error) {
    if (error)
      return res
        .status(500)
        .json({ status: 'error', message: error })
        .end()
  }
}

export const logout = async (req, res) => {
  res.status(200).send({ auth: false, token: null })
}

export const protect = async (req, res, next) => {
  // check header or url parameters or post parameters for token
  const bearer = req.headers.authorization
  if (!bearer || !bearer.startsWith('Bearer '))
    return res.status(401).json({ auth: false, message: 'No token provided.' })

  const token = bearer.split('Bearer ')[1].trim()

  if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' })

  let payload
  try {
    payload = await verifyToken(token)
  } catch (e) {
    return res.status(401).json({ auth: false, message: 'No token provided.' })
  }

  const user = await User.findById(payload.id)
    .select('-password')
    .lean()
    .exec()

  if (!user) {
    return res.status(401).end()
  }

  req.user = user

  next()
}
