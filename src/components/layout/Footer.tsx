import { Link } from "react-router-dom";
import Logo from './Logo';
function Footer(){

    return(

        <>
            <footer className="footer">
                <div className="wrapper">
                      <Logo/>
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