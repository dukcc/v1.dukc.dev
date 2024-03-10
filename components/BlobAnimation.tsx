"use client";

import React, { useEffect } from "react";

const BlobAnimation = () => {
  useEffect(() => {
    const blob = document.getElementById("blob");

    const handlePointerMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      const x = clientX - window.innerWidth / 5;
      const y = clientY - window.innerHeight * 1.1;

      if (blob) {
        blob.animate([{ transform: `translate(${x}px, ${y}px)` }], {
          duration: 10000,
          fill: "forwards",
        });
      }
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div
      id="blob"
      className=" absolute h-[50vh] w-[30vw] blob-blur blur-[512px] bg-gradient-to-tr animate-spin-slow from-brand-blue to-brand-purple rounded-full -z-50"
    ></div>
  );
};

export default BlobAnimation;
