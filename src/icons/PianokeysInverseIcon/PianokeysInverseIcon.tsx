import { IconProps } from "../../types"

export default function PianokeysInverseIconIcon({
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
            d="              M26.2367 15.0253V0.0003H27.6717C31.0487 0.0003 33.0317 1.9683 33.0317 5.3592V21.7523C33.0317 25.1293 31.0487 27.1113 27.6717 27.1113H24.9517V16.2563H25.0877C25.6757 16.2563 26.2367 15.9143 26.2367 15.0253ZM22.1617 15.0253C22.1617 15.9143 22.7367 16.2563 23.3247 16.2563H23.4477V27.1113H17.2677V16.2563H17.4047C17.9927 16.2563 18.5387 15.9143 18.5387 15.0253V0.0003H22.1617ZM14.4927 15.0253C14.4927 15.9273 15.2027 16.2563 15.6407 16.2563H15.7637V27.1113H9.5837V16.2563H9.7067C10.2947 16.2563 10.8687 15.9143 10.8687 15.0253V0.0003H14.4927ZM5.3597 27.1113C1.9827 27.1113 -0.0003 25.1293 -0.0003 21.7523V5.3592C-0.0003 1.9683 1.9827 0.0003 5.3597 0.0003H6.7947V15.0253C6.7947 15.9143 7.3557 16.2563 7.9437 16.2563H8.0797V27.1113Z"
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
            d="              M4.8267 26.1407C1.7087 26.1407 -0.0003 24.4457 -0.0003 21.3417V4.7987C-0.0003 1.6957 1.7087 -0.0003 4.8267 -0.0003H27.8087C30.9397 -0.0003 32.6347 1.6957 32.6347 4.7987V21.3417C32.6347 24.4457 30.9397 26.1407 27.8087 26.1407H24.7597V15.4767H24.9927C25.6207 15.4767 26.2087 15.1207 26.2087 14.1777V-0.0003H21.9027V14.1777C21.9027 15.1207 22.5037 15.4767 23.1187 15.4767H23.3657V26.1407H17.0077V15.4767H17.2537C17.8827 15.4767 18.4707 15.1207 18.4707 14.1777V-0.0003H14.1637V14.1777C14.1637 15.1207 14.8337 15.4767 15.3807 15.4767H15.6267V26.1407H9.2697V15.4767H9.5157C10.1307 15.4767 10.7327 15.1207 10.7327 14.1777V-0.0003H6.4257V14.1777C6.4257 15.1207 7.0277 15.4767 7.6427 15.4767H7.8887V26.1407H7.8887Z"
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
            d="              M5.1137 26.6605C1.8597 26.6605 -0.0003 24.8145 -0.0003 21.5605V5.0995C-0.0003 1.8455 1.8597 -0.0005 5.1137 -0.0005H27.7267C30.9937 -0.0005 32.8397 1.8455 32.8397 5.0995V21.5605C32.8397 24.8145 30.9937 26.6605 27.7267 26.6605H24.8557V15.9005H25.0467C25.6487 15.9005 26.2227 15.5445 26.2227 14.6285V-0.0005H22.0387V14.6285C22.0387 15.5445 22.6267 15.9005 23.2287 15.9005H23.4067V26.6605H17.1447V15.9005H17.3357C17.9377 15.9005 18.5117 15.5445 18.5117 14.6285V-0.0005H14.3417V14.6285C14.3417 15.5585 15.0257 15.9005 15.5177 15.9005H15.6957V26.6605H9.4337V15.9005H9.6247C10.2267 15.9005 10.8007 15.5445 10.8007 14.6285V-0.0005H6.6177V14.6285C6.6177 15.5445 7.2047 15.9005 7.8067 15.9005H7.9847V26.6605H7.9847Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.01953125 24.7734375"
          className={className}
        >
          <path
            d="              M4.0337 24.7601C1.3677 24.7601 -0.0003 23.4061 -0.0003 20.7671V3.9921C-0.0003 1.3531 1.3677 0.0001 4.0337 0.0001H27.9867C30.6657 0.0001 32.0197 1.3671 32.0197 3.9921V20.7671C32.0197 23.3921 30.6657 24.7601 27.9867 24.7601H24.4727V14.5061H25.0877C25.6617 14.5061 26.2087 14.1641 26.2087 13.2891V0.0141H21.6697V13.2891C21.6697 14.1641 22.2167 14.5061 22.8047 14.5061H23.4067V24.7601H24.4727V24.7731H23.4067V24.7601H16.5427V14.5061H17.1587C17.7327 14.5061 18.2797 14.1641 18.2797 13.2891V0.0141H13.7407V13.2891C13.7407 14.1641 14.2867 14.5061 14.8617 14.5061H15.4767V24.7601H16.5427V24.7731H15.4767V24.7601H8.6137V14.5061H9.2147C9.8027 14.5061 10.3497 14.1641 10.3497 13.2891V0.0141H5.8107V13.2891C5.8107 14.1641 6.3577 14.5061 6.9317 14.5061H7.5337V24.7601H8.6137V24.7731H7.5337V24.7601Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.388671875 25.525390625"
          className={className}
        >
          <path
            d="              M4.4847 25.5113C1.5317 25.5113 -0.0003 23.9943 -0.0003 21.0823V4.4293C-0.0003 1.5043 1.5317 0.0003 4.4847 0.0003H27.9047C30.8577 0.0003 32.3887 1.5173 32.3887 4.4293V21.0823C32.3887 23.9943 30.8577 25.5113 27.9047 25.5113H24.6227V14.9703H24.9377C25.5797 14.9703 26.1957 14.6013 26.1957 13.6313V0.0003H21.7387V13.6313C21.7387 14.6013 22.3537 14.9703 22.9957 14.9703H23.3107V25.5113H24.6227V25.5253H23.3107V25.5113H16.8437V14.9703H17.1717C17.8147 14.9703 18.4157 14.6013 18.4157 13.6313V0.0003H13.9727V13.6313C13.9727 14.6013 14.6017 14.9703 15.2167 14.9703H15.5317V25.5113H16.8437V25.5253H15.5317V25.5113H9.0777V14.9703H9.3927C10.0347 14.9703 10.6507 14.6013 10.6507 13.6313V0.0003H6.1937V13.6313C6.1937 14.6013 6.8087 14.9703 7.4517 14.9703H7.7657V25.5113H9.0777V25.5253H7.7657V25.5113Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.23828125 25.18359375"
          className={className}
        >
          <path
            d="              M4.2927 25.1702C1.4357 25.1702 -0.0003 23.7622 -0.0003 20.9452V4.2382C-0.0003 1.4222 1.4357 0.0002 4.2927 0.0002H27.9457C30.8167 0.0002 32.2387 1.4222 32.2387 4.2382V20.9452C32.2387 23.7622 30.8167 25.1702 27.9457 25.1702H24.5547V14.7112H24.9097C25.5667 14.7112 26.1817 14.3282 26.1817 13.3302V0.0132H21.6427V13.3302C21.6427 14.3282 22.2577 14.7112 22.9137 14.7112H23.2837V25.1702H24.5547V25.1832H23.2837V25.1702H16.7617V14.7112H17.1177C17.7737 14.7112 18.3887 14.3282 18.3887 13.3302V0.0132H13.8497V13.3302C13.8497 14.3282 14.4787 14.7112 15.1207 14.7112H15.4907V25.1702H16.7617V25.1832H15.4907V25.1702H8.9687V14.7112H9.3247C9.9807 14.7112 10.5957 14.3282 10.5957 13.3302V0.0132H6.0567V13.3302C6.0567 14.3282 6.6857 14.7112 7.3417 14.7112H7.6977V25.1702H8.9687V25.1832H7.6977V25.1702Z"
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
            d="              M4.6347 25.785C1.6137 25.785 -0.0003 24.199 -0.0003 21.191V4.594C-0.0003 1.586 1.6137 0 4.6347 0H27.8637C30.8847 0 32.4977 1.6 32.4977 4.594V21.191C32.4977 24.186 30.8847 25.785 27.8637 25.785H24.6777V15.189H24.9647C25.5937 15.189 26.1957 14.82 26.1957 13.863V0H21.8067V13.863C21.8067 14.82 22.4087 15.189 23.0507 15.189H23.3247V25.785H16.9117V15.189H17.2127C17.8417 15.189 18.4437 14.82 18.4437 13.863V0H14.0547V13.863C14.0547 14.834 14.6977 15.189 15.2847 15.189H15.5727V25.785H9.1597V15.189H9.4477C10.0767 15.189 10.6777 14.82 10.6777 13.863V0H6.2887V13.863C6.2887 14.82 6.8907 15.189 7.5337 15.189H7.8207V25.785H7.8207Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.71875 24.2265625"
          className={className}
        >
          <path
            d="              M3.6917 24.1997C1.2717 24.1997 -0.0003 22.9417 -0.0003 20.5217V3.6777C-0.0003 1.2577 1.2717 -0.0003 3.6917 -0.0003H28.0407C30.4607 -0.0003 31.7187 1.2847 31.7187 3.6777V20.5217C31.7187 22.9137 30.4607 24.1997 28.0407 24.1997H24.3907V14.2327H25.3207C25.7987 14.2327 26.2497 13.9587 26.2497 13.2207V0.0277H21.7107V13.2207C21.7107 13.9587 22.1617 14.2327 22.6407 14.2327H23.5707V24.1997H24.3907V24.2267H23.5707V24.1997H16.2697V14.2327H17.1997C17.6777 14.2327 18.1287 13.9587 18.1287 13.2207V0.0277H13.5897V13.2207C13.5897 13.9587 14.0407 14.2327 14.5197 14.2327H15.4497V24.1997H16.2697V24.2267H15.4497V24.1997H8.1617V14.2327H9.0917C9.5707 14.2327 10.0217 13.9587 10.0217 13.2207V0.0277H5.4827V13.2207C5.4827 13.9587 5.9197 14.2327 6.4117 14.2327H7.3417V24.1997H8.1617V24.2267H7.3417V24.1997Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.568359375 23.953125"
          className={className}
        >
          <path
            d="              M3.5137 23.926C1.2167 23.926 -0.0003 22.709 -0.0003 20.412V3.514C-0.0003 1.217 1.2167 0 3.5137 0H28.0687C30.3517 0 31.5687 1.258 31.5687 3.514V20.412C31.5687 22.668 30.3517 23.926 28.0687 23.926H24.3357V14.096H25.4297C25.8677 14.096 26.2637 13.85 26.2637 13.193V0.041H21.7247V13.193C21.7247 13.85 22.1207 14.096 22.5587 14.096H23.6527V23.926H24.3357V23.953H23.6527V23.926H16.1327V14.096H17.2267C17.6637 14.096 18.0607 13.85 18.0607 13.193V0.041H13.5217V13.193C13.5217 13.85 13.9177 14.096 14.3417 14.096H15.4497V23.926H16.1327V23.953H15.4497V23.926H7.9157V14.096H9.0097C9.4477 14.096 9.8437 13.85 9.8437 13.193V0.041H5.3047V13.193C5.3047 13.85 5.7017 14.096 6.1387 14.096H7.2327V23.926H7.9157V23.953H7.2327V23.926Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
