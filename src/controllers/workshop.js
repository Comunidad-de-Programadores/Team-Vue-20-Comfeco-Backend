const Workshop = require("../models/workshop");

const createWorkshop = (workshop) => {
  return Workshop.create(workshop).then((docWorkshop) => {
    console.log("\n>> Created Workshop:\n", docWorkshop);
    return docWorkshop;
  });
};

const getWorkshops = async (area, limit = 10, offset = 0) => {
  const total = await Workshop.count();
  const results = await Workshop.find({ area: { $regex: area } })
    .limit(limit)
    .skip(offset);
  return {
    total,
    results,
  };
};

const getWorkShopById = (workshopId) => {
  return Workshop.findById(workshopId);
};

const removeWorkShopById = (workshopId) => {
  return Workshop.findByIdAndRemove(workshopId);
};

module.exports = {
  createWorkshop,
  getWorkshops,
  getWorkShopById,
  removeWorkShopById,
};
