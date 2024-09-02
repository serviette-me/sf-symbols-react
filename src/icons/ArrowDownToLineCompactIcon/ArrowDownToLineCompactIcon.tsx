import { IconProps } from "../../types"

export default function ArrowDownToLineCompactIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.560546875 26.373046875"
          className={className}
        >
          <path
            d="              M2.5977 21.1778C1.1487 21.1778 -0.0003 22.3538 -0.0003 23.7758C-0.0003 25.2108 1.1487 26.3728 2.5977 26.3728H18.9497C20.3987 26.3728 21.5607 25.2108 21.5607 23.7758C21.5607 22.3538 20.3987 21.1778 18.9497 21.1778H11.2247C11.8537 21.0818 12.3867 20.7948 12.7837 20.4118L20.1387 13.6038C20.7127 13.0708 20.9997 12.3598 20.9997 11.7308C20.9997 10.0758 19.8787 9.0098 18.4157 9.0098C17.5547 9.0098 16.9397 9.4338 16.4477 9.9258L14.7797 11.5528L13.2347 13.3708L13.5217 10.7048V2.8988C13.5217 1.1488 12.4277 -0.0002 10.7737 -0.0002C9.1187 -0.0002 8.0387 1.1488 8.0387 2.8988V10.7048L8.3127 13.3708L6.7817 11.5528L5.1267 9.9258C4.6077 9.4058 4.0197 9.0098 3.1587 9.0098C1.6957 9.0098 0.5747 10.0758 0.5747 11.7308C0.5747 12.3598 0.8617 13.0708 1.4217 13.6038L8.7637 20.4118C9.1597 20.7948 9.7067 21.0818 10.3227 21.1778Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.19140625 25.224609375"
          className={className}
        >
          <path
            d="              M1.8867 21.4106C0.8207 21.4106 -0.0003 22.2446 -0.0003 23.3246C-0.0003 24.3906 0.8207 25.2246 1.8867 25.2246H19.2907C20.3707 25.2246 21.1917 24.3906 21.1917 23.3246C21.1917 22.2446 20.3707 21.4106 19.2907 21.4106H10.9787C11.3887 21.3286 11.7717 21.1226 12.0587 20.8356L20.2617 12.8926C20.6857 12.4826 20.8907 11.9906 20.8907 11.4976C20.8907 10.3356 20.0837 9.5426 19.0037 9.5426C18.4027 9.5426 17.9377 9.8166 17.5817 10.1716L15.2167 12.4966L12.3867 15.6546L12.5777 12.8516V2.0506C12.5777 0.8206 11.7847 -0.0004 10.5957 -0.0004C9.4067 -0.0004 8.6137 0.8206 8.6137 2.0506V12.8516L8.8047 15.6546L5.9747 12.4966L3.6227 10.1716C3.2537 9.8026 2.7887 9.5426 2.2017 9.5426C1.1207 9.5426 0.3147 10.3356 0.3147 11.4976C0.3147 11.9906 0.5197 12.4826 0.9437 12.8926L9.1327 20.8356C9.4197 21.1226 9.8027 21.3286 10.2267 21.4106Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.3828125 25.853515625"
          className={className}
        >
          <path
            d="              M2.2557 21.301C0.9977 21.301 -0.0003 22.312 -0.0003 23.57C-0.0003 24.828 0.9977 25.854 2.2557 25.854H19.1137C20.3847 25.854 21.3827 24.828 21.3827 23.57C21.3827 22.312 20.3847 21.301 19.1137 21.301H11.1157C11.6347 21.205 12.0997 20.959 12.4417 20.631L20.1937 13.289C20.6997 12.797 20.9457 12.195 20.9457 11.635C20.9457 10.213 19.9747 9.283 18.6897 9.283C17.9517 9.283 17.4177 9.625 16.9807 10.062L14.9847 12.004L12.8377 14.465L13.0707 11.73V2.502C13.0707 0.998 12.1267 0 10.6917 0C9.2557 0 8.3127 0.998 8.3127 2.502V11.73L8.5447 14.465L6.3987 12.004L4.4157 10.062C3.9647 9.611 3.4457 9.283 2.7067 9.283C1.4217 9.283 0.4517 10.213 0.4517 11.635C0.4517 12.195 0.6977 12.797 1.2027 13.289L8.9417 20.631C9.2837 20.959 9.7477 21.205 10.2677 21.301Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.603515625 23.857421875"
          className={className}
        >
          <path
            d="              M0.9027 22.012C0.3687 22.012 -0.0003 22.395 -0.0003 22.941C-0.0003 23.475 0.3687 23.857 0.9027 23.857H19.6877C20.2347 23.857 20.6037 23.475 20.6037 22.941C20.6037 22.395 20.2347 22.012 19.6877 22.012H10.5407C10.7047 21.957 10.8687 21.861 10.9927 21.725L20.1527 12.592C20.3707 12.359 20.4937 12.127 20.4937 11.84C20.4937 11.32 20.1117 10.938 19.5917 10.938C19.3317 10.938 19.0727 11.033 18.8947 11.211L14.8747 15.217L11.1567 19.195L11.2247 16.242V0.916C11.2247 0.369 10.8417 0 10.3087 0C9.7617 0 9.3787 0.369 9.3787 0.916V16.242L9.4607 19.209L5.7287 15.217L1.7227 11.211C1.5447 11.033 1.2847 10.938 1.0257 10.938C0.5057 10.938 0.1227 11.32 0.1227 11.84C0.1227 12.127 0.2457 12.359 0.4647 12.592L9.6117 21.725C9.7477 21.861 9.8987 21.957 10.0627 22.012Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.958984375 24.513671875"
          className={className}
        >
          <path
            d="              M1.4357 21.5601C0.6017 21.5601 -0.0003 22.1891 -0.0003 23.0371C-0.0003 23.8851 0.6017 24.5141 1.4357 24.5141H19.4957C20.3437 24.5141 20.9587 23.8851 20.9587 23.0371C20.9587 22.1891 20.3437 21.5601 19.4957 21.5601H10.8007C11.1017 21.5061 11.3747 21.3421 11.5937 21.1091L20.3297 12.4551C20.6587 12.1271 20.8227 11.7581 20.8227 11.3611C20.8227 10.5141 20.2067 9.8981 19.3867 9.8981C18.9627 9.8981 18.5797 10.0761 18.3067 10.3501L15.4907 13.1111L11.8397 17.1171L11.9767 14.2461V1.5171C11.9767 0.6151 11.3617 0.0001 10.4867 0.0001C9.5977 0.0001 8.9827 0.6151 8.9827 1.5171V14.2461L9.1187 17.1311L5.4687 13.1111L2.6657 10.3501C2.3787 10.0621 2.0097 9.8981 1.5857 9.8981C0.7517 9.8981 0.1507 10.5141 0.1507 11.3611C0.1507 11.7581 0.3007 12.1271 0.6287 12.4551L9.3657 21.1091C9.5837 21.3421 9.8577 21.5061 10.1587 21.5601Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.822265625 24.103515625"
          className={className}
        >
          <path
            d="              M1.1757 21.656C0.4787 21.656 -0.0003 22.162 -0.0003 22.873C-0.0003 23.584 0.4787 24.104 1.1757 24.104H19.6187C20.3297 24.104 20.8227 23.584 20.8227 22.873C20.8227 22.162 20.3297 21.656 19.6187 21.656H10.6917C10.9237 21.588 11.1427 21.465 11.3337 21.26L20.3707 12.209C20.6447 11.922 20.7817 11.621 20.7817 11.293C20.7817 10.609 20.2757 10.09 19.5917 10.09C19.2637 10.09 18.9357 10.213 18.7167 10.432L15.6547 13.453L11.5387 17.951L11.6347 15.025V1.217C11.6347 0.506 11.1287 0 10.4177 0C9.6937 0 9.1877 0.506 9.1877 1.217V15.025L9.2967 17.965L5.1817 13.453L2.1187 10.432C1.8867 10.213 1.5727 10.09 1.2437 10.09C0.5467 10.09 0.0547 10.609 0.0547 11.293C0.0547 11.621 0.1917 11.922 0.4517 12.209L9.5017 21.26C9.6797 21.465 9.8987 21.588 10.1307 21.656Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.0546875 24.814453125"
          className={className}
        >
          <path
            d="              M1.6267 21.4925C0.6977 21.4925 -0.0003 22.2165 -0.0003 23.1605C-0.0003 24.1035 0.6977 24.8145 1.6267 24.8145H19.4137C20.3577 24.8145 21.0547 24.1035 21.0547 23.1605C21.0547 22.2165 20.3577 21.4925 19.4137 21.4925H10.8687C11.2247 21.4235 11.5387 21.2465 11.7987 20.9865L20.3027 12.6465C20.6717 12.2775 20.8497 11.8535 20.8497 11.4165C20.8497 10.4315 20.1527 9.7485 19.2227 9.7485C18.7167 9.7485 18.3067 9.9535 17.9927 10.2675L15.3677 12.8375L12.0727 16.4885L12.2367 13.6445V1.7505C12.2367 0.6975 11.5387 0.0005 10.5277 0.0005C9.5157 0.0005 8.8187 0.6975 8.8187 1.7505V13.6445L8.9827 16.5015L5.6877 12.8375L3.0767 10.2675C2.7617 9.9535 2.3517 9.7485 1.8457 9.7485C0.9157 9.7485 0.2187 10.4315 0.2187 11.4165C0.2187 11.8535 0.3967 12.2775 0.7657 12.6465L9.2697 20.9865C9.5157 21.2465 9.8297 21.4235 10.1857 21.4925Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.31640625 23.583984375"
          className={className}
        >
          <path
            d="              M0.5197 22.5173C0.2047 22.5173 -0.0003 22.7223 -0.0003 23.0513C-0.0003 23.3653 0.2047 23.5843 0.5197 23.5843H19.7837C20.0977 23.5843 20.3167 23.3653 20.3167 23.0513C20.3167 22.7223 20.0977 22.5173 19.7837 22.5173H10.3357C10.4177 22.4763 10.4867 22.4222 10.5547 22.3672L19.8517 13.1113C20.0157 12.9613 20.1247 12.8103 20.1247 12.6053C20.1247 12.2913 19.8927 12.0723 19.5777 12.0723C19.4137 12.0723 19.2497 12.1403 19.1407 12.2503L13.8497 17.5543L10.6367 20.8773L10.6917 17.8963V0.5332C10.6917 0.2183 10.4727 0.0003 10.1587 0.0003C9.8437 0.0003 9.6247 0.2183 9.6247 0.5332V17.8963L9.6657 20.8773L6.4667 17.5543L1.1897 12.2503C1.0797 12.1403 0.9027 12.0723 0.7387 12.0723C0.4377 12.0723 0.2047 12.2913 0.2047 12.6053C0.2047 12.8103 0.3147 12.9613 0.4647 13.1113L9.7617 22.3672C9.8167 22.4222 9.8987 22.4763 9.9807 22.5173Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.166015625 23.419921875"
          className={className}
        >
          <path
            d="              M0.3277 22.7502C0.1367 22.7502 -0.0003 22.8872 -0.0003 23.0922C-0.0003 23.2832 0.1367 23.4202 0.3277 23.4202H19.8247C20.0297 23.4202 20.1657 23.2832 20.1657 23.0922C20.1657 22.8872 20.0297 22.7502 19.8247 22.7502H10.2267C10.2677 22.7362 10.2947 22.7092 10.3357 22.6812L19.7017 13.3712C19.8247 13.2482 19.9337 13.1522 19.9337 12.9742C19.9337 12.7832 19.7837 12.6462 19.5777 12.6462C19.4547 12.6462 19.3457 12.7012 19.2637 12.7832L13.3297 18.7442L10.3767 21.7242L10.4177 18.7172V0.3282C10.4177 0.1362 10.2817 0.0002 10.0767 0.0002C9.8847 0.0002 9.7477 0.1362 9.7477 0.3282V18.7172L9.7757 21.7242L6.8357 18.7442L0.9157 12.7832C0.8337 12.7012 0.7107 12.6462 0.6017 12.6462C0.3967 12.6462 0.2457 12.7832 0.2457 12.9742C0.2457 13.1522 0.3557 13.2482 0.4647 13.3712L9.8297 22.6812C9.8577 22.7092 9.8987 22.7362 9.9397 22.7502Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}