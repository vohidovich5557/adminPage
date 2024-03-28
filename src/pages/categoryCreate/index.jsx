import React from "react";
import { Input2 } from "../../components/ui/input2";
import { useNavigate } from "react-router";
import { usePostCategory } from "./service/mutation/usePostCategory";
import { useForm } from "react-hook-form";

export const CategoryCreate = () => {
    const navigate = useNavigate();
  const { mutate, isPending } = usePostCategory();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    mutate(data, {
        onSuccess: () => {
          navigate('/app/category', {replace: true})
        }
    })
  };
  return (
    <>
      <div className="mt-[20px] ml-[10px]">
        <div className="flex items-center gap-[20px] mb-[-1px]">
          <h2 className="text-md font-normal text-blur hover:border-b-2 pb-[10px]  hover:border-blur">
            Create
          </h2>
          <h2 className="text-md font-normal hover:text-blur  hover:border-b-2 pb-[10px] hover:border-blur">
            Sub Category
          </h2>
        </div>
        <div className="w-[1000px] h-[2px] bg-gray-200"></div>
        <form className="pt-[40px]" onSubmit={handleSubmit(submit)}>
          <div className="flex flex-col items-start mb-[30px]">
            <p>Title</p>
            <Input2
              variant="smooth2"
              icon=""
              placeholder="Title"
              type="text"
              {...register("title", { required: true })}
            />
          </div>
          <div className="flex flex-col items-start mb-[40px]">
            <p>Img Url</p>
            <Input2
              variant="smooth2"
              icon=""
              placeholder="Img Url"
              type="url"
              {...register("img", { required: true })}
            />
          </div>
          <button className="w-[90px] h-[50px] bg-blur rounded-[10px] text-white text-lg">
            Send
          </button>
        </form>
      </div>
    </>
  );
};
