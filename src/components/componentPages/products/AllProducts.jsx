import { useEffect, useRef, useState } from "react";
import FilterImage from "../../../assets/images/filter.png"
import FilterProducts from "./FilterProducts";
import { useGetCategoryMutation } from "../../../features/RTK/categoriesApi";
import Pagination from "./Pagination";
import Productslist from "./ProductsList";

function AllProducts() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedPriceRange, setSelectedPriceRange] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('')

  const queryParams = {
    size: selectedSize,
    color: selectedColor,
    category: selectedCategory,
    minPrice: selectedPriceRange ? selectedPriceRange[0] : '',
    maxPrice: selectedPriceRange ? selectedPriceRange[1] : '',
  };

  const filterRef = useRef(null);
  const [setCategory] = useGetCategoryMutation()

  useEffect(() => {
    setCategory(selectedCategory)
  }, [selectedCategory])

  // Handle click outside to close filter
  const handleClickOutside = (e) => {
    if (filterRef.current && !filterRef.current.contains(e.target)) {
      setIsFilterOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFilterOpen]);

  return (
    <>
      <div className="my-5 grid lg:grid-cols-[275px,1fr] md:grid-cols-[275px,1fr] grid-cols-1 gap-5 realtive">
        <FilterProducts
          selectedSize={selectedSize}
          selectedCategory={selectedCategory}
          selectedPriceRange={selectedPriceRange}
          selectedColor={selectedColor}
          setSelectedCategory={setSelectedCategory}
          setSelectedColor={setSelectedColor}
          setSelectedPriceRange={setSelectedPriceRange}
          setSelectedSize={setSelectedSize}
          className='lg:block md:block hidden'
        />
        {
          isFilterOpen &&
          <div className="fixed w-full rounded top-0 left-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center">
            <div ref={filterRef} className="w-[80%] max-w-[350px] relative top-5 ">
              <FilterProducts
                selectedSize={selectedSize}
                selectedCategory={selectedCategory}
                selectedPriceRange={selectedPriceRange}
                selectedColor={selectedColor}
                setSelectedCategory={setSelectedCategory}
                setSelectedColor={setSelectedColor}
                setSelectedPriceRange={setSelectedPriceRange}
                setSelectedSize={setSelectedSize}
                className='lg:hidden md:hidden overflow-y-auto block bg-dark max-h-screen scroll-smooth scroll-m-0 '
              />
            </div>
          </div>
        }
        <div className="lg:mb-12">
          <div className="flex items-center justify-between mb-3 px-2 gap-6">
            <img src={FilterImage} alt="filter-icon" className={"cursor-pointer md:hidden"} onClick={() => setIsFilterOpen(!isFilterOpen)} width="32" height="32" />
          </div>
          <Productslist queryParams={queryParams} />
          <hr className="border border-b-[1px] mt-10" />
          <Pagination queryParams={queryParams} />
        </div>
      </div>
    </>
  )
}

export default AllProducts;
