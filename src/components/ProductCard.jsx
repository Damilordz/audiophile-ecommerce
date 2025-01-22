import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductCard = ({ product, index }) => {
  return (
    <div className="flex flex-col text-center sm:text-start sm:flex-row gap-10 sm:gap-32">
      <div
        className={`rounded-lg sm:w-1/2 border shadow-lg ${
          index === 1 ? "sm:order-2" : ""
        }`}
      >
        <img
          className="w-full h-full object-cover rounded-lg"
          src={product.desktopImage}
          alt={product.name}
        />
      </div>
      <div className="flex flex-col justify-center items-center sm:items-start gap-4 sm:gap-7 sm:w-1/2">
        {index === 0 && <p className="text-primary">NEW PRODUCT</p>}
        <h2 className="uppercase text-[28px] sm:text-[40px] font-bold sm:leading-none">
          {product.name} {product.category}
        </h2>
        <p className="text-[#a09e9e]">{product.description}</p>
        <Link
          to={`/product/${product.id}`}
          className="flex items-center justify-center bg-primary hover:bg-[#fbaf85] text-white border font-bold h-[48px] w-[160px] uppercase"
        >
          See Product
        </Link>
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  product: PropTypes.shape({
    desktopImage: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProductCard;
