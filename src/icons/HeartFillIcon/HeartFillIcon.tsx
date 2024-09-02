import { IconProps } from "../../types"

export default function HeartFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.75 27.7265625"
          className={className}
        >
          <path
            d="              M14.8747 27.7265C15.5037 27.7265 16.4607 27.1245 17.4177 26.4965C24.7597 21.5745 29.7497 15.6265 29.7497 9.7065C29.7497 3.8145 25.5937 -0.0005 20.9457 -0.0005C18.0197 -0.0005 16.0367 1.5995 14.8747 3.8005C13.7127 1.5995 11.7167 -0.0005 8.8047 -0.0005C4.1567 -0.0005 -0.0003 3.8145 -0.0003 9.7065C-0.0003 15.6265 4.9907 21.5745 12.3317 26.4965C13.2887 27.1245 14.2327 27.7265 14.8747 27.7265Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.451171875 26.4140625"
          className={className}
        >
          <path
            d="              M14.2187 26.4143C14.6837 26.4143 15.3677 26.0173 15.9957 25.6073C23.5157 20.6993 28.4517 14.8473 28.4517 8.9823C28.4517 3.6093 24.7187 0.0003 20.2347 0.0003C17.4457 0.0003 15.4217 1.5313 14.2187 3.7733C13.0297 1.5453 11.0057 0.0003 8.2167 0.0003C3.7327 0.0003 -0.0003 3.6093 -0.0003 8.9823C-0.0003 14.8473 4.9357 20.6993 12.4547 25.6073C13.0837 26.0173 13.7677 26.4143 14.2187 26.4143Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.134765625 27.111328125"
          className={className}
        >
          <path
            d="              M14.5607 27.1118C15.1207 27.1118 15.9417 26.6188 16.7347 26.0858C24.1717 21.1638 29.1347 15.2718 29.1347 9.3788C29.1347 3.7328 25.1837 -0.0002 20.6037 -0.0002C17.7457 -0.0002 15.7497 1.5718 14.5607 3.8008C13.3847 1.5718 11.3887 -0.0002 8.5177 -0.0002C3.9517 -0.0002 -0.0003 3.7328 -0.0003 9.3788C-0.0003 15.2718 4.9627 21.1638 12.3867 26.0858C13.1937 26.6188 14.0137 27.1118 14.5607 27.1118Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.646484375 24.47265625"
          className={className}
        >
          <path
            d="              M13.3167 24.473C13.5767 24.473 13.9177 24.322 14.1637 24.172C21.6697 19.305 26.6467 13.713 26.6467 8.012C26.6467 3.336 23.4337 0 19.2087 0C16.6387 0 14.4927 1.449 13.3167 3.691C12.1547 1.463 9.9937 0 7.4377 0C3.2127 0 -0.0003 3.336 -0.0003 8.012C-0.0003 13.713 4.9767 19.305 12.4827 24.172C12.7287 24.322 13.0707 24.473 13.3167 24.473Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.6171875 25.580078125"
          className={className}
        >
          <path
            d="              M13.8087 25.5801C14.1637 25.5801 14.6697 25.3201 15.0797 25.0601C22.7227 20.1391 27.6177 14.3691 27.6177 8.5171C27.6177 3.5001 24.1587 0.0001 19.7967 0.0001C17.0767 0.0001 15.0387 1.5041 13.8087 3.7601C12.5917 1.5171 10.5407 0.0001 7.8337 0.0001C3.4727 0.0001 -0.0003 3.5001 -0.0003 8.5171C-0.0003 14.3691 4.8947 20.1391 12.5367 25.0601C12.9477 25.3201 13.4667 25.5801 13.8087 25.5801Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.15234375 25.1015625"
          className={className}
        >
          <path
            d="              M13.5767 25.102C13.8637 25.102 14.2737 24.91 14.5747 24.732C22.2717 19.81 27.1527 14.082 27.1527 8.258C27.1527 3.418 23.8297 0 19.5367 0C16.8707 0 14.8207 1.477 13.5767 3.732C12.3597 1.49 10.2817 0 7.6157 0C3.3227 0 -0.0003 3.418 -0.0003 8.258C-0.0003 14.082 4.8807 19.81 12.5917 24.732C12.8787 24.91 13.2887 25.102 13.5767 25.102Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.97265625 25.935546875"
          className={className}
        >
          <path
            d="              M13.9867 25.9359C14.3827 25.9359 14.9707 25.6209 15.4767 25.2929C23.0647 20.3709 27.9727 14.5739 27.9727 8.7229C27.9727 3.5549 24.3907 -0.0001 19.9887 -0.0001C17.2407 -0.0001 15.2027 1.5179 13.9867 3.7599C12.7837 1.5309 10.7457 -0.0001 7.9977 -0.0001C3.5817 -0.0001 -0.0003 3.5549 -0.0003 8.7229C-0.0003 14.5739 4.9087 20.3709 12.5097 25.2929C13.0157 25.6209 13.5897 25.9359 13.9867 25.9359Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.9765625 23.638671875"
          className={className}
        >
          <path
            d="              M12.9887 23.6392C13.1797 23.6392 13.4397 23.5292 13.6177 23.4062C20.8637 18.6212 25.9767 13.2072 25.9767 7.6702C25.9767 3.1992 22.8867 0.0002 18.7717 0.0002C16.3517 0.0002 14.0687 1.4082 12.9887 3.6092C11.8947 1.4222 9.6247 0.0002 7.1917 0.0002C3.0767 0.0002 -0.0003 3.1992 -0.0003 7.6702C-0.0003 13.2072 5.0997 18.6212 12.3457 23.4062C12.5367 23.5292 12.7837 23.6392 12.9887 23.6392Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.62109375 23.201171875"
          className={className}
        >
          <path
            d="              M12.8107 23.2014C12.9887 23.2014 13.1937 23.1194 13.3437 23.0234C20.4527 18.2794 25.6207 12.9474 25.6207 7.4924C25.6207 3.1304 22.6137 0.0004 18.5527 0.0004C16.2017 0.0004 13.8497 1.3944 12.8107 3.5684C11.7717 1.3944 9.4197 0.0004 7.0687 0.0004C3.0077 0.0004 -0.0003 3.1304 -0.0003 7.4924C-0.0003 12.9474 5.1677 18.2794 12.2777 23.0234C12.4277 23.1194 12.6467 23.2014 12.8107 23.2014Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
