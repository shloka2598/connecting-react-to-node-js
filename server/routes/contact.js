const express = require("express");
const router = express.Router();

// controllers
const { respondToContactForm } = require("../controllers/contact");

router.get("/", (req, res) => res.json({ message: "this is the home page" }));
router.post("/contact", respondToContactForm);

module.exports = router;
