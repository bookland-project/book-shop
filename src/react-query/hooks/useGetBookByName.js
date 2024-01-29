import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetBookByName = (bookName) => {
  return useQuery({
    queryKey: ["bookname"],
    queryFn: () =>
      axios
        .get(`http://localhost:7000/api/search/books?bookName=${bookName}`)
        .then((res) => res.data)
        .catch((err) => {
          
        }),
  });
};

export default useGetBookByName;