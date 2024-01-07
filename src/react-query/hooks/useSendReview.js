import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import useGetBookReviews from "./useGetBookReviews";
import useShowToast from "@/components/ui/useShowToast";

function useSendReview(bookId) {
  const{refetch}=useGetBookReviews(bookId)
    const token=Cookies.get("token")
    const showToast=useShowToast()
  return useMutation({
    mutationFn:(obj)=>{
        axios.post(`http://Localhost:6002/api/book/reviews`,{bookId:obj.id,rating:obj.value},{
        headers: { Authorization: "Bearer " + token },
      }).then(res=>{
        refetch()
        showToast("نظر شما یا موفقیت ثبت شد.", "success")
      }).catch(err=>showToast(err.response.data.result.error_message))},

  });
}

export default useSendReview