function HeroSection() {
  return (
    <section className="hero-section flex justify-center items-center py-10 mt-10 lg:max-h-[588px] overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-32 w-10/12">
        <div className="flex flex-col justify-center gap-8 md:max-w-[548px] lg:w-5/12 order-2 lg:order-1 text-center lg:text-left">
          <h2 className="uppercase font-bold text-4xl">
            Bringing you the <span className="text-primary">best</span> audio
            gear
          </h2>
          <p className="text-gray-500">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>

        <div className="lg:w-[45%] flex justify-end rounded-lg order-1 lg:order-2 lg:max-h-[588px]">
          <picture>
            {/* Mobile image: applies for widths less than 768px */}
            <source
              media="(max-width: 767px)"
              srcSet="/assets/shared/mobile/image-best-gear.jpg"
            />

            {/* Tablet image: applies for widths less than 1024px */}
            <source
              media="(max-width: 1024px)"
              srcSet="/assets/shared/tablet/image-best-gear.jpg"
            />

            {/* Desktop image: applies for widths greater than 1024px */}
            <source
              media="(min-width: 1025px)"
              srcSet="/assets/shared/desktop/image-best-gear.jpg"
            />

            {/* Fallback for browsers that do not support <picture> */}
            <img
              src="/assets/shared/desktop/image-best-gear.jpg"
              alt="Image Best Gear"
              className="lg:max-h-[588px] rounded-lg"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
