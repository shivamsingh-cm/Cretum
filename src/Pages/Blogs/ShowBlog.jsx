import React from 'react';
import { Mail, Phone, User, MessageSquare, ChevronRight, CheckCircle, ArrowUpRight } from 'lucide-react';
import BlogHeading from '../../assets/blogHeading.png';
import RandomImage from '../../assets/randomblog.jpg'

const blogPost = {
  title: "Will students aspiring to study abroad lose a few months or a year this academic season",
  author: "Olivia Rhye",
  position: "Content Writer",
  date: "20 Jan 2022",
  tags: ["Featured", "Finance", "Taxes", "Study Abroad"],
  imageUrl: RandomImage,
  authorImage: RandomImage,
  contentSections: [
    { id: "overview", title: "Overview of the situation", content: "The global pandemic has caused significant disruption to academic calendars worldwide. Students planning to study abroad  The global pandemic has caused significant disruption to academic calendars worldwide. Students planning to study abroad The global pandemic has caused significant disruption to academic calendars worldwide. Students planning to study abroad face unique challenges related to visa processing, travel restrictions, and institutional changes." },
    { id: "visa", title: "Visa and Travel Challenges", content: "Many consulates and embassies have faced backlogs and reduced capacity, leading to longer processing times for student visas. Furthermore, fluctuating travel advisories mean students must remain flexible with their departure dates." },
    { id: "institutions", title: "Institutional Flexibility", content: "Universities are responding with hybrid learning models, delayed start dates, and increased online course offerings to accommodate students who cannot arrive on campus immediately." },
    { id: "financial", title: "Financial and Timeline Implications", content: "A delay in the academic year can have financial implications, including changes to scholarship disbursement and potential loss of earnings for students who planned to work after graduation." },
    { id: "conclusion", title: "Conclusion and Recommendations", content: "While delays are possible, proactive planning, constant communication with the chosen university, and expert guidance can help aspiring students navigate these hurdles." },
  ],
};

const similarPosts = [
  {
    id: 1,
    title: "How Global Trends Affect Study Abroad Opportunities",
    author: "John Carter",
    date: "10 Oct 2023",
    tags: ["Education", "Abroad"],
    summary: "Discover how changing visa rules and education trends shape opportunities for students worldwide.",
    imageUrl: RandomImage,
    link: "#",
  },
  {
    id: 2,
    title: "5 Financial Tips for International Students",
    author: "Emma Watson",
    date: "22 Sep 2023",
    tags: ["Finance", "Study Abroad"],
    summary: "Learn the smartest ways to manage expenses and plan ahead while studying overseas.",
    imageUrl: RandomImage,
    link: "#",
  },
  {
    id: 3,
    title: "Visa Application Made Easy: A Step-by-Step Guide",
    author: "Michael Lee",
    date: "05 Aug 2023",
    tags: ["Visa", "Guides"],
    summary: "A practical breakdown of how to apply for student visas efficiently without common pitfalls.",
    imageUrl: RandomImage,
    link: "#",
  },
];

// Reusable Components
const ContentNavItem = ({ title, id }) => (
  <a href={`#${id}`} className="flex items-center justify-between py-2 px-3 hover:bg-purple-800/50 rounded-lg transition">
    <span className="text-sm font-medium text-gray-300 group-hover:text-white">{title}</span>
    <ChevronRight className="w-4 h-4 text-purple-400" />
  </a>
);

const ContactForm = () => {
  const IconInput = ({ Icon, placeholder, type = "text" }) => (
    <div className="relative mb-4">
      <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400" />
      <input
        type={type}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-3 bg-purple-900 border border-purple-700 rounded-lg text-white placeholder-purple-400 focus:ring-2 focus:ring-purple-400 focus:outline-none"
      />
    </div>
  );

  return (
    <div className="bg-backgroundSecondary p-6 rounded-2xl border border-white/40 sticky top-10">
      <h2 className="text-2xl font-bold text-white mb-2">Get in touch</h2>
      {/* <p className="text-purple-300 mb-6 text-sm">Fill in your details and we’ll reach out soon.</p> */}
      <form>
        <IconInput Icon={User} placeholder="Name" />
        <IconInput Icon={Phone} placeholder="Phone Number" type="tel" />
        <IconInput Icon={Mail} placeholder="Email" type="email" />
        <div className="relative mb-6">
          <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-purple-400" />
          <textarea
            placeholder="Message (optional)"
            rows="4"
            className="w-full pl-10 pr-4 py-3 bg-purple-900 border border-purple-700 rounded-lg text-white placeholder-purple-400 focus:ring-2 focus:ring-purple-400 focus:outline-none resize-none"
          ></textarea>
        </div>
        <div className="flex items-start mb-6">
          <input type="checkbox" id="subscribe" className="mt-1 w-4 h-4 accent-purple-500 bg-purple-900 border-purple-700 rounded" />
          <label htmlFor="subscribe" className="ml-3 text-sm text-purple-300">Subscribe to our newsletter.</label>
        </div>
        <button type="submit" className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

const ShowBlog = () => {
  return (
    <div className="min-h-screen bg-backgroundPrimary text-white font-sans pt-16">
      {/* Top Full-Width Banner */}
      <img 
        src={BlogHeading} 
        alt="Blog Heading" 
        className=" object-cover" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <div className="flex flex-wrap gap-3 mb-4">
              {blogPost.tags.map(tag => (
                <span key={tag} className="bg-purple-700 text-purple-100 text-xs font-medium px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 leading-tight">{blogPost.title}</h1>
            <div className="flex items-center space-x-4">
              <img src={blogPost.authorImage} alt={blogPost.author} className="w-14 h-14 rounded-full object-cover border-2 border-purple-500" />
              <div>
                <p className="font-semibold text-white">{blogPost.author}</p>
                <p className="text-sm text-purple-300">{blogPost.position}</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={blogPost.imageUrl}
              alt="Featured"
              loading='lazy'
              className="w-full h-auto rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>

        {/* Main 3-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Left: Table of Contents */}
          <div className="lg:col-span-1">
            <div className="bg-purple-900/40 p-6 rounded-2xl border border-purple-800">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" /> Table of Contents
              </h2>
              <div className="space-y-2">
                {blogPost.contentSections?.map(section => (
                  <ContentNavItem key={section?.id} title={section?.title} id={section?.id} />
                ))}
              </div>
            </div>
          </div>

          {/* Middle: Blog Content */}
          <div className="lg:col-span-2 text-white leading-relaxed space-y-8">
            {blogPost.contentSections.map(section => (
              <section key={section.id} id={section.id}>
                <h2 className="text-3xl font-bold text-white/80 mb-4">{section.title}</h2>
                <p>{section.content}</p>
              </section>
            ))}
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-1">
            <ContactForm />
          </div>
        </div>

        {/* Similar Blogs Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Similar Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {similarPosts.map((post) => (
              <a
                key={post.id}
                href={post.link}
                className="bg-purple-900/20 rounded-xl overflow-hidden shadow-lg hover:scale-[1.01] hover:shadow-2xl transition flex flex-col group"
              >
                <div className="relative w-full aspect-[3/2] overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map(tag => (
                      <span key={tag} className="bg-purple-600/50 px-3 py-1 text-xs font-medium text-purple-200 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-purple-300 mb-2">
                    <span className="font-semibold">{post.author}</span> - {post.date}
                  </p>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-medium text-gray-50 leading-snug group-hover:text-purple-400 transition">
                      {post.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-purple-400" />
                  </div>
                  <p className="text-base text-gray-300 flex-grow">{post.summary}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowBlog;
