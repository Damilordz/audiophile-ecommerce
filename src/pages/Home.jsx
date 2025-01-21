import { Link } from "react-router-dom";
import homePageData from "../data/homePageData";
import CategorySection from "../components/CategorySection";

function Home() {
  return (
    <>
      <section className="hero bg-black text-white flex justify-center items-center mb-24">
        <div className="flex gap-20 w-9/12">
          <div className="flex flex-col gap-8 justify-center items-start max-w-[37%]">
            <p className="uppercase text-gray-600">NEW PRODUCT</p>
            <h1 className="uppercase font-bold text-[56px] leading-none">
              {homePageData[0].title}
            </h1>
            <p className="font-semibold text-gray-400">
              {homePageData[0].description}
            </p>
            <Link
              to={`/product/${homePageData[0].id}`}
              className="flex items-center justify-center bg-primary text-white font-bold h-[48px] w-[160px] uppercase"
            >
              See Product
            </Link>
          </div>
          <div className="w-4/6 flex items-center justify-center py-20 ">
            <img
              src={homePageData[0].image[0]}
              alt="hero image"
              className="w-[80%]"
            />
          </div>
        </div>
      </section>

      <CategorySection />

      <div className="flex justify-center items-center mt-24">
        <div className="w-9/12 flex flex-col gap-10">
          <div className="bg-primary relative rounded-lg h-[560px] overflow-hidden flex gap-28 px-20 items-center">
            <div className="absolute left-[-150px] bottom-[-350px]">
              <svg width="944" height="944" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#FFF" fill="none" fillRule="evenodd" opacity=".202">
                  <circle cx="472" cy="472" r="235.5" />
                  <circle cx="472" cy="472" r="270.5" />
                  <circle cx="472" cy="472" r="471.5" />
                </g>
              </svg>
            </div>
            <div className="w-[400px] h-[480px] mb-[-110px] ml-[60px] z-20">
              <img
                className="w-full h-full object-cover"
                src={homePageData[1].desktopImage}
                alt="ZX9 Speaker"
              />
            </div>
            <div className="text-white w-[40%] flex flex-col gap-10 z-20">
              <h3 className="font-bold text-[56px] leading-none">
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

          <div className="bg-[#cac8c8] rounded-lg flex justify-between gap-20 items-center">
            <div className="flex flex-col gap-6 pl-20 w-[35%]">
              <h3 className="font-bold text-[28px]">{homePageData[2].title}</h3>
              <Link
                to={`/product/${homePageData[2].id}`}
                className="flex items-center justify-center bg-[#cac8c8] text-black border border-black hover:bg-black hover:text-white font-bold h-[48px] w-[160px] uppercase"
              >
                See Product
              </Link>
            </div>
            <div className="h-full w-[50%]">
              <img
                className="h-full w-full"
                src={homePageData[2].desktopImage}
                alt="ZX7 Speaker"
              />
            </div>
          </div>

          <div className="flex justify-between gap-8 rounded-lg">
            <div className="w-1/2 rounded-lg">
              <img
                src={homePageData[3].desktopImage}
                alt={homePageData[3].title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="bg-[#f2f0f0] flex flex-col justify-center gap-6 pl-20 w-1/2 shadow-md rounded-lg">
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
