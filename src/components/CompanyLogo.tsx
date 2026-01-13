import React from "react";

const gradients = [
  "from-indigo-500 to-purple-500",
  "from-pink-500 to-rose-500",
  "from-emerald-500 to-teal-500",
  "from-orange-500 to-amber-500",
  "from-sky-500 to-cyan-500",
  "from-violet-500 to-fuchsia-500",
];

function hashString(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0; // keep 32bit
  }
  return Math.abs(hash);
}

export default function CompanyLogo({ name }: { name: string }) {
  const safeName = name?.trim() || "?";
  const gradient = gradients[hashString(safeName) % gradients.length];
  const letter = safeName[0].toUpperCase();

  return (
    <div
      className={`size-6 rounded-lg bg-linear-to-br ${gradient} flex items-center justify-center text-white text-sm font-semibold shadow-sm select-none`}
      aria-label={safeName}
    >
      {letter}
    </div>
  );
}
