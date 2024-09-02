import { IconProps } from "../../types"

export default function PhotoFillIconIcon({
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
            d="              M5.3597 27.1113H27.6717C31.0487 27.1113 33.0317 25.1293 33.0317 21.7523V5.3592C33.0317 1.9683 31.0487 0.0003 27.6717 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM12.4547 13.5083C10.5137 13.5083 8.9137 11.9083 8.9137 9.9533C8.9137 8.0253 10.5137 6.4123 12.4547 6.4123C14.3967 6.4123 15.9957 8.0253 15.9957 9.9533C15.9957 11.9083 14.3967 13.5083 12.4547 13.5083ZM6.3167 22.2583C5.4137 22.2583 4.8537 21.6973 4.8537 20.7953V18.6213L7.2737 16.4883C7.8617 15.9823 8.3267 15.7363 9.0367 15.7363C9.6657 15.7363 10.3087 15.9963 10.8967 16.5153L13.3987 18.7583L19.5777 13.2343C20.1797 12.6873 20.8767 12.4413 21.6157 12.4413C22.3127 12.4413 23.0507 12.7013 23.6247 13.2483L28.1777 17.4453V20.7813C28.1777 21.6973 27.4937 22.2583 26.7147 22.2583Z"
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
            d="              M4.8267 26.1407H27.8087C30.9397 26.1407 32.6347 24.4457 32.6347 21.3417V4.7987C32.6347 1.6957 30.9397 -0.0003 27.8087 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM11.3617 13.2207C9.4477 13.2207 7.8887 11.6617 7.8887 9.7617C7.8887 7.8747 9.4477 6.2887 11.3617 6.2887C13.2477 6.2887 14.8067 7.8747 14.8067 9.7617C14.8067 11.6617 13.2477 13.2207 11.3617 13.2207ZM5.3187 22.6137C4.2107 22.6137 3.5277 21.9437 3.5277 20.8227V19.3187L6.8357 16.4197C7.4237 15.9007 7.9847 15.6407 8.6407 15.6407C9.2967 15.6407 9.9667 15.9137 10.5547 16.4477L13.1247 18.7437L19.4687 13.0837C20.1117 12.5097 20.8357 12.2497 21.5877 12.2497C22.3127 12.2497 23.0777 12.5237 23.6937 13.0977L29.1077 18.1147V20.8227C29.1077 21.9437 28.3557 22.6137 27.3297 22.6137Z"
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
            d="              M5.1137 26.6605H27.7267C30.9937 26.6605 32.8397 24.8145 32.8397 21.5605V5.0995C32.8397 1.8455 30.9937 -0.0005 27.7267 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM11.9357 13.3715C10.0077 13.3715 8.4357 11.7985 8.4357 9.8715C8.4357 7.9575 10.0077 6.3575 11.9357 6.3575C13.8497 6.3575 15.4357 7.9575 15.4357 9.8715C15.4357 11.7985 13.8497 13.3715 11.9357 13.3715ZM5.8377 22.4355C4.8397 22.4355 4.2247 21.8205 4.2247 20.8085V18.9625L7.0687 16.4605C7.6567 15.9555 8.1617 15.6955 8.8457 15.6955C9.4887 15.6955 10.1447 15.9685 10.7327 16.4885L13.2617 18.7575L19.5237 13.1665C20.1527 12.6055 20.8497 12.3595 21.6017 12.3595C22.3127 12.3595 23.0647 12.6325 23.6527 13.1795L28.6157 17.7735V20.8085C28.6157 21.8205 27.9047 22.4355 27.0017 22.4355Z"
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
            d="              M4.0337 24.7601H27.9867C30.6657 24.7601 32.0197 23.3921 32.0197 20.7671V3.9921C32.0197 1.3671 30.6657 0.0001 27.9867 0.0001H4.0337C1.3677 0.0001 -0.0003 1.3531 -0.0003 3.9921V20.7671C-0.0003 23.4061 1.3677 24.7601 4.0337 24.7601ZM9.8577 12.6601C8.0257 12.6601 6.5347 11.1561 6.5347 9.3241C6.5347 7.5061 8.0257 6.0021 9.8577 6.0021C11.6757 6.0021 13.1657 7.5061 13.1657 9.3241C13.1657 11.1561 11.6757 12.6601 9.8577 12.6601ZM4.0197 23.0781C2.5707 23.0781 1.6957 22.2171 1.6957 20.7541V20.0151L6.2347 16.0921C6.8637 15.5451 7.5197 15.2581 8.1207 15.2581C8.7907 15.2581 9.4887 15.5451 10.1037 16.1191L12.6737 18.4431L19.2227 12.7011C19.9337 12.0721 20.7127 11.7711 21.4647 11.7711C22.2437 11.7711 23.0507 12.0861 23.7347 12.7151L30.3247 18.7301V20.7671C30.3247 22.2171 29.4497 23.0781 28.0137 23.0781Z"
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
            d="              M4.4847 25.5113H27.9047C30.8577 25.5113 32.3887 23.9943 32.3887 21.0823V4.4293C32.3887 1.5173 30.8577 0.0003 27.9047 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5043 -0.0003 4.4293V21.0823C-0.0003 23.9943 1.5317 25.5113 4.4847 25.5113ZM10.6507 13.0293C8.7777 13.0293 7.2457 11.4983 7.2457 9.6253C7.2457 7.7653 8.7777 6.2073 10.6507 6.2073C12.5097 6.2073 14.0407 7.7653 14.0407 9.6253C14.0407 11.4983 12.5097 13.0293 10.6507 13.0293ZM4.6757 22.8453C3.4317 22.8453 2.6797 22.0933 2.6797 20.8363V19.7563L6.5627 16.3653C7.1507 15.8453 7.7797 15.5723 8.3947 15.5723C9.0647 15.5723 9.7477 15.8453 10.3497 16.3923L12.9477 18.7303L19.4137 12.9743C20.0707 12.3863 20.8087 12.1133 21.5747 12.1133C22.3127 12.1133 23.0917 12.4143 23.7347 13.0023L29.7087 18.5253V20.8493C29.7087 22.0933 28.9157 22.8453 27.7127 22.8453Z"
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
            d="              M4.2927 25.1702H27.9457C30.8167 25.1702 32.2387 23.7622 32.2387 20.9452V4.2382C32.2387 1.4222 30.8167 0.0002 27.9457 0.0002H4.2927C1.4357 0.0002 -0.0003 1.4222 -0.0003 4.2382V20.9452C-0.0003 23.7622 1.4357 25.1702 4.2927 25.1702ZM10.2537 12.9332C8.3947 12.9332 6.8767 11.4162 6.8767 9.5562C6.8767 7.7112 8.3947 6.1792 10.2537 6.1792C12.0997 6.1792 13.6177 7.7112 13.6177 9.5562C13.6177 11.4162 12.0997 12.9332 10.2537 12.9332ZM4.3207 22.9822C2.9937 22.9822 2.2017 22.1892 2.2017 20.8492V20.0152L6.3987 16.3512C6.9997 15.8182 7.6567 15.5452 8.2577 15.5452C8.9277 15.5452 9.6247 15.8182 10.2267 16.3792L12.8377 18.7302L19.3727 12.9332C20.0427 12.3322 20.7947 12.0582 21.5747 12.0582C22.3267 12.0582 23.1057 12.3452 23.7477 12.9472L30.0367 18.7712V20.8772C30.0367 22.1892 29.2307 22.9822 27.9317 22.9822Z"
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
            d="              M4.6347 25.785H27.8637C30.8847 25.785 32.4977 24.186 32.4977 21.191V4.594C32.4977 1.6 30.8847 0 27.8637 0H4.6347C1.6137 0 -0.0003 1.586 -0.0003 4.594V21.191C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM10.9517 13.111C9.0647 13.111 7.5197 11.566 7.5197 9.68C7.5197 7.807 9.0647 6.248 10.9517 6.248C12.8247 6.248 14.3687 7.807 14.3687 9.68C14.3687 11.566 12.8247 13.111 10.9517 13.111ZM4.9497 22.75C3.7597 22.75 3.0487 22.025 3.0487 20.822V19.578L6.6717 16.393C7.2737 15.873 7.8617 15.6 8.5037 15.6C9.1597 15.6 9.8437 15.873 10.4457 16.42L13.0157 18.73L19.4417 13.029C20.0977 12.441 20.8227 12.168 21.5877 12.168C22.3127 12.168 23.0917 12.455 23.7067 13.043L29.4497 18.348V20.836C29.4497 22.025 28.6697 22.75 27.5487 22.75Z"
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
            d="              M3.6917 24.1997H28.0407C30.4607 24.1997 31.7187 22.9137 31.7187 20.5217V3.6777C31.7187 1.2847 30.4607 -0.0003 28.0407 -0.0003H3.6917C1.2717 -0.0003 -0.0003 1.2577 -0.0003 3.6777V20.5217C-0.0003 22.9417 1.2717 24.1997 3.6917 24.1997ZM9.3377 12.2777C7.5337 12.2777 6.0707 10.8147 6.0707 9.0237C6.0707 7.2457 7.5337 5.7697 9.3377 5.7697C11.1157 5.7697 12.5777 7.2457 12.5777 9.0237C12.5777 10.8147 11.1157 12.2777 9.3377 12.2777ZM3.6097 23.2147C1.9957 23.2147 1.0117 22.2437 1.0117 20.6167V20.0157L6.0297 15.7497C6.6717 15.1897 7.3277 14.8887 7.9437 14.8887C8.5997 14.8887 9.2967 15.1897 9.9397 15.7777L12.4417 18.0747L19.0317 12.3727C19.7837 11.7307 20.5897 11.3887 21.3417 11.3887C22.1207 11.3887 22.9687 11.7307 23.7067 12.4007L30.7067 18.6617V20.6167C30.7067 22.2437 29.7227 23.2147 28.1227 23.2147Z"
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
            d="              M3.5137 23.926H28.0687C30.3517 23.926 31.5687 22.668 31.5687 20.412V3.514C31.5687 1.258 30.3517 0 28.0687 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.412C-0.0003 22.709 1.2167 23.926 3.5137 23.926ZM9.0647 12.1C7.2867 12.1 5.8377 10.65 5.8377 8.873C5.8377 7.109 7.2867 5.646 9.0647 5.646C10.8277 5.646 12.2777 7.109 12.2777 8.873C12.2777 10.65 10.8277 12.1 9.0647 12.1ZM3.4047 23.283C1.7087 23.283 0.6697 22.272 0.6697 20.549V20.016L5.9197 15.572C6.5767 15.012 7.2327 14.697 7.8477 14.697C8.5037 14.697 9.2017 15.012 9.8577 15.6L12.3317 17.896L18.9217 12.223C19.7147 11.553 20.5347 11.184 21.2737 11.184C22.0667 11.184 22.9277 11.553 23.6937 12.236L30.8987 18.635V20.549C30.8987 22.272 29.8727 23.283 28.1637 23.283Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}