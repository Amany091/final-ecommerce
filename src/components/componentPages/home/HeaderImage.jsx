import { useSelector } from "react-redux";
import headerBG from "../../../assets/images/headerBG.png";


const HeaderImage = () => {
    const { theme } = useSelector((store) => store.theme)

    return (
        <div className="flex items-center relative brand ">
            <span className=" absolute top-10 right-5 ">
                <svg
                    className="w-[76px] h-[76px] lg:w-[104px] lg:h-[104px]"
                    viewBox="0 0 104 104"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z"
                        fill={`${theme === "dark" ? 'white' : 'black'}`}
                    />
                </svg>
            </span>
            <span className=" absolute ">
                <svg
                    className=" lg:w-[56px] lg:h-[56px] w-[44px] h-[44px] "
                    viewBox="0 0 104 104"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z"
                        fill={`${theme === "dark" ? 'white' : 'black'}`}
                    />
                </svg>
            </span>
            <img
                src={headerBG}
                alt="header"
                className="w-full object-cover h-full"
            />
        </div>
    );
}

export default HeaderImage;