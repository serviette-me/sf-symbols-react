import { IconProps } from "../../types"

export default function HeartRectangleFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.03125 27.111328125"
          className={className}
        >
          <path
            d="              M5.3597 27.1113H27.6717C31.0487 27.1113 33.0317 25.1293 33.0317 21.7523V5.3592C33.0317 1.9683 31.0487 0.0003 27.6717 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM13.2617 7.5883C14.8747 7.5883 15.9687 8.5453 16.5157 9.4473C17.0487 8.5453 18.1427 7.5883 19.7557 7.5883C21.8887 7.5883 23.6657 9.2833 23.6657 11.8813C23.6657 16.5153 18.2107 19.6873 17.4457 20.0973C17.1587 20.2203 16.8027 20.4263 16.5157 20.4263C16.2287 20.4263 15.8457 20.2203 15.5857 20.0973C14.8337 19.6603 9.3517 16.5153 9.3517 11.8813C9.3517 9.2833 11.1287 7.5883 13.2617 7.5883Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.634765625 26.140625"
          className={className}
        >
          <path
            d="              M4.8267 26.1407H27.8087C30.9397 26.1407 32.6347 24.4457 32.6347 21.3417V4.7987C32.6347 1.6957 30.9397 -0.0003 27.8087 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM13.0017 6.9727C14.5607 6.9727 15.6957 7.8747 16.3247 8.9827C16.9397 7.8747 18.0747 6.9727 19.6327 6.9727C21.9027 6.9727 23.6527 8.7227 23.6527 11.2657C23.6527 15.4357 18.9497 18.7167 17.1307 19.8517C16.8847 19.9887 16.5707 20.1937 16.3377 20.1937C16.1057 20.1937 15.7497 19.9887 15.5037 19.8517C13.6857 18.7167 8.9827 15.4357 8.9827 11.2657C8.9827 8.7227 10.7327 6.9727 13.0017 6.9727Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.83984375 26.66015625"
          className={className}
        >
          <path
            d="              M5.1137 26.6605H27.7267C30.9937 26.6605 32.8397 24.8145 32.8397 21.5605V5.0995C32.8397 1.8455 30.9937 -0.0005 27.7267 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM13.1387 7.3145C14.7387 7.3145 15.8457 8.2305 16.4197 9.2425C16.9937 8.2305 18.1157 7.3145 19.7017 7.3145C21.8887 7.3145 23.6657 9.0235 23.6657 11.5935C23.6657 16.0095 18.5527 19.2365 17.2947 19.9885C17.0347 20.1245 16.6937 20.3165 16.4337 20.3165C16.1737 20.3165 15.8047 20.1245 15.5447 19.9885C14.2867 19.2225 9.1737 16.0095 9.1737 11.5935C9.1737 9.0235 10.9377 7.3145 13.1387 7.3145Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.01953125 24.759765625"
          className={className}
        >
          <path
            d="              M4.0337 24.7601H27.9867C30.6657 24.7601 32.0197 23.3921 32.0197 20.7671V3.9921C32.0197 1.3671 30.6657 0.0001 27.9867 0.0001H4.0337C1.3677 0.0001 -0.0003 1.3531 -0.0003 3.9921V20.7671C-0.0003 23.4061 1.3677 24.7601 4.0337 24.7601ZM12.6597 6.1801C14.1507 6.1801 15.3397 7.0681 16.0097 8.2851C16.6937 7.0681 17.8967 6.1801 19.3727 6.1801C21.7107 6.1801 23.4067 7.9431 23.4067 10.3771C23.4067 14.1641 19.2497 17.5001 16.6247 19.2911C16.4337 19.4281 16.1877 19.5781 16.0367 19.5781C15.8867 19.5781 15.6137 19.4281 15.4087 19.2911C12.7287 17.5961 8.6137 14.1641 8.6137 10.3771C8.6137 7.9431 10.3227 6.1801 12.6597 6.1801Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.388671875 25.51171875"
          className={className}
        >
          <path
            d="              M4.4847 25.5113H27.9047C30.8577 25.5113 32.3887 23.9943 32.3887 21.0823V4.4293C32.3887 1.5173 30.8577 0.0003 27.9047 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5043 -0.0003 4.4293V21.0823C-0.0003 23.9943 1.5317 25.5113 4.4847 25.5113ZM12.8247 6.5763C14.3687 6.5763 15.5177 7.4513 16.1877 8.6683C16.8707 7.4513 18.0337 6.5763 19.5647 6.5763C21.9027 6.5763 23.6387 8.3533 23.6387 10.8833C23.6387 14.7383 19.4277 18.0743 16.9397 19.6873C16.7067 19.8383 16.4197 20.0293 16.2147 20.0293C16.0237 20.0293 15.6957 19.8383 15.4497 19.6873C12.9477 18.1153 8.7497 14.7383 8.7497 10.8833C8.7497 8.3533 10.4867 6.5763 12.8247 6.5763Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.23828125 25.169921875"
          className={className}
        >
          <path
            d="              M4.2927 25.1702H27.9457C30.8167 25.1702 32.2387 23.7622 32.2387 20.9452V4.2382C32.2387 1.4222 30.8167 0.0002 27.9457 0.0002H4.2927C1.4357 0.0002 -0.0003 1.4222 -0.0003 4.2382V20.9452C-0.0003 23.7622 1.4357 25.1702 4.2927 25.1702ZM12.7287 6.3572C14.2457 6.3572 15.4217 7.2192 16.1187 8.5042C16.8297 7.2192 18.0197 6.3572 19.5097 6.3572C21.9027 6.3572 23.6247 8.1622 23.6247 10.6642C23.6247 14.3552 19.6877 17.7322 16.8297 19.6052C16.6117 19.7692 16.3377 19.9472 16.1467 19.9472C15.9827 19.9472 15.6677 19.7562 15.4217 19.6052C12.5367 17.7732 8.6267 14.3552 8.6267 10.6642C8.6267 8.1622 10.3497 6.3572 12.7287 6.3572Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.498046875 25.78515625"
          className={className}
        >
          <path
            d="              M4.6347 25.785H27.8637C30.8847 25.785 32.4977 24.186 32.4977 21.191V4.594C32.4977 1.6 30.8847 0 27.8637 0H4.6347C1.6137 0 -0.0003 1.586 -0.0003 4.594V21.191C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM12.9067 6.754C14.4517 6.754 15.5997 7.643 16.2427 8.805C16.8987 7.643 18.0607 6.754 19.5917 6.754C21.9027 6.754 23.6387 8.518 23.6387 11.047C23.6387 15.039 19.2227 18.348 17.0217 19.756C16.7887 19.906 16.4887 20.098 16.2697 20.098C16.0507 20.098 15.7227 19.906 15.4767 19.756C13.2617 18.375 8.8597 15.039 8.8597 11.047C8.8597 8.518 10.5957 6.754 12.9067 6.754Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.71875 24.19921875"
          className={className}
        >
          <path
            d="              M3.6917 24.1997H28.0407C30.4607 24.1997 31.7187 22.9137 31.7187 20.5217V3.6777C31.7187 1.2847 30.4607 -0.0003 28.0407 -0.0003H3.6917C1.2717 -0.0003 -0.0003 1.2577 -0.0003 3.6777V20.5217C-0.0003 22.9417 1.2717 24.1997 3.6917 24.1997ZM12.5647 5.9197C14.0277 5.9197 15.2437 6.8497 15.8727 7.9707C16.5017 6.8497 17.7327 5.9197 19.1677 5.9197C21.4517 5.9197 23.1187 7.6567 23.1187 9.9807C23.1187 13.9177 18.6617 17.1997 16.3517 18.8667C16.1877 18.9907 15.9957 19.0727 15.8727 19.0727C15.7497 19.0727 15.5587 18.9767 15.3947 18.8667C12.9747 17.3497 8.6137 13.9177 8.6137 9.9807C8.6137 7.6567 10.2817 5.9197 12.5647 5.9197Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.568359375 23.92578125"
          className={className}
        >
          <path
            d="              M3.5137 23.926H28.0687C30.3517 23.926 31.5687 22.668 31.5687 20.412V3.514C31.5687 1.258 30.3517 0 28.0687 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.412C-0.0003 22.709 1.2167 23.926 3.5137 23.926ZM12.5097 5.797C13.9587 5.797 15.1897 6.74 15.7907 7.82C16.4067 6.74 17.6507 5.797 19.0727 5.797C21.3277 5.797 22.9827 7.506 22.9827 9.775C22.9827 13.795 18.3617 17.035 16.2147 18.662C16.0647 18.758 15.9007 18.826 15.7907 18.826C15.6957 18.826 15.5177 18.744 15.3807 18.662C13.1117 17.227 8.6137 13.795 8.6137 9.775C8.6137 7.506 10.2677 5.797 12.5097 5.797Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
