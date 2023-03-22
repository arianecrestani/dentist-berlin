import { Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [dentists, setDentists] = useState([]);

  const [loading, setLoading] = useState(false);
  const getApiData = async () => {
    const testUrl = `https://overpass-api.de/api/interpreter?data=[out:json];node(around:3000,52.516275,13.377704)[amenity=dentist];out;`;

    fetch(testUrl)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setDentists(data.elements);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);

    getApiData();
  }, []);

  return (
    <div>
      {loading && <p>loading</p>}
      <div>
        {dentists.map((item) => (
          <li>
            {item.tags.amenity} {item.tags.name} --- {item.tags["addr:street"]}
          </li>
        ))}
      </div>

      <div>
        <Link to={`/login`}>Login</Link>
        <Stack spacing={3}></Stack>
      </div>
    </div>
  );
};

export default Home;
