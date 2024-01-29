import Sidebar from "@/components/Sidebar";
import {
	Box,
	Button,
	Flex,
	Input,
	InputGroup,
	InputRightElement,
	Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useChargeWallet from "@/react-query/hooks/useChargeWallet";
import useGetWalletInfo from "@/react-query/hooks/useGetWalletInfo";
import useShowToast from "@/components/ui/useShowToast";
import axios from "axios";
import Cookies from "js-cookie";
import Navbar from "@/components/ui/searchBox/Navbar";
import Image from "next/image";
import image1 from '/public/assets/images/Artboard 26.png'
import image2 from '/public/assets/images/Artboard 26 copy.png'
import image3 from '/public/assets/images/Artboard 26 copy 2.png'
const coinStyle = {
	height: "110px",
	width: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};

const Wallet = () => {
	const {
		data,
		isLoading: walletInfoIsLoading,
		isSuccess,
		refetch,
	} = useGetWalletInfo();
	const [inputValue, setInputValue] = useState();
	const [error, setError] = useState(false);
	const { mutate, isLoading } = useChargeWallet(inputValue);
	const showToast = useShowToast();
	const router = useRouter();
	const pageName = router.pathname;
	const token = Cookies.get("token");

	useEffect(() => {
		if (router.query.Status && router.query.Status === "OK") {
			showToast("شارژ کیف پول شما با موفقیت انجام شد", "success");
			axios
				.put(
					`http://Localhost:5000/api/user/wallet/UpdateUserWallet${localStorage.getItem(
						"id"
					)}`,
					{},
					{
						headers: {
							Authorization: "Bearer " + token,
						},
					}
				)
				.then((res) => {
					if (res.status === 200) {
						refetch();
					}
				})
				.catch((err) => console.log(err));
			router.replace("/user/wallet");
		}
		if (router.query.Status && router.query.Status === "NOK") {
			showToast("مشکلی در شارژ کیف پول بوجود آمده،لطفا دوباره تلاش کنید");
			router.replace("/user/wallet");
		}
	}, [router, showToast, token]);


	const submitHandler = (e) => {
		e.preventDefault();
		mutate();
	};

	return (
		<div>
			<Navbar/>
			<Sidebar pageName={pageName}>
				<Box display="flex" flexDir="row" marginBottom="32px">
					<Text fontWeight="700">
						<span style={{ fontSize: "24px" }}>
							دارایی حساب شما:
						</span>
						{/* {walletInfoIsLoading && (
							<span> درحال بارگیری اطلاعات...</span>
						)} */}
						{isSuccess && (
							<>
								<span style={{ fontSize: "32px" }}>
									&nbsp;{data.data}
								</span>
								<span
									style={{
										fontSize: "24px",
										color: "#C8C8C8",
									}}
								>
									{" "}
									تومان
								</span>
							</>
						)}
					</Text>
				</Box>
				<Text fontSize="16px" fontWeight="500">
					لطفا میزان شارژ کیف پول خود را انتخاب کنید:
				</Text>
				<Box
					display="flex"
					justifyContent="flex-start"
					alignItems="flex-start"
					flexDirection="row"
					marginTop="24px"
					marginBottom="32px"
					gap="60px"
					paddingRight="50px"
				>
					<Box
						height="192px"
						width="248px"
						padding="8px 15px 16px"
						border="0.5px solid #DD8114"
						borderRadius="16px"
						onClick={() => setInputValue(200000)}
						style={{ cursor: "pointer" }}
					>
						<div style={coinStyle}><Image src={image1}/></div>
						<Text
							display="flex"
							justifyContent="center"
							alignItems="center"
							color="#DD8114"
							fontSize="24px"
							fontWeight="500"
						>
							۲۰۰هزار تومان
						</Text>
					</Box>
					<Box
						height="192px"
						width="248px"
						padding="8px 15px 16px"
						border="0.5px solid #6F8595"
						borderRadius="16px"
						onClick={() => setInputValue(100000)}
						style={{ cursor: "pointer" }}
					>
						<div style={coinStyle}><Image src={image2}/></div>
						<Text
							display="flex"
							justifyContent="center"
							alignItems="center"
							color="#6F8595"
							fontSize="24px"
							fontWeight="500"
						>
							۱۰۰هزار تومان
						</Text>
					</Box>
					<Box
						height="192px"
						width="248px"
						padding="8px 15px 16px"
						border="0.5px solid #7E4200"
						borderRadius="16px"
						onClick={() => setInputValue(50000)}
						style={{ cursor: "pointer" }}
					>
						<div style={coinStyle}><Image src={image3}/></div>
						<Text
							display="flex"
							justifyContent="center"
							alignItems="center"
							color="#7E4200"
							fontSize="24px"
							fontWeight="500"
						>
							۵۰هزار تومان
						</Text>
					</Box>
				</Box>
				<Text fontSize="16px" fontWeight="500" marginBottom="16px">
					یا به صورت دستی وارد کنید:
				</Text>
				<Flex flexDir="column" gap="10px">
					<Box
						display="flex"
						justifyContent="flex-start"
						gap="16px"
						alignItems="center"
					>
						<InputGroup
							border="0.5px solid #C8C8C8"
							borderRadius="16px"
							width="376px"
							height="41px"
						>
							<Input
								name="amount"
								border="none"
								type="number"
								value={inputValue}
								onChange={(e) => {
									setInputValue(e.target.value);
									if (
										+e.target.value < 50000 ||
										+e.target.value > 200000
									) {
										setError(true);
									} else {
										setError(false);
									}
								}}
								width="100%"
								height="41px"
								borderRadius="16px"
								padding="0px 20px"
							/>
							<InputRightElement>
								<Text fontSize="md" mr={-20}>
									تومان
								</Text>
							</InputRightElement>
						</InputGroup>
						<Button
							onClick={(e) => submitHandler(e)}
							type="submit"
							borderRadius="12px"
							bg="#575DFB"
							width="198px"
							padding="8px"
							_hover={{ background: "#575DFB" }}
							color="white"
						>
							خرید
						</Button>
					</Box>
					{error && (
						<p className="text-error text-[12px]">
							مبلغ وارد شده باید بیشتر از 50000 و کمتر از 200000
							تومان باشد.
						</p>
					)}
				</Flex>
			</Sidebar>
		</div>
	);
};

export default Wallet;
