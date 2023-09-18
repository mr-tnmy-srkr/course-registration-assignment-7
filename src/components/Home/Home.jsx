import { useState } from "react";
import Cards from "../Cards/Cards";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [mappedData, setMappedData] = useState([]);
  // console.log(mappedData);
  const [creditHrs, setCreditHrs] = useState(20);
  const [totalCreditHrs, setTotalCreditHrs] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddToCart = (data) => {
    // console.log(data);
    const isExist = mappedData.find(
      (item) => item.course_name === data.course_name
    );

    if (isExist) {
      toast.warn("Product is already is in cart !", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "colored",
      });
    } else {
      const newTotalCreditHrs = totalCreditHrs + data.credit;
      if (newTotalCreditHrs > 20) {
        toast.info(
          "You don't have sufficient credit hours to select this course !",
          {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "colored",
          }
        );
      } else {
        //focus here
        const newMappedData = [...mappedData, data];
        setMappedData(newMappedData);

        setTotalCreditHrs(newTotalCreditHrs);

        const newCreditHrs = creditHrs - data.credit;
        setCreditHrs(newCreditHrs);

        setTotalPrice(totalPrice + data.price);
      }
    }
  };

  const handleRemove = (mapData) => {
    // console.log(mapData.course_name);
    // console.log(mappedData);
    const filteredCart = mappedData.filter((item) => item.id !== mapData.id);
    setMappedData(filteredCart);
    setTotalCreditHrs(totalCreditHrs - mapData.credit);
    setCreditHrs(creditHrs + mapData.credit);
    setTotalPrice(totalPrice - mapData.price);
  };

  return (
    <div className="flex mb-16">
      <Cards handleAddToCart={handleAddToCart}></Cards>
      <Cart
        mappedData={mappedData}
        creditHrs={creditHrs}
        totalCreditHrs={totalCreditHrs}
        totalPrice={totalPrice}
        handleRemove={handleRemove}
      ></Cart>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};
export default Home;
