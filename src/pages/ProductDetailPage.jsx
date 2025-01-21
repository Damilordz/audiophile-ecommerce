import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import products from "../data/ProductDetailsData";
import CartContext from "../context/CartContext";

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
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
        <div className="w-9/12 flex flex-col gap-32">
          <div className="flex justify-between gap-32">
            <div className="rounded-lg shadow-md w-1/2">
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet={product.image.find((img) => img.mobile)?.mobile || ""}
                />
                <source
                  media="(max-width: 1024px)"
                  srcSet={product.image.find((img) => img.tablet)?.tablet || ""}
                />
                <img
                  src={product.image.find((img) => img.desktop)?.desktop || ""}
                  alt={product.name}
                  className="rounded-lg shadow-md w-full h-full object-cover"
                />
              </picture>
            </div>

            <div className="flex justify-center flex-col gap-7 w-1/2">
              <p className="uppercase text-primary">New Product</p>
              <h1 className="text-[40px] font-bold">{product.name}</h1>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-[18px] font-bold">${product.price}</p>
              <div className="flex gap-4">
                <div className="shadow-md border border-[#e0dfdf] flex items-center justify-between px-4 bg-[#ebe8e8] w-[120px] h-[48px]">
                  <button onClick={decrementQuantity}>-</button>
                  <span className="font-bold">{quantity}</span>
                  <button onClick={incrementQuantity}>+</button>
                </div>
                <button
                  className="flex items-center justify-center bg-primary text-white h-[48px] w-[160px] uppercase text-[13px] font-bold"
                  onClick={() => addToCart(product.id, quantity)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-32">
            {/* Features Section */}
            <div className="w-[55%]">
              <h2 className="text-[32px] font-bold uppercase mb-3">Features</h2>
              <div className="features flex flex-col gap-3 text-gray-600">
                {product.features.map((feature, index) => (
                  <p key={index}>{feature}</p>
                ))}
              </div>
            </div>

            {/* In the Box Section */}
            <div className="mb-12 w-[45%]">
              {product.inTheBox && (
                <div>
                  <h2 className="text-[32px] font-bold uppercase mb-3">
                    In the Box
                  </h2>
                  <div className="features flex flex-col gap-3 text-gray-600">
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
          <div className="flex gap-6">
            <div className="flex flex-col gap-6 w-[40%]">
              {["gallery1", "gallery2"].map((galleryKey, index) => (
                <picture key={index}>
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
                    className="rounded-lg shadow-md"
                  />
                </picture>
              ))}
            </div>
            <div className="w-[60%]">
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
                  className="rounded-lg shadow-md"
                />
              </picture>
            </div>
          </div>

          {/* Recommendations Section */}
          <div className="w-full">
            <h2 className="text-[32px] text-center font-bold uppercase mb-6">
              You may also like
            </h2>
            <div>
              <div className="flex gap-10 justify-center">
                {product.recommendations.map((recId) => {
                  const recommendedProduct = products.find(
                    (p) => p.id === recId
                  );
                  if (!recommendedProduct) return null;

                  return (
                    <div key={recId} className="rounded-lg text-center">
                      <picture>
                        <source
                          media="(max-width: 768px)"
                          srcSet={
                            recommendedProduct.image.find((img) => img.mobile)
                              ?.mobile || ""
                          }
                        />
                        <source
                          media="(max-width: 1024px)"
                          srcSet={
                            recommendedProduct.image.find((img) => img.tablet)
                              ?.tablet || ""
                          }
                        />
                        <img
                          src={
                            recommendedProduct.image.find((img) => img.desktop)
                              ?.desktop || ""
                          }
                          alt={recommendedProduct.name}
                          className="rounded-lg shadow-md"
                        />
                      </picture>
                      <h3 className="mt-4 text-lg font-bold">
                        {recommendedProduct.name}
                      </h3>
                      <button
                        className="mt-2 px-6 py-2 bg-primary text-white uppercase font-bold rounded-md"
                        onClick={() => {
                          window.location.href = `/product/${recId}`;
                        }}
                      >
                        See Product
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
