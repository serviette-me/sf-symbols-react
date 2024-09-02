import { IconProps } from "../../types"

export default function DivideIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.240234375 22.955078125"
          className={className}
        >
          <path
            d="              M12.0997 6.4391C13.9457 6.4391 15.4217 5.1681 15.4217 3.2541C15.4217 1.3811 13.9457 0.0001 12.0997 0.0001C10.2267 0.0001 8.8187 1.3811 8.8187 3.2541C8.8187 5.1681 10.2267 6.4391 12.0997 6.4391ZM2.8577 14.2321H21.3827C22.9007 14.2321 24.2407 12.8931 24.2407 11.3071C24.2407 9.7211 22.9007 8.3941 21.3827 8.3941H2.8577C1.4217 8.3941 -0.0003 9.7211 -0.0003 11.3071C-0.0003 12.8931 1.4217 14.2321 2.8577 14.2321ZM12.0997 22.9551C13.9457 22.9551 15.4217 21.6701 15.4217 19.7561C15.4217 17.8961 13.9457 16.5161 12.0997 16.5161C10.2267 16.5161 8.8187 17.8961 8.8187 19.7561C8.8187 21.6701 10.2267 22.9551 12.0997 22.9551Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.40625 21.533203125"
          className={className}
        >
          <path
            d="              M11.6897 5.2365C13.1797 5.2365 14.3687 4.1565 14.3687 2.6385C14.3687 1.1485 13.1797 0.0005 11.6897 0.0005C10.1997 0.0005 9.0367 1.1485 9.0367 2.6385C9.0367 4.1565 10.1997 5.2365 11.6897 5.2365ZM2.0367 12.7425H21.3557C22.4497 12.7425 23.4067 11.7985 23.4067 10.6645C23.4067 9.5425 22.4497 8.5995 21.3557 8.5995H2.0367C0.9977 8.5995 -0.0003 9.5425 -0.0003 10.6645C-0.0003 11.7985 0.9977 12.7425 2.0367 12.7425ZM11.6897 21.5335C13.1797 21.5335 14.3687 20.4395 14.3687 18.9355C14.3687 17.4455 13.1797 16.2965 11.6897 16.2965C10.1997 16.2965 9.0367 17.4455 9.0367 18.9355C9.0367 20.4395 10.1997 21.5335 11.6897 21.5335Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.84375 22.28515625"
          className={className}
        >
          <path
            d="              M11.9087 5.8653C13.5897 5.8653 14.9297 4.6893 14.9297 2.9673C14.9297 1.2713 13.5897 0.0003 11.9087 0.0003C10.2127 0.0003 8.9137 1.2713 8.9137 2.9673C8.9137 4.6893 10.2127 5.8653 11.9087 5.8653ZM2.4747 13.5213H21.3687C22.6817 13.5213 23.8437 12.3733 23.8437 11.0063C23.8437 9.6383 22.6817 8.4903 21.3687 8.4903H2.4747C1.2167 8.4903 -0.0003 9.6383 -0.0003 11.0063C-0.0003 12.3733 1.2167 13.5213 2.4747 13.5213ZM11.9087 22.2853C13.5897 22.2853 14.9297 21.0953 14.9297 19.3733C14.9297 17.6773 13.5897 16.4203 11.9087 16.4203C10.2127 16.4203 8.9137 17.6773 8.9137 19.3733C8.9137 21.0953 10.2127 22.2853 11.9087 22.2853Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.1484375 19.154296875"
          className={className}
        >
          <path
            d="              M11.0747 3.4724C12.0317 3.4724 12.8107 2.6794 12.8107 1.7504C12.8107 0.7934 12.0317 0.0004 11.0747 0.0004C10.1307 0.0004 9.3517 0.7934 9.3517 1.7504C9.3517 2.6794 10.1307 3.4724 11.0747 3.4724ZM0.9297 10.4864H21.2327C21.7247 10.4864 22.1487 10.0624 22.1487 9.5564C22.1487 9.0504 21.7247 8.6274 21.2327 8.6274H0.9297C0.4237 8.6274 -0.0003 9.0504 -0.0003 9.5564C-0.0003 10.0624 0.4237 10.4864 0.9297 10.4864ZM11.0747 19.1544C12.0317 19.1544 12.8107 18.3754 12.8107 17.4184C12.8107 16.4884 12.0317 15.6954 11.0747 15.6954C10.1307 15.6954 9.3517 16.4884 9.3517 17.4184C9.3517 18.3754 10.1307 19.1544 11.0747 19.1544Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.859375 20.6171875"
          className={className}
        >
          <path
            d="              M11.4297 4.4567C12.6737 4.4567 13.6857 3.4867 13.6857 2.2427C13.6857 0.9847 12.6737 -0.0003 11.4297 -0.0003C10.1857 -0.0003 9.1877 0.9847 9.1877 2.2427C9.1877 3.4867 10.1857 4.4567 11.4297 4.4567ZM1.5177 11.7717H21.3417C22.1617 11.7717 22.8597 11.0747 22.8597 10.2407C22.8597 9.4067 22.1617 8.7227 21.3417 8.7227H1.5177C0.7247 8.7227 -0.0003 9.4067 -0.0003 10.2407C-0.0003 11.0747 0.7247 11.7717 1.5177 11.7717ZM11.4297 20.6177C12.6737 20.6177 13.6857 19.6467 13.6857 18.3887C13.6857 17.1447 12.6737 16.1597 11.4297 16.1597C10.1857 16.1597 9.1877 17.1447 9.1877 18.3887C9.1877 19.6467 10.1857 20.6177 11.4297 20.6177Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.55859375 20.111328125"
          className={className}
        >
          <path
            d="              M11.2797 4.0332C12.4007 4.0332 13.3027 3.1172 13.3027 2.0232C13.3027 0.9022 12.4007 0.0002 11.2797 0.0002C10.1717 0.0002 9.2697 0.9022 9.2697 2.0232C9.2697 3.1172 10.1717 4.0332 11.2797 4.0332ZM1.2167 11.2382H21.3417C21.9977 11.2382 22.5587 10.6772 22.5587 10.0082C22.5587 9.3382 21.9977 8.7912 21.3417 8.7912H1.2167C0.5607 8.7912 -0.0003 9.3382 -0.0003 10.0082C-0.0003 10.6772 0.5607 11.2382 1.2167 11.2382ZM11.2797 20.1112C12.4007 20.1112 13.3027 19.2092 13.3027 18.0882C13.3027 16.9802 12.4007 16.0782 11.2797 16.0782C10.1717 16.0782 9.2697 16.9802 9.2697 18.0882C9.2697 19.2092 10.1717 20.1112 11.2797 20.1112Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.091796875 21.02734375"
          className={className}
        >
          <path
            d="              M11.5387 4.8121C12.8927 4.8121 13.9727 3.7871 13.9727 2.4201C13.9727 1.0661 12.8927 0.0001 11.5387 0.0001C10.1857 0.0001 9.1187 1.0661 9.1187 2.4201C9.1187 3.7871 10.1857 4.8121 11.5387 4.8121ZM1.7367 12.1951H21.3557C22.2847 12.1951 23.0917 11.4021 23.0917 10.4321C23.0917 9.4751 22.2847 8.6681 21.3557 8.6681H1.7367C0.8337 8.6681 -0.0003 9.4751 -0.0003 10.4321C-0.0003 11.4021 0.8337 12.1951 1.7367 12.1951ZM11.5387 21.0271C12.8927 21.0271 13.9727 20.0021 13.9727 18.6351C13.9727 17.2811 12.8927 16.2281 11.5387 16.2281C10.1857 16.2281 9.1187 17.2811 9.1187 18.6351C9.1187 20.0021 10.1857 21.0271 11.5387 21.0271Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.615234375 17.8828125"
          className={className}
        >
          <path
            d="              M10.8007 2.7075C11.5387 2.7075 12.1677 2.0915 12.1677 1.3805C12.1677 0.6425 11.5387 0.0005 10.8007 0.0005C10.0767 0.0005 9.4607 0.6425 9.4607 1.3805C9.4607 2.0915 10.0767 2.7075 10.8007 2.7075ZM0.5337 9.4605H21.0817C21.3687 9.4605 21.6157 9.2285 21.6157 8.9275C21.6157 8.6405 21.3687 8.3945 21.0817 8.3945H0.5337C0.2457 8.3945 -0.0003 8.6405 -0.0003 8.9275C-0.0003 9.2285 0.2457 9.4605 0.5337 9.4605ZM10.8007 17.8825C11.5387 17.8825 12.1677 17.2535 12.1677 16.5155C12.1677 15.8185 11.5387 15.1625 10.8007 15.1625C10.0767 15.1625 9.4607 15.8185 9.4607 16.5155C9.4607 17.2535 10.0767 17.8825 10.8007 17.8825Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.341796875 17.212890625"
          className={className}
        >
          <path
            d="              M10.6637 2.3244C11.2927 2.3244 11.8397 1.7774 11.8397 1.1754C11.8397 0.5604 11.2927 0.0004 10.6637 0.0004C10.0487 0.0004 9.5157 0.5604 9.5157 1.1754C9.5157 1.7774 10.0487 2.3244 10.6637 2.3244ZM0.3277 8.9414H20.9997C21.1917 8.9414 21.3417 8.7914 21.3417 8.5994C21.3417 8.4224 21.1917 8.2714 20.9997 8.2714H0.3277C0.1507 8.2714 -0.0003 8.4224 -0.0003 8.5994C-0.0003 8.7914 0.1507 8.9414 0.3277 8.9414ZM10.6637 17.2134C11.2927 17.2134 11.8397 16.6794 11.8397 16.0504C11.8397 15.4634 11.2927 14.8884 10.6637 14.8884C10.0487 14.8884 9.5157 15.4634 9.5157 16.0504C9.5157 16.6794 10.0487 17.2134 10.6637 17.2134Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
