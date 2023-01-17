import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from 'react';

const SearchBar = () => {
    let [ searchParams, setSearchParams ] = useSearchParams();
    let filter = searchParams.get("filter")
    let category = searchParams.get("categoryId")
    if (category === null) {
        category = "0";
    }
    if (filter === undefined) {
        filter = "newest";
    }

    const [searchTarget, setSearch] = useState(String);

    const handleInputChange = (e: any) => {
        const target = e.target;
        setSearch(target.value)
    };

    return (
        <div className="relative mt-[25px] mb-6 md:mt-[50px] rounded-[10px]">
            <input
                type="text"
                className="
                w-full text-xs placeholder:text-gray-700 font-regular p-2 rounded-r-[10px] border-solid border-2 border-white border-b-[#007BC7] focus:outline-none
                md:text-xl md:p-4"
                placeholder="Cari nama campaign..."
                aria-label="Search"
                onChange={handleInputChange}
            />
            <Link to={`/explore?categoryId=${category}&order=${filter}&search=${searchTarget}`}>
                <button
                    type="submit"
                    className="
                absolute top-1/2 -translate-y-1/2 right-0 p-2 rounded-r-[10px] border-solid border-4 border-[#007BC7] text-white bg-[#007BC7]
                md:p-4"
                >
                    <svg
                        aria-hidden="true"
                        className="
                    w-3 h-3
                    md:w-6 md:h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                    </svg>
                    <span className="sr-only">Search</span>
                </button>
            </Link>
        </div>
    );
};

export default SearchBar;
