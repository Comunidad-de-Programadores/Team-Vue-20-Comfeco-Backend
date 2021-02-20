const Workshop = require("../models/workshop");

const createWorkshop = (workshop) => {
  return Workshop.create(workshop).then((docWorkshop) => {
    console.log("\n>> Created Workshop:\n", docWorkshop);
    return docWorkshop;
  });
};

const getWorkshops = async (title, limit = 10, offset = 0) => {
  const total = await Workshop.count();
  const results = await Workshop.find({ title: { $regex: title } })
    .limit(limit)
    .skip(offset);
  return {
    total,
    results,
  };
};

module.exports = {
  createWorkshop,
  getWorkshops,
};
