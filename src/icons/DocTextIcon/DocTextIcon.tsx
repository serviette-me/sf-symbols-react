import { IconProps } from "../../types"

export default function DocTextIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.484375 30.87109375"
          className={className}
        >
          <path
            d="              M5.3597 30.871H20.1247C23.5157 30.871 25.4847 28.889 25.4847 25.498V13.139C25.4847 10.623 25.0607 9.27 23.4337 7.643L17.8557 2.064C16.2427 0.438 14.8887 0 12.3867 0H5.3597C1.9827 0 -0.0003 1.982 -0.0003 5.373V25.498C-0.0003 28.889 1.9827 30.871 5.3597 30.871ZM6.1117 26.018C5.1957 26.018 4.8537 25.607 4.8537 24.76V6.111C4.8537 5.264 5.1957 4.854 6.1117 4.854H10.7737V10.322C10.7737 13.344 12.1547 14.738 15.1897 14.738H20.6307V24.76C20.6307 25.607 20.2887 26.018 19.3867 26.018ZM15.4767 11.02C14.8207 11.02 14.4927 10.678 14.4927 10.035V4.99L20.4937 11.02ZM16.9257 17.486H8.5447C7.9707 17.486 7.5467 17.897 7.5467 18.443C7.5467 19.004 7.9707 19.441 8.5447 19.441H16.9257C17.4727 19.441 17.8967 19.004 17.8967 18.443C17.8967 17.897 17.4727 17.486 16.9257 17.486ZM16.9257 21.232H8.5447C7.9707 21.232 7.5467 21.67 7.5467 22.23C7.5467 22.777 7.9707 23.188 8.5447 23.188H16.9257C17.4727 23.188 17.8967 22.777 17.8967 22.23C17.8967 21.67 17.4727 21.232 16.9257 21.232Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.240234375 30.091796875"
          className={className}
        >
          <path
            d="              M4.7987 30.0922H19.4417C22.5447 30.0922 24.2407 28.3832 24.2407 25.2652V12.8792C24.2407 10.7462 23.9257 9.6802 22.5727 8.3122L16.0097 1.6812C14.6837 0.3422 13.5767 0.0002 11.5527 0.0002H4.7987C1.6957 0.0002 -0.0003 1.7092 -0.0003 4.8262V25.2652C-0.0003 28.3962 1.6957 30.0922 4.7987 30.0922ZM5.2227 26.5642C4.0607 26.5642 3.5277 25.9762 3.5277 24.8832V5.2222C3.5277 4.1292 4.0607 3.5272 5.2227 3.5272H10.5957V10.2262C10.5957 12.6052 11.7307 13.7262 14.0957 13.7262H20.7127V24.8832C20.7127 25.9762 20.1797 26.5642 19.0177 26.5642ZM14.3557 10.8282C13.7677 10.8282 13.4937 10.5552 13.4937 9.9672V3.8142L20.4397 10.8282ZM16.7207 16.9942H7.3557C6.8087 16.9942 6.4257 17.3772 6.4257 17.8832C6.4257 18.4022 6.8087 18.7992 7.3557 18.7992H16.7207C17.2407 18.7992 17.6367 18.4022 17.6367 17.8832C17.6367 17.3772 17.2407 16.9942 16.7207 16.9942ZM16.7207 21.2462H7.3557C6.8087 21.2462 6.4257 21.6562 6.4257 22.1762C6.4257 22.6812 6.8087 23.0642 7.3557 23.0642H16.7207C17.2407 23.0642 17.6367 22.6812 17.6367 22.1762C17.6367 21.6562 17.2407 21.2462 16.7207 21.2462Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.896484375 30.48828125"
          className={className}
        >
          <path
            d="              M5.0997 30.4886H19.8107C23.0507 30.4886 24.8967 28.6426 24.8967 25.3746V13.0016C24.8967 10.6636 24.5277 9.4606 23.0237 7.9436L16.9937 1.8726C15.5037 0.3826 14.2597 -0.0004 12.0037 -0.0004H5.0997C1.8457 -0.0004 -0.0003 1.8456 -0.0003 5.0996V25.3746C-0.0003 28.6426 1.8457 30.4886 5.0997 30.4886ZM5.6877 26.2636C4.6617 26.2636 4.2247 25.7716 4.2247 24.8146V5.6736C4.2247 4.7166 4.6617 4.2246 5.6877 4.2246H10.6917V10.2676C10.6917 12.9886 11.9497 14.2466 14.6697 14.2466H20.6717V24.8146C20.6717 25.7716 20.2347 26.2636 19.2087 26.2636ZM14.9437 10.9236C14.3277 10.9236 14.0137 10.6096 14.0137 9.9946V4.4296L20.4667 10.9236ZM16.8297 17.2406H7.9847C7.4237 17.2406 7.0137 17.6366 7.0137 18.1696C7.0137 18.7036 7.4237 19.1266 7.9847 19.1266H16.8297C17.3637 19.1266 17.7737 18.7036 17.7737 18.1696C17.7737 17.6366 17.3637 17.2406 16.8297 17.2406ZM16.8297 21.2326H7.9847C7.4237 21.2326 7.0137 21.6566 7.0137 22.1896C7.0137 22.7226 7.4237 23.1196 7.9847 23.1196H16.8297C17.3637 23.1196 17.7737 22.7226 17.7737 22.1896C17.7737 21.6566 17.3637 21.2326 16.8297 21.2326Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.599609375 29.134765625"
          className={className}
        >
          <path
            d="              M3.9927 29.135H18.6077C21.2597 29.135 22.5997 27.768 22.5997 25.102V12.277C22.5997 10.801 22.4087 10.145 21.5057 9.215L13.4667 1.094C12.5917 0.205 11.8807 0 10.5547 0H3.9927C1.3677 0 -0.0003 1.354 -0.0003 4.02V25.102C-0.0003 27.768 1.3537 29.135 3.9927 29.135ZM4.0747 27.439C2.5017 27.439 1.6957 26.606 1.6957 25.061V4.061C1.6957 2.557 2.5017 1.682 4.0877 1.682H10.4727V9.912C10.4727 11.471 11.2657 12.209 12.7837 12.209H20.9177V25.061C20.9177 26.606 20.0977 27.439 18.5257 27.439ZM12.9607 10.609C12.3317 10.609 12.0727 10.363 12.0727 9.734V2.023L20.5767 10.609ZM16.5837 16.543H5.8517C5.4547 16.543 5.1547 16.83 5.1547 17.213C5.1547 17.582 5.4547 17.883 5.8517 17.883H16.5837C16.9667 17.883 17.2677 17.582 17.2677 17.213C17.2677 16.83 16.9667 16.543 16.5837 16.543ZM16.5837 21.342H5.8517C5.4547 21.342 5.1547 21.643 5.1547 22.025C5.1547 22.395 5.4547 22.682 5.8517 22.682H16.5837C16.9667 22.682 17.2677 22.395 17.2677 22.025C17.2677 21.643 16.9667 21.342 16.5837 21.342Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.447265625 29.599609375"
          className={className}
        >
          <path
            d="              M4.4437 29.6001H19.0037C21.9297 29.6001 23.4477 28.0551 23.4477 25.1151V12.7151C23.4477 10.8141 23.2017 9.9391 22.0117 8.7361L14.8337 1.4351C13.6857 0.2731 12.7427 0.0001 11.0337 0.0001H4.4437C1.5177 0.0001 -0.0003 1.5451 -0.0003 4.4841V25.1151C-0.0003 28.0681 1.5177 29.6001 4.4437 29.6001ZM4.6617 26.9201C3.3357 26.9201 2.6797 26.2231 2.6797 24.9511V4.6481C2.6797 3.3911 3.3357 2.6801 4.6617 2.6801H10.4867V10.1721C10.4867 12.1271 11.4567 13.0701 13.3987 13.0701H20.7677V24.9511C20.7677 26.2231 20.0977 26.9201 18.7717 26.9201ZM13.6447 10.7191C13.0837 10.7191 12.8517 10.4731 12.8517 9.9121V3.0491L20.3987 10.7191ZM16.5977 16.6661H6.5897C6.0707 16.6661 5.7017 17.0491 5.7017 17.5271C5.7017 18.0191 6.0707 18.4021 6.5897 18.4021H16.5977C17.0897 18.4021 17.4587 18.0191 17.4587 17.5271C17.4587 17.0491 17.0897 16.6661 16.5977 16.6661ZM16.5977 21.2601H6.5897C6.0707 21.2601 5.7017 21.6431 5.7017 22.1351C5.7017 22.6131 6.0707 22.9821 6.5897 22.9821H16.5977C17.0897 22.9821 17.4587 22.6131 17.4587 22.1351C17.4587 21.6431 17.0897 21.2601 16.5977 21.2601Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.99609375 29.3125"
          className={className}
        >
          <path
            d="              M4.2387 29.3123H18.7577C21.5877 29.3123 22.9957 27.8773 22.9957 25.0333V12.6193C22.9957 10.8553 22.7907 10.0893 21.6977 8.9683L14.1637 1.2983C13.1247 0.2323 12.2637 0.0003 10.7327 0.0003H4.2387C1.4217 0.0003 -0.0003 1.4493 -0.0003 4.2933V25.0333C-0.0003 27.8903 1.4087 29.3123 4.2387 29.3123ZM4.3337 27.1113C2.9257 27.1113 2.2017 26.3593 2.2017 24.9923V4.3343C2.2017 2.9803 2.9257 2.2013 4.3477 2.2013H10.4317V10.1443C10.4317 11.8673 11.2927 12.7143 13.0017 12.7143H20.7947V24.9923C20.7947 26.3593 20.0707 27.1113 18.6487 27.1113ZM13.2477 10.6503C12.7017 10.6503 12.4957 10.4313 12.4957 9.8843V2.6253L20.3707 10.6503ZM16.5297 16.4883H6.1527C5.6597 16.4883 5.2907 16.8573 5.2907 17.3223C5.2907 17.8003 5.6597 18.1703 6.1527 18.1703H16.5297C17.0077 18.1703 17.3637 17.8003 17.3637 17.3223C17.3637 16.8573 17.0077 16.4883 16.5297 16.4883ZM16.5297 21.2593H6.1527C5.6597 21.2593 5.2907 21.6423 5.2907 22.1213C5.2907 22.5863 5.6597 22.9413 6.1527 22.9413H16.5297C17.0077 22.9413 17.3637 22.5863 17.3637 22.1213C17.3637 21.6423 17.0077 21.2593 16.5297 21.2593Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.7890625 29.8046875"
          className={className}
        >
          <path
            d="              M4.5937 29.8048H19.1957C22.1897 29.8048 23.7887 28.1918 23.7887 25.1698V12.7698C23.7887 10.7738 23.5157 9.8168 22.2577 8.5448L15.3397 1.5308C14.1227 0.2868 13.0977 -0.0002 11.2517 -0.0002H4.5937C1.5997 -0.0002 -0.0003 1.5998 -0.0003 4.6208V25.1698C-0.0003 28.1918 1.5857 29.8048 4.5937 29.8048ZM4.8947 26.7558C3.6507 26.7558 3.0487 26.1138 3.0487 24.9098V4.8808C3.0487 3.6918 3.6507 3.0348 4.9087 3.0348H10.5277V10.1858C10.5277 12.3188 11.5667 13.3438 13.6997 13.3438H20.7407V24.9098C20.7407 26.1138 20.1387 26.7558 18.8807 26.7558ZM13.9587 10.7598C13.3847 10.7598 13.1247 10.4998 13.1247 9.9258V3.3768L20.4117 10.7598ZM16.6527 16.8028H6.9177C6.3987 16.8028 6.0157 17.1718 6.0157 17.6638C6.0157 18.1698 6.3987 18.5668 6.9177 18.5668H16.6527C17.1587 18.5668 17.5407 18.1698 17.5407 17.6638C17.5407 17.1718 17.1587 16.8028 16.6527 16.8028ZM16.6527 21.2458H6.9177C6.3987 21.2458 6.0157 21.6428 6.0157 22.1488C6.0157 22.6268 6.3987 23.0098 6.9177 23.0098H16.6527C17.1587 23.0098 17.5407 22.6268 17.5407 22.1488C17.5407 21.6428 17.1587 21.2458 16.6527 21.2458Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.09375 28.90234375"
          className={className}
        >
          <path
            d="              M3.6777 28.9019H18.4157C20.8227 28.9019 22.0937 27.6309 22.0937 25.2109V11.8399C22.0937 10.7459 21.9157 10.2399 21.2457 9.5569L12.5647 0.8479C11.8947 0.1909 11.3747 -0.0001 10.3227 -0.0001H3.6777C1.2847 -0.0001 -0.0003 1.2719 -0.0003 3.6909V25.2109C-0.0003 27.6449 1.2577 28.9019 3.6777 28.9019ZM3.7187 27.8909C1.9417 27.8909 1.0117 26.9609 1.0117 25.1839V3.7189C1.0117 2.0099 1.9417 1.0119 3.7327 1.0119H10.5407V9.6249C10.5407 10.9789 11.2247 11.5799 12.4957 11.5799H21.0817V25.1839C21.0817 26.9609 20.1527 27.8909 18.3617 27.8909ZM12.5777 10.5959C11.8267 10.5959 11.5257 10.2949 11.5257 9.5429V1.2579L20.8357 10.5959ZM16.6657 16.6249H5.4417C5.1677 16.6249 4.9767 16.8299 4.9767 17.0759C4.9767 17.3359 5.1677 17.5269 5.4417 17.5269H16.6657C16.9257 17.5269 17.1307 17.3359 17.1307 17.0759C17.1307 16.8299 16.9257 16.6249 16.6657 16.6249ZM16.6657 21.4649H5.4417C5.1677 21.4649 4.9767 21.6699 4.9767 21.9159C4.9767 22.1619 5.1677 22.3669 5.4417 22.3669H16.6657C16.9257 22.3669 17.1307 22.1619 17.1307 21.9159C17.1307 21.6699 16.9257 21.4649 16.6657 21.4649Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.8203125 28.779296875"
          className={className}
        >
          <path
            d="              M3.5137 28.7796H18.3207C20.6037 28.7796 21.8207 27.5626 21.8207 25.2656V11.6216C21.8207 10.7056 21.6567 10.2816 21.1097 9.7346L12.0857 0.7246C11.5387 0.1636 11.1157 -0.0004 10.1997 -0.0004H3.5137C1.2577 -0.0004 -0.0003 1.2166 -0.0003 3.5136V25.2656C-0.0003 27.5626 1.2167 28.7796 3.5137 28.7796ZM3.5407 28.1096C1.6547 28.1096 0.6697 27.1246 0.6697 25.2386V3.5406C0.6697 1.7226 1.6547 0.6696 3.5407 0.6696H10.5817V9.4746C10.5817 10.7326 11.1977 11.2386 12.3457 11.2386H21.1507V25.2386C21.1507 27.1246 20.1797 28.1096 18.2797 28.1096ZM12.3727 10.5686C11.5667 10.5686 11.2517 10.2536 11.2517 9.4476V0.8476L20.9727 10.5686ZM16.7067 16.6656H5.2367C5.0317 16.6656 4.8807 16.8166 4.8807 17.0076C4.8807 17.1996 5.0317 17.3496 5.2367 17.3496H16.7067C16.9117 17.3496 17.0627 17.1996 17.0627 17.0076C17.0627 16.8166 16.9117 16.6656 16.7067 16.6656ZM16.7067 21.5196H5.2367C5.0317 21.5196 4.8807 21.6696 4.8807 21.8616C4.8807 22.0386 5.0317 22.2036 5.2367 22.2036H16.7067C16.9117 22.2036 17.0627 22.0386 17.0627 21.8616C17.0627 21.6696 16.9117 21.5196 16.7067 21.5196Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
