const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/recap", async (req, res) => {
  const { videoUrl } = req.body;

  if (!videoUrl) {
    return res.status(400).json({ error: "No video URL provided" });
  }

  res.json({
    message: "Auto recap generated successfully",
    video: videoUrl,
    recap: "ဒီဗီဒီယိုဟာ ဇာတ်လမ်းအကျဉ်းချုပ် အလိုအလျောက်ထုတ်ပေးထားပါတယ်။"
  });
});

app.listen(3000, () => {
  console.log("Auto Recap Backend Running on port 3000");
});
