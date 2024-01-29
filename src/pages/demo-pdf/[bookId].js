import PDFViewer from "@/components/bookDetails/PDFViewer"
import useGetBookInformation from "@/react-query/hooks/useGetBookInformation"
import { useParams } from "next/navigation"

function DemoPDf() {
    const params=useParams()
    const{data,isSuccess}=useGetBookInformation(params)
  return (
    <>
    {isSuccess&&<PDFViewer url={data.data[0].bookdemofile}/>}
    </>
  )
}

export default DemoPDf