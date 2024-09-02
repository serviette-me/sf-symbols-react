import { IconProps } from "../../types"

export default function PSquareFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.111328125 27.111328125"
          className={className}
        >
          <path
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM10.4317 20.2753C8.8867 20.2753 7.9977 19.2912 7.9977 17.5953V9.8852C7.9977 8.0663 8.9137 7.1232 10.7327 7.1232H14.4517C17.6097 7.1232 19.5777 9.0513 19.5777 12.0993C19.5777 15.1763 17.5547 17.1172 14.3827 17.1172H12.8657V17.5953C12.8657 19.2773 11.9357 20.2753 10.4317 20.2753ZM12.8657 13.6723H13.7407C14.6697 13.6723 15.1077 13.1663 15.1077 12.1133C15.1077 11.0603 14.6837 10.5683 13.7407 10.5683H12.8657Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.140625 26.140625"
          className={className}
        >
          <path
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM9.9937 19.6597C8.8597 19.6597 8.2307 18.9077 8.2307 17.6777V8.5857C8.2307 7.3007 8.8727 6.5627 10.1447 6.5627H13.9727C16.9257 6.5627 18.8267 8.4077 18.8267 11.2247C18.8267 14.0687 16.8987 15.9007 13.9317 15.9007H11.7847V17.6777C11.7847 18.9077 11.1287 19.6597 9.9937 19.6597ZM11.7847 13.3167H13.4667C14.7517 13.3167 15.4767 12.5647 15.4767 11.2387C15.4767 9.8987 14.7517 9.1597 13.4667 9.1597H11.7847Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.66015625 26.66015625"
          className={className}
        >
          <path
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM10.2267 19.9885C8.8727 19.9885 8.1077 19.1135 8.1077 17.6505V9.2835C8.1077 7.7105 8.9007 6.8635 10.4587 6.8635H14.2327C17.2817 6.8635 19.2227 8.7495 19.2227 11.7035C19.2227 14.6565 17.2537 16.5565 14.1777 16.5565H12.3597V17.6505C12.3597 19.1135 11.5527 19.9885 10.2267 19.9885ZM12.3597 13.5075H13.6177C14.7107 13.5075 15.2717 12.8925 15.2717 11.7165C15.2717 10.5135 14.7107 9.9125 13.6177 9.9125H12.3597Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.759765625 24.759765625"
          className={className}
        >
          <path
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM9.3927 18.7035C8.8317 18.7035 8.5177 18.3065 8.5177 17.7325V6.9595C8.5177 6.3845 8.8187 5.9885 9.3657 5.9885H13.2617C15.7777 5.9885 17.5277 7.6695 17.5277 10.0895C17.5277 12.5235 15.8047 14.1915 13.2477 14.1915H10.2677V17.7325C10.2677 18.3205 9.9527 18.7035 9.3927 18.7035ZM10.2677 12.8105H13.0707C14.7107 12.8105 15.8047 11.7305 15.8047 10.0895C15.8047 8.4495 14.7107 7.3695 13.0707 7.3695H10.2677Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.525390625 25.525390625"
          className={className}
        >
          <path
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM9.7207 19.2503C8.8457 19.2503 8.3677 18.6483 8.3677 17.7183V7.7523C8.3677 6.8083 8.8457 6.2073 9.7757 6.2073H13.6717C16.4747 6.2073 18.3477 7.9983 18.3477 10.6643C18.3477 13.3573 16.4887 15.1213 13.6447 15.1213H11.1017V17.7183C11.1017 18.6623 10.6097 19.2503 9.7207 19.2503ZM11.1017 13.0843H13.2757C14.8067 13.0843 15.7087 12.1813 15.7087 10.6643C15.7087 9.1603 14.7927 8.2443 13.2757 8.2443H11.1017Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.169921875 25.169921875"
          className={className}
        >
          <path
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM9.5707 19.0315C8.8457 19.0315 8.4497 18.4975 8.4497 17.7465V7.2875C8.4497 6.5215 8.8317 6.0015 9.5707 6.0015H13.4937C16.2287 6.0015 18.0877 7.7515 18.0877 10.3495C18.0877 12.9475 16.2557 14.6695 13.4807 14.6695H10.7187V17.7465C10.7187 18.5255 10.3227 19.0315 9.5707 19.0315ZM10.7187 12.9475H13.1797C14.8337 12.9475 15.8457 11.9495 15.8457 10.3495C15.8457 8.7365 14.8207 7.7385 13.1797 7.7385H10.7187Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.78515625 25.78515625"
          className={className}
        >
          <path
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM9.8437 19.428C8.8597 19.428 8.3127 18.758 8.3127 17.705V8.121C8.3127 7.027 8.8597 6.357 9.9397 6.357H13.7947C16.6657 6.357 18.5527 8.176 18.5527 10.91C18.5527 13.658 16.6657 15.463 13.7677 15.463H11.4027V17.705C11.4027 18.771 10.8277 19.428 9.8437 19.428ZM11.4027 13.18H13.3577C14.7797 13.18 15.6137 12.346 15.6137 10.91C15.6137 9.475 14.7797 8.641 13.3577 8.641H11.4027Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.19921875 24.19921875"
          className={className}
        >
          <path
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM9.1467 18.2654C8.8187 18.2654 8.6137 18.0334 8.6137 17.7054V6.5214C8.6137 6.1794 8.7907 5.9474 9.1057 5.9474H12.9607C15.1897 5.9474 16.8027 7.5474 16.8027 9.7484C16.8027 11.9634 15.2027 13.5354 12.9607 13.5354H9.6657V17.7054C9.6657 18.0334 9.4747 18.2654 9.1467 18.2654ZM9.6657 12.6194H12.9197C14.5607 12.6194 15.7497 11.4164 15.7497 9.7484C15.7497 8.0664 14.5747 6.8634 12.9197 6.8634H9.6657Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.92578125 23.912109375"
          className={className}
        >
          <path
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM9.0097 18.033C8.8187 18.033 8.6677 17.883 8.6677 17.691V6.289C8.6677 6.084 8.7777 5.934 8.9827 5.934H12.7967C14.8887 5.934 16.4337 7.479 16.4337 9.557C16.4337 11.662 14.9027 13.193 12.7967 13.193H9.3657V17.691C9.3657 17.883 9.2287 18.033 9.0097 18.033ZM9.3657 12.523H12.8377C14.4787 12.523 15.7227 11.252 15.7227 9.557C15.7227 7.861 14.5057 6.604 12.8377 6.604H9.3657Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
