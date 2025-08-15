import React from 'react';

const SlidingText: React.FC = () => {
  return (
    <div className="h2 sliding-text-wrapper bg-primary">
      <div className="sliding-text text-cyan-50">
        {/* Repeat the text to ensure a seamless loop */}
        <span>LET'S MAKE IT HAPPEN ⋅ LET'S MAKE IT HAPPEN ⋅ LET'S MAKE IT HAPPEN ⋅ LET'S MAKE IT HAPPEN ⋅ </span>
        <span>LET'S MAKE IT HAPPEN ⋅ LET'S MAKE IT HAPPEN ⋅ LET'S MAKE IT HAPPEN ⋅ LET'S MAKE IT HAPPEN ⋅ </span>
      </div>
    </div>
  );
};

export default SlidingText;
