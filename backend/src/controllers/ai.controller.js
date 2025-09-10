// ai.controller.js
const { generateContent } = require("../services/ai.service"); // <-- import correctly

module.exports.getReview = async (req, res) => {
  const code = req.body.code;

  if (!code) {
    return res.status(400).send("Code is required");
  }

  try {
    const review = await generateContent(code);
    res.json({ review });
  } catch (err) {
    console.error("Gemini API error:", err);
    res.status(500).send("Error generating review");
  }
};
