import React from 'react';
import FoodCard from '../../../components/foodCard/FoodCard';
import { useState } from "react";
const OrderTab = ({ items }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            {/* Cards */}
            <div className='grid md:grid-cols-3 gap-10'>
                {
                    currentItems.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                }
            </div>

            {/* Pagination Buttons */}
            {
                totalPages > 1 && (
                    <div className="flex justify-center mt-8 space-x-2 items-center">
                        {/* Prev Button */}
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-3 py-1 border rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition"
                        >
                            Prev
                        </button>

                        {/* Page Numbers */}
                        {
                            [...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handlePageChange(index + 1)}
                                    className={`px-3 py-1 border rounded-full transition cursor-pointer ${currentPage === index + 1
                                        ? "bg-blue-500 text-white border-blue-500"
                                        : "bg-gray-200 hover:bg-gray-300"
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            ))
                        }

                        {/* Next Button */}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="px-3 py-1 border rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition"
                        >
                            Next
                        </button>
                    </div>
                )
            }


        </div>

    );
};

export default OrderTab;