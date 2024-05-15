import * as React from "react";

const V_InputRightArrowIcon = ({
    style = {},
    width = "14",
    height = "10",
    className = "",
    fill = '#00031E',
    viewBox = "0 0 14 10",
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
            fill={fill}
            className="v_fill"
            d="M8.537.81a.5.5 0 0 1 .817-.162l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708l3.147-3.146H1a.5.5 0 0 1 0-1h10.793L8.646 1.356A.5.5 0 0 1 8.537.81Z"
        />
    </svg>
);

export default V_InputRightArrowIcon;
