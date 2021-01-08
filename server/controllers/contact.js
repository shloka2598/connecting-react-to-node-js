exports.respondToContactForm = (req, res) => {
  const { name, email, message } = req.body;

  if (!name) {
    res.status(400).json({ error: "Name is required" });
  } else if (!email) {
    res.status(400).json({ error: "Email is required" });
  } else if (!message || message.length < 20) {
    res
      .status(400)
      .json({ error: "Message must be atleast 20 characters long" });
  } else {
    res.json({ name, email, message, success: true });
  }
};
