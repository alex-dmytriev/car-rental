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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99978 1.31405C12.4378 -3.24795 23.5338 4.73505 7.99978 15.0001C-7.53422 4.73605 3.56178 -3.24795 7.99978 1.31405Z"
        fill={isActive ? '#3470FF' : 'none'}
      />
    </svg>
  );
};

export default HeartIcon;
