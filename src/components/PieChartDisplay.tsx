import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface PieChartDisplayProps {
  data: { name: string; value: number }[];
}

const COLORS = ['#6E4DFF', '#FFBE25', '#03BD97', '#00AEEF', '#FF753D'];

const PieChartDisplay: React.FC<PieChartDisplayProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 w-full max-w-md">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartDisplay;