import { IconProps } from "../../types"

export default function TriangleCircleFillIconIcon({
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
            d="              M14.9297 29.8598C23.1597 29.8598 29.8727 23.1598 29.8727 14.9298C29.8727 6.7128 23.1597 -0.0003 14.9297 -0.0003C6.7127 -0.0003 -0.0003 6.7128 -0.0003 14.9298C-0.0003 23.1598 6.7127 29.8598 14.9297 29.8598ZM7.8207 16.8168L12.5507 8.6268C13.7127 6.6038 16.1737 6.6038 17.3497 8.6268L22.0667 16.8168C23.2827 18.9218 22.1487 21.1097 19.8107 21.1097H10.0757C7.7517 21.1097 6.6037 18.9218 7.8207 16.8168ZM12.0037 17.0487C11.9217 17.2268 11.9907 17.3638 12.1677 17.3638H17.7187C17.9097 17.3638 17.9787 17.2268 17.8967 17.0487L15.1347 12.2907C15.0117 12.0998 14.8617 12.0998 14.7517 12.2907Z"
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
            d="              M14.4377 28.8882C22.3667 28.8882 28.8747 22.3672 28.8747 14.4512C28.8747 6.5212 22.3537 0.0002 14.4377 0.0002C6.5077 0.0002 -0.0003 6.5212 -0.0003 14.4512C-0.0003 22.3672 6.5217 28.8882 14.4377 28.8882ZM7.3277 16.7612L12.3597 8.0252C13.3987 6.2342 15.5177 6.2482 16.5427 8.0112L21.5737 16.7612C22.6547 18.6212 21.7247 20.4802 19.6467 20.4802H9.2557C7.1917 20.4802 6.2617 18.6212 7.3277 16.7612ZM10.3497 17.2542C10.2267 17.4452 10.3087 17.6232 10.5407 17.6232H18.3747C18.6077 17.6232 18.6757 17.4452 18.5667 17.2542L14.6567 10.4862C14.5467 10.2812 14.3417 10.2812 14.2327 10.4862Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.408203125 29.39453125"
          className={className}
        >
          <path
            d="              M14.6977 29.3943C22.7777 29.3943 29.4077 22.7773 29.4077 14.6973C29.4077 6.6173 22.7777 0.0003 14.6977 0.0003C6.6167 0.0003 -0.0003 6.6173 -0.0003 14.6973C-0.0003 22.7773 6.6167 29.3943 14.6977 29.3943ZM7.5877 16.7893L12.4547 8.3403C13.5627 6.4123 15.8727 6.4253 16.9667 8.3263L21.8337 16.7893C22.9827 18.7713 21.9437 20.8083 19.7287 20.8083H9.6937C7.4787 20.8083 6.4397 18.7713 7.5877 16.7893ZM11.2247 17.1443C11.1157 17.3223 11.1977 17.4723 11.4027 17.4723H18.0327C18.2387 17.4723 18.3067 17.3223 18.2107 17.1443L14.9027 11.4293C14.7927 11.2383 14.6157 11.2383 14.5057 11.4293Z"
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
            d="              M13.7127 27.4256C21.2187 27.4256 27.4257 21.2186 27.4257 13.7126C27.4257 6.2066 21.2187 -0.0004 13.6987 -0.0004C6.1937 -0.0004 -0.0003 6.2066 -0.0003 13.7126C-0.0003 21.2186 6.2067 27.4256 13.7127 27.4256ZM6.8637 16.5296L12.0727 7.4516C12.9197 5.9886 14.5877 6.0836 15.3397 7.4106L20.5897 16.5296C21.4097 17.9516 20.8227 19.3456 19.1407 19.3456H8.3127C6.6307 19.3456 6.0427 17.9516 6.8637 16.5296ZM8.2987 17.1176C8.0937 17.4586 8.1487 17.8006 8.6267 17.8006H18.8257C19.3047 17.8006 19.3727 17.4586 19.1547 17.1176L14.1097 8.3536C13.9317 8.0256 13.5077 8.0256 13.3167 8.3536Z"
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
            d="              M14.1227 28.2458C21.8477 28.2458 28.2457 21.8618 28.2457 14.1228C28.2457 6.3988 21.8477 -0.0002 14.1097 -0.0002C6.3847 -0.0002 -0.0003 6.3988 -0.0003 14.1228C-0.0003 21.8618 6.3987 28.2458 14.1227 28.2458ZM7.0137 16.7208L12.2367 7.6428C13.1937 5.9878 15.1077 6.0158 16.0237 7.6148L21.2597 16.7208C22.2437 18.4158 21.4507 20.0838 19.5367 20.0838H8.7367C6.8357 20.0838 6.0427 18.4158 7.0137 16.7208ZM9.2827 17.3768C9.1467 17.5818 9.2287 17.7738 9.4887 17.7738H18.7847C19.0447 17.7738 19.1267 17.5818 18.9907 17.3768L14.3557 9.3238C14.2457 9.1188 14.0137 9.1188 13.9047 9.3238Z"
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
            d="              M13.9457 27.891C21.5737 27.891 27.8907 21.56 27.8907 13.945C27.8907 6.316 21.5607 0 13.9317 0C6.3167 0 -0.0003 6.316 -0.0003 13.945C-0.0003 21.56 6.3297 27.891 13.9457 27.891ZM6.8357 16.693L12.1677 7.41C13.0837 5.838 14.8617 5.893 15.7367 7.396L21.0817 16.693C22.0117 18.307 21.2867 19.852 19.4827 19.852H8.4487C6.6307 19.852 5.9197 18.307 6.8357 16.693ZM8.6957 17.445C8.5447 17.664 8.6267 17.869 8.9007 17.869H19.0177C19.3047 17.869 19.3727 17.664 19.2367 17.445L14.1777 8.668C14.0687 8.463 13.8357 8.449 13.7267 8.668Z"
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
            d="              M14.2597 28.5195C22.0797 28.5195 28.5197 22.0805 28.5197 14.2595C28.5197 6.4535 22.0667 -0.0005 14.2457 -0.0005C6.4397 -0.0005 -0.0003 6.4535 -0.0003 14.2595C-0.0003 22.0805 6.4397 28.5195 14.2597 28.5195ZM7.1507 16.7345L12.2907 7.8065C13.2887 6.0835 15.2847 6.1245 16.2417 7.7925L21.3967 16.7345C22.4217 18.4985 21.5607 20.2615 19.5917 20.2615H8.9687C6.9867 20.2615 6.1387 18.4985 7.1507 16.7345ZM9.7477 17.3225C9.6117 17.5275 9.6937 17.7185 9.9397 17.7185H18.6077C18.8537 17.7185 18.9357 17.5275 18.8127 17.3225L14.4787 9.8165C14.3687 9.6245 14.1637 9.6245 14.0407 9.8305Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.810546875 26.82421875"
          className={className}
        >
          <path
            d="              M13.4117 26.8238C20.7677 26.8238 26.8107 20.7808 26.8107 13.4118C26.8107 6.0428 20.7677 -0.0002 13.3987 -0.0002C6.0427 -0.0002 -0.0003 6.0428 -0.0003 13.4118C-0.0003 20.7808 6.0427 26.8238 13.4117 26.8238ZM6.8907 16.3378L11.9487 7.5198C12.7147 6.1938 14.2187 6.3578 14.8207 7.4238L19.9477 16.3378C20.6167 17.4998 20.1937 18.6898 18.7027 18.6898H8.1347C6.6447 18.6898 6.2067 17.4998 6.8907 16.3378ZM7.7927 16.6798C7.4787 17.2128 7.5327 17.7188 8.2577 17.7188H18.5797C19.3047 17.7188 19.3457 17.2128 19.0447 16.6798L14.0137 7.9438C13.7407 7.4648 13.0707 7.4508 12.7827 7.9568Z"
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
            d="              M13.2477 26.4958C20.5347 26.4958 26.4957 20.5348 26.4957 13.2478C26.4957 5.9608 20.5347 -0.0002 13.2477 -0.0002C5.9607 -0.0002 -0.0003 5.9608 -0.0003 13.2478C-0.0003 20.5348 5.9607 26.4958 13.2477 26.4958ZM6.9047 16.2148L11.8947 7.5328C12.6057 6.2888 14.0277 6.4808 14.5607 7.4378L19.6187 16.2148C20.2207 17.2538 19.8787 18.3478 18.4707 18.3478H8.0527C6.6447 18.3478 6.3027 17.2538 6.9047 16.2148ZM7.5327 16.4468C7.1777 17.0758 7.2047 17.6778 8.0797 17.6778H18.4437C19.3047 17.6778 19.3457 17.0758 18.9907 16.4468L13.9727 7.7248C13.6447 7.1638 12.8517 7.1508 12.5237 7.7518Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
