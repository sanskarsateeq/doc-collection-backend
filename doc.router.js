const express = require("express");
const { postDocument } = require("./doc.controller");
const validate = require("./middlewares/validate");
const { doc } = require("./doc.validation");
const router = express.Router();

router.post("/", validate(doc), postDocument);

module.exports = router;
