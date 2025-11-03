import React from "react";

const CareerApplication = () => {
  return (
    <section className="bg-gradient-to-br from-[#0DACAF] via-[#10cfcf] to-[#0d6eaf] min-h-screen flex items-center justify-center py-12 px-4">
      <div className="bg-white shadow-2xl rounded-2xl max-w-2xl w-full p-10">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Apply Here
        </h2>

        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0DACAF]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0DACAF]"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number
            </label>
            <input
              type="text"
              placeholder="Enter your mobile number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0DACAF]"
            />
          </div>

          {/* Job Role Applying For */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Role Applying for
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0DACAF]">
              <option value="">Select a role</option>
              <option>ERP Development</option>
              <option>Graphic Designer</option>
              <option>Content Writer</option>
              <option>Website Developer</option>
              <option>SEO Specialist</option>
              <option>Social Media Manager</option>
              <option>Ads Specialist</option>
              <option>Email Marketer</option>
              <option>Project Manager</option>
              <option>Q/A</option>
              <option>Business Development</option>
            </select>
          </div>

          {/* Position Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Positions
            </label>
            <div className="flex flex-wrap gap-6">
              {["Full Time", "Part Time", "Internship", "Remote"].map((pos) => (
                <label key={pos} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="position"
                    value={pos.toLowerCase()}
                    className="text-[#0DACAF] focus:ring-[#0DACAF]"
                  />
                  <span className="text-gray-700">{pos}</span>
                </label>
              ))}
            </div>
          </div>

          {/* CV Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Attach your CV (Max 1.5MB)
            </label>
            <input
              type="file"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0DACAF]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#0DACAF] text-white py-3 rounded-lg font-medium text-lg hover:bg-[#0c9698] transition duration-300"
          >
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
};

export default CareerApplication;
