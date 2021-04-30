import { useEffect, useState } from "react";
import useSWR from "swr";

function LastSales() {
  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSWR(
    "https://react-nosql-80e52-default-rtdb.firebaseio.com/sales.json"
  );
  //useEffect to tansform the data
  useEffect(() => {
    if (data) {
      const transformedSales = [];
      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformedSales);
    }
  }, [data]);
  //   useEffect(() => {
  //     setIsLoading(true);
  //     fetch("https://react-nosql-80e52-default-rtdb.firebaseio.com/sales.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const transformedSales = [];
  //         for (const key in data) {
  //           transformedSales.push({
  //             id: key,
  //             username: data[key].username,
  //             volume: data[key].volume,
  //           });
  //         }
  //         setSales(transformedSales);
  //         setIsLoading(false);
  //       });
  //   }, []);

  if (error) {
    return <p>Failed to load</p>;
  }
  if (!data) {
    return <p>Loading ... </p>;
  }

  if (!sales) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ul>
        {sales.map((sale) => (
          <li key={sale.id}>
            {sale.username} - ${sale.volume}
          </li>
        ))}
      </ul>
    </div>
  );
}



export default LastSales;
