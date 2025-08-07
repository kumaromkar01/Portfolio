import React from 'react';

// SVG Icon Components
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LeetCodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
        <path d="M13.48 4.26l-1.82 6.91h1.64l1.32-5.04h.04l1.24 5.04h1.66l-1.84-6.91h-1.66l-.54 2.22h-.03l-.55-2.22h-1.5zM4 20h16v-2H4v2zm0-3h16v-2H4v2zm0-3h16v-2H4v2zm11.5-5.24h.04l1.24 5.04h1.66l-1.84-6.91h-1.66l-.54 2.22h-.03l-.55-2.22h-1.5l-1.82 6.91h1.64l1.32-5.04z"/>
    </svg>
);

const CodeforcesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2v20" />
        <path d="M22 12H2" />
        <path d="M12 6l-6 6 6 6" />
    </svg>
);


const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-400"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

// A map to easily retrieve icon components
const iconMap = {
    GitHub: <GithubIcon />,
    LeetCode: <LeetCodeIcon />,
    Codeforces: <CodeforcesIcon />,
    Email: <EmailIcon />,
    LinkedIn: <LinkedInIcon />,
    Instagram: <InstagramIcon />,
};

// Reusable component for a single contact item, in dark mode
const ContactCard = ({ item }) => (
    <div className="bg-[#111827] p-6 rounded-lg border border-gray-700/50 text-center shadow-lg hover:border-blue-500/50 transition-all duration-300 flex flex-col">
        <div className="mx-auto mb-4">
            {iconMap[item.title]}
        </div>
        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
        <p className="text-gray-400 mt-1 flex-grow">{item.handle}</p>
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-6 block w-full bg-gray-700 hover:bg-gray-600 text-gray-200 font-medium text-sm py-2 px-4 rounded-md transition-colors">
            {item.buttonText}
        </a>
    </div>
);

const Profiles = () => {
    // Data for the contact sections
    const codingProfiles = [
        { title: "GitHub", handle: "github.com/kumaromkar01", url: "https://github.com/kumaromkar01", buttonText: "View Profile" },
        { title: "LeetCode", handle: "leetcode.com/_omkarkumar_", url: "https://leetcode.com/u/_omkarkumar_/", buttonText: "View Profile" },
        { title: "Codeforces", handle: "codeforces.com/profile/omkar_kumar", url: "https://codeforces.com/profile/omkar_kumar", buttonText: "View Profile" },
    ];

    const contactInfo = [
        { title: "Email", handle: "kumaromkar1311@gmail.com", url: "kumaromkar1311@gmail.com", buttonText: "Send Email" },
        { title: "LinkedIn", handle: "omkarkumar01", url: "https://www.linkedin.com/in/omkarkumar01/", buttonText: "View Profile" },
        { title: "Instagram", handle: "kumaromkar01", url: "https://www.instagram.com/kumaromkar01/", buttonText: "View Profile" },
    ];

    return (
        <div className="bg-black min-h-screen w-full font-sans text-white">
            <div className="container mx-auto px-4 py-16 sm:py-24">
                
                {/* Coding Profiles Section */}
                <div className="mb-16">
                    <h2 className="text-3xl text-center font-bold mb-8 text-white">Coding Profiles</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {codingProfiles.map((item, index) => (
                            <ContactCard key={`coding-${index}`} item={item} />
                        ))}
                    </div>
                </div>

                {/* Contact Information Section */}
                <div>
                    <h2 className="text-3xl text-center font-bold mb-8 text-white">Contact Details</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {contactInfo.map((item, index) => (
                            <ContactCard key={`contact-${index}`} item={item} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profiles;
