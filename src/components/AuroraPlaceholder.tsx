
import React from 'react';

interface AuroraPlaceholderProps {
  colorStops?: string[];
  amplitude?: number;
  blend?: number;
  time?: number;
  speed?: number;
  className?: string;
}

const AuroraPlaceholder: React.FC<AuroraPlaceholderProps> = ({ 
  className = "w-full h-full"
}) => {
  return (
    <div className={`${className} bg-gradient-to-r from-sircell-green/10 to-sircell-lightgreen/20 relative overflow-hidden`}>
      {/* Static gradient placeholder for Aurora effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sircell-green/5 to-transparent animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-sircell-lightgreen/5 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default AuroraPlaceholder;
