var express = require("express");
const { getAllUsers } = require("../controllers/users");
var router = express.Router();


/* GET users listing. */
router.get("/", async (req, res) => {
  const results = await getAllUsers();
  res.send(results);
});

module.exports = router;
