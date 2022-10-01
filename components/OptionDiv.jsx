import React from "react";

const OptionDiv = ({ text }) => {
  return (
    <div className="optionDiv w-full focus:bg-red-500">
      <input type="radio" id="hosting-small" name="hosting" value="hosting-small" className="hidden peer" required="" />
      <label htmlFor="hosting-small" className="inline-flex justify-between items-center p-5 w-full rounded-lg border cursor-pointer  hover:text-gray-300 border-gray-700  text-gray-400 bg-gray-800 ">
        {/* hover:bg-gray-700 */}
        <div className="block">
          <div className="w-full text-lg font-semibold ">{text}</div>
        </div>
      </label>
    </div>
  );
};

export default OptionDiv;
