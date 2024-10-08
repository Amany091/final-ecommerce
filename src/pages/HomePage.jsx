import headerBG from "../assets/images/headerBG.jpg";
import NewArrivals from "../components/componentPages/home/NewArrivals";
import Button from "../components/ui/Button";
import Marquee from "react-fast-marquee";
import Title from "../components/ui/Title";
import useWindowWidth from "../customHooks/useWindowWidth";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "swiper/css"
import "swiper/css/navigation"
import { useRef } from "react";
import CustomerReviews from "../components/componentPages/home/CustomerReviews";
import Category from "../components/componentPages/home/Category";
import zaraLogo from "../assets/images/zara-logo.png";
import versaceLogo from "../assets/images/versace.png";
import gucci from "../assets/images/gucci-logo.png";
import prada from "../assets/images/prada-logo.png";
import calvin from "../assets/images/calvin.png";
import TopSellingCards from "../components/componentPages/home/TopSellingCards";


const HomePage = () => {

  const brands = [
    {
      id: 1,
      src: zaraLogo,
      alt: "Zraa Logo"
    },
    {
      id: 2,
      src: versaceLogo,
      alt: "Versace Logo"
    },
    {
      id: 3,
      src: gucci,
      alt: "Gucci Logo"
    },
    {
      id: 4,
      src: prada,
      alt: "Prada Logo"
    },
    {
      id: 5,
      src: calvin,
      alt: "Calvin Logo"
    }
  ]
  const containerRef = useRef()
  const windowWidth = useWindowWidth()

  const handleScroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = windowWidth > 800 ? direction === "left" ? -500 : 500 : direction === "left" ? -300 : 300
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <>
      <section className=" bg-headerBackground px-5">
        <div className="container">
          <header className="grid lg:grid-cols-2 grid-cols-1 gap-10 pt-5">
            {/* left side */}
            <div className="flex flex-col gap-3  justify-center">
              <h1 className="font-cairo font-bold  text-4xl w-[315px] md:w-[500px]">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="text-descriptionColor md:w-auto sm:w-[358px] font-inter">
                Browse through our diverse range of meticulously crafted garments,
                designed to bring out your individuality and cater to your sense
                of style.
              </p>
              <Button className="lg:w-[210px] w-full">shop now</Button>
              <div className="scores flex flex-wrap gap-3 mt-6 justify-center md:justify-normal py-3">
                <span className="  border-r-2 border-r-slate-200 px-4 font-inter ">
                  <p className="font-bold md:text-4xl text-2xl">200+</p>
                  <p className="font-inter text-descriptionColor text-xs md:text-base">
                    International Brands
                  </p>
                </span>
                <span className="  border-r-2 border-r-slate-200 px-4 font-inter">
                  <p className="font-bold md:text-4xl  text-2xl ">2,000+</p>
                  <p className="font-inter text-descriptionColor text-xs md:text-base">
                    High-Quality Products
                  </p>
                </span>
                <span className=" px-4 mx-auto md:mx-0 font-inter ">
                  <p className="font-bold md:text-4xl  text-2xl">30,000+</p>
                  <p className="font-inter text-descriptionColor text-xs md:text-base">
                    Happy Customers
                  </p>
                </span>
              </div>
            </div>
            {/* right side */}
            <div className="flex items-center relative brand">
              <span className=" absolute top-10 right-5 ">
                <svg
                  className="w-[76px] h-[76px] lg:w-[104px] lg:h-[104px]"
                  viewBox="0 0 104 104"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z"
                    fill="black"
                  />
                </svg>
              </span>
              <span className=" absolute ">
                <svg
                  className=" lg:w-[56px] lg:h-[56px] w-[44px] h-[44px] "
                  viewBox="0 0 104 104"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z"
                    fill="black"
                  />
                </svg>
              </span>
              <img
                src={headerBG}
                alt="header"
                className="w-full object-cover h-full"
              />
            </div>
          </header>
        </div>
        {/* brands section */}
        <div className="bg-forground text-forgroundColor p-6 ">
          <Marquee pauseOnHover={true} speed={50}>
            {brands.map((brand, index) => (
              < img src={`${brand.src}`} alt={brand.alt} key={brand.id} className="mx-12" />
            ))}
          </Marquee>
        </div>
      </section >
      {/* arrivals section */}
      <section >
        <NewArrivals />
      </section >

      {/* Top Selling section */}
      <section className="mt-10">
        <TopSellingCards />
      </section >

      {/* Category section */}
      <section>
        <Category />
      </section >

      {/* customer reviews section */}
      <section section className="overflow-hidden mb-20 lg:mb-40" >
        <div className="container">
          <div className="flex justify-between px-2 items-center">
            <Title title="Our happy customers" />
            <div className="flex gap-4 items-center z-20 pb-8">
              <FaArrowLeft className="cursor-pointer" onClick={() => handleScroll("left")} />
              <FaArrowRight className="cursor-pointer" onClick={() => handleScroll("right")} />
            </div>
          </div>
        </div>
        <CustomerReviews containerRef={containerRef} />
      </section >

    </>

  );
};

export default HomePage;
