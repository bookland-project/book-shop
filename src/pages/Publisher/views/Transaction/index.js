// Chakra imports
import { Flex } from "@chakra-ui/react";
// Assets
import React from "react";
import Transactions from "./components/Transactions";
import Sidebar from "../../components/Sidebar/index";
import { useRouter } from "next/router";
import usePublisherWallet from "@/react-query/hooks/usePublisherWalletHistory";
const Transaction = () => {
	const router = useRouter();
	const pageName = router.pathname;

	const { data, isLoading, isError, isSuccess } = usePublisherWallet();

	return (
		<Sidebar pageName={pageName}>
			<div dir="ltr" display="flex" w="100px" justifyContent="center">
				<Flex
					alignItems="center"
					direction="column"
					pr="40px"
					mr="60px"
					mt="20px"
				>
					<Flex justifyContent="center" w="940px" minW="600px">
						<Transactions
							title={"تراکنشات شما"}
							data={data}
							isLoading={isLoading}
							isError={isError}
							isSuccess={isSuccess}
						/>
					</Flex>
				</Flex>
			</div>
		</Sidebar>
	);
};

export default Transaction;
