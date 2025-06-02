import serviceModel from "../models/serviceModel.js";

 const createService = async (req, res) => {
  try {
    const { providerId, title, description, price } = req.body;

    if (!providerId || !title || !description || !price) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const newService = await serviceModel.create({ providerId, title, description, price });
    res.status(201).json({ success: true, service: newService });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

 const getServices = async (req, res) => {
  try {
    const services = await serviceModel.find();
    res.json({ success: true, services });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export {createService, getServices}

