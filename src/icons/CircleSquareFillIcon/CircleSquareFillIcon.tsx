import { IconProps } from "../../types"

export default function CircleSquareFillIconIcon({
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
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM13.8637 20.6993C9.9527 20.6993 6.7127 17.4453 6.7127 13.5493C6.7127 9.6383 9.9397 6.3983 13.8637 6.3983C17.8147 6.3983 20.9997 9.5973 20.9997 13.5493C20.9997 17.4723 17.7737 20.6993 13.8637 20.6993Z"
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
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM13.2477 20.0427C9.4477 20.0427 6.2757 16.8707 6.2757 13.0707C6.2757 9.2557 9.4337 6.0977 13.2477 6.0977C17.0627 6.0977 20.2207 9.2557 20.2207 13.0707C20.2207 16.8847 17.0627 20.0427 13.2477 20.0427Z"
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
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM13.5767 20.3985C9.7207 20.3985 6.5077 17.1855 6.5077 13.3305C6.5077 9.4605 9.7067 6.2615 13.5767 6.2615C17.4587 6.2615 20.6307 9.4475 20.6307 13.3305C20.6307 17.1995 17.4457 20.3985 13.5767 20.3985Z"
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
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM12.4957 19.3185C8.7367 19.3185 5.5507 16.1325 5.5507 12.3735C5.5507 8.5995 8.7087 5.4275 12.4957 5.4275C16.2557 5.4275 19.4417 8.5995 19.4417 12.3735C19.4417 16.1465 16.2837 19.3185 12.4957 19.3185Z"
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
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM12.8657 19.6193C9.1327 19.6193 6.0017 16.4883 6.0017 12.7563C6.0017 9.0093 9.1187 5.8923 12.8657 5.8923C16.5977 5.8923 19.7287 9.0233 19.7287 12.7563C19.7287 16.5023 16.6117 19.6193 12.8657 19.6193Z"
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
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM12.6327 19.3865C8.9547 19.3865 5.8377 16.2695 5.8377 12.5785C5.8377 8.8725 8.9277 5.7695 12.6327 5.7695C16.3247 5.7695 19.4417 8.8865 19.4417 12.5785C19.4417 16.2835 16.3517 19.3865 12.6327 19.3865Z"
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
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM13.0297 19.811C9.2697 19.811 6.1117 16.652 6.1117 12.893C6.1117 9.119 9.2557 5.975 13.0297 5.975C16.8027 5.975 19.9337 9.119 19.9337 12.893C19.9337 16.666 16.8027 19.811 13.0297 19.811Z"
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
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM12.3047 19.2224C8.4357 19.2224 5.1677 15.9554 5.1677 12.0864C5.1677 8.2034 8.4217 4.9354 12.3047 4.9354C16.1737 4.9354 19.4417 8.2164 19.4417 12.0864C19.4417 15.9554 16.1877 19.2224 12.3047 19.2224Z"
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
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM12.2087 19.168C8.2987 19.168 4.9767 15.846 4.9767 11.936C4.9767 8.012 8.2717 4.689 12.2087 4.689C16.1187 4.689 19.4417 8.012 19.4417 11.936C19.4417 15.846 16.1327 19.168 12.2087 19.168Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}