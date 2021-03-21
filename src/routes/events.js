var express = require("express");
var router = express.Router();
const {
  createEvent,
  getEvent,
  getEventById,
  removeEventById,
} = require("../controllers/events");

/* GET /events */
router.get("/", async (req, res) => {
  const q = req.query.search || "";
  const limit = parseInt(req.query.limit) || 10;
  const offset = parseInt(req.query.offset) || 0;
  const events = await getEvent(q, limit, offset);
  res.send(events);
});

/* GET /events/:id */
router.get("/:id", async (req, res) => {
  const eventId = req.params.id || "";
  const event = await getEventById(eventId);
  if (!event) {
    res.status(404).send({ detail: "Not Found" });
  } else {
    res.send(event);
  }
});

/* POST /events */
router.post("/", async (req, res) => {
  const event = await createEvent(req.body);
  res.status(204).send(event);
});

/* DELETE /events/:id */
router.delete("/:id", async (req, res) => {
  const eventId = req.params.id || "";
  const event = await removeEventById(eventId);
  if (!event) {
    res.status(404).send({ detail: "Not Found" });
  }
  res.status(204).send(event);
});

module.exports = router;
