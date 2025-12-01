import { Link } from "react-router-dom";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  basePath = "/blog", // Default base path
  showPageNumbers = true,
  showPreviousNext = true,
  showFirstLast = true,
  className = "",
}) => {
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages are less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      // Calculate start and end of middle pages
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      // Adjust if we're at the beginning
      if (currentPage <= 3) {
        end = 4;
      }

      // Adjust if we're at the end
      if (currentPage >= totalPages - 2) {
        start = totalPages - 3;
      }

      // Add ellipsis after first page if needed
      if (start > 2) {
        pages.push("...");
      }

      // Add middle pages
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      // Add ellipsis before last page if needed
      if (end < totalPages - 1) {
        pages.push("...");
      }

      // Always show last page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  // Generate URL for a specific page
  const getPageUrl = (page) => {
    if (page === 1) {
      return basePath; // First page without number for cleaner URL
    }
    return `${basePath}/${page}`;
  };

  if (totalPages <= 1) return null;

  return (
    <div className={`flex justify-center ${className}`}>
      <nav
        className="flex items-center space-x-1 sm:space-x-2"
        aria-label="Pagination"
      >
        {/* First Page Button */}
        {showFirstLast && (
          <Link
            to={getPageUrl(1)}
            onClick={(e) => {
              if (currentPage === 1) {
                e.preventDefault();
              } else {
                handlePageChange(1);
              }
            }}
            className={`p-2 sm:px-3 sm:py-2 rounded-lg text-sm sm:text-base transition duration-200 no-underline ${
              currentPage === 1
                ? "text-gray-600 cursor-not-allowed bg-purple-900/10 pointer-events-none"
                : "text-purple-400 hover:bg-purple-800/50 hover:text-purple-300"
            }`}
            aria-label="Go to first page"
            aria-disabled={currentPage === 1}
          >
            First
          </Link>
        )}

        {/* Previous Button */}
        {showPreviousNext && (
          <Link
            to={getPageUrl(currentPage - 1)}
            onClick={(e) => {
              if (currentPage === 1) {
                e.preventDefault();
              } else {
                handlePageChange(currentPage - 1);
              }
            }}
            className={`p-2 sm:px-3 sm:py-2 rounded-lg text-sm sm:text-base transition duration-200 no-underline ${
              currentPage === 1
                ? "text-gray-600 cursor-not-allowed bg-purple-900/10 pointer-events-none"
                : "text-purple-400 hover:bg-purple-800/50 hover:text-purple-300"
            }`}
            aria-label="Go to previous page"
            aria-disabled={currentPage === 1}
          >
            &larr; Previous
          </Link>
        )}

        {/* Page Numbers */}
        {showPageNumbers &&
          getPageNumbers().map((page, index) =>
            page === "..." ? (
              <span
                key={index}
                className="px-3 py-2 text-gray-500 cursor-default bg-transparent text-sm sm:text-base"
                aria-hidden="true"
              >
                ...
              </span>
            ) : (
              <Link
                key={index}
                to={getPageUrl(page)}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-2 rounded-lg text-sm sm:text-base font-medium transition duration-200 no-underline ${
                  page === currentPage
                    ? "bg-purple-700 text-white shadow-lg pointer-events-none"
                    : "text-purple-400 hover:bg-purple-800/50 hover:text-purple-300"
                }`}
                aria-label={`Go to page ${page}`}
                aria-current={page === currentPage ? "page" : undefined}
              >
                {page}
              </Link>
            )
          )}

        {/* Next Button */}
        {showPreviousNext && (
          <Link
            to={getPageUrl(currentPage + 1)}
            onClick={(e) => {
              if (currentPage === totalPages) {
                e.preventDefault();
              } else {
                handlePageChange(currentPage + 1);
              }
            }}
            className={`p-2 sm:px-3 sm:py-2 rounded-lg text-sm sm:text-base transition duration-200 no-underline ${
              currentPage === totalPages
                ? "text-gray-600 cursor-not-allowed bg-purple-900/10 pointer-events-none"
                : "text-purple-400 hover:bg-purple-800/50 hover:text-purple-300"
            }`}
            aria-label="Go to next page"
            aria-disabled={currentPage === totalPages}
          >
            Next &rarr;
          </Link>
        )}

        {/* Last Page Button */}
        {showFirstLast && (
          <Link
            to={getPageUrl(totalPages)}
            onClick={(e) => {
              if (currentPage === totalPages) {
                e.preventDefault();
              } else {
                handlePageChange(totalPages);
              }
            }}
            className={`p-2 sm:px-3 sm:py-2 rounded-lg text-sm sm:text-base transition duration-200 no-underline ${
              currentPage === totalPages
                ? "text-gray-600 cursor-not-allowed bg-purple-900/10 pointer-events-none"
                : "text-purple-400 hover:bg-purple-800/50 hover:text-purple-300"
            }`}
            aria-label="Go to last page"
            aria-disabled={currentPage === totalPages}
          >
            Last
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Pagination;
