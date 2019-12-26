import { User } from './user.model'


// RETURNS ALL THE USERS IN THE DATABASE
export const getMany = (req, res) => {
  try {
    User.find({}, (error, users) => {
      if (error)
        res
          .status(500)
          .json({ status: 'error', message: error })
          .end()
      res
        .status(200)
        .json({
          status: 'success',
          message: 'Retrieved All Users successfully',
          data: users
        })
        .end()
    })
  } catch (error) {
    console.log(error)
    req.send(400).end()
  }
}
// GETS A SINGLE USER FROM THE DATABASE
export const getOne = (req, res) => {
  try {
    User.findById(req.params.id, (error, user) => {
      if (error)
        return res
          .status(500)
          .json({ status: 'error', message: error })
          .end()
      if (!user) return res.status(404).send('No user found.')
      res
        .status(200)
        .json({
          status: 'success',
          message: 'Retrieved User successfully',
          data: user
        })
        .end()
    })
  } catch (error) {
    console.log(error)
    req.send(400).end()
  }
}

// DELETES A USER FROM THE DATABASE
export const deleteUser = (req, res) => {
  try {
    User.findByIdAndDelete(req.params.id, (error, user) => {
      if (error)
        return res
          .status(500)
          .json({ status: 'error', message: error })
          .end()
      if (!user) return res.status(404).send('No user found.')
      res
        .status(200)
        .json({
          status: 'success',
          message: 'User Deleted successfully',
          data: 'User: ' + user.name + ' was deleted.'
        })
        .end()
    })
  } catch (error) {
    console.log(error)
    req.send(400).end()
  }
}

export const me = (req, res) => {
  res.status(200).json({ data: req.user })
}

export const updateMe = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user._id, req.body, {
      new: true
    })
      .lean()
      .exec()

    res.status(200).json({ data: user })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}
