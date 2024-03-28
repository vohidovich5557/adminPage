import { request } from "../../../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useGetData = () => {
  return useQuery({
    queryKey: ["get-data"],
    queryFn: () => request.get("/category").then((res) => res.data),
  });
};
