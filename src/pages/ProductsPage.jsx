import React from 'react'
import AllProducts from '../components/componentPages/products/AllProducts'
import BreadCrumb from '../components/ui/BreadCrumb'

const ProductsPage = () => {

    return (
        <section>
            <div className="container">
                <BreadCrumb />
                <AllProducts />
            </div>
        </section>
    )
}

export default ProductsPage
