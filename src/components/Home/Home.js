import { FaCloud, FaChartBar, FaBuilding, FaArrowLeft, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Carousel, IconButton, Avatar } from "@material-tailwind/react";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';




const Home = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="mx-6 sm:mx-8 md:mx-16 lg:mx-28">
            {/*title*/}
            <div data-aos="fade-up"
                data-aos-duration="1000" data-aos-delay="300" data-aos-once="true" className="mt-20 relative 2xl:translate-x-[-7%] mb-12 sm:mb-16 md:mb-36 lg:mb-16">
                <div className="bg-white lg:ml-10 rounded-lg md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] py-8 px-4 sm:py-16 sm:px-10 md:absolute md:top-0 md:left-[50%] w-full xl:translate-x-[-80%] xl:translate-y-[40%] lg:translate-x-[-80%] lg:translate-y-[30%] md:translate-y-[80%] md:translate-x-[-50%] mb-10 md:mb-0 z-10">
                    <div>
                        <h2 className="text-[18px] md:text-[20px] lg:text-[22px] font-bold mb-6 text-center sm:text-start">
                            فضای کاری خود را با ما بسازید
                        </h2>
                        <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#5c6b8d] mb-5 text-center sm:text-start">
                            تجهیز محیط کار شما بصورت کاملا حرفه ای توسط تیم ما بر اساس انتخاب شما
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-y-4 gap-x-4">
                        <button className="text-[13px] mx-4 sm:mx-0 sm:text-[15px] text-white bg-[#343090] rounded-[4px] py-3 px-4 hover:bg-[#5f59f7] transition-colors duration-300" type="button">
                            <Link to="/support">
                                ارتباط با ما
                            </Link>
                        </button>
                        <button className="text-[13px] mx-4 sm:mx-0 sm:text-[15px] bg-transparent text-[#343090] border-[1px] py-3 px-4 rounded-[4px] border-[#343090] hover:text-[#5f59f7] hover:border-[#5f59f7] transition-colors duration-300" type="button">
                            <Link to="/services">
                                خدمات ما
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="relative z-0 md:max-w-[700px] xl:max-w-[800px]">
                    <img className="rounded-lg" src="https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/7.jpg" alt="home-banner" />
                </div>
            </div>
            {/*title*/}
            {/*other services*/}
            <div data-aos="fade-up"
                data-aos-duration="1000" data-aos-delay="300" data-aos-once="true" >
                <div className="flex justify-between mb-8 sm:mb-10 ">
                    <div className="content-center">
                        <h3 className="more-title">
                            خدمات دیگر
                        </h3>
                    </div>
                    <div className="hidden  sm:block">
                        <button className="more-btn" type="button">
                            <Link to="/services">
                                نمایش تمام خدمات
                            </Link>

                        </button>
                    </div>
                    <div className="sm:hidden">
                        <button className="more-btn !ml-auto " type="button">
                            <FaArrowLeft />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 gap-x-6 mb-20">
                    <div className="border-[1px] rounded-[4px] border-[#cfcfea] py-4 px-6">
                        <div className="mb-4">
                            <span className="text-[#343090] text-[42px]">
                                <FaCloud />
                            </span>
                        </div>
                        <div className="mb-4">
                            <h4 className="text-[14px] sm:text-[16px]  font-bold mb-3">
                                دفتر مجازی
                            </h4>
                            <p className="text-[12px] sm:text-[14px] text-justify text-[#5c6b8d]">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است
                            </p>
                        </div>
                        <div className="mb-2">
                            <span className="text-[12px] sm:text-[14px] font-bold text-[#5f59f7] hover:text-[#343090] transition-colors duration-200">
                                <Link to="/locations/detail/1">
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
                            <h4 className="text-[14px] sm:text-[16px] font-bold mb-3">
                                فضای اداری
                            </h4>
                            <p className="text-[12px] sm:text-[14px] text-[#5c6b8d]">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است
                            </p>
                        </div>
                        <div className="mb-2">
                            <span className="text-[12px] sm:text-[14px] font-bold text-[#5f59f7] hover:text-[#343090] transition-colors duration-200">
                                <Link to="/locations/detail/2">
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
                            <h4 className="text-[14px] sm:text-[16px] font-bold mb-3">
                                فضای رویداد
                            </h4>
                            <p className="text-[12px] sm:text-[14px] text-[#5c6b8d]">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است
                            </p>
                        </div>
                        <div className="mb-2">
                            <span className="text-[12px] sm:text-[14px] font-bold text-[#5f59f7] hover:text-[#343090] transition-colors duration-200">
                                <Link to="/locations/detail/3">
                                    نمایش
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/*other services*/}
            {/*preparing*/}
            <div className="bg-[#f0f2fb] pt-4 pb-28 -mx-28">
                <div  className="grid grid-cols-1 lg:grid-cols-2 gap-12 mx-10 md:mx-16 xl:mx-24 mt-28">
                    <div data-aos="fade-left"
                    data-aos-duration="1000" data-aos-delay="200" data-aos-once="true" className="mx-16 sm:mx-auto lg:mx-0">
                        <img className="rounded-md" src="https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/preparing_your_workspace_for_tomorrow.png" alt="home-banner" />
                    </div>
                    <div data-aos="fade-right"
                    data-aos-duration="1000" data-aos-delay="300" data-aos-once="true" className="my-auto mx-8 lg:mx-0">
                        <div className="mb-6">
                            <h4 className="bold-title text-center sm:text-start  mx-8 lg:mx-0">
                                آماده سازی فضای کاری خود برای آینده
                            </h4>
                        </div>
                        <div className="mx-3">
                            <div className="flex gap-x-3 mb-8 sm:mb-4 mx-8 lg:mx-0">
                                <span className="mt-1 text-[18px] text-[#5f57f9]">
                                    <FaCheck />
                                </span>
                                <p className="justify-text">
                                    فضاهای کاری ما که برای پیشرفت در کسب و کار شما طراحی شده اند، طرح های مدولار و شرایط اجاره سازگار را ارائه می دهند.
                                </p>
                            </div>
                            <div className="flex gap-x-3 mb-8 sm:mb-4 mx-8 lg:mx-0">
                                <span className="mt-1 text-[18px] text-[#5f57f9]">
                                    <FaCheck />
                                </span>
                                <p className="justify-text">
                                    دفاتر ما با مجهز شدن به آخرین فناوری های دیجیتال، آماده موج بعدی نوآوری هستند.
                                </p>
                            </div>
                            <div className="mt-6 mx-8 lg:mx-0">
                                <span className="bold-title text-[#5f57f9] hover:text-[#343090] transition-colors duration-300">
                                    <Link to="/support">
                                        ارتباط با ما
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div  className="flex flex-col-reverse gap-12 lg:grid grid-cols-2 mx-10 md:mx-16 lg:mx-24 mt-16 lg:mt-18">
                    <div data-aos="fade-left"
                    data-aos-duration="1000" data-aos-delay="200" data-aos-once="true" className="my-auto mx-8 lg:mx-0">
                        <div className="mb-6 mx-8 lg:mx-0">
                            <h4 className="bold-title text-center sm:text-start ">
                                آماده سازی فضای کاری خود برای آینده
                            </h4>
                        </div>
                        <div>
                            <div className="flex gap-x-3 mb-8 sm:mb-4 mx-8 lg:mx-0">
                                <span className="mt-1 text-[18px] text-[#5f57f9]">
                                    <FaCheck />
                                </span>
                                <p className="justify-text">
                                    فضاهای کاری ما که برای پیشرفت در کسب و کار شما طراحی شده اند، طرح های مدولار و شرایط اجاره سازگار را ارائه می دهند.
                                </p>
                            </div>
                            <div className="flex gap-x-3 mb-8 sm:mb-4 mx-8 lg:mx-0">
                                <span className="mt-1 text-[18px] text-[#5f57f9]">
                                    <FaCheck />
                                </span>
                                <p className="justify-text">
                                    دفاتر ما با مجهز شدن به آخرین فناوری های دیجیتال، آماده موج بعدی نوآوری هستند.
                                </p>
                            </div>
                            <div className="mt-6 mx-8 lg:mx-0">
                                <span className="bold-title text-[#5f57f9] hover:text-[#343090] transition-colors duration-300">
                                    <Link to="/services">
                                        خدمات ما
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-right"
                    data-aos-duration="1000" data-aos-delay="300" data-aos-once="true" className="flex justify-end mx-16 sm:mx-auto lg:mx-0 mb-4 lg:mb-0">
                        <img className="rounded-md" src="https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/unlock_the_potential_of_flexible_environments-1.png" alt="home-banner" />
                    </div>
                </div>
            </div>
            {/*preparing*/}
            {/*opinions*/}
            <div className="-mx-28 bg-[#111827] py-20">
                <h3 className="bold-title text-white text-center mb-14 mx-24">نظرات مشتریان درباره ما</h3>
                <Carousel
                    className=""
                    loop="true"
                    navigation={""}
                    style={{ direction: "ltr" }}
                    prevArrow={({ handlePrev }) => (
                        <IconButton
                            variant="text"
                            color="white"
                            size="lg"
                            onClick={handlePrev}
                            className="!absolute top-2/4 left-20 md:left-12 xl:left-4 -translate-y-2/4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                />
                            </svg>
                        </IconButton>
                    )}
                    nextArrow={({ handleNext }) => (
                        <IconButton
                            variant="text"
                            color="white"
                            size="lg"
                            onClick={handleNext}
                            className="!absolute top-2/4 !right-20 md:!right-12 xl:!right-4 -translate-y-2/4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </IconButton>
                    )}
                >
                    <div style={{ direction: "rtl" }} className=" text-white mx-32 md:mx-48">
                        <div className="justify-text mb-14 xl:text-start">
                            <p className="justify-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد</p>
                        </div>
                        <div>
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-4">
                                    <Avatar className="w-[20%] sm:w-[10%] h-fit" src="https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/emily_smith.jpg" alt="avatar" />
                                    <div>
                                        <p className="justify-text mb-2">مریم رضایی</p>
                                        <p className="text-[12px]  text-[#cfcfea]">
                                            مدیر اجرایی و کارمند شرکت افرا
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ direction: "rtl" }} className=" text-white mx-32 md:mx-48">
                        <div className="justify-text mb-14 xl:text-start">
                            <p className="justify-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد</p>
                        </div>
                        <div>
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-4">
                                    <Avatar className="w-[20%] sm:w-[10%] h-fit" src="https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/marcus_johnson.jpg" alt="avatar" />
                                    <div>
                                        <p className="justify-text font-bold mb-2">علی رجبی</p>
                                        <p className="text-[12px]  text-[#cfcfea]">
                                            مدیر اجرایی و کارمند شرکت افرا
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ direction: "rtl" }} className=" text-white mx-32 md:mx-48">
                        <div className=" mb-14 xl:text-start">
                            <p className="justify-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد</p>
                        </div>
                        <div>
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-4">
                                    <Avatar className="w-[20%] sm:w-[10%] h-fit" src="https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/sofia_alvarez.jpg" alt="avatar" />
                                    <div>
                                        <p className="font-bold mb-2">ملیکا اکبری</p>
                                        <p className="text-[12px]text-[#cfcfea]">
                                            مدیر اجرایی و کارمند شرکت افرا
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
            {/*opinions*/}
            {/*trusted companies*/}
            <div className="mt-24">
                <div>
                    <h3 className="bold-title text-center">مورد اطمینان شرکت های مطرح</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-6 mt-12">
                    <div className="mx-auto">
                        <img className="max-w-[150px] h-auto" src="https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/opalescence.png" alt="trusted-companies" />
                    </div>
                    <div className="mx-auto">
                        <img className="max-w-[150px] h-auto" src="https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/strau.png" alt="trusted-companies" />
                    </div>
                    <div className="mx-auto">
                        <img className="max-w-[150px] h-auto" src="https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/artcreek.png" alt="trusted-companies" />
                    </div>
                    <div className="mx-auto">
                        <img className="max-w-[150px] h-auto" src="https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/invisalign.png" alt="trusted-companies" />
                    </div>
                    <div className="mx-auto">
                        <img className="max-w-[150px] h-auto" src="https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/bio.png" alt="trusted-companies" />
                    </div>
                    <div className="mx-auto">
                        <img className="max-w-[150px] h-auto" src="https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/spident.png" alt="trusted-companies" />
                    </div>
                </div>
            </div>
            {/*trusted companies*/}
            {/*changing*/}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-x-16 gap-y-16 bg-[#111827] px-8 md:px-16 lg:px-8 xl:px-16 pt-20   sm:mx-10 md:mx-16 lg:mx-0 xl:mx-20 rounded-lg mt-24 mb-28">
                <div className="">
                    <div>
                        <h3 className="text-white bold-title text-center">
                            آماده ی تغییر در فضا کاری خود هستید؟
                        </h3>
                    </div>
                    <div className="mt-4 text-center lg:text-start">
                        <p className="normal-text text-[#cfcfea]">
                            با ما برای قرار ملاقات در ارتباط باشید
                        </p>
                    </div>
                    <div className="mt-6 text-center lg:text-start">
                        <button className="btn">
                            <Link to="/support">
                                ارسال درخواست
                            </Link>
                        </button>
                    </div>
                </div>
                <div>
                    <img src="https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/ready_to_revolutionize_your_workspace-1.png" alt="home-banner" />
                </div>
            </div>
            {/*changing*/}
        </div>
    )
}

export default Home