import * as React from "react";

const V_CloseIcon = ({
    style = {},
    width = "18",
    height = "18",
    className = "",
    fill = '#00031E',
    viewBox = "0 0 18 18",
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
        <g
            stroke="#00031E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            clipPath="url(#a)"
        >
            <path d="M.563 17.436 17.438.563M17.438 17.436.563.563" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h18v18H0z" />
            </clipPath>
        </defs>
    </svg>
);

export default V_CloseIcon;
