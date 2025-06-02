import bookingModel from "../models/bookingModel.js";

// Create a new booking
const createBooking = async (req, res) => {
  try {
    const { serviceId, customerId, bookingTime } = req.body;

    const booking = await bookingModel.create({
      serviceId,
      customerId,
      bookingTime,
    });

    res.status(201).json({ success: true, booking });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all bookings
const getBooking = async (req, res) => {
  try {
    const bookings = await bookingModel.find()
      .populate("serviceId", "title price")         
      .populate("customerId", "name email");        

    res.json({ success: true, bookings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a booking
const updateBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const updateFields = req.body;

    const booking = await bookingModel.findByIdAndUpdate(id, updateFields, {
      new: true,
    });

    if (!booking) {
      return res.status(404).json({ success: false, message: "Booking not found" });
    }

    res.status(200).json({ success: true, booking });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export { createBooking, getBooking, updateBooking };
