import React from 'react';

interface HeartIconProps {
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

const HeartIcon: React.FC<HeartIconProps> = ({ isActive, onClick, className }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: 'pointer' }}
    >
      <path
        d="M8 3.1L7.35 2.45C5.6 0.75 2.4 1.3 1.35 3.4C0.85 4.35 0.75 5.7 1.65 7.45C2.5 9.1 4.3 11.1 8 13.6C11.7 11.1 13.5 9.1 14.35 7.45C15.25 5.7 15.15 4.35 14.65 3.4C13.6 1.3 10.4 0.75 8.65 2.45L8 3.1Z"
        fill={isActive ? '#3470FF' : 'none'}
        stroke={isActive ? '#3470FF' : '#fff'}
        strokeWidth="1"
      />
    </svg>
  );
};

export default HeartIcon;
