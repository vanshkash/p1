const express = require('express')
const router = express.Router()
const {
  createBooking,
  getBookings,
  updateBooking,
  deleteBooking
} = require('../controllers/bookingController')
const verifyToken = require('../authMiddleware')

router.post('/', verifyToken, createBooking)
router.get('/', verifyToken, getBookings)
router.put('/:id', verifyToken, updateBooking)
router.delete('/:id', verifyToken, deleteBooking)

module.exports = router
