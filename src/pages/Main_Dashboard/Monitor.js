import React, { Component } from "react";
import "./monitor.scss";
import { data } from "./graphData";
import { graphlogsdata } from "./data";
import { GiCheckMark } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

class Monitor extends Component {
  render() {
    return (
      <div className="flex flex-col h-[100%] w-[100%]">
        <div className="flex flex-col gap-[1rem] monitor_graph h-[70vh] mx-[2.5rem] mt-16 px-10 py-10">
          <h1 className="self-center text-[25px] font-bold text-[black]">
            Grap
          </h1>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={200}
              height={100}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="hit_and_run"
                stroke="#8884d8"
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="car_theft"
                stroke="#82ca9d"
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {/* -------------------------------------Table of logs------------------------------------------- */}

        <div className="bg-white rounded-md m-10 mons_widget relative overflow-x-hidden flex flex-col gap-4">
          <h1 className="self-center text-[25px] font-bold text-[black] mt-4">
            Table
          </h1>
          <div className="mons_table mx-16 mb-16 overflow-x-scroll">
            <div className="grid gap-3 mb-6 pb-8 mons_title border-b-2 border-[#6c99c411]">
              <p className="text-[#2F81CD] text-[16px] font-[inter] font-bold justify-self-start col-span-2">
                Location
              </p>
              <p className="text-[#2F81CD] text-[16px] font-[inter] font-bold col-span-1">
                ID
              </p>

              <p className="text-[#2F81CD] text-[16px] font-[inter] font-bold col-span-2">
                Time In
              </p>
              <p className="text-[#2F81CD] text-[16px] font-[inter] font-bold col-span-2">
                Time Out
              </p>
              <p className="text-[#2F81CD] text-[16px] font-[inter] font-bold col-span-2">
                Date
              </p>
              <p className="text-[#2F81CD] text-[16px] font-[inter] font-bold col-span-2">
                Vehicle Plate Number
              </p>
            </div>
            <div className="mons_content">
              {graphlogsdata.map((value) => {
                return (
                  <div
                    key={value.id}
                    className="grid gap-3 mb-4 mons_item1 border-b-2 border-[#6c99c411] pb-4"
                  >
                    <p className="justify-self-start text-[#7e7d7d] col-span-2">
                      {value.Location}
                    </p>
                    <p className="col-span-1 text-[#7e7d7d]">{value.id}</p>
                    <p className="col-span-2 text-[#7e7d7d]">{value.timein}</p>
                    <p className="col-span-2 text-[#7e7d7d]">
                      {/* {value.car_theft ? (
                        <GiCheckMark className="text-[#48fc48]" />
                      ) : (
                        <ImCancelCircle className="text-[#e64545]" />
                      )} */}
                      {value.timeout}
                    </p>
                    <p className="col-span-2 text-[#7e7d7d]">{value.date}</p>
                    <p className="col-span-2 text-[#7e7d7d]">
                      {value.vehicleplate}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Monitor;
