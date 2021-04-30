import fs from "fs";
import path from "path";
function handler (req, res) {
  //Server-side code (never expose to our visitor)
  if (req.method === "POST") {
    const email = req.body.email; //extracting request body data 
    const feedbackText = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText,
    };

    //store that in a database or in a file
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Success", feedback: newFeedback });
  } 
  if(req.method==='GET'){
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    res.status(200).json({feedback: data});
  }
};

export default handler;
