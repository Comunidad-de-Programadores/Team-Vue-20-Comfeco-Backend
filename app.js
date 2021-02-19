//const createError = require("http-errors");
const express = require("express");
const mongoose = require ("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const admin = require("firebase-admin");
const serviceAccount = require("./key.json");
const bodyParser = require ("body-parser");
const fileUpload = require("express-fileupload");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://comfeco-management-system.firebaseio.com",
});

/* conexion */
mongoose.connect(" mongodb+srv://covid19:rTHDqdCAaXXFr1kH@cluster0.pxwzy.mongodb.net/team-20-vue?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
},(err,res)=>{
  if(err) throw err;
  if(res){
    console.log("conectado a la bd");
  }
  
});

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
//const { checkAuth } = require("./utils/auth");
const app = express();
/* midleware */
/* parse application/x-www-form-urlencoded */
app.use(bodyParser.urlencoded({limit:"10mb",extended:true}));
/* midlewara para subir archivos */
app.use(fileUpload());
/* json */
app.use(bodyParser.json());
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

//app.use(checkAuth);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use(require("./routes/areas.route"));
app.use(require("./routes/talleres.route"));
// catch 404 and forward to error handler
/* app.use(function (req, res, next) {
  next(createError(404));
}); */

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
