import { FaPaintBrush, FaCoffee, FaWifi, FaArrowLeft } from "react-icons/fa";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FiPrinter } from "react-icons/fi";
import { RiChatPrivateLine } from "react-icons/ri";
import { useFormik } from 'formik';
import * as yup from "yup";



const Locationsdetail = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",


        },
        onSubmit: (values) => {
            console.log(values)

        },
        validationSchema: yup.object({
            name: yup.string().required("الزامی"),
            email: yup.string().email("ایمیل معتبر نیست").required("الزامی"),
        })
    })


    return (
        <div className="mx-8 sm:mx-12 lg:mx-24 xl:mx-32">
            {/*title*/}
            <div className="mt-16 mb-12">
                <h2 className="text-[32px] font-bold">
                    فضای کاری
                </h2>
            </div>
            {/*title*/}
            <div className="flex flex-col md:flex-row gap-x-10 lg:gap-x-16  w-full h-full">
                <div className=" max-w-[800px]">
                    {/*images*/}
                    <div className="flex flex-col mb-14 gap-y-4">
                        <div>
                            <img className="rounded-md" src="https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/1.jpg" alt="location-banner" />
                        </div>
                        <div className="grid grid-cols-2 gap-x-6">
                            <img className=" rounded-md" src="https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/7.jpg" alt="location-banner" />
                            <img className=" rounded-md" src="https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/1.jpg" alt="location-banner" />
                        </div>
                    </div>
                    {/*images*/}
                    {/*about*/}
                    <div>
                        <div className="mb-8">
                            <h3 className="text-[24px] font-bold mb-2">
                                درباره فضای کاری ما
                            </h3>
                            <p className="text-justify lg:text-justify xl:text-start">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد
                            </p>
                        </div>
                        <div>
                            <h3 className="text-[24px] font-bold mb-2">
                                چرا این دفتر؟
                            </h3>
                            <p className="text-justify lg:text-justify xl:text-start">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                            </p>
                        </div>
                    </div>
                    {/*about*/}
                    <div className="border-b-[2px] mb-10 mt-14 border-[#cfcfea]"></div>
                    {/*amenitites*/}
                    <div className="mb-16 md:mb-0">
                        <h3 className="text-[24px] font-bold mb-4"> امکانات دفتر</h3>
                        <div className="grid gap-x-0 md:gap-x-4 lg:gap-x-0 gap-y-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3">
                            <div className="flex gap-x-4">
                                <span className="my-auto text-[22px]">
                                    <RiChatPrivateLine />
                                </span>
                                <p className="text-[16px] md:text-[18px]">
                                    اتاق شخصی
                                </p>
                            </div>
                            <div className="flex gap-x-4 ">
                                <span className="my-auto text-[22px]">
                                    <FaPaintBrush />
                                </span>
                                <p className="text-[16px] md:text-[18px]">
                                    خدمات نظافت
                                </p>
                            </div>
                            <div className="flex gap-x-4">
                                <span className="my-auto text-[22px]">
                                    <FaCoffee />
                                </span>
                                <p className="text-[16px] md:text-[18px]">
                                    کافی شاپ
                                </p>
                            </div>
                            <div className="flex gap-x-4">
                                <span className="my-auto text-[22px]">
                                    <FiPrinter />
                                </span>
                                <p className="text-[16px] md:text-[18px]">
                                    پرینتر
                                </p>
                            </div>
                            <div className="flex gap-x-4">
                                <span className="my-auto text-[22px]">
                                    <BsFillCameraVideoFill />
                                </span>
                                <p className="text-[16px] md:text-[18px]">
                                    امنیت
                                </p>
                            </div>
                            <div className="flex gap-x-4">
                                <span className="my-auto text-[22px]">
                                    <FaWifi />
                                </span>
                                <p className="text-[18px]">
                                    اینترنت
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*amenitites*/}

                </div>
                {/*form*/}
                <div className="sticky top-28  w-full h-full">
                    <div className="border-[1px] rounded-md border-[#CFCFEA]">
                        <div className="px-4 sm:px-8 pt-6">
                            <div className="mb-6 mt-4">
                                <h4 className="text-[18px] font-bold mb-2 text-[#5f59f7]">
                                    تمایل دارید؟
                                </h4>
                                <p className="text-[#5c6b8d] text-[16px] text-justify sm:text-start">
                                    جدیدترین اطلاعات بینش، نکات و به‌روزرسانی‌ها را درباره ایجاد تحول در فضای کاری خود در صندوق ورودی خود دریافت کنید
                                </p>
                            </div>
                        </div>
                        <div>
                            <form onSubmit={formik.handleSubmit} className="mx-4 sm:mx-8">
                                <div className="flex flex-col mb-4">
                                    <label className="text-[14px] text-[#5c6b8d] mb-2" for="name">
                                        نام <span className="text-red-700">*</span>
                                    </label>
                                    <input className="bg-transparent border-[1px] border-[#cfcfea] rounded-[4px] py-2 px-2" type="text" id="name" name="name" onblur={formik.handleBlur} onchange={formik.handleChange} />
                                    {formik.touched.name && formik.errors.name ? (
                                        <div className="text-red-700 !text-[12px] text-base w-full max-w-sm lg:max-w-none ">{formik.errors.name}</div>
                                    ) : null}
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label className="text-[14px] text-[#5c6b8d] mb-2" for="email">
                                        ایمیل <span className="text-red-700">*</span>
                                    </label>
                                    <input className="bg-transparent border-[1px] border-[#cfcfea] rounded-[4px] py-2 px-2" type="email" id="email" name="email" onblur={formik.handleBlur} onchange={formik.handleChange} />
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className="text-red-700 !text-[12px] text-base w-full max-w-sm lg:max-w-none ">{formik.errors.email}</div>
                                    ) : null}
                                </div>
                                <div className="flex flex-col mb-6">
                                    <label className="text-[14px] text-[#5c6b8d] mb-2" for="phone">
                                        تلفن
                                    </label>
                                    <input className="bg-transparent border-[1px] border-[#cfcfea] rounded-[4px] py-2 px-2" type="text" id="phone" name="phone" />
                                </div>
                                <div className="mb-10">
                                    <button className="text-white text-[16px] font-bold bg-[#343090] py-3 px-3 rounded-[4px] w-full hover:bg-[#5f59f7] transition-colors duration-300" type="submit">ثبت اطلاعات</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/*form*/}
            </div>
            {/*other locations */}
            <div className="mt-32">
                <div className="flex justify-between mb-16 mt-14">
                    <div>
                        <h3 className="text-[20px] sm:text-[28px] font-bold">
                            دفاتر دیگر

                        </h3>
                    </div>
                    <div className="hidden sm:block">
                        <button className="  text-[14px] mx-4 sm:mx-0 sm:text-[16px] bg-transparent text-[#343090] border-[1px] py-3 px-4 rounded-[4px] border-[#343090] hover:text-[#5f59f7] hover:border-[#5f59f7] transition-colors duration-300" type="button">
                            نمایش تمام خدمات
                        </button>
                    </div>
                    <div className="sm:hidden">
                        <button className="x text-[14px] mx-4 sm:mx-0 sm:text-[16px] bg-transparent text-[#343090] border-[1px] py-3 px-4 rounded-[4px] border-[#343090] hover:text-[#5f59f7] hover:border-[#5f59f7] transition-colors duration-300" type="button">
                            <FaArrowLeft />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-4 lg:gap-x-8 mb-32">
                    <div className="border-[1px] rounded-[4px] border-[#cfcfea]">
                        <div className="mb-8">
                            <img className="rounded-[4px]" src="https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/2-696x464.jpg" alt="location-banner" />
                        </div>
                        <div className="px-4">
                            <div className="mb-4">
                                <h4 className="text-[18px] lg:text-[20px] font-bold mb-2">
                                    فضای کاری
                                </h4>
                                <p className="text-[#5c6b8d] text-[14px] lg:text-[16px]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
                            </div>
                            <div className="mb-6 lg:mb-6">
                                <span className="text-[14px] cursor-pointer sm:text-[16px] font-bold text-[#5f59f7] hover:text-[#343090] transition-colors duration-200">
                                    اطلاعات بیشتر
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="border-[1px] rounded-[4px] border-[#cfcfea]">
                        <div className="mb-8">
                            <img className="rounded-[4px]" src="https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/3-696x464.jpg" alt="location-banner" />
                        </div>
                        <div className="px-4">
                            <div className="mb-4">
                                <h4 className="text-[18px] lg:text-[20px] font-bold mb-2">
                                    فضای کاری
                                </h4>
                                <p className="text-[#5c6b8d] text-[14px] lg:text-[16px]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
                            </div>
                            <div className="mb-6 md:mb-2 lg:mb-6">
                                <span className="text-[14px] cursor-pointer sm:text-[16px] font-bold text-[#5f59f7] hover:text-[#343090] transition-colors duration-200">
                                    اطلاعات بیشتر
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="border-[1px] rounded-[4px] border-[#cfcfea]">
                        <div className="mb-8">
                            <img className="rounded-[4px]" src="https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/4-696x464.jpg" alt="location-banner" />
                        </div>
                        <div className="px-4">
                            <div className="mb-4">
                                <h4 className="text-[18px] lg:text-[20px] font-bold mb-2">
                                    فضای کاری
                                </h4>
                                <p className="text-[#5c6b8d] text-[14px] lg:text-[16px]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
                            </div>
                            <div className="mb-6 md:mb-2 lg:mb-6">
                                <span className="text-[14px] cursor-pointer sm:text-[16px] font-bold text-[#5f59f7] hover:text-[#343090] transition-colors duration-200">
                                    اطلاعات بیشتر
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*other locations */}

        </div>
    )
}

export default Locationsdetail