import { useContext } from "react";
import MenuContext from "../context/MenuContext";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "HEADPHONES",
    image: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
    url: "/headphones",
  },
  {
    name: "SPEAKERS",
    image: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
    url: "/speakers",
  },
  {
    name: "EARPHONES",
    image: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
    url: "/earphones",
  },
];

function CategorySection() {
  const { isMenuOpen, handleMenuClick } = useContext(MenuContext);

  return (
    <section className=" flex w-full justify-center items-center py-12 md:py-20 lg:py-12 mt-4 lg:mt-20">
      <div className="flex flex-col sm:flex-row gap-20 md:gap-4 lg:gap-10 justify-between items-center w-10/12">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col items-center text-center bg-[#f1f1f1] rounded-lg shadow-md p-6 w-full"
          >
            {/* Image */}
            <img
              src={category.image}
              alt={category.name}
              className="h-[146] w-40 object-contain sm:mb-4 mt-[-75px]"
            />

            {/* Category Name */}
            <h2 className="text-lg font-bold mb-2">{category.name}</h2>

            {/* Link */}
            <Link
              onClick={isMenuOpen && handleMenuClick}
              to={category.url}
              className="hover:text-primary text-[13px] text-gray-400 font-semibold flex items-center gap-1"
            >
              SHOP
              <span>
                <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.322 1l5 5-5 5"
                    stroke="#D87D4A"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
