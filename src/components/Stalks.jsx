import { motion } from "framer-motion";
import React from "react";

const Stalks = () => {
  return (
    <div>
      <div className="flex items-end gap-3" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            style={{ originY: 1, height: 70 + i * 14 }}
            animate={{ rotate: [-4, 4, -4] }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 rounded-full bg-straw"
          />
        ))}
      </div>
    </div>
  );
};

export default Stalks;
