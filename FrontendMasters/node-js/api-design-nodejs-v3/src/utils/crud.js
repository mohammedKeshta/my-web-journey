export const getOne = model => async (req, res) => {
  try {
    const doc = await model.findOne({
      createdBy: req.user._id,
      _id: req.params
    })

    if (!doc) {
      res
        .status(400)
        .json({ status: 'Not Found', message: "There's no such element" })
        .lean()
        .exec()
    }
    res
      .status(200)
      .json({
        status: 'success',
        message: 'Request retrieved successfully',
        data: doc
      })
      .end()
  } catch (error) {
    if (error)
      res
        .status(500)
        .json({ status: 'error', message: error })
        .end()
  }
}

export const getMany = model => async (req, res) => {
  try {
    const docs = await model.findOne({
      createdBy: req.user._id
    })

    if (!docs) {
      res
        .status(400)
        .json({ status: 'Not Found', message: "There's no such element" })
        .lean()
        .exec()
    }
    res
      .status(200)
      .json({
        status: 'success',
        message: 'Request retrieved successfully',
        data: docs
      })
      .end()
  } catch (error) {
    if (error)
      res
        .status(500)
        .json({ status: 'error', message: error })
        .end()
  }
}

export const createOne = model => async (req, res) => {
  try {
    const doc = await model.create({ ...req.body, createdBy: req.user._id })

    res
      .status(201)
      .json({
        status: 'success',
        message: 'Created successfully',
        data: doc
      })
      .end()
  } catch (error) {
    if (error)
      res
        .status(500)
        .json({ status: 'error', message: error })
        .end()
  }
}

export const updateOne = model => async (req, res) => {
  try {
    const updatedDoc = await model.findOneAndUpdate(
      {
        createdBy: req.user._id,
        _id: req.params.id
      },
      req.body,
      { new: true }
    )

    if (!updatedDoc) {
      return res.status(400).end()
    }

    res
      .status(201)
      .json({
        status: 'success',
        message: 'Created successfully',
        data: updatedDoc
      })
      .lean()
      .exec()
      .end()
  } catch (error) {
    if (error)
      res
        .status(500)
        .json({ status: 'error', message: error })
        .end()
  }
}

export const removeOne = model => async (req, res) => {
  try {
    const removedDoc = await model.findOneAndRemove({
      createdBy: req.user._id,
      _id: req.params.id
    })

    if (!removedDoc) {
      return res.status(400).end()
    }

    res
      .status(201)
      .json({
        status: 'success',
        message: 'Created successfully',
        data: removedDoc
      })
      .end()
  } catch (error) {
    if (error)
      res
        .status(500)
        .json({ status: 'error', message: error })
        .end()
  }
}

export const crudControllers = model => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model)
})
