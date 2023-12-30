import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetAuthorBooks = (authorName) => {
  return useQuery({
    queryKey: ["author-books"],
    queryFn: () =>
      axios
        .get(`http://localhost:7000/api/search/books?author=${authorName}`)
        .then((res) => res.data)
        .catch((err) => {
          
        }),
    enabled:authorName?true:false
  });
};

export default useGetAuthorBooks;
