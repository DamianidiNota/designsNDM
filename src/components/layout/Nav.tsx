

interface Route {
  id: number;
  title: string;
  href: string;
}

export const routes: Route[] = [
  { id: 1, title: "Monthly", href: "#monthly" },
  { id: 2, title: "Medication", href: "#medication" },
  { id: 3, title: "Weekly", href: "#weekly" },
  { id: 4, title: "Daily", href: "#daily" },
  { id: 5, title: "Workout", href: "#workout" },
  { id: 6, title: "Wallpapers", href: "#wallpapers" },
];

export const Nav = () => {



  return (
    <div className="header__nav">
      <nav className="main-nav">
        <ul className="main-nav__ul">
          {routes.map(({ id, title, href }) => (
            <li className="main-nav__li" key={id}>
              <a
                href={`/${href}`}>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
