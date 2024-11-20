import React from "react";

const DataGrid = ({ data }) => {
    return (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
                <tr>
                    <th style={{ border: "1px solid black", padding: "8px" }}>ID</th>
                    <th style={{ border: "1px solid black", padding: "8px" }}>Value</th>
                    <th style={{ border: "1px solid black", padding: "8px" }}>Category</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr key={row.id}>
                        <td style={{ border: "1px solid black", padding: "8px" }}>{row.id}</td>
                        <td style={{ border: "1px solid black", padding: "8px" }}>{row.value}</td>
                        <td style={{ border: "1px solid black", padding: "8px" }}>{row.category}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataGrid;
