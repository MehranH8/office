import { Link } from "react-router-dom"


const About = () => {
    return (
        <div className=" mt-20">
            {/*title */}
            <div className="flex flex-col items-center">
                <h2 className="text-[22px] sm:text-[28px] mx-8 font-bold text-center">
                    <span className="text-[32px]">:Office Nexus</span> <br />  طراحی مدرن و کاربردی محل کار شما
                </h2>
                <p className="mx-8 md:mx-0 md:max-w-[60%] text-justify lg:max-w-[40%] sm:text-center mt-4 text-[16px] text-[#5c6b8d]">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </p>
            </div>
            <div className="flex justify-center mt-12 gap-4 sm:gap-6">
                <button className="text-[16px] text-white bg-[#343090] rounded-[4px] py-3 px-4 hover:bg-[#5f59f7] transition-colors duration-300">
                    <Link to="/support">
                        ارتباط با ما
                    </Link>
                </button>
                <button className="bg-transparent text-[#343090] border-[1px] py-3 px-4 rounded-[4px] border-[#343090] hover:text-[#5f59f7] hover:border-[#5f59f7] transition-colors duration-300">
                    <Link to="/locations">
                        نمایش دفاتر ما
                    </Link>
                </button>
            </div>
            {/*title */}
            {/*images */}
            <div className="grid grid-cols-1 justify-items-center sm:flex justify-center gap-4 mx-10 mt-16">
                <div>
                    <img className="rounded-md" src="https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/image_1.jpg" alt="about-us" />
                </div>
                <div>
                    <img className="rounded-md" src="https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/image_2.jpg" alt="about-us" />
                </div>
                <div>
                    <img className="rounded-md" src="https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/image_3.jpg" alt="about-us" />
                </div>
            </div>
            {/*images */}
            {/*aboutus */}
            <div className="px-10 sm:px-16 md:px-16 lg:px-24 py-20 mt-24 bg-[#f0f2fb]">
                <div className="mb-8">
                    <h3 className="text-[24px] -mx-4 sm:mx-0 text-center sm:text-right sm:text-[26px] font-bold">
                        درباره ما : ایجاد تجربه کاری
                    </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <p className="text-[14px] sm:text-[15px] text-justify lg:text-start">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت
                    </p>
                    <p className="text-[14px] sm:text-[15px] text-justify lg:text-start">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت
                    </p>
                </div>
            </div>
            {/*aboutus */}
            {/*goals */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mx-10 md:mx-16 xl:mx-24 mt-28">
                <div className="mx-auto lg:mx-0">
                    <img className="rounded-md" src="https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/mission_and_vision_enabling_empowered_work_environments.jpg" alt="" />
                </div>
                <div className="my-auto">
                    <div className="mb-6">
                        <h4 className="text-[24px] font-bold text-center sm:text-start -mx-4 sm:mx-0">
                            ماموریت و چشم انداز: ایجاد محیط های کاری توانمند
                        </h4>
                    </div>
                    <div>
                        <p className=" sm:text-start text-justify">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                        </p>
                    </div>
                </div>
            </div>
            {/*goals */}
            {/*guarantee */}
            <div className="flex flex-col-reverse gap-12 lg:grid grid-cols-2 mx-10 md:mx-16 lg:mx-24 mt-20 lg:mt-24">
                <div className="my-auto">
                    <div className="mb-6">
                        <h4 className="text-[24px] font-bold text-center sm:text-start -mx-4 sm:mx-0">
                            تعهد کیفیت: ارتقاء فضای کاری شما
                        </h4>
                    </div>
                    <div>
                        <p className=" sm:text-start text-justify ">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                        </p>
                    </div>
                    <div className="grid grid-cols-3 -mx-4 sm:mx-0 mt-8">
                        <div className="mx-auto lg:mx-0">
                            <div className="text-center sm:text-start">
                                <span className="text-[#5f59f7] text-[24px] sm:text-[32px] font-bold ">
                                    +5
                                </span>
                            </div>
                            <div>
                                <p className="text-[#5c6b8d] text-[16px] sm:text-[18px]">
                                    سال تجربه
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto lg:mx-0">
                            <div >
                                <span className="text-[#5f59f7] text-[24px] sm:text-[32px] font-bold">
                                    +6
                                </span>
                            </div>
                            <div>
                                <p className="text-[#5c6b8d] text-[16px] sm:text-[18px]">
                                    دفتر
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto lg:mx-0">
                            <div>
                                <span className="text-[#5f59f7] text-[24px] sm:text-[32px] font-bold">
                                    +100
                                </span>
                            </div>
                            <div>
                                <p className="text-[#5c6b8d] text-[16px] sm:text-[18px]">
                                    پروژه موفق
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mx-auto lg:mx-0 mb-12 lg:mb-0">
                    <img className="rounded-md" src="https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/quality_commitment_upgrading_your_workspace.jpg" alt="" />
                </div>
            </div>
            {/*guarantee */}
            {/*change */}
            <div className="flex flex-col items-center bg-[#111827] py-20 mx-6 px-2 sm:mx-16 md:mx-24 lg:mx-36 rounded-lg mt-28 mb-28">
                <div>
                    <h3 className="font-bold text-white text-[18px] sm:text-[22px] md:text-[28px] text-center">
                        آماده ی تغییر در فضا کاری خود هستید؟
                    </h3>
                </div>
                <div className="mt-4">
                    <p className="text-[14px] sm:text-[16px] md:text-[20px] text-[#cfcfea]">
                        با ما برای قرار ملاقات در ارتباط باشید
                    </p>
                </div>
                <div className="mt-6">
                    <button className="px-4 py-3 text-[14px] sm:text-[16px] text-white bg-[#5f59f7] hover:bg-[#343090] transition-colors duration-300 rounded-[4px]">
                        <Link to="/support">
                            ارسال درخواست
                        </Link>
                    </button>
                </div>
            </div>
            {/*change */}

        </div>
    )
}

export default About