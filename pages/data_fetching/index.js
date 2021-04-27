import Head from "next/head";
import fs from "fs/promises";
import path from "path";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Link from "next/link";

export default function Data(props) {
  const { products } = props;

  return (
    <div>
      <Head>
        <title>Data Fetching</title>
      </Head>
      <Header />
      <h1>Learn how to do the server sided rendering </h1>
      <ul className="flex flex-col justify-center space-y-4 items-center mt-10">
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/data_fetching/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), "dummy-backend.json"); //cwd() -> root file
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
    revalidate: 30,
  };
}
