import { useParams, Link } from 'react-router-dom'
import products from './products.json'

function ProductDetails() {

    const { slug } = useParams()

    const product = products.find(
        product => product.slug === slug
    )

    if (!product) {
        return <h2>Product not found</h2>
    }

    return (
        <section className="product-details">
            <div className="wrapper">

                <Link to="/">Back to products</Link>

                <figure>
                    <img src={product.image} alt={product.title} />
                </figure>

                <h1>{product.title}</h1>

                <p>{product.description}</p>

                {product.etsyUrl && (
                    <a href={product.etsyUrl} target="_blank" rel="noopener noreferrer">
                        View on Etsy
                    </a>
                )}

                {product.pdfUrl && (
                    <a href={product.pdfUrl} download>
                        Free Download
                    </a>
                )}

            </div>
        </section>
    )
}

export default ProductDetails