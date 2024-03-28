import React from "react";
import { Navigate, Outlet } from "react-router";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/home-page/home-icon.svg";
import CategoryIcon from "../assets/home-page/category-icon.svg";
import BannerIcon from "../assets/home-page/banner-icon.svg";
import ProductIcon from "../assets/home-page/product-icon.svg";
import Cookies from "js-cookie";

export const AppLayout = () => {
  if (!Cookies.get("user-token")) return <Navigate to="/" replace />;
  return (
    <>
      <div className="container flex flex-col ">
        <div className="w-[full] flex items-start bg-blue-950 py-[20px] pl-[40px] ">
          <h2 className="text-3xl font-medium text-white">Admin Page</h2>
        </div>
        <div className="flex items-start">
          <div className="w-[250px] pt-[10px] h-[100vh]">
            <Link to="/app">
              <div className="flex w-[189px] h-[60px] pl-[38px] hover:border-l-4 hover:border-blur rounded-[10px] items-center gap-[26px]">
                <img src={HomeIcon} alt="img" className="w-[25px] h-[25px]" />
                <p className="text-lg font-medium hover:text-blur">Home</p>
              </div>
            </Link>
            <Link to="/app/category">
              <div className="flex w-[189px] h-[60px] pl-[38px] hover:border-l-4 hover:border-blur rounded-[10px] items-center gap-[26px]">
                <img
                  src={CategoryIcon}
                  alt="img"
                  className="w-[25px] h-[25px]"
                />
                <p className="text-lg font-medium hover:text-blur">Category</p>
              </div>
            </Link>
            <Link to="/app/category">
              <div className="flex w-[189px] h-[60px] pl-[38px] hover:border-l-4 hover:border-blur rounded-[10px] items-center gap-[26px]">
                <img src={BannerIcon} alt="img" className="w-[25px] h-[25px]" />
                <p className="text-lg font-medium hover:text-blur">Banners</p>
              </div>
            </Link>
            <Link to="/app/category">
              <div className="flex w-[189px] h-[60px] pl-[38px] hover:border-l-4 hover:border-blur rounded-[10px] items-center gap-[26px]">
                <img
                  src={ProductIcon}
                  alt="img"
                  className="w-[25px] h-[25px]"
                />
                <p className="text-lg font-medium hover:text-blur">Products</p>
              </div>
            </Link>
          </div>
          <div className="bg-gray-200 w-full h-[100vh]">
            <div className="bg-white pt-[20px] pl-[20px] rounded-[20px] w-[1100px] h-[700px] overflow-scroll mt-[50px] ml-[70px]">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
