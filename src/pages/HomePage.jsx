import NewArrivals from "../components/componentPages/home/NewArrivals";
import Button from "../components/ui/Button";
import Title from "../components/ui/Title";
import useWindowWidth from "../customHooks/useWindowWidth";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useRef } from "react";
import CustomerReviews from "../components/componentPages/home/CustomerReviews";
import Category from "../components/componentPages/home/Category";
import TopSellingCards from "../components/componentPages/home/TopSellingCards";
import { useGetProductsQuery } from "../features/RTK/productsApi";
import ShopRate from "../components/componentPages/home/ShopRate";
import Brands from "../components/componentPages/home/Brands";
import HeaderImage from "../components/componentPages/home/HeaderImage";

const HomePage = () => {
  const { data: products } = useGetProductsQuery()

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
      <section className=" bg-headerBackground dark:bg-dark px-5">
        <div className="container">
          <header className="grid lg:grid-cols-2 grid-cols-1 gap-10 pt-5">
            {/* left side */}
            <div className="flex flex-col gap-3  justify-center">
              <h1 className="font-cairo font-bold mt-10 text-4xl w-[315px] md:w-[500px]">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="text-descriptionColor md:w-auto sm:w-[358px] dark:text-slate-300 font-inter">
                Browse through our diverse range of meticulously crafted garments,
                designed to bring out your individuality and cater to your sense
                of style.
              </p>
              <Button className="lg:w-[210px] w-full mt-5">shop now</Button>
              <ShopRate />
            </div>
            {/* right side */}
            <HeaderImage />
          </header>
        </div>
        {/* brands section */}
        <Brands />
      </section >
      {/* arrivals section */}
      <section >
        <NewArrivals products={products} />
      </section >

      {/* Top Selling section */}
      <section className="mt-10">
        <TopSellingCards products={products} />
      </section >

      {/* Category section */}
      <section>
        <Category />
      </section >

      {/* customer reviews section */}
      <section className="overflow-hidden mb-20 lg:mb-40" >
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

