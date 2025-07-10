// src/styles/tailwindStyles.ts

// Existing classes kept as-is...
export const centerScreen = "min-h-screen flex items-center justify-center";
export const cardContainer = "w-[90%] lg:max-w-md bg-white shadow-xl rounded-3xl p-8 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl";
export const cardHeading = "text-center mb-6 font-semibold text-gray-800 text-2xl";
export const formLayout = "flex flex-col gap-4";
export const fullWidth = "w-full";
export const inputClass = "bg-white rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500";
export const primaryButton = "bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-600 transition-all";
export const errorText = "text-red-600 text-sm text-center mt-2";

// ✅ New landing page classes only


// Headings
export const landingHeading = "text-white font-bold mb-4";
export const landingSubHeading = "text-white/80 mb-6 text-center";

// Landing Page Button (rounded gradient)
export const landingGradientButton = 
  "bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:from-indigo-600 hover:to-purple-600 transition-all";

// Features grid
export const landingFeaturesGrid = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20";

// Feature Card
export const featureCard = 
  "flex flex-col items-center text-center p-6 rounded-2xl border border-white/30 backdrop-blur-md bg-white/10 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer";

export const featureIcon = "text-4xl mb-4";
export const featureTitle = "text-white font-semibold mb-2";
export const featureDesc = "text-white/80";

// Navbar
export const landingNavbar = "bg-white/10 backdrop-blur-md rounded-b-xl shadow-none p-2";
export const landingNavbarButton = "text-white capitalize font-semibold";
