import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useShowToast from "@/components/ui/useShowToast";

const useGetCategory = () => {
	const showToast = useShowToast();
	return useQuery({
		queryKey: ["bookcategory"],
		queryFn: () =>
			axios
				.get(`http://Localhost:8000/api/books/categories`)
				.then((res) => res.data)
				.catch((err) => {
					console.log(`error is ${err}`);
					showToast(err.response.data.result.error_message);
					showToast(err.response.data.result.error_message);
				}),
	});
};

export default useGetCategory;
