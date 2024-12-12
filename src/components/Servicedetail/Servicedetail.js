import { FaCheck } from "react-icons/fa";
import { data, Link } from "react-router-dom";
import { FaCloud, FaChartBar, FaBuilding, FaArrowLeft } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useFormik } from 'formik';
import * as yup from "yup";



const Servicedetail = () => {


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



    const [Servicedetail, setServicedetail] = useState({
        data: [
            ["https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/2-696x464.jpg", "/services/detail/1"],
            ["https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/1-696x464.jpg", "/services/detail/2"],
            ["https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/4-696x464.jpg", "/services/detail/3"],
            ["https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/3-696x464.jpg", "/services/detail/4"],
            ["https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/2-696x464.jpg", "/services/detail/5"],
            ["https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/1-696x464.jpg", "/services/detail/6"],

        ]
    })




    const Servicedetailid = useLocation().pathname

    const choosenindex = Servicedetail.data.findIndex((id) => {
        if (id[1] == Servicedetailid) {
            return Servicedetail
        }
    })

    return (
        <div className="mt-20 mx-8 sm:mx-12">
            {/*title */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-8">
                <div className="lg:mx-8">
                    <div className="mb-3">
                        <h2 className="text-[28px] font-bold">
                            فضای دفتر
                        </h2>
                    </div>
                    <div>
                        <span className="text-[16px] text-[#5c6b8d]"> شروع از :</span>
                        <p className="text-[24px] text-[#5f59f7] font-bold"> ماهانه 500$</p>
                    </div>
                    <div className="w-full border-b-[1px] border-[#cfcfea] my-8"></div>
                    <div className="mb-4">
                        <span className="text-[16px]">
                            نکات مهم
                        </span>
                    </div>
                    <div>
                        <div className="flex gap-x-3 mb-8 sm:mb-4">
                            <span className="mt-1 text-[18px] text-[#5f57f9]">
                                <FaCheck />
                            </span>
                            <p className="text-[14px] text-justify">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است

                            </p>
                        </div>
                        <div className="flex gap-x-3 mb-8 sm:mb-4">
                            <span className="mt-1 text-[18px] text-[#5f57f9]">
                                <FaCheck />
                            </span>
                            <p className="text-[14px] text-justify">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است

                            </p>
                        </div>
                        <div className="flex gap-x-3 mb-8 sm:mb-4">
                            <span className="mt-1 text-[18px] text-[#5f57f9]">
                                <FaCheck />
                            </span>
                            <p className="text-[14px] text-justify">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است

                            </p>
                        </div>
                        <div className="mt-8">
                            <button
                                className=" bg-[#343090] text-white py-3 px-4 hover:bg-[#5f57f9] transition-colors duration-500  rounded-[4px]"
                            >
                                <span className="text-[14px] lg:text-[16px]">ارتباط با ما</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="my-auto">
                    <img className="rounded-md w-full" src={Servicedetail.data[choosenindex][0]} alt="service-banner" />
                </div>
            </div>
            {/*title */}

            <div className="flex flex-col lg:flex-row gap-x-10  mt-20">
                {/*about */}
                <div className="max-w-full lg:max-w-[600px] xl:max-w-[700px]">
                    <h3 className="text-[26px] font-bold mb-6">
                        درباره فضای کاری ما
                    </h3>
                    <p className="mb-8  text-justify lg:text-start">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت
                    </p>
                    <p className="mb-8 text-justify lg:text-start">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت
                    </p>
                    <p className="mb-8 text-justify lg:text-start">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت
                    </p>
                    <p className="mb-8 text-justify lg:text-start">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </p>
                </div>
                {/*abput */}
                {/*form */}
                <div>
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
                {/*form */}
            </div>
            {/*other services */}
            <div>
                <div className="flex justify-between mb-16 mt-14">
                    <div>
                        <h3 className="text-[24px] sm:text-[28px] font-bold">
                            خدمات دیگر

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
                <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 gap-x-6 mb-36">
                    <div className="border-[1px] rounded-[4px] border-[#cfcfea] py-4 px-6">
                        <div className="mb-4">
                            <span className="text-[#343090] text-[42px]">
                                <FaCloud />
                            </span>
                        </div>
                        <div className="mb-4">
                            <h4 className="text-[18px] font-bold mb-2">
                                دفتر مجازی
                            </h4>
                            <p className="text-[16px] text-[#5c6b8d]">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است
                            </p>
                        </div>
                        <div className="mb-2">
                            <span className="text-[16px] font-bold text-[#5f59f7] hover:text-[#343090] transition-colors duration-200">
                                <Link to="/location">
                                    نمایش
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="border-[1px] rounded-[4px] border-[#cfcfea] py-4 px-6">
                        <div className="mb-4">
                            <span className="text-[#343090] text-[42px]">
                                <FaBuilding />

                            </span>
                        </div>
                        <div className="mb-4">
                            <h4 className="text-[18px] font-bold mb-2">
                                فضای اداری
                            </h4>
                            <p className="text-[16px] text-[#5c6b8d]">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است
                            </p>
                        </div>
                        <div className="mb-2">
                            <span className="text-[16px] font-bold text-[#5f59f7] hover:text-[#343090] transition-colors duration-200">
                                <Link to="/location">
                                    نمایش
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="border-[1px] rounded-[4px] border-[#cfcfea] py-4 px-6">
                        <div className="mb-4">
                            <span className="text-[#343090] text-[42px]">
                                <FaChartBar />
                            </span>
                        </div>
                        <div className="mb-4">
                            <h4 className="text-[18px] font-bold mb-2">
                                فضای رویداد
                            </h4>
                            <p className="text-[16px] text-[#5c6b8d]">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است
                            </p>
                        </div>
                        <div className="mb-2">
                            <span className="text-[16px] font-bold text-[#5f59f7] hover:text-[#343090] transition-colors duration-200">
                                <Link to="/location">
                                    نمایش
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/*other services */}

        </div>
    )
}

export default Servicedetail