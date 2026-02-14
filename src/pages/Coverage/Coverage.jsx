import React, { useState } from 'react';
import BangladeshMap from './BangladeshMap';
import { useLoaderData } from 'react-router';

const Coverage = () => {
    const serviceData = useLoaderData();

    const [searchText, setSearchText] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <section className="mb-10 px-4 sm:px-6 lg:px-0">
            <div className="text-center mb-8 sm:mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
                    We are available in 64 districts
                </h2>

                {/* Search Box */}
                <div className="mt-5 sm:mt-6 max-w-md w-full mx-auto relative">
                    <input
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Search your district..."
                        className="w-full h-12 sm:h-14 rounded-full border border-gray-300 px-5 pr-28 text-sm sm:text-base outline-none focus:ring-2 focus:ring-lime-400"
                    />

                    <button
                        onClick={() => setSearchQuery(searchText)}
                        className="absolute right-1 top-1 bottom-1 px-4 sm:px-6 rounded-full bg-lime-400 text-sm sm:text-base font-medium hover:bg-lime-500 transition"
                    >
                        Search
                    </button>
                </div>
            </div>

            <p className="text-center text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base">
                We deliver almost all over Bangladesh
            </p>

            <BangladeshMap serviceData={serviceData} searchQuery={searchQuery} />
        </section>
    );
};

export default Coverage;
