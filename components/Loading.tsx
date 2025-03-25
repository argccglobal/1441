import React from "react";

const Loading = ({ loading }: { loading: boolean }) => {
  if (!loading) return null;
  return (
    <div className="fixed top-0 flex items-center justify-center z-[999] left-0 w-screen h-screen bg-[#f1f2f3] opacity-40">
      <div className="loader-parent">
        <div className="loader">
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
