import { useEffect, useState } from "react";
import Card from "../Card/Card";
import PropTypes from "prop-types";

const Cards = ({ handleAddToCart }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);


  return (
    <div className="w-3/5 lg:w-3/4 grid lg:grid-cols-3 gap-5">
      {data &&
        data?.map((data) => (
          <Card
            key={data.id}
            data={data}
            handleAddToCart={handleAddToCart}
          ></Card>
        ))}
    </div>
  );
};
Cards.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
};
export default Cards;
