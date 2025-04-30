import React from "react";

const Overlay = ({ setAction }: { setAction: any }) => {
  return (
    <div
      onClick={() => setAction(false)}
      className="fixed top-0 left-0 cursor-pointer z-[100] bg-transparent w-screen h-screen"
    ></div>
  );
};

export default Overlay;
