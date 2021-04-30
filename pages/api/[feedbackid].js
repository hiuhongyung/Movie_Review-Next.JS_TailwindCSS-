import fs from "fs";
import path from "path";
const Handler = (req, res) => {
  //which concrete values was encoded in the URL
  const feedbackId = req.query.feedbackId;
  const filePath = path.join(process.cwd(), "data", "feedback.json");
  const fileData = fs.readFileSync(filePath);
  const feedbackData = JSON.parse(fileData);
  //Find the selected feedback ID
  const selectedFeedback = feedbackData.find(
    (feedback) => feedback.id === feedbackId
  );
  res.status(200).json({ feedback: selectedFeedback });
};

export default Handler;