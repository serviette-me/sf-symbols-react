import { IconProps } from "../../types"

export default function ICircleFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.873046875 29.859375"
          className={className}
        >
          <path
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 21.6561C13.2347 21.6561 12.2637 20.5621 12.2637 18.7031V11.1561C12.2637 9.3101 13.2347 8.2171 14.9297 8.2171C16.6247 8.2171 17.6097 9.3101 17.6097 11.1561V18.7031C17.6097 20.5491 16.6247 21.6561 14.9297 21.6561Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.875 28.888671875"
          className={className}
        >
          <path
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 21.0406C13.2207 21.0406 12.5367 20.2346 12.5367 18.9216V9.8436C12.5367 8.5316 13.2207 7.7246 14.4377 7.7246C15.6547 7.7246 16.3377 8.5176 16.3377 9.8436V18.9216C16.3377 20.2476 15.6547 21.0406 14.4377 21.0406Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.408203125 29.408203125"
          className={className}
        >
          <path
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 21.3694C13.2207 21.3694 12.4007 20.4124 12.4007 18.8124V10.5414C12.4007 8.9414 13.2207 7.9844 14.6977 7.9844C16.1597 7.9844 17.0077 8.9414 17.0077 10.5414V18.8124C17.0077 20.4124 16.1597 21.3694 14.6977 21.3694Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.42578125 27.42578125"
          className={className}
        >
          <path
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.6987 20.057C13.1527 20.057 12.8377 19.66 12.8377 19.086V8.176C12.8377 7.602 13.1527 7.205 13.6987 7.205C14.2737 7.205 14.5877 7.574 14.5877 8.176V19.086C14.5877 19.688 14.2737 20.057 13.6987 20.057Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.24609375 28.24609375"
          className={className}
        >
          <path
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1097 20.6311C13.2067 20.6311 12.7147 20.0151 12.7147 19.0581V8.9821C12.7147 8.0251 13.2067 7.4101 14.1097 7.4101C15.0257 7.4101 15.5317 7.9981 15.5317 8.9821V19.0581C15.5317 20.0431 15.0257 20.6311 14.1097 20.6311Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.890625 27.890625"
          className={className}
        >
          <path
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9317 20.4124C13.1937 20.4124 12.8107 19.8784 12.8107 19.1274V8.5034C12.8107 7.7524 13.1937 7.2184 13.9317 7.2184C14.6697 7.2184 15.0797 7.7114 15.0797 8.5034V19.1274C15.0797 19.9204 14.6697 20.4124 13.9317 20.4124Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.51953125 28.51953125"
          className={className}
        >
          <path
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2457 20.8089C13.2067 20.8089 12.6327 20.1109 12.6327 19.0039V9.3519C12.6327 8.2439 13.2067 7.5469 14.2457 7.5469C15.2987 7.5469 15.8727 8.2169 15.8727 9.3519V19.0039C15.8727 20.1249 15.2987 20.8089 14.2457 20.8089Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.810546875 26.810546875"
          className={className}
        >
          <path
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.3987 19.6052C13.0837 19.6052 12.8787 19.3732 12.8787 19.0452V7.7522C12.8787 7.4102 13.0837 7.1912 13.3987 7.1912C13.7407 7.1912 13.9317 7.3962 13.9317 7.7522V19.0452C13.9317 19.3872 13.7407 19.6052 13.3987 19.6052Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.49609375 26.49609375"
          className={className}
        >
          <path
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 19.3591C13.0427 19.3591 12.8927 19.2091 12.8927 19.0171V7.5191C12.8927 7.3011 13.0427 7.1641 13.2477 7.1641C13.4667 7.1641 13.6037 7.3011 13.6037 7.5191V19.0171C13.6037 19.2091 13.4667 19.3591 13.2477 19.3591Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
