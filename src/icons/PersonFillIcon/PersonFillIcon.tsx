import { IconProps } from "../../types"

export default function PersonFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.515625 25.3203125"
          className={className}
        >
          <path
            d="              M11.7577 12.3319C14.9847 12.3319 17.4867 9.5699 17.4867 6.1109C17.4867 2.8299 14.9437 -0.0001 11.7577 -0.0001C8.5727 -0.0001 6.0427 2.8299 6.0427 6.1249C6.0427 9.5699 8.5447 12.3319 11.7577 12.3319ZM2.9937 25.3199H20.5347C22.4087 25.3199 23.5157 24.3909 23.5157 22.8459C23.5157 19.3729 18.8537 14.6699 11.7577 14.6699C4.6757 14.6699 -0.0003 19.3729 -0.0003 22.8459C-0.0003 24.3909 1.1207 25.3199 2.9937 25.3199Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.26953125 24.951171875"
          className={className}
        >
          <path
            d="              M11.6347 12.1265C14.7107 12.1265 17.2267 9.4335 17.2267 6.0015C17.2267 2.6655 14.6837 -0.0005 11.6347 -0.0005C8.5857 -0.0005 6.0427 2.6935 6.0427 6.0155C6.0427 9.4335 8.5587 12.1265 11.6347 12.1265ZM2.6657 24.9515H20.6037C22.2717 24.9515 23.2697 24.1445 23.2697 22.8045C23.2697 19.3045 18.7167 14.5195 11.6347 14.5195C4.5387 14.5195 -0.0003 19.3045 -0.0003 22.8045C-0.0003 24.1445 0.9977 24.9515 2.6657 24.9515Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.392578125 25.15625"
          className={className}
        >
          <path
            d="              M11.7027 12.2499C14.8477 12.2499 17.3637 9.5159 17.3637 6.0699C17.3637 2.7619 14.8207 -0.0001 11.7027 -0.0001C8.5727 -0.0001 6.0427 2.7749 6.0427 6.0839C6.0427 9.5159 8.5447 12.2499 11.7027 12.2499ZM2.8297 25.1559H20.5627C22.3397 25.1559 23.3927 24.2809 23.3927 22.8319C23.3927 19.3589 18.7847 14.6019 11.7027 14.6019C4.6077 14.6019 -0.0003 19.3589 -0.0003 22.8319C-0.0003 24.2809 1.0527 25.1559 2.8297 25.1559Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.88671875 24.36328125"
          className={className}
        >
          <path
            d="              M11.4567 11.8397C14.4097 11.8397 16.8707 9.2287 16.8707 5.8377C16.8707 2.5567 14.3967 -0.0003 11.4567 -0.0003C8.5317 -0.0003 6.0567 2.5837 6.0567 5.8517C6.0567 9.2287 8.5037 11.8397 11.4567 11.8397ZM2.1737 24.3637H20.7127C22.0527 24.3637 22.8867 23.7067 22.8867 22.6407C22.8867 19.1267 18.4977 14.2867 11.4437 14.2867C4.3887 14.2867 -0.0003 19.1267 -0.0003 22.6407C-0.0003 23.7067 0.8337 24.3637 2.1737 24.3637Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.10546875 24.705078125"
          className={className}
        >
          <path
            d="              M11.5527 12.0035C14.5467 12.0035 17.0627 9.3375 17.0627 5.9195C17.0627 2.5565 14.5197 0.0005 11.5527 0.0005C8.5857 0.0005 6.0427 2.6115 6.0427 5.9475C6.0427 9.3375 8.5727 12.0035 11.5527 12.0035ZM2.4477 24.7055H20.6447C22.1757 24.7055 23.1057 23.9805 23.1057 22.7775C23.1057 19.2635 18.6347 14.4235 11.5527 14.4235C4.4567 14.4235 -0.0003 19.2635 -0.0003 22.7775C-0.0003 23.9805 0.9157 24.7055 2.4477 24.7055Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.009765625 24.58203125"
          className={className}
        >
          <path
            d="              M11.5117 11.9221C14.4377 11.9221 16.9807 9.2971 16.9807 5.8791C16.9807 2.5021 14.4377 0.0001 11.5117 0.0001C8.5857 0.0001 6.0427 2.5571 6.0427 5.9061C6.0427 9.2971 8.5727 11.9221 11.5117 11.9221ZM2.3377 24.5821H20.6717C22.1347 24.5821 23.0097 23.8981 23.0097 22.7641C23.0097 19.2361 18.5937 14.3691 11.4977 14.3691C4.4157 14.3691 -0.0003 19.2361 -0.0003 22.7641C-0.0003 23.8981 0.8747 24.5821 2.3377 24.5821Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.173828125 24.814453125"
          className={className}
        >
          <path
            d="              M11.5937 12.0582C14.6157 12.0582 17.1307 9.3792 17.1307 5.9472C17.1307 2.6112 14.6017 0.0002 11.5937 0.0002C8.5857 0.0002 6.0427 2.6522 6.0427 5.9742C6.0427 9.3792 8.5727 12.0582 11.5937 12.0582ZM2.5427 24.8142H20.6307C22.2167 24.8142 23.1737 24.0492 23.1737 22.7912C23.1737 19.2772 18.6757 14.4652 11.5797 14.4652C4.4977 14.4652 -0.0003 19.2772 -0.0003 22.7912C-0.0003 24.0492 0.9567 24.8142 2.5427 24.8142Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.72265625 24.08984375"
          className={className}
        >
          <path
            d="              M11.3887 11.73C14.3827 11.73 16.7207 9.146 16.7207 5.797C16.7207 2.625 14.3417 0 11.3887 0C8.4497 0 6.0707 2.639 6.0707 5.811C6.0707 9.146 8.4087 11.73 11.3887 11.73ZM1.9687 24.09H20.7677C21.9437 24.09 22.7227 23.461 22.7227 22.49C22.7227 19.004 18.3617 14.191 11.3617 14.191C4.3617 14.191 -0.0003 19.004 -0.0003 22.49C-0.0003 23.461 0.7797 24.09 1.9687 24.09Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.640625 23.939453125"
          className={className}
        >
          <path
            d="              M11.3617 11.662C14.3557 11.662 16.6387 9.105 16.6387 5.77C16.6387 2.652 14.3007 0 11.3617 0C8.4087 0 6.0707 2.652 6.0707 5.77C6.0707 9.105 8.3537 11.662 11.3617 11.662ZM1.8597 23.939H20.7817C21.9027 23.939 22.6407 23.311 22.6407 22.395C22.6407 18.922 18.3067 14.123 11.3207 14.123C4.3477 14.123 -0.0003 18.922 -0.0003 22.395C-0.0003 23.311 0.7517 23.939 1.8597 23.939Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
