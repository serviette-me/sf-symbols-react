import { IconProps } from "../../types"
import React from "react"

export default function ButtonHorizontalFillIconIcon({
  weight = "regular",
  className = "",
}: IconProps): React.ReactNode {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.701171875 27.0703125"
          className={className}
        >
          <path
            d="              M11.0467 27.0706H22.6547C31.0217 27.0706 33.7017 24.2946 33.7017 15.7636V11.3066C33.7017 2.7756 31.0217 -0.0004 22.6547 -0.0004H11.0467C2.6937 -0.0004 -0.0003 2.7756 -0.0003 11.3066V15.7636C-0.0003 24.2946 2.6937 27.0706 11.0467 27.0706Z"
            fill="currentColor"
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.9765625 25.798828125"
          className={className}
        >
          <path
            d="              M10.9097 25.7987H22.0667C30.2017 25.7987 32.9767 22.9417 32.9767 15.0117V10.7867C32.9767 2.8577 30.2017 -0.0003 22.0667 -0.0003H10.9097C2.7617 -0.0003 -0.0003 2.8577 -0.0003 10.7867V15.0117C-0.0003 22.9417 2.7617 25.7987 10.9097 25.7987Z"
            fill="currentColor"
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.359375 26.46875"
          className={className}
        >
          <path
            d="              M10.9787 26.4688H22.3807C30.6387 26.4688 33.3597 23.6528 33.3597 15.4078V11.0608C33.3597 2.8168 30.6387 -0.0002 22.3807 -0.0002H10.9787C2.7207 -0.0002 -0.0003 2.8168 -0.0003 11.0608V15.4078C-0.0003 23.6528 2.7207 26.4688 10.9787 26.4688Z"
            fill="currentColor"
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.5 23.953125"
          className={className}
        >
          <path
            d="              M10.2127 23.9527H21.2737C28.9297 23.9527 31.4997 21.0817 31.4997 14.0687V9.8847C31.4997 2.8577 28.9297 -0.0003 21.2737 -0.0003H10.2127C2.5707 -0.0003 -0.0003 2.8577 -0.0003 9.8847V14.0687C-0.0003 21.0817 2.5707 23.9527 10.2127 23.9527Z"
            fill="currentColor"
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.498046875 24.9921875"
          className={className}
        >
          <path
            d="              M10.8147 24.9922H21.6837C29.6817 24.9922 32.4977 22.0802 32.4977 14.5472V10.4592C32.4977 2.9122 29.6817 0.0002 21.6837 0.0002H10.8147C2.8167 0.0002 -0.0003 2.9122 -0.0003 10.4592V14.5472C-0.0003 22.0802 2.8167 24.9922 10.8147 24.9922Z"
            fill="currentColor"
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.23828125 24.541015625"
          className={className}
        >
          <path
            d="              M10.7737 24.5414H21.4647C29.3947 24.5414 32.2387 21.6014 32.2387 14.2874V10.2674C32.2387 2.9534 29.3947 0.0004 21.4647 0.0004H10.7737C2.8437 0.0004 -0.0003 2.9534 -0.0003 10.2674V14.2874C-0.0003 21.6014 2.8437 24.5414 10.7737 24.5414Z"
            fill="currentColor"
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.703125 25.34765625"
          className={className}
        >
          <path
            d="              M10.8557 25.3479H21.8477C29.9137 25.3479 32.7027 22.4489 32.7027 14.7519V10.5959C32.7027 2.8989 29.9137 -0.0001 21.8477 -0.0001H10.8557C2.7887 -0.0001 -0.0003 2.8989 -0.0003 10.5959V14.7519C-0.0003 22.4489 2.7887 25.3479 10.8557 25.3479Z"
            fill="currentColor"
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.515625 23.16015625"
          className={className}
        >
          <path
            d="              M9.4887 23.1602H21.0277C28.3147 23.1602 30.5157 20.4122 30.5157 13.7812V9.3792C30.5157 2.7342 28.3147 0.0002 21.0277 0.0002H9.4887C2.2017 0.0002 -0.0003 2.7342 -0.0003 9.3792V13.7812C-0.0003 20.4122 2.2017 23.1602 9.4887 23.1602Z"
            fill="currentColor"
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.009765625 22.75"
          className={className}
        >
          <path
            d="              M9.1187 22.7501H20.8907C27.9997 22.7501 30.0097 20.0701 30.0097 13.6311V9.1191C30.0097 2.6801 27.9997 0.0001 20.8907 0.0001H9.1187C2.0097 0.0001 -0.0003 2.6801 -0.0003 9.1191V13.6311C-0.0003 20.0701 2.0097 22.7501 9.1187 22.7501Z"
            fill="currentColor"
          />
        </svg>
      )
    default:
      return null
  }
}
