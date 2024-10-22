const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const initializeApp = require("./db/firebase/init");
const connection = require("./db/mongodb/connection");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const workshopsRouter = require("./routes/workshops");
const groupsRouter = require("./routes/groups");
const eventsRouter = require("./routes/events");
const BannsRouter = require("./routes/banns");
// const { checkAuth } = require("./middlewares/auth");

initializeApp();

// database connection
connection.on("error", () => {
  console.error.bind(console, "connection error:");
});
connection.once("open", () => {
  console.log("Conectado a MongoDB!!!");
  // connection.dropDatabase();
});

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// router root registry
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/workshops", workshopsRouter);
app.use("/groups", groupsRouter);
app.use("/events", eventsRouter);
app.use("/Banns", BannsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
