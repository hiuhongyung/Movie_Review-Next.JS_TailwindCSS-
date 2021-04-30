import { useRef ,useState} from "react";

function BackendRoute() {
    const [feedbackItems, setFeedbackItems] = useState([]);

  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;
    
    const reqBody = { email: enteredEmail, text: enteredFeedback};
    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    //{email: 'xxyy@gmail.com', text: 'Some feedback text}
    //send this object to the api route
  };

  const loadFeedbackkHandler = () => {
    fetch('/api/feedback')
    .then((response) => response.json())
    .then((data) => {
        setFeedbackItems(data.feedback);
    }) ;
  };

  return (
    <div>
      <h1>Show you how to do the api routing</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your email address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" row="5" ref={feedbackInputRef}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
      <br/>
        <button onClick={loadFeedbackkHandler}>Lood Feedback</button>
        <ul>
            {feedbackItems.map(item => <li key={item.id}>{item.text}</li>)}
        </ul>
    </div>
  );
}

export default BackendRoute;
