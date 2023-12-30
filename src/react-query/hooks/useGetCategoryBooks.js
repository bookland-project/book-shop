import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetCategoryBooks = (category) => {
  return useQuery({
    queryKey: ["category-books"],
    queryFn: () =>
      axios
        .get(`http://localhost:7000/api/search/books?category=${category}`)
        .then((res) => res.data)
        .catch((err) => {
        
        }),
    enabled:category?true:false
  });
};

export default useGetCategoryBooks;
