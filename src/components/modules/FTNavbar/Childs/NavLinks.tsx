import { NavLink } from "react-router-dom";
import { navLinks } from "../../../../routes/routes";

const Nav = () => {
  return (
    <div className="hidden lg:flex items-center gap-5">
      {navLinks?.map((navLink) => (
        <NavLink
          key={navLink.label}
          className={({ isActive }) =>
            isActive
              ? "text-indigo-600 whitespace-nowrap"
              : "text-black transition-all hover:text-indigo-600 whitespace-nowrap"
          }
          to={navLink.path}
        >
          {navLink?.label}
        </NavLink>
      ))}
    </div>
  );
};

export default Nav;
