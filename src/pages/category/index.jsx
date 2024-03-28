import React from "react";
import { Link } from "react-router-dom";
import { queryclient } from "../../config/query-client";
import { useGetData } from "./service/query/useGetData";
import { useDeletData } from "./service/mutation/useDeletData";

export const Category = () => {
  const { data, isLoading } = useGetData();
  const { mutate, isPending } = useDeletData();
  return (
    <>
      <Link to="/app/category/create">
        <button className="w-[120px] h-[40px] ml-[30px] rounded-[10px] text-lg text-white bg-blur">
          Create
        </button>
      </Link>
      <div className="w-[950px] flex gap-[10px] mt-[50px] mb-[30px] ml-auto mr-auto py-[15px] rounded-tr-[10px] rounded-tl-[10px] px-[20px] bg-gray-200">
        <div className="w-[237px] flex items-center justify-between h-auto">
          <h2 className="text-xl font-medium">ID</h2>
          <div className="w-[2px] h-[27px] bg-gray-400"></div>
        </div>
        <div className="w-[237px] flex items-center justify-between h-auto">
          <h2 className="text-xl font-medium">IMG</h2>
          <div className="w-[2px] h-[27px] bg-gray-400"></div>
        </div>
        <div className="w-[237px] flex items-center justify-between h-auto">
          <h2 className="text-xl font-medium">Name</h2>
          <div className="w-[2px] h-[27px] bg-gray-400"></div>
        </div>
        <div className="w-[237px] flex items-center justify-between h-auto">
          <h2 className="text-xl font-medium">Change</h2>
        </div>
      </div>
      {data?.map((item) => (
        <>
          <div>
            <div className="w-[950px] mb-[10px]  flex flex-col gap-[10px] ml-auto mr-auto py-[15px] rounded-tr-[10px] rounded-tl-[10px] px-[20px]">
              <div className="flex gap-[10px] mb-[10px]">
                <div className="w-[220px]  flex items-center justify-between h-auto">
                  <h2 className="text-xl font-medium">{item.id}</h2>
                </div>
                <div className="w-[220px] flex items-center justify-between h-auto">
                  <h2 className="text-xl font-medium">
                    {item.img.slice(0, 12)}
                  </h2>
                </div>
                <div className="w-[220px]  flex items-center justify-between h-auto">
                  <h2 className="text-xl font-medium">{item.title}</h2>
                </div>
                <div className="w-[220px]  flex items-center justify-between h-auto">
                  <button
                    onClick={() =>
                      mutate(item.id, {
                        onSuccess: () => {
                          queryclient.invalidateQueries({
                            queryKey: ["get-data"],
                          });
                        },
                      })
                    }
                    className="w-[90px] h-[30px] text-white rounded-[10px] bg-blur"
                  >
                    delet
                  </button>
                  <button className="w-[90px] h-[30px] text-white rounded-[10px] bg-blur">
                    edit
                  </button>
                </div>
              </div>
              <div className="w-[940px] h-[2px] bg-gray-200"></div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};
