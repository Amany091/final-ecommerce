import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Carousel from "../components/componentPages/details/Carousel";
import ProductDetails from "../components/componentPages/details/ProductDetails";
import RelatedProducts from "../components/componentPages/details/RelatedProducts";
import CurrentPath from "../components/ui/CurrentPath";
import { useGetProductMutation } from "../features/RTK/productsApi";
import { Reviews } from "@mui/icons-material";

const DetailsPage = () => {
  const { id } = useParams()
  const [setProduct, { data: product, isLoading }] = useGetProductMutation();

  useEffect(() => {
    setProduct(id)
  }, [id])

  return (
    <section>
      <div className="container">
        {/* product path */}
        <CurrentPath currentPath={["shop", product?.title]} />
        {/* product details */}
        <div className="p-3 grid md:grid-cols-[1fr_2fr] lg:grid-col-[1fr_2fr] grid-cols-1">
          {/* left side */}
          <Carousel images={product?.images} isLoading={isLoading} />
          {/* right side */}
          <div>
            <ProductDetails
              product={product}
            />
          </div>
        </div>
      </div>
      {/* product review */}
      <Reviews />

      {/* related products */}
      <div>
        <RelatedProducts />
      </div>
    </section>
  );
};

export default DetailsPage;
