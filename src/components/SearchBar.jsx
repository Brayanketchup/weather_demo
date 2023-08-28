import React, { useState } from "react";
// import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ onSearchChange }) {
    const [Search, setSearch] = useState("");

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // let cityInput = document.getElementById('cityInput');
        // cityInput.blur();
        setSearch("");
    };

    const handleOnBlur = () => {
        setSearch("");
    }

    return (
        <>
            <form
                action=""
                className="relative w-max mx-auto text-white"
                onSubmit={handleSubmit}
            >
                <input
                    value={Search}
                    onChange={(event) => handleOnChange(event.target.value)}
                    onBlur={handleOnBlur}
                    type="text"
                    name=""
                    placeholder="Enter a city name"
                    id="cityInput"
                    className="relative peer z-10 bg-transparent w-12 md:w-full lg:w-full focus:w-full h-12 rounded-full border cursor-pointer outline-none pl-12 focus:cursor-text mb-2"
                // relative peer z-10 bg-transparent w-12 h-12 rounded-full border cursor-pointer outline-none pl-12 focus:w-full focus:cursor-text transition-width
                />
            </form>
        </>
    );
}
