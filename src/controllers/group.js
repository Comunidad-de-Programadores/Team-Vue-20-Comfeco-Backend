const Group = require("../models/group");

const createGrouop = (group) => {
  return Group.create(group).then((docGroup) => {
    console.log("\n>> Created Group:\n", docGroup);
    return docGroup;
  });
};

const getGroup = async (query, lang, limit = 12, offset = 0) => {
  const total = await Group.countDocuments();
  let results = await Group.find({
    lang: { $regex: lang },
  })
    .limit(limit)
    .skip(offset);

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

const getGroupById = (groupId) => {
  return Group.findById(groupId);
};

const removeGroupById = (groupId) => {
  return Group.findByIdAndRemove(groupId);
};

module.exports = {
  createGrouop,
  getGroup,
  getGroupById,
  removeGroupById,
};
