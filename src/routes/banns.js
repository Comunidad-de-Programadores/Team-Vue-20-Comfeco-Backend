var express = require("express");
var router = express.Router();
const {
  createBann,
  getBann,
  getBannById,
  removeBannById,
} = require("../controllers/banns");

/* GET /Banns */
router.get("/", async (req, res) => {
  const q = req.query.search || "";
  const limit = parseInt(req.query.limit) || 10;
  const offset = parseInt(req.query.offset) || 0;
  const Banns = await getBann(q, limit, offset);
  res.send(Banns);
});

/* GET /Banns/:id */
router.get("/:id", async (req, res) => {
  const BannId = req.params.id || "";
  const Bann = await getBannById(BannId);
  if (!Bann) {
    res.status(404).send({ detail: "Not Found" });
  }
});

/* POST /Banns */
router.post("/", async (req, res) => {
  const Bann = await createBann(req.body);
  res.status(204).send(Bann);
});

/* DELETE /Banns/:id */
router.delete("/:id", async (req, res) => {
  const BannId = req.params.id || "";
  const Bann = await removeBannById(BannId);
  if (!Bann) {
    res.status(404).send({ detail: "Not Found" });
  }
  res.status(204).send(Bann);
});

module.exports = router;
