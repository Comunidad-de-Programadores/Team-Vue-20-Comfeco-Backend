const admin = require("firebase-admin");
const serviceAccount = require("../../../key.json");

const initializeApp = () => {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://comfeco-management-system.firebaseio.com",
  });
  return admin;
};

module.exports = initializeApp;
