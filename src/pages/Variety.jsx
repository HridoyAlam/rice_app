import { useParams, Link } from "react-router-dom";
import { varieties } from "../data/varieties";
import React from "react";
import { motion } from "framer-motion";

const Variety = () => {
  const { id } = useParams();
  const variety = varieties.find((v) => v.id === id);
  const list = { show: { transition: { staggerChildren: 0.1 } } };
  const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } };

  if (!variety) {
    return (
      <p>
        এই জাতের তথ্য পাওয়া যায়নি।{" "}
        <Link to="/" className="underline">
          হোমে ফিরুন
        </Link>
      </p>
    );
  }
  return (
    <motion.div key={id} variants={list} initial="hidden" animate="show">
      <motion.h1 className="text-4xl font-bold ">{variety.name}</motion.h1>
      <motion.p className="mt-2 text-lg">{variety.summary}</motion.p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {variety.sections.map((section) => (
          <motion.section
            key={section.title}
            variants={item}
            className="rounded-lg bg-white p-5"
          >
            <h2 className="text-xl font-semibold text-field">
              {section.title}
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.section>
        ))}
      </div>
    </motion.div>
  );
};

export default Variety;
