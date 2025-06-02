import { Link } from "react-router-dom"
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


const Footer =()=>{
    return(
        <div className="border-t-[1px] border-[#CFCFEA] pt-16 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2  mx-8 sm:mx-16 lg:mx-32 items-center">
            <div>
                <div className="text-center md:text-start">
                    <div>
                        <h4 className="bold-title">
                            عضو خبرنامه ما شوید
                        </h4>
                    </div>
                    <div className="mt-4 flex justify-center md:block">
                        <p className=" max-w-[400px] justify-text text-[#5c6b8d]">
                            جدیدترین اطلاعات بینش، نکات و به‌روزرسانی‌ها را درباره ایجاد تحول در فضای کاری خود در صندوق ورودی خود دریافت کنید.
                        </p>
                    </div>
                    <div className="mt-6 mb-8 md:mb-0">
                        <div className="-mx-6 sm:mx-0">
                            <input className="bg-transparent border-[1px] border-[#CFCFEA] max-w-[150px] sm:max-w-none py-2 pl-0 sm:py-3 sm:pl-20 md:py-2 md:pl-0 lg:py-3 lg:pl-20 pr-2 text-black normal-text" type="email" placeholder="ایمیل شما" />
                            <button className="max-w-[80px] sm:max-w-none py-2 px-3 sm:py-3 sm:px-6 md:py-2 md:px-4 lg:py-3 lg:px-6 rounded-l-md normal-text text-white bg-[#343090] hover:bg-[#5f59f7] transition-colors duration-300" type="button">عضویت</button>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-6 justify-center md:justify-start mb-12 md:mb-0">
                        <span className="text-[#5c6b8d] text-[18px]">
                            <Link to="#">
                                <FaFacebookF />
                            </Link>
                        </span>
                        <span className="text-[#5c6b8d] text-[18px]">
                            <Link to="#">
                                <FaInstagram />
                            </Link>
                        </span>
                        <span className="text-[#5c6b8d] text-[18px]">
                            <Link to="#">
                                <BsTwitterX />
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 justify-items-center -mx-4 sm:mx-0">
                <div >
                    <h4 className="bold-title">تیتر دلخواه</h4>
                    <ul className="mt-4 flex flex-col items-center">
                        <li className="normal-text my-2 hover:text-[#5f59f7] max-w-fit transition-colors duration-300">
                            <Link to="/">
                                خانه
                            </Link>
                        </li>
                        <li className="normal-text my-2 hover:text-[#5f59f7] max-w-fit transition-colors duration-300">
                            <Link to="/services">
                                خدمات
                            </Link>
                        </li>
                        <li className="normal-text my-2 hover:text-[#5f59f7] max-w-fit transition-colors duration-300">
                            <Link to="/locations">
                                دفاتر ما
                            </Link>
                        </li>
                        <li className="normal-text my-2 hover:text-[#5f59f7] max-w-fit transition-colors duration-300">
                            <Link to="/about">
                                درباره ما
                            </Link>
                        </li>
                        <li className="normal-text my-2  hover:text-[#5f59f7] max-w-fit transition-colors duration-300">
                            <Link to="/support">
                                پشتیبانی
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="bold-title">تیتر دلخواه</h4>
                    <ul className="mt-4 flex flex-col items-center">
                        <li className="normal-text my-2 hover:text-[#5f59f7] max-w-fit transition-colors duration-300">
                            <Link to="/">
                                خانه
                            </Link>
                        </li>
                        <li className="normal-text my-2 hover:text-[#5f59f7] max-w-fit transition-colors duration-300">
                            <Link to="/services">
                                خدمات
                            </Link>
                        </li>
                        <li className="normal-text my-2 hover:text-[#5f59f7] max-w-fit transition-colors duration-300">
                            <Link to="/locations">
                                دفاتر ما
                            </Link>
                        </li>
                        <li className="normal-text my-2 hover:text-[#5f59f7] max-w-fit transition-colors duration-300">
                            <Link to="/about">
                                درباره ما
                            </Link>
                        </li>
                        <li className="normal-text my-2  hover:text-[#5f59f7] max-w-fit transition-colors duration-300">
                            <Link to="/support">
                                پشتیبانی
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer