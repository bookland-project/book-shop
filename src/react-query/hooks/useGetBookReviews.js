import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useShowToast from "@/components/ui/useShowToast";

const useGetBookReviews = (bookId) => {
  const showToast = useShowToast();
  return useQuery({
    queryKey: ["book-review"],
    queryFn: () =>
      axios
        .get(`http://Localhost:8000/api/books/${bookId}/reviews`)
        .then((res) => res.data)
        .catch((err) => {
          showToast(err.response.data.result.error_message);
        }),
    enabled:!!bookId
  });
};

export default useGetBookReviews;
