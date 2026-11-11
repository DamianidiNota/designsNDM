import { Link } from "react-router-dom";

function Footer(){

    return(

        <>
            <footer className="footer">
                <div className="wrapper">
                    <div className="logo">
                         <Link to="/" >
                            <img src="assets/logo.png" alt="logo"/>
                         </Link>
                     
                    </div>               
                </div>
            </footer>
        </>
    )
}
export default Footer;