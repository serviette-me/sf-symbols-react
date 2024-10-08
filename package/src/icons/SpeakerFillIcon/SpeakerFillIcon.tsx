import { IconProps } from "../../types"
import React from "react"

export default function SpeakerFillIconIcon({
  weight = "regular",
  className = "",
}: IconProps): React.ReactNode {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.716796875 26.00390625"
          className={className}
        >
          <path
            d="              M15.9692 26.0044C17.5132 26.0044 18.7172 24.8144 18.7172 23.2554V2.7614C18.7172 1.2034 17.5132 0.0004 15.9552 0.0004C15.0252 0.0004 14.2462 0.3414 13.2622 1.2574L8.0252 6.0974C7.9572 6.1524 7.9022 6.1934 7.8202 6.1934H4.1292C1.4632 6.1934 0.0002 7.7244 0.0002 10.4864V15.5174C0.0002 18.2794 1.4632 19.8244 4.1292 19.8244H7.8062C7.8752 19.8244 7.9432 19.8244 8.0122 19.8794L13.2622 24.7594C14.2052 25.6344 14.9572 26.0044 15.9692 26.0044Z"
            fill="currentColor"
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.486328125 25.07421875"
          className={className}
        >
          <path
            d="              M15.3533 25.0745C16.5703 25.0745 17.4863 24.1445 17.4863 22.9275V2.1875C17.4863 0.9705 16.5703 -0.0005 15.3263 -0.0005C14.5473 -0.0005 13.9313 0.3145 13.0973 1.1075L7.5603 6.2615C7.4923 6.3305 7.3963 6.3715 7.3003 6.3715H3.4863C1.2303 6.3715 0.0003 7.6565 0.0003 10.0215V15.0805C0.0003 17.4455 1.2303 18.7165 3.4863 18.7165H7.2873C7.3963 18.7165 7.4783 18.7445 7.5603 18.8125L13.0973 24.0075C13.8773 24.7465 14.5193 25.0745 15.3533 25.0745Z"
            fill="currentColor"
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.12890625 25.56640625"
          className={className}
        >
          <path
            d="              M15.6676 25.5666C17.0626 25.5666 18.1286 24.4996 18.1286 23.1056V2.4886C18.1286 1.0936 17.0626 -0.0004 15.6546 -0.0004C14.7926 -0.0004 14.0956 0.3276 13.1796 1.1896L7.8066 6.1796C7.7246 6.2346 7.6566 6.2756 7.5746 6.2756H3.8286C1.3536 6.2756 -0.0004 7.6976 -0.0004 10.2676V15.3126C-0.0004 17.8826 1.3536 19.3046 3.8286 19.3046H7.5606C7.6426 19.3046 7.7106 19.3186 7.7926 19.3726L13.1796 24.4046C14.0406 25.2106 14.7516 25.5666 15.6676 25.5666Z"
            fill="currentColor"
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 15.83203125 23.611328125"
          className={className}
        >
          <path
            d="              M14.5465 23.6109C15.3265 23.6109 15.8325 23.0509 15.8325 22.2849V1.3809C15.8325 0.6149 15.3265 -0.0001 14.5335 -0.0001C13.9725 -0.0001 13.5895 0.2459 13.0425 0.7659L7.0685 6.4529C6.9585 6.5629 6.8225 6.6039 6.6585 6.6039H2.5835C0.9705 6.6039 0.0005 7.5879 0.0005 9.2699V14.4239C0.0005 16.1059 0.9705 17.0899 2.5835 17.0899H6.6585C6.8225 17.0899 6.9585 17.1309 7.0685 17.2399L13.0425 22.8999C13.5355 23.3789 14.0005 23.6109 14.5465 23.6109Z"
            fill="currentColor"
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16.720703125 24.458984375"
          className={className}
        >
          <path
            d="              M14.9574 24.4588C15.9684 24.4588 16.7204 23.7208 16.7204 22.7087V1.8317C16.7204 0.8208 15.9684 -0.0003 14.9294 -0.0003C14.2464 -0.0003 13.7404 0.2868 13.0024 0.9978L7.2734 6.3707C7.1914 6.4398 7.0824 6.4808 6.9594 6.4808H3.0894C1.0804 6.4808 0.0004 7.5878 0.0004 9.7068V14.7928C0.0004 16.8988 1.0804 18.0198 3.0894 18.0198H6.9594C7.0824 18.0198 7.1914 18.0468 7.2734 18.1288L13.0024 23.5298C13.6854 24.1858 14.2594 24.4588 14.9574 24.4588Z"
            fill="currentColor"
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16.283203125 24.1171875"
          className={className}
        >
          <path
            d="              M14.7381 24.117C15.6411 24.117 16.2831 23.475 16.2831 22.586V1.613C16.2831 0.725 15.6411 0 14.7111 0C14.0821 0 13.6441 0.273 12.9471 0.943L7.1231 6.412C7.0271 6.494 6.9181 6.535 6.7811 6.535H2.8571C1.0121 6.535 0.0001 7.561 0.0001 9.529V14.615C0.0001 16.598 1.0121 17.609 2.8571 17.609H6.7811C6.9181 17.609 7.0271 17.65 7.1231 17.732L12.9471 23.256C13.5761 23.857 14.1091 24.117 14.7381 24.117Z"
            fill="currentColor"
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.048828125 24.71875"
          className={className}
        >
          <path
            d="              M15.135 24.7188C16.229 24.7188 17.049 23.8988 17.049 22.7908V1.9828C17.049 0.8748 16.229 -0.0002 15.107 -0.0002C14.369 -0.0002 13.836 0.3008 13.043 1.0388L7.396 6.3168C7.328 6.3848 7.219 6.4258 7.109 6.4258H3.268C1.148 6.4258 0 7.6148 0 9.8438V14.9028C0 17.1308 1.148 18.3068 3.268 18.3068H7.096C7.219 18.3068 7.314 18.3478 7.396 18.4158L13.043 23.7348C13.768 24.4178 14.369 24.7188 15.135 24.7188Z"
            fill="currentColor"
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 15.23046875 22.94140625"
          className={className}
        >
          <path
            d="              M14.2733 22.9418C14.8883 22.9418 15.2303 22.4898 15.2303 21.9028V1.0668C15.2303 0.4788 14.8883 -0.0002 14.2733 -0.0002C13.8493 -0.0002 13.5083 0.2188 13.1663 0.5468L6.9863 6.5078C6.8633 6.6308 6.6993 6.6858 6.4803 6.6858H2.2013C0.9293 6.6858 0.0003 7.6148 0.0003 8.9138V14.1778C0.0003 15.4628 0.9293 16.3928 2.2013 16.3928H6.4803C6.6993 16.3928 6.8633 16.4468 6.9863 16.5838L13.1663 22.4078C13.4943 22.7368 13.8493 22.9418 14.2733 22.9418Z"
            fill="currentColor"
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14.9296875 22.5859375"
          className={className}
        >
          <path
            d="              M14.1503 22.5861C14.6833 22.5861 14.9293 22.1891 14.9293 21.6841V0.8891C14.9293 0.3961 14.6833 0.0001 14.1503 0.0001C13.7813 0.0001 13.4803 0.1911 13.2343 0.4241L6.9593 6.5211C6.8223 6.6721 6.6443 6.7131 6.3983 6.7131H2.0093C0.9163 6.7131 0.0003 7.6291 0.0003 8.7231V14.0271C0.0003 15.1211 0.9163 16.0231 2.0093 16.0231H6.3983C6.6443 16.0231 6.8223 16.0921 6.9593 16.2281L13.2343 22.1621C13.4803 22.3941 13.7813 22.5861 14.1503 22.5861Z"
            fill="currentColor"
          />
        </svg>
      )
    default:
      return null
  }
}
