import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import HeroSection from './Components/HeroSection'
import CtaBanner from '../../Pages/Careers/Components/CtaBanner'
import AllNewShow from './Components/AllNewShow'

function Index() {
  const { pageNumber } = useParams();
  const navigate = useNavigate();
  
  // Convert pageNumber to integer, default to 1 if not provided
  const currentPage = pageNumber ? parseInt(pageNumber) : 1;

  // Function to handle page changes and update URL
  const handlePageChange = (newPage) => {
    navigate(`/news/${newPage}`);
    // Scroll to top when page changes
    window.scrollTo(0, 0);
  };
  return (
    <>
    <HeroSection/>
    {/* <AllNewShow/> */}
          <AllNewShow 
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    <CtaBanner/>
    </>
  )
}

export default Index

