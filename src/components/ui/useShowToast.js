import { useToast } from "@chakra-ui/react";


function useShowToast() {
    const toast = useToast({
        isClosable: true,
          position: 'top-right',
          duration:5000
      });
      const toastId = "toast-id";
      const showToast=(text,status="error")=>{
        toast({description: text,id:toastId,status})
      }
      
  return showToast
}

export default useShowToast
