import React from "react";

const Tooltip = ({ text, position = "right", children, className = "" }) => {
  
  return (
    <React.Fragment>
      <div className={`${className} flex `}>
        <div
          className={`${className} relative border-2 border-yellow-500 px-4 py-4 mr-2 cursor-default span`}
        >
          Hello component
          <span
            style={{ textAlign: position }}
            className={`${className} z-10 fixed top-4 left-44 px-5 text-center border-2 border-yellow-500 span-hover`}
          >
            {text}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};
export default React.memo(Tooltip);
