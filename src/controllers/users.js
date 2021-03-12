const admin = require("firebase-admin");

/**
 * Gets all the users (1000 MAX) from Firebase auth.
 *
 * @param {Object} req Express Request Object.
 * @param {Object} res Express Response Object
 */
const getAllUsers = async () => {
  const auth = admin.auth();
  const maxResults = 100; // optional arg.
  return auth.listUsers(maxResults);
};

module.exports = {
  getAllUsers,
};
