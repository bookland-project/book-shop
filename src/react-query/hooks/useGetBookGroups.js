import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetBookGroups = (key) => {
  return useQuery({
    queryKey: ["book-groups",key],
    queryFn: () =>
      axios
        .get(`http://localhost:7000/api/search/books/${key}`)
        .then((res) => res.data)
        .catch((err) => {
        
        }),
    enabled:key?true:false
  });
};

export default useGetBookGroups;
