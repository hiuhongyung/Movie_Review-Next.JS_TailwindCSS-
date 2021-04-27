import Head from "next/head";
import Link from "next/link";
import {useRouter} from "next/router";

function index() {
  const router = useRouter();
  const movies = [
    { id: "apple", name: "Apple pie" },
    { id: "nobody", name: "Nobody" },
    { id: "sunset", name: "Love before sunset" },
  ];
  const loadProjectHandler = () => {
    router.push('/result/apple');
    //router.replace('/result/apple') --> cannot go back
  }
  return (
    <div>
      <Head>
        <title> Movie </title>
      </Head>
      <h2>Welcome to the movie review </h2>
      <button onClick={loadProjectHandler}>Navigate Programmicticallly</button>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/result/${movie.id}`}>{movie.name}</Link>
        </li>
      ))}
    </div>
  );
}

export default index;
