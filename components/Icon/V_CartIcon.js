import * as React from "react";

const V_CartIcon = ({
    style = {},
    width = "26",
    height = "16",
    className = "",
    stroke = "#00031E",
    fill = 'transparent',
    viewBox = "0 0 26 16",
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
            d="M25.173 4.235C24.871 10.053 19.54 14.686 13 14.686 6.27 14.686.812 9.773.812 3.713"
        />
        <path
            stroke={stroke}
            className="v_stroke"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            fill={fill}
            d="M22.618 1.458c1.61.711 2.57 1.606 2.57 2.578C25.188 6.353 19.73 8.23 13 8.23 6.27 8.231.812 6.358.812 4.036c0-.987.99-1.895 2.646-2.611"
        />
    </svg>
);

export default V_CartIcon;
