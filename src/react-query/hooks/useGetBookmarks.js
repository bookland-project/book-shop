import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "@/utils/api/endpoints";
import axios from "axios";
import useShowToast from "@/components/ui/useShowToast";
import Cookies from "js-cookie";

const useGetFavoriteBooks = () => {
  const showToast=useShowToast()
  const token = Cookies.get("token");
  return useQuery({
    queryKey:["bookmarks"],
    queryFn:()=>axios.get("http://Localhost:8000"+API_ENDPOINTS.GET_BOOKMARKS,{headers:{ Authorization: "Bearer " + token}}).then(res=>res.data).catch(err=>showToast(err.response.data.result.error_message)),
  });
};

export default useGetFavoriteBooks;
