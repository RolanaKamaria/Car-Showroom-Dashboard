import React from "react";

import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";
import mileStaticsData from "../assets/dummy-data/mileStatics";
const MileChart = () => {
  return (
    <ResponsiveContainer width="100%">
      <BarChart data={mileStaticsData}>
        <XAxis dataKey="name" stroke="#d7d7d7" />
        <Bar dataKey="mileStats" stroke="#d7d7d7" fill="#42d9a2" barSize={30} />
        <Tooltip wrapperClassName="toolip__style" cursor={false} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MileChart;
