import { IconProps } from "../../types"

export default function LockOpenIpadIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.44140625 34.26171875"
          className={className}
        >
          <path
            d="              M-0.0003 28.9706C-0.0003 32.2796 1.9827 34.2616 5.3047 34.2616H21.1367C24.4587 34.2616 26.4417 32.2796 26.4417 28.9706V5.2906C26.4417 1.9826 24.4587 -0.0004 21.1367 -0.0004H5.3047C1.9827 -0.0004 -0.0003 1.9826 -0.0003 5.2906ZM4.8537 28.2046V6.0706C4.8537 5.2496 5.1957 4.8536 6.0707 4.8536H20.3707C21.2457 4.8536 21.5877 5.2496 21.5877 6.0706V28.2046C21.5877 29.0116 21.2457 29.4086 20.3707 29.4086H6.0707C5.1957 29.4086 4.8537 29.0116 4.8537 28.2046ZM8.5727 20.6856C8.5727 21.5606 8.9687 21.9566 9.7617 21.9566H14.6837C15.4907 21.9566 15.8727 21.5606 15.8727 20.6856V16.9946C15.8727 16.1326 15.5037 15.7226 14.7247 15.7226V14.8746C14.7247 14.0546 15.1207 13.5766 15.9137 13.5766C16.7067 13.5766 17.1037 14.0546 17.1037 14.8746V15.3946C17.1037 15.9006 17.4997 16.2966 18.0057 16.2966C18.4977 16.2966 18.8947 15.9006 18.8947 15.3946V14.8746C18.8947 13.0426 17.7457 11.7986 15.9137 11.7986C14.0687 11.7986 12.9197 13.0426 12.9197 14.9296V15.7086H9.7617C8.9687 15.7086 8.5727 16.1196 8.5727 16.9946Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.650390625 32.525390625"
          className={className}
        >
          <path
            d="              M-0.0003 28.0686C-0.0003 30.8166 1.7497 32.5256 4.5527 32.5256H20.0977C22.8867 32.5256 24.6507 30.8166 24.6507 28.0686V4.4566C24.6507 1.7086 22.8867 -0.0004 20.0977 -0.0004H4.5527C1.7497 -0.0004 -0.0003 1.7086 -0.0003 4.4566ZM3.5277 27.5076V5.0176C3.5277 4.0606 4.0467 3.5276 5.0727 3.5276H19.5777C20.6037 3.5276 21.1227 4.0606 21.1227 5.0176V27.5076C21.1227 28.4646 20.6037 28.9976 19.5777 28.9976H5.0727C4.0467 28.9976 3.5277 28.4646 3.5277 27.5076ZM7.5467 19.7696C7.5467 20.6036 7.9297 20.9996 8.6957 20.9996H13.4807C14.2457 20.9996 14.6287 20.6036 14.6287 19.7696V16.1466C14.6287 15.3806 14.3007 14.9846 13.6447 14.9296V13.9316C13.6447 13.0156 14.1097 12.4416 14.9707 12.4416C15.8317 12.4416 16.3107 13.0156 16.3107 13.9316V14.6696C16.3107 15.1206 16.6527 15.4626 17.1037 15.4626C17.5277 15.4626 17.8827 15.1206 17.8827 14.6696V13.9316C17.8827 12.1546 16.7477 10.8966 14.9707 10.8966C13.2067 10.8966 12.0727 12.1546 12.0727 14.0136V14.9296H8.6957C7.9297 14.9296 7.5467 15.3266 7.5467 16.1466Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.59375 33.455078125"
          className={className}
        >
          <path
            d="              M-0.0003 28.5465C-0.0003 31.5955 1.8727 33.4555 4.9497 33.4555H20.6447C23.7207 33.4555 25.5937 31.5955 25.5937 28.5465V4.8945C25.5937 1.8595 23.7207 0.0005 20.6447 0.0005H4.9497C1.8727 0.0005 -0.0003 1.8595 -0.0003 4.8945ZM4.2247 27.8765V5.5785C4.2247 4.6895 4.6487 4.2245 5.6057 4.2245H20.0017C20.9457 4.2245 21.3687 4.6895 21.3687 5.5785V27.8765C21.3687 28.7655 20.9457 29.2165 20.0017 29.2165H5.6057C4.6487 29.2165 4.2247 28.7655 4.2247 27.8765ZM8.0937 20.2615C8.0937 21.1095 8.4767 21.5055 9.2557 21.5055H14.1227C14.9027 21.5055 15.2847 21.1095 15.2847 20.2615V16.5975C15.2847 15.7775 14.9437 15.3805 14.2187 15.3535V14.4375C14.2187 13.5765 14.6427 13.0425 15.4767 13.0425C16.2967 13.0425 16.7207 13.5765 16.7207 14.4375V15.0525C16.7207 15.5315 17.1037 15.9145 17.5817 15.9145C18.0467 15.9145 18.4157 15.5315 18.4157 15.0525V14.4375C18.4157 12.6325 17.2817 11.3755 15.4767 11.3755C13.6587 11.3755 12.5237 12.6325 12.5237 14.5055V15.3395H9.2557C8.4767 15.3395 8.0937 15.7505 8.0937 16.5975Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.271484375 30.119140625"
          className={className}
        >
          <path
            d="              M-0.0003 26.5368C-0.0003 28.7518 1.4217 30.1188 3.6917 30.1188H18.5667C20.8497 30.1188 22.2717 28.7518 22.2717 26.5368V3.5958C22.2717 1.3808 20.8497 -0.0002 18.5667 -0.0002H3.6917C1.4217 -0.0002 -0.0003 1.3808 -0.0003 3.5958ZM1.6957 26.2778V3.8418C1.6957 2.4608 2.4747 1.6948 3.8967 1.6948H18.3747C19.7967 1.6948 20.5767 2.4608 20.5767 3.8418V26.2778C20.5767 27.6578 19.7967 28.4378 18.3747 28.4378H3.8967C2.4747 28.4378 1.6957 27.6578 1.6957 26.2778ZM6.3167 18.4978C6.3167 19.2638 6.6717 19.6328 7.3967 19.6328H12.0317C12.7557 19.6328 13.1117 19.2638 13.1117 18.4978V14.9298C13.1117 14.2328 12.8247 13.8628 12.2227 13.7948V12.6468C12.2227 11.5528 12.8107 10.8688 13.8087 10.8688C14.7927 10.8688 15.3807 11.5528 15.3807 12.6468V13.4938C15.3807 13.8218 15.6407 14.0818 15.9547 14.0818C16.2697 14.0818 16.5297 13.8218 16.5297 13.4938V12.6468C16.5297 10.9508 15.4497 9.7348 13.8087 9.7348C12.1547 9.7348 11.0747 10.9508 11.0747 12.7288V13.7948H7.3967C6.6717 13.7948 6.3167 14.1638 6.3167 14.9298Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.48828125 31.431640625"
          className={className}
        >
          <path
            d="              M-0.0003 27.5078C-0.0003 29.8868 1.5997 31.4318 4.0607 31.4318H19.4277C21.8887 31.4318 23.4887 29.8868 23.4887 27.5078V3.9237C23.4887 1.5587 21.8887 -0.0003 19.4277 -0.0003H4.0607C1.5997 -0.0003 -0.0003 1.5587 -0.0003 3.9237ZM2.6797 27.0708V4.3618C2.6797 3.2948 3.3087 2.6797 4.4297 2.6797H19.0727C20.1937 2.6797 20.8087 3.2948 20.8087 4.3618V27.0708C20.8087 28.1368 20.1937 28.7518 19.0727 28.7518H4.4297C3.3087 28.7518 2.6797 28.1368 2.6797 27.0708ZM6.8907 19.2088C6.8907 20.0018 7.2597 20.3988 8.0117 20.3988H12.7017C13.4527 20.3988 13.8357 20.0018 13.8357 19.2088V15.6268C13.8357 14.9158 13.5347 14.5328 12.9607 14.4508V13.3438C12.9607 12.3598 13.4667 11.7438 14.3827 11.7438C15.2847 11.7438 15.7907 12.3598 15.7907 13.3438V14.2328C15.7907 14.6288 16.1187 14.9568 16.5157 14.9568C16.9117 14.9568 17.2267 14.6288 17.2267 14.2328V13.3438C17.2267 11.5938 16.1187 10.3498 14.3827 10.3498C12.6467 10.3498 11.5257 11.5938 11.5257 13.4528V14.4378H8.0117C7.2597 14.4378 6.8907 14.8338 6.8907 15.6268Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.845703125 30.802734375"
          className={className}
        >
          <path
            d="              M-0.0003 27.1933C-0.0003 29.3533 1.5177 30.8023 3.7867 30.8023H19.0587C21.3277 30.8023 22.8457 29.3533 22.8457 27.1933V3.6233C22.8457 1.4633 21.3277 0.0003 19.0587 0.0003H3.7867C1.5177 0.0003 -0.0003 1.4633 -0.0003 3.6233ZM2.2017 26.8243V3.9923C2.2017 2.8713 2.8847 2.2013 4.0607 2.2013H18.7847C19.9477 2.2013 20.6447 2.8713 20.6447 3.9923V26.8243C20.6447 27.9453 19.9477 28.6013 18.7847 28.6013H4.0607C2.8847 28.6013 2.2017 27.9453 2.2017 26.8243ZM6.5217 18.8813C6.5217 19.6603 6.8907 20.0433 7.6287 20.0433H12.2777C13.0157 20.0433 13.3847 19.6603 13.3847 18.8813V15.3263C13.3847 14.6563 13.1117 14.2733 12.5777 14.1773V13.0023C12.5777 11.9903 13.1117 11.3343 14.0407 11.3343C14.9707 11.3343 15.5177 11.9903 15.5177 13.0023V13.9723C15.5177 14.3413 15.8187 14.6563 16.2017 14.6563C16.5567 14.6563 16.8707 14.3413 16.8707 13.9723V13.0023C16.8707 11.2793 15.7497 10.0213 14.0407 10.0213C12.3317 10.0213 11.2247 11.2793 11.2247 13.1253V14.1503H7.6287C6.8907 14.1503 6.5217 14.5473 6.5217 15.3263Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.994140625 31.896484375"
          className={className}
        >
          <path
            d="              M-0.0003 27.7542C-0.0003 30.2832 1.6677 31.8962 4.2657 31.8962H19.7147C22.3127 31.8962 23.9937 30.2832 23.9937 27.7542V4.1562C23.9937 1.6272 22.3127 0.0002 19.7147 0.0002H4.2657C1.6677 0.0002 -0.0003 1.6272 -0.0003 4.1562ZM3.0487 27.2622V4.6482C3.0487 3.6232 3.6227 3.0492 4.7027 3.0492H19.2907C20.3707 3.0492 20.9457 3.6232 20.9457 4.6482V27.2622C20.9457 28.2732 20.3707 28.8612 19.2907 28.8612H4.7027C3.6227 28.8612 3.0487 28.2732 3.0487 27.2622ZM7.1777 19.4412C7.1777 20.2622 7.5467 20.6442 8.3127 20.6442H13.0427C13.7947 20.6442 14.1777 20.2622 14.1777 19.4412V15.8462C14.1777 15.1212 13.8767 14.7242 13.2617 14.6562V13.5902C13.2617 12.6462 13.7537 12.0452 14.6427 12.0452C15.5177 12.0452 16.0097 12.6462 16.0097 13.5902V14.4102C16.0097 14.8342 16.3517 15.1762 16.7757 15.1762C17.1717 15.1762 17.5137 14.8342 17.5137 14.4102V13.5902C17.5137 11.8402 16.3927 10.5822 14.6427 10.5822C12.8787 10.5822 11.7577 11.8402 11.7577 13.6852V14.6422H8.3127C7.5467 14.6422 7.1777 15.0392 7.1777 15.8462Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.505859375 29.216796875"
          className={className}
        >
          <path
            d="              M-0.0003 25.676C-0.0003 27.959 1.2847 29.217 3.5817 29.217H17.9237C20.2207 29.217 21.5057 27.959 21.5057 25.676V3.555C21.5057 1.271 20.2207 0 17.9237 0H3.5817C1.2847 0 -0.0003 1.271 -0.0003 3.555ZM1.0117 25.58V3.65C1.0117 1.928 1.9277 1.025 3.6637 1.025H17.8417C19.5777 1.025 20.4937 1.928 20.4937 3.65V25.58C20.4937 27.303 19.5777 28.205 17.8417 28.205H3.6637C1.9277 28.205 1.0117 27.303 1.0117 25.58ZM6.0427 17.992C6.0427 18.758 6.3707 19.1 7.0957 19.1H11.7027C12.4137 19.1 12.7557 18.758 12.7557 17.992V14.424C12.7557 13.699 12.4417 13.344 11.7717 13.316V12.182C11.7717 10.992 12.4277 10.254 13.4807 10.254C14.5467 10.254 15.2027 10.992 15.2027 12.182V12.893C15.2027 13.139 15.4087 13.33 15.6547 13.33C15.9007 13.33 16.0917 13.139 16.0917 12.893V12.182C16.0917 10.514 15.0387 9.352 13.4807 9.352C11.9217 9.352 10.8687 10.514 10.8687 12.209V13.316H7.0957C6.3707 13.316 6.0427 13.672 6.0427 14.424Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.123046875 28.751953125"
          className={className}
        >
          <path
            d="              M-0.0003 25.2249C-0.0003 27.5349 1.2167 28.7519 3.5137 28.7519H17.5957C19.9067 28.7519 21.1227 27.5349 21.1227 25.2249V3.5269C21.1227 1.2169 19.9067 -0.0001 17.5957 -0.0001H3.5137C1.2167 -0.0001 -0.0003 1.2169 -0.0003 3.5269ZM0.6697 25.1969V3.5549C0.6697 1.6539 1.6547 0.6699 3.5547 0.6699H17.5687C19.4687 0.6699 20.4527 1.6539 20.4527 3.5549V25.1969C20.4527 27.0979 19.4687 28.0819 17.5687 28.0819H3.5547C1.6547 28.0819 0.6697 27.0979 0.6697 25.1969ZM5.8927 17.7329C5.8927 18.4839 6.2207 18.8259 6.9317 18.8259H11.5387C12.2497 18.8259 12.5777 18.4839 12.5777 17.7329V14.1639C12.5777 13.4119 12.2497 13.0699 11.5387 13.0699H11.5257V11.9359C11.5257 10.7049 12.2227 9.9399 13.3167 9.9399C14.4237 9.9399 15.1207 10.7049 15.1207 11.9359V12.5649C15.1207 12.7699 15.2847 12.9469 15.4907 12.9469C15.6957 12.9469 15.8727 12.7699 15.8727 12.5649V11.9359C15.8727 10.2809 14.8337 9.1599 13.3167 9.1599C11.8127 9.1599 10.7737 10.2809 10.7737 11.9359V13.0699H6.9317C6.2207 13.0699 5.8927 13.4119 5.8927 14.1639Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}