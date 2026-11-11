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
                     <div className="footer__links">
                        <div>
                             copyright © 2024 DesignsNDM. All rights reserved.
                        </div>
                       
                        <Link to="/privacy-policy">
                            Privacy Policy
                        </Link>
                    </div>
                         
                </div>
            </footer>
        </>
    )
}
export default Footer;