import { IconProps } from "../../types"

export default function CircleTophalfFilledIconIcon({
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
            d="              M29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1461 6.7127 29.8591 14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301ZM25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301Z"
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
            d="              M28.8747 14.4376C28.8747 6.5216 22.3667 -0.0004 14.4377 -0.0004C6.5217 -0.0004 -0.0003 6.5076 -0.0003 14.4376C-0.0003 22.3536 6.5217 28.8886 14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376ZM25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926C8.4357 25.2796 3.5957 20.4396 3.5957 14.4376Z"
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
            d="              M29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6174 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114ZM25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114Z"
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
            d="              M27.4257 13.713C27.4257 6.193 21.2187 0 13.7127 0C6.2067 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713ZM25.6617 13.713C25.6617 20.316 20.3297 25.662 13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713Z"
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
            d="              M28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1227 0.0001C6.3987 0.0001 -0.0003 6.3851 -0.0003 14.1231C-0.0003 21.8481 6.3987 28.2461 14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231ZM25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711C7.8337 25.4571 2.7757 20.3981 2.7757 14.1231Z"
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
            d="              M27.8907 13.9454C27.8907 6.3164 21.5737 0.0004 13.9457 0.0004C6.3297 0.0004 -0.0003 6.3024 -0.0003 13.9454C-0.0003 21.5464 6.3297 27.8904 13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454ZM25.5667 13.9454C25.5667 20.3984 20.3987 25.5804 13.9457 25.5664C7.4917 25.5524 2.3237 20.3844 2.3237 13.9454Z"
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
            d="              M28.5197 14.2599C28.5197 6.4529 22.0797 -0.0001 14.2597 -0.0001C6.4397 -0.0001 -0.0003 6.4399 -0.0003 14.2599C-0.0003 22.0669 6.4397 28.5199 14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599ZM25.3887 14.2599C25.3887 20.4259 20.4257 25.4019 14.2597 25.3889C8.0937 25.3749 3.1307 20.4259 3.1307 14.2599Z"
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
            d="              M26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.4117 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122ZM25.7717 13.4122C25.7717 20.2342 20.2347 25.7852 13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122Z"
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
            d="              M26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481ZM25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
