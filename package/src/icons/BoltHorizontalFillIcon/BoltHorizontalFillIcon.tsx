import { IconProps } from "../../types"
import React from "react"

export default function BoltHorizontalFillIconIcon({
  weight = "regular",
  className = "",
}: IconProps): React.ReactNode {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.247321032295126 18.73046875"
          className={className}
        >
          <path
            d="              M0.8195 13.4125C-1.2995 15.9965 1.0115 19.1545 4.0875 17.5545L13.7265 12.5235L23.3105 18.0465C24.1305 18.5255 24.9095 18.7305 25.6485 18.7305C26.8375 18.7305 27.9315 18.1285 28.8745 16.9945L38.4315 5.3185C40.5365 2.7485 38.2535 -0.4105 35.1635 1.1755L25.5115 6.1935L15.9405 0.6975C15.1205 0.2185 14.3555 0.0005 13.6035 0.0005C12.4135 0.0005 11.3195 0.6155 10.3765 1.7505Z"
            fill="currentColor"
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.46165252816529 17.814453125"
          className={className}
        >
          <path
            d="              M0.6421 13.5486C-1.0669 15.6676 0.9291 17.9236 3.2121 16.6936L12.9871 11.3336L23.6651 17.2536C24.3351 17.6366 24.9641 17.8146 25.5521 17.8146C26.4681 17.8146 27.3021 17.3636 28.0401 16.4476L37.8561 4.2656C39.4561 2.2836 37.6381 -0.1504 35.2731 1.1076L25.4971 6.4666L14.8191 0.5606C14.1361 0.1776 13.5071 -0.0004 12.9191 -0.0004C12.0031 -0.0004 11.1831 0.4516 10.4441 1.3676Z"
            fill="currentColor"
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.877320308496884 18.306640625"
          className={className}
        >
          <path
            d="              M0.7369 13.48C-1.1901 15.846 0.9699 18.58 3.6769 17.144L13.3839 11.963L23.4739 17.678C24.2259 18.115 24.9369 18.307 25.5929 18.307C26.6589 18.307 27.6439 17.773 28.4779 16.734L38.1569 4.826C40.0299 2.543 37.9659 -0.287 35.2179 1.148L25.5109 6.33L15.4069 0.643C14.6549 0.205 13.9579 0 13.2739 0C12.2219 0 11.2509 0.547 10.4029 1.572Z"
            fill="currentColor"
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.70845244640932 16.296875"
          className={className}
        >
          <path
            d="              M0.3786 13.385C-0.6604 14.697 0.6386 15.818 1.8826 15.107L11.7396 9.42L23.9216 15.955C24.3456 16.174 24.7146 16.297 25.0566 16.297C25.5616 16.297 25.9996 16.064 26.4236 15.531L36.3766 2.926C37.2786 1.791 36.1986 0.41 34.8456 1.176L25.0286 6.877L12.8196 0.328C12.4096 0.109 12.0266 0 11.6856 0C11.1926 0 10.7556 0.232 10.3456 0.766Z"
            fill="currentColor"
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.95816085514629 17.240234375"
          className={className}
        >
          <path
            d="              M0.5323 13.6442C-0.9167 15.4632 0.8603 17.1442 2.6513 16.1462L12.5233 10.5962L23.8843 16.7482C24.4723 17.0762 25.0053 17.2402 25.4973 17.2402C26.2353 17.2402 26.9053 16.8852 27.5213 16.1192L37.4873 3.5962C38.7593 1.9962 37.2553 0.0272 35.3413 1.0662L25.4833 6.6442L14.1083 0.4922C13.5073 0.1642 12.9743 0.0002 12.4813 0.0002C11.7433 0.0002 11.1013 0.3552 10.4853 1.1352Z"
            fill="currentColor"
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.68232823855601 16.8984375"
          className={className}
        >
          <path
            d="              M0.4669 13.6718C-0.8321 15.3398 0.8359 16.6938 2.3399 15.8188L12.2519 10.1578L24.0099 16.4608C24.5569 16.7347 25.0219 16.8988 25.4729 16.8988C26.1019 16.8988 26.6759 16.6118 27.2229 15.9138L37.2849 3.1988C38.3789 1.8187 37.0389 0.1097 35.3849 1.0388L25.4729 6.7398L13.7009 0.4378C13.1679 0.1367 12.6759 -0.0003 12.2379 -0.0003C11.5959 -0.0003 11.0489 0.2868 10.5019 0.9847Z"
            fill="currentColor"
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.17578249954518 17.486328125"
          className={className}
        >
          <path
            d="              M0.5859 13.6039C-0.9861 15.5589 0.8869 17.4859 2.8969 16.3789L12.7269 10.9099L23.7869 16.9669C24.4159 17.3089 24.9899 17.4859 25.5229 17.4859C26.3299 17.4859 27.0819 17.0899 27.7519 16.2559L37.6499 3.8829C39.0589 2.1189 37.4179 -0.0411 35.3129 1.0799L25.4819 6.5759L14.4079 0.5199C13.7789 0.1639 13.2049 -0.0001 12.6719 -0.0001C11.8519 -0.0001 11.1269 0.3969 10.4569 1.2309Z"
            fill="currentColor"
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.42944688086255 15.50390625"
          className={className}
        >
          <path
            d="              M0.2595 12.9885C-0.4375 13.8635 0.3965 14.6565 1.2845 14.1505L11.0605 8.4355L23.8155 15.2855C24.0755 15.4215 24.3085 15.5035 24.5265 15.5035C24.8415 15.5035 25.1145 15.3535 25.3885 15.0115L35.1775 2.5565C35.8335 1.7505 35.1085 0.8065 34.1515 1.3535L24.4445 7.0685L11.6485 0.1915C11.4155 0.0545 11.1835 0.0005 10.9785 0.0005C10.6775 0.0005 10.3905 0.1365 10.1305 0.4645Z"
            fill="currentColor"
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.77423744249998 15.09375"
          className={className}
        >
          <path
            d="              M0.1896 12.7834C-0.3154 13.4394 0.2726 14.0684 0.9696 13.6584L10.7036 7.9294L23.7466 14.9434C23.9386 15.0394 24.1026 15.0934 24.2526 15.0934C24.4716 15.0934 24.6626 14.9984 24.8406 14.7524L34.5616 2.3784C35.0946 1.7224 34.5476 1.0114 33.7956 1.4494L24.1436 7.1644L11.0596 0.1094C10.9086 0.0274 10.7586 0.0004 10.6216 0.0004C10.4026 0.0004 10.1976 0.0954 10.0336 0.3144Z"
            fill="currentColor"
          />
        </svg>
      )
    default:
      return null
  }
}
