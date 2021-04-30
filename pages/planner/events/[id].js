import { useRouter } from "next/router";
import { getEventById } from "../../../dummy-data";
import { Fragment } from "react";
import EventSummary from "../../../components/event-detail/event-summary";
import EventLogistics from "../../../components/event-detail/event-logistics";
import EventContent from "../../../components/event-detail/event-content";
import Header from "../../../components/Header";
import Comments from "../../../components/input/comments";

function SingleEvent() {
  const router = useRouter();

  const eventId = router.query.id;

  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found</p>;
  } 
  return (
    <Fragment>
      <Header />
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id} /> 
    </Fragment>
  );
}

export default SingleEvent;
