import { IconProps } from "../../types"
import React from "react"

export default function MinusIconIcon({
  weight = "regular",
  className = "",
}: IconProps): React.ReactNode {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.240234375 5.837890625"
          className={className}
        >
          <path
            d="              M2.8577 5.8375H21.3827C22.9007 5.8375 24.2407 4.4985 24.2407 2.9125C24.2407 1.3265 22.9007 -0.0005 21.3827 -0.0005H2.8577C1.4217 -0.0005 -0.0003 1.3265 -0.0003 2.9125C-0.0003 4.4985 1.4217 5.8375 2.8577 5.8375Z"
            fill="currentColor"
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.40625 4.142578125"
          className={className}
        >
          <path
            d="              M2.0367 4.1429H21.3557C22.4497 4.1429 23.4067 3.1989 23.4067 2.0649C23.4067 0.9429 22.4497 -0.0001 21.3557 -0.0001H2.0367C0.9977 -0.0001 -0.0003 0.9429 -0.0003 2.0649C-0.0003 3.1989 0.9977 4.1429 2.0367 4.1429Z"
            fill="currentColor"
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.84375 5.03125"
          className={className}
        >
          <path
            d="              M2.4747 5.031H21.3687C22.6817 5.031 23.8437 3.883 23.8437 2.516C23.8437 1.148 22.6817 0 21.3687 0H2.4747C1.2167 0 -0.0003 1.148 -0.0003 2.516C-0.0003 3.883 1.2167 5.031 2.4747 5.031Z"
            fill="currentColor"
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.1484375 1.859375"
          className={className}
        >
          <path
            d="              M0.9297 1.8594H21.2327C21.7247 1.8594 22.1487 1.4354 22.1487 0.9294C22.1487 0.4234 21.7247 0.0004 21.2327 0.0004H0.9297C0.4237 0.0004 -0.0003 0.4234 -0.0003 0.9294C-0.0003 1.4354 0.4237 1.8594 0.9297 1.8594Z"
            fill="currentColor"
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.859375 3.048828125"
          className={className}
        >
          <path
            d="              M1.5177 3.049H21.3417C22.1617 3.049 22.8597 2.352 22.8597 1.518C22.8597 0.684 22.1617 0 21.3417 0H1.5177C0.7247 0 -0.0003 0.684 -0.0003 1.518C-0.0003 2.352 0.7247 3.049 1.5177 3.049Z"
            fill="currentColor"
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.55859375 2.447265625"
          className={className}
        >
          <path
            d="              M1.2167 2.4472H21.3417C21.9977 2.4472 22.5587 1.8862 22.5587 1.2172C22.5587 0.5472 21.9977 0.0002 21.3417 0.0002H1.2167C0.5607 0.0002 -0.0003 0.5472 -0.0003 1.2172C-0.0003 1.8862 0.5607 2.4472 1.2167 2.4472Z"
            fill="currentColor"
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.091796875 3.52734375"
          className={className}
        >
          <path
            d="              M1.7367 3.5271H21.3557C22.2847 3.5271 23.0917 2.7341 23.0917 1.7641C23.0917 0.8071 22.2847 0.0001 21.3557 0.0001H1.7367C0.8337 0.0001 -0.0003 0.8071 -0.0003 1.7641C-0.0003 2.7341 0.8337 3.5271 1.7367 3.5271Z"
            fill="currentColor"
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.615234375 1.06640625"
          className={className}
        >
          <path
            d="              M0.5337 1.066H21.0817C21.3687 1.066 21.6157 0.834 21.6157 0.533C21.6157 0.246 21.3687 0 21.0817 0H0.5337C0.2457 0 -0.0003 0.246 -0.0003 0.533C-0.0003 0.834 0.2457 1.066 0.5337 1.066Z"
            fill="currentColor"
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.341796875 0.669921875"
          className={className}
        >
          <path
            d="              M0.3277 0.6699H20.9997C21.1917 0.6699 21.3417 0.5199 21.3417 0.3279C21.3417 0.1509 21.1917 -0.0001 20.9997 -0.0001H0.3277C0.1507 -0.0001 -0.0003 0.1509 -0.0003 0.3279C-0.0003 0.5199 0.1507 0.6699 0.3277 0.6699Z"
            fill="currentColor"
          />
        </svg>
      )
    default:
      return null
  }
}
