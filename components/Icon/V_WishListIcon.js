import * as React from "react";

const v_WishListIcon = ({
    style = {},
    width = "20",
    height = "17",
    className = "",
    fill = "transparent",
    stroke = "#fff",
    viewBox = "0 0 20 17",
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
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="v_fill-stroke"
            d="m16.622 9.55-5.657 5.658a2 2 0 0 1-2.828 0L2.48 9.551A5 5 0 1 1 9.551 2.48a5 5 0 0 1 7.071 7.07Z"
        />
    </svg>
);

export default v_WishListIcon;
