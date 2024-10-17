import { MdStarRate } from "react-icons/md";
import MainReviews from "./MainReviews";
import { lazy, memo } from "react";
// API gives a product object that contains data
function Card({ imageSrc, imageAlt, cardTitle,price, priceAfterDiscount, className, rate }) {
  return (
    <div >
      <div className="flex flex-col">
        <div className="w-full">
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            className={`rounded-cardRadius max-w-full w-full select-none object-contain max-h-[100%]`}
          />
        </div>
        <h3 className="text-cardTitle font-cairo font-bold py-2 lg:text-xl text-base ">
          {cardTitle.slice(0, 18)}
        </h3>
        <span>
          <MainReviews rate={rate} />
        </span>
        <span className=" text-cardPrice pt-2 font-bold flex gap-3 items-center">
          <p className="font-bold lg:text-2xl text-lg ">{priceAfterDiscount}</p>
          <p className="line-through text-descriptionColor font-bold lg:text-2xl text-lg" >{price}</p>
          {priceAfterDiscount > 0 && <p className="bg-discountBackground text-discountColor rounded-cardRadius text-base p-discountSm">{ Math.ceil(((price - priceAfterDiscount) / price) *100)}% </p> }
        </span>
      </div>
    </div>
  );
}

export default memo(Card);
