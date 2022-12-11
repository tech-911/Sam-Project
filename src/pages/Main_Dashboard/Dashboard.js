import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FiMonitor } from "react-icons/fi";
import { BsInfoCircle } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";
import Logo from "../../assets/logo.png";
import "./dash.css";

function Dashboard({ siginOUt }) {
  const [border, setBorder] = React.useState(1);

  return (
    <div className="h-full">
      <div className="flex items-start h-full">
        <div className="w-[25%] bg-[#01336A] h-full">
          <div className="flex flex-col items-center mt-10">
            <img src={Logo} alt="university of ibadan" className="mb-10" />
            {/* <h1 className="mb-10 font-[inter] text-[20px] text-[white] font-semibold">
              IS4RM
            </h1> */}
          </div>

          <div>
            <Link
              to="/dashboard/about"
              onClick={() => {
                setBorder(1);
              }}
              className="flex items-center text-[white] ml-6"
            >
              <div
                className={`flex items-center  ${
                  border === 1 ? "border-r-8" : ""
                } w-full py-3`}
              >
                <BsInfoCircle className="text-[24px]" />
                <p className="text-[15px] font-[inter] font-semibold ml-2">
                  About
                </p>
              </div>
            </Link>
            <Link
              onClick={() => {
                setBorder(2);
              }}
              to="/dashboard/monitor"
              className="flex items-center text-[white] ml-6"
            >
              <div
                className={`flex items-center ${
                  border === 2 ? "border-r-8" : ""
                } w-full py-3`}
              >
                <FiMonitor className="text-[24px]" />
                <p className="text-[15px] font-[inter] font-semibold ml-2">
                  Monitor
                </p>
              </div>
            </Link>
            <Link
              onClick={() => {
                setBorder(3);
              }}
              to="/dashboard/logs"
              className="flex items-center text-[white] ml-6"
            >
              <div
                className={`flex items-center ${
                  border === 3 ? "border-r-8" : ""
                } w-full py-3`}
              >
                <FiMonitor className="text-[24px]" />
                <p className="text-[15px] font-[inter] font-semibold ml-2">
                  Logs
                </p>
              </div>
            </Link>
            <div
              onClick={() => {
                siginOUt();
              }}
              className="flex items-center text-[white] ml-6 cursor-pointer"
            >
              <div className="flex items-center w-full py-3">
                <TbLogout className="text-[24px]" />
                <p className="text-[15px] font-[inter] font-semibold ml-2">
                  Logout
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="outlet-body w-screen h-full outlet-media">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

// <div className="outlet-body pl-52 md:pl-64 lg:pl-[24rem] xl:pl-[29rem] w-screen h-screen outlet-media">
//   <Outlet />
// </div>;
