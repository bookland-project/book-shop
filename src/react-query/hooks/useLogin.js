import { useMutation } from "@tanstack/react-query";
import APIClientToken from "../services/apiClient-token";
import { API_ENDPOINTS } from "@/utils/api/endpoints";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const apiClient = new APIClientToken(API_ENDPOINTS.LOGIN);
var inhalfHours = new Date(new Date().getTime() + 30 * 60 * 1000);

const useLogin = () => {
	const router = useRouter();

	return useMutation({
		mutationFn: apiClient.post,
		onSuccess: (data) => {
			const token = data.data;
			Cookies.set("token", token, { expires: inhalfHours });
			const decoded = jwtDecode(token);
			console.log(decoded)
      		if(decoded.role_id===2){
				router.push("/");
			};
			if(decoded.role_id===1){
				router.push("/Publisher");
			};
		},
	});
};

export default useLogin;
