const Group = require("../models/group");

const createGrouop = (group)=>{
  return Group.create(group).then((docGroup)=>{
    console.log("\n>> Created Group:\n", docGroup);
    return docGroup;
  });
};

const getGroup = async (lang,limit=10,offset=0) =>{
  const total = await Group.count();
  const result = await Group.find({lang: {$regex: lang}}).limit(limit).skip(offset);
  return {
    total,
    result
  };
};

const getGroupById = (groupId) =>{
  return Group.findById(groupId);
};

const removeGroupById = (groupId) =>{
  return Group.findByIdAndRemove(groupId);
};
module.exports={
  createGrouop,
  getGroup,
  getGroupById,
  removeGroupById
};