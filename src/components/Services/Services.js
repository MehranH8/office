import { Link } from "react-router-dom"
import Servicescard from "../../Ui/Servicescard/Servicescard"
import { useState } from "react"
import { FaCloud, FaMicrophone, FaChartBar, FaBuilding } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { MdMonitor } from "react-icons/md";



const Services = () => {

    const [services, setservices] = useState({
        data: [
            [<FaCloud />, "دفتر مجازی", "لورم ایپسوم متن ساختگی  با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی  با استفاده از طراحان گرافیک است", "$200", "/services/detail/1"],
            [<FaBuilding />, "فضای اداری", "لورم ایپسوم متن ساختگی  با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی  با استفاده از طراحان گرافیک است", "$500", "/services/detail/2"],
            [<FaMicrophone />, "فضای رویداد", "لورم ایپسوم متن ساختگی  با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی  با استفاده از طراحان گرافیک است", "$250", "/services/detail/3"],
            [<FaChartBar />, "اتاق جلسه", "لورم ایپسوم متن ساختگی  با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی  با استفاده از طراحان گرافیک است", "$30", "/services/detail/4"],
            [<MdMonitor />, "میز اختصاصی", "لورم ایپسوم متن ساختگی  با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی  با استفاده از طراحان گرافیک است", "$300", "/services/detail/5"],
            [<IoPeople />, "فضای کار مشترک", "لورم ایپسوم متن ساختگی  با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی  با استفاده از طراحان گرافیک است", "$20", "/services/detail/6"],
        ]
    })


    return (
        <div className="mt-16">
            {/*title*/}
            <div className="bg-[#f0f2fb] rounded-[4px] mx-auto w-[80%] py-10 mb-16">
                <div className="flex flex-col items-center">
                    <h2 className=" mx-8 bold-title text-center">
                        خدمات ما
                    </h2>
                    <p className="mx-8 md:mx-0 md:max-w-[60%] lg:max-w-[40%] sm:text-center mt-4 justify-text text-[#5c6b8d]">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-center max-w-[200px] sm:max-w-none mx-auto  mt-12 gap-4 sm:gap-6">
                    <button className="dark-btn" >
                        <Link to="/support">
                            ارتباط با ما
                        </Link>
                    </button>
                    <button className="light-btn">
                        <Link to="/services">
                            نمایش خدمات ما
                        </Link>
                    </button>
                </div>
            </div>
            {/*title*/}
            {/*service cards*/}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-8 sm:mx-16 gap-10 mb-24">
                {services.data.map((item) => (
                    <Servicescard logo={item[0]} title={item[1]} description={item[2]} price={item[3]} link={item[4]} />
                ))}
            </div>
            {/*service cards*/}

        </div>
    )
}

export default Services