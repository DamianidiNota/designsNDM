import Logo from './Logo';
import Nav from './Nav'

function Header(){
 function openmenu() {
      document.body.classList.toggle('menu-opened')
  }
    return(

        <>
            <header className="header">       
               <div className="wrapper">       
                    <div className="header__content">       
                        <Logo />    
                        <div className="header__right">
                            <Nav/> 
                            <button className="burgerMenu" aria-label="click to open menu" onClick={openmenu}>
                                <span className="burgerMenu__bar burgerMenu__bar--top"></span>
                                <span className="burgerMenu__bar burgerMenu__bar--middle"></span>
                                <span className="burgerMenu__bar burgerMenu__bar--bottom"></span>
                            </button>
                        </div>   
                       
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;