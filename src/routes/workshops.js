const express = require("express");
const router = express.Router();
const { createWorkshop, getWorkshops } = require("../controllers/workshop");

/* GET /workshops */
router.get("/", async (req, res) => {
  const title = req.query.title || "";
  const limit = req.query.limit || 10;
  const offset = req.query.offset || 0;
  const workshops = await getWorkshops(title, limit, offset);
  res.send(workshops);
});

/* POST /workshops */
router.post("/", async (req, res) => {
  const workshop = await createWorkshop(req.body);
  res.status(201).send(workshop);
});

module.exports = router;
