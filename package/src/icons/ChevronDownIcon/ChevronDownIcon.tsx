import { IconProps } from "../../types"
import React from "react"

export default function ChevronDownIconIcon({
  weight = "regular",
  className = "",
}: IconProps): React.ReactNode {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.345703125 16.3515625"
          className={className}
        >
          <path
            d="              M13.1797 16.3511C14.2047 16.3381 14.9847 15.9691 15.8457 15.1351L25.4707 5.2771C26.0727 4.6761 26.3457 3.9921 26.3457 3.1441C26.3457 1.4221 24.9237 0.0001 23.2427 0.0001C22.3947 0.0001 21.5877 0.3421 20.9317 1.0391L13.2067 9.1191L5.4277 1.0391C4.7577 0.3691 3.9647 0.0001 3.1037 0.0001C1.4087 0.0001 -0.0003 1.4221 -0.0003 3.1441C-0.0003 3.9781 0.2867 4.6621 0.8617 5.2771L10.5137 15.1351C11.3747 15.9961 12.1677 16.3511 13.1797 16.3511Z"
            fill="currentColor"
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.046875 14.861328125"
          className={className}
        >
          <path
            d="              M12.5237 14.8611C13.2067 14.8611 13.7817 14.6011 14.3147 14.0551L24.4317 3.7051C24.8417 3.2951 25.0467 2.8031 25.0467 2.2011C25.0467 0.9841 24.0767 0.0001 22.8727 0.0001C22.2847 0.0001 21.7247 0.2461 21.2737 0.6971L12.5367 9.7211L3.7867 0.6971C3.3357 0.2461 2.7757 0.0001 2.1737 0.0001C0.9707 0.0001 -0.0003 0.9841 -0.0003 2.2011C-0.0003 2.7891 0.2047 3.2811 0.6157 3.7051L10.7327 14.0551C11.2927 14.6151 11.8537 14.8611 12.5237 14.8611Z"
            fill="currentColor"
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.73046875 15.654296875"
          className={className}
        >
          <path
            d="              M12.8657 15.6543C13.7407 15.6543 14.4097 15.3403 15.1207 14.6293L24.9787 4.5393C25.4977 4.0333 25.7307 3.4313 25.7307 2.7073C25.7307 1.2303 24.5277 0.0003 23.0647 0.0003C22.3397 0.0003 21.6567 0.3003 21.0957 0.8883L12.8927 9.4063L4.6487 0.8883C4.0877 0.3143 3.4047 0.0003 2.6657 0.0003C1.2027 0.0003 -0.0003 1.2303 -0.0003 2.7073C-0.0003 3.4313 0.2457 4.0193 0.7517 4.5523L10.6227 14.6293C11.3337 15.3533 12.0177 15.6543 12.8657 15.6543Z"
            fill="currentColor"
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.791015625 12.865234375"
          className={className}
        >
          <path
            d="              M11.3887 12.8654C11.6757 12.8654 11.9357 12.7424 12.1407 12.5234L22.5037 1.6134C22.6817 1.4354 22.7907 1.2164 22.7907 0.9434C22.7907 0.4104 22.3807 0.0004 21.8477 0.0004C21.6017 0.0004 21.3417 0.0954 21.1637 0.2734L11.4027 10.5544L1.6137 0.2734C1.4497 0.0954 1.2027 0.0004 0.9437 0.0004C0.4097 0.0004 -0.0003 0.4104 -0.0003 0.9434C-0.0003 1.2164 0.1097 1.4354 0.2867 1.6274L10.6507 12.5374C10.8687 12.7424 11.1017 12.8654 11.3887 12.8654Z"
            fill="currentColor"
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.212890625 13.904296875"
          className={className}
        >
          <path
            d="              M12.1137 13.9042C12.5777 13.9042 13.0017 13.7262 13.3437 13.3572L23.7617 2.7072C24.0627 2.4062 24.2127 2.0372 24.2127 1.5862C24.2127 0.6972 23.5157 0.0002 22.6407 0.0002C22.2027 0.0002 21.7927 0.1782 21.4927 0.4782L12.1137 10.0902L2.7347 0.4782C2.4197 0.1782 2.0237 0.0002 1.5857 0.0002C0.6977 0.0002 -0.0003 0.6972 -0.0003 1.5862C-0.0003 2.0232 0.1637 2.4062 0.4647 2.7072L10.8827 13.3572C11.2387 13.7262 11.6487 13.9042 12.1137 13.9042Z"
            fill="currentColor"
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.748046875 13.37109375"
          className={className}
        >
          <path
            d="              M11.8807 13.3711C12.2227 13.3711 12.5647 13.2341 12.7967 12.9751L23.3787 2.1331C23.6117 1.9001 23.7477 1.6001 23.7477 1.2581C23.7477 0.5471 23.2147 0.0001 22.5037 0.0001C22.1617 0.0001 21.8477 0.1371 21.6157 0.3551L11.8807 10.3091L2.1327 0.3551C1.9137 0.1371 1.5997 0.0001 1.2437 0.0001C0.5337 0.0001 -0.0003 0.5471 -0.0003 1.2581C-0.0003 1.6001 0.1367 1.9001 0.3687 2.1461L10.9517 12.9751C11.2107 13.2341 11.5257 13.3711 11.8807 13.3711Z"
            fill="currentColor"
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.58203125 14.328125"
          className={className}
        >
          <path
            d="              M12.2907 14.328C12.8517 14.328 13.3297 14.109 13.7677 13.658L24.0487 3.145C24.4047 2.789 24.5817 2.365 24.5817 1.859C24.5817 0.834 23.7617 0 22.7367 0C22.2437 0 21.7657 0.219 21.3967 0.588L12.3047 9.939L3.1857 0.588C2.8167 0.219 2.3517 0 1.8317 0C0.8207 0 -0.0003 0.834 -0.0003 1.859C-0.0003 2.365 0.1917 2.789 0.5337 3.145L10.8147 13.672C11.2657 14.109 11.7307 14.328 12.2907 14.328Z"
            fill="currentColor"
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.51953125 12.1953125"
          className={className}
        >
          <path
            d="              M10.7597 12.1957C10.9517 12.1957 11.1157 12.0857 11.2657 11.9357L21.3417 0.9157C21.4517 0.7927 21.5197 0.6977 21.5197 0.5337C21.5197 0.2327 21.2867 -0.0003 20.9867 -0.0003C20.8357 -0.0003 20.6857 0.0407 20.5897 0.1367L10.7737 10.8687L0.9157 0.1367C0.8337 0.0407 0.6837 -0.0003 0.5337 -0.0003C0.2327 -0.0003 -0.0003 0.2327 -0.0003 0.5337C-0.0003 0.6977 0.0817 0.8067 0.1917 0.9297L10.2537 11.9497C10.4047 12.0997 10.5547 12.1957 10.7597 12.1957Z"
            fill="currentColor"
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.876953125 11.8671875"
          className={className}
        >
          <path
            d="              M10.4317 11.867C10.5817 11.867 10.6917 11.758 10.8147 11.635L20.7537 0.574C20.8227 0.492 20.8767 0.438 20.8767 0.342C20.8767 0.15 20.7267 0 20.5347 0C20.4527 0 20.3577 0.027 20.2887 0.082L10.4457 11.047L0.5607 0.082C0.5197 0.027 0.4097 0 0.3277 0C0.1507 0 -0.0003 0.15 -0.0003 0.342C-0.0003 0.438 0.0687 0.506 0.1367 0.588L10.0487 11.662C10.1717 11.772 10.2677 11.867 10.4317 11.867Z"
            fill="currentColor"
          />
        </svg>
      )
    default:
      return null
  }
}
