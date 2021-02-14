const admin = require("firebase-admin");

const checkAuth = async (req, res, next) => {
  const authorization = req.headers.authorization.split(" ");
  const type = authorization[0];
  const token = authorization[1];

  if (req.headers.authorization && type === "Bearer") {
    try {
      await admin.auth().verifyIdToken(token);
      next();
    } catch (error) {
      res.status(403).send("Unauthorized");
    }
  } else {
    res.status(403).send("Unauthorized");
  }
};

module.exports = {
  checkAuth,
};
