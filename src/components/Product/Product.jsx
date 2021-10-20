import { useState, useEffect } from "react"

const Product = ({ match }) => {
    const [product, setProduct] = useState(null);


    useEffect(() => {
        let isSubscribed = true;

        fetch(`https://fakestoreapi.com/products/${match.params.id}`)
            .then((res) => res.json())
            .then((json) => isSubscribed ? setProduct(json) : null);
        //cleanup
        return () => (isSubscribed = false)

        // eslint-disable-next-line
    }, []);

    return (
        <div>
            {
                product ?
                    <section className="d-flex align-items-center justify-content-center flex-wrap container">
                        <div className="w-25 m-4">
                            <img src={product.image} alt="product" className="w-100" />
                        </div>
                        <h2 className="m-2">{product.title}</h2>
                        <div>
                            <p className="m-2 "><span className="text-primary">Price: </span>{product.price}</p>
                            <p className="m-2 "><span className="text-primary">Rating: </span>{product.rating.rate}</p>
                            <p className="m-2 "><span className="text-primary">Description: </span>{product.description}</p>
                            <p className="m-2 "><span className="text-primary"> Category: </span> {product.category}</p>
                        </div>
                    </section>
                    :
                    <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
            }

        </div>
    )
}
export default Product;