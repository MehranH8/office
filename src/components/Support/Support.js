import { IoCall } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { useFormik } from 'formik';
import * as yup from "yup";


const Support = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",

        },
        onSubmit: (values) => {
            console.log(values)

        },
        validationSchema: yup.object({
            name: yup.string().required("الزامی"),
            email: yup.string().email("ایمیل معتبر نیست").required("الزامی"),
            subject: yup.string().required("الزامی"),
            message: yup.string().required("الزامی"),
        })
    })


    return (
        <div className="mt-16">
            {/*title */}
            <div className="text-center mx-8">
                <h2 className="text-[16px] sm:text-[18px] font-bold">
                    با ما در ارتباط باشید
                </h2>
                <p className="text-[#5c6b8d] max-w-[500px] mx-auto mt-6 normal-text sm:text-center">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </p>
            </div>
            {/*title */}
            <div className="relative mt-[750px] md:mt-[570px]">
                {/*form */}
                <div className="absolute top-0 left-[50%] w-full translate-x-[-50%] translate-y-[-80%] z-10">
                    <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-xl mx-4 sm:mx-8 lg:mx-auto mt-16 max-w-[900px] justify-center mb-10 px-6 sm:px-10 md:px-16 py-10 gap-10">
                        <div className="flex flex-col">
                            <label className="text-[#5c6b8d] mb-3 mr-2 normal-text" for="name">نام <span className="text-red-700">*</span></label>
                            <input className="p-1 border-[1px] border-[#CFCFEA] rounded-[4px] py-2" id="name" name="name" type="text" onblur={formik.handleBlur} onchange={formik.handleChange} />
                            {formik.touched.name && formik.errors.name ? (
                                <div className="text-red-700 !text-[12px] text-base w-full max-w-sm lg:max-w-none ">{formik.errors.name}</div>
                            ) : null}
                        </div>
                        <div className="flex flex-col">
                            <label className="text-[#5c6b8d] mb-3 mr-2 normal-text" for="email">ایمیل <span className="text-red-700">*</span></label>
                            <input onblur={formik.handleBlur} onchange={formik.handleChange} className="p-1 border-[1px] border-[#CFCFEA] rounded-[4px] py-2" id="email" name="email" type="email" />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-red-700 !text-[12px] text-base w-full max-w-sm lg:max-w-none ">{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div className="flex flex-col">
                            <label className="text-[#5c6b8d] mb-3 mr-2 normal-text" for="number">شماره تلفن</label>
                            <input className="p-1 border-[1px] border-[#CFCFEA] rounded-[4px] py-2" id="number" name="number" type="text" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-[#5c6b8d] mb-3 mr-2 normal-text" for="subject">موضوع <span className="text-red-700">*</span></label>
                            <input onblur={formik.handleBlur} onchange={formik.handleChange} className="p-1 border-[1px] border-[#CFCFEA] rounded-[4px] py-2" id="subject" name="subject" type="text" />
                            {formik.touched.subject && formik.errors.subject ? (
                                <div className="text-red-700 !text-[12px] text-base w-full max-w-sm lg:max-w-none ">{formik.errors.subject}</div>
                            ) : null}
                        </div>
                        <div className="flex flex-col md:col-span-2 ">
                            <label className="text-[#5c6b8d] mb-3 mr-2 normal-text" for="message">پیام <span className="text-red-700">*</span></label>
                            <textarea onblur={formik.handleBlur} onchange={formik.handleChange} className="p-2 border-[1px] h-48 border-[#CFCFEA] rounded-[4px] resize-none" id="message" name="message">
                            </textarea>
                            {formik.touched.message && formik.errors.message ? (
                                <div className="text-red-700 !text-[12px] text-base w-full max-w-sm lg:max-w-none ">{formik.errors.message}</div>
                            ) : null}
                        </div>

                        <button className="dark-btn max-w-[200px]" type="submit">ارسال پیام</button>
                    </form>
                </div>
                {/*form */}
                {/*contact section */}
                <div className="bg-[#111827] pt-48 md:pt-40 pb-16 px-8 relative  z-0">

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-8">
                        <div className="mx-auto justify-start flex lg:border-r-[1px]  border-[#5C6B8D] h-full py-6  lg:pr-5 xl:pr-12 ">
                            <div className="text-center sm:text-start">
                                <div>
                                    <span className="text-white text-[35px]">
                                        <IoCall className="mx-auto sm:mx-0" />
                                    </span>
                                </div>
                                <div>
                                    <h4 className="text-white bold-title mt-5">
                                        تلفن ما
                                    </h4>
                                    <p className="text-[#cfcfea] normal-text mt-4">
                                        برای پاسخ‌های سریع و دقیق، یک ایمیل برای ما ارسال کنید..
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[#5f59f7] bold-title mt-4 hover:cursor-pointer">
                                        7891  456 - (123)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="border-b-[1px] border-[#5C6B8D] w-full lg:hidden  max-w-[560px] mx-auto"></div>
                        <div className="mx-auto lg:border-r-[1px]  border-[#5C6B8D] h-full flex py-6 lg:pr-5 xl:pr-12 ">
                            <div className="text-center sm:text-start">
                                <div className="">
                                    <span className="text-white text-[35px] ">
                                        <MdOutlineMailOutline className="mx-auto sm:mx-0" />
                                    </span>
                                </div>
                                <div className="">
                                    <h4 className="text-white bold-title mt-5">
                                        ایمیل ما
                                    </h4>
                                    <p className="text-[#cfcfea] normal-text  mt-4 ">
                                        برای پاسخ‌های سریع و دقیق، یک ایمیل برای ما ارسال کنید.
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[#5f59f7] bold-titlet-[20px] font-bold mt-4 hover:cursor-pointer">
                                        email@example.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="border-b-[1px] border-[#5C6B8D] w-full lg:hidden  max-w-[560px] mx-auto"></div>
                        <div className="mx-auto lg:border-r-[1px]  border-[#5C6B8D] h-full py-6 lg:pr-5 xl:pr-12 text-center sm:text-start">
                            <div>
                                <span className="text-white text-[35px]">
                                    <MdOutlineMailOutline className="mx-auto sm:mx-0" />
                                </span>
                            </div>
                            <div className="">
                                <h4 className="text-white bold-title mt-5">
                                    چت آنلاین
                                </h4>
                                <p className="text-[#cfcfea] normal-text  mt-4 ">
                                    برای پاسخ‌های سریع و دقیق، یک ایمیل برای ما ارسال کنید.
                                </p>
                            </div>
                            <div>
                                <p className="text-[#5f59f7] bold-title mt-4 hover:cursor-pointer">
                                    چت آنلاین
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                {/*contact section */}

            </div>

        </div>
    )
}

export default Support