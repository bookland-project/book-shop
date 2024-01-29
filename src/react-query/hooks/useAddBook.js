import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINTS } from "@/utils/api/endpoints";
import axios from "axios";
import Cookies from "js-cookie";

const useAddBook = () => {
	const token = Cookies.get("token");
	console.log(`token is ${token}`);
	return useMutation({
		mutationFn: () =>
			axios.post(
				"http://Localhost:8000" + API_ENDPOINTS.PUBLISHER_BOOKS,

				{
					headers: { Authorization: "Bearer " + token },
				}
			),
		onSuccess: (data) => {
			console.log(data);
			showToast("ناشر گرامی کتاب شما با موفقیت ثبت گردید.");
			showToast(
				"ناشر عزیز مبلغ 5000 تومان به عنوان کمیسیون از کیف پول شما کسر گردید."
			);
			router.push("./");
		},
		onError: (err) => {
			showToast(err.response.data.result.error_message);
		},
	});
};

export default useAddBook;
