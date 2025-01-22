import products from "../data/ProductDetailsData";
import ProductCard from "../components/ProductCard";
import CategorySection from "../components/CategorySection";

function Headphones() {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-black text-white sm:h-[250px] p-4 w-full flex items-center justify-center">
        <h1 className="text-[40px] font-semibold sm:bold">Headphones</h1>
      </div>

      <div className="w-10/12 my-20">
        <div className="flex flex-col gap-24 sm:gap-32">
          {products
            .filter((p) => p.category === "headphones")
            .map((product, index) => (
              <ProductCard key={index} product={product} index={index} />
            ))}
        </div>
      </div>
      <CategorySection />
    </div>
  );
}

export default Headphones;
