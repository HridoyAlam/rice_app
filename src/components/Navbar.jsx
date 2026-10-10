import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { varieties } from "../data/varieties";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
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
          <li ref={menuRef} className="relative">
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              className="hover:text-field"
            >
              ধানের জাত {open ? "▴" : "▾"}
            </button>

            {open && (
              <ul className="absolute right-0 mt-2 w-40 rounded-md border border-field/20 bg-white py-1 shadow-lg">
                {varieties.map((v) => (
                  <li key={v.id}>
                    <Link
                      to={`/dhan/${v.id}`}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-2 hover:bg-paper"
                    >
                      {v.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
