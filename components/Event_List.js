import EventItem from "../components/Event_Item";

function Event_List(props) {
  const { items } = props;
  return (
    <ul className="flex flex-col items-center m-8 ">
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}

export default Event_List;
