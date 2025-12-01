// import Verticals from "./Components/Verticals";
import GstHeroSection from "./Components/GstHeroSection";
import TrustedBrands from "../../Pages/Home/Component/TrustedBrands";
import Verticals from "../../Pages/CfoService/Components/Verticals";

import ThreeStepApproach from "../../Pages/CfoService/Components/ThreeStepApproach";
import DiagnoseImg from "../../assets/gstserviceleftbgimage.jpg";
import OptimizeImg from "../../assets/gstserviceleftbgimage.jpg";
import SustainImg from "../../assets/gstserviceleftbgimage.jpg";

import FAQ from "../../Components/Common/FaqSection";
import CtaBanner from "../../Pages/Home/Component/CtaBanner";
import Resources from "../../Pages/Home/Component/Resources";
import Features from "./Components/Features";
import ExperienceStats from "./Components/ExperienceStats";
import ThreeStepApproach1 from "./Components/ThreeStepApproach1";
import OurMethodology from "../../Pages/CfoService/Components/CfoMethodology";
import { FaBuilding, FaCheckCircle, FaClipboardCheck } from "react-icons/fa";

import GstServices from "./Components/GstServices";
import GstService from "./Components/GstService";
import V1 from "../../assets/verticalserver1.png";
import V2 from "../../assets/verticalserver2.png";
import V3 from "../../assets/verticalserver3.png";
import V4 from "../../assets/verticalserver4.png";
import V5 from "../../assets/verticalserver5.png";
import V6 from "../../assets/verticalserver6.png";

import CfoChallengeIcon1 from "../../assets/cfochallenge1.png";
import CfoChallengeIcon2 from "../../assets/cfochallenge2.png";
import CfoChallengeIcon3 from "../../assets/cfochallenge3.png";
import CfoChallengeIcon4 from "../../assets/cfochallenge4.png";
import Challenge from "../../Pages/CfoService/Components/Challenge";

import GstServiceBcakImg from "../../assets/gstservice1.jpeg";

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
      title: "Step 1: Diagnose",
      description:
        "We scan your raw data (Amazon, Flipkart, Myntra, MIS) to detect mismatches, ITC issues, wrong classifications, and compliance risks. Clear visibility. Zero surprises.",
      image: DiagnoseImg,
    },
    {
      title: "Step 2: Optimize",
      description:
        "We fix errors, streamline ITC, correct tax mapping, clean vendor data, and prepare accurate returns through our automated platform.Lower liability. Cleaner data.",
      image: OptimizeImg,
    },
    {
      title: "Step 3: Sustain",
      description:
        "Monthly reconciliations, error-free filings, alerts, and MIS dashboards to keep your GST compliance steady.No stress. No penalty risks.",
      image: SustainImg,
    },
  ];

  const cardsBottom = [
    {
      title: "Late or Wrong GST Returns",
      icon: CfoChallengeIcon1,
      points: [
        "Automated dashboards to collect multiple invoices from e-commerce Platform",
        "Generates GST returns automatically from the validated data, ready for filing.",
        "Notifies you immediately if something’s wrong, so you can fix it before the filing deadline",
      ],
    },
    {
      title: "Input Tax Credit (ITC) Mismatches",
      icon: CfoChallengeIcon2,
      points: [
        "Real-time ITC tracking",
        "Invoice Mismatch detection",
        "E-way Bills & E-invoicing",
        "Supplier compliance score.",
        "Monthly ITC health report",
      ],
    },
    {
      title: "Drowning in GST Notices?",
      icon: CfoChallengeIcon3,
      points: [
        "Auto-matches all GST data",
        "Fixes e-commerce mismatches",
        "Vendor compliance tracker",
        "Ensures GSTR-1 & GSTR-3B alignment",
      ],
    },
    {
      title: "No Visibility on Actual GST Liability",
      icon: CfoChallengeIcon4,
      points: [
        "Real-time GST Liability Calculation",
        "Auto Detection of Reversals",
        "Live ITC Availability View",
        "Single Dashboard for Cash & Credit Ledger",
      ],
    },
  ];

  const featuresList = [
    {
      icon: <FaBuilding className="text-3xl text-buttonBackground" />,
      title: "Expert-Led",
      description:
        "Our team includes former tax officials, chartered accountants, and GST specialists with 15+ years of domain expertise.",
    },
    {
      icon: <FaCheckCircle className="text-3xl text-buttonBackground" />,
      title: "Tech-Powered",
      description:
        "Our proprietary AI-driven tools automate reconciliation, identify discrepancies, and maximize ITC utilization with 99.8% accuracy.",
    },
    {
      icon: <FaClipboardCheck className="text-3xl text-buttonBackground" />,
      title: "Results-Focused",
      description:
        "We measure success by tangible outcomes: ₹250Cr+ in refunds secured, 98% audit success rate, and 15-20% more ITC recovered.",
    },
  ];

  return (
    <>
      <GstHeroSection />
      <TrustedBrands />
      <img
        src={GstServiceBcakImg}
        alt=""
        loading="lazy"
        className=" w-full h-56 md:h-96 object-contain "
      />
      <Challenge
        heading="Common GST Challenges We Solve"
        subheading="Businesses face numerous GST complexities. We've helped hundreds overcome these exact challenges."
        cards={cardsBottom}
      />
      <ExperienceStats />
      <GstServices />

      <OurMethodology
        heading="Why Businesses trust us with GST"
        subheading="We combine deep tax expertise with cutting-edge technology to deliver a seamless GST experience that transforms compliance into strategic advantage."
        features={featuresList}
      />

      <ThreeStepApproach
        heading="Our Unique 3-Step Approach"
        subheading="Unlike traditional GST service providers who focus solely on compliance, our approach transforms GST from a burden into a strategic advantage for your business."
        steps={stepsArray}
        defaultImage={DiagnoseImg}
        bgColor="bg-backgroundPrimary"
      />

      <Verticals
        heading={verticalsData.heading}
        subheading={verticalsData.subheading}
        items={verticalsData.items}
      />

      <Features />
      <GstService />
      <Resources />
      <FAQ />
      <CtaBanner />
    </>
  );
}

export default Main;
