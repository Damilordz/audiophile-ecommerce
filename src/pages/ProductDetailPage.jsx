import { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/ProductDetailsData";
import CartContext from "../context/CartContext";
import NavLinkContext from "../context/NavLinkContext";
import CategorySection from "../components/CategorySection";

const ProductDetails = () => {
  const { addToCart, formatCurrency } = useContext(CartContext);
  const { activeLink } = useContext(NavLinkContext);
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h1>Product not found</h1>;
  }

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      {product && (
        <div className="w-10/12 flex flex-col gap-10">
          <Link to={`/${activeLink}`} className="text-[#a09e9e] hover:text-primary">
            Go Back
          </Link>
          <div className="flex flex-col gap-20 sm:gap-32 mb-20">
            <div className="flex flex-col sm:flex-row justify-between gap-10 md:gap-20 lg:gap-32">
              {/* Responsive Images */}
              <div className="rounded-lg shadow-md sm:w-1/2">
                <picture>
                  <source
                    media="(max-width: 768px)"
                    srcSet={
                      product.image.find((img) => img.mobile)?.mobile || ""
                    }
                  />
                  <source
                    media="(max-width: 1024px)"
                    srcSet={
                      product.image.find((img) => img.tablet)?.tablet || ""
                    }
                  />
                  <img
                    src={
                      product.image.find((img) => img.desktop)?.desktop || ""
                    }
                    alt={product.name}
                    className="rounded-lg shadow-md w-full h-full object-cover"
                  />
                </picture>
              </div>

              <div className="flex justify-center flex-col gap-4 sm:gap-7 sm:w-1/2">
                <p className="uppercase text-primary tracking-[.5rem]">
                  New Product
                </p>
                <h1 className="text-[28px] sm:text-[40px] font-semibold sm:font-bold uppercase">
                  {product.name}
                </h1>
                <p className="text-[#a09e9e]">{product.description}</p>
                <p className="text-[18px] font-bold">
                  {formatCurrency(product.price)}
                </p>
                <div className="flex gap-4">
                  <div className="shadow-md border border-[#e0dfdf] flex items-center justify-between px-4 bg-[#ebe8e8] w-[120px] h-[48px]">
                    <button
                      onClick={decrementQuantity}
                      className="hover:text-primary"
                    >
                      -
                    </button>
                    <span className="font-bold">{quantity}</span>
                    <button
                      onClick={incrementQuantity}
                      className="hover:text-primary"
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="flex items-center justify-center bg-primary hover:bg-[#fbaf85] text-white h-[48px] w-[160px] uppercase text-[13px] font-bold"
                    onClick={() => addToCart(product.id, quantity)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 md:gap-20 lg:gap-32">
              {/* Features Section */}
              <div className="lg:w-[60%]">
                <h2 className="text-[32px] font-bold uppercase mb-3">
                  Features
                </h2>
                <div className="features flex flex-col gap-3 text-[#a09e9e]">
                  {product.features.map((feature, index) => (
                    <p key={index}>{feature}</p>
                  ))}
                </div>
              </div>

              {/* In the Box Section */}
              <div className="mb-12 lg:w-[40%]">
                {product.inTheBox && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
                    <h2 className="text-[32px] font-bold uppercase mb-3">
                      In the Box
                    </h2>
                    <div className="features flex flex-col gap-3 text-[#a09e9e]">
                      {product.inTheBox.map((item, index) => (
                        <div key={index} className="flex gap-3">
                          <p className="font-bold text-primary">
                            {item.quantity}X
                          </p>
                          <p>{item.item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Product Images Section */}
            <div className="flex flex-col sm:flex-row gap-6 sm:h-[592px] overflow-hidden">
              <div className="flex flex-col gap-6 sm:w-[40%] h-full">
                {["gallery1", "gallery2"].map((galleryKey, index) => (
                  <picture
                    key={index}
                    className="h-full flex-1 overflow-hidden"
                  >
                    <source
                      media="(max-width: 768px)"
                      srcSet={
                        product.image.find(
                          (img) =>
                            img[
                              `mobile${
                                galleryKey.charAt(0).toUpperCase() +
                                galleryKey.slice(1)
                              }`
                            ]
                        )?.[
                          `mobile${
                            galleryKey.charAt(0).toUpperCase() +
                            galleryKey.slice(1)
                          }`
                        ] || ""
                      }
                    />
                    <source
                      media="(max-width: 1024px)"
                      srcSet={
                        product.image.find(
                          (img) =>
                            img[
                              `tablet${
                                galleryKey.charAt(0).toUpperCase() +
                                galleryKey.slice(1)
                              }`
                            ]
                        )?.[
                          `tablet${
                            galleryKey.charAt(0).toUpperCase() +
                            galleryKey.slice(1)
                          }`
                        ] || ""
                      }
                    />
                    <img
                      src={
                        product.image.find((img) => img[galleryKey])?.[
                          galleryKey
                        ] || ""
                      }
                      alt={`Gallery ${index + 1}`}
                      className="rounded-lg shadow-md h-full w-full object-cover"
                    />
                  </picture>
                ))}
              </div>
              <div className="sm:w-[60%]">
                <picture>
                  <source
                    media="(max-width: 768px)"
                    srcSet={
                      product.image.find((img) => img.mobileGallery3)
                        ?.mobileGallery3 || ""
                    }
                  />
                  <source
                    media="(max-width: 1024px)"
                    srcSet={
                      product.image.find((img) => img.tabletGallery3)
                        ?.tabletGallery3 || ""
                    }
                  />
                  <img
                    src={
                      product.image.find((img) => img.gallery3)?.gallery3 || ""
                    }
                    alt="Gallery 3"
                    className="rounded-lg shadow-md h-full w-full object-cover"
                  />
                </picture>
              </div>
            </div>

            {/* Recommendations Section */}
            <div className="w-full">
              <h2 className="text-[24px] sm:text-[32px] text-center font-semibold sm:font-bold uppercase mb-6">
                You may also like
              </h2>
              <div>
                <div className="flex flex-col sm:flex-row  gap-10 md:gap-4 lg:gap-10 justify-center">
                  {product.recommendations.map((recId) => {
                    const recommendedProduct = products.find(
                      (p) => p.id === recId
                    );
                    if (!recommendedProduct) return null;

                    return (
                      <div
                        key={recId}
                        className="rounded-lg text-center flex-grow"
                      >
                        {/* Responsive Images */}
                        <div className="bg-[#f3f3f3] flex justify-center items-center rounded-lg shadow-md overflow-hidden">
                          <picture>
                            <source
                              media="(max-width: 768px)"
                              srcSet={
                                recommendedProduct.image.find(
                                  (img) => img.mobile
                                )?.mobile || ""
                              }
                            />
                            <source
                              media="(max-width: 1024px)"
                              srcSet={
                                recommendedProduct.image.find(
                                  (img) => img.tablet
                                )?.tablet || ""
                              }
                            />
                            <img
                              src={
                                recommendedProduct.image.find(
                                  (img) => img.desktop
                                )?.desktop || ""
                              }
                              alt={recommendedProduct.name}
                              className="rounded-lg h-[120px] md:h-[318px] object-cover"
                            />
                          </picture>
                        </div>
                        <h3 className="my-6 text-lg font-semibold uppercase">
                          {recommendedProduct.name}
                        </h3>
                        <Link
                          to={`/product/${recId}`}
                          className="px-6 py-3  bg-primary hover:bg-[#fbaf85] text-white uppercase font-bold"
                        >
                          See Product
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <CategorySection />
    </div>
  );
};

export default ProductDetails;
