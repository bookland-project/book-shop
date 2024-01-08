import {
	Box,
	Button,
	Card,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import CustomInput from "@/components/ui/CustomInput";
import CustomCardHeader from "@/components/ui/login-submit/CustomCard/CustomCardHeader";
import CustomInputLabel from "@/components/ui/CustomInputLabel";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import validatePass from "@/helpers/validatePass";
import useChangePublisherPass from "@/react-query/hooks/useChangePublisherPass";

const EditModal = ({ edit, isOpen, onClose }) => {
	const { mutate } = useChangePublisherPass();

	// start styling pass
	const labelStyle = {
		collor: "#515457",
		fontSize: "16px",
		fontStyle: "normal",
		fontWeight: "500",
		lineHeight: "24px",
		letterSpacing: "-0.176px",
		marginBottom: "8px",
	};

	const inputStyle = {
		display: "flex",
		width: "343px",
		padding: "10px 20px",
		justifyContent: "flex-start",
		alignItems: "center",
		gap: "8px",
		border: "1px solid #C8C8C8",
		borderRadius: "16px",
		marginBottom: "16px",
		fontSize: "16px",
	};

	const liStyle = {
		fontSize: "16px",
		fontWeight: "400",
		lineHeight: "32px",
		listStyleType: "disc",
	};

	const ruleTitleStyle = {
		color: "#575DFB",
		fontSize: "20px",
		fontWeight: "500",
		lineHeight: "16px",
		marginBottom: "16px",
	};

	const buttonStyle = {
		width: "80px",
		marginTop: "24px",
		height: "40px",
		padding: "8px",
		borderRadius: "7px",
		justifyContent: "center",
		alignItems: "center",
		// backgroundColor: "#2b6cb0",
		fontWeight: "500",
		position: "absolute",
		bottom: "130px",
		left: "100px",
	};

	const liValid = "#575DFB";
	const liInvalid = "gray";

	return (
		<>
			{edit == "Pass" && (
				<Modal size="full" isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent width="900px">
						<ModalHeader
							style={{
								marginRight: "40px",
								marginTop: "50px",
							}}
						>
							تغییر رمز عبور
						</ModalHeader>
						<ModalCloseButton
							style={{
								marginTop: "60px",
							}}
						/>
						<ModalBody maxHeight="400px">
							<Box
								marginTop="24px"
								display="flex"
								flexDir="row"
								justifyContent="space-between"
							>
								<Formik
									initialValues={{
										oldpass: "",
										newpassword: "",
										passwordConf: "",
									}}
									validationSchema={Yup.object({
										oldpass: Yup.string().required(
											"وارد کردن رمز عبور قبلی اجباری است."
										),
										newpassword: Yup.string().required(
											"وارد کردن رمز عبور جدید اجباری است."
										),
										passwordConf: Yup.string()
											.required(
												"وارد کردن تکرار رمز عبور اجباری است."
											)
											.oneOf(
												[Yup.ref("newpassword"), null],
												"رمز عبور و تکرار آن یکسان نیستند."
											),
									})}
									onSubmit={(values, { setSubmitting }) => {
										mutate({
											old_password: values.oldpass,
											new_password: values.newpassword,
										});
										setSubmitting(false);
									}}
								>
									{(formik) => (
										<>
											<Form>
												<h2 style={labelStyle}>
													رمز عبور فعلی
												</h2>
												<Field
													type="password"
													name="oldpass"
													style={{
														...inputStyle,
														outline: `${
															formik.errors
																.oldpass &&
															formik.touched
																.oldpass
																? "none"
																: ""
														}`,
														border: `1px solid ${
															formik.errors
																.oldpass &&
															formik.touched
																.oldpass
																? "red"
																: "#C8C8C8"
														}`,
													}}
													defaultValue={
														formik.values.oldpass
													}
													isInvalid={
														formik.errors.oldpass &&
														formik.touched.oldpass
													}
													onChange={
														formik.handleChange
													}
												/>
												<p
													className={`text-[12px] mb-[10px] font-light ${
														formik.errors.oldpass &&
														formik.touched.oldpass
															? "text-error"
															: ""
													}`}
												>
													<ErrorMessage name="oldpass" />
												</p>
												<h2 style={labelStyle}>
													رمز عبور جدید
												</h2>
												<Field
													type="password"
													name="newpassword"
													style={{
														...inputStyle,
														outline: `${
															formik.errors
																.newpassword &&
															formik.touched
																.newpassword
																? "none"
																: ""
														}`,
														border: `1px solid ${
															formik.errors
																.newpassword &&
															formik.touched
																.newpassword
																? "red"
																: "#C8C8C8"
														}`,
													}}
													defaultValue={
														formik.values
															.newpassword
													}
													isInvalid={
														formik.errors
															.newpassword &&
														formik.touched
															.newpassword
													}
													onChange={
														formik.handleChange
													}
												/>
												<p
													className={`text-[12px] mb-[10px] font-light ${
														formik.errors
															.newpassword &&
														formik.touched
															.newpassword
															? "text-error"
															: ""
													}`}
												>
													<ErrorMessage name="newpassword" />
												</p>
												<h2 style={labelStyle}>
													تکرار رمز عبور جدید
												</h2>
												<Field
													type="password"
													name="passwordConf"
													style={{
														...inputStyle,
														outline: `${
															formik.errors
																.passwordConf &&
															formik.touched
																.passwordConf
																? "none"
																: ""
														}`,
														border: `1px solid ${
															formik.errors
																.passwordConf &&
															formik.touched
																.passwordConf
																? "red"
																: "#C8C8C8"
														}`,
													}}
													defaultValue={
														formik.values
															.passwordConf
													}
													isInvalid={
														formik.errors
															.passwordConf &&
														formik.touched
															.passwordConf
													}
													onChange={
														formik.handleChange
													}
												/>
												<p
													className={`text-[12px] mb-[10px] font-light ${
														formik.errors
															.passwordConf &&
														formik.touched
															.passwordConf
															? "text-error"
															: ""
													}`}
												>
													<ErrorMessage name="passwordConf" />
												</p>
												<Button
													display="block"
													type="submit"
													color="black"
													style={buttonStyle}
													isDisabled={
														!validatePass(
															formik.values
																.newpassword
														).every(
															(el) => el.value
														)
													}
												>
													تغییر
												</Button>
											</Form>
											<Box
												display="flex"
												padding="24px 40px"
												flexDirection="column"
												justifyContent="center"
												alignItems="flex-start"
												gap="16px"
												borderRadius="16px"
												backgroundColor="#575DFB1A"
												height="248px"
											>
												<ul marginRight="20px">
													<li style={ruleTitleStyle}>
														رمز عبور باید:
													</li>

													{validatePass(
														formik.values
															.newpassword
													)[0].value ? (
														<li
															style={{
																liStyle,
																color: liValid,
															}}
														>
															حداقل 8 کاراکتر
															داشته باشد.
														</li>
													) : (
														<li
															style={{
																liStyle,
																color: liInvalid,
															}}
														>
															حداقل 8 کاراکتر
															داشته باشد.
														</li>
													)}
													{validatePass(
														formik.values
															.newpassword
													)[3].value ? (
														<li
															style={{
																liStyle,
																color: liValid,
															}}
														>
															شامل حروف انگلیسی
															بزرگ و کوچک باشد.
														</li>
													) : (
														<li
															style={{
																liStyle,
																color: liInvalid,
															}}
														>
															شامل حروف انگلیسی
															بزرگ و کوچک باشد.
														</li>
													)}
													{validatePass(
														formik.values
															.newpassword
													)[1].value ? (
														<li
															style={{
																liStyle,
																color: liValid,
															}}
														>
															حداقل شامل یک عدد
															باشد.
														</li>
													) : (
														<li
															style={{
																liStyle,
																color: liInvalid,
															}}
														>
															حداقل شامل یک عدد
															باشد.
														</li>
													)}
													{validatePass(
														formik.values
															.newpassword
													)[2].value ? (
														<li
															style={{
																liStyle,
																color: liValid,
															}}
														>
															حداقل شامل یک
															کاراکتر باشد.
														</li>
													) : (
														<li
															style={{
																liStyle,
																color: liInvalid,
															}}
														>
															حداقل شامل یک
															کاراکتر باشد.
														</li>
													)}
													{!formik.errors
														.passwordConf &&
													formik.values.newpassword &&
													formik.values
														.passwordConf ? (
														<li
															style={{
																liStyle,
																color: liValid,
															}}
														>
															با تکرار آن یکسان
															باشد.
														</li>
													) : (
														<li
															style={{
																liStyle,
																color: liInvalid,
															}}
														>
															با تکرار آن یکسان
															باشد.
														</li>
													)}
												</ul>
											</Box>
										</>
									)}
								</Formik>
							</Box>
						</ModalBody>

						<ModalFooter mt="50px">
							<Button colorScheme="blue" mr={3} onClick={onClose}>
								بستن
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			)}
			{edit == "Address" && (
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader
							style={{
								marginRight: "40px",
							}}
						>
							تغییر آدرس
						</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<Formik
								initialValues={{
									city: "",
									street: "",
									moreAddressInfo: "",
								}}
								onSubmit={(values, { setSubmitting }) => {
									mutate({
										address:
											values.city +
											values.street +
											values.moreAddressInfo,
									});
									setSubmitting(false);
								}}
							>
								{(formik) => (
									<Form className="flex flex-col ">
										<Card>
											<CustomCardHeader>
												آدرس
											</CustomCardHeader>

											<CustomInputLabel htmlFor="city">
												شهر{" "}
												<span className="text-gray-400">
													{" "}
													(اختیاری)
												</span>
											</CustomInputLabel>
											<CustomInput
												name="city"
												type="text"
											/>
											<CustomInputLabel htmlFor="street">
												خیابان
												<span className="text-gray-400">
													{" "}
													(اختیاری)
												</span>
											</CustomInputLabel>
											<CustomInput
												name="street"
												type="text"
											/>
											<CustomInputLabel htmlFor=" moreAddressInfo">
												کوچه/ساختمان/پلاک
												<span className="text-gray-400">
													{" "}
													(اختیاری)
												</span>
											</CustomInputLabel>
											<CustomInput
												name="moreAddressInfo"
												type="text"
											/>
										</Card>
									</Form>
								)}
							</Formik>
						</ModalBody>

						<ModalFooter>
							<Button variant="ghost">تغییر</Button>
							<Button colorScheme="blue" mr={3} onClick={onClose}>
								بستن
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			)}
			{edit == "PhoneNo1" && (
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader
							style={{
								marginRight: "40px",
							}}
						>
							تغییر شماره تلفن 1
						</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<Formik
								initialValues={{
									phoneNumber1: "",
								}}
								validationSchema={Yup.object({
									phoneNumber: Yup.string().matches(
										/^09\d{9}$/,
										"شماره تلفن باید با 09 شروع شده و دارای 11 رقم باشد."
									),
								})}
								onSubmit={(values, { setSubmitting }) => {
									mutate({
										phonenumber1: values.phoneNumber1,
									});

									setSubmitting(false);
								}}
							>
								{(formik) => (
									<Form className="flex flex-col ">
										<Card>
											<CustomInputLabel htmlFor="phoneNumber1">
												شماره تلفن
											</CustomInputLabel>
											<CustomInput
												name="phoneNumber1"
												type="tel"
												validation={true}
												error={
													formik.errors.phoneNumber1
												}
												touched={
													formik.touched.phoneNumber1
												}
											/>
										</Card>
									</Form>
								)}
							</Formik>
						</ModalBody>

						<ModalFooter>
							<Button variant="ghost">تغییر</Button>
							<Button colorScheme="blue" mr={3} onClick={onClose}>
								بستن
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			)}
			{edit == "PhoneNo2" && (
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader
							style={{
								marginRight: "40px",
							}}
						>
							تغییر شماره تلفن 2
						</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<Formik
								initialValues={{
									phoneNumber2: "",
								}}
								validationSchema={Yup.object({
									phoneNumber: Yup.string().matches(
										/^09\d{9}$/,
										"شماره تلفن باید با 09 شروع شده و دارای 11 رقم باشد."
									),
								})}
								onSubmit={(values, { setSubmitting }) => {
									mutate({
										phonenumber2: values.phoneNumber2,
									});

									setSubmitting(false);
								}}
							>
								{(formik) => (
									<Form className="flex flex-col ">
										<Card>
											<CustomInputLabel htmlFor="phoneNumber2">
												شماره تلفن
											</CustomInputLabel>
											<CustomInput
												name="phoneNumber2"
												type="tel"
												validation={true}
												error={
													formik.errors.phoneNumber2
												}
												touched={
													formik.touched.phoneNumber2
												}
											/>
										</Card>
									</Form>
								)}
							</Formik>
						</ModalBody>

						<ModalFooter>
							<Button variant="ghost">تغییر</Button>
							<Button colorScheme="blue" mr={3} onClick={onClose}>
								بستن
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			)}
			{edit == "Logo" && (
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader
							style={{
								marginRight: "40px",
							}}
						>
							تغییر لوگو
						</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<Formik
								initialValues={{
									city: "",
									street: "",
									moreAddressInfo: "",
								}}
								onSubmit={(values, { setSubmitting }) => {
									mutate({
										address:
											values.city +
											values.street +
											values.moreAddressInfo,
									});
									setSubmitting(false);
								}}
							>
								{(formik) => (
									<Form className="flex flex-col ">
										<Card>
											<CustomCardHeader>
												آدرس
											</CustomCardHeader>

											<CustomInputLabel htmlFor="city">
												شهر{" "}
												<span className="text-gray-400">
													{" "}
													(اختیاری)
												</span>
											</CustomInputLabel>
											<CustomInput
												name="city"
												type="text"
											/>
											<CustomInputLabel htmlFor="street">
												خیابان
												<span className="text-gray-400">
													{" "}
													(اختیاری)
												</span>
											</CustomInputLabel>
											<CustomInput
												name="street"
												type="text"
											/>
											<CustomInputLabel htmlFor=" moreAddressInfo">
												کوچه/ساختمان/پلاک
												<span className="text-gray-400">
													{" "}
													(اختیاری)
												</span>
											</CustomInputLabel>
											<CustomInput
												name="moreAddressInfo"
												type="text"
											/>
										</Card>
									</Form>
								)}
							</Formik>
						</ModalBody>

						<ModalFooter>
							<Button variant="ghost">تغییر</Button>
							<Button colorScheme="blue" mr={3} onClick={onClose}>
								بستن
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			)}
		</>
	);
};

export default EditModal;
