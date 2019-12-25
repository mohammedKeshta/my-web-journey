import { Router } from 'express'

const router = Router()

// api/item
router
  .route('/')
  .get((req, res) => {
    res.json({ status: 200, data: 'All Items' })
  })
  .post((req, res) => {
    res.json({ status: 200, data: 'Item Created' })
  })

// /api/item/:id
router
  .route('/:id')
  .get((req, res) => {
    res.json({ status: 200, data: `Items ${req.params.id}` })
  })
  .put((req, res) => {
    res.json({ status: 200, data: `item ${req.params.id} updated` })
  })
  .delete((req, res) => {
    res.json({ status: 200, data: `item ${req.params.id} deleted` })
  })

export default router
