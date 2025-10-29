import React from "react";
import IstockBackground from "../../../assets/istockphoto.png";

function Istockphoto() {
  return (
    <div className="w-full overflow-hidden">
      <img
        src={IstockBackground}
        alt="Istock Background"
        loading="lazy"
        decoding="async"
        className="w-full h-96 object-cover"
      />
    </div>
  );
}

export default Istockphoto;
