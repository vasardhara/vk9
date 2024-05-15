import * as React from "react";

const V_HeartIcon = ({
    style = {},
    width = "20",
    height = "18",
    className = "",
    fill = '#EA3F37',
    stroke = '#EA3F37',
    viewBox = "0 0 20 18",
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
            d="M10 17.203 2.01 8.87a4.727 4.727 0 1 1 6.685-6.688L10 3.486l1.305-1.304a4.727 4.727 0 0 1 6.686 6.685L10 17.203Z"
        />
    </svg>
);

export default V_HeartIcon;
