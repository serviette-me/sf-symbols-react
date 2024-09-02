import { IconProps } from "../../types"

export default function TwoSquareIconIcon({
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
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM6.0977 22.2583C5.2637 22.2583 4.8537 21.9023 4.8537 21.0003V6.0972C4.8537 5.1953 5.2637 4.8532 6.0977 4.8532H21.0137C21.8477 4.8532 22.2577 5.1953 22.2577 6.0972V21.0003C22.2577 21.9023 21.8477 22.2583 21.0137 22.2583ZM10.5407 19.4273H17.0627C18.3067 19.4273 19.0727 18.7583 19.0727 17.6643C19.0727 16.5703 18.3477 15.9273 17.0627 15.9273H14.8617V15.7913L16.2147 14.6423C17.8827 13.3023 18.5797 12.2503 18.5797 11.0193C18.5797 8.7913 16.5837 7.2873 13.6447 7.2873C11.2797 7.2873 9.3787 8.3123 8.8047 9.8983C8.6957 10.1723 8.6547 10.4593 8.6547 10.7463C8.6547 11.8263 9.4197 12.3593 10.5687 12.3593C11.4707 12.3593 11.8947 11.9353 12.2367 11.5113C12.5647 11.1293 12.8517 10.7323 13.3847 10.7323C13.8637 10.7323 14.1367 10.9923 14.1367 11.4023C14.1367 11.9083 13.8357 12.3863 12.8657 13.1933L9.6657 15.8593C8.8597 16.5293 8.6957 17.1033 8.6957 17.7463C8.6957 18.7302 9.4747 19.4273 10.5407 19.4273Z"
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
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM5.2087 22.6137C4.1157 22.6137 3.5277 22.0797 3.5277 20.9177V5.2367C3.5277 4.0737 4.1157 3.5277 5.2087 3.5277H20.9317C22.0257 3.5277 22.6137 4.0737 22.6137 5.2367V20.9177C22.6137 22.0797 22.0257 22.6137 20.9317 22.6137ZM10.0077 19.0997H16.7887C17.6777 19.0997 18.2517 18.5937 18.2517 17.7737C18.2517 16.9397 17.6917 16.4607 16.7887 16.4607H13.1937V16.3377L15.4907 14.0407C16.9397 12.7147 17.7047 11.6487 17.7047 10.2817C17.7047 8.1207 15.8727 6.6717 13.1387 6.6717C10.9927 6.6717 9.1877 7.7797 8.6677 9.3377C8.5857 9.5707 8.5587 9.8027 8.5587 10.0347C8.5587 10.8417 9.1187 11.2797 9.9527 11.2797C10.6507 11.2797 10.9927 10.9237 11.2797 10.5137C11.6207 9.8987 12.1267 9.2697 13.0567 9.2697C13.9457 9.2697 14.5197 9.7757 14.5197 10.5547C14.5197 11.2927 13.9457 11.9627 13.0567 12.7827L9.2697 16.4607C8.7497 16.9257 8.6137 17.3497 8.6137 17.8147C8.6137 18.5797 9.1737 19.0997 10.0077 19.0997Z"
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
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM5.6877 22.4355C4.7167 22.4355 4.2247 21.9985 4.2247 20.9725V5.7015C4.2247 4.6755 4.7167 4.2385 5.6877 4.2385H20.9727C21.9297 4.2385 22.4217 4.6755 22.4217 5.7015V20.9725C22.4217 21.9985 21.9297 22.4355 20.9727 22.4355ZM10.2817 19.2775H16.9257C18.0057 19.2775 18.6757 18.6895 18.6757 17.7185C18.6757 16.7485 18.0337 16.1875 16.9257 16.1875H14.0687V16.0505L15.8727 14.3695C17.4317 13.0295 18.1697 11.9765 18.1697 10.6775C18.1697 8.4905 16.2427 7.0135 13.4117 7.0135C11.1427 7.0135 9.2837 8.0665 8.7367 9.6385C8.6407 9.8985 8.5997 10.1585 8.5997 10.4175C8.5997 11.3615 9.2837 11.8675 10.2817 11.8675C11.0877 11.8675 11.4567 11.4705 11.7847 11.0465C12.1137 10.5545 12.5097 10.0485 13.2347 10.0485C13.9047 10.0485 14.3147 10.4175 14.3147 11.0055C14.3147 11.6215 13.8907 12.1955 12.9607 13.0015L9.4747 16.1465C8.8047 16.7205 8.6547 17.2265 8.6547 17.7875C8.6547 18.6625 9.3377 19.2775 10.2817 19.2775Z"
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
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM4.0607 23.0645C2.5297 23.0645 1.6957 22.2575 1.6957 20.6715V4.0875C1.6957 2.5155 2.5297 1.6955 4.0607 1.6955H20.6857C22.2027 1.6955 23.0647 2.5155 23.0647 4.0875V20.6715C23.0647 22.2575 22.2027 23.0645 20.6857 23.0645ZM9.3247 18.4985H16.3107C16.7347 18.4985 17.0347 18.2105 17.0347 17.7875C17.0347 17.3355 16.7347 17.0765 16.3107 17.0765H10.8827V16.9945L14.4377 13.1525C15.7227 11.7445 16.4607 10.7055 16.4607 9.3245C16.4607 7.2875 14.8747 5.9605 12.4827 5.9605C10.5547 5.9605 8.8727 7.1235 8.5037 8.6815C8.4627 8.8595 8.4497 9.0095 8.4497 9.1735C8.4497 9.5975 8.7367 9.8715 9.1597 9.8715C9.5567 9.8715 9.7617 9.6385 9.9257 9.2965C10.1997 8.2715 11.0877 7.3415 12.5367 7.3415C13.9867 7.3415 14.9157 8.1625 14.9157 9.4195C14.9157 10.4175 14.2187 11.2655 13.3297 12.2095L8.8187 17.1175C8.6267 17.3225 8.5447 17.5275 8.5447 17.7735C8.5447 18.2105 8.8317 18.4985 9.3247 18.4985Z"
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
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM4.6487 22.8453C3.3767 22.8453 2.6797 22.1753 2.6797 20.8493V4.6623C2.6797 3.3363 3.3767 2.6793 4.6487 2.6793H20.8767C22.1347 2.6793 22.8457 3.3363 22.8457 4.6623V20.8493C22.8457 22.1753 22.1347 22.8453 20.8767 22.8453ZM9.6797 18.8813H16.6117C17.2677 18.8813 17.7187 18.4703 17.7187 17.8283C17.7187 17.1723 17.2817 16.7893 16.6117 16.7893H12.1267V16.6793L15.0387 13.6443C16.3247 12.3323 17.1447 11.2523 17.1447 9.7893C17.1447 7.6833 15.4217 6.2753 12.8247 6.2753C10.8007 6.2753 9.0507 7.4243 8.5857 8.9683C8.5177 9.1873 8.4907 9.3793 8.4907 9.5703C8.4907 10.1993 8.9277 10.5823 9.5707 10.5823C10.1307 10.5823 10.4047 10.2673 10.6637 9.8713C11.0197 9.1193 11.6617 8.3263 12.8517 8.3263C13.9997 8.3263 14.7657 8.9823 14.7657 9.9943C14.7657 10.8963 14.0137 11.6753 13.1797 12.5093L9.0237 16.8433C8.6817 17.1723 8.5587 17.5003 8.5587 17.8423C8.5587 18.4703 8.9957 18.8813 9.6797 18.8813Z"
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
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM4.3207 22.9685C2.9527 22.9685 2.2017 22.2445 2.2017 20.8225V4.3475C2.2017 2.9255 2.9527 2.2015 4.3207 2.2015H20.8497C22.2027 2.2015 22.9687 2.9255 22.9687 4.3475V20.8225C22.9687 22.2445 22.2027 22.9685 20.8497 22.9685ZM9.4887 18.7575H16.5157C17.0487 18.7575 17.4317 18.4155 17.4317 17.8695C17.4317 17.2945 17.0487 16.9665 16.5157 16.9665H11.5257V16.8715L14.7797 13.4125C15.9827 12.1135 16.8297 11.0335 16.8297 9.5155C16.8297 7.4375 15.1617 6.0565 12.6327 6.0565C10.6917 6.0565 8.9827 7.2325 8.5317 8.7635C8.4767 8.9685 8.4627 9.1325 8.4627 9.3105C8.4627 9.8435 8.8187 10.1855 9.3517 10.1855C9.8437 10.1855 10.0767 9.8845 10.3227 9.5015C10.6777 8.6675 11.4027 7.7925 12.7287 7.7925C14.0277 7.7925 14.9027 8.5445 14.9027 9.6795C14.9027 10.6775 14.0547 11.5115 13.2477 12.3595L8.8867 17.0485C8.6407 17.3085 8.5177 17.5815 8.5177 17.8695C8.5177 18.4155 8.8867 18.7575 9.4887 18.7575Z"
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
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM4.8947 22.75C3.6917 22.75 3.0487 22.135 3.0487 20.877V4.908C3.0487 3.65 3.6917 3.049 4.8947 3.049H20.9047C22.0797 3.049 22.7497 3.65 22.7497 4.908V20.877C22.7497 22.135 22.0797 22.75 20.9047 22.75ZM9.8167 18.977H16.6937C17.4457 18.977 17.9517 18.525 17.9517 17.801C17.9517 17.076 17.4587 16.639 16.6937 16.639H12.5917V16.529L15.2307 13.809C16.5837 12.496 17.3907 11.43 17.3907 10.008C17.3907 7.875 15.6137 6.453 12.9607 6.453C10.8827 6.453 9.1057 7.574 8.6267 9.133C8.5447 9.352 8.5177 9.557 8.5177 9.775C8.5177 10.473 9.0097 10.883 9.7347 10.883C10.3497 10.883 10.6507 10.541 10.9237 10.145C11.2797 9.461 11.8537 8.736 12.9337 8.736C13.9867 8.736 14.6567 9.324 14.6567 10.227C14.6567 11.074 13.9867 11.799 13.1247 12.633L9.1327 16.68C8.7087 17.062 8.5727 17.432 8.5727 17.828C8.5727 18.512 9.0647 18.977 9.8167 18.977Z"
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
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM3.7187 23.1874C1.9417 23.1874 1.0117 22.2574 1.0117 20.4804V3.7324C1.0117 1.9414 1.9417 1.0114 3.7187 1.0114H20.4807C22.2027 1.0114 23.1877 1.9414 23.1877 3.7324V20.4804C23.1877 22.2574 22.2027 23.1874 20.4807 23.1874ZM9.1057 18.1294H16.0367C16.3107 18.1294 16.5017 17.9374 16.5017 17.6644C16.5017 17.3774 16.3107 17.1994 16.0367 17.1994H10.0347V17.1174L13.9867 12.7694C15.3677 11.2524 15.9547 10.2674 15.9547 9.0504C15.9547 7.0954 14.4927 5.8104 12.2637 5.8104C10.3767 5.8104 8.7367 6.9454 8.4767 8.5584C8.4497 8.7094 8.4217 8.8324 8.4217 8.9554C8.4217 9.2554 8.6137 9.4474 8.9007 9.4474C9.2017 9.4474 9.3517 9.2834 9.4067 9.0234C9.5707 7.7244 10.6917 6.7264 12.2907 6.7264C13.9177 6.7264 14.9437 7.6424 14.9437 9.0644C14.9437 10.0624 14.4377 10.9104 13.4397 12.0044L8.7497 17.1724C8.6137 17.3224 8.5727 17.4454 8.5727 17.6234C8.5727 17.9374 8.7637 18.1294 9.1057 18.1294Z"
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
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM3.5407 23.242C1.6547 23.242 0.6697 22.258 0.6697 20.371V3.541C0.6697 1.641 1.6547 0.67 3.5407 0.67H20.3707C22.2027 0.67 23.2557 1.641 23.2557 3.541V20.371C23.2557 22.258 22.2027 23.242 20.3707 23.242ZM8.9827 17.938H15.9007C16.0917 17.938 16.2287 17.787 16.2287 17.596C16.2287 17.391 16.0917 17.254 15.9007 17.254H9.6117V17.186L13.7537 12.578C15.1897 10.992 15.6957 10.035 15.6957 8.9C15.6957 6.986 14.3007 5.729 12.1677 5.729C10.2817 5.729 8.6547 6.863 8.4497 8.49C8.4357 8.627 8.4217 8.736 8.4217 8.846C8.4217 9.078 8.5587 9.229 8.7777 9.229C9.0097 9.229 9.1327 9.105 9.1467 8.887C9.2427 7.438 10.4867 6.412 12.1677 6.412C13.8767 6.412 14.9707 7.369 14.9707 8.887C14.9707 9.871 14.5607 10.732 13.5077 11.895L8.7087 17.199C8.6137 17.322 8.5727 17.404 8.5727 17.541C8.5727 17.787 8.7367 17.938 8.9827 17.938Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}