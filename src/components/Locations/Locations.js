import { Link } from "react-router-dom"
import Locationcard from "../../Ui/Locationcard/Locationcard"
import { useState } from "react"



const Locations = (props) => {
    const [locations, setlocations] = useState({
        data: [
            ["https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/2-696x464.jpg", "/locations/detail/1"],
            ["https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/1-696x464.jpg", "/locations/detail/2"],
            ["https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/4-696x464.jpg", "/locations/detail/3"],
            ["https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/3-696x464.jpg", "/locations/detail/4"],
            ["https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/2-696x464.jpg", "/locations/detail/5"],
            ["https://demo.tagdiv.com/newspaper_office_nexus_pro/wp-content/uploads/2024/03/1-696x464.jpg", "/locations/detail/6"],

        ]
    })
    return (
        <div className="mt-16">
            {/*title */}
            <div className="bg-[#f0f2fb] rounded-[4px] mx-auto w-[80%] py-16 mb-24">
                <div className="flex flex-col items-center">
                    <h2 className="text-[18px] sm:text-[28px] mx-8 font-bold text-center">
                        دفاتر ما
                    </h2>
                    <p className="mx-8 md:mx-0 md:max-w-[60%] text-justify lg:max-w-[40%] sm:text-center mt-4 text-[14px] sm:text-[16px] text-[#5c6b8d]">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-center max-w-[200px] sm:max-w-none mx-auto  mt-12 gap-4 sm:gap-6">
                    <button className="text-[14px] mx-4 sm:mx-0 sm:text-[16px] text-white bg-[#343090] rounded-[4px] py-3 px-4 hover:bg-[#5f59f7] transition-colors duration-300" px>
                        <Link to="/support">
                            ارتباط با ما
                        </Link>
                    </button>
                    <button className="text-[14px] mx-4 sm:mx-0 sm:text-[16px] bg-transparent text-[#343090] border-[1px] py-3 px-4 rounded-[4px] border-[#343090] hover:text-[#5f59f7] hover:border-[#5f59f7] transition-colors duration-300">
                        <Link to="/locations">
                            نمایش دفاتر ما
                        </Link>
                    </button>
                </div>
            </div>
            {/*title */}
            {/*location cars */}
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 sm:gap-12 md:gap-12 lg:gap-16 mx-8 sm:mx-16 mb-28 xl:mb-48">
               
                {locations.data.map((item) => (
                    <Locationcard img={item[0]} link={item[1]} />
                ))}

            </div>
            {/*location cars */}
        </div>
    )
}

export default Locations