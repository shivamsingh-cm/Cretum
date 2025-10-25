import React from "react";

const Loader = () => {
  return (
    <span className="loader relative inline-block w-12 h-12 rounded-full animate-spin bg-[conic-gradient(from_0deg,rgba(255,61,0,0.2)_33%,#ff3d00_100%)] before:content-[''] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[44px] before:h-[44px] before:rounded-full before:bg-[#1B122C]" />
  );
};

export default Loader;
