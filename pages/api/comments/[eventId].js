function EventHandler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    //Add server side validation
    const { email, name, text } = req.body; //make sure include these three when submitting the data
    if (!email.includes("@") || !name || name.trim() === "" || !text) {
      res.status(422).json({ message: "Invalid Input" });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };
    console.log(newComment);
    res.status(201).json({ message: "Added Comment", comment: newComment });
  }
  if (req.method === "GET") {
    const dummyList = [
      {
        id: "c1",
        name: "Apple",
        text: "Apple pie is the best food in the world",
      },
      {
        id: "c2",
        name: "Orange",
        text: "Orange is the worst food in the world",
      },
    ];

    res.status(200).json({ comments: dummyList});
  }
}

export default EventHandler;
