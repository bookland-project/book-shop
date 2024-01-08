import Image from "next/image";
import { Inter } from "next/font/google";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";
// import PDFViewer from "@/components/PDFViewer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const token = Cookies.get("token");
	const { reload } = useRouter();

	const router = useRouter();

	const handleclickPublisher = () => {
		router.push("./Publisher/");
	};
	const handleclickUser = () => {
		router.push("./user/userProfile");
	};

	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-24`}
		>
			<div>
				{/* {token?<button onClick={()=>{
            Cookies.remove('token')
            reload()}}>Logout</button>:""} */}
				{/* <PDFViewer/> */}
				<Button onClick={handleclickPublisher}>Publisher</Button>
				<Button onClick={handleclickUser}>User</Button>
			</div>
		</main>
	);
}
