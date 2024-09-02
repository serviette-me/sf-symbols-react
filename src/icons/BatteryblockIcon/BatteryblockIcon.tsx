import { IconProps } from "../../types"

export default function BatteryblockIconIcon({
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
            d="              M5.3597 27.1116H27.6717C31.0487 27.1116 33.0317 25.1426 33.0317 21.7516V9.3376C33.0317 5.9476 31.0487 3.9786 27.6717 3.9786H26.5647V2.7476C26.5647 1.0256 25.5667 -0.0004 23.8577 -0.0004H20.9727C19.2637 -0.0004 18.2657 1.0256 18.2657 2.7476V3.9786H14.7657V2.7476C14.7657 1.0256 13.7677 -0.0004 12.0587 -0.0004H9.1737C7.4647 -0.0004 6.4667 1.0256 6.4667 2.7476V3.9786H5.3597C1.9827 3.9786 -0.0003 5.9476 -0.0003 9.3376V21.7516C-0.0003 25.1426 1.9827 27.1116 5.3597 27.1116ZM4.8537 21.0136V10.0766C4.8537 9.1736 5.2637 8.8316 6.0977 8.8316H26.9337C27.7677 8.8316 28.1777 9.1736 28.1777 10.0766V21.0136C28.1777 21.9156 27.7677 22.2576 26.9337 22.2576H6.0977C5.2637 22.2576 4.8537 21.9156 4.8537 21.0136Z"
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
            d="              M4.8267 26.1404H27.8087C30.9397 26.1404 32.6347 24.4454 32.6347 21.3414V8.5314C32.6347 5.4274 30.9397 3.7324 27.8087 3.7324H26.3047V2.2014C26.3047 0.8204 25.5117 0.0004 24.1307 0.0004H20.6717C19.2907 0.0004 18.4977 0.8204 18.4977 2.2014V3.7324H14.1367V2.2014C14.1367 0.8204 13.3437 0.0004 11.9627 0.0004H8.5037C7.1227 0.0004 6.3297 0.8204 6.3297 2.2014V3.7324H4.8267C1.7087 3.7324 -0.0003 5.4274 -0.0003 8.5314V21.3414C-0.0003 24.4454 1.7087 26.1404 4.8267 26.1404ZM3.5277 20.9044V8.9554C3.5277 7.7934 4.1157 7.2594 5.2087 7.2594H27.4257C28.5197 7.2594 29.1077 7.7934 29.1077 8.9554V20.9044C29.1077 22.0804 28.5197 22.6134 27.4257 22.6134H5.2087C4.1157 22.6134 3.5277 22.0804 3.5277 20.9044Z"
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
            d="              M5.1137 26.6602H27.7267C30.9937 26.6602 32.8397 24.8142 32.8397 21.5602V8.9552C32.8397 5.7012 30.9937 3.8552 27.7267 3.8552H26.4417V2.4882C26.4417 0.9302 25.5387 0.0002 23.9807 0.0002H20.8357C19.2777 0.0002 18.3747 0.9302 18.3747 2.4882V3.8552H14.4647V2.4882C14.4647 0.9302 13.5627 0.0002 12.0037 0.0002H8.8597C7.3007 0.0002 6.3987 0.9302 6.3987 2.4882V3.8552H5.1137C1.8597 3.8552 -0.0003 5.7012 -0.0003 8.9552V21.5602C-0.0003 24.8142 1.8597 26.6602 5.1137 26.6602ZM4.2247 20.9592V9.5562C4.2247 8.5172 4.7167 8.0802 5.6877 8.0802H27.1657C28.1227 8.0802 28.6157 8.5172 28.6157 9.5562V20.9592C28.6157 21.9982 28.1227 22.4222 27.1657 22.4222H5.6877C4.7167 22.4222 4.2247 21.9982 4.2247 20.9592Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.01953125 24.74609375"
          className={className}
        >
          <path
            d="              M4.0337 24.7461H27.9867C30.6657 24.7461 32.0197 23.3791 32.0197 20.7541V7.4781C32.0197 4.8531 30.6657 3.4861 27.9867 3.4861H25.9087V1.5171C25.9087 0.5601 25.3617 0.0001 24.3767 0.0001H20.1117C19.1267 0.0001 18.5797 0.5601 18.5797 1.5171V3.4861H13.4397V1.5171C13.4397 0.5601 12.8927 0.0001 11.9087 0.0001H7.6427C6.6587 0.0001 6.1117 0.5601 6.1117 1.5171V3.4861H4.0337C1.3677 3.4861 -0.0003 4.8261 -0.0003 7.4781V20.7541C-0.0003 23.4061 1.3677 24.7461 4.0337 24.7461ZM1.6957 20.6721V7.5601C1.6957 5.9881 2.5297 5.1681 4.0607 5.1681H27.9587C29.4627 5.1681 30.3247 5.9881 30.3247 7.5601V20.6721C30.3247 22.2441 29.4627 23.0641 27.9587 23.0641H4.0607C2.5297 23.0641 1.6957 22.2441 1.6957 20.6721Z"
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
            d="              M4.4847 25.512H27.9047C30.8577 25.512 32.3887 23.994 32.3887 21.082V8.012C32.3887 5.086 30.8577 3.568 27.9047 3.568H26.1407V1.859C26.1407 0.684 25.4707 0 24.3087 0H20.4807C19.3187 0 18.6487 0.684 18.6487 1.859V3.568H13.7407V1.859C13.7407 0.684 13.0707 0 11.8947 0H8.0797C6.9047 0 6.2347 0.684 6.2347 1.859V3.568H4.4847C1.5317 3.568 -0.0003 5.086 -0.0003 8.012V21.082C-0.0003 23.994 1.5317 25.512 4.4847 25.512ZM2.6797 20.85V8.244C2.6797 6.904 3.3767 6.248 4.6487 6.248H27.7407C28.9977 6.248 29.7087 6.904 29.7087 8.244V20.85C29.7087 22.176 28.9977 22.832 27.7407 22.832H4.6487C3.3767 22.832 2.6797 22.176 2.6797 20.85Z"
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
            d="              M4.2927 25.1699H27.9457C30.8167 25.1699 32.2387 23.7619 32.2387 20.9449V7.7249C32.2387 4.9079 30.8167 3.4999 27.9457 3.4999H26.0587V1.6679C26.0587 0.6289 25.4567 -0.0001 24.4047 -0.0001H20.3707C19.3317 -0.0001 18.7307 0.6289 18.7307 1.6679V3.4999H13.5217V1.6679C13.5217 0.6289 12.9197 -0.0001 11.8677 -0.0001H7.8337C6.7817 -0.0001 6.1937 0.6289 6.1937 1.6679V3.4999H4.2927C1.4357 3.4999 -0.0003 4.9079 -0.0003 7.7249V20.9449C-0.0003 23.7619 1.4357 25.1699 4.2927 25.1699ZM2.2017 20.8219V7.8479C2.2017 6.4259 2.9527 5.7009 4.3207 5.7009H27.9177C29.2717 5.7009 30.0367 6.4259 30.0367 7.8479V20.8219C30.0367 22.2439 29.2717 22.9689 27.9177 22.9689H4.3207C2.9527 22.9689 2.2017 22.2439 2.2017 20.8219Z"
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
            d="              M4.6347 25.7847H27.8637C30.8847 25.7847 32.4977 24.1857 32.4977 21.1917V8.2307C32.4977 5.2367 30.8847 3.6367 27.8637 3.6367H26.2087V2.0097C26.2087 0.7387 25.4847 -0.0003 24.2267 -0.0003H20.5627C19.3047 -0.0003 18.5797 0.7387 18.5797 2.0097V3.6367H13.9177V2.0097C13.9177 0.7387 13.1797 -0.0003 11.9217 -0.0003H8.2577C6.9997 -0.0003 6.2757 0.7387 6.2757 2.0097V3.6367H4.6347C1.6137 3.6367 -0.0003 5.2367 -0.0003 8.2307V21.1917C-0.0003 24.1997 1.6137 25.7847 4.6347 25.7847ZM3.0487 20.8767V8.5447C3.0487 7.2867 3.6917 6.6857 4.8947 6.6857H27.6037C28.7927 6.6857 29.4497 7.2867 29.4497 8.5447V20.8767C29.4497 22.1347 28.7927 22.7367 27.6037 22.7367H4.8947C3.6917 22.7367 3.0487 22.1347 3.0487 20.8767Z"
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
            d="              M3.6917 24.1997H28.0407C30.4607 24.1997 31.7187 22.9137 31.7187 20.5217V7.1637C31.7187 4.7717 30.4607 3.4867 28.0407 3.4867H25.7167V1.3397C25.7167 0.5057 25.2387 -0.0003 24.3357 -0.0003H19.7557C18.8537 -0.0003 18.3747 0.5057 18.3747 1.3397V3.4867H13.3437V1.3397C13.3437 0.5057 12.8787 -0.0003 11.9627 -0.0003H7.3967C6.4807 -0.0003 6.0157 0.5057 6.0157 1.3397V3.4867H3.6917C1.2717 3.4867 -0.0003 4.7437 -0.0003 7.1637V20.5217C-0.0003 22.9417 1.2717 24.1997 3.6917 24.1997ZM1.0117 20.4667V7.2187C1.0117 5.4277 1.9417 4.4977 3.7187 4.4977H27.9997C29.7227 4.4977 30.7067 5.4277 30.7067 7.2187V20.4667C30.7067 22.2577 29.7227 23.1877 27.9997 23.1877H3.7187C1.9417 23.1877 1.0117 22.2577 1.0117 20.4667Z"
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
            d="              M3.5137 23.926H28.0687C30.3517 23.926 31.5687 22.668 31.5687 20.412V7C31.5687 4.744 30.3517 3.486 28.0687 3.486H25.6077V1.244C25.6077 0.465 25.1697 0 24.3087 0H19.5777C18.7167 0 18.2797 0.465 18.2797 1.244V3.486H13.2887V1.244C13.2887 0.465 12.8657 0 11.9907 0H7.2597C6.3987 0 5.9607 0.465 5.9607 1.244V3.486H3.5137C1.2167 3.486 -0.0003 4.703 -0.0003 7V20.412C-0.0003 22.709 1.2167 23.926 3.5137 23.926ZM0.6697 20.371V7.041C0.6697 5.141 1.6547 4.156 3.5407 4.156H28.0277C29.8457 4.156 30.8987 5.141 30.8987 7.041V20.371C30.8987 22.272 29.8457 23.256 28.0277 23.256H3.5407C1.6547 23.256 0.6697 22.272 0.6697 20.371Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}