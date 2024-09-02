import { IconProps } from "../../types"

export default function BellSquareIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.111328125 27.111328125"
          className={className}
        >
          <path
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM6.0977 22.2583C5.2637 22.2583 4.8537 21.9023 4.8537 21.0003V6.0972C4.8537 5.1953 5.2637 4.8532 6.0977 4.8532H21.0137C21.8477 4.8532 22.2577 5.1953 22.2577 6.0972V21.0003C22.2577 21.9023 21.8477 22.2583 21.0137 22.2583ZM8.1757 17.7463H18.9497C19.8657 17.7463 20.4667 17.1583 20.4667 16.3103C20.4667 15.4493 19.9747 14.8203 19.2907 14.3143C18.7167 13.9043 18.6347 12.9203 18.4157 11.5933C18.1017 9.6113 17.2407 8.0392 15.7087 7.4923C15.3397 6.5903 14.5607 6.0153 13.5627 6.0153C12.5777 6.0153 11.7847 6.5903 11.4157 7.4923C9.8847 8.0392 8.9957 9.6113 8.7227 11.5933C8.5177 12.9203 8.4217 13.9043 7.8477 14.3143C7.1637 14.8343 6.6587 15.4493 6.6587 16.3103C6.6587 17.1583 7.2597 17.7463 8.1757 17.7463ZM13.5627 21.0133C14.9437 21.0133 15.9547 20.0973 16.0237 18.9763H11.1157C11.1837 20.0973 12.1957 21.0133 13.5627 21.0133Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.140625 26.140625"
          className={className}
        >
          <path
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM5.2087 22.6137C4.1157 22.6137 3.5277 22.0797 3.5277 20.9177V5.2367C3.5277 4.0737 4.1157 3.5277 5.2087 3.5277H20.9317C22.0257 3.5277 22.6137 4.0737 22.6137 5.2367V20.9177C22.6137 22.0797 22.0257 22.6137 20.9317 22.6137ZM7.3827 17.6367H18.7847C19.6057 17.6367 20.1117 17.1577 20.1117 16.4607C20.1117 15.6407 19.4827 14.9977 18.7987 14.4097C18.2517 13.9317 18.1697 12.8927 18.0337 11.7987C17.8417 9.3647 17.0217 7.5737 15.2577 6.9317C14.9297 5.9887 14.1367 5.3187 13.0837 5.3187C12.0317 5.3187 11.2517 5.9887 10.9097 6.9317C9.1467 7.5737 8.3127 9.3647 8.1487 11.7987C8.0117 12.8927 7.9027 13.9317 7.3687 14.4097C6.6997 15.0117 6.0707 15.6407 6.0707 16.4607C6.0707 17.1577 6.5767 17.6367 7.3827 17.6367ZM13.0837 20.8497C14.4097 20.8497 15.3947 19.9337 15.4767 18.8127H10.7047C10.7867 19.9337 11.7577 20.8497 13.0837 20.8497Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.66015625 26.66015625"
          className={className}
        >
          <path
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM5.6877 22.4355C4.7167 22.4355 4.2247 21.9985 4.2247 20.9725V5.7015C4.2247 4.6755 4.7167 4.2385 5.6877 4.2385H20.9727C21.9297 4.2385 22.4217 4.6755 22.4217 5.7015V20.9725C22.4217 21.9985 21.9297 22.4355 20.9727 22.4355ZM7.8067 17.7055H18.8807C19.7427 17.7055 20.3027 17.1585 20.3027 16.3785C20.3027 15.5445 19.7427 14.9165 19.0587 14.3695C18.4977 13.9175 18.4157 12.9195 18.2247 11.7035C17.9787 9.5015 17.1447 7.8335 15.4907 7.2325C15.1487 6.3165 14.3557 5.7015 13.3437 5.7015C12.3187 5.7015 11.5387 6.3165 11.1837 7.2325C9.5427 7.8335 8.6677 9.5015 8.4497 11.7035C8.2717 12.9195 8.1757 13.9175 7.6157 14.3695C6.9457 14.9165 6.3847 15.5445 6.3847 16.3785C6.3847 17.1585 6.9457 17.7055 7.8067 17.7055ZM13.3437 20.9455C14.6977 20.9455 15.6817 20.0295 15.7637 18.9085H10.9237C10.9927 20.0295 11.9907 20.9455 13.3437 20.9455Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.759765625 24.759765625"
          className={className}
        >
          <path
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM4.0607 23.0645C2.5297 23.0645 1.6957 22.2575 1.6957 20.6715V4.0875C1.6957 2.5155 2.5297 1.6955 4.0607 1.6955H20.6857C22.2027 1.6955 23.0647 2.5155 23.0647 4.0875V20.6715C23.0647 22.2575 22.2027 23.0645 20.6857 23.0645ZM6.1797 17.3085H18.6077C19.1407 17.3085 19.4687 17.0075 19.4687 16.5705C19.4687 15.8045 18.7437 15.1485 18.0877 14.4785C17.4587 13.7945 17.4317 12.4145 17.2947 11.2105C17.1717 8.6545 16.3927 6.8355 14.4647 6.1935C14.2187 5.1815 13.4397 4.4295 12.4007 4.4295C11.3477 4.4295 10.5817 5.1815 10.3227 6.1935C8.4087 6.8355 7.6287 8.6545 7.4927 11.2105C7.3687 12.4145 7.3147 13.7815 6.6997 14.4785C6.0707 15.1625 5.3187 15.8045 5.3187 16.5705C5.3187 17.0075 5.6467 17.3085 6.1797 17.3085ZM12.4007 20.3305C13.6307 20.3305 14.4927 19.4825 14.6157 18.3615H10.1717C10.2947 19.4825 11.1567 20.3305 12.4007 20.3305Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.525390625 25.525390625"
          className={className}
        >
          <path
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM4.6487 22.8453C3.3767 22.8453 2.6797 22.1753 2.6797 20.8493V4.6623C2.6797 3.3363 3.3767 2.6793 4.6487 2.6793H20.8767C22.1347 2.6793 22.8457 3.3363 22.8457 4.6623V20.8493C22.8457 22.1753 22.1347 22.8453 20.8767 22.8453ZM6.8767 17.5413H18.6897C19.4277 17.5413 19.8787 17.1443 19.8787 16.5433C19.8787 15.7633 19.1677 15.1073 18.4977 14.4513C17.9647 13.9453 17.8687 12.8793 17.7867 11.9223C17.6777 9.1873 16.8847 7.2733 14.9707 6.5763C14.6567 5.6053 13.8637 4.8533 12.7837 4.8533C11.6897 4.8533 10.9097 5.6053 10.5957 6.5763C8.6817 7.2733 7.8747 9.1873 7.7797 11.9223C7.6977 12.8793 7.5747 13.9453 7.0687 14.4513C6.4117 15.1213 5.6877 15.7633 5.6877 16.5433C5.6877 17.1443 6.1387 17.5413 6.8767 17.5413ZM12.7837 20.7263C14.0817 20.7263 15.0387 19.8103 15.1207 18.7033H10.4457C10.5277 19.8103 11.4847 20.7263 12.7837 20.7263Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.169921875 25.169921875"
          className={className}
        >
          <path
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM4.3207 22.9685C2.9527 22.9685 2.2017 22.2445 2.2017 20.8225V4.3475C2.2017 2.9255 2.9527 2.2015 4.3207 2.2015H20.8497C22.2027 2.2015 22.9687 2.9255 22.9687 4.3475V20.8225C22.9687 22.2445 22.2027 22.9685 20.8497 22.9685ZM6.5897 17.4995H18.6347C19.3317 17.4995 19.7427 17.1305 19.7427 16.5975C19.7427 15.8315 18.9907 15.1625 18.3207 14.4785C17.8007 13.9455 17.7047 12.8655 17.6507 12.0035C17.5957 9.0915 16.8027 7.0955 14.8067 6.3575C14.5057 5.3865 13.7127 4.5935 12.6057 4.5935C11.4977 4.5935 10.7187 5.3865 10.4047 6.3575C8.4087 7.0955 7.6287 9.0915 7.5747 12.0035C7.5197 12.8655 7.3967 13.9455 6.8907 14.4785C6.2477 15.1755 5.4687 15.8315 5.4687 16.5975C5.4687 17.1305 5.8787 17.4995 6.5897 17.4995ZM12.6057 20.6585C13.8907 20.6585 14.8337 19.7425 14.9297 18.6345H10.2947C10.3907 19.7425 11.3207 20.6585 12.6057 20.6585Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.78515625 25.78515625"
          className={className}
        >
          <path
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM4.8947 22.75C3.6917 22.75 3.0487 22.135 3.0487 20.877V4.908C3.0487 3.65 3.6917 3.049 4.8947 3.049H20.9047C22.0797 3.049 22.7497 3.65 22.7497 4.908V20.877C22.7497 22.135 22.0797 22.75 20.9047 22.75ZM7.0957 17.582H18.7307C19.4957 17.582 19.9747 17.145 19.9747 16.502C19.9747 15.709 19.3047 15.066 18.6347 14.437C18.0877 13.945 18.0057 12.893 17.8827 11.881C17.7597 9.27 16.9397 7.41 15.0937 6.727C14.7657 5.77 13.9867 5.059 12.9067 5.059C11.8397 5.059 11.0607 5.77 10.7327 6.727C8.8867 7.41 8.0667 9.27 7.9297 11.881C7.8337 12.893 7.7247 13.932 7.1917 14.437C6.5347 15.066 5.8517 15.709 5.8517 16.502C5.8517 17.145 6.3297 17.582 7.0957 17.582ZM12.9067 20.781C14.2327 20.781 15.1897 19.865 15.2717 18.758H10.5547C10.6367 19.865 11.5937 20.781 12.9067 20.781Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.19921875 24.19921875"
          className={className}
        >
          <path
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM3.7187 23.1874C1.9417 23.1874 1.0117 22.2574 1.0117 20.4804V3.7324C1.0117 1.9414 1.9417 1.0114 3.7187 1.0114H20.4807C22.2027 1.0114 23.1877 1.9414 23.1877 3.7324V20.4804C23.1877 22.2574 22.2027 23.1874 20.4807 23.1874ZM5.6327 17.0354H18.5937C18.8947 17.0354 19.0997 16.8304 19.0997 16.5434C19.0997 15.7634 18.4157 15.1214 17.7867 14.4514C16.9937 13.5764 17.0627 11.7854 16.8437 10.1444C16.6247 8.0664 15.8317 6.4534 14.0137 5.9614C13.8357 4.9084 13.0837 4.1974 12.1137 4.1974C11.1427 4.1974 10.3907 4.9084 10.2127 5.9614C8.3947 6.4534 7.6157 8.0664 7.3827 10.1444C7.1637 11.7854 7.2187 13.5624 6.4397 14.4514C5.8247 15.1344 5.1267 15.7634 5.1267 16.5434C5.1267 16.8304 5.3187 17.0354 5.6327 17.0354ZM12.1137 19.8654C13.2757 19.8654 14.0547 19.1274 14.2187 17.9644H10.0077C10.1717 19.1274 10.9517 19.8654 12.1137 19.8654Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.92578125 23.912109375"
          className={className}
        >
          <path
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM3.5407 23.242C1.6547 23.242 0.6697 22.258 0.6697 20.371V3.541C0.6697 1.641 1.6547 0.67 3.5407 0.67H20.3707C22.2027 0.67 23.2557 1.641 23.2557 3.541V20.371C23.2557 22.258 22.2027 23.242 20.3707 23.242ZM5.3597 16.898H18.5797C18.7717 16.898 18.9087 16.734 18.9087 16.516C18.9087 15.736 18.2517 15.107 17.6367 14.424C16.7617 13.453 16.8707 11.471 16.5977 9.598C16.3377 7.752 15.5587 6.262 13.7817 5.838C13.6447 4.772 12.9067 4.074 11.9627 4.074C11.0337 4.074 10.2947 4.772 10.1587 5.838C8.3807 6.262 7.6157 7.752 7.3277 9.598C7.0687 11.471 7.1637 13.439 6.3027 14.424C5.7017 15.107 5.0317 15.736 5.0317 16.516C5.0317 16.734 5.1547 16.898 5.3597 16.898ZM11.9627 19.633C13.0977 19.633 13.8227 18.936 13.9997 17.76H9.9257C10.1037 18.936 10.8417 19.633 11.9627 19.633Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
