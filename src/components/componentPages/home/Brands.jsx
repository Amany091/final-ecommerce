import Marquee from "react-fast-marquee";
import { useGetBrandsQuery } from "../../../features/RTK/brandsApi";

const Brands = () => {
    const { data: brands } = useGetBrandsQuery()
    return (
        <div className="bg-forground text-forgroundColor p-6 ">
            <Marquee pauseOnHover={true} speed={50}>
                {brands?.map((brand) => (
                    < img src={`${brand.logo}`} alt={brand.name} key={brand._id} className="mx-12" />
                ))}
            </Marquee>
        </div>
    );
}

export default Brands;