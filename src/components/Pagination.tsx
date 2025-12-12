import React from "react";

interface PagerProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (value: number) => void;
}

const Pagination: React.FC<PagerProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    
    const allPages = [...Array(totalPages)].map((_, index) => index + 1);

    const goPrev = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const goNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex justify-between items-center mt-8 pt-5 border-t border-[#EAECF0]">
            
            <button
                onClick={goPrev}
                disabled={currentPage === 1}
                className="flex items-center gap-1"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
                Previous
            </button>

            
            <div className="flex space-x-2">
                {allPages.map((num) => (
                    <button
                        key={num}
                        onClick={() => onPageChange(num)}
                        className={`px-4 py-2 rounded-[8px] transition ${
                            num === currentPage
                                ? "bg-[#F9F5FF] text-[#7F56D9] dark:text-[#112211]"
                                : "text-[#667085] dark:text-[#EFEFEF] border-gray-300 dark:border-gray-600 hover:bg-[#7F56D9] hover:text-white"
                        }`}
                    >
                        {num}
                    </button>
                ))}
            </div>

            
            <button
                onClick={goNext}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1"
            >
                Next
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>

        </div>
    );
};

export default Pagination;
