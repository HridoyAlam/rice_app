import { useParams } from "react-router-dom";
import React from "react";

const Variety = () => {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-4xl font-bold text-field">{id}</h1>
      <p className="mt-2">এখানে এই জাতের তথ্য আসবে।</p>
    </div>
  );
};

export default Variety;
