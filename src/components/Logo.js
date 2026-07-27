import React from 'react';

export default function Logo({ size = 48, className = "" }) {
  return (
    <img
      src="/favicon.svg"
      alt="PH Masc Logo"
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size }}
    />
  );
}
