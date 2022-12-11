import React from "react";
import { data } from "./data";

const Logs = () => {
  return (
    <div>
      <div className="bg-white rounded-md px-16 py-16 m-10 relative">
        <p className="text-[#2F81CD] text-[20px] font-[inter] font-bold mb-6 text-center absolute top-4 left-8">
          Logs
        </p>
        <div className="grid grid-cols-12 gap-3 mb-6">
          <p className="text-[#2F81CD] text-[16px] font-[inter] font-bold">
            ID
          </p>
          <p className="text-[#2F81CD] text-[16px] font-[inter] font-bold col-span-2">
            Plate No.
          </p>
          <p className="text-[#2F81CD] text-[16px] font-[inter] font-bold">
            Lat
          </p>
          <p className="text-[#2F81CD] text-[16px] font-[inter] font-bold">
            Long
          </p>
          <p className="text-[#2F81CD] text-[16px] font-[inter] font-bold col-span-3">
            Date Time
          </p>
          <p className="text-[#2F81CD] text-[16px] font-[inter] font-bold">
            Offense
          </p>
        </div>
        <div>
          {data.map((value) => {
            return (
              <div key={value.id} className="grid grid-cols-12 gap-3 mb-4">
                <p>{value.id}</p>
                <p className="col-span-2">{value.plate_no}</p>
                <p>{value.lat}</p>
                <p>{value.long}</p>
                <p className="col-span-3">{value.date_time}</p>
                <p>{value.crime}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Logs;
