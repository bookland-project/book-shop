import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useShowToast from "@/components/ui/useShowToast";

const useGetBookInformation = (params) => {
  const showToast = useShowToast();
  return useQuery({
    queryKey: ["book",params.bookId],
    queryFn: () =>
      axios
        .get(`http://Localhost:8000/api/books/${params.bookId}`)
        .then((res) => res.data)
        .catch((err) => {
          showToast(err.response.data.result.error_message);
        }),
      enabled:!!params.bookId
  });
};

export default useGetBookInformation;
