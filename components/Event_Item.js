import Link from "next/link";

function Event_Item({ title, image, date, location, id }) {
  const humanreadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(".", "\n");
  const exploreLink = `/planner/events/${id}`;

  return (
    <li className="flex flex-col justify-center items-center w-3/4  mb-8  border-2  border-yellow-200 rounded-md">
      <img
        src={image}
        alt={title}
        className=" w-3/4 cursor-pointer  hover:animate-ping"
      />
      <div>
        <div>
          <h2 className="mb-1 mt-1 text-xl">{title}</h2>
          <div className="mb-1">

            <time>{humanreadableDate}</time>
          </div>
          <div className="mb-1">
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className="mb-5 ml-[15rem] text-sm text-yellow-600 cursor-pointer hover:underline hover:text-yellow-200 ">
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default Event_Item;
