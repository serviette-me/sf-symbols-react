import { IconProps } from "../../types"

export default function ArrowDownBackwardSquareIconIcon({
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
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM6.0977 22.2583C5.2637 22.2583 4.8537 21.9023 4.8537 21.0003V6.0972C4.8537 5.1953 5.2637 4.8532 6.0977 4.8532H21.0137C21.8477 4.8532 22.2577 5.1953 22.2577 6.0972V21.0003C22.2577 21.9023 21.8477 22.2583 21.0137 22.2583ZM9.4067 8.9273C8.3807 8.9273 7.7387 9.6793 7.7387 10.8283V16.7893C7.7387 18.3203 8.6547 19.2093 10.1857 19.2093H16.1597C17.3497 19.2093 18.1017 18.5803 18.1017 17.5412C18.1017 16.5023 17.3637 15.8733 16.2017 15.8733H14.7107L13.5077 16.0923L15.0937 14.8063L18.7717 11.1153C19.1817 10.7183 19.4137 10.1583 19.4137 9.6253C19.4137 8.4223 18.4707 7.6153 17.3637 7.6153C16.8027 7.6153 16.2967 7.8063 15.8047 8.2853L12.1817 11.8943L10.8967 13.4673L11.0747 12.2093V10.8553C11.0747 9.6933 10.4457 8.9273 9.4067 8.9273Z"
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
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM5.2087 22.6137C4.1157 22.6137 3.5277 22.0797 3.5277 20.9177V5.2367C3.5277 4.0737 4.1157 3.5277 5.2087 3.5277H20.9317C22.0257 3.5277 22.6137 4.0737 22.6137 5.2367V20.9177C22.6137 22.0797 22.0257 22.6137 20.9317 22.6137ZM8.8457 9.0647C8.0387 9.0647 7.5197 9.6657 7.5197 10.5547V16.7617C7.5197 17.9237 8.1897 18.5257 9.3107 18.5257H15.5447C16.4477 18.5257 17.0347 18.0197 17.0347 17.1987C17.0347 16.3787 16.4477 15.8597 15.5447 15.8597H13.5627L11.9497 16.0777L13.7947 14.4507L18.1697 10.0757C18.4567 9.7887 18.6487 9.3787 18.6487 8.9687C18.6487 8.0667 17.9787 7.4647 17.1177 7.4647C16.6797 7.4647 16.2967 7.6147 15.9547 7.9567L11.6207 12.2777L9.9937 14.1097L10.1857 12.4137V10.5547C10.1857 9.6527 9.6657 9.0647 8.8457 9.0647Z"
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
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM5.6877 22.4355C4.7167 22.4355 4.2247 21.9985 4.2247 20.9725V5.7015C4.2247 4.6755 4.7167 4.2385 5.6877 4.2385H20.9727C21.9297 4.2385 22.4217 4.6755 22.4217 5.7015V20.9725C22.4217 21.9985 21.9297 22.4355 20.9727 22.4355ZM9.1467 8.9965C8.2167 8.9965 7.6427 9.6795 7.6427 10.7055V16.7895C7.6427 18.1425 8.4357 18.8945 9.7757 18.8945H15.8727C16.9257 18.8945 17.5957 18.3205 17.5957 17.3905C17.5957 16.4605 16.9257 15.8735 15.9007 15.8735H14.1637L12.7697 16.0915L14.4787 14.6425L18.4847 10.6365C18.8397 10.2815 19.0587 9.8025 19.0587 9.3245C19.0587 8.2575 18.2387 7.5465 17.2537 7.5465C16.7477 7.5465 16.2967 7.7245 15.8727 8.1345L11.9217 12.0855L10.4727 13.7815L10.6507 12.3185V10.7185C10.6507 9.6795 10.0767 8.9965 9.1467 8.9965Z"
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
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM4.0607 23.0645C2.5297 23.0645 1.6957 22.2575 1.6957 20.6715V4.0875C1.6957 2.5155 2.5297 1.6955 4.0607 1.6955H20.6857C22.2027 1.6955 23.0647 2.5155 23.0647 4.0875V20.6715C23.0647 22.2575 22.2027 23.0645 20.6857 23.0645ZM7.9297 9.0375C7.4647 9.0375 7.1507 9.3785 7.1507 9.8845V16.6935C7.1507 17.3085 7.4927 17.5685 8.0257 17.5685H14.8747C15.3677 17.5685 15.6957 17.2535 15.6957 16.8025C15.6957 16.3245 15.3537 16.0095 14.8477 16.0095H11.5527L9.5837 16.1605L11.4297 14.4105L17.3357 8.5035C17.4867 8.3535 17.5957 8.1485 17.5957 7.9295C17.5957 7.4515 17.2947 7.1365 16.8167 7.1365C16.5567 7.1365 16.3517 7.2325 16.2017 7.3825L10.2947 13.2895L8.5727 15.1215L8.7087 12.8655V9.8715C8.7087 9.3515 8.3947 9.0375 7.9297 9.0375Z"
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
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM4.6487 22.8453C3.3767 22.8453 2.6797 22.1753 2.6797 20.8493V4.6623C2.6797 3.3363 3.3767 2.6793 4.6487 2.6793H20.8767C22.1347 2.6793 22.8457 3.3363 22.8457 4.6623V20.8493C22.8457 22.1753 22.1347 22.8453 20.8767 22.8453ZM8.4907 9.1333C7.8207 9.1333 7.3687 9.6383 7.3687 10.3773V16.7343C7.3687 17.6643 7.9027 18.0883 8.7497 18.0883H15.1487C15.8867 18.0883 16.3517 17.6503 16.3517 16.9673C16.3517 16.2973 15.8727 15.8453 15.1347 15.8453H12.8247L10.9517 16.0643L12.9747 14.2053L17.7737 9.4063C18.0057 9.1873 18.1567 8.8593 18.1567 8.5453C18.1567 7.8203 17.6507 7.3553 16.9667 7.3553C16.5837 7.3553 16.2967 7.4783 16.0507 7.7243L11.2657 12.5093L9.4197 14.5063L9.6247 12.5373V10.3493C9.6247 9.6113 9.1737 9.1333 8.4907 9.1333Z"
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
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM4.3207 22.9685C2.9527 22.9685 2.2017 22.2445 2.2017 20.8225V4.3475C2.2017 2.9255 2.9527 2.2015 4.3207 2.2015H20.8497C22.2027 2.2015 22.9687 2.9255 22.9687 4.3475V20.8225C22.9687 22.2445 22.2027 22.9685 20.8497 22.9685ZM8.2987 9.1735C7.6977 9.1735 7.3007 9.6245 7.3007 10.2675V16.7205C7.3007 17.5275 7.7387 17.8415 8.4357 17.8415H14.9157C15.5587 17.8415 15.9687 17.4455 15.9687 16.8435C15.9687 16.2425 15.5447 15.8455 14.8887 15.8455H12.4007L10.3767 16.0645L12.5097 14.0685L17.5547 9.0375C17.7457 8.8455 17.8827 8.5725 17.8827 8.2985C17.8827 7.6835 17.4727 7.2875 16.8707 7.2875C16.5427 7.2875 16.2967 7.4105 16.0917 7.6015L11.0607 12.6325L9.0917 14.7385L9.2967 12.6055V10.2405C9.2967 9.5835 8.9007 9.1735 8.2987 9.1735Z"
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
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM4.8947 22.75C3.6917 22.75 3.0487 22.135 3.0487 20.877V4.908C3.0487 3.65 3.6917 3.049 4.8947 3.049H20.9047C22.0797 3.049 22.7497 3.65 22.7497 4.908V20.877C22.7497 22.135 22.0797 22.75 20.9047 22.75ZM8.6547 9.105C7.9157 9.105 7.4377 9.652 7.4377 10.445V16.748C7.4377 17.787 8.0257 18.279 8.9957 18.279H15.3127C16.1327 18.279 16.6527 17.814 16.6527 17.076C16.6527 16.324 16.1187 15.859 15.3127 15.859H13.1387L11.3747 16.078L13.3297 14.314L17.9377 9.707C18.1977 9.447 18.3617 9.092 18.3617 8.723C18.3617 7.93 17.7867 7.396 17.0347 7.396C16.6247 7.396 16.2967 7.533 16.0097 7.82L11.4157 12.4L9.6657 14.342L9.8707 12.482V10.445C9.8707 9.625 9.3927 9.105 8.6547 9.105Z"
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
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM3.7187 23.1874C1.9417 23.1874 1.0117 22.2574 1.0117 20.4804V3.7324C1.0117 1.9414 1.9417 1.0114 3.7187 1.0114H20.4807C22.2027 1.0114 23.1877 1.9414 23.1877 3.7324V20.4804C23.1877 22.2574 22.2027 23.1874 20.4807 23.1874ZM7.4377 8.8324C7.1637 8.8324 6.9727 9.0374 6.9727 9.3514V16.6664C6.9727 16.9944 7.1777 17.1724 7.4787 17.1724H14.8067C15.1207 17.1724 15.3127 16.9944 15.3127 16.7204C15.3127 16.4204 15.1207 16.2284 14.7927 16.2284H10.4317L8.5177 16.2834L9.9937 14.8474L17.0627 7.7934C17.1587 7.6974 17.2267 7.5604 17.2267 7.4104C17.2267 7.1234 17.0347 6.9184 16.7477 6.9184C16.5707 6.9184 16.4477 6.9864 16.3517 7.0824L9.2967 14.1364L7.8887 15.6134L7.9297 13.1934V9.3514C7.9297 9.0374 7.7387 8.8324 7.4377 8.8324Z"
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
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM3.5407 23.242C1.6547 23.242 0.6697 22.258 0.6697 20.371V3.541C0.6697 1.641 1.6547 0.67 3.5407 0.67H20.3707C22.2027 0.67 23.2557 1.641 23.2557 3.541V20.371C23.2557 22.258 22.2027 23.242 20.3707 23.242ZM7.1917 8.736C7.0137 8.736 6.8767 8.859 6.8767 9.078V16.639C6.8767 16.844 7.0137 16.98 7.1917 16.98H14.7657C14.9847 16.98 15.1207 16.857 15.1207 16.68C15.1207 16.475 14.9847 16.338 14.7657 16.338H7.9707L9.2697 15.08L16.9257 7.424C16.9937 7.355 17.0487 7.26 17.0487 7.15C17.0487 6.945 16.9117 6.809 16.7067 6.809C16.5707 6.809 16.4887 6.863 16.4197 6.932L8.7777 14.574L7.5337 15.859V9.078C7.5337 8.859 7.3967 8.736 7.1917 8.736Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
