import React from 'react'

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex space-x-2">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="w-1 h-8 bg-white rounded-full animate-loading"
            style={{
              animationDelay: `${index * 0.15}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Loading

// Add this to your globals.css file:
// @keyframes loading {
//   0%, 100% { transform: scaleY(1); }
//   50% { transform: scaleY(2); }
// }
// .animate-loading {
//   animation: loading 1s ease-in-out infinite;
// }