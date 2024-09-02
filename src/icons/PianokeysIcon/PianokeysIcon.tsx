import { IconProps } from "../../types"

export default function PianokeysIconIcon({
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
            d="              M5.3597 27.1113H27.6717C31.0487 27.1113 33.0317 25.1293 33.0317 21.7523V5.3592C33.0317 1.9683 31.0487 0.0003 27.6717 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM6.0977 22.2583C5.2637 22.2583 4.8537 21.9023 4.8537 21.0003V6.0972C4.8537 5.1953 5.2637 4.8532 6.0977 4.8532H7.7517V14.3833C7.7517 15.2713 8.3267 15.6133 8.9137 15.6133H9.0367V22.2583ZM10.6637 15.6133C11.2517 15.6133 11.8267 15.2713 11.8267 14.3833V4.8532H14.4927V14.3833C14.4927 15.2853 15.2027 15.6133 15.6407 15.6133H15.7637V22.2583H10.5407V15.6133ZM17.4047 15.6133C17.9927 15.6133 18.5387 15.2713 18.5387 14.3833V4.8532H21.2047V14.3833C21.2047 15.2713 21.7797 15.6133 22.3677 15.6133H22.4907V22.2583H17.2677V15.6133ZM24.1177 15.6133C24.7047 15.6133 25.2797 15.2713 25.2797 14.3833V4.8532H26.9337C27.7677 4.8532 28.1777 5.1953 28.1777 6.0972V21.0003C28.1777 21.9023 27.7677 22.2583 26.9337 22.2583H23.9937V15.6133Z"
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
            d="              M4.8267 26.1407H27.8087C30.9397 26.1407 32.6347 24.4457 32.6347 21.3417V4.7987C32.6347 1.6957 30.9397 -0.0003 27.8087 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM5.2087 22.6137C4.1157 22.6137 3.5277 22.0797 3.5277 20.9177V5.2227C3.5277 4.0607 4.1157 3.5277 5.2087 3.5277H6.9047V13.8637C6.9047 14.8067 7.5057 15.1617 8.1207 15.1617H8.3677V22.6137ZM9.9937 15.1617C10.6227 15.1617 11.2107 14.8067 11.2107 13.8637V3.5277H14.1637V13.8637C14.1637 14.8067 14.8337 15.1617 15.3807 15.1617H15.6267V22.6137H9.7477V15.1617ZM17.2537 15.1617C17.8827 15.1617 18.4707 14.8067 18.4707 13.8637V3.5277H21.4237V13.8637C21.4237 14.8067 22.0257 15.1617 22.6407 15.1617H22.8867V22.6137H17.0077V15.1617ZM24.5137 15.1617C25.1427 15.1617 25.7307 14.8067 25.7307 13.8637V3.5277H27.4257C28.5197 3.5277 29.1077 4.0607 29.1077 5.2227V20.9177C29.1077 22.0797 28.5197 22.6137 27.4257 22.6137H24.2677V15.1617Z"
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
            d="              M5.1137 26.6605H27.7267C30.9937 26.6605 32.8397 24.8145 32.8397 21.5605V5.0995C32.8397 1.8455 30.9937 -0.0005 27.7267 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM5.6877 22.4355C4.7167 22.4355 4.2247 21.9985 4.2247 20.9585V5.7015C4.2247 4.6625 4.7167 4.2385 5.6877 4.2385H7.3557V14.1505C7.3557 15.0525 7.9297 15.4085 8.5317 15.4085H8.7227V22.4355ZM10.3497 15.4085C10.9517 15.4085 11.5387 15.0525 11.5387 14.1505V4.2385H14.3417V14.1505C14.3417 15.0665 15.0257 15.4085 15.5177 15.4085H15.6957V22.4355H10.1717V15.4085ZM17.3357 15.4085C17.9377 15.4085 18.5117 15.0525 18.5117 14.1505V4.2385H21.3147V14.1505C21.3147 15.0525 21.8887 15.4085 22.4907 15.4085H22.6677V22.4355H17.1447V15.4085ZM24.3087 15.4085C24.9097 15.4085 25.4977 15.0525 25.4977 14.1505V4.2385H27.1657C28.1227 4.2385 28.6157 4.6625 28.6157 5.7015V20.9585C28.6157 21.9985 28.1227 22.4355 27.1657 22.4355H24.1307V15.4085Z"
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
            d="              M4.0337 24.7601H27.9867C30.6657 24.7601 32.0197 23.3921 32.0197 20.7671V3.9921C32.0197 1.3671 30.6657 0.0001 27.9867 0.0001H4.0337C1.3677 0.0001 -0.0003 1.3531 -0.0003 3.9921V20.7671C-0.0003 23.4061 1.3677 24.7601 4.0337 24.7601ZM4.0607 23.0641C2.5297 23.0641 1.6957 22.2581 1.6957 20.6721V4.0881C1.6957 2.5021 2.5297 1.6951 4.0607 1.6951H5.8107V13.2891C5.8107 14.1641 6.3577 14.5061 6.9317 14.5061H7.5337V23.0641ZM9.2147 14.5061C9.8027 14.5061 10.3497 14.1641 10.3497 13.2891V1.6951H13.7407V13.2891C13.7407 14.1641 14.2867 14.5061 14.8617 14.5061H15.4767V23.0641H8.6137V14.5061ZM17.1587 14.5061C17.7327 14.5061 18.2797 14.1641 18.2797 13.2891V1.6951H21.6697V13.2891C21.6697 14.1641 22.2167 14.5061 22.8047 14.5061H23.4067V23.0641H16.5427V14.5061ZM25.0877 14.5061C25.6617 14.5061 26.2087 14.1641 26.2087 13.2891V1.6951H27.9587C29.4627 1.6951 30.3247 2.5021 30.3247 4.0881V20.6721C30.3247 22.2581 29.4627 23.0641 27.9587 23.0641H24.4727V14.5061Z"
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
            d="              M4.4847 25.5113H27.9047C30.8577 25.5113 32.3887 23.9943 32.3887 21.0823V4.4293C32.3887 1.5173 30.8577 0.0003 27.9047 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5043 -0.0003 4.4293V21.0823C-0.0003 23.9943 1.5317 25.5113 4.4847 25.5113ZM4.6487 22.8323C3.3767 22.8323 2.6797 22.1753 2.6797 20.8493V4.6623C2.6797 3.3363 3.3767 2.6663 4.6487 2.6663H6.3707V13.5083C6.3707 14.4923 6.9727 14.8613 7.6157 14.8613H7.9297V22.8323ZM9.5707 14.8613C10.2127 14.8613 10.8147 14.4923 10.8147 13.5083V2.6663H13.9727V13.5083C13.9727 14.4923 14.6017 14.8613 15.2167 14.8613H15.5317V22.8323H9.2427V14.8613ZM17.1717 14.8613C17.8147 14.8613 18.4157 14.4923 18.4157 13.5083V2.6663H21.5607V13.5083C21.5607 14.4923 22.1757 14.8613 22.8187 14.8613H23.1327V22.8323H16.8437V14.8613ZM24.7597 14.8613C25.4027 14.8613 26.0177 14.4923 26.0177 13.5083V2.6663H27.7407C28.9977 2.6663 29.7087 3.3363 29.7087 4.6623V20.8493C29.7087 22.1753 28.9977 22.8323 27.7407 22.8323H24.4457V14.8613Z"
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
            d="              M4.2927 25.1702H27.9457C30.8167 25.1702 32.2387 23.7622 32.2387 20.9452V4.2382C32.2387 1.4222 30.8167 0.0002 27.9457 0.0002H4.2927C1.4357 0.0002 -0.0003 1.4222 -0.0003 4.2382V20.9452C-0.0003 23.7622 1.4357 25.1702 4.2927 25.1702ZM4.3207 22.9692C2.9527 22.9692 2.2017 22.2442 2.2017 20.8222V4.3612C2.2017 2.9392 2.9527 2.2012 4.3207 2.2012H6.0567V13.3302C6.0567 14.3282 6.6857 14.7112 7.3417 14.7112H7.6977V22.9692ZM9.3247 14.7112C9.9807 14.7112 10.5957 14.3282 10.5957 13.3302V2.2012H13.8497V13.3302C13.8497 14.3282 14.4787 14.7112 15.1207 14.7112H15.4907V22.9692H8.9687V14.7112ZM17.1177 14.7112C17.7737 14.7112 18.3887 14.3282 18.3887 13.3302V2.2012H21.6427V13.3302C21.6427 14.3282 22.2577 14.7112 22.9137 14.7112H23.2837V22.9692H16.7617V14.7112ZM24.9097 14.7112C25.5667 14.7112 26.1817 14.3282 26.1817 13.3302V2.2012H27.9177C29.2717 2.2012 30.0367 2.9392 30.0367 4.3612V20.8222C30.0367 22.2442 29.2717 22.9692 27.9177 22.9692H24.5547V14.7112Z"
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
            d="              M4.6347 25.785H27.8637C30.8847 25.785 32.4977 24.186 32.4977 21.191V4.594C32.4977 1.6 30.8847 0 27.8637 0H4.6347C1.6137 0 -0.0003 1.586 -0.0003 4.594V21.191C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM4.8947 22.736C3.6917 22.736 3.0487 22.135 3.0487 20.877V4.908C3.0487 3.65 3.6917 3.049 4.8947 3.049H6.6037V13.658C6.6037 14.629 7.2047 14.984 7.8337 14.984H8.1207V22.736ZM9.7477 14.984C10.3907 14.984 10.9927 14.629 10.9927 13.658V3.049H14.0547V13.658C14.0547 14.629 14.6977 14.984 15.2847 14.984H15.5727V22.736H9.4607V14.984ZM17.2127 14.984C17.8417 14.984 18.4437 14.629 18.4437 13.658V3.049H21.5057V13.658C21.5057 14.629 22.1077 14.984 22.7367 14.984H23.0237V22.736H16.9117V14.984ZM24.6637 14.984C25.2927 14.984 25.8947 14.629 25.8947 13.658V3.049H27.6037C28.7927 3.049 29.4497 3.65 29.4497 4.908V20.877C29.4497 22.135 28.7927 22.736 27.6037 22.736H24.3767V14.984Z"
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
            d="              M3.6917 24.1997H28.0407C30.4607 24.1997 31.7187 22.9137 31.7187 20.5217V3.6777C31.7187 1.2847 30.4607 -0.0003 28.0407 -0.0003H3.6917C1.2717 -0.0003 -0.0003 1.2577 -0.0003 3.6777V20.5217C-0.0003 22.9417 1.2717 24.1997 3.6917 24.1997ZM3.7187 23.1877C1.9417 23.1877 1.0117 22.2577 1.0117 20.4807V3.7327C1.0117 1.9417 1.9417 1.0117 3.7187 1.0117H5.4827V13.2207C5.4827 13.9587 5.9197 14.2327 6.4117 14.2327H7.3417V23.1877ZM9.0917 14.2327C9.5707 14.2327 10.0217 13.9587 10.0217 13.2207V1.0117H13.5897V13.2207C13.5897 13.9587 14.0407 14.2327 14.5197 14.2327H15.4497V23.1877H8.1617V14.2327ZM17.1997 14.2327C17.6777 14.2327 18.1287 13.9587 18.1287 13.2207V1.0117H21.7107V13.2207C21.7107 13.9587 22.1617 14.2327 22.6407 14.2327H23.5707V23.1877H16.2697V14.2327ZM25.3207 14.2327C25.7987 14.2327 26.2497 13.9587 26.2497 13.2207V1.0117H27.9997C29.7227 1.0117 30.7067 1.9417 30.7067 3.7327V20.4807C30.7067 22.2577 29.7227 23.1877 27.9997 23.1877H24.3907V14.2327Z"
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
            d="              M3.5137 23.926H28.0687C30.3517 23.926 31.5687 22.668 31.5687 20.412V3.514C31.5687 1.258 30.3517 0 28.0687 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.412C-0.0003 22.709 1.2167 23.926 3.5137 23.926ZM3.5407 23.256C1.6547 23.256 0.6697 22.272 0.6697 20.371V3.541C0.6697 1.654 1.6547 0.67 3.5407 0.67H5.3047V13.193C5.3047 13.85 5.7017 14.096 6.1387 14.096H7.2327V23.256ZM9.0097 14.096C9.4477 14.096 9.8437 13.85 9.8437 13.193V0.67H13.5217V13.193C13.5217 13.85 13.9177 14.096 14.3417 14.096H15.4497V23.256H7.9157V14.096ZM17.2267 14.096C17.6637 14.096 18.0607 13.85 18.0607 13.193V0.67H21.7247V13.193C21.7247 13.85 22.1207 14.096 22.5587 14.096H23.6527V23.256H16.1327V14.096ZM25.4297 14.096C25.8677 14.096 26.2637 13.85 26.2637 13.193V0.67H28.0277C29.8457 0.67 30.8987 1.654 30.8987 3.541V20.371C30.8987 22.272 29.8457 23.256 28.0277 23.256H24.3357V14.096Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
