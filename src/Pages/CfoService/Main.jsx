import React from "react";
import HeroSection from "./Components/HeroSection";
import Challenge from "./Components/Challenge";
import ExperienceStats from "./Components/ExperienceStats";
import CfoServices from "./Components/CfoService";
import CfoMethodology from "./Components/CfoMethodology";
import ThreeStepApproach from "./Components/ThreeStepApproach";
import Verticals from "./Components/Verticals";
import CFODashboardSection from "./Components/CFODashboardSection";
import CtaBanner from "../Home/Component/CtaBanner";
import FAQSection from "../../Components/Common/FaqSection";
import AnalyticsSection from "./Components/AnalyticsSection";
import Resource from "../../Pages/Home/Component/Resources";

import CfoChallengeIcon1 from "../../assets/cfochallenge1.png";
import CfoChallengeIcon2 from "../../assets/cfochallenge2.png";
import CfoChallengeIcon3 from "../../assets/cfochallenge3.png";
import CfoChallengeIcon4 from "../../assets/cfochallenge4.png";

import V1 from "../../assets/verticalserver1.png";
import V2 from "../../assets/verticalserver2.png";
import V3 from "../../assets/verticalserver3.png";
import V4 from "../../assets/verticalserver4.png";
import V5 from "../../assets/verticalserver5.png";
import V6 from "../../assets/verticalserver6.png";

import DiagnoseImg from "../../assets/gstserviceleftbgimage.jpg";
import OptimizeImg from "../../assets/gstserviceleftbgimage.jpg";
import SustainImg from "../../assets/gstserviceleftbgimage.jpg";

import { FaBuilding, FaCheckCircle, FaClipboardCheck } from "react-icons/fa";
import serviceImg1 from "../../assets/gstserviceleftbgimage.jpg";
import InfiniteLogoCarousel from "../../Pages/Home/Component/TrustedBrands";

function Main() {
  const verticalsData = {
    heading: "Verticals We Serve",
    subheading:
      "We combine deep tax expertise with cutting-edge technology to deliver a seamless GST experience that transforms compliance into strategic advantage.",
    items: [
      { icon: V1, label: "D2C Brands" },
      { icon: V2, label: "MSME & Startups " },
      { icon: V3, label: "Tax Professionals" },
      { icon: V4, label: "Manufacturing & Trading Companies" },
      { icon: V5, label: "Service-Based Businesses" },
      { icon: V6, label: "Funded & Fast-Growing Companies" },
    ],
  };

  const stepsArray = [
    {
      title: "Step 1: Choose Report Type & GSTIN",
      description:
        "Pick the report you want to generate and select the GSTIN you’re working with. If you need to add a new GSTIN, do it in one click.",
      image: DiagnoseImg,
    },
    {
      title: "Step 2: Enter GSTIN Password",
      description:
        "Add your GST portal password so the dashboard can securely fetch your data and prepare the report.",
      image: OptimizeImg,
    },
    {
      title: "Step 3: Select Period & Generate Report",
      description:
        "Choose your custom date range and hit Submit. Your report will be ready in seconds.",
      image: SustainImg,
    },
  ];

  const cardsBottom = [
    {
      title: "Real-Time ITC Mismatch Detection",
      icon: CfoChallengeIcon1,
      points: [
        "Spots 2B vs 3B gaps instantly",
        "Highlights entries causing ITC loss",
        "Helps prevent future GST notices",
      ],
    },
    {
      title: "Missing Invoice & Vendor Compliance Tracker",
      icon: CfoChallengeIcon2,
      points: [
        "Shows invoices your team/vendor missed",
        "Tracks vendor filing status",
        "Protects your ITC from non-compliant vendors",
      ],
    },
    {
      title: "Platform/Source-Wise Tax Summary",
      icon: CfoChallengeIcon3,
      points: [
        "Auto-captures data from ERP/marketplaces",
        "Combines GST + TCS in one screen",
        "Removes manual downloading errors",
      ],
    },
    {
      title: "High-Risk Vendor Alerts",
      icon: CfoChallengeIcon4,
      points: [
        "Identifies vendors delaying your ITC",
        "Tracks inconsistent filers",
        "Reduces compliance risk on your end",
      ],
    },
  ];

  const featuresList = [
    {
      icon: <FaBuilding className="text-3xl text-buttonBackground" />,
      title: "Expert-Led",
      description:
        "Your finance is handled by experienced CFOs, controllers, and analysts who understand complexities across industries and manage them with precision.",
    },
    {
      icon: <FaCheckCircle className="text-3xl text-buttonBackground" />,
      title: "Tech-Powered",
      description:
        "Our automated dashboards track cash flow, profitability, payables, receivables, and working capital in real time — so you always know exactly where your business stands.",
    },
    {
      icon: <FaClipboardCheck className="text-3xl text-buttonBackground" />,
      title: "Results-Focused",
      description:
        "We measure success through real outcomes: faster closings, 100% reporting continuity, accurate forecasts, lower leakages, and stronger decision-making across the business.",
    },
  ];

  const currentService = {
    heading: "Our CFO Service",

    service: {
      title: "GST Compliance & Filing",
      description:
        "Timely and accurate filing of all GST returns with pre-filing review and validation.",
      points: [
        "Monthly/Quarterly Returns",
        "Annual Returns & Reconciliation",
        "E-way Bills & E-invoicing",
      ],
      image: serviceImg1,
    },
  };

  return (
    <>
      <HeroSection />
      <InfiniteLogoCarousel />
      <Challenge
        heading="Common Businesses Challenges We Solve"
        subheading="Businesses struggle with critical finance challenges every day. We help teams overcome these with clarity and smarter systems."
        cards={cardsBottom}
      />

      <ExperienceStats />
      <CfoServices {...currentService} />

      <CfoMethodology
        heading="Why Businesses Trust Us With Their Finance"
        subheading="We bring seasoned CFO expertise and intelligent automation together."
        features={featuresList}
      />

      <ThreeStepApproach
        heading="Our 3-Step Approach for Clarity"
        subheading="Unlike typical GST vendors who just file returns, we give CFOs real control.Our dashboard turns GST data into insights that cut leakages, improve cash flow, and strengthen financial planning."
        steps={stepsArray}
        defaultImage={DiagnoseImg}
        bgColor="bg-backgroundPrimary"
      />
      <Verticals
        heading={verticalsData.heading}
        subheading={verticalsData.subheading}
        items={verticalsData.items}
      />
      <CFODashboardSection />
      <AnalyticsSection />
      <Resource />
      <FAQSection />
      <CtaBanner />
    </>
  );
}

export default Main;
