import { Box, ChakraProvider } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import React, { useState } from "react";
import { useRouter } from "next/router"; // Import Next.js useRouter hook
import routes from "../routes.js";
import Footer from "../components/Footer/Footer.js";
import MainPanel from "../components/Layout/MainPanel";
import PanelContainer from "../components/Layout/PanelContainer";
import PanelContent from "../components/Layout/PanelContent";
import theme from "../theme/theme.js";
import Transaction from "../views/Transaction/index";
import ChargeWallet from "../views/ChargeWallet";

const Dashboard = (props) => {
	const { ...rest } = props;

	return (
		<ChakraProvider resetCss={false}>
			<ChargeWallet />
		</ChakraProvider>
	);
};

export default Dashboard;
