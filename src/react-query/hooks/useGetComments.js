import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetComments = (bookId, page) => {
	return useQuery({
		queryKey: ["book-comments", page],
		queryFn: () =>
			axios
				.get(
					`http://localhost:6002/api/book/comments/${bookId}?page=${page} `
				)
				.then((res) => res.data)
				.catch((err) => {}),
	});
};

export default useGetComments;
