'use client';
import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="text-[#9a9796] text-center mt-2">
      © {year} NGUYEN HUNG HOAI NAM. All Rights Reserved.
    </div>
  );
}

export default Footer;
