import React from "react";
import { data } from "./data";
import "./logs.scss";
const Logs = () => {
  return (
    <div className="logs_wrapper overflow-x-hidden">
      <div className="bg-white rounded-md m-10 logs_widget relative overflow-x-hidden">
        <p className="text-[#2F81CD] text-[20px] font-[inter] font-bold mb-6 text-center absolute top-4 left-6">
          Logs
        </p>
        <div className="logs_table mx-16 my-16 overflow-x-scroll">
          <div className="grid gap-3 mb-6 w-[1200px] logs_title">
            <p className="text-[#2F81CD] text-[16px] font-[inter] font-bold">
              VIN
            </p>
            <p className="text-[#2F81CD] text-[16px] font-[inter] font-bold col-span-2">
              Bad Driving
            </p>
            <p className="text-[#2F81CD] text-[16px] font-[inter] font-bold col-span-2">
              Car Hacking
            </p>
            <p className="text-[#2F81CD] text-[16px] font-[inter] font-bold col-span-2">
              Vehicle murder
            </p>
            <p className="text-[#2F81CD] text-[16px] font-[inter] font-bold col-span-3">
              Car Theft
            </p>
            <p className="text-[#2F81CD] text-[16px] font-[inter] font-bold col-span-2">
              Hit and Run
            </p>
          </div>
          <div className="w-[1200px] logs_content">
            {data.map((value) => {
              return (
                <div key={value.id} className="grid gap-3 mb-4 logs_item1">
                  <p>{value.id}</p>
                  <p className="col-span-2">{value.plate_no}</p>
                  <p className="col-span-2">{value.lat}</p>
                  <p className="col-span-2">{value.long}</p>
                  <p className="col-span-3">{value.date_time}</p>
                  <p className="col-span-2">{value.crime}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logs;
