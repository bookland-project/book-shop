import PDFViewer from "@/components/bookDetails/PDFViewer"
import { useParams } from "next/navigation"
import useGetBookOriginalFile from "@/react-query/hooks/useGetBookOriginalFile"

function OriginalPDf() {
    const params=useParams()
    const{data,isSuccess}=useGetBookOriginalFile(params)


  return (
    <>
    {isSuccess&&<PDFViewer url={data.data}/>}
    </>
  )
}

export default OriginalPDf