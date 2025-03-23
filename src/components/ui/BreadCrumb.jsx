import { FaChevronRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {
    const location = useLocation();
    const paths = location.pathname.split("/").filter(Boolean);

    if (paths.length === 0) return null;

    return (
        <nav
            aria-label="breadcrumb"
            className="text-sm bg-white rounded-lg my-2 p-2"
        >
            <ul className="flex items-center gap-2 flex-wrap">
                <li>
                    <Link className="hover:text-orange-400 transition text-black" to={"/"} >Home</Link>
                </li>
                {paths.map((path, index) => {
                    const fullPath = `/${paths.slice(0).join("/")}`
                    const format = path.replace(/-/g, " ");
                    const isLast = index === paths.length - 1;

                    return (
                        <li key={fullPath} className="flex items-center gap-2">
                            <FaChevronRight className="text-xs text-gray-400" />

                            {isLast ? (
                                <span className="text-orange-500 font-semibold capitalize truncate">
                                    {format}
                                </span>
                            ) : (
                                <Link
                                    to={fullPath}
                                    className="hover:text-orange-500 text-black transition capitalize truncate"
                                >
                                    {format}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default BreadCrumb;