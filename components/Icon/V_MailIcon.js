import * as React from "react";

const V_MailIcon = ({
    style = {},
    width = "14",
    height = "11",
    className = "",
    viewBox = "0 0 14 11",
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
            fill = 'transparent'
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12.25.77H1.75a.875.875 0 0 0-.875.876v7c0 .483.392.875.875.875h10.5a.875.875 0 0 0 .875-.875v-7A.875.875 0 0 0 12.25.77Z"
        />
        <path
            stroke="#00031E"
            fill = 'transparent'
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m12.927 1.092-4.75 3.654a1.93 1.93 0 0 1-2.354 0l-4.75-3.654"
        />
    </svg>
);

export default V_MailIcon;
