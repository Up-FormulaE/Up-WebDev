import { NavLink } from "react-router-dom";
import { routes } from "../utils/const/routes";
import mc from "../utils/merge-classname";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="container p-10 flex items-center justify-between">
        <img src="mahindra-logo.png" className="h-10" />

        <div className="flex gap-6">
          {routes.map((route) => (
            <NavLink
              key={route.name}
              to={route.path}
              className={({ isActive }) =>
                mc(
                  "hover:text-accent transition-all duration-200 font-semibold",
                  isActive && "text-accent"
                )
              }
            >
              {route.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
