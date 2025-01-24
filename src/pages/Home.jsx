import { Link } from "react-router-dom";
import homePageData from "../data/homePageData";
import CategorySection from "../components/CategorySection";

function Home() {
  return (
    <>
      <section className="hero h-[80vh] bg-hero-mobile md:bg-hero-tablet lg:bg-hero-desktop bg-cover bg-center text-white flex justify-center items-center sm:mb-24 sm:py-32">
        <div className="flex gap-20 w-10/12 justify-center lg:justify-start">
          <div className="flex flex-col gap-8 justify-center items-center text-center lg:items-start max-w-[380px] tracking-widest leading-relaxed">
            <p className="uppercase text-gray-600">NEW PRODUCT</p>
            <h1 className="uppercase font-semibold text-[36px] sm:text-[56px] leading-none">
              {homePageData[0].title}
            </h1>
            <p className="text-gray-400">{homePageData[0].description}</p>
            <Link
              to={`/product/${homePageData[0].id}`}
              className="flex items-center justify-center bg-primary text-white font-bold h-[48px] w-[160px] uppercase mt-5"
            >
              See Product
            </Link>
          </div>
        </div>
      </section>

      <CategorySection />

      <div className="flex justify-center items-center mt-24">
        <div className="w-10/12 flex flex-col gap-10">
          <div className="bg-primary relative rounded-lg h-[600px] md:h-[690px] lg:h-[560px] py-8 overflow-hidden flex flex-col lg:flex-row gap-10 lg:gap-28 px-7 lg:px-20 items-center justify-center">
            <div className="absolute md:bottom-[70px] lg:left-[-150px] lg:bottom-[-350px]">
              <svg width="944" height="944" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#FFF" fill="none" fillRule="evenodd" opacity=".202">
                  <circle cx="472" cy="472" r="235.5" />
                  <circle cx="472" cy="472" r="270.5" />
                  <circle cx="472" cy="472" r="471.5" />
                </g>
              </svg>
            </div>

            <div className="w-[172px] h-[207px] md:w-[197px] md:h-[237px] lg:w-[400px] lg:h-[480px] lg:mb-[-110px] lg:ml-[60px] z-20">
              <img
                className="w-full h-full object-cover"
                src={homePageData[1].image[0]}
                alt="ZX9 Speaker"
              />
            </div>

            <div className="text-white text-center lg:text-start md:max-w-[350px] lg:w-[40%] flex items-center lg:items-start flex-col gap-6 lg:gap-10 z-20">
              <h3 className="font-semibold text-[36px] sm:text-[56px] uppercase leading-10 sm:leading-none max-w-[200px] sm:max-w-[300px]">
                {homePageData[1].title}
              </h3>
              <p>{homePageData[1].description}</p>
              <Link
                to={`/product/${homePageData[1].id}`}
                className="flex items-center justify-center bg-black text-white hover:bg-[#4C4C4C] font-bold h-[48px] w-[160px] uppercase"
              >
                See Product
              </Link>
            </div>
          </div>

          <div className="bg-speaker-2-mobile md:bg-speaker-2-tablet lg:bg-speaker-2-desktop bg-cover bg-center h-[320px] rounded-lg p-7 md:px-11 lg:px-24 flex flex-col gap-6 justify-center">
            <h3 className="font-bold text-[28px] uppercase">
              {homePageData[2].title}
            </h3>
            <Link
              to={`/product/${homePageData[2].id}`}
              className="flex items-center justify-center text-black border border-black hover:bg-black hover:text-white font-bold h-[48px] w-[160px] uppercase"
            >
              See Product
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-8 md:gap-4 lg:gap-8 rounded-lg">
            <div className="sm:w-1/2 rounded-lg h-[200px] sm:h-[320px] overflow-hidden">
              <img
                src={homePageData[3].image[0]}
                alt={homePageData[3].title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="h-[200px] sm:h-[320px] bg-[#f2f0f0] flex flex-col justify-center gap-6 pl-7 sm:px-24 sm:w-1/2 shadow-md rounded-lg">
              <h3 className="font-bold text-[28px]">{homePageData[3].title}</h3>
              <Link
                to={`/product/${homePageData[3].id}`}
                className="flex items-center justify-center bg-[#f2f0f0] text-black border border-black hover:bg-black hover:text-white font-bold h-[48px] w-[160px] uppercase"
              >
                See Product
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
// cac8c8