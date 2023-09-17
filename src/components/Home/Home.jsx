import { useState } from "react";
import Cards from "../Cards/Cards";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [allCardsName, setAllCardsName] = useState([]);
  // console.log(allCardsName);
  const [creditHrs, setCreditHrs] = useState(20);
  const [totalCreditHrs, setTotalCreditHrs] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddToCart = (data) => {
    const isExist = allCardsName.find((name) => name === data.course_name);

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
        toast.info("You don't have sufficient credit hours to select this course !", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "colored",
          });
      } else {
        const newAllCardsName = [...allCardsName, data.course_name];
        setAllCardsName(newAllCardsName);

        setTotalCreditHrs(newTotalCreditHrs);

        const newCreditHrs = creditHrs - data.credit;
        setCreditHrs(newCreditHrs);

        setTotalPrice(totalPrice + data.price);
      }
    }
  };

  return (
   <div className="flex mb-16">
      <Cards handleAddToCart={handleAddToCart}></Cards>
      <Cart
        allCardsName={allCardsName}
        creditHrs={creditHrs}
        totalCreditHrs={totalCreditHrs}
        totalPrice={totalPrice}
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
