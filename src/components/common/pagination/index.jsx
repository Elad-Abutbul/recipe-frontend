import React from 'react';

export const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const pageNumbers = Array.from({ length: totalPages }, (page, index) => index + 1);
  return (
    <div className="flex justify-center mt-4">
      {currentPage !== 1 && (
        <button
          onClick={() => setCurrentPage(prev=>prev - 1)}
          className="mx-2 px-3 py-1 border rounded bg-gray-200"
        >
          Prev
        </button>
      )}
      {pageNumbers.map((page, index) => (
        <span
          key={index}
          onClick={() => setCurrentPage(page)}
          className={`cursor-pointer mx-2 px-3 py-1 border rounded ${
            currentPage === page ? 'bg-blue-500 text-white' : 'border-gray-300'
          }`}
        >
          {page}
        </span>
      ))}
      {currentPage !== totalPages && (
        <button
          onClick={() => setCurrentPage(prev=>prev + 1)}
          className="mx-2 px-3 py-1 border rounded bg-gray-200"
        >
          Next
        </button>
      )}
    </div>
  );
};
