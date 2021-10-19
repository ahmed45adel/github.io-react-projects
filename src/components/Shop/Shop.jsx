import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Shop = () => {
    const [products, setProducts] = useState(null)

    const getProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))

    };
    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div>
            <h1 className="my-2" >Shop</h1>
            {
                products ?
                    <section className="d-flex flex-wrap justify-content-center">
                        {
                            products.map(product => {

                                return (
                                    <Link to={`/shop/${product.id}`} key={product.id} className="p-1 w-25 mb-2 border text-dark">
                                        <div className="d-flex justify-content-center mb-2">
                                            <img src={product.image} alt="product" className="w-50" />
                                        </div>
                                        <h6>{product.title}</h6>
                                        <p>Price: {product.price}</p>
                                        <p>Rating: {product.rating.rate}</p>
                                        <p>Description: {product.description}</p>
                                    </Link>
                                )
                            })
                        }
                    </section>

                    :
                    <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
            }
        </div>
    )
}
export default Shop;