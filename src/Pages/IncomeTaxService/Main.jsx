import React from "react";
import HeroSection from "./Components/HeroSection";
import ChallengeSection from "../CfoService/Components/Challenge";
import CfoChallengeIcon1 from "../../assets/cfochallenge1.png";
import CfoChallengeIcon2 from "../../assets/cfochallenge2.png";
import CfoChallengeIcon3 from "../../assets/cfochallenge3.png";
import CfoChallengeIcon4 from "../../assets/cfochallenge4.png";
import serviceImg1 from "../../assets/gstserviceleftbgimage.jpg";
import IncomTaxService from "../../Pages/CfoService/Components/CfoService";
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
import IncomeTaxStatus from "./Components/IncomeTaxStatus";

import CtaBanner from "../Home/Component/CtaBanner";
import FAQSection from "../../Components/Common/FaqSection";
import ExperienceStats from "./Components/ExperienceStats";
import InfiniteLogoCarousel from "../Home/Component/TrustedBrands";

import IncomeTaxBackImage1 from "../../assets/incometaxs1.png";
import IncomeTaxResources from "../../Pages/Home/Component/Resources";
function Main() {
  const cardsBottom = [
    {
      title: " Incorrect or Delayed ITR Filing",
      icon: CfoChallengeIcon1,
      points: [
        "Missed deadlines leading to penalties",
        "Wrong classifications increasing tax liability",
        "Incomplete disclosures triggering scrutiny",
      ],
    },
    {
      title: "Frequent Income Tax Notices",
      icon: CfoChallengeIcon2,
      points: [
        "AIS/26AS mismatches",
        "TDS reconciliation issues",
        "Automated system flags due to reporting gaps",
      ],
    },
    {
      title: "Poor Documentation & Record Keeping",
      icon: CfoChallengeIcon3,
      points: [
        "Missing invoices and proofs",
        "Incorrect or outdated records",
        "Weak audit trail during assessments",
      ],
    },
    {
      title: "TDS Mismatches & Errors",
      icon: CfoChallengeIcon4,
      points: [
        "Wrong deduction rates applied",
        "Late payments causing interest",
        "Mismatch with Form 26AS and books",
      ],
    },
  ];

  const currentService = {
    heading: "Our Income Tax Service",

    service: {
      title: "Tax Audits",
      description:
        "Accurate reporting, compliant documentation, and risk-free audit management.",
      points: [
        "Review books and financial statements for audit accuracy",
        "Prepare mandatory audit reports and documentation",
        "Identify tax risks and suggest planning strategies",
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
      title: "Step 1: Review & Reconcile",
      description:
        "We scan AIS, 26AS, Form 16/16A, TDS data, books, and disclosures to find mismatches and risks.",
      image: DiagnoseImg,
    },
    {
      title: "Step 2: Optimise & Prepare",
      description:
        "We structure your income, deductions, and disclosures to minimise tax liability while staying compliant.",
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

  return (
    <>
      <HeroSection />
      <InfiniteLogoCarousel />
      <ChallengeSection
        heading="Common Businesses Challenges We Solve"
        subheading="Businesses struggle with critical finance challenges every day. We help teams overcome these with clarity and smarter systems."
        cards={cardsBottom}
      />
      <ExperienceStats />
      <IncomTaxService {...currentService} />
      <IncomTaxMethodology
        heading="Why Businesses Trust Us With Their Finance"
        subheading="We simplify complex tax matters, bring clarity to compliance, and ensure your business never faces unnecessary tax risks or penalties."
        features={featuresList}
      />

      <ThreeStepApproach
        heading="Our 3-Step Approach for Tax Clarity"
        subheading="Most tax vendors only file returns. We give businesses complete visibility into their tax position, potential risks, and upcoming liabilities — so there are no surprises during assessments or scrutiny."
        steps={stepsArray}
        defaultImage={DiagnoseImg}
        bgColor="bg-backgroundPrimary"
      />

      <Verticals
        heading={verticalsData.heading}
        subheading={verticalsData.subheading}
        items={verticalsData.items}
      />
      {/* <IncomeTaxStatus /> */}
      <IncomeTaxStatus
        topSectionData={{
          title: "Know Your Real Income Tax Status in",
          highlightText: "60 Seconds",
          points: [
            "Pending filings, refund delays, mismatch risks, and savings insights.",
            "Instant clarity on your tax standing.",
          ],
          image: IncomeTaxBackImage1,
          buttonText: "Check Free Income Tax Status Now",
        }}
        section1Data={{
          title: "Mastering Income Tax Series",
          description:
            "Empowering individuals & businesses with comprehensive guides.",
          buttonText: "Start Your Tax Journey",
          
          cards: [
            {
              title: "Unified Financial View",
              imageSrc: IncomeTaxBackImage1,
              alt: "Unified Financial View",
            },
            {
              title: "E-Filing & Compliance",
              imageSrc: IncomeTaxBackImage1,
              alt: "E-Filing & Compliance",
            },
            {
              title: "Deductions & Credits",
              imageSrc: IncomeTaxBackImage1,
              alt: "Deductions & Credits",
            },
            {
              title: "Audit Support & Assistance",
              imageSrc: IncomeTaxBackImage1,
              alt: "Audit Support & Assistance",
            },
          ],
        }}
        section2Data={{
          title: "Expert-Led Tax Management",
          description: "A structured way to handle filing, audits, planning.",
          buttonText: "Get Your Tax Report",
          cards: [
            {
              title: "Tax Insights",
              imageSrc: IncomeTaxBackImage1,
              alt: "Tax Insights",
            },
            {
              title: "E-Filing & Compliance",
              imageSrc: IncomeTaxBackImage1,
              alt: "E-Filing & Compliance",
            },
            {
              title: "Automated Alerts",
              imageSrc: IncomeTaxBackImage1,
              alt: "Automated Alerts",
            },
            {
              title: "Automated Compliance",
              imageSrc: IncomeTaxBackImage1,
              alt: "Automated Compliance",
            },
          ],
        }}
      />
      <IncomeTaxResources />
      <FAQSection />
      <CtaBanner />
    </>
  );
}

export default Main;
