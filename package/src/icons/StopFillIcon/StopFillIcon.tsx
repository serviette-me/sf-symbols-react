import { IconProps } from "../../types"
import React from "react"

export default function StopFillIconIcon({
  weight = "regular",
  className = "",
}: IconProps): React.ReactNode {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.71875 24.705078125"
          className={className}
        >
          <path
            d="              M-0.0003 20.9728C-0.0003 23.2148 1.6267 24.7048 4.0747 24.7048H20.6307C23.0917 24.7048 24.7187 23.2148 24.7187 20.9728V3.7328C24.7187 1.4898 23.0917 -0.0002 20.6307 -0.0002H4.0747C1.6267 -0.0002 -0.0003 1.4898 -0.0003 3.7328Z"
            fill="currentColor"
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.501953125 23.48828125"
          className={className}
        >
          <path
            d="              M-0.0003 20.1252C-0.0003 22.1892 1.3807 23.4882 3.5687 23.4882H19.9197C22.1207 23.4882 23.5017 22.1892 23.5017 20.1252V3.3772C23.5017 1.2992 22.1207 0.0002 19.9197 0.0002H3.5687C1.3807 0.0002 -0.0003 1.2992 -0.0003 3.3772Z"
            fill="currentColor"
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.14453125 24.14453125"
          className={className}
        >
          <path
            d="              M-0.0003 20.5764C-0.0003 22.7504 1.5037 24.1444 3.8417 24.1444H20.3027C22.6267 24.1444 24.1447 22.7504 24.1447 20.5764V3.5684C24.1447 1.4084 22.6267 0.0004 20.3027 0.0004H3.8417C1.5037 0.0004 -0.0003 1.4084 -0.0003 3.5684Z"
            fill="currentColor"
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.779296875 21.779296875"
          className={className}
        >
          <path
            d="              M-0.0003 19.0036C-0.0003 20.7536 1.0387 21.7796 2.8027 21.7796H18.9627C20.7267 21.7796 21.7797 20.7536 21.7797 19.0036V2.7756C21.7797 1.0386 20.7267 -0.0004 18.9627 -0.0004H2.8027C1.0387 -0.0004 -0.0003 1.0386 -0.0003 2.7756Z"
            fill="currentColor"
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.72265625 22.72265625"
          className={className}
        >
          <path
            d="              M-0.0003 19.5784C-0.0003 21.5334 1.2307 22.7224 3.2537 22.7224H19.4687C21.4927 22.7224 22.7227 21.5334 22.7227 19.5784V3.1444C22.7227 1.1894 21.4927 0.0004 19.4687 0.0004H3.2537C1.2307 0.0004 -0.0003 1.1894 -0.0003 3.1444Z"
            fill="currentColor"
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.271484375 22.28515625"
          className={className}
        >
          <path
            d="              M-0.0003 19.2637C-0.0003 21.1637 1.1487 22.2847 3.0627 22.2847H19.2087C21.1367 22.2847 22.2717 21.1637 22.2717 19.2637V3.0217C22.2717 1.1207 21.1367 -0.0003 19.2087 -0.0003H3.0627C1.1487 -0.0003 -0.0003 1.1207 -0.0003 3.0217Z"
            fill="currentColor"
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.05078125 23.05078125"
          className={className}
        >
          <path
            d="              M-0.0003 19.8105C-0.0003 21.8205 1.2987 23.0505 3.3907 23.0505H19.6597C21.7517 23.0505 23.0507 21.8205 23.0507 19.8105V3.2405C23.0507 1.2305 21.7517 0.0005 19.6597 0.0005H3.3907C1.2987 0.0005 -0.0003 1.2305 -0.0003 3.2405Z"
            fill="currentColor"
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.109375 21.109375"
          className={className}
        >
          <path
            d="              M-0.0003 18.6618C-0.0003 20.1938 0.9157 21.1098 2.4607 21.1098H18.6487C20.1937 21.1098 21.1097 20.1938 21.1097 18.6618V2.4468C21.1097 0.9028 20.1937 -0.0002 18.6487 -0.0002H2.4607C0.9157 -0.0002 -0.0003 0.9028 -0.0003 2.4468Z"
            fill="currentColor"
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.767578125 20.78125"
          className={className}
        >
          <path
            d="              M-0.0003 18.4847C-0.0003 19.9197 0.8477 20.7817 2.2837 20.7817H18.4847C19.9197 20.7817 20.7677 19.9197 20.7677 18.4847V2.2967C20.7677 0.8477 19.9197 -0.0003 18.4847 -0.0003H2.2837C0.8477 -0.0003 -0.0003 0.8477 -0.0003 2.2967Z"
            fill="currentColor"
          />
        </svg>
      )
    default:
      return null
  }
}
