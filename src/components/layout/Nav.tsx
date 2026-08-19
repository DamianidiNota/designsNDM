interface Route {
    id: number,
    title: string,
    href: string
}


export const routes: Route[] = [
  {
    id:1,
    title: "Monthly",
    href: "#monthly",
  },
  {
      id:2,
    title: "Medication",
    href: "#medication",
  },
  {
      id:3,
    title: "Daily",
    href: "#daily",
  },
  {
      id:4,
    title: "Workout",
    href: "#workout",
  },
  
];

export const Nav = () => {
  function closemenu(): void {
    document.body.classList.remove("menu-opened");
  }

  return (
    <div className="header__nav">
      <nav className="main-nav">
        <ul className="main-nav__ul">
        {routes.map((route) => {
            const {id, title, href} = route;

            return(
                <li className="main-nav__li" key={id}>
                    <a href={href}  onClick={closemenu}>
                        {title}
                    </a>
                </li>
            )
        })}























        {/* {routes.map((route) => {
            const {href, title, id} = route;
            return (
                <li className="main-nav__li" key={id}>
                     <a href={href} onClick={closemenu}>
                    {title}
                    </a>
                </li>
            )
        })}


          {routes.map((route) => {
            const { href, title } = route;

            return (
              <li className="main-nav__li" key={title}>
                <a href={href} onClick={closemenu}>
                  {title}
                </a>
              </li>
            );
          })} */}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;