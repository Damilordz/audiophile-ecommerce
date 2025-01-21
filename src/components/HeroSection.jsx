function HeroSection() {
  return (
    <section className="hero-section flex justify-center items-center py-10">
      <div className="flex justify-between gap-32 w-9/12">
        <div className="flex flex-col justify-center gap-8 w-5/12">
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

        <div className="w-[45%] rounded-lg">
          <img
            src="/assets/shared/desktop/image-best-gear.jpg"
            alt="Image Best Gear"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
