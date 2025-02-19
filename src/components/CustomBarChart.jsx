import React from 'react'
import { XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, BarChart, Bar, } from "recharts";

export default function CustomBarChart({ data, height, fill }) {
    return (

        <ResponsiveContainer width="100%" height={height}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="1 1" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill={fill} />
            </BarChart>
        </ResponsiveContainer>
    )
}
