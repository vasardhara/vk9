import * as React from "react";

const V_StarIcon = ({
    style = {},
    width = "18",
    height = "18",
    className = "",
    fill = '#EA3F37',
    viewBox = "0 0 18 18",
}) => (
    <svg
        width={width}
        style={style}
        height={height}
        viewBox={viewBox}
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
        className={`${className || ""}`}
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <path
            fill={fill}
            className="v_fill"
            d="m9.546.9 2.51 4.971 4.83.479a.604.604 0 0 1 .375 1.03l-3.975 3.94 1.474 5.354a.61.61 0 0 1-.864.701L9 14.95l-4.89 2.422a.61.61 0 0 1-.864-.701l1.474-5.354-3.978-3.94a.604.604 0 0 1 .375-1.03l4.83-.479L8.453.9a.614.614 0 0 1 1.093 0Z"
        />
    </svg>
);

export default V_StarIcon;
