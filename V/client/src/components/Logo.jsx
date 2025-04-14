// import React from "react";

// const Logo = () => {
//   return (
//     <div className="relative flex items-center p-4">
//       <div className="relative">
//         {/* Animated background elements */}
//         <div className="absolute -left-3 top-1/2 w-10 h-20 -translate-y-1/2">
//           <div className="absolute w-full h-full bg-[#E63946]/30 rounded-full blur-lg animate-pulse"></div>
//           <div className="absolute w-full h-full bg-[#457B9D]/30 rounded-full blur-lg animate-pulse delay-75"></div>
//         </div>

//         <div className="absolute -right-3 top-1/2 w-10 h-20 -translate-y-1/2">
//           <div className="absolute w-full h-full bg-[#A8DADC]/30 rounded-full blur-lg animate-pulse"></div>
//           <div className="absolute w-full h-full bg-[#1D3557]/30 rounded-full blur-lg animate-pulse delay-100"></div>
//         </div>

//         {/* Main logo text */}
//         <h1 className="text-3xl font-bold tracking-wide">
//           <span className="bg-gradient-to-r from-[#E63946] via-[#457B9D] to-[#1D3557] text-transparent bg-clip-text">
//             Visionary
//           </span>
//           <span className="bg-gradient-to-r from-[#1D3557] via-[#A8DADC] to-[#E63946] text-transparent bg-clip-text">
//             Hub
//           </span>
//         </h1>

//         {/* Shadow effect */}
//         <div className="absolute -bottom-2 left-0 w-full text-3xl font-bold tracking-wide text-[#F1FAEE] blur-sm opacity-40">
//           VisionaryHub
//         </div>

//         {/* Decorative element */}
//         <div className="absolute -top-1 right-0 w-2 h-2 bg-[#E63946] rounded-full animate-ping"></div>
//       </div>
//     </div>
//   );
// };

// export default Logo;





import React from "react";

const Logo = () => {
  return (
    <div className="relative flex items-center p-6">
      <div className="relative">
        {/* Subtle animated backdrop */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-30">
          <div className="absolute h-32 w-32 rounded-full bg-[#457B9D] mix-blend-multiply blur-xl animate-pulse" />
          <div className="absolute h-32 w-32 rounded-full bg-[#A8DADC] mix-blend-multiply blur-xl animate-pulse delay-300" />
        </div>

        {/* Main logo with refined gradient */}
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="relative inline-block bg-gradient-to-r from-[#1D3557] via-[#457B9D] to-[#A8DADC] text-transparent bg-clip-text">
            Visionary
            <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-[#E63946] to-[#A8DADC] opacity-80" />
          </span>
          <span className="ml-2 bg-gradient-to-r from-[#A8DADC] to-[#1D3557] text-transparent bg-clip-text">
            Hub
          </span>
        </h1>

        {/* Sophisticated underline effect */}
        <div className="absolute -bottom-3 left-0 right-0 h-1.5 bg-gradient-to-r from-[#E63946]/40 via-[#A8DADC]/40 to-[#1D3557]/40 rounded-full blur-[2px]" />

        {/* Geometric accent elements */}
        <div className="absolute -top-4 -right-4">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 rotate-45 bg-[#E63946] rounded-sm opacity-80 animate-pulse delay-500" />
            <div className="absolute inset-0.5 -rotate-45 bg-[#A8DADC] rounded-sm opacity-50 animate-pulse delay-700" />
          </div>
        </div>

        {/* Subtle texture overlay */}
        <div className="absolute inset-0 rounded-lg bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMCAwSDEwMFYxMDBIMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDgiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')]" />
      </div>
    </div>
  );
};

export default Logo;