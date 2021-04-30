import fs from "fs";
import path from "path";
import { Fragment, useState } from "react";
function FeedBack(props) {
  const [feedbackData, setFeedbackData] = useState();
  const loodFeedbackHandler = (id) => {
    fetch(`/api/${id}`) //    /api/some-feedback-id
      .then((response) => response.json())
      .then((data) => {
        setFeedbackData(data.feedback);
      });
  };
  return (
    <Fragment>
        {feedbackData&& <p>{FeedbackData.email}</p> }
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.key}>
            {item.text} {item.email}
            <button onClick={loodFeedbackHandler.bind(null, item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "feedback.json");
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);

  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedBack;
