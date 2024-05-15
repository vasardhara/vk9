import * as React from "react";

const V_DownArrowIcon = ({
    style = {},
    width = "18",
    height = "11",
    className = "",
    viewBox = "0 0 18 11",
}) => (
    <svg
        width={width}
        style={style}
        height={height}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className={`${className || ""}`}
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <path
            stroke="#00031E"
            fill="transparent"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m17.438 1.484-8.04 8.04a.562.562 0 0 1-.796 0l-8.04-8.04"
        />
    </svg>
);

export default V_DownArrowIcon;
