const Event = require("../models/event");

const createEvent = (event) => {
  return Event.create(event).then((docEvent) => {
    console.log("\n>> Created Event:\n", docEvent);
    return docEvent;
  });
};

const getEvent = async (query, limit = 12, offset = 0) => {
  const total = await Event.countDocuments();
  let results = await Event.find({}).limit(limit).skip(offset);
  
  if (query) {
    results = results.filter((el) => {
      const name = el.name.toLowerCase();
      const description = el.description.toLowerCase();
      const q = query.toLowerCase();
      return name.indexOf(q) !== -1 || description.indexOf(q) !== -1;
    });
  }
  const count = results.length;
  
  return {
    total,
    count,
    results,
  };
};

const getEventById = (eventId) => {
  return Event.findById(eventId);
};

const removeEventById = (eventId) => {
  return Event.findByIdAndRemove(eventId);
};
module.exports= {
  createEvent,
  getEvent,
  getEventById,
  removeEventById
};