"use client";

import StatsCard from "./StatsCard";

const StatsGrid = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
      {stats.map((item, index) => (
        <StatsCard
          key={index}
          title={item.title}
          value={item.value}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default StatsGrid;