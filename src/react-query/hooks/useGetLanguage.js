import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useShowToast from "@/components/ui/useShowToast";

const useGetLanguage = () => {
	const showToast = useShowToast();
	return useQuery({
		queryKey: ["booklanguages"],
		queryFn: () =>
			axios
				.get(`http://Localhost:8000/api/books/languages`)
				.then((res) => res.data)
				.catch((err) => {
					console.log(`error is ${err}`);
					showToast(err.response.data.result.error_message);
					showToast(err.response.data.result.error_code);
				}),
	});
};

export default useGetLanguage;
