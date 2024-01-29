import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import APIClientToken from "../services/apiClient-token";
import { API_ENDPOINTS } from "@/utils/api/endpoints";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const apiClient=new APIClientToken(API_ENDPOINTS.PUBLISHER_SIGNUP2)

function useSendPublisherSignupInfo() {
  const router=useRouter()

  return useMutation({
    mutationFn: apiClient.put,
    onSuccess: (data) => {
      const token = data.data;
      Cookies.set("token", token, { expires: inhalfHours });
      router.push("/publisher");
    }
  });
}

export default useSendPublisherSignupInfo