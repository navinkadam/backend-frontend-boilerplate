const express = require("express");
const router = express.Router();

const sampleRoutes = require("./sample");

router.use("/sample", sampleRoutes);

module.exports = router;
