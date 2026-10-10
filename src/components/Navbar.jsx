import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="border-b border-field/20 bg-white/70">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-xl font-bold text-amber-600">
          ধানের দেশ
        </Link>
        <ul className="flex items-center gap-6 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-field underline" : "hover:text-field"
              }
            >
              হোম
            </NavLink>
          </li>
          <li>
            <NavLink to="/dhan/bri-dhan-29" className="hover:text-field">
              ধানের জাত
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
