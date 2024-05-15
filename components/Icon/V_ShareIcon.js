import * as React from "react";

const V_ShareIcon = ({
    style = {},
    width = "20",
    height = "20",
    className = "",
    fill = 'transparent',
    stroke = '#00031E',
    viewBox = "0 0 20 20",
}) => (
    <svg
        width={width}
        style={style}
        height={height}
        viewBox={viewBox}
        fill={fill}
        stroke={stroke}
        xmlns="http://www.w3.org/2000/svg"
        className={`${className || ""}`}
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <path
            fill={fill}
            className="v_fill-stroke"
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M1.708 8.656a1.24 1.24 0 0 1-.057-2.367L18.377.834a.626.626 0 0 1 .79.785l-5.451 16.735a1.239 1.239 0 0 1-2.368-.059L9.477 10.52 1.708 8.656ZM19.012.983 9.477 10.52"
        />
    </svg>
);

export default V_ShareIcon;
