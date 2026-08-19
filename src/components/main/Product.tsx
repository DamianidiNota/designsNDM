
import products from "./products.json";

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
                        const {id, title, etsyUrl, image } = product;
                        return(
                            <div className={`product__item ${props.class}`} key={id}>
                                <figure className="product__img">
                                    <img src={image}/>
                                </figure>
                                <div className="product__desc">

                                   <div className="product__descInner">

                                    <h4>{title}</h4> 
                                     <a className="product__link" href={etsyUrl} target="_blank">view on etsy</a>
                                     
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