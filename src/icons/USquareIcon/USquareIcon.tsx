import { IconProps } from "../../types"

export default function USquareIconIcon({
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
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM6.0977 22.2583C5.2637 22.2583 4.8537 21.9023 4.8537 21.0003V6.0972C4.8537 5.1953 5.2637 4.8532 6.0977 4.8532H21.0137C21.8477 4.8532 22.2577 5.1953 22.2577 6.0972V21.0003C22.2577 21.9023 21.8477 22.2583 21.0137 22.2583ZM13.5627 19.7972C16.8987 19.7972 19.2227 17.9783 19.2227 15.3263V9.6933C19.2227 8.1623 18.4297 7.3143 17.0217 7.3143C15.6267 7.3143 14.8337 8.1763 14.8337 9.6933V14.9163C14.8337 15.6683 14.3147 16.2283 13.5627 16.2283C12.8107 16.2283 12.2907 15.6683 12.2907 14.9163V9.6933C12.2907 8.1763 11.4977 7.3143 10.1037 7.3143C8.6957 7.3143 7.9027 8.1623 7.9027 9.6933V15.3263C7.9027 17.9783 10.2267 19.7972 13.5627 19.7972Z"
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
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM5.2087 22.6137C4.1157 22.6137 3.5277 22.0797 3.5277 20.9177V5.2367C3.5277 4.0737 4.1157 3.5277 5.2087 3.5277H20.9317C22.0257 3.5277 22.6137 4.0737 22.6137 5.2367V20.9177C22.6137 22.0797 22.0257 22.6137 20.9317 22.6137ZM13.0837 19.4007C16.3517 19.4007 18.5797 17.5547 18.5797 14.8067V8.4897C18.5797 7.3417 17.9927 6.6857 16.9257 6.6857C15.9007 6.6857 15.2987 7.3417 15.2987 8.4897V14.4917C15.2987 15.8187 14.4097 16.7067 13.0837 16.7067C11.7437 16.7067 10.8557 15.8187 10.8557 14.4917V8.4897C10.8557 7.3417 10.2677 6.6857 9.2147 6.6857C8.1757 6.6857 7.5747 7.3417 7.5747 8.4897V14.8067C7.5747 17.5547 9.8027 19.4007 13.0837 19.4007Z"
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
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM5.6877 22.4355C4.7167 22.4355 4.2247 21.9985 4.2247 20.9725V5.7015C4.2247 4.6755 4.7167 4.2385 5.6877 4.2385H20.9727C21.9297 4.2385 22.4217 4.6755 22.4217 5.7015V20.9725C22.4217 21.9985 21.9297 22.4355 20.9727 22.4355ZM13.3297 19.6195C16.6387 19.6195 18.9217 17.7875 18.9217 15.0935V9.1325C18.9217 7.7795 18.2247 7.0275 16.9807 7.0275C15.7497 7.0275 15.0527 7.7925 15.0527 9.1325V14.7245C15.0527 15.7495 14.3557 16.4605 13.3297 16.4605C12.3047 16.4605 11.6077 15.7495 11.6077 14.7245V9.1325C11.6077 7.7925 10.9097 7.0275 9.6797 7.0275C8.4497 7.0275 7.7517 7.7795 7.7517 9.1325V15.0935C7.7517 17.7875 10.0347 19.6195 13.3297 19.6195Z"
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
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM4.0607 23.0645C2.5297 23.0645 1.6957 22.2575 1.6957 20.6715V4.0875C1.6957 2.5155 2.5297 1.6955 4.0607 1.6955H20.6857C22.2027 1.6955 23.0647 2.5155 23.0647 4.0875V20.6715C23.0647 22.2575 22.2027 23.0645 20.6857 23.0645ZM12.3867 18.7035C15.3807 18.7035 17.4587 16.9255 17.4587 14.1505V6.9175C17.4587 6.3305 17.1447 5.9885 16.6117 5.9885C16.0917 5.9885 15.7637 6.3305 15.7637 6.9175V14.0135C15.7637 15.9965 14.3827 17.2815 12.3867 17.2815C10.3767 17.2815 8.9957 15.9965 8.9957 14.0135V6.9175C8.9957 6.3305 8.6817 5.9885 8.1347 5.9885C7.6287 5.9885 7.3007 6.3305 7.3007 6.9175V14.1505C7.3007 16.9255 9.3787 18.7035 12.3867 18.7035Z"
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
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM4.6487 22.8453C3.3767 22.8453 2.6797 22.1753 2.6797 20.8493V4.6623C2.6797 3.3363 3.3767 2.6793 4.6487 2.6793H20.8767C22.1347 2.6793 22.8457 3.3363 22.8457 4.6623V20.8493C22.8457 22.1753 22.1347 22.8453 20.8767 22.8453ZM12.7697 19.1273C15.9957 19.1273 18.1697 17.2813 18.1697 14.4513V7.7113C18.1697 6.8083 17.7047 6.2753 16.8707 6.2753C16.0647 6.2753 15.5857 6.8083 15.5857 7.7113V14.2183C15.5857 15.9143 14.4787 17.0083 12.7697 17.0083C11.0607 17.0083 9.9397 15.9143 9.9397 14.2183V7.7113C9.9397 6.8083 9.4747 6.2753 8.6407 6.2753C7.8337 6.2753 7.3557 6.8083 7.3557 7.7113V14.4513C7.3557 17.2813 9.5427 19.1273 12.7697 19.1273Z"
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
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM4.3207 22.9685C2.9527 22.9685 2.2017 22.2445 2.2017 20.8225V4.3475C2.2017 2.9255 2.9527 2.2015 4.3207 2.2015H20.8497C22.2027 2.2015 22.9687 2.9255 22.9687 4.3475V20.8225C22.9687 22.2445 22.2027 22.9685 20.8497 22.9685ZM12.5917 18.9765C15.7907 18.9765 17.9377 17.1305 17.9377 14.2595V7.2735C17.9377 6.5075 17.5407 6.0425 16.8297 6.0425C16.1597 6.0425 15.7497 6.5075 15.7497 7.2735V14.0545C15.7497 15.9685 14.5057 17.1715 12.5917 17.1715C10.6777 17.1715 9.4197 15.9685 9.4197 14.0545V7.2735C9.4197 6.5075 9.0237 6.0425 8.3267 6.0425C7.6427 6.0425 7.2457 6.5075 7.2457 7.2735V14.2595C7.2457 17.1305 9.3927 18.9765 12.5917 18.9765Z"
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
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM4.8947 22.75C3.6917 22.75 3.0487 22.135 3.0487 20.877V4.908C3.0487 3.65 3.6917 3.049 4.8947 3.049H20.9047C22.0797 3.049 22.7497 3.65 22.7497 4.908V20.877C22.7497 22.135 22.0797 22.75 20.9047 22.75ZM12.9067 19.25C16.1467 19.25 18.3477 17.404 18.3477 14.602V8.053C18.3477 7.041 17.8277 6.453 16.8987 6.453C15.9957 6.453 15.4627 7.041 15.4627 8.053V14.328C15.4627 15.873 14.4517 16.885 12.9067 16.885C11.3617 16.885 10.3357 15.873 10.3357 14.328V8.053C10.3357 7.041 9.8167 6.453 8.8867 6.453C7.9847 6.453 7.4517 7.041 7.4517 8.053V14.602C7.4517 17.404 9.6527 19.25 12.9067 19.25Z"
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
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM3.7187 23.1874C1.9417 23.1874 1.0117 22.2574 1.0117 20.4804V3.7324C1.0117 1.9414 1.9417 1.0114 3.7187 1.0114H20.4807C22.2027 1.0114 23.1877 1.9414 23.1877 3.7324V20.4804C23.1877 22.2574 22.2027 23.1874 20.4807 23.1874ZM12.0997 18.3204C14.8337 18.3204 16.8297 16.6524 16.8297 13.9864V6.4394C16.8297 6.0974 16.6387 5.8924 16.3107 5.8924C15.9957 5.8924 15.7907 6.0974 15.7907 6.4394V13.9454C15.7907 16.0094 14.2187 17.3904 12.0997 17.3904C9.9937 17.3904 8.4217 16.0094 8.4217 13.9454V6.4394C8.4217 6.0974 8.2307 5.8924 7.9027 5.8924C7.5877 5.8924 7.3827 6.0974 7.3827 6.4394V13.9864C7.3827 16.6524 9.3787 18.3204 12.0997 18.3204Z"
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
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM3.5407 23.242C1.6547 23.242 0.6697 22.258 0.6697 20.371V3.541C0.6697 1.641 1.6547 0.67 3.5407 0.67H20.3707C22.2027 0.67 23.2557 1.641 23.2557 3.541V20.371C23.2557 22.258 22.2027 23.242 20.3707 23.242ZM11.9627 18.129C14.5467 18.129 16.5017 16.516 16.5017 13.891V6.193C16.5017 5.975 16.3657 5.838 16.1467 5.838C15.9547 5.838 15.7907 5.975 15.7907 6.193V13.904C15.7907 16.01 14.1367 17.445 11.9627 17.445C9.7887 17.445 8.1347 16.01 8.1347 13.904V6.193C8.1347 5.975 7.9977 5.838 7.7797 5.838C7.5747 5.838 7.4237 5.975 7.4237 6.193V13.891C7.4237 16.516 9.3787 18.129 11.9627 18.129Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
