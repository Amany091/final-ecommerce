import React from 'react'
import CurrentPath from '../components/ui/CurrentPath'
import AllProducts from '../components/componentPages/products/AllProducts'

const ProductsPage = () => {

    return (
        <section>
            <div className="container">
                <CurrentPath currentPath={['products']} />
                <AllProducts />
            </div>
        </section>
    )
}

export default ProductsPage
