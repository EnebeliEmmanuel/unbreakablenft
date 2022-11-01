import React, { useState, useEffect } from "react";

import { plus } from "../../assets";
import ProgramImage from "./ProgramImage";

const ProgramCard = ({ schoolDetails }) => {
  const [showImage, setShowImage] = useState(false);

  return (
    <div className="bg-[#0C0B09] pt-[30px]">
      <div className="px-[5%] ">
        {schoolDetails.map((data) => (
          <div
            key={data.id}
            className="max-w-5xl md:mx-auto border-b border-[#171717]"
          >
            <div className="w-full small_l:mx-auto mobile:w-[350px] md:w-full  py-[40px] flex flex-col md:gap-5 md:flex-row justify-center">
              <div className="my-auto md:w-[10%]">
                <img src={data.number} alt="number" />
                <p className="text-[#737373] my-2">{data.institute}</p>
              </div>
              <div className="md:w-[80%]  my-5  flex flex-col md:flex-row gap-4 justify-between">
                <div className="h-[240px] md:w-[40%] rounded-lg relative overflow-hidden">
                  <img
                    className="w-full h-full"
                    src={data.bgImage}
                    alt="number"
                  />
                  <div className="absolute h-[80%] w-fit flex flex-col justify-between top-[7.5%] left-[10%]">
                    <img className="w-fit pl-5" src={data.logo} alt="number" />
                    <div>
                      <p className="text-white font-bold text-[24px]">
                        {data.imgTitle}
                      </p>
                      <p className="text-white text-[12px]">{data.location}</p>
                    </div>
                  </div>
                </div>
                <div className="my-4 md:w-[60%]">
                  <p className="text-yellow text-[14px] ">{data.title}</p>
                  <div className="text-white text-[12px] mt-2">{data.desc}</div>
                  <div className="text-[#E5E5E5] mt-5 text-[11px] flex flex-wrap justify-start gap-3">
                    <span className="bg-[#171717] p-2 rounded-full">
                      {data.prefrence.title1}
                    </span>
                    <span className="bg-[#171717] p-2 rounded-full">
                      {data.prefrence.title2}
                    </span>
                    <span className="bg-[#171717] p-2 rounded-full">
                      {data.prefrence.title3}
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:w-[10%] md:flex">
                {showImage ? (
                  <button
                    onClick={() => setShowImage(false)}
                    className="w-fit mx-auto md:m-auto flex gap-2 justify-center"
                  >
                    <div className="h-[2px] w-[20px] bg-yellow my-auto"></div>
                    <span className="md:hidden text-white font-pop text-[14px]">
                      see less
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={() => setShowImage(true)}
                    className="w-fit mx-auto md:m-auto flex gap-2 justify-center"
                  >
                    <img className=" w-[20px]" src={plus} alt="number" />
                    <span className="md:hidden text-white font-pop text-[14px]">
                      see more
                    </span>
                  </button>
                )}
              </div>
            </div>
            {showImage ? <ProgramImage /> : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramCard;
