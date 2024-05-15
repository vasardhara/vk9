import * as React from "react";

const V_LeftArrowIcon = ({
    style = {},
    width = "13",
    height = "22",
    className = "",
    stroke = "#00031E",
    fill = 'transparent',
    viewBox = "0 0 13 22",
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
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="v_stroke"
            d="m11.958.688-9.826 9.826a.686.686 0 0 0 0 .972l9.826 9.826"
        />
    </svg>
);

export default V_LeftArrowIcon;
