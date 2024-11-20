import React from "react";
import { ResponsiveCirclePacking } from "@nivo/circle-packing";

const BubbleChart = ({ data, onBubbleClick }) => {
    return (
        <div style={{ height: 500 }}>
            <ResponsiveCirclePacking
                data={data}
                id="id"
                value="value"
                colors={{ scheme: "nivo" }}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                padding={4}
                enableLabels={true}
                labelTextColor={{ from: "color", modifiers: [["darker", 1.2]] }}
                onClick={(node) => onBubbleClick(node.id)} // Pass clicked bubble's ID
            />
        </div>
    );
};

export default BubbleChart;
