import * as React from "react";

const V_UserIcon = ({
    style = {},
    width = "26",
    height = "26",
    className = "",
    stroke = "#00031E",
    fill = 'transparent',
    viewBox = "0 0 26 26",
}) => (
    <svg
        width={width}
        style={style}
        height={height}
        viewBox={viewBox}
        stroke={stroke}
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
        className={`${className || ""}`}
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <path
            stroke={stroke}
            className="v_stroke"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            fill={fill}
            d="M.813 13a12.188 12.188 0 1 0 24.375 0A12.188 12.188 0 0 0 .813 13v0Z"
        />
        <path
            stroke={stroke}
            className="v_stroke"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            fill={fill}
            d="M5.282 22.431C10.562 6.5 11.18 5.688 13.812 5.688v3.25l5.602 2.8a1.625 1.625 0 0 1 .898 1.455v.62a3.25 3.25 0 0 1-3.25 3.25h-1.625v7.88M15.436 21.124l-8.123-4.737"
        />
    </svg>
);

export default V_UserIcon;
