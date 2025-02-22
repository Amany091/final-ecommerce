const ShopRate = () => {
    return (
        <div className="scores flex flex-wrap gap-3 my-6 items-baseline">
            <span className="   px-4 font-inter ">
                <p className="font-bold md:text-4xl text-2xl ">200+</p>
                <p className="font-inter dark:text-slate-300 text-descriptionColor text-xs md:text-base">
                    International Brands
                </p>
            </span>
            <span className=" px-4 font-inter">
                <p className="font-bold md:text-4xl  text-2xl  ">2,000+</p>
                <p className="font-inter dark:text-slate-300 text-descriptionColor text-xs md:text-base">
                    High-Quality Products
                </p>
            </span>
            <span className="px-4 font-inter ">
                <p className="font-bold md:text-4xl  text-2xl">30,000+</p>
                <p className="font-inter dark:text-slate-300 text-descriptionColor text-xs md:text-base">
                    Happy Customers
                </p>
            </span>
        </div>
    );
}

export default ShopRate;