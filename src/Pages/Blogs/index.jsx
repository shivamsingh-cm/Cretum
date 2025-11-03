import React from 'react'
import HeroSection from './Components/HeroSection'
import FilterSearch from './Components/FilterSearch'
import FtBanner from './Components/FtBanner'
import { useParams, useNavigate } from 'react-router-dom'
function index() {
  const { pageNumber } = useParams();
  const navigate = useNavigate();
  
  // Convert pageNumber to integer, default to 1 if not provided
  const currentPage = pageNumber ? parseInt(pageNumber) : 1;

  // Function to handle page changes and update URL
  const handlePageChange = (newPage) => {
    navigate(`/blog/${newPage}`);
    // Scroll to top when page changes
    window.scrollTo(0, 0);
  };

  return (
    <>
    <HeroSection/>
    {/* <FilterSearch/> */}
    <FilterSearch 
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

    <FtBanner/>
    </>
  )
}

export default index