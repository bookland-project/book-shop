import CustomButton from "@/components/ui/CustomButton";
import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import useSendPublisherSignupInfo2 from "@/react-query/hooks/useSendPublisherSignupInfo2";

//ToDo:image validation

function PublisherDocumentsForm(props) {
	const { mutate, isLoading, error } = useSendPublisherSignupInfo2();

	const [idCardImg, setIdCardImg] = useState("");
	const [logoImg, setLogoImg] = useState("");
	const [idCardImage, setIdCardImag] = useState(null);
	const [logoImage, setLogoImage] = useState(null);
	const [isValidIdImage, setIsValidIdImage] = useState(true);
	const [isValidLogoImage, setIsValidLogoImage] = useState(true);

	function validateFile(file) {
		const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
		const FILE_SIZE = 8000000;
		return (
			file &&
			file.size <= FILE_SIZE &&
			SUPPORTED_FORMATS.includes(file.type)
		);
	}

	const convert2base64 = (file, setFunc) => {
		const reader = new FileReader();

		reader.onloadend = () => {
			setFunc(reader.result.toString());
		};

		reader.readAsDataURL(file);
	};

	const onUploadIdCardImage = (e) => {
		if (e.target.files.length > 0) {
			convert2base64(e.target.files[0], setIdCardImg);
		}
	};
	const onUploadLogoImage = (e) => {
		if (e.target.files.length > 0) {
			convert2base64(e.target.files[0], setLogoImg);
		}
	};

	function submitHandler(e) {
		e.preventDefault();
		if (idCardImage && isValidIdImage && isValidLogoImage) {
			const formData = new FormData();
			formData.append("publications_image", logoImage);
			formData.append("identity_image", idCardImage);
			for (const value of formData.values()) {
				console.log(value);
			}
			console.log(formData.values);
			mutate(formData);
		}
	}

	return (
		<form className="flex flex-col gap-y-[30px]">
			<Flex justifyContent="space-between" columnGap="20px">
				<Flex
					flexDir="column"
					justifyContent="space-between"
					columnGap="20px"
				>
					<Flex alignItems="center" columnGap="8px">
						<p className="text-[20px] font-semibold">
							عکس کارت ملی
						</p>{" "}
						<p className="text-[12px] font-light text-error">
							{!isValidIdImage
								? "فرمت یا سایز فایل نادرست است."
								: ""}
						</p>
					</Flex>
					{idCardImg && isValidIdImage ? (
						<div className="w-[346px] h-[346px]">
							<img
								className="w-[346px] h-[346px] object-fill"
								src={idCardImg}
							/>
						</div>
					) : (
						<label
							htmlFor="idCardImage"
							className={`cursor-pointer flex flex-col gap-y-[8px] justify-center items-center w-[342px] h-[342px] bg-[#C8C8C878] outline-[4px] outline-dashed  text-black text-center ${"outline-[#C8C8C8]"}`}
						>
							<p className="text-[20px] font-semibold leading-[24px]">
								برای آپلود کلیک کنید.
							</p>
							<p className="text-[14px] font-medium leading-[24px]">
								(حداکثر 8 مگابایت)
							</p>
						</label>
					)}
					<input
						onChange={(e) => {
							if (validateFile(e.target.files[0])) {
								onUploadIdCardImage(e);
								setIdCardImag(e.target.files[0]);
								setIsValidIdImage(true);
							} else {
								setIsValidIdImage(false);
							}
						}}
						id="idCardImage"
						name="idCardImage"
						type="file"
						className="hidden"
						accept=".jpeg,.jpg,.png"
					/>
				</Flex>
				<Flex flexDir="column" rowGap="8px">
					<p className="text-[20px] font-semibold">
						عکس لوگو
						<span className="text-[#C8C8C8]"> (اختیاری)</span>
					</p>
					<p className="text-[12px] font-light text-error">
						{!isValidLogoImage
							? "فرمت یا سایز فایل نادرست است."
							: ""}
					</p>
					{logoImg && isValidLogoImage ? (
						<div className="w-[346px] h-[346px]">
							<img
								className="w-[346px] h-[346px] object-fill"
								src={logoImg}
							/>
						</div>
					) : (
						<label
							htmlFor="logoImage"
							className="cursor-pointer flex flex-col gap-y-[8px] justify-center items-center w-[342px] h-[342px] bg-[#C8C8C878] outline-[4px] outline-dashed outline-[#C8C8C8]  text-black text-center"
						>
							<p className="text-[20px] font-semibold leading-[24px]">
								برای آپلود کلیک کنید.
							</p>
							<p className="text-[14px] font-medium leading-[24px]">
								(حداکثر 8 مگابایت)
							</p>
						</label>
					)}
					<input
						onChange={(e) => {
							if (validateFile(e.target.files[0])) {
								onUploadLogoImage(e);
								setLogoImage(e.target.files[0]);
								setIsValidLogoImage(true);
							} else {
								setIsValidLogoImage(false);
							}
						}}
						id="logoImage"
						name="logoImage"
						type="file"
						className="hidden"
						accept=".jpeg,.jpg,.png"
					/>
				</Flex>
			</Flex>
			<CustomButton
				type="submit"
				disabled={idCardImage === null}
				onClick={submitHandler}
			>
				ادامه
			</CustomButton>
		</form>
	);
}

export default PublisherDocumentsForm;
