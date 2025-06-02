import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";


const Servicescard = (props) => {
    return (
        <div className="border-[1px] rounded-md border-[#CFCFEA]">
            <div className="px-8 pt-6">
                <div className="mb-4">
                    <span className="text-[#343090] text-[42px]">
                        {props.logo}
                    </span>
                </div>
                <div className="mb-6">
                    <h4 className="bold-title mb-2">
                        {props.title}
                    </h4>
                    <p className="text-[#5c6b8d] text-[16px] text-justify sm:text-start">
                        {props.describtion}
                    </p>
                </div>
                <div className="flex flex-col mb-6">
                    <span className="normal-text text-[#5c6b8d] mb-2">
                        شروع از :
                    </span>
                    <span className="bold-title font-bold text-[#5f57f9]">
                        <span className="ml-1"> ماهانه </span> {props.price}
                    </span>
                </div>
            </div>
            <div className="bg-[#f0f2fb] pr-3 pl-6 sm:px-6 py-10">
                <div className="flex gap-x-3 mb-8 sm:mb-4">
                    <span className="mt-1 text-[18px] text-[#5f57f9]">
                        <FaCheck />
                    </span>
                    <p className="justify-text">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است

                    </p>
                </div>
                <div className="flex gap-x-3 mb-8 sm:mb-4">
                    <span className="mt-1 text-[18px] text-[#5f57f9]">
                        <FaCheck />
                    </span>
                    <p className="justify-text">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است

                    </p>
                </div>
                <div className="flex gap-x-3 mb-8 sm:mb-4 xl:mb-8">
                    <span className="mt-1 text-[18px] text-[#5f57f9]">
                        <FaCheck />
                    </span>
                    <p className="justify-text">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است

                    </p>
                </div>
                <div>
                    <span className="bold-title text-[#5f57f9] hover:text-[#343090] transition-colors duration-300">
                        <Link to={props.link}>
                            نمایش
                        </Link>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Servicescard