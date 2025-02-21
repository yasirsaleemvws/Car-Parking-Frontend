import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

export default function CustomPieChart({ width, height, data, colors, innerRadius, outerRadius, fill }) {
    return (
        <ResponsiveContainer width={width} height={height} className="flex-1">
            <PieChart>
                <Pie data={data} dataKey="value" nameKey="name" innerRadius={innerRadius} outerRadius={outerRadius} fill={fill}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}
