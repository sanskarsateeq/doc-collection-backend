const catchAsync = require("./utils/catchAsync");
const Doc = require("./doc.model");

const postDocument = catchAsync(async (req, res) => {
  const document = await Doc.create(req.body);
  return res.json({ document });
});

module.exports.postDocument = postDocument;
