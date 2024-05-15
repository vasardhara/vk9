import * as React from "react";

const V_ContactIcon = ({
    style = {},
    width = "14",
    height = "14",
    className = "",
    viewBox = "0 0 14 14",
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
            fill='transparent'
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m8.773 13.06.007.005a3.228 3.228 0 0 0 4.016-.44l.452-.452a1.077 1.077 0 0 0 0-1.522L11.345 8.75a1.077 1.077 0 0 0-1.522 0v0a1.075 1.075 0 0 1-1.521 0L5.258 5.706a1.077 1.077 0 0 1 0-1.522v0a1.075 1.075 0 0 0 0-1.522L3.357.758a1.077 1.077 0 0 0-1.522 0l-.452.452a3.229 3.229 0 0 0-.44 4.015l.004.007a29.13 29.13 0 0 0 7.826 7.829v0Z"
        />
    </svg>
);

export default V_ContactIcon;
