import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="text-white">
      
      <div
        className="w-full pt-16 h-[55vw] md:h-[40vw] bg-cover bg-center relative flex items-center bg-[url('https://cdn.prod.website-files.com/67f4e51e5c8ae21dfb2629b0/67f4e9456a9501f92ef078eb_-%20(3).png')]"
      >
        <div className="relative z-10 max-w-6xl px-6 sm:px-8 text-white">
          <p className="text-sm sm:text-lg mb-2">Home / Privacy Policy</p>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-sm sm:text-base">Last update: 19 Dec 2023</p>
        </div>
      </div>

      
      <div className="bg-white text-[#1d1d1f] max-w-5xl mx-auto px-6 sm:px-8 py-16">
        
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">How We Use Your Information</h2>
          <p className="text-base sm:text-lg text-gray-800 mb-6 leading-relaxed">
            At Eklovya Properties, we collect your personal information such as name, contact number, email address,
            and property preferences when you fill out forms or contact us through our website. This data helps us
            understand your requirements and offer you the most relevant property options in Gurugram and surrounding areas.
          </p>
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
            We may use your information to schedule property visits, provide consultation, respond to queries,
            or update you on newly listed properties. We do not share your personal details with third-party marketers
            or unrelated businesses.
          </p>
        </div>

      
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Cookies and Tracking</h2>
          <p className="text-base sm:text-lg text-gray-800 mb-6 leading-relaxed">
            Our website uses cookies and analytics tools to understand user behavior, improve website performance,
            and enhance your browsing experience. These may track basic information like your IP address, time spent
            on pages, and the device you use.
          </p>
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
            You can choose to disable cookies through your browser settings. However, doing so may limit certain
            features of the site or affect user experience. No personally identifiable information is collected
            without your consent.
          </p>
        </div>

        
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Your Rights</h2>
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
            You have the right to access, update, or delete your personal data shared with us. To request changes
            or removal, please contact us using the details provided below. We take data privacy seriously and
            comply with applicable data protection laws.
          </p>
        </div>

        
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-base sm:text-lg text-gray-800 mb-2">
            If you have any questions about this Privacy Policy or your data, feel free to reach out to us:
          </p>
          <p className="text-base sm:text-lg text-gray-800">Email: eklovya.properties@gmail.com</p>
          <p className="text-base sm:text-lg text-gray-800">Phone: +91-XXXXXXXXXX</p>
          <p className="text-base sm:text-lg text-gray-800">Location: Gurugram, Haryana, India</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
