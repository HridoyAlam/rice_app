import { useParams, Link } from "react-router-dom";
import { varieties } from "../data/varieties";
import React from "react";

const Variety = () => {
  const { id } = useParams();
  const variety = varieties.find((v) => v.id === id);

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
    <div>
      <h1 className="text-4xl font-bold ">{variety.name}</h1>
      <p className="mt-2 text-lg">{variety.summary}</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {variety.sections.map((section) => (
          <section key={section.title} className="rounded-lg bg-white p-5">
            <h2 className="text-xl font-semibold text-field">
              {section.title}
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Variety;
