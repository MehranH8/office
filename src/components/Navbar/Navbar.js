
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";





export function NavbarWithSolidBackground() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 720 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul style={{ direction: "rtl" }} className="mb-4 mt-2 flex flex-col mx-6 gap-4 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-4 lg:gap-8">
      <li
        className="mx-1"
      >
        <Link onClick={()=>setOpenNav(false)} to="/" className="flex hover:text-[#5f59f7] transition-colors duration-200 items-center text-[#111827] text-[14px] md:text-[12px] lg:text-[14px]">
          خانه
        </Link>
      </li>
      <li
      >
        <Link onClick={()=>setOpenNav(false)} to="/services" className="flex hover:text-[#5f59f7] transition-colors duration-200 items-center text-[#111827] text-[14px] md:text-[12px] lg:text-[14px]">
          خدمات
        </Link>
      </li>
      <li
      >
        <Link onClick={()=>setOpenNav(false)} to="/locations" className="flex hover:text-[#5f59f7] transition-colors duration-200 items-center text-[#111827] text-[14px] md:text-[12px] lg:text-[14px]">
          دفاتر ما
        </Link>
      </li>
      <li      >
        <Link onClick={()=>setOpenNav(false)} to="/about" className="flex hover:text-[#5f59f7] transition-colors duration-200 items-center text-[#111827] text-[14px] md:text-[12px] lg:text-[14px]">
          درباره ما
        </Link>
      </li>
      <li
      >
        <Link onClick={()=>setOpenNav(false)} to="/support" className="flex hover:text-[#5f59f7] transition-colors duration-200 items-center text-[#111827] text-[14px] md:text-[12px] lg:text-[14px]">
          پشتیبانی
        </Link>
      </li>
    </ul>
  );

  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] shadow-none sticky top-0 z-20 bg-[#f6f8ff] mb-24">
      <Navbar className="shadow-none border-none  h-max max-w-full bg-[#f6f8ff] rounded-none px-4 py-0 md:px-8 ">
        <div className="flex flex-row-reverse items-center md:mx-6 lg:mx-16 xl:mx-32 my-auto py-3 justify-between text-blue-gray-900">
          <Link
            to="/"
            className="mr-4 cursor-pointer text-[20px] mx-8 lg:text-[22px] py-1.5 font-medium"
          >
            <span className="font-extrabold">Office</span>Nexous
          </Link>
          <div className="mr-4 hidden md:block">{navList}</div>
          <button
            className="hidden md:inline-block bg-[#343090] text-white py-2 px-3 hover:bg-[#222] transition-colors duration-500  rounded-[4px]"
          >
            <span className="text-[12px] lg:text-[14px]">
              <Link to="/support">
                ارتباط با ما
              </Link>
            </span>
          </button>
          <IconButton
            variant="text"
            className="md:hidden mx-6"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <MdOutlineClose className="h-6 w-6" strokeWidth={2} />
            ) : (
              <FaBars className="h-6 w-6" strokeWidth={1} />
            )}
          </IconButton>
        </div>
        <Collapse className="mr-auto shadow-sm" open={openNav}>
          {navList}
          <button className=" md:hidden bg-[#343090] text-white py-2 px-4 hover:bg-[#222] transition-colors duration-500  rounded-[4px] w-[85%] mx-auto mb-10 mt-6 flex justify-center" >
            <span className="text-[14px]">ارتباط با ما</span>
          </button>
        </Collapse>
      </Navbar>
    </div>
  );
}