import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex items-center flex-col justify-center bg-white py-[90px] pt-[106px] px-[238px] mt-[80px] md:mt-[100px] relative">
      <p className="text-rvs-green text-[16px] leading-[44px] font-bold uppercase">
        expert services
      </p>
      <div className="main-section flex flex-col gap-y-[30px] mt-[9px] items-center">
        <h1 className="text-black text-[60px] font-bold leading-none text-center">
          Aligning staffing solutions <br /> through innovation
        </h1>
        <div className="flex gap-x-[20px]">
          <button className="bg-rvs-green text-white px-[30px] py-[18px] rounded-[30px] flex items-center gap-[10px] text-center w-fit font-bold cursor-pointer">
            Staffing Solutions
          </button>
          <button className="bg-rvs-gray text-black px-[30px] py-[18px] rounded-[30px] flex items-center gap-[10px] text-center w-fit font-bold cursor-pointer">
            Software Development
          </button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center relative overflow-hidden mt-20 z-10 rounded-br-[40px]">
        <Image
          src="/assets/service-hero.png"
          alt="hero-image"
          width={1000}
          height={1000}
          className={`object-cover w-full h-[50vh] md:h-[34vw] rounded-[20px] md:rounded-[40px] transition-transform duration-500 ease-in-out
          `}
        />
        <Image
          src="/assets/green-polygon-top.svg"
          alt="carousel-image"
          width={158}
          height={158}
          className="absolute top-0 right-0 w-[80px] h-[80px] md:w-[158px] md:h-[158px]"
        />
        <Image
          src="/assets/green-polygon-bottom.svg"
          alt="carousel-image"
          width={158}
          height={158}
          className="absolute bottom-0 left-0 w-[80px] h-[80px] md:w-[158px] md:h-[158px] z-10"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-black/0 to-black/80 pointer-events-none rounded-bottom-[40px] h-[500px] z-0"></div>
        <div className="absolute top-[110px]  items-center flex flex-col gap-y-8">
          <p className="font-extrabold text-rvs-yellow text-[60px] sm:text-[100px] md:text-[50px] lg:text-[200px] leading-[140px] text-center">
            Staffing <br /> Solutions
          </p>
          <p className="text-white text-sm sm:text-lg md:text-xl lg:text-[24px] lg:leading-[36px] font-normal text-center px-4 md:px-0">
            Helping businesses swiftly fill temporary, contract, or permanent
            <br className="hidden md:block" /> positions, ensuring smooth
            operations.
          </p>
        </div>
      </div>
      <Image
        src="/assets/home-left-line.svg"
        alt="hero-image"
        width={571}
        height={571}
        className="absolute top-[264px] left-[-100px] z-0 w-[571px] h-[571px]"
      />
      <Image
        src="/assets/home-right-line.svg"
        alt="hero-image"
        width={571}
        height={571}
        className="absolute top-[353px] right-[-100px] z-0 w-[571px] h-[571px]"
      />
    </div>
  );
};

export default Hero;
