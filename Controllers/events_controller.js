const { date } = require("joi");
const { findByIdAndDelete } = require("../Models/events");
const events = require("../Models/events");
const addEvents = async (req, res) => {
  try {
    const data = await events.create(req.body);
    return res.status(201).json({
      success: true,
      message: "successfully created event",
      data: data,
    });
  } catch (e) {
    return res.status(500).send(e);
  }
};
const getEvents = async (req, res) => {
  try {
    const data = await events.find();
    if(data.length===0){
      return res.status(400).json({
        success:false,
        message:'No events found'
      })
    }
    return res.status(200).json({
      data: data,
      success: true,
    });
  } catch (e) {
    return res.status(500).send(e);
  }
};
const updateEvent = async (req, res) => {
  try {
    const data = await events.updateOne({ _id: req.query.id }, req.body);
   console.log(data)
    if (data.matchedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "No event registerd by this id",
      });
    }
    return res.status(200).json({
      success: true,
      message: "successfully updated",
    });
  } catch (e) {
    return res.status(500).send(e);
  }
};
const deleteEvent = async (req, res) => {
  try {
    const data = await events.deleteOne({ _id: req.query.id });
    if (data.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "No event registerd by this id",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Event deleted",
    });
  } catch (e) {
    return res.status(500).send(e);
  }
};
module.exports = {
          addEvents,getEvents,updateEvent,deleteEvent
}
