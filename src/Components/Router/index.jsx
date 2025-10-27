import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../Layout";
import Loader from "../Loader";
import ScrollToTop from "../ScrollTop";

const Home = lazy(() => import("../../Pages/Home"));
const Contact = lazy(() => import("../../Pages/Contact"));
const PageNotFound = lazy(() => import("../../Pages/PageNotFound"));
const PrivacyPolicy = lazy(() => import('../../Pages/PrivacyPolicy/Index'));
const Careers = lazy(() => import('../../Pages/Careers/Index'));
const AboutUs = lazy(() => import('../../Pages/AboutUs/Index'));
const Blog = lazy(() => import('../../Pages/Blogs/index'));
const ShowBlog = lazy(() => import('../../Pages/Blogs/ShowBlog'));
const New = lazy(() => import('../../Pages/News/Index'))
const Workshops = lazy(() => import("../../Pages/EventWorkShop/Index"))
const UaeInternationalDesk = lazy(() => import('../../Pages/UaeInternationalDesk/Index'))
const UsInternationalDesk = lazy(() => import('../../Pages/UaeInternationalDesk/UsInternationalDesk'))

const Index = () => {
  return (
    <>
        <ScrollToTop />

        <Suspense
            fallback={
                <div className="flex items-center justify-center h-screen bg-backgroundPrimary">
                <Loader />
                </div>
            }
        >
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
                <Route path='/career' element={<Careers/>} />
                <Route path="/about" element={<AboutUs/>} />
                <Route path="/blog" element={<Blog />} />
                <Route path='/showblog' element={<ShowBlog />} />
                <Route path="/news" element={<New />} />
                <Route path="/workshops" element={<Workshops />} />
                <Route path="/uaeinternationaldesk" element={<UaeInternationalDesk/>} />
                <Route path="/usinternationaldesk" element={<UsInternationalDesk/>} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Suspense>
    </>
   
   
  );
};

export default Index;

