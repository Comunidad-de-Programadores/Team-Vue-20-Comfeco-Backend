var express = require("express");
var router = express.Router();
const {
  createGrouop,
  getGroup,
  getGroupById,
  removeGroupById,
} = require("../controllers/group");

/* GET /groups */
router.get("/", async (req, res) => {
  const lang = req.query.lang || "";
  const q = req.query.search || "";
  const limit = parseInt(req.query.limit) || 10;
  const offset = parseInt(req.query.offset) || 0;
  const groups = await getGroup(q, lang, limit, offset);
  res.send(groups);
});

/* GET /groups/:id */
router.get("/:id", async (req, res) => {
  const groupId = req.params.id || "";
  const group = await getGroupById(groupId);
  if (!group) {
    res.status(404).send({ detail: "Not Found" });
  }
});

/* POST /groups */
router.post("/", async (req, res) => {
  const group = await createGrouop(req.body);
  res.status(204).send(group);
});

/* DELETE /groups/:id */
router.delete("/:id", async (req, res) => {
  const groupId = req.params.id || "";
  const group = await removeGroupById(groupId);
  if (!group) {
    res.status(404).send({ detail: "Not Found" });
  }
  res.status(204).send(group);
});

module.exports = router;
