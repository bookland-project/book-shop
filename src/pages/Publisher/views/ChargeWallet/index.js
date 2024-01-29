import { useRouter } from "next/router";
import Sidebar from "../../components/Sidebar";
import { Flex, Icon } from "@chakra-ui/react";
import CreditCard from "./components/CreditCard";
import WalletCom from "./components/wallet";
import { RiMastercardFill } from "react-icons/ri";
import { useState } from "react";
import useGetPublisherBalance from "@/react-query/hooks/usePublisherBalance";

const ChargeWallet = () => {
	const router = useRouter();
	const pageName = router.pathname;

	const { data, refetch, isSuccess, isLoading, isError } =
		useGetPublisherBalance();

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (isError) {
		return <p>Error loading data.</p>;
	}

	return (
		<Sidebar pageName={pageName}>
			<div dir="rtl" display="flex" w="1200px" justifyContent="center">
				<Flex alignItems="center" direction="column" mt="70px">
					<Flex
						justifyContent="center"
						w="1000px"
						minW="600px"
						mb="50px"
					>
						<CreditCard
							title={"Purity UI"}
							number={"7812 2139 0823 XXXX"}
							validity={{
								name: "VALID THRU",
								data: "05/24",
							}}
							cvv={{
								name: "CVV",
								code: "09x",
							}}
							icon={
								<Icon
									as={RiMastercardFill}
									w="48px"
									h="auto"
									color="gray.400"
								/>
							}
						/>
					</Flex>
					<WalletCom
						data={data}
						walletInfoIsLoading={isLoading}
						isSuccess={isSuccess}
						mright={"620px"}
						refetch={refetch}
					/>
				</Flex>
			</div>
		</Sidebar>
	);
};

export default ChargeWallet;
