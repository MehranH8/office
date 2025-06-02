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
            <div className="bg-[#f0f2fb] rounded-[4px] mx-auto w-[80%]  py-10 mb-16">
                <div className="flex flex-col items-center">
                    <h2 className="mx-8 bold-title text-center">
                        دفاتر ما
                    </h2>
                    <p className="mx-8 md:mx-0 md:max-w-[60%] lg:max-w-[40%] sm:text-center mt-4 justify-text text-[#5c6b8d]">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-center max-w-[200px] sm:max-w-none mx-auto  mt-12 gap-4 sm:gap-6">
                    <button className="dark-btn">
                        <Link to="/support">
                            ارتباط با ما
                        </Link>
                    </button>
                    <button className="light-btn">
                        <Link to="/locations">
                            نمایش دفاتر ما
                        </Link>
                    </button>
                </div>
            </div>
            {/*title */}
            {/*location cars */}
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 sm:gap-12 md:gap-12 lg:gap-16 mx-8  mb-16 xl:mb-24">
               
                {locations.data.map((item) => (
                    <Locationcard img={item[0]} link={item[1]} />
                ))}

            </div>
            {/*location cars */}
        </div>
    )
}

export default Locations