// const Booking = require('../models/Booking')

exports.createBooking = async (req, res, next) => {
  const booking = new Booking(req.body)
  const saved = await booking.save()
  res.status(201).json(saved)
}

exports.getBookings = async (req, res, next) => {
  const list = await Booking.find()
  res.status(200).json(list)
}

exports.updateBooking = async (req, res, next) => {
  const { id } = req.params
  const updated = await Booking.findByIdAndUpdate(id, req.body, { new: true })
  res.status(200).json(updated)
}

exports.deleteBooking = async (req, res, next) => {
  const { id } = req.params
  await Booking.findByIdAndDelete(id)
  res.status(204).end()
}
