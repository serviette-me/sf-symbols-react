import { IconProps } from "../../types"

export default function OneCircleFillIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM16.0917 21.6421C14.6157 21.6421 13.6307 20.8911 13.6307 19.1131V12.7281H13.4807L12.3597 13.4671C11.8257 13.8221 11.5937 13.8771 11.1837 13.8771C10.2537 13.8771 9.5977 13.1661 9.5977 12.2231C9.5977 11.4571 9.9527 10.9651 10.6507 10.5001L12.7557 9.1331C13.8227 8.4491 14.6567 8.1891 15.7087 8.1891C17.3767 8.1891 18.5527 9.2421 18.5527 10.7051V19.1131C18.5527 20.8911 17.5407 21.6421 16.0917 21.6421Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM15.3947 21.1636C14.3147 21.1636 13.6037 20.5486 13.6037 19.2636V11.2106H13.4807L12.0177 12.1956C11.5797 12.4686 11.3887 12.5096 11.0737 12.5096C10.3907 12.5096 9.8847 11.9626 9.8847 11.2656C9.8847 10.7046 10.1307 10.3496 10.6367 10.0076L12.9607 8.4626C13.7817 7.9156 14.3827 7.7106 15.1757 7.7106C16.3927 7.7106 17.1987 8.4626 17.1987 9.6116V19.2636C17.1987 20.5486 16.4887 21.1636 15.3947 21.1636Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM15.7637 21.4234C14.4647 21.4234 13.6167 20.7404 13.6167 19.1954V12.0174H13.4807L12.1957 12.8794C11.7167 13.1934 11.4977 13.2484 11.1287 13.2484C10.3227 13.2484 9.7347 12.6054 9.7347 11.7854C9.7347 11.1154 10.0347 10.6774 10.6367 10.2814L12.8517 8.8184C13.8087 8.2034 14.5327 7.9704 15.4487 7.9704C16.9117 7.9704 17.9097 8.8864 17.9097 10.1994V19.1954C17.9097 20.7404 17.0487 21.4234 15.7637 21.4234Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM14.3967 20.248C13.8637 20.248 13.5347 19.879 13.5347 19.291V9.119H13.4527L11.2927 10.527C11.0607 10.678 10.9507 10.705 10.7867 10.705C10.4177 10.705 10.1307 10.391 10.1307 10.035C10.1307 9.748 10.2407 9.57 10.4867 9.393L13.1657 7.602C13.6307 7.273 13.9317 7.178 14.3417 7.178C14.9297 7.178 15.2847 7.533 15.2847 8.148V19.291C15.2847 19.879 14.9567 20.248 14.3967 20.248Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.9567 20.8361C14.1097 20.8361 13.5897 20.3161 13.5897 19.3461V10.2401H13.4937L11.7987 11.3611C11.4297 11.6071 11.2657 11.6351 11.0057 11.6351C10.4727 11.6351 10.0757 11.1831 10.0757 10.6501C10.0757 10.2131 10.2407 9.9531 10.6227 9.6931L13.0837 8.0251C13.7677 7.5601 14.2187 7.4101 14.8337 7.4101C15.7637 7.4101 16.3377 7.9711 16.3377 8.9001V19.3461C16.3377 20.3161 15.8187 20.8361 14.9567 20.8361Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM14.7107 20.6584C13.9997 20.6584 13.5897 20.1794 13.5897 19.3864V9.6934H13.4937L11.6757 10.8964C11.3477 11.1154 11.1977 11.1424 10.9787 11.1424C10.5277 11.1424 10.1717 10.7324 10.1717 10.2954C10.1717 9.9394 10.3087 9.7344 10.6097 9.5024L13.1527 7.7794C13.7537 7.3694 14.1227 7.2324 14.6567 7.2324C15.4077 7.2324 15.8457 7.6834 15.8457 8.5034V19.3864C15.8457 20.1794 15.4357 20.6584 14.7107 20.6584Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM15.1487 20.9729C14.2047 20.9729 13.6037 20.4119 13.6037 19.3049V10.6639H13.4807L11.8807 11.7169C11.4977 11.9769 11.3207 12.0179 11.0467 12.0179C10.4457 12.0179 9.9937 11.5119 9.9937 10.9239C9.9937 10.4319 10.1987 10.1309 10.6227 9.8299L13.0297 8.2169C13.7677 7.7109 14.2867 7.5329 14.9847 7.5329C16.0367 7.5329 16.7067 8.1899 16.7067 9.2149V19.3049C16.7067 20.4119 16.1057 20.9729 15.1487 20.9729Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.9997 19.7152C13.6857 19.7152 13.4667 19.4962 13.4667 19.1542V8.3672H13.3987L10.8007 10.0352C10.6917 10.1172 10.6227 10.1312 10.5277 10.1312C10.2817 10.1312 10.0757 9.9262 10.0757 9.6792C10.0757 9.5022 10.1447 9.3652 10.3227 9.2562L13.1797 7.3832C13.4937 7.1782 13.6717 7.1092 13.9317 7.1092C14.2867 7.1092 14.5197 7.3282 14.5197 7.6972V19.1542C14.5197 19.4962 14.3277 19.7152 13.9997 19.7152Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.7817 19.4281C13.5897 19.4281 13.4397 19.2771 13.4397 19.0861V7.9711H13.3707L10.5547 9.7891C10.5137 9.8161 10.4587 9.8301 10.3907 9.8301C10.1987 9.8301 10.0487 9.6801 10.0487 9.4881C10.0487 9.3511 10.1037 9.2561 10.2407 9.1741L13.1937 7.2601C13.4117 7.1091 13.5487 7.0551 13.7127 7.0551C13.9457 7.0551 14.1367 7.2191 14.1367 7.4511V19.0861C14.1367 19.2771 13.9997 19.4281 13.7817 19.4281Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}