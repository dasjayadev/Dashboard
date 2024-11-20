import React, { useState } from "react";
import BubbleChart from "./components/BubbleChart";
import DataGrid from "./components/DataGrid";
import bubbleChartData from "./data/bubbleChartData";

const App = () => {
    const [data, setData] = useState(bubbleChartData.children);
    const [filteredData, setFilteredData] = useState(data);

    const handleBubbleClick = (selectedId) => {
        // Filter the grid data based on the clicked bubble
        const filtered = data.filter((item) => item.id === selectedId);
        setFilteredData(filtered);
    };

    const handleFilterChange = (category) => {
        // Filter data by category
        const filtered = category === "All" ? data : data.filter((item) => item.category === category);
        setFilteredData(filtered);
    };

    return (
        <div style={{ padding: "20px" }}>
            <div>
                <label htmlFor="categoryFilter">Filter by Category: </label>
                <select id="categoryFilter" onChange={(e) => handleFilterChange(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Group 1">Group 1</option>
                    <option value="Group 2">Group 2</option>
                    <option value="Group 3">Group 3</option>
                </select>
            </div>
            <BubbleChart data={{ name: "root", children: filteredData }} onBubbleClick={handleBubbleClick} />
            <DataGrid data={filteredData} />
        </div>
    );
};

export default App;
