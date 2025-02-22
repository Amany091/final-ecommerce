import { useEffect } from "react";
import useWindowWidth from "../../../customHooks/useWindowWidth";
import { useGetProductsQuery } from "../../../features/RTK/productsApi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

const Pagination = ({ queryParams }) => {
    const windowWidth = useWindowWidth()
    const { data: products } = useGetProductsQuery(queryParams)
    const numOfPages = Math.floor(products?.length / 10);
    const pageNums = Array.from({ length: numOfPages }, (_, i) => i + 1);
    const [searchParams, setSearchParams] = useSearchParams()
    const { refetch } = useGetProductsQuery(queryParams)

    const handleChangePage = (pageNumber) => {
        setSearchParams({ page: pageNumber.toString() })
    }

    const currentpage = searchParams.get("page")
    useEffect(() => {
        refetch()
    }, [currentpage])

    return (
        <div className="pagenation-btns flex justify-between my-5 items-center gap-2">
            <button className="rounded-[8px] text-[14px] border border-whiteBtnBorderColor py-[8px] px-[14px] flex items-center" onClick={() => {
                !(currentpage === 1) && handleChangePage(currentpage - 1)
            }}><span><FaArrowLeft /></span>{windowWidth > 768 && <span className="ml-2">Previous</span>}</button>
            <div className="pages-nums flex items-center flex-wrap justify-center">
                {pageNums.map((pageNum) => {
                    return (
                        <button
                            key={pageNum}
                            className={`rounded-[8px] text-[14px] px-3 py-2  ${currentpage === pageNum && "bg-inputBackground dark:text-black"}`}
                            onClick={() => {
                                handleChangePage(pageNum);
                            }}

                        >{pageNum}</button>
                    )
                })}
            </div>
            <button className="rounded-[8px] text-[14px] border border-whiteBtnBorderColor py-[8px] px-[14px] flex items-center" onClick={() => {
                !(currentpage === numOfPages) && handleChangePage(currentpage + 1);
            }}>{windowWidth > 768 && <span className="mr-2">Next</span>}<span>{<FaArrowRight />}</span></button>
        </div>
    );
}

export default Pagination;