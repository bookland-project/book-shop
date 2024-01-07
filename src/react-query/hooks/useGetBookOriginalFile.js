import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useShowToast from "@/components/ui/useShowToast";
import Cookies from "js-cookie";

const useGetBookOriginalFile = (params) => {
  const showToast = useShowToast();
  const token = Cookies.get("token");
  return useQuery({
    queryKey: ["book-original-file"],
    queryFn: () =>
      axios
        .get(`http://Localhost:8000/api/books/originalfilepath/${params.bookId}`,{
            headers: { Authorization: "Bearer " + token },
          })
        .then((res) => res.data)
        .catch((err) => {
          showToast(err.response.data.result.error_message);
        }),
      enabled:!!params
  });
};

export default useGetBookOriginalFile;
