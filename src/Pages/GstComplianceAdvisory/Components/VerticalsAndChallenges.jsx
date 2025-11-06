import React from "react";
import {
  TrendingDown,
  FileSearch,
  AlertCircle,
  Layers,
  CheckCircle,
} from "lucide-react";

export default function VerticalsAndChallenges() {
  const cardsTop = [
    { title: "GST Credit Mismatch Eating Your Margins?", desc: "Reconciliation errors can lead to significant ITC losses and cash flow issues.", Icon: TrendingDown },
    { title: "Confused About Sector-Specific Rules?", desc: "Complex industry rules and composition-specific deviations create compliance risk.", Icon: FileSearch },
    { title: "Drowning in GST Notices?", desc: "Improper filings increase legal exposure and penalties.", Icon: AlertCircle },
    { title: "Manual Reconciliation Errors Costing Lakhs?", desc: "Manual workflows lead to duplicate efforts, missed deadlines & interest.", Icon: Layers },
  ];

  const cardsBottom = [
    {
      title: "GST Credit Mismatch Eating Your Margins?",
      points: ["Monthly Reconciliation", "Accurate ITC Claims", "Reduce Interest & Penalties"],
    },
    {
      title: "Confused About Sector-Specific Rules?",
      points: ["Auto Rule Validation", "Sector-based Logic", "Faster Compliance"],
    },
    {
      title: "Drowning in GST Notices?",
      points: ["Notice Tracking", "Automated Alerts", "Response Templates"],
    },
    {
      title: "Manual Reconciliation Errors Costing Lakhs?",
      points: ["Zero Manual Errors", "Vendor Auto-Match", "Audit Trail"],
    },
  ];

  return (
    <div className="w-full bg-backgroundPrimary py-20">
      <div className="max-w-[1200px] mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-white font-medium text-4xl ">Common GST Challenges We Solve</h2>
        <p className="text-gray-400 mt-3 text-base max-w-[640px] font-normal mx-auto">
          Businesses face numerous GST complexities. We’ve helped hundreds overcome these exact challenges.
        </p>

        {/* ===== Section 1: Top Cards ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {cardsTop.map((c, i) => (
            <article
              key={i}
              className="bg-backgroundSecondary/40 backdrop-blur-xl border border-gray-700 rounded-md rounded-xl2 p-8 text-start
              transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:bg-backgroundSecondary/60 cursor-pointer"
            >
              {/* Icon (Left aligned) */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-buttonBackground/15 mb-4">
                <c.Icon className="text-buttonBackground" size={28} strokeWidth={2} />
              </div>

              {/* Title */}
              <h3 className="text-white font-medium text-lg text-card-title leading-snug">{c.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-card-small mt-2">{c.desc}</p>
            </article>
          ))}
        </div>


        {/* Divider */}
        <div className="mt-16 border-t border-gray-700"></div>

        {/* Repeated heading */}
        <div className="mt-12">
          <h2 className="text-white  text-4xl font-medium">Common GST Challenges We Solve</h2>
          <p className="text-gray-400 mt-3 text-base font-normal max-w-[640px] mx-auto">
            Businesses face numerous GST complexities. We’ve helped hundreds overcome these exact challenges.
          </p>
        </div>

        {/* ===== Section 2: Bottom Cards with bullets ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {cardsBottom.map((c, i) => (
            <article
              key={i}
              className="bg-backgroundSecondary/36 backdrop-blur-xl border border-gray-700  rounded-md p-6 text-left
              transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:bg-backgroundSecondary/56 cursor-pointer"
            >
              <h3 className="text-white font-medium text-lg leading-snug">{c.title}</h3>

              <ul className="mt-4 text-gray-300 text-card-small space-y-2">
                {c.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="text-buttonBackground flex-shrink-0" size={18} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}