import React from 'react'
import { XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, BarChart, Bar, } from "recharts";

export default function CustomBarChart({ data, height, fill, fill2, barSize, barSize2 }) {
    return (

        <ResponsiveContainer width="100%" height={height}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="1 1" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value2" stackId="a" fill={fill2} barSize={barSize2} />
                <Bar dataKey="value" stackId="a" fill={fill} barSize={barSize} />
            </BarChart>
        </ResponsiveContainer>
    )
}
