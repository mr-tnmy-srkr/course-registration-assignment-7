import CardFigure from "./CardFigure";
import CardBody from "./CardBody";
import PropTypes from "prop-types";

const Card = ({data,handleAddToCart}) => {
  const {image} = data;
  return (
    <div>
      <div className="card bg-white shadow-xl">
        <CardFigure image = {image}></CardFigure>
        <CardBody data={data} handleAddToCart={handleAddToCart}></CardBody>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
  image: PropTypes.string,
  handleAddToCart: PropTypes.func.isRequired,
};
export default Card;
