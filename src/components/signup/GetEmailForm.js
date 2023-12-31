import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomButton from "../ui/CustomButton";
import CustomInputLabel from "@/components/ui/CustomInputLabel";
import useSendEmail from "@/react-query/hooks/useSendEmail";


function GetEmailForm(props) {
  const{mutate,isLoading,error}=useSendEmail(props.endpoint,props.setStep)
  // if(isLoading){
  //   return(<p> isLoading</p>)
  // }
  return (
    <Formik
      initialValues={{
        email: props.emailValue,
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("لطفا آدرس ایمیل معتبر وارد کنید.")
          .matches(
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            "لطفا آدرس ایمیل معتبر وارد کنید. "
          )
          .required("وارد کردن ایمیل اجباری است."),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log(isLoading)
        console.log(values.email)
          mutate({
            email:values.email 
          })
          props.buttonHandler()
          setSubmitting(false);
      }}
    >
      {(formik) => (
        <Form className="flex flex-col gap-y-[16px]">
          <div className="flex flex-col gap-y-[8px]">
            <CustomInputLabel htmlFor="email">ایمیل</CustomInputLabel>
            <Field
              onChange={(e) => {
                props.setEmailValue(e.target.value);
                formik.handleChange(e);
              }}
              name="email"
              type="email"
              placeholder="مثال: abc@example.com"
              className={`h-[51px] border-[2px] border-primary rounded-2xl px-[20px] py-[16px] focus:outline-none ${
                formik.errors.email && formik.touched.email
                  ? "border-red-500"
                  : ""
              }`}
            />
            <p
              className={`text-[12px] font-light ${
                formik.errors.email && formik.touched.email ? "text-error" : ""
              }`}
            >
              <ErrorMessage name="email" />
            </p>
          </div>
          <CustomButton type="submit">{isLoading?"Adding...":"ادامه"}</CustomButton>
        </Form>
      )}
    </Formik>
  );
}

export default GetEmailForm;
