import { getFeaturedEvents } from "../../dummy-data";
import EventList from "../../components/Event_List";
import Events_Search from "../../components/events/events.search";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import { useRef, useState } from "react";
import EmailRegistration from "../../components/input/newsletter-registration";

function index() {
  const featuredEvents = getFeaturedEvents();
  const router = useRouter();
  const findEventsHandler = (year, month) => {
    const fullPath = `/planner/events/${year}/${month}`;
    router.push(fullPath);
  };

  const inputEmailRef = useRef();

  const registerEmailHandler = (event) => {
    event.preventDefault();
    const inputEmail = inputEmailRef.current.value;
    const reqBody = { email: inputEmail };
    fetch('/api/emailregister', {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <div className=" flex flex-col items-center">
      <Header />
      <EmailRegistration/>
      <Events_Search onSearch={findEventsHandler} />
      <EventList items={featuredEvents} />
    </div>
  );
}

export default index;
