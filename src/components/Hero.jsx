import { section } from "framer-motion/client";
import React from "react";
import Stalks from "./Stalks";

const Hero = () => {
  return (
    <section className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
      <div className="max-w-xl">
        {/* <h1 className="p-8 text-4xl font-bold text-amber-600">ধানের দেশ</h1> */}

        <h1 className="text-4xl font-bold leading-tight sm:text-5xl text-field">
          বাংলাদেশের ধান, জাতে জাতে
        </h1>
        <p className="mt-4 text-lg text-water">
          ভাত বাংলাদেশের প্রধান খাদ্য। এখানে জাত ধরে ধরে চাষের তথ্য পাবেন।
        </p>
      </div>
      <Stalks />
    </section>
  );
};

export default Hero;
