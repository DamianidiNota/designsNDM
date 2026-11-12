import { useParams,  useNavigate } from 'react-router-dom'
import products from './products.json'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from "rehype-raw";

const descriptions = import.meta.glob(
    './descriptions/*.md',
    {
        query: '?raw',
        import: 'default',
        eager: true
    }
)

function ProductDetails() {
     const navigate = useNavigate()
    const { slug } = useParams()

    const product = products.find(
        product => product.slug === slug
    )

    if (!product) {
        return <h2>Product not found</h2>
    }

    const description = descriptions[product.description as string]

    return (

        <section className="product-details">
            <div className="wrapper">

             <button className="product-details__back" onClick={() => navigate(-1)}> Back</button>
            <div className="product-details__content">
                <div className="product-details__assets">
                    <figure>
                        <img src={product.image} alt={product.title} />
                    </figure>
                </div>
                <div className="product-details__desc">
                <h1>{product.title}</h1>

                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {description as string}
                </ReactMarkdown>

                {product.etsyUrl && (
                    <a href={product.etsyUrl}  className="button" target="_blank" rel="noopener noreferrer">
                        View on Etsy
                    </a>
                )}

                {product.pdfUrl && (
                    <a href={product.pdfUrl} className="button button--style2" download>
                        Free Download
                    </a>
                )}
</div>
            </div>
            </div>
        </section>
    )
}

export default ProductDetails