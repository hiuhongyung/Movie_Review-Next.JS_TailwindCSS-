import fs from "fs";
import path from "path";
function EmailHandler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const newEmail = {
      id: new Date().toISOString(),
      email: email,
    };
    const filePath = path.join(process.cwd(), "data", "emails.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(newEmail);
    fs.writeFileSync(filePath, JSON.stringify(fileData));
    res.status(201).json({ message: "Success" });
  }
}

export default EmailHandler;
