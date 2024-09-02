import { IconProps } from "../../types"

export default function OvalIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.814453125 29.162109375"
          className={className}
        >
          <path
            d="              M-0.0003 14.5743C-0.0003 23.3103 7.7927 29.1623 19.4137 29.1623C31.0217 29.1623 38.8147 23.3103 38.8147 14.5743C38.8147 5.8513 31.0217 0.0003 19.4137 0.0003C7.7927 0.0003 -0.0003 5.8513 -0.0003 14.5743ZM4.8537 14.5743C4.8537 8.8733 10.8557 4.8533 19.4137 4.8533C27.9587 4.8533 33.9607 8.8733 33.9607 14.5743C33.9607 20.2893 27.9587 24.3083 19.4137 24.3083C10.8557 24.3083 4.8537 20.2893 4.8537 14.5743Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.05078125 27.876953125"
          className={className}
        >
          <path
            d="              M-0.0003 13.9317C-0.0003 22.1757 7.5467 27.8767 18.5257 27.8767C29.5037 27.8767 37.0507 22.1757 37.0507 13.9317C37.0507 5.7007 29.5037 -0.0003 18.5257 -0.0003C7.5467 -0.0003 -0.0003 5.7007 -0.0003 13.9317ZM3.5277 13.9317C3.5277 7.8477 9.7347 3.5407 18.5257 3.5407C27.3167 3.5407 33.5237 7.8477 33.5237 13.9317C33.5237 20.0157 27.3167 24.3357 18.5257 24.3357C9.7347 24.3357 3.5277 20.0157 3.5277 13.9317Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.98046875 28.560546875"
          className={className}
        >
          <path
            d="              M-0.0003 14.2735C-0.0003 22.7775 7.6837 28.5605 18.9907 28.5605C30.3107 28.5605 37.9807 22.7775 37.9807 14.2735C37.9807 5.7835 30.3107 -0.0005 18.9907 -0.0005C7.6837 -0.0005 -0.0003 5.7835 -0.0003 14.2735ZM4.2247 14.2735C4.2247 8.3945 10.3227 4.2385 18.9907 4.2385C27.6577 4.2385 33.7557 8.3945 33.7557 14.2735C33.7557 20.1655 27.6577 24.3225 18.9907 24.3225C10.3227 24.3225 4.2247 20.1655 4.2247 14.2735Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.0703125 25.744140625"
          className={className}
        >
          <path
            d="              M-0.0003 12.8653C-0.0003 20.3303 7.0687 25.7443 17.0347 25.7443C27.0017 25.7443 34.0707 20.3303 34.0707 12.8653C34.0707 5.4003 27.0017 0.0003 17.0347 0.0003C7.0687 0.0003 -0.0003 5.4003 -0.0003 12.8653ZM1.6957 12.8653C1.6957 6.4123 8.0667 1.6953 17.0347 1.6953C26.0037 1.6953 32.3747 6.4123 32.3747 12.8653C32.3747 19.3323 26.0037 24.0493 17.0347 24.0493C8.0667 24.0493 1.6957 19.3323 1.6957 12.8653Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.916015625 27.029296875"
          className={className}
        >
          <path
            d="              M-0.0003 13.5079C-0.0003 21.4239 7.3967 27.0289 17.9507 27.0289C28.5197 27.0289 35.9157 21.4239 35.9157 13.5079C35.9157 5.5919 28.5197 -0.0001 17.9507 -0.0001C7.3967 -0.0001 -0.0003 5.5919 -0.0003 13.5079ZM2.6797 13.5079C2.6797 7.1909 9.0097 2.6799 17.9507 2.6799C26.9067 2.6799 33.2367 7.1909 33.2367 13.5079C33.2367 19.8379 26.9067 24.3499 17.9507 24.3499C9.0097 24.3499 2.6797 19.8379 2.6797 13.5079Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.2734375 26.564453125"
          className={className}
        >
          <path
            d="              M-0.0003 13.2755C-0.0003 21.0135 7.3007 26.5645 17.6367 26.5645C27.9727 26.5645 35.2737 21.0135 35.2737 13.2755C35.2737 5.5235 27.9727 0.0005 17.6367 0.0005C7.3007 0.0005 -0.0003 5.5235 -0.0003 13.2755ZM2.2007 13.2755C2.2007 6.8225 8.5997 2.2015 17.6367 2.2015C26.6737 2.2015 33.0727 6.8225 33.0727 13.2755C33.0727 19.7285 26.6737 24.3635 17.6367 24.3635C8.5997 24.3635 2.2007 19.7285 2.2007 13.2755Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.408203125 27.384765625"
          className={className}
        >
          <path
            d="              M-0.0003 13.6856C-0.0003 21.7386 7.4647 27.3846 18.1977 27.3846C28.9437 27.3846 36.4077 21.7386 36.4077 13.6856C36.4077 5.6326 28.9437 -0.0004 18.1977 -0.0004C7.4647 -0.0004 -0.0003 5.6326 -0.0003 13.6856ZM3.0487 13.6856C3.0487 7.4786 9.3237 3.0356 18.1977 3.0356C27.0837 3.0356 33.3597 7.4786 33.3597 13.6856C33.3597 19.9066 27.0837 24.3496 18.1977 24.3496C9.3237 24.3496 3.0487 19.9066 3.0487 13.6856Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.470703125 24.677734375"
          className={className}
        >
          <path
            d="              M-0.0003 12.3321C-0.0003 19.4141 6.7407 24.6781 16.2417 24.6781C25.7307 24.6781 32.4707 19.4141 32.4707 12.3321C32.4707 5.2501 25.7307 0.0001 16.2417 0.0001C6.7407 0.0001 -0.0003 5.2501 -0.0003 12.3321ZM1.0117 12.3321C1.0117 5.8651 7.3557 1.0251 16.2417 1.0251C25.1287 1.0251 31.4587 5.8651 31.4587 12.3321C31.4587 18.7991 25.1287 23.6521 16.2417 23.6521C7.3557 23.6521 1.0117 18.7991 1.0117 12.3321Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.6640625 24.130859375"
          className={className}
        >
          <path
            d="              M-0.0003 12.0587C-0.0003 18.9497 6.5897 24.1307 15.8317 24.1307C25.0737 24.1307 31.6637 18.9497 31.6637 12.0587C31.6637 5.1677 25.0737 -0.0003 15.8317 -0.0003C6.5897 -0.0003 -0.0003 5.1677 -0.0003 12.0587ZM0.6697 12.0587C0.6697 5.5777 6.9867 0.6977 15.8317 0.6977C24.6777 0.6977 30.9937 5.5777 30.9937 12.0587C30.9937 18.5257 24.6777 23.4337 15.8317 23.4337C6.9867 23.4337 0.6697 18.5257 0.6697 12.0587Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}