"use client";

import React, { useRef } from "react";
import copy from "clipboard-copy";

function CopyToClipboard({ text }: { text: string }) {
  const textRef = useRef<HTMLSpanElement | null>(null); // Cambia el tipo a HTMLSpanElement

  const handleCopyClick = async () => {
    if (textRef.current) {
      try {
        await copy(text);
        alert("Texto copiado al portapapeles");
      } catch (err) {
        console.error("Error al copiar al portapapeles:", err);
      }
    }
  };

  return (
    <span
      ref={(el) => (textRef.current = el)}
      onClick={handleCopyClick}
      className="cursor-pointer select-none rounded-2xl px-1 hover:bg-[#666666] transition duration-300"
    >
      {text}
    </span>
  );
}

export default CopyToClipboard;
