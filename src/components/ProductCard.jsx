import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ProductCard = ({ product, index }) => {
  return (
    <div className="flex gap-24">
      <div className={`rounded-lg w-1/2 border shadow-lg ${index === 1 ? "order-2" : ""}`}>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={product.desktopImage}
          alt={product.name}
        />
      </div>
      <div className="flex flex-col justify-center gap-7 w-1/2">
        {index === 0 && <p className="text-primary">NEW PRODUCT</p>}
        <h2 className="uppercase text-[40px] font-bold leading-none">
          {product.name}
        </h2>
        <p>{product.description}</p>
        <Link
          to={`/product/${product.id}`}
          className="flex items-center justify-center bg-primary text-white border font-bold h-[48px] w-[160px] uppercase"
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
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProductCard;
