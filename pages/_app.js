import "../styles/globals.css";
import Notification from "../components/ui/notification";
import {NotificationContextProvider} from "../store/notification-context";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <Notification title="IMDB Subscription" message="Registered Successfully" status="success" />
    </div>
  );
}

export default MyApp;
