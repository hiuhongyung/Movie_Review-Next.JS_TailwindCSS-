import { getFeaturedEvents } from "../../dummy-data";
import EventList from "../../components/Event_List";
import Events_Search from "../../components/events/events.search";
import { useRouter } from "next/router";

function index() {
  const featuredEvents = getFeaturedEvents();
  const router = useRouter();
  const findEventsHandler = (year, month) => {
    const fullPath = `/planner/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <div>
      <Events_Search onSearch={findEventsHandler} />
      <EventList items={featuredEvents} />
    </div>
  );
}

export default index;
