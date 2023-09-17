import PropTypes from "prop-types";

const CardFigure = ({ image }) => {
  return (
    <div>
      <figure className="p-4">
        <img src={image} alt="Shoes" className="rounded-xl w-full" />
      </figure>
    </div>
  );
};

CardFigure.propTypes = {
  image: PropTypes.string.isRequired,
};

export default CardFigure;
