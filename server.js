const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

/**
 * impot routes
 */
const studentsRouter = require("./routes/students");
const teachersRouter = require("./routes/teachers");
const examsRouter = require("./routes/exams/exams");
const attenceRouter = require("./routes/attendance");
const gradeRouter = require("./routes/exams/grade");
const subjectRouter = require("./routes/academic/subjects");
const classRouter = require("./routes/academic/class");
const { model } = require("./models/Students");

//init the app
const app = express();
app.use(express.json());
app.use(morgan("dev"));
require("dotenv").config();

const db = require("./config/keys").mongoURI;
mongoose.connect(db, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//routes
app.use("/students", studentsRouter);
app.use("/teachers", teachersRouter);
app.use("/exams", examsRouter);
app.use("/attendance", attenceRouter);
app.use("/grades", gradeRouter);
app.use("/subjects", subjectRouter);
app.use("/class", classRouter);

//const port = process.env.PORT;

app.listen(6000, () => console.log(`Connected Successfully 6000`));
module.exports=app
