const express = require("express");
const mongoose = require("mongoose");
const { config } = require("dotenv");
const helmet = require("helmet");
const docRouter = require("./doc.router");
const ApiError = require("./utils/ApiError");
const httpStatus = require("http-status");

const { errorHandler } = require("./middlewares/error");

config();

const app = express();

const PORT = process.env.PORT || 1337;

const DB_URL = process.env.DB_URL || "<DB_URL>";

app.use(helmet());
// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.use("/doc", docRouter);

app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

app.use(errorHandler);

mongoose.connect(
  DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      console.log("DB Connection Failed!");
      console.log(`DB URL: ${process.env.DB_URL}`);
      console.log(error);
      return;
    }
    app.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}`);
    });
  }
);
