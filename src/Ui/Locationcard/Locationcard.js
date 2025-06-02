import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import React from "react";




const Locationcard = (props) => {
    return (
        <Card className="mt-6 ">
            <CardHeader color="blue-gray" className="relative w-[90%] mx-auto">
                <img
                    src={props.img}
                    alt="card-image"
                />
            </CardHeader>
            <CardBody className="-mb-2">
                <h4 className="bold-title text-black mb-2">
                    فضای کاری
                </h4>
                <p className="normal-text text-[#5c6b8d]">
                    لورم ایپسوم متن ساختگی  با استفاده از طراحان گرافیک است
                </p>
            </CardBody>
            <CardFooter className="pt-0">
                <Link to={props.link}>
                <span className="bold-title text-[#5f59f7] hover:text-[#343090] transition-colors duration-200">بیشتر</span>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default Locationcard