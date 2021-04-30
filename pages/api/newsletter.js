import MongoDB from "../../middleware/mongodb";

function newsletter(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    if (!userEmail) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    console.log(userEmail);
    res.status(201).json({ message: "Signed Up!" });
  }
}

export default newsletter;
