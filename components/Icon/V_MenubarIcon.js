import * as React from "react";

const V_MenubarIcon = ({
    style = {},
    width = "22",
    height = "19",
    className = "",
    fill = '#00031E',
    viewBox = "0 0 22 19",
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
            fillRule="evenodd"
            d="M22 1.5H0V0h22v1.5Zm0 8.268H0v-1.5h22v1.5ZM0 18.036h22v-1.5H0v1.5Z"
            clipRule="evenodd"
        />
    </svg>
);

export default V_MenubarIcon;
