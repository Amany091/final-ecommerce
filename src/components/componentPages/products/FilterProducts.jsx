import React, {  useState } from 'react'
import PriceSlider from './PriceSlider'
import AccordionUI from '../../ui/AccordionUI'
import Color from '../../ui/Color'
import MainSize from '../../ui/MainSize'
import { useGetCategoriesQuery} from '../../../redux/RTK/categoriesApi'
import { useSelector } from 'react-redux'

const FilterProducts = ({ ... props}) => {
    const {className, onFilterClick , setSelectedCategory, selectedCategory, setSelectedColor, selectedColor, setSelectedSize, selectedSize, selectedPriceRange, setSelectedPriceRange} = props
    const { data: categories } = useGetCategoriesQuery();
    const handleCategoryClick = (id) => {
        if (id === selectedCategory) {
           setSelectedCategory(null)
        } else {
            setSelectedCategory(id)
        }
    };

    const {theme} = useSelector((store)=> store.theme)

    return (
        <div className={`${className} rounded-cardRadius border border-slate-400/30 p-6 h-fit mb-8`}>
            <div className='flex justify-between items-center '>
                <p className='font-inter text-xl font-bold' >Filters</p>
                <span className='' >
                    <svg width="22" height="20" viewBox="0 0 22 20" fill={`${theme === "dark" ? 'white' : 'black'}`} xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.125 9.625V18.25C12.125 18.5484 12.0065 18.8345 11.7955 19.0455C11.5845 19.2565 11.2984 19.375 11 19.375C10.7016 19.375 10.4155 19.2565 10.2045 19.0455C9.99353 18.8345 9.875 18.5484 9.875 18.25V9.625C9.875 9.32663 9.99353 9.04048 10.2045 8.8295C10.4155 8.61853 10.7016 8.5 11 8.5C11.2984 8.5 11.5845 8.61853 11.7955 8.8295C12.0065 9.04048 12.125 9.32663 12.125 9.625ZM17.75 16C17.4516 16 17.1655 16.1185 16.9545 16.3295C16.7435 16.5405 16.625 16.8266 16.625 17.125V18.25C16.625 18.5484 16.7435 18.8345 16.9545 19.0455C17.1655 19.2565 17.4516 19.375 17.75 19.375C18.0484 19.375 18.3345 19.2565 18.5455 19.0455C18.7565 18.8345 18.875 18.5484 18.875 18.25V17.125C18.875 16.8266 18.7565 16.5405 18.5455 16.3295C18.3345 16.1185 18.0484 16 17.75 16ZM20 12.25H18.875V1.75C18.875 1.45163 18.7565 1.16548 18.5455 0.954505C18.3345 0.743526 18.0484 0.625 17.75 0.625C17.4516 0.625 17.1655 0.743526 16.9545 0.954505C16.7435 1.16548 16.625 1.45163 16.625 1.75V12.25H15.5C15.2016 12.25 14.9155 12.3685 14.7045 12.5795C14.4935 12.7905 14.375 13.0766 14.375 13.375C14.375 13.6734 14.4935 13.9595 14.7045 14.1705C14.9155 14.3815 15.2016 14.5 15.5 14.5H20C20.2984 14.5 20.5845 14.3815 20.7955 14.1705C21.0065 13.9595 21.125 13.6734 21.125 13.375C21.125 13.0766 21.0065 12.7905 20.7955 12.5795C20.5845 12.3685 20.2984 12.25 20 12.25ZM4.25 13C3.95163 13 3.66548 13.1185 3.4545 13.3295C3.24353 13.5405 3.125 13.8266 3.125 14.125V18.25C3.125 18.5484 3.24353 18.8345 3.4545 19.0455C3.66548 19.2565 3.95163 19.375 4.25 19.375C4.54837 19.375 4.83452 19.2565 5.0455 19.0455C5.25647 18.8345 5.375 18.5484 5.375 18.25V14.125C5.375 13.8266 5.25647 13.5405 5.0455 13.3295C4.83452 13.1185 4.54837 13 4.25 13ZM6.5 9.25H5.375V1.75C5.375 1.45163 5.25647 1.16548 5.0455 0.954505C4.83452 0.743526 4.54837 0.625 4.25 0.625C3.95163 0.625 3.66548 0.743526 3.4545 0.954505C3.24353 1.16548 3.125 1.45163 3.125 1.75V9.25H2C1.70163 9.25 1.41548 9.36853 1.2045 9.5795C0.993526 9.79048 0.875 10.0766 0.875 10.375C0.875 10.6734 0.993526 10.9595 1.2045 11.1705C1.41548 11.3815 1.70163 11.5 2 11.5H6.5C6.79837 11.5 7.08452 11.3815 7.2955 11.1705C7.50647 10.9595 7.625 10.6734 7.625 10.375C7.625 10.0766 7.50647 9.79048 7.2955 9.5795C7.08452 9.36853 6.79837 9.25 6.5 9.25ZM13.25 4.75H12.125V1.75C12.125 1.45163 12.0065 1.16548 11.7955 0.954505C11.5845 0.743526 11.2984 0.625 11 0.625C10.7016 0.625 10.4155 0.743526 10.2045 0.954505C9.99353 1.16548 9.875 1.45163 9.875 1.75V4.75H8.75C8.45163 4.75 8.16548 4.86853 7.9545 5.0795C7.74353 5.29048 7.625 5.57663 7.625 5.875C7.625 6.17337 7.74353 6.45952 7.9545 6.6705C8.16548 6.88147 8.45163 7 8.75 7H13.25C13.5484 7 13.8345 6.88147 14.0455 6.6705C14.2565 6.45952 14.375 6.17337 14.375 5.875C14.375 5.57663 14.2565 5.29048 14.0455 5.0795C13.8345 4.86853 13.5484 4.75 13.25 4.75Z" fillOpacity="0.4" />
                    </svg>
                </span>
            </div>
            <hr className='text-slate-400/30 my-6' />
            <div>
                {
                    categories?.map((category, index) => {
                        return (
                            <>
                                <div key={`${category._id}`} className={`flex justify-between py-3 font-semibold text-xl px-4 cursor-pointer ${theme === "dark" ? 'hover:text-black' : ''} hover:bg-[#f0eeed] rounded-md ${selectedCategory === category._id && "bg-[#f0eeed] rounded-md"}`}
                                    onClick={() => handleCategoryClick(category._id)}>
                                    <p>{category.name}</p>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            {/* price slider value */}
            <PriceSlider
                selectedPriceRange={selectedPriceRange}
                setSelectedPriceRange={setSelectedPriceRange}
            />
            {/* product colors */}
            <AccordionUI title={'Colors'}  >
                <Color
                    colors={['red', 'green', 'black', 'gold', 'blue', 'navy']}
                    selectedColor={selectedColor}
                    setSelectedColor={setSelectedColor}
                />
            </AccordionUI>
            {/* product sizes */}
            <AccordionUI title={'Size'} >
                <MainSize
                    sizes={["XX-Small", "X-Small", "Small", "Medium", "Large", "X-large", "XX-Large"]}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                />
            </AccordionUI>
            {/* <AccordionUI title={'Dress Style'} >
                <div>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <span key={index} className='text-descriptionColor flex justify-between my-3'>
                            <p>Casual</p>
                            <MdArrowRight />
                        </span>
                    ))}
                </div>
            </AccordionUI> */}
            <button className={'p-buttonPadding bg-buttonBackground border-[2px] border-buttonBackground hover:bg-transparent hover:text-inherit hover:border-[2px] hover:border-gray-300  text-white rounded-buttonRadius duration-200 font-inter w-full my-5'}
                onClick={onFilterClick}>Apply Filter</button>
            {/* <Button className={'w-full my-5'} click={handleFilterClick}>Apply Filter</Button> */}
        </div >
    )
}

export default FilterProducts
