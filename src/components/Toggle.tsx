import React, { useState, useEffect } from "react";

type Props = {
  onClick: (on: boolean) => void;
};
const Toggle = ({ onClick }: Props) => {
  const [on, setOn] = useState(false);
  const handleToggle = () => {
    setOn(!on);
  };
  useEffect(() => {
    onClick(on);
  }, [on]);

  return (
    <div className="flex items-center mx-4">
      {/* <!-- On: "bg-indigo-600", Off: "bg-gray-200" --> */}
      <button
        type="button"
        aria-pressed="false"
        aria-labelledby="toggleLabel"
        onClick={handleToggle}
        className={`${
          on ? "bg-cyan-soft" : "bg-light-grayish-blue"
        } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
      >
        <span className="sr-only">Use setting</span>
        {/* <!-- On: "translate-x-5", Off: "translate-x-0" --> */}
        <span
          aria-hidden="true"
          className={`pointer-events-none ${
            on ? "translate-x-5" : "translate-x-0"
          } inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
        ></span>
      </button>
    </div>
  );
};

export default Toggle;
