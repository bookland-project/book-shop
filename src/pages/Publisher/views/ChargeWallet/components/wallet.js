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
import Cookies from "js-cookie";
import useShowToast from "@/components/ui/useShowToast";
import axios from "axios";
import useChargePublisherWallet from "@/react-query/hooks/useChargePublisherWallet";

const coinStyle = {
	height: "110px",
	width: "165px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};

const Wallet = ({ mright, data, walletInfoIsLoading, isSuccess, refetch }) => {
	const router = useRouter();
	const [error, setError] = useState(false);
	const [inputValue, setInputValue] = useState();

	const { mutate, isLoading } = useChargePublisherWallet(inputValue);
	const showToast = useShowToast();
	const token = Cookies.get("token");
	console.log(router.query.Status);

	useEffect(() => {
		if (router.query.Status && router.query.Status === "OK") {
			showToast("شارژ کیف پول شما با موفقیت انجام شد", "success");
			axios
				.put(
					`https://Localhost:5000/api/publisher/wallet/UpdatePublisherWallet${localStorage.getItem(
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
			router.replace("/Publisher/views/ChargeWallet");
		}
		if (router.query.Status && router.query.Status === "NOK") {
			showToast("مشکلی در شارژ کیف پول بوجود آمده،لطفا دوباره تلاش کنید");
			router.replace("/Publisher/views/ChargeWallet");
		}
	}, [router, showToast, token]);

	const submitHandler = (e) => {
		e.preventDefault();
		mutate();
	};

	return (
		<div>
			<Box display="flex" flexDir="row" marginBottom="32px">
				<Text fontWeight="700">
					<span style={{ fontSize: "24px" }}>دارایی حساب شما:</span>
					{walletInfoIsLoading && (
						<span> درحال بارگیری اطلاعات...</span>
					)}
					{isSuccess && (
						<>
							<span style={{ fontSize: "32px" }}>
								&nbsp;
								{data.data.deposit - data.data.withdraw}
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
					<div style={coinStyle}></div>
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
					<div style={coinStyle}></div>
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
					<div style={coinStyle}></div>
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
							<Text fontSize="md" mr={mright}>
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
						مبلغ وارد شده باید بیشتر از 50000 و کمتر از 200000 تومان
						باشد.
					</p>
				)}
			</Flex>
		</div>
	);
};

export default Wallet;
