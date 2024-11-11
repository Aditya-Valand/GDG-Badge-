// CloudBox.jsx
import React from 'react';

const CloudBox = ({ content }) => {
  return (
    <div className="flex items-center justify-center">
      <svg
        viewBox="0 0 64 40"
        xmlns="http://www.w3.org/2000/svg"
        className="w-64 h-auto"
      >
        {/* Cloud shape */}
        <path
          d="M16 32C8 32 2 26 2 18S8 4 16 4c2.2 0 4.3.5 6.2 1.5C24 3 26.5 2 29 2c6.6 0 12 5.4 12 12 0 .7-.1 1.4-.2 2.1C45.3 16.7 50 21.5 50 28c0 7.5-6.1 14-14 14H16Z"
          fill="url(#cloudGradient)"
        />
        <defs>
          <linearGradient id="cloudGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4285F4" />
            <stop offset="100%" stopColor="#34A853" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute text-center text-white font-medium px-6 py-4">
        {content}
      </div>
    </div>
  );
};

export default CloudBox;
