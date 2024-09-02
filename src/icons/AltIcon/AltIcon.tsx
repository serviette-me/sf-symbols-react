import { IconProps } from "../../types"

export default function AltIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.380859375 25.169921875"
          className={className}
        >
          <path
            d="              M2.7067 25.1702H8.8187C10.5137 25.1702 11.8677 24.2812 12.6877 22.6402L21.1777 5.5782C21.2737 5.3732 21.4647 5.2632 21.7247 5.2632H26.6877C28.2187 5.2632 29.3807 4.1292 29.3807 2.6382C29.3807 1.1622 28.2047 0.0002 26.6877 0.0002H20.5627C18.7167 0.0002 17.5817 0.7382 16.6937 2.5152L8.1897 19.5922C8.0937 19.7972 7.8887 19.9062 7.6427 19.9062H2.7067C1.1617 19.9062 -0.0003 21.0412 -0.0003 22.5312C-0.0003 24.0082 1.1757 25.1702 2.7067 25.1702ZM19.0587 25.1702H26.6877C28.2187 25.1702 29.3807 24.0352 29.3807 22.5312C29.3807 21.0412 28.2187 19.9062 26.6877 19.9062H19.0587C17.5137 19.9062 16.3657 21.0412 16.3657 22.5312C16.3657 24.0082 17.5277 25.1702 19.0587 25.1702Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.65625 25.115234375"
          className={className}
        >
          <path
            d="              M1.9957 25.1149H8.3397C9.7887 25.1149 10.9517 24.3499 11.5937 22.9959L20.3167 4.3609C20.4807 4.0329 20.7537 3.8689 21.1507 3.8689H26.6597C27.7817 3.8689 28.6567 3.0219 28.6567 1.9279C28.6567 0.8479 27.7677 -0.0001 26.6597 -0.0001H20.2617C18.7027 -0.0001 17.7327 0.6289 17.0217 2.1059L8.2717 20.7539C8.1207 21.0819 7.8477 21.2459 7.4787 21.2459H1.9957C0.8617 21.2459 -0.0003 22.0939 -0.0003 23.1879C-0.0003 24.2679 0.8747 25.1149 1.9957 25.1149ZM18.4157 25.1149H26.6597C27.7947 25.1149 28.6427 24.2809 28.6427 23.1879C28.6427 22.0939 27.7947 21.2599 26.6597 21.2599H18.4157C17.2817 21.2599 16.4337 22.0939 16.4337 23.1879C16.4337 24.2809 17.2947 25.1149 18.4157 25.1149Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.0390625 25.142578125"
          className={className}
        >
          <path
            d="              M2.3657 25.1425H8.5857C10.1717 25.1425 11.4297 24.3085 12.1817 22.8045L20.7677 5.0035C20.8907 4.7445 21.1367 4.6075 21.4517 4.6075H26.6737C28.0137 4.6075 29.0387 3.6095 29.0387 2.2965C29.0387 1.0115 27.9997 -0.0005 26.6737 -0.0005H20.4117C18.7167 -0.0005 17.6507 0.6835 16.8577 2.3245L8.2307 20.1385C8.1077 20.3985 7.8747 20.5355 7.5607 20.5355H2.3657C1.0257 20.5355 -0.0003 21.5335 -0.0003 22.8455C-0.0003 24.1305 1.0257 25.1425 2.3657 25.1425ZM18.7577 25.1425H26.6737C28.0137 25.1425 29.0387 24.1445 29.0387 22.8455C29.0387 21.5335 28.0137 20.5485 26.6737 20.5485H18.7577C17.4047 20.5485 16.3927 21.5335 16.3927 22.8455C16.3927 24.1305 17.4177 25.1425 18.7577 25.1425Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 25.115234375"
          className={className}
        >
          <path
            d="              M0.9707 25.1149H7.6567C8.7367 25.1149 9.6387 24.4999 10.0767 23.5289L19.4277 2.5699C19.6327 2.1059 20.0297 1.8729 20.5897 1.8729H27.0297C27.5627 1.8729 27.9997 1.4489 27.9997 0.9429C27.9997 0.4239 27.5627 -0.0001 27.0297 -0.0001H20.1797C19.0317 -0.0001 18.2517 0.5059 17.8007 1.5179L8.4217 22.5039C8.2167 22.9689 7.7927 23.2419 7.2737 23.2419H0.9707C0.4237 23.2419 -0.0003 23.6519 -0.0003 24.1719C-0.0003 24.7049 0.4237 25.1149 0.9707 25.1149ZM17.5407 25.1149H27.0297C27.5767 25.1149 27.9997 24.7049 27.9997 24.1859C27.9997 23.6659 27.5767 23.2559 27.0297 23.2559H17.5407C16.9937 23.2559 16.5837 23.6659 16.5837 24.1859C16.5837 24.7049 16.9937 25.1149 17.5407 25.1149Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.177734375 25.087890625"
          className={className}
        >
          <path
            d="              M1.5447 25.0882H8.0387C9.3247 25.0882 10.3637 24.3902 10.8967 23.2282L19.7837 3.5822C19.9607 3.1722 20.2887 2.9802 20.7817 2.9802H26.6327C27.4937 2.9802 28.1777 2.3102 28.1777 1.4902C28.1777 0.6562 27.4937 0.0002 26.6327 0.0002H20.0707C18.7027 0.0002 17.8147 0.5742 17.2407 1.8322L8.3267 21.5062C8.1347 21.9022 7.8067 22.1072 7.3557 22.1072H1.5447C0.6697 22.1072 -0.0003 22.7632 -0.0003 23.5972C-0.0003 24.4312 0.6697 25.0882 1.5447 25.0882ZM18.0057 25.0882H26.6327C27.5077 25.0882 28.1777 24.4592 28.1777 23.6112C28.1777 22.7772 27.5077 22.1352 26.6327 22.1352H18.0057C17.1447 22.1352 16.4747 22.7772 16.4747 23.6112C16.4747 24.4452 17.1447 25.0882 18.0057 25.0882Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.91796875 25.060546875"
          className={className}
        >
          <path
            d="              M1.2847 25.0605H7.8747C9.0507 25.0605 10.0347 24.4175 10.4997 23.3515L19.4687 3.1305C19.6877 2.6795 20.0297 2.4745 20.5767 2.4745H26.6327C27.3437 2.4745 27.9177 1.9145 27.9177 1.2305C27.9177 0.5465 27.3437 -0.0005 26.6327 -0.0005H19.9607C18.7027 -0.0005 17.8687 0.5335 17.3637 1.6815L8.3537 21.9155C8.1487 22.3675 7.7927 22.5855 7.3007 22.5855H1.2847C0.5607 22.5855 -0.0003 23.1325 -0.0003 23.8305C-0.0003 24.5275 0.5607 25.0605 1.2847 25.0605ZM17.7867 25.0605H26.6327C27.3577 25.0605 27.9047 24.5405 27.9047 23.8435C27.9047 23.1465 27.3577 22.6135 26.6327 22.6135H17.7867C17.0627 22.6135 16.5017 23.1465 16.5017 23.8435C16.5017 24.5405 17.0627 25.0605 17.7867 25.0605Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.3828125 25.115234375"
          className={className}
        >
          <path
            d="              M1.7367 25.1149H8.1757C9.5157 25.1149 10.6097 24.3769 11.1977 23.1329L20.0157 3.9239C20.1797 3.5549 20.4937 3.3629 20.9457 3.3629H26.6467C27.6177 3.3629 28.3827 2.6249 28.3827 1.6819C28.3827 0.7519 27.6177 -0.0001 26.6467 -0.0001H20.1527C18.7027 -0.0001 17.7737 0.6019 17.1447 1.9549L8.3127 21.1919C8.1347 21.5609 7.8207 21.7519 7.4097 21.7519H1.7367C0.7517 21.7519 -0.0003 22.4769 -0.0003 23.4339C-0.0003 24.3769 0.7657 25.1149 1.7367 25.1149ZM18.1837 25.1149H26.6467C27.6307 25.1149 28.3687 24.3909 28.3687 23.4339C28.3687 22.4899 27.6307 21.7659 26.6467 21.7659H18.1837C17.1997 21.7659 16.4607 22.4899 16.4607 23.4339C16.4607 24.3769 17.2127 25.1149 18.1837 25.1149Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.109375 25.169921875"
          className={className}
        >
          <path
            d="              M0.5467 25.1702H7.3687C8.3127 25.1702 9.1187 24.5952 9.5017 23.7752L19.3597 1.8182C19.5777 1.3402 20.0157 1.0802 20.6037 1.0802H27.5627C27.8637 1.0802 28.1097 0.8342 28.1097 0.5472C28.1097 0.2462 27.8637 0.0002 27.5627 0.0002H20.4807C19.4687 0.0002 18.7437 0.4782 18.3887 1.2852L8.5037 23.2692C8.2987 23.7482 7.7927 24.0902 7.2597 24.0902H0.5467C0.2457 24.0902 -0.0003 24.3222 -0.0003 24.6232C-0.0003 24.9242 0.2457 25.1702 0.5467 25.1702ZM17.2267 25.1702H27.5627C27.8637 25.1702 28.1097 24.9242 28.1097 24.6372C28.1097 24.3362 27.8637 24.0902 27.5627 24.0902H17.2267C16.9257 24.0902 16.6797 24.3362 16.6797 24.6372C16.6797 24.9242 16.9257 25.1702 17.2267 25.1702Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.1640625 25.169921875"
          className={className}
        >
          <path
            d="              M0.3277 25.1702H7.2327C8.0937 25.1702 8.8597 24.6372 9.2017 23.8712L19.3317 1.4082C19.5367 0.9432 20.0157 0.6562 20.6037 0.6562H27.8357C28.0277 0.6562 28.1637 0.5062 28.1637 0.3282C28.1637 0.1362 28.0277 0.0002 27.8357 0.0002H20.6177C19.6877 0.0002 19.0037 0.4512 18.7027 1.1482L8.5587 23.6522C8.3397 24.1442 7.8067 24.5132 7.2457 24.5132H0.3277C0.1507 24.5132 -0.0003 24.6642 -0.0003 24.8422C-0.0003 25.0332 0.1507 25.1702 0.3277 25.1702ZM17.0767 25.1702H27.8357C28.0277 25.1702 28.1637 25.0332 28.1637 24.8422C28.1637 24.6642 28.0277 24.5132 27.8357 24.5132H17.0767C16.8847 24.5132 16.7347 24.6642 16.7347 24.8422C16.7347 25.0332 16.8847 25.1702 17.0767 25.1702Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
