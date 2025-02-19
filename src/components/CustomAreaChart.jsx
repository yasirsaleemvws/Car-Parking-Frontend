import React from 'react'
import { XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, AreaChart, Area, } from "recharts";

export default function CustomAreaChart({ data, height, stroke, fill, strokeWidth }) {
    return (
        <ResponsiveContainer width="100%" height={height}>
            <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke={stroke} fill={fill} strokeWidth={strokeWidth} />
            </AreaChart>
        </ResponsiveContainer>
    )
}
