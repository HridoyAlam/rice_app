import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import React from "react";
import { varieties } from "../data/varieties";

const Home = () => {
  return (
    <div className="space-y-10">
      <Hero />
      <ul className="flex flex-wrap gap-4">
        {varieties.map((v) => (
          <li key={v.id}>
            <Link
              to={`/dhan/${v.id}`}
              className="block round-lg bg-field px-5 py-5 font-medium text-white hover:opacity-90"
            >
              {v.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
