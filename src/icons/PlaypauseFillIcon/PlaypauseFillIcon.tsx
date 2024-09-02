import { IconProps } from "../../types"

export default function PlaypauseFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48.220703125 24.705078125"
          className={className}
        >
          <path
            d="              M28.7797 24.7048H32.4027C34.1117 24.7048 34.9587 23.8578 34.9587 22.1488V2.5568C34.9587 0.9158 34.1117 -0.0002 32.4027 -0.0002H28.7797C27.0707 -0.0002 26.2087 0.8478 26.2087 2.5568V22.1488C26.2087 23.8578 27.0157 24.7048 28.7797 24.7048ZM42.0407 24.7048H45.6637C47.3727 24.7048 48.2207 23.8578 48.2207 22.1488V2.5568C48.2207 0.9158 47.3727 -0.0002 45.6637 -0.0002H42.0407C40.3317 -0.0002 39.4707 0.8478 39.4707 2.5568V22.1488C39.4707 23.8578 40.2777 24.7048 42.0407 24.7048ZM3.1997 24.4588C3.9927 24.4588 4.7307 24.2808 5.4687 23.8438L19.7837 15.5038C21.0687 14.7658 22.0527 13.8088 22.0527 12.3318C22.0527 10.8558 21.1097 9.9808 19.7837 9.2148L5.4687 0.8748C4.7167 0.4378 3.9647 0.2598 3.1717 0.2598C1.4357 0.2598 -0.0003 1.5448 -0.0003 3.7868V20.9318C-0.0003 23.1598 1.4767 24.4588 3.1997 24.4588Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 44.65234375 23.48828125"
          className={className}
        >
          <path
            d="              M27.0157 23.4882H30.3787C31.8277 23.4882 32.5667 22.7502 32.5667 21.3012V2.2012C32.5667 0.7522 31.8277 0.0002 30.3787 0.0002H27.0157C25.5527 0.0002 24.8147 0.7522 24.8147 2.2012V21.3012C24.8147 22.7502 25.5257 23.4882 27.0157 23.4882ZM39.0877 23.4882H42.4517C43.9137 23.4882 44.6527 22.7502 44.6527 21.3012V2.2012C44.6527 0.7522 43.9137 0.0002 42.4517 0.0002H39.0877C37.6387 0.0002 36.9007 0.7522 36.9007 2.2012V21.3012C36.9007 22.7502 37.6117 23.4882 39.0877 23.4882ZM2.5837 23.1602C3.2537 23.1602 3.8557 22.9962 4.5117 22.6132L18.6347 14.3422C19.7557 13.6852 20.4527 12.8652 20.4527 11.7302C20.4527 10.5952 19.7837 9.8302 18.6347 9.1602L4.5117 0.8882C3.8417 0.5062 3.2537 0.3282 2.5707 0.3282C1.1617 0.3282 -0.0003 1.3812 -0.0003 3.2672V20.2342C-0.0003 22.1072 1.1897 23.1602 2.5837 23.1602Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 46.5390625 24.130859375"
          className={className}
        >
          <path
            d="              M27.9457 24.1307H31.4457C33.0317 24.1307 33.8377 23.3247 33.8377 21.7387V2.3927C33.8377 0.8337 33.0317 -0.0003 31.4457 -0.0003H27.9457C26.3597 -0.0003 25.5527 0.7927 25.5527 2.3927V21.7387C25.5527 23.3247 26.3187 24.1307 27.9457 24.1307ZM40.6467 24.1307H44.1467C45.7327 24.1307 46.5387 23.3247 46.5387 21.7387V2.3927C46.5387 0.8337 45.7327 -0.0003 44.1467 -0.0003H40.6467C39.0607 -0.0003 38.2537 0.7927 38.2537 2.3927V21.7387C38.2537 23.3247 39.0197 24.1307 40.6467 24.1307ZM2.9117 23.8437C3.6367 23.8437 4.3207 23.6657 5.0177 23.2697L19.2367 14.9567C20.4397 14.2457 21.2867 13.3577 21.2867 12.0447C21.2867 10.7327 20.4807 9.9117 19.2367 9.1877L5.0177 0.8747C4.3067 0.4647 3.6367 0.2867 2.8847 0.2867C1.3127 0.2867 -0.0003 1.4627 -0.0003 3.5407V20.6037C-0.0003 22.6677 1.3397 23.8437 2.9117 23.8437Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.40234375 21.765625"
          className={className}
        >
          <path
            d="              M24.4047 21.7659H27.4257C28.5057 21.7659 29.0387 21.2459 29.0387 20.1519V1.6269C29.0387 0.4919 28.5057 -0.0001 27.4257 -0.0001H24.4047C23.3107 -0.0001 22.7777 0.5329 22.7777 1.6269V20.1519C22.7777 21.2459 23.3107 21.7659 24.4047 21.7659ZM34.7677 21.7659H37.7887C38.8827 21.7659 39.4027 21.2459 39.4027 20.1519V1.6269C39.4027 0.4919 38.8827 -0.0001 37.7887 -0.0001H34.7677C33.6737 -0.0001 33.1407 0.5329 33.1407 1.6269V20.1519C33.1407 21.2459 33.6737 21.7659 34.7677 21.7659ZM1.7497 21.3279C2.2427 21.3279 2.6937 21.1499 3.1587 20.8629L17.2127 12.6059C17.9927 12.1409 18.3617 11.5659 18.3617 10.8689C18.3617 10.1719 17.9927 9.6249 17.2127 9.1469L3.1587 0.8889C2.6797 0.6149 2.2427 0.4239 1.7497 0.4239C0.8207 0.4239 -0.0003 1.1349 -0.0003 2.5159V19.2359C-0.0003 20.6169 0.8207 21.3279 1.7497 21.3279Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 42.369140625 22.708984375"
          className={className}
        >
          <path
            d="              M25.8807 22.7087H29.0797C30.3657 22.7087 31.0347 22.0388 31.0347 20.7538V1.9548C31.0347 0.6288 30.3657 -0.0003 29.0797 -0.0003H25.8807C24.5817 -0.0003 23.9257 0.6698 23.9257 1.9548V20.7538C23.9257 22.0388 24.5817 22.7087 25.8807 22.7087ZM37.2017 22.7087H40.4137C41.6997 22.7087 42.3687 22.0388 42.3687 20.7538V1.9548C42.3687 0.6288 41.6997 -0.0003 40.4137 -0.0003H37.2017C35.9157 -0.0003 35.2457 0.6698 35.2457 1.9548V20.7538C35.2457 22.0388 35.9027 22.7087 37.2017 22.7087ZM2.1877 22.3258C2.7887 22.3258 3.2947 22.1488 3.8827 21.8068L17.8967 13.5758C18.9087 12.9748 19.4277 12.2498 19.4277 11.3338C19.4277 10.4317 18.9217 9.7208 17.8967 9.1058L3.8827 0.8888C3.2947 0.5467 2.7887 0.3687 2.1877 0.3687C0.9977 0.3687 -0.0003 1.2578 -0.0003 2.9118V19.7697C-0.0003 21.4237 0.9977 22.3258 2.1877 22.3258Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.0703125 22.271484375"
          className={className}
        >
          <path
            d="              M25.2387 22.271H28.3557C29.5447 22.271 30.1737 21.643 30.1737 20.439V1.818C30.1737 0.574 29.5447 0 28.3557 0H25.2387C24.0487 0 23.4197 0.629 23.4197 1.818V20.439C23.4197 21.643 24.0487 22.271 25.2387 22.271ZM36.1487 22.271H39.2517C40.4547 22.271 41.0707 21.643 41.0707 20.439V1.818C41.0707 0.574 40.4547 0 39.2517 0H36.1487C34.9457 0 34.3297 0.629 34.3297 1.818V20.439C34.3297 21.643 34.9457 22.271 36.1487 22.271ZM1.9687 21.861C2.5297 21.861 2.9807 21.684 3.5407 21.355L17.4727 13.166C18.4437 12.592 18.8537 11.908 18.8537 11.129C18.8537 10.336 18.4437 9.666 17.4727 9.092L3.5407 0.889C2.9807 0.561 2.5297 0.383 1.9687 0.383C0.8887 0.383 -0.0003 1.203 -0.0003 2.734V19.523C-0.0003 21.055 0.8887 21.861 1.9687 21.861Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 43.353515625 23.037109375"
          className={className}
        >
          <path
            d="              M26.3727 23.0368H29.6407C30.9937 23.0368 31.6917 22.3398 31.6917 20.9868V2.0508C31.6917 0.6698 30.9937 -0.0002 29.6407 -0.0002H26.3727C25.0057 -0.0002 24.3087 0.6968 24.3087 2.0508V20.9868C24.3087 22.3398 24.9927 23.0368 26.3727 23.0368ZM38.0217 23.0368H41.2887C42.6567 23.0368 43.3537 22.3398 43.3537 20.9868V2.0508C43.3537 0.6698 42.6567 -0.0002 41.2887 -0.0002H38.0217C36.6547 -0.0002 35.9567 0.6968 35.9567 2.0508V20.9868C35.9567 22.3398 36.6407 23.0368 38.0217 23.0368ZM2.3657 22.6818C2.9937 22.6818 3.5407 22.5038 4.1567 22.1488L18.2107 13.9038C19.2777 13.2758 19.8657 12.5098 19.8657 11.4978C19.8657 10.4998 19.2907 9.7618 18.2107 9.1188L4.1567 0.8748C3.5277 0.5198 2.9807 0.3418 2.3517 0.3418C1.0667 0.3418 -0.0003 1.2988 -0.0003 3.0628V19.9608C-0.0003 21.7108 1.0797 22.6818 2.3657 22.6818Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.201171875 21.109375"
          className={className}
        >
          <path
            d="              M23.2837 21.1098H26.1957C27.1387 21.1098 27.5487 20.6988 27.5487 19.7558V1.3538C27.5487 0.3968 27.1387 -0.0002 26.1957 -0.0002H23.2837C22.3397 -0.0002 21.9297 0.4098 21.9297 1.3538V19.7558C21.9297 20.6988 22.3397 21.1098 23.2837 21.1098ZM32.9357 21.1098H35.8477C36.7907 21.1098 37.2017 20.6988 37.2017 19.7558V1.3538C37.2017 0.3968 36.7907 -0.0002 35.8477 -0.0002H32.9357C31.9927 -0.0002 31.5817 0.4098 31.5817 1.3538V19.7558C31.5817 20.6988 31.9927 21.1098 32.9357 21.1098ZM1.4627 20.6168C1.8727 20.6168 2.2967 20.4258 2.6527 20.2208L16.8437 11.8668C17.3907 11.5528 17.6917 11.1148 17.6917 10.5408C17.6917 9.9528 17.4047 9.5568 16.8437 9.2288L2.6527 0.8748C2.2837 0.6698 1.8727 0.4788 1.4627 0.4788C0.7107 0.4788 -0.0003 1.0388 -0.0003 2.2418V18.8538C-0.0003 20.0568 0.7107 20.6168 1.4627 20.6168Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.06640625 20.78125"
          className={className}
        >
          <path
            d="              M22.7087 20.7817H25.5667C26.4277 20.7817 26.7837 20.4257 26.7837 19.5647V1.2167C26.7837 0.3417 26.4277 -0.0003 25.5667 -0.0003H22.7087C21.8477 -0.0003 21.4927 0.3417 21.4927 1.2167V19.5647C21.4927 20.4257 21.8477 20.7817 22.7087 20.7817ZM31.9927 20.7817H34.8497C35.7247 20.7817 36.0667 20.4257 36.0667 19.5647V1.2167C36.0667 0.3417 35.7247 -0.0003 34.8497 -0.0003H31.9927C31.1307 -0.0003 30.7887 0.3417 30.7887 1.2167V19.5647C30.7887 20.4257 31.1307 20.7817 31.9927 20.7817ZM1.3127 20.2477C1.6817 20.2477 2.0917 20.0567 2.3927 19.8927L16.6657 11.4847C17.0767 11.2517 17.3497 10.8967 17.3497 10.3767C17.3497 9.8577 17.0897 9.5297 16.6657 9.2697L2.3927 0.8747C2.0777 0.6977 1.6817 0.5057 1.3127 0.5057C0.6567 0.5057 -0.0003 0.9977 -0.0003 2.1057V18.6617C-0.0003 19.7697 0.6567 20.2477 1.3127 20.2477Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}