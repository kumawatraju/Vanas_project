import React from "react";

export const SocialMIcon = () => {
  return (
    <div className="text-center text-sm text-gray-600 font-normal py-4">
      <h2>signup with social profiles</h2>
      <div className="flex w-full justify-center h-12 space-x-4 py-3 mb-4">
        <div className="w-12 h-12 rounded-xl border border-gray-300 flex items-center justify-center">
          <img src="./images/fb.png" alt="facebook image" />
        </div>
        <div className="w-12 h-12 rounded-xl border border-gray-300 flex items-center justify-center">
          <img src="./images/Google__G__Logo.png" alt="google image" />
        </div>
        <div className="w-12 h-12 rounded-xl border border-gray-300 flex items-center justify-center">
          <img src="./images/Twitter.png" alt="twitter image" />
        </div>
      </div>
    </div>
  );
};

 
