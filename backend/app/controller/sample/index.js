const express = require("express");
const router = express.Router();
const { getErrorPayload } = require("../../utils/errorUtil");

async function sample(req, res) {
  try {
    return res.status(200).json({ data: "sample API called" });
  } catch (error) {
    const { status, ...rest } = getErrorPayload(error, 401);
    res.status(status).json({ ...rest });
  }
}

router.get("/", sample);

module.exports = router;
