const Bann = require("../models/banns");

const createBann = (bann) => {
  return Bann.create(bann).then((docBann) => {
    console.log("\n>> Created Bann:\n", docBann);
    return docBann;
  });
};

const getBann = async (query, limit = 12, offset = 0) => {
  const total = await Bann.countDocuments();
  let results = await Bann.find({}).limit(limit).skip(offset);
  return {
    total,
    results,
  };
};

const getBannById = (BannId) => {
  return Bann.findById(BannId);
};

const removeBannById = (BannId) => {
  return Bann.findByIdAndRemove(BannId);
};

module.exports= {
  createBann,
  getBann,
  getBannById,
  removeBannById
};