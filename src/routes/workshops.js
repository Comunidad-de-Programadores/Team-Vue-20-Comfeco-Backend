const express = require("express");
const router = express.Router();
const {
  createWorkshop,
  getWorkshops,
  getWorkShopById,
  removeWorkShopById,
} = require("../controllers/workshop");

/* GET /workshops */
router.get("/", async (req, res) => {
  const area = req.query.area || "";
  const limit = req.query.limit || 10;
  const offset = req.query.offset || 0;
  const workshops = await getWorkshops(area, limit, offset);
  res.send(workshops);
});

/* GET /workshops/:id */
router.get("/:id", async (req, res) => {
  const workShopId = req.params.id || "";
  const workshop = await getWorkShopById(workShopId);
  if (!workshop) res.status(404).send({ detail: "Not Found" });
  res.send(workshop);
});

/* POST /workshops */
router.post("/", async (req, res) => {
  const workshop = await createWorkshop(req.body);
  res.status(201).send(workshop);
});

/* DELETE /workshops/:id */
router.delete("/:id", async (req, res) => {
  const workShopId = req.params.id || "";
  const workshop = await removeWorkShopById(workShopId);
  if (!workshop) res.status(404).send({ detail: "Not Found" });
  res.status(204).send(workshop);
});

module.exports = router;
