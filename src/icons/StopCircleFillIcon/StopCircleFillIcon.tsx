import { IconProps } from "../../types"

export default function StopCircleFillIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM11.3617 20.2211C10.3087 20.2211 9.6117 19.5921 9.6117 18.6351V11.1971C9.6117 10.2401 10.3087 9.5981 11.3617 9.5981H18.4847C19.5507 9.5981 20.2477 10.2401 20.2477 11.1971V18.6351C20.2477 19.5921 19.5507 20.2211 18.4847 20.2211Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM10.8007 19.6606C9.8297 19.6606 9.2147 19.0856 9.2147 18.1696V10.7046C9.2147 9.7886 9.8297 9.2146 10.8007 9.2146H18.0737C19.0447 9.2146 19.6597 9.7886 19.6597 10.7046V18.1696C19.6597 19.0856 19.0447 19.6606 18.0737 19.6606Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM11.1017 19.9614C10.0757 19.9614 9.4197 19.3594 9.4197 18.4164V10.9644C9.4197 10.0354 10.0757 9.4204 11.1017 9.4204H18.2927C19.3047 9.4204 19.9747 10.0354 19.9747 10.9644V18.4164C19.9747 19.3594 19.3047 19.9614 18.2927 19.9614Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM9.9667 18.758C9.1597 18.758 8.6677 18.266 8.6677 17.473V9.953C8.6677 9.146 9.1597 8.668 9.9667 8.668H17.4587C18.2657 8.668 18.7577 9.146 18.7577 9.953V17.473C18.7577 18.266 18.2657 18.758 17.4587 18.758Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM10.4317 19.2771C9.5157 19.2771 8.9547 18.7441 8.9547 17.8551V10.3771C8.9547 9.5021 9.5157 8.9551 10.4317 8.9551H17.8147C18.7307 8.9551 19.2907 9.5021 19.2907 10.3771V17.8551C19.2907 18.7441 18.7307 19.2771 17.8147 19.2771Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM10.2267 19.0724C9.3517 19.0724 8.8187 18.5524 8.8187 17.6914V10.1994C8.8187 9.3244 9.3517 8.8184 10.2267 8.8184H17.6637C18.5527 8.8184 19.0727 9.3244 19.0727 10.1994V17.6914C19.0727 18.5524 18.5527 19.0724 17.6637 19.0724Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM10.5957 19.4419C9.6527 19.4419 9.0647 18.8949 9.0647 17.9919V10.5269C9.0647 9.6249 9.6527 9.0649 10.5957 9.0649H17.9237C18.8667 9.0649 19.4417 9.6249 19.4417 10.5269V17.9919C19.4417 18.8949 18.8667 19.4419 17.9237 19.4419Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM9.6387 18.3342C8.9277 18.3342 8.4907 17.8962 8.4907 17.1852V9.6382C8.4907 8.9282 8.9277 8.4902 9.6387 8.4902H17.1857C17.8827 8.4902 18.3337 8.9282 18.3337 9.6382V17.1852C18.3337 17.8962 17.8827 18.3342 17.1857 18.3342Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM9.4607 18.1151C8.8047 18.1151 8.3807 17.6911 8.3807 17.0351V9.4611C8.3807 8.8051 8.8047 8.3811 9.4607 8.3811H17.0347C17.6917 8.3811 18.1157 8.8051 18.1157 9.4611V17.0351C18.1157 17.6911 17.6917 18.1151 17.0347 18.1151Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}