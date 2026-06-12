"use client";

import { Card } from "@heroui/react";

const StatsCard = ({ title, value, icon }) => {
  return (
    <Card
      className="
        bg-zinc-950
        border
        border-zinc-800
        hover:border-green-500/40
        transition-all
        duration-300
        shadow-md
        hover:shadow-green-500/10
        p-5
      "
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-800 text-gray-300">
        {icon}
      </div>

      <div className="mt-5">
        <p className="text-sm text-gray-400">{title}</p>

        <h2 className="mt-2 text-2xl font-bold text-white">
          {value}
        </h2>
      </div>
    </Card>
  );
};

export default StatsCard;