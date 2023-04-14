import React from "react";

function LoadingItems() {
  return (
    <div className="flex flex-col   justify-center  items-center">
      <div className="border flex justify-center max-w-[278px] h-[278px] items-center  ">
        className="items-center mx-auto cursor-pointer "
        <div className="items-center mx-auto cursor-pointer  ">
          <div class="spinner"></div>
        </div>
      </div>
      <div className="  text-center  py-6 pl-0 md:text-start md:pl-6 ">
        <p className="mb-4 max-w-[225px]">Loading...</p>
        <span className="font-bold text-2xl mt-5">Loading...</span>
      </div>
    </div>
  );
}

export default LoadingItems;
