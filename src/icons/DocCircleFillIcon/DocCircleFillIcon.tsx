import { IconProps } from "../../types"

export default function DocCircleFillIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM11.5527 22.2711C9.8987 22.2711 8.9277 21.3141 8.9277 19.6461V9.8711C8.9277 8.2031 9.8987 7.2461 11.5527 7.2461H14.3967V13.0161C14.3967 13.7811 14.8067 14.1911 15.5587 14.1911H21.3147V19.6461C21.3147 21.3141 20.3577 22.2711 18.6897 22.2711ZM16.1737 12.8651C15.8727 12.8651 15.7087 12.7151 15.7087 12.4001V7.2871C16.1187 7.3011 16.5157 7.6561 16.9527 8.0941L20.4527 11.5801C20.9177 12.0451 21.2597 12.4551 21.2737 12.8651Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM11.0737 21.9156C9.4607 21.9156 8.5857 21.0406 8.5857 19.4136V9.1196C8.5857 7.5056 9.4607 6.6176 11.0737 6.6176H13.8357V12.3456C13.8357 13.2206 14.2737 13.6446 15.1347 13.6446H20.8087V19.4136C20.8087 21.0276 19.9337 21.9156 18.3207 21.9156ZM15.5037 12.4136C15.2167 12.4136 15.0667 12.2636 15.0667 11.9766V6.6856C15.4217 6.7126 15.7777 6.9996 16.1737 7.3966L20.0157 11.2796C20.4257 11.6896 20.7127 12.0446 20.7407 12.4136Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM11.3337 22.1074C9.6937 22.1074 8.7777 21.1914 8.7777 19.5504V9.5154C8.7777 7.8884 9.6937 6.9594 11.3337 6.9594H14.1367V12.7014C14.1367 13.5214 14.5467 13.9454 15.3667 13.9454H21.0817V19.5504C21.0817 21.1774 20.1527 22.1074 18.5257 22.1074ZM15.8597 12.6604C15.5587 12.6604 15.4077 12.5094 15.4077 12.2094V7.0134C15.7907 7.0274 16.1737 7.3554 16.5837 7.7794L20.2477 11.4434C20.6857 11.8944 20.9997 12.2634 21.0277 12.6604Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM10.3497 21.137C8.8867 21.137 8.1617 20.398 8.1617 18.922V8.039C8.1617 6.576 8.9137 5.824 10.3497 5.824H13.0977V11.361C13.0977 12.25 13.5217 12.674 14.3967 12.674H19.8927V18.922C19.8927 20.371 19.1547 21.137 17.6917 21.137ZM14.5467 11.676C14.2457 11.676 14.0817 11.512 14.0817 11.211V5.92C14.3417 5.961 14.5877 6.139 14.8747 6.426L19.2777 10.883C19.5647 11.17 19.7417 11.416 19.7827 11.676Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM10.7737 21.6701C9.1877 21.6701 8.3667 20.8491 8.3667 19.2501V8.6401C8.3667 7.0551 9.1877 6.2211 10.7737 6.2211H13.4807V11.9081C13.4807 12.8511 13.9317 13.3031 14.8617 13.3031H20.4807V19.2501C20.4807 20.8361 19.6737 21.6701 18.0877 21.6701ZM15.0667 12.1131C14.7927 12.1131 14.6427 11.9761 14.6427 11.7031V6.2891C14.9707 6.3301 15.3127 6.5761 15.6817 6.9591L19.7287 11.0741C20.1247 11.4571 20.3577 11.7851 20.3987 12.1131Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM10.5957 21.5334C9.0367 21.5334 8.2437 20.7534 8.2437 19.1544V8.3674C8.2437 6.7954 9.0367 5.9884 10.5957 5.9884H13.2757V11.6624C13.2757 12.6464 13.7407 13.0974 14.7107 13.0974H20.3027V19.1544C20.3027 20.7264 19.5237 21.5334 17.9507 21.5334ZM14.8207 11.9494C14.5607 11.9494 14.4097 11.8124 14.4097 11.5394V6.0704C14.7247 6.1114 15.0527 6.3304 15.4077 6.6994L19.5777 10.9514C19.9477 11.3204 20.1657 11.6344 20.2067 11.9494Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM10.9097 21.7789C9.3107 21.7789 8.4627 20.9319 8.4627 19.3179V8.8459C8.4627 7.2599 9.3107 6.3849 10.9097 6.3849H13.6307V12.0999C13.6307 13.0019 14.0687 13.4529 14.9847 13.4529H20.6307V19.3179C20.6307 20.9179 19.7827 21.7789 18.1837 21.7789ZM15.2577 12.2499C14.9707 12.2499 14.8207 12.0999 14.8207 11.8129V6.4669C15.1617 6.4939 15.5177 6.7539 15.9007 7.1509L19.8517 11.1559C20.2617 11.5529 20.5077 11.8949 20.5487 12.2499Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM10.0347 20.6172C8.7087 20.6172 8.0387 19.9332 8.0387 18.6072V7.6012C8.0387 6.3032 8.7367 5.6052 10.0347 5.6052H12.8657V10.9782C12.8657 11.7302 13.2347 12.0992 13.9997 12.0992H19.3317V18.6072C19.3317 19.9202 18.6617 20.6172 17.3357 20.6172ZM14.1777 11.3062C13.8227 11.3062 13.6577 11.1292 13.6577 10.7732V5.7152C13.8227 5.7562 13.9867 5.8922 14.1507 6.0702L18.8807 10.8012C19.0587 10.9652 19.1957 11.1292 19.2227 11.3062Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM9.8707 20.3441C8.6137 20.3441 7.9707 19.6741 7.9707 18.4431V7.3831C7.9707 6.1391 8.6547 5.4821 9.8707 5.4821H12.7417V10.7601C12.7417 11.4571 13.0977 11.7991 13.7817 11.7991H19.0447V18.4431C19.0447 19.6741 18.4027 20.3441 17.1577 20.3441ZM13.9997 11.1151C13.6167 11.1151 13.4397 10.9241 13.4397 10.5411V5.6051C13.5627 5.6461 13.6717 5.7561 13.7947 5.8791L18.6757 10.7461C18.7847 10.8551 18.9077 10.9781 18.9357 11.1151Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}