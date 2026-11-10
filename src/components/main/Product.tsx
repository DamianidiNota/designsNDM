
import products from "./products.json";
import { Link } from 'react-router-dom'

function Product(props:any){

    const card = products.filter(
        product => product.category === props.category
    );

   return(
        <>
        <section id={props.id} className="product" >
            <div className="wrapper">
                <h2>{props.title}</h2>
                <div className="product__list" >
                    {card.map((product) => {
                        const {id, title, etsyUrl, pdfUrl, image } = product;
                        return(
                            <div className={`product__item ${props.class}`} key={id}>
                                <Link to={`/product/${product.slug}`} className="product__details">
                                    <figure className="product__img">
                                        <img src={image} alt={title} />
                                    </figure>

                                </Link>
                                {/* <figure className="product__img">
                                    <img src={image}/>
                                </figure> */}
                                <div className="product__desc">

                                   <div className="product__descInner">

                                    <h4>{title}</h4> 

                                    {etsyUrl && (

                                    
                                     <a className="product__link button" href={etsyUrl} target="_blank">View on Etsy</a>
                                    ) }

                                     {pdfUrl && (

                                     <a className="product__link button button--style2" href={pdfUrl} target="_blank" download>Free Download</a>
                                      ) }
                                     
                                 </div>     

                                 </div>                              
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        </>
    )
}

export default Product