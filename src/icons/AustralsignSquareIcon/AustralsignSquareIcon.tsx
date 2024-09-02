import { IconProps } from "../../types"

export default function AustralsignSquareIconIcon({
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
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM6.0977 22.2583C5.2637 22.2583 4.8537 21.9023 4.8537 21.0003V6.0972C4.8537 5.1953 5.2637 4.8532 6.0977 4.8532H21.0137C21.8477 4.8532 22.2577 5.1953 22.2577 6.0972V21.0003C22.2577 21.9023 21.8477 22.2583 21.0137 22.2583ZM7.8067 16.3243C7.8067 16.6253 8.0257 16.8573 8.3397 16.8573H8.7367L8.5997 17.2543C8.5317 17.5003 8.5037 17.7183 8.5037 17.9513C8.5037 18.9083 9.1467 19.4553 10.1587 19.4553C11.0877 19.4553 11.5257 18.9763 11.7307 18.2113L12.0727 16.8573H14.9977L15.3537 18.2113C15.5587 18.9903 16.0367 19.4553 16.9667 19.4553C17.9517 19.4553 18.5667 18.9083 18.5667 17.9513C18.5667 17.7183 18.5387 17.5003 18.4707 17.2543L18.3337 16.8573H18.7717C19.0727 16.8573 19.2907 16.6253 19.2907 16.3243C19.2907 16.0103 19.0727 15.7913 18.7717 15.7913H18.0197L17.7597 14.8753H18.7717C19.0727 14.8753 19.2907 14.6563 19.2907 14.3423C19.2907 14.0413 19.0727 13.8083 18.7717 13.8083H17.4457L16.2287 9.6523C15.8597 8.3943 14.8617 7.6423 13.5487 7.6423C12.2087 7.6423 11.2247 8.3943 10.8557 9.6523L9.6247 13.8083H8.3397C8.0257 13.8083 7.8067 14.0413 7.8067 14.3423C7.8067 14.6563 8.0257 14.8753 8.3397 14.8753H9.3107L9.0507 15.7913H8.3397C8.0257 15.7913 7.8067 16.0103 7.8067 16.3243ZM12.8657 13.8083L13.5487 11.2243L14.2047 13.8083ZM12.3597 15.7913L12.5917 14.8753H14.4787L14.7247 15.7913Z"
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
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM5.2087 22.6137C4.1157 22.6137 3.5277 22.0797 3.5277 20.9177V5.2367C3.5277 4.0737 4.1157 3.5277 5.2087 3.5277H20.9317C22.0257 3.5277 22.6137 4.0737 22.6137 5.2367V20.9177C22.6137 22.0797 22.0257 22.6137 20.9317 22.6137ZM7.4237 15.8597C7.4237 16.2007 7.6567 16.4607 8.0117 16.4607H8.5857L8.1757 17.6637C8.1207 17.8967 8.0937 18.0737 8.0937 18.2387C8.0937 18.9487 8.5997 19.4007 9.3657 19.4007C10.0487 19.4007 10.4047 19.0447 10.5817 18.4437L11.1567 16.4607H14.9567L15.5447 18.4437C15.7087 19.0587 16.0917 19.4007 16.7887 19.4007C17.5277 19.4007 18.0337 18.9487 18.0337 18.2387C18.0337 18.0737 17.9927 17.8967 17.9237 17.6637L17.5277 16.4607H18.1287C18.4847 16.4607 18.7167 16.2007 18.7167 15.8597C18.7167 15.5177 18.4847 15.2577 18.1287 15.2577H17.1587L16.8297 14.2187H18.1287C18.4847 14.2187 18.7167 13.9587 18.7167 13.6167C18.7167 13.2617 18.4847 13.0157 18.1287 13.0157H16.4477L14.9297 8.2027C14.6567 7.3277 13.9997 6.7947 13.0707 6.7947C12.1137 6.7947 11.4437 7.3147 11.1837 8.2027L9.6657 13.0157H8.0117C7.6567 13.0157 7.4237 13.2617 7.4237 13.6167C7.4237 13.9587 7.6567 14.2187 8.0117 14.2187H9.2837L8.9547 15.2577H8.0117C7.6567 15.2577 7.4237 15.5177 7.4237 15.8597ZM12.1547 13.0157L13.0707 9.8847L13.9727 13.0157ZM11.5117 15.2577L11.8127 14.2187H14.3147L14.6157 15.2577Z"
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
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM5.6877 22.4355C4.7167 22.4355 4.2247 21.9985 4.2247 20.9725V5.7015C4.2247 4.6755 4.7167 4.2385 5.6877 4.2385H20.9727C21.9297 4.2385 22.4217 4.6755 22.4217 5.7015V20.9725C22.4217 21.9985 21.9297 22.4355 20.9727 22.4355ZM7.6287 16.1055C7.6287 16.4335 7.8617 16.6795 8.1897 16.6795H8.6677L8.4087 17.4585C8.3397 17.6915 8.3127 17.8965 8.3127 18.1015C8.3127 18.9355 8.8867 19.4415 9.7757 19.4415C10.5957 19.4415 10.9927 19.0175 11.1837 18.3205L11.6487 16.6795H14.9847L15.4357 18.3335C15.6267 19.0315 16.0647 19.4415 16.8847 19.4415C17.7457 19.4415 18.3207 18.9355 18.3207 18.1015C18.3207 17.8965 18.2797 17.6915 18.2107 17.4585L17.9517 16.6795H18.4707C18.7987 16.6795 19.0177 16.4335 19.0177 16.1055C19.0177 15.7915 18.7987 15.5445 18.4707 15.5445H17.6097L17.3227 14.5745H18.4707C18.7987 14.5745 19.0177 14.3285 19.0177 13.9995C19.0177 13.6855 18.7987 13.4395 18.4707 13.4395H16.9667L15.6137 8.9825C15.2987 7.9025 14.4517 7.2465 13.3167 7.2465C12.1677 7.2465 11.3337 7.8885 11.0057 8.9825L9.6527 13.4395H8.1897C7.8617 13.4395 7.6287 13.6855 7.6287 13.9995C7.6287 14.3285 7.8617 14.5745 8.1897 14.5745H9.2967L9.0097 15.5445H8.1897C7.8617 15.5445 7.6287 15.7915 7.6287 16.1055ZM12.5237 13.4395L13.3167 10.5955L14.0957 13.4395ZM11.9497 15.5445L12.2227 14.5745H14.4097L14.6697 15.5445Z"
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
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM4.0607 23.0645C2.5297 23.0645 1.6957 22.2575 1.6957 20.6715V4.0875C1.6957 2.5155 2.5297 1.6955 4.0607 1.6955H20.6857C22.2027 1.6955 23.0647 2.5155 23.0647 4.0875V20.6715C23.0647 22.2575 22.2027 23.0645 20.6857 23.0645ZM7.1637 15.0115C7.1637 15.3265 7.3827 15.5725 7.7247 15.5725H8.5317L7.7247 17.8825C7.6837 18.0335 7.6567 18.1425 7.6567 18.2385C7.6567 18.6215 7.9567 18.8945 8.3677 18.8945C8.6957 18.8945 8.9277 18.7165 9.0507 18.3615L9.9667 15.5725H14.7927L15.7227 18.3755C15.8317 18.7305 16.0507 18.8945 16.4067 18.8945C16.8167 18.8945 17.1037 18.6215 17.1037 18.2385C17.1037 18.1425 17.0897 18.0335 17.0347 17.8825L16.2287 15.5725H17.0347C17.3767 15.5725 17.5957 15.3265 17.5957 15.0115C17.5957 14.6975 17.3767 14.4515 17.0347 14.4515H15.8597L15.4497 13.2205H17.0347C17.3767 13.2205 17.5957 12.9745 17.5957 12.6605C17.5957 12.3325 17.3767 12.0855 17.0347 12.0855H15.0527L13.2067 6.6715C13.0707 6.2895 12.8107 6.0425 12.3867 6.0425C11.9497 6.0425 11.6757 6.2755 11.5527 6.6715L9.7067 12.0855H7.7247C7.3827 12.0855 7.1637 12.3325 7.1637 12.6605C7.1637 12.9745 7.3827 13.2205 7.7247 13.2205H9.3107L8.9007 14.4515H7.7247C7.3827 14.4515 7.1637 14.6975 7.1637 15.0115ZM11.0877 12.0855L12.3867 8.1895L13.6717 12.0855ZM10.3227 14.4515L10.7327 13.2205H14.0407L14.4377 14.4515Z"
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
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM4.6487 22.8453C3.3767 22.8453 2.6797 22.1753 2.6797 20.8493V4.6623C2.6797 3.3363 3.3767 2.6793 4.6487 2.6793H20.8767C22.1347 2.6793 22.8457 3.3363 22.8457 4.6623V20.8493C22.8457 22.1753 22.1347 22.8453 20.8767 22.8453ZM7.1637 15.5583C7.1637 15.9273 7.4237 16.2013 7.8067 16.2013H8.4907L7.9157 17.9243C7.8477 18.1293 7.8337 18.2793 7.8337 18.4163C7.8337 18.9633 8.2437 19.3453 8.8457 19.3453C9.3787 19.3453 9.6937 19.0863 9.8437 18.5803L10.5817 16.2013H14.9297L15.6677 18.5933C15.8187 19.0993 16.1187 19.3453 16.6657 19.3453C17.2677 19.3453 17.6777 18.9633 17.6777 18.4163C17.6777 18.2793 17.6507 18.1293 17.5817 17.9243L17.0077 16.2013H17.7047C18.1017 16.2013 18.3477 15.9273 18.3477 15.5583C18.3477 15.1753 18.1017 14.9023 17.7047 14.9023H16.5977L16.2287 13.7813H17.7047C18.1017 13.7813 18.3477 13.5083 18.3477 13.1383C18.3477 12.7693 18.1017 12.4823 17.7047 12.4823H15.8047L14.0957 7.2593C13.9047 6.6313 13.4527 6.2483 12.7557 6.2483C12.0447 6.2483 11.5937 6.6173 11.4027 7.2593L9.6937 12.4823H7.8067C7.4237 12.4823 7.1637 12.7693 7.1637 13.1383C7.1637 13.5083 7.4237 13.7813 7.8067 13.7813H9.2697L8.9007 14.9023H7.8067C7.4237 14.9023 7.1637 15.1753 7.1637 15.5583ZM11.6897 12.4823L12.7557 9.0233L13.8227 12.4823ZM10.9647 14.9023L11.3067 13.7813H14.2047L14.5467 14.9023Z"
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
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM4.3207 22.9685C2.9527 22.9685 2.2017 22.2445 2.2017 20.8225V4.3475C2.2017 2.9255 2.9527 2.2015 4.3207 2.2015H20.8497C22.2027 2.2015 22.9687 2.9255 22.9687 4.3475V20.8225C22.9687 22.2445 22.2027 22.9685 20.8497 22.9685ZM7.0277 15.3805C7.0277 15.7635 7.2867 16.0505 7.6977 16.0505H8.4357L7.7657 18.0605C7.6977 18.2655 7.6837 18.4025 7.6837 18.5115C7.6837 18.9765 8.0527 19.3185 8.5727 19.3185C8.9957 19.3185 9.2967 19.1135 9.4337 18.6485L10.2537 16.0505H14.9157L15.7367 18.6625C15.8727 19.1265 16.1467 19.3185 16.5977 19.3185C17.1177 19.3185 17.4867 18.9765 17.4867 18.5115C17.4867 18.4025 17.4587 18.2655 17.3907 18.0605L16.7207 16.0505H17.4727C17.8827 16.0505 18.1427 15.7635 18.1427 15.3805C18.1427 14.9975 17.8827 14.6975 17.4727 14.6975H16.2837L15.9007 13.5485H17.4727C17.8827 13.5485 18.1427 13.2475 18.1427 12.8655C18.1427 12.4825 17.8827 12.1955 17.4727 12.1955H15.4497L13.6307 6.7265C13.4667 6.2345 13.1387 5.9335 12.5777 5.9335C12.0177 5.9335 11.6757 6.2205 11.5117 6.7265L9.7067 12.1955H7.6977C7.2867 12.1955 7.0277 12.4825 7.0277 12.8655C7.0277 13.2475 7.2867 13.5485 7.6977 13.5485H9.2557L8.8727 14.6975H7.6977C7.2867 14.6975 7.0277 14.9975 7.0277 15.3805ZM11.4297 12.1955L12.5777 8.5315L13.7267 12.1955ZM10.6637 14.6975L11.0197 13.5485H14.1367L14.5057 14.6975Z"
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
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM4.8947 22.75C3.6917 22.75 3.0487 22.135 3.0487 20.877V4.908C3.0487 3.65 3.6917 3.049 4.8947 3.049H20.9047C22.0797 3.049 22.7497 3.65 22.7497 4.908V20.877C22.7497 22.135 22.0797 22.75 20.9047 22.75ZM7.2737 15.682C7.2737 16.051 7.5197 16.311 7.9027 16.311H8.5317L8.0257 17.814C7.9707 18.033 7.9437 18.197 7.9437 18.334C7.9437 18.963 8.3947 19.373 9.0647 19.373C9.6657 19.373 9.9937 19.072 10.1587 18.512L10.8277 16.311H14.9437L15.6137 18.525C15.7777 19.086 16.1057 19.373 16.7207 19.373C17.3767 19.373 17.8277 18.963 17.8277 18.334C17.8277 18.197 17.8007 18.033 17.7327 17.814L17.2267 16.311H17.8827C18.2657 16.311 18.5117 16.051 18.5117 15.682C18.5117 15.326 18.2657 15.053 17.8827 15.053H16.8297L16.4887 13.973H17.8827C18.2657 13.973 18.5117 13.699 18.5117 13.344C18.5117 12.988 18.2657 12.715 17.8827 12.715H16.0777L14.4647 7.656C14.2327 6.932 13.6857 6.48 12.8927 6.48C12.0727 6.48 11.5387 6.918 11.3067 7.656L9.6797 12.715H7.9027C7.5197 12.715 7.2737 12.988 7.2737 13.344C7.2737 13.699 7.5197 13.973 7.9027 13.973H9.2697L8.9277 15.053H7.9027C7.5197 15.053 7.2737 15.326 7.2737 15.682ZM11.8947 12.715L12.8927 9.393L13.8767 12.715ZM11.1977 15.053L11.5257 13.973H14.2457L14.5747 15.053Z"
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
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM3.7187 23.1874C1.9417 23.1874 1.0117 22.2574 1.0117 20.4804V3.7324C1.0117 1.9414 1.9417 1.0114 3.7187 1.0114H20.4807C22.2027 1.0114 23.1877 1.9414 23.1877 3.7324V20.4804C23.1877 22.2574 22.2027 23.1874 20.4807 23.1874ZM7.3417 14.5054C7.3417 14.7384 7.5057 14.9294 7.7657 14.9294H8.6407L7.6697 17.6234C7.6427 17.7184 7.6287 17.7874 7.6287 17.8554C7.6287 18.1424 7.8337 18.3064 8.0937 18.3064C8.3127 18.3064 8.4497 18.1834 8.5317 17.9644L9.5977 14.9294H14.6427L15.7087 17.9644C15.7907 18.1974 15.9277 18.3064 16.1467 18.3064C16.4067 18.3064 16.6117 18.1424 16.6117 17.8554C16.6117 17.7874 16.5977 17.7184 16.5567 17.6234L15.5997 14.9294H16.4477C16.7067 14.9294 16.8707 14.7384 16.8707 14.5054C16.8707 14.2734 16.7067 14.0954 16.4477 14.0954H15.3127L14.8477 12.7694H16.4477C16.7067 12.7694 16.8707 12.5914 16.8707 12.3594C16.8707 12.1274 16.7067 11.9354 16.4477 11.9354H14.5467L12.6467 6.6034C12.5507 6.3304 12.3727 6.1794 12.1137 6.1794C11.8677 6.1794 11.6757 6.3304 11.5937 6.6034L9.6937 11.9354H7.7657C7.5057 11.9354 7.3417 12.1274 7.3417 12.3594C7.3417 12.5914 7.5057 12.7694 7.7657 12.7694H9.3927L8.9277 14.0954H7.7657C7.5057 14.0954 7.3417 14.2734 7.3417 14.5054ZM10.6367 11.9354L12.1137 7.7114L13.6037 11.9354ZM9.8847 14.0954L10.3497 12.7694H13.8907L14.3557 14.0954Z"
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
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM3.5407 23.242C1.6547 23.242 0.6697 22.258 0.6697 20.371V3.541C0.6697 1.641 1.6547 0.67 3.5407 0.67H20.3707C22.2027 0.67 23.2557 1.641 23.2557 3.541V20.371C23.2557 22.258 22.2027 23.242 20.3707 23.242ZM7.4377 14.246C7.4377 14.438 7.5747 14.588 7.7927 14.588H8.7087L7.6427 17.486C7.6287 17.555 7.6157 17.609 7.6157 17.664C7.6157 17.897 7.7657 17.992 7.9567 17.992C8.1077 17.992 8.2027 17.91 8.2717 17.76L9.4197 14.588H14.5607L15.6957 17.76C15.7637 17.91 15.8597 17.992 16.0097 17.992C16.2017 17.992 16.3517 17.897 16.3517 17.664C16.3517 17.609 16.3517 17.555 16.3247 17.486L15.2717 14.588H16.1467C16.3657 14.588 16.5017 14.438 16.5017 14.246C16.5017 14.055 16.3657 13.904 16.1467 13.904H15.0257L14.5337 12.537H16.1467C16.3657 12.537 16.5017 12.387 16.5017 12.195C16.5017 12.004 16.3657 11.854 16.1467 11.854H14.2737L12.3597 6.549C12.2907 6.344 12.1547 6.248 11.9907 6.248C11.8127 6.248 11.6757 6.344 11.6077 6.549L9.6937 11.854H7.7927C7.5747 11.854 7.4377 12.004 7.4377 12.195C7.4377 12.387 7.5747 12.537 7.7927 12.537H9.4337L8.9417 13.904H7.7927C7.5747 13.904 7.4377 14.055 7.4377 14.246ZM10.4047 11.854L11.9907 7.465L13.5627 11.854ZM9.6527 13.904L10.1447 12.537H13.8227L14.3147 13.904Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}