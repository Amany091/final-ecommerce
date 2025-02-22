import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../../features/RTK/productsApi";
import Card from "../../ui/Card";
import LoaderSpinner from "../../ui/LoaderSpinner";

const Productslist = ({ queryParams }) => {
    const { data: products, isLoading } = useGetProductsQuery(queryParams, {
        refetchOnMountOrArgChange: true,
        refetchOnFocus: true
    });
    const navigate = useNavigate()

    return (
        <div>
            {isLoading ? <LoaderSpinner /> : (
                <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
                    {
                        products.map((card) => {
                            return (
                                <div key={card._id} onClick={() => navigate(`/products/${card._id}`)} className="cursor-pointer">
                                    <Card
                                        imageSrc={card.imgCover}
                                        imageAlt={card.title}
                                        cardTitle={card.title}
                                        priceAfterDiscount={card.priceAfterDiscount}
                                        price={card.price}
                                        rate={card.ratingsAverage} />
                                </div>
                            )
                        })
                    }
                </div>
            )}
        </div>
    );
}

export default Productslist;