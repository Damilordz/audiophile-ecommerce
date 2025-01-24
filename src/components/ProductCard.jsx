import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductCard = ({ product, index }) => {
  const [currentSrc, setCurrentSrc] = useState(
    product.image.find((img) => img["desktop"])?.desktop
  );

  useEffect(() => {
    const updateImageSrc = () => {
      if (window.innerWidth < 768) {
        setCurrentSrc(product.image.find((img) => img["mobile"])?.mobile);
      } else if (window.innerWidth < 1024) {
        setCurrentSrc(
          product.image.find((img) => img["tabletPreview"])?.tabletPreview
        );
      } else {
        setCurrentSrc(product.image.find((img) => img["desktop"])?.desktop);
      }
    };

    updateImageSrc(); // Update on initial render
    window.addEventListener("resize", updateImageSrc); // Update on window resize

    return () => window.removeEventListener("resize", updateImageSrc); // Cleanup listener
  }, [product.image]);

  return (
    <div className="flex flex-col lg:flex-row text-center lg:text-start  gap-10 lg:gap-32">
      <div
        className={`rounded-lg md:max-h-[350px] lg:max-h-[560px] lg:w-1/2 border shadow-lg ${
          index === 1 ? "lg:order-2" : ""
        }`}
      >
        <img
          className="w-full h-full md:max-h-[350px] lg:max-h-[560px] object-center rounded-lg"
          src={currentSrc}
          alt={product.name}
        />
      </div>
      <div className="flex flex-col justify-center items-center lg:items-start gap-4 sm:gap-7 lg:w-1/2">
        {index === 0 && <p className="text-primary">NEW PRODUCT</p>}
        <h2 className="uppercase text-[28px] sm:text-[40px] font-bold sm:leading-none">
          {product.name} {product.category}
        </h2>
        <p className="text-[#a09e9e]">{product.description}</p>
        <Link
          to={`/product/${product.id}`}
          className="flex items-center justify-center bg-primary hover:bg-[#fbaf85] text-white font-bold h-[48px] w-[160px] uppercase"
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
    image: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProductCard;
