import PropTypes from "prop-types";

const Cart = ({ allCardsName, creditHrs, totalCreditHrs, totalPrice }) => {
  let count = 0;
  return (
    <div className="w-2/5 lg:w-1/4 h-[95vh] ml-5 overflow-y-auto sticky top-0">
      <div className="h-max card bg-white p-4 space-y-5">
        <h1 className="text-secondary text-2xl font-bold text-center underline">
          Cart
        </h1>
        <hr className="text-cart-hr" />
        <h1 className="text-secondary text-lg font-semibold animate-pulse">
          Credit Hour Remaining {creditHrs} hr
        </h1>
        <hr className="text-cart-hr" />
        <div className="space-y-3">
          <h1 className="text-card-headings font-bold text-xl">Course Name</h1>
          <ol className="text-card_details text-base leading-8 space-y-3">
            {allCardsName &&
              allCardsName?.map((heading, idx) => (
                <li key={idx}>
                  <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="flex md:items-center gap-2">
                      <span className="font-semibold text-cart-text-total">
                        {(count += 1)}.
                      </span>
                      <span>{heading}</span>
                    </div>
                    <div className="hidden">
                      <button className="btn btn-xs btn-error btn-circle text-white">
                        x
                      </button>
                    </div>
                  </div>
                </li>
              ))}
          </ol>
        </div>
        <hr className="text-cart-hr" />
        <p className="text-cart-text-total text-base font-medium">
          Total Credit Hour : {totalCreditHrs}
        </p>
        <hr className="text-cart-hr" />
        <p className="text-cart-text-total text-base font-semibold">
          Total Price : {totalPrice} USD
        </p>
      </div>
    </div>
  );
};
Cart.propTypes = {
  allCardsName: PropTypes.array.isRequired,
  creditHrs: PropTypes.number,
  totalCreditHrs: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};
export default Cart;
