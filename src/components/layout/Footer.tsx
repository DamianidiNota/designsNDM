import { Link } from "react-router-dom";
import Logo from './Logo';
function Footer(){

    return(

        <>
            <footer className="footer">
                <div className="wrapper">
                      <Logo/>
                     <div className="footer__content">
                        <div  className="footer__copyright">
                             copyright © 2024 DesignsNDM. All rights reserved.
                        </div>
                       <nav className="footerNav">
                        <ul className="footerNav__ul">
                            <li className="footerNav__li">
                                <Link to="/"  className="footerNav__link"> Home </Link>
                            </li>
                            <li className="footerNav__li">
                                <Link to="/about"  className="footerNav__link">About</Link>
                            </li>
                            <li className="footerNav__li">
                                 <Link to="/privacy-policy"  className="footerNav__link"> Privacy Policy </Link>
                            </li>
                        </ul>
                           
                           
                        </nav>
                    </div>
                         
                </div>
            </footer>
        </>
    )
}
export default Footer;