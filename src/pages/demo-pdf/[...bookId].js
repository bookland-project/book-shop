import PDFViewer from "@/components/bookDetails/PDFViewer"
import useGetBookInformation from "@/react-query/hooks/useGetBookInformation"
import { useParams } from "next/navigation"

function DemoPDf() {
    const params=useParams()
    console.log(params)
    const{data,isSuccess}=useGetBookInformation(params)
    if(isSuccess){

        console.log(data.data)
    }
  return (
    <>
    {isSuccess&&<PDFViewer url={data.data[0].bookdemofile}/>}
    </>
  )
}

export default DemoPDf