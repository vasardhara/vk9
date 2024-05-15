import * as React from "react";

const V_CommentIcon = ({
    style = {},
    width = "20",
    height = "20",
    className = "",
    stroke = '#00031E',
    fill = 'transparent',
    viewBox = "0 0 20 20",
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
            className="v_stroke"
            stroke={stroke}
            fill={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10.625.625a8.738 8.738 0 0 0-7.43 13.354l-2.57 5.396 5.395-2.57A8.75 8.75 0 1 0 10.625.626v0Z"
        />
    </svg>
);

export default V_CommentIcon;
