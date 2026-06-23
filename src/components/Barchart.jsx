import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function App() {
  const data = [
    { name: "Mon", patients: 40 },
    { name: "Tue", patients: 55 },
    { name: "Wed", patients: 30 },
    { name: "Thu", patients: 65 },
    { name: "Fri", patients: 50 },
    { name: "Sat", patients: 75 },
  ];

  return (
    <div className="barchart" style={{ width: "100%", height: "400px" }}>
      <h2>Weekly Patients</h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />
          <YAxis />

          <Tooltip />
          <Legend />

          <Bar dataKey="patients" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;