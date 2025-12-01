// import { Suspense, lazy } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Layout from "../Layout";
// import ScrollToTop from "../ScrollTop";
// import LoadingHandler from "../../Components/Common/LoadingHandler";
// const Home = lazy(() => import("../../Pages/Home"));
// const Contact = lazy(() => import("../../Pages/Contact"));
// const PageNotFound = lazy(() => import("../../Pages/PageNotFound"));
// const PrivacyPolicy = lazy(() => import("../../Pages/PrivacyPolicy/Index"));
// const Careers = lazy(() => import("../../Pages/Careers/Index"));
// const AboutUs = lazy(() => import("../../Pages/AboutUs/Index"));
// const Blog = lazy(() => import("../../Pages/Blogs/Index"));
// const ShowBlog = lazy(() => import("../../Pages/Blogs/ShowBlog"));
// const New = lazy(() => import("../../Pages/News/Index"));
// const Workshops = lazy(() => import("../../Pages/EventWorkShop/Index"));
// const UaeInternationalDesk = lazy(() =>
//   import("../../Pages/UaeInternationalDesk/Index")
// );
// const UsInternationalDesk = lazy(() =>
//   import("../../Pages/UaeInternationalDesk/UsInternationalDesk")
// );
// const TermsOfUse = lazy(() => import("../../Pages/TermsOfUse"));
// const AllJobList = lazy(() => import("../../Pages/Careers/AllJobList/Index"));
// const JobDetailsPage = lazy(() =>
//   import("../../Pages/Careers/AllJobList/Components/JobDetails")
// );
// import SingleNewsPage from "../../Pages/News/SingleNewsPage";
// const Solution = lazy(() => import("../../Pages/Solutions/Index"));
// const GstComplianceAdvisory = lazy(() =>
//   import("../../Pages/GstComplianceAdvisory/Main")
// );

// const CfoService = lazy(() => import("../../Pages/CfoService/Main"));
// const IncomeTaxService = lazy(() =>
//   import("../../Pages/IncomeTaxService/Main")
// );

// const Index = () => {
//   return (
//     <>
//       <ScrollToTop />

//       <Suspense
//         fallback={
//           <LoadingHandler
//             state="loading"
//             type="spinner"
//             variant="default"
//             size="lg"
//             fullScreen={true}
//             centered={true}
//             message="Loading ..."
//           />
//         }
//       >
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="/contact-us" element={<Contact />} />
//             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//             <Route path="/career" element={<Careers />} />
//             <Route path="/about-us" element={<AboutUs />} />
//             {/* <Route path="/blog" element={<Blog />} /> */}
//             <Route path="/blog/:pageNumber?" element={<Blog />} />

//             <Route path="/showblog/:id" element={<ShowBlog />} />
//             {/* <Route path="/news" element={<New />} /> */}
//             <Route path="/news/:pageNumber?" element={<New />} />
//             <Route path="/news/:id" element={<SingleNewsPage />} />
//             <Route path="/workshops" element={<Workshops />} />
//             <Route
//               path="/uae-desk"
//               element={<UaeInternationalDesk />}
//             />
//             <Route
//               path="/usa-desk"
//               element={<UsInternationalDesk />}
//             />
//             <Route path="/gst-services" element={<GstComplianceAdvisory />} />
//             <Route path="/cfo-services" element={<CfoService />} />
//             <Route path="/income-tax-services" element={<IncomeTaxService />} />
//             <Route path="/terms-of-use" element={<TermsOfUse />} />
//             <Route path="/alljoblist" element={<AllJobList />} />
//             <Route path="/job/:jobId" element={<JobDetailsPage />} />
//           </Route>
//           <Route path="*" element={<PageNotFound />} />
//         </Routes>
//       </Suspense>
//     </>
//   );
// };

// export default Index;

import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../Layout";
import ScrollToTop from "../ScrollTop";
import LoadingHandler from "../../Components/Common/LoadingHandler";
const Home = lazy(() => import("../../Pages/Home"));
const Contact = lazy(() => import("../../Pages/Contact"));
const PageNotFound = lazy(() => import("../../Pages/PageNotFound"));
const PrivacyPolicy = lazy(() => import("../../Pages/PrivacyPolicy/Index"));
const Careers = lazy(() => import("../../Pages/Careers/Index"));
const AboutUs = lazy(() => import("../../Pages/AboutUs/Index"));
const Blog = lazy(() => import("../../Pages/Blogs/Index"));
const ShowBlog = lazy(() => import("../../Pages/Blogs/ShowBlog"));
const New = lazy(() => import("../../Pages/News/Index"));
const Workshops = lazy(() => import("../../Pages/EventWorkShop/Index"));
const UaeInternationalDesk = lazy(() =>
  import("../../Pages/UaeInternationalDesk/Index")
);
const UsInternationalDesk = lazy(() =>
  import("../../Pages/UaeInternationalDesk/UsInternationalDesk")
);
const TermsOfUse = lazy(() => import("../../Pages/TermsOfUse"));
const AllJobList = lazy(() => import("../../Pages/Careers/AllJobList/Index"));
const JobDetailsPage = lazy(() =>
  import("../../Pages/Careers/AllJobList/Components/JobDetails")
);
import SingleNewsPage from "../../Pages/News/SingleNewsPage";
const Solution = lazy(() => import("../../Pages/Solutions/Index"));
const GstComplianceAdvisory = lazy(() =>
  import("../../Pages/GstComplianceAdvisory/Main")
);

const CfoService = lazy(() => import("../../Pages/CfoService/Main"));
const IncomeTaxService = lazy(() =>
  import("../../Pages/IncomeTaxService/Main")
);

const EventDetailsPage = lazy(() =>
  import("../../Pages/EventWorkShop/Components/EventDetails")
);
const StartupConsulting = lazy(() =>
  import("../../Pages/StartupConsulting/Main")
);

const Index = () => {
  return (
    <>
      <ScrollToTop />

      <Suspense
        fallback={
          <LoadingHandler
            state="loading"
            type="spinner"
            variant="default"
            size="lg"
            fullScreen={true}
            centered={true}
            message="Loading ..."
          />
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/career" element={<Careers />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/blog/:pageNumber?" element={<Blog />} />

            <Route path="/showblog/:id" element={<ShowBlog />} />
            <Route path="/news/:pageNumber?" element={<New />} />
            <Route path="/news/:id" element={<SingleNewsPage />} />
            <Route path="/events" element={<Workshops />} />
            <Route path="/events/:eventId" element={<EventDetailsPage />} />

            <Route path="/tax/uae-desk" element={<UaeInternationalDesk />} />
            <Route path="/tax/usa-desk" element={<UsInternationalDesk />} />

            <Route
              path="/services/gst-services"
              element={<GstComplianceAdvisory />}
            />
            <Route path="/services/cfo-services" element={<CfoService />} />
            <Route
              path="/services/income-tax-services"
              element={<IncomeTaxService />}
            />
            <Route
              path="/services/startup-consulting"
              element={<StartupConsulting />}
            />

            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/career/all-job-list" element={<AllJobList />} />
            <Route path="/career/job/:jobId" element={<JobDetailsPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Index;
