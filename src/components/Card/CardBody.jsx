import { BsCurrencyDollar } from 'react-icons/bs';
import { BiBookOpen } from 'react-icons/bi';
import PropTypes from "prop-types";

const CardBody = ({ data, handleAddToCart }) => {
  // console.log(data);
  const { course_name, course_details, price, credit } = data;

  return (
    <div>
      <div className="card-body px-4 pt-0 pb-4 text-left">
        <h2 className="card-title text-lg font-semibold text-card-headings">
          {course_name}
        </h2>
        <p className="text-sm font-normal text-card_details leading-6">
          {course_details}
        </p>
        <div className="flex flex-col md:flex-row justify-around text-card_details py-2 space-y-2 md:space-y-0">
          <p className=" font-medium text-base flex md:justify-start md:pl-1 items-center gap-2">
            <span ><BsCurrencyDollar/></span>
            <span>Price : {price}</span>
          </p>
          <p className=" font-medium text-base flex md:justify-end md:pr-2 items-center gap-2">
          <span><BiBookOpen /></span>
            <span>Credit : {credit}hr</span>
          </p>
        </div>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(data)}
            className="btn btn-primary w-full bg-btn-bg text-white capitalize font-semibold text-lg"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};
CardBody.propTypes = {
  data: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};
export default CardBody;
