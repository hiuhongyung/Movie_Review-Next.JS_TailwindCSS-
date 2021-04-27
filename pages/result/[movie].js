import Head from "next/head";
import Header from "../../components/Header";
import ReactPlayer from "react-player";
import { useState } from "react";
import Results from "../../components/Results";
import requests from "../utils/requests";
import Footer from "../../components/Footer";

export default function movie({ results }) {
  const [isPlaying, setisPlaying] = useState(false);

  return (
    <div>
      <Head>
        <title>Movie Description</title>
      </Head>
      <Header />
      <div className="flex flex-col justify-between items-center sm:flex-row ">
        <div className="flex items-center  sm:w-[50%] h-50 m-8 ">
          <ReactPlayer
            url={"https://www.youtube.com/watch?v=wZti8QKBWPo"}
            playing={isPlaying}
            className="h-15 p-5"
          />
        </div>
        <div className="flex flex-col items-center justify-center sm:mt-20 ">
          <h2 className="text-3xl text-yellow-200 mb-3">Storyline</h2>
          <p className="pl-4 pr-4 text-bold">
            Emmy winner Bob Odenkirk (Better Call Saul, The Post, Nebraska)
            stars as Hutch Mansell, an underestimated and overlooked dad and
            husband, taking life's indignities on the chin and never pushing
            back. A nobody. When two thieves break into his suburban home one
            night, Hutch declines to defend himself or his family, hoping to
            prevent serious violence. His teenage son, Blake (Gage Munroe, The
            Shack), is disappointed in him and his wife, Becca (Connie Nielsen,
            Wonder Woman), seems to pull only further away. The aftermath of the
            incident strikes a match to Hutch's long-simmering rage, triggering
            dormant instincts and propelling him on a brutal path that will
            surface dark secrets and lethal skills. In a barrage of fists,
            gunfire and squealing tires, Hutch must save his family from a
            dangerous adversary (famed Russian actor Aleksey Serebryakov,
            Amazon's McMafia)-and ensure that he will never be underestimated as
            a nobody again. Written by Universal Pictures
          </p>
        </div>
      </div>
      <Footer/>

    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
