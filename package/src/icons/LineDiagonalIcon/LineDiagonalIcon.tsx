import { IconProps } from "../../types"
import React from "react"

export default function LineDiagonalIconIcon({
  weight = "regular",
  className = "",
}: IconProps): React.ReactNode {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.21826171875 23.226853009458573"
          className={className}
        >
          <path
            d="              M0.7071 19.0691C-0.2359 20.0261 -0.2359 21.5571 0.7071 22.5141C1.6651 23.4571 3.1961 23.4711 4.1391 22.5141L22.5001 4.1531C23.4571 3.2091 23.4571 1.6641 22.5001 0.7071C21.5431 -0.2219 20.0261 -0.2499 19.0691 0.7071Z"
            fill="currentColor"
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.396252924231085 22.391138660962156"
          className={className}
        >
          <path
            d="              M0.5229 19.371C-0.1741 20.069 -0.1741 21.19 0.5229 21.873C1.2069 22.557 2.3279 22.571 3.0109 21.873L21.8789 3.006C22.5759 2.323 22.5619 1.201 21.8789 0.518C21.1949 -0.166 20.0739 -0.179 19.3899 0.518Z"
            fill="currentColor"
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.82861328125 22.832052613046287"
          className={className}
        >
          <path
            d="              M0.6155 19.2146C-0.2055 20.0486 -0.2055 21.3876 0.6155 22.2216C1.4495 23.0286 2.7755 23.0426 3.6095 22.2216L22.2035 3.6146C23.0375 2.7946 23.0375 1.4546 22.2035 0.6206C21.3825 -0.2004 20.0435 -0.2134 19.2225 0.6206Z"
            fill="currentColor"
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.671875 20.66845703125"
          className={className}
        >
          <path
            d="              M0.2465 19.2329C-0.0815 19.5609 -0.0815 20.0939 0.2465 20.4219C0.5745 20.7509 1.1215 20.7509 1.4495 20.4219L20.4255 1.4459C20.7535 1.1179 20.7535 0.5849 20.4255 0.2559C20.0975 -0.0851 19.5645 -0.0851 19.2225 0.2559Z"
            fill="currentColor"
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.866471722673197 21.861328125"
          className={className}
        >
          <path
            d="              M0.3948 19.5851C-0.1382 20.1041 -0.1252 20.9521 0.3948 21.4721C0.9148 21.9911 1.7618 21.9911 2.2818 21.4721L21.4768 2.2901C21.9968 1.7701 21.9968 0.9091 21.4768 0.3901C20.9438 -0.1299 20.0958 -0.1299 19.5768 0.3901Z"
            fill="currentColor"
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.5673828125 21.5673828125"
          className={className}
        >
          <path
            d="              M0.3179 19.6913C-0.1061 20.1143 -0.1061 20.8123 0.3179 21.2493C0.7419 21.6733 1.4529 21.6733 1.8769 21.2493L21.2499 1.8763C21.6729 1.4523 21.6729 0.7413 21.2499 0.3183C20.8259 -0.1057 20.1149 -0.1057 19.6909 0.3183Z"
            fill="currentColor"
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.09375 22.09716796875"
          className={className}
        >
          <path
            d="              M0.4515 19.4963C-0.1505 20.0843 -0.1505 21.0543 0.4515 21.6563C1.0395 22.2443 2.0095 22.2443 2.5975 21.6563L21.6425 2.5973C22.2445 2.0093 22.2445 1.0393 21.6425 0.4513C21.0545 -0.1507 20.0845 -0.1507 19.4965 0.4513Z"
            fill="currentColor"
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.492764124509765 19.4892578125"
          className={className}
        >
          <path
            d="              M0.1488 18.6242C-0.0562 18.8292 -0.0422 19.1442 0.1488 19.3352C0.3398 19.5402 0.6678 19.5402 0.8738 19.3352L19.3438 0.8652C19.5488 0.6592 19.5358 0.3592 19.3438 0.1542C19.1528 -0.0508 18.8248 -0.0508 18.6198 0.1542Z"
            fill="currentColor"
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.893172728881495 18.880859375"
          className={className}
        >
          <path
            d="              M0.0972 18.3132C-0.0388 18.4502 -0.0258 18.6412 0.0972 18.7782C0.2342 18.9152 0.4532 18.9152 0.5762 18.7782L18.8002 0.5672C18.9372 0.4302 18.9102 0.2252 18.8002 0.1022C18.6642 -0.0338 18.4452 -0.0338 18.3082 0.1022Z"
            fill="currentColor"
          />
        </svg>
      )
    default:
      return null
  }
}
