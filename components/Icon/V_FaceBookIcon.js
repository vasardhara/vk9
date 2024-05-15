import * as React from "react";

const V_FaceBookIcon = ({
    style = {},
    width = "18",
    height = "19",
    className = "",
    fill = '#00031E',
    viewBox = "0 0 18 19",
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
            d="M15.302 4.083h-2.276c-.871 0-1.616.31-2.234.928-.59.618-.886 1.363-.886 2.234v2.234H8.094v2.698h1.812v6.28h2.698v-6.28h2.698V9.479h-2.698V7.666c0-.225.085-.421.253-.59a.799.799 0 0 1 .633-.295h1.812V4.083ZM0 1.5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v15.958a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1.5Z"
        />
    </svg>
);

export default V_FaceBookIcon;
