import React from "react";
import HeroSection from "./Components/HeroSection";
import InfiniteLogoCarousel from "../Home/Component/TrustedBrands";
import ChallengeSection from "../../Pages/CfoService/Components/Challenge";
import CfoChallengeIcon1 from "../../assets/cfochallenge1.png";
import CfoChallengeIcon2 from "../../assets/cfochallenge2.png";
import CfoChallengeIcon3 from "../../assets/cfochallenge3.png";
import CfoChallengeIcon4 from "../../assets/cfochallenge4.png";
import ExperienceStats from "./Components/ExperienceStats";
import serviceImg1 from "../../assets/gstserviceleftbgimage.jpg";
import StartupConsulting from "../../Pages/CfoService/Components/CfoService";
import { FaBuilding, FaCheckCircle, FaClipboardCheck } from "react-icons/fa";
import IncomTaxMethodology from "../../Pages/CfoService/Components/CfoMethodology";

import DiagnoseImg from "../../assets/gstserviceleftbgimage.jpg";
import OptimizeImg from "../../assets/gstserviceleftbgimage.jpg";
import SustainImg from "../../assets/gstserviceleftbgimage.jpg";
import ThreeStepApproach from "../../Pages/CfoService/Components/ThreeStepApproach";

import Verticals from "../CfoService/Components/Verticals";
import V1 from "../../assets/verticalserver1.png";
import V2 from "../../assets/verticalserver2.png";
import V3 from "../../assets/verticalserver3.png";
import V4 from "../../assets/verticalserver4.png";
import V5 from "../../assets/verticalserver5.png";
import V6 from "../../assets/verticalserver6.png";
import StartupResourse from "../../Pages/Home/Component/Resources";
import FAQSection from "../../Components/Common/FaqSection";
import CtBannerIncomeTax from "../../Pages/Home/Component/CtaBanner";

import IncomeTaxBackImage1 from "../../assets/incometaxs1.png";
import StartupStatus from "../IncomeTaxService/Components/IncomeTaxStatus";
function Main() {
  const cardsBottom = [
    {
      title: " Company Structuring & Compliance Gaps",
      icon: CfoChallengeIcon1,
      points: [
        "Wrong entity structure increasing tax and legal burden",
        "Missed ROC, GST, and income tax compliances",
        "Poor documentation during due diligence or audits",
      ],
    },
    {
      title: "Fundraising-Readiness Issues",
      icon: CfoChallengeIcon2,
      points: [
        "No financial model or unreliable projections",
        "Cap table mistakes and unclear equity distribution",
        "Lack of investor-ready documents and compliance checks",
      ],
    },
    {
      title: "Tax Inefficiencies & Missed Benefits",
      icon: CfoChallengeIcon3,
      points: [
        "Not using startup tax exemptions (80IAC, DPIIT benefits, etc.)",
        "Incorrect deduction planning",
        "Mismatch between books and tax disclosures",
      ],
    },
    {
      title: "Cash Flow & Expense Management Problems",
      icon: CfoChallengeIcon4,
      points: [
        "Unmonitored burn rate leading to runway risk",
        "Expense leakages due to lack of systems",
        "Mismatch with Form 26AS and books",
      ],
    },
  ];

  const currentService = {
    heading: "Startup Consulting Services",

    service: {
      title: "Startup Registration & Compliance",
      description:
        "Structured setup, compliant documentation, and smoother investor-ready operations.",
      points: [
        "Register your company with the right structure (Pvt Ltd, LLP, OPC)",
        "Prepare and manage all legal, ROC and compliance documentation",
        "Set up tax, finance and regulatory systems from day one",
      ],
      image: serviceImg1,
    },
  };

  const featuresList = [
    {
      icon: <FaBuilding className="text-3xl text-buttonBackground" />,
      title: "Expert-Led",
      description:
        "Your tax is handled by seasoned Chartered Accountants and tax professionals who understand assessments, scrutiny, appeals, deductions, and industry-specific tax positions.",
    },
    {
      icon: <FaCheckCircle className="text-3xl text-buttonBackground" />,
      title: "Tech-Powered",
      description:
        "Our automated systems track TDS, advance tax, books–to–return reconciliation, Form 26AS matching, tax projections, and compliance deadlines — so nothing slips through the cracks.",
    },
    {
      icon: <FaClipboardCheck className="text-3xl text-buttonBackground" />,
      title: "Results-Focused",
      description:
        "We measure success through outcomes: reduced tax leakages, timely filings, accurate tax positions, smooth assessments, and zero last-minute compliance panic.",
    },
  ];

  const stepsArray = [
    {
      title: "Step 1: Assess & Structure",
      description:
        "Evaluate current business model, operations, compliance gaps, and financial setup. Identify risks in incorporation, shareholding, ROC filings, and documentation",
      image: DiagnoseImg,
    },
    {
      title: "Step 2: Optimise & Prepare",
      description:
        "Set up compliance workflows, financial systems, and operational processes Create investor-ready documentation, pitch essentials, and data rooms.",
      image: OptimizeImg,
    },
    {
      title: "Step 3: File & Defend",
      description:
        "We file accurate returns and handle any scrutiny, Notices, or assessments on your behalf.",
      image: SustainImg,
    },
  ];

  const verticalsData = {
    heading: "Verticals We Serve",
    subheading:
      "We help businesses stay compliant, reduce tax exposure, and handle assessments with clarity and confidence -no matter their size or structure.",
    items: [
      { icon: V1, label: "D2C Brands" },
      { icon: V2, label: "Entertainment" },
      { icon: V3, label: "Tax Professionals" },
      { icon: V4, label: "Manufacturing & Trading Companies" },
      { icon: V5, label: "Service-Based Businesses" },
      { icon: V6, label: "Funded & Fast-Growing Companies" },
    ],
  };

  const Card1 = [
    {
      title: "Business Model & Strategy",
      imageSrc: IncomeTaxBackImage1,
      alt: "Business Model & Strategy",
    },
    {
      title: "Startup Compliance & Documenation",
      imageSrc: IncomeTaxBackImage1,
      alt: "Startup Compliance & Documenation",
    },
    {
      title: "Fundfraussing & Investor Reading",
      imageSrc: IncomeTaxBackImage1,
      alt: "Fundfraussing & Investor Reading",
    },
    {
      title: "Process Setup & Automation",
      imageSrc: IncomeTaxBackImage1,
      alt: "Process Setup & Automation",
    },
  ];
  const Card2 = [
    {
      title: "Startup Strategy",
      imageSrc: IncomeTaxBackImage1,
      alt: "Startup Strategy",
    },
    {
      title: "Funding & Pitch Support",
      imageSrc: IncomeTaxBackImage1,
      alt: "Funding & Pitch Support",
    },
    {
      title: "Compliance Alerts",
      imageSrc: IncomeTaxBackImage1,
      alt: "Compliance Alerts",
    },
    {
      title: "Automation for Founders",
      imageSrc: IncomeTaxBackImage1,
      alt: "Automation for Founders",
    },
  ];

  return (
    <>
      <HeroSection />
      <InfiniteLogoCarousel />
      <ChallengeSection
        heading="Common Startup Challenges We Solve"
        subheading="Building and scaling a startup is tough. We help founders avoid costly mistakes and operate with clarity, compliance, and strong financial discipline."
        cards={cardsBottom}
      />
      <ExperienceStats />
      <StartupConsulting {...currentService} />
      <IncomTaxMethodology
        heading="Why Businesses Trust Us With Their Finance"
        subheading="We simplify complex tax matters, bring clarity to compliance, and ensure your business never faces unnecessary tax risks or penalties."
        features={featuresList}
      />

      <ThreeStepApproach
        heading="Our 3–Step Approach for Startup Success"
        subheading="Most consultants only handle registrations or basic compliance. We help startups build a strong foundation, become investor-ready, and scale smoothly—with complete clarity on operations, compliance, and financial structure."
        steps={stepsArray}
        defaultImage={DiagnoseImg}
        bgColor="bg-backgroundPrimary"
      />

      <Verticals
        heading={verticalsData.heading}
        subheading={verticalsData.subheading}
        items={verticalsData.items}
      />
      <StartupStatus
        topSectionData={{
          title: " Know Your startup Real Health in",
          highlightText: "60 Seconds",
          points: [
            "Quick Scan, Real Status",
            "Instantly reveal your startup's true standing across compliance, funding and business readiness.",
          ],
          image: IncomeTaxBackImage1,
          buttonText: "Check Your Startup Health Now",
        }}
        section1Data={{
          title: "Mastering Startup Growth Series",
          description:
            "Empowering Founders and teams with clear system, structured processes, and guidance to help grow, stay compliant, and scale confidently..",
          buttonText: "Start Your Startup Journey Today",
          cards: Card1,
        }}
        section2Data={{
          title: "Empowering Founders : Your Path to Path Growth & Compliance",
          description: "Expert-Led Consulting for Visionary Startup",
          buttonText: "Get Your Startup Growth Report",
          cards: Card2,
        }}
      />
      <StartupResourse />
      <FAQSection />
      <CtBannerIncomeTax />
    </>
  );
}

export default Main;
