import { IconProps } from "../../types"

export default function CubeFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.95703125 30.474609375"
          className={className}
        >
          <path
            d="              M14.4787 13.453L27.8767 6.385C27.5897 6.098 27.2347 5.865 26.8107 5.646L17.4997 0.738C16.5707 0.246 15.5317 0 14.4927 0C13.4397 0 12.4007 0.246 11.4707 0.738L2.1597 5.646C1.7367 5.865 1.3807 6.098 1.0797 6.385ZM13.1797 30.475V15.846L0.0137 8.791C-0.0003 8.928 -0.0003 9.037 -0.0003 9.16V21.219C-0.0003 23.037 0.6287 24.035 2.2147 24.869L12.2637 30.146C12.5647 30.311 12.8787 30.434 13.1797 30.475ZM15.7777 30.475C16.0777 30.434 16.3787 30.311 16.6937 30.146L26.7427 24.869C28.3277 24.035 28.9567 23.037 28.9567 21.219V9.16C28.9567 9.037 28.9437 8.928 28.9437 8.791L15.7777 15.846Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.35546875 30.10546875"
          className={className}
        >
          <path
            d="              M14.1777 13.7672L27.3167 6.5622C27.0707 6.3302 26.7697 6.1252 26.4007 5.9332L16.9257 0.7242C16.0367 0.2462 15.1077 0.0002 14.1777 0.0002C13.2477 0.0002 12.3187 0.2462 11.4297 0.7242L1.9547 5.9332C1.5857 6.1252 1.2847 6.3302 1.0387 6.5622ZM13.0567 30.1052V15.7772L0.0547 8.5862C0.0137 8.8042 -0.0003 9.0232 -0.0003 9.2972V20.6442C-0.0003 22.5452 0.6567 23.4062 2.0917 24.1852L12.4687 29.8732C12.6597 29.9822 12.8657 30.0782 13.0567 30.1052ZM15.2987 30.1052C15.4907 30.0782 15.6817 29.9822 15.8867 29.8732L26.2637 24.1852C27.6857 23.4062 28.3557 22.5452 28.3557 20.6442V9.2972C28.3557 9.0232 28.3277 8.8042 28.2867 8.5862L15.2987 15.7772Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.669921875 30.296875"
          className={className}
        >
          <path
            d="              M14.3277 13.6033L27.6177 6.4663C27.3437 6.2073 27.0157 5.9883 26.6187 5.7833L17.2267 0.7383C16.3247 0.2463 15.3267 0.0003 14.3417 0.0003C13.3437 0.0003 12.3597 0.2463 11.4567 0.7383L2.0647 5.7833C1.6677 5.9883 1.3397 6.2073 1.0667 6.4663ZM13.1247 30.2973V15.8183L0.0277 8.6953C0.0137 8.8593 -0.0003 9.0233 -0.0003 9.2283V20.9453C-0.0003 22.8043 0.6427 23.7343 2.1467 24.5413L12.3597 30.0233C12.6187 30.1603 12.8657 30.2693 13.1247 30.2973ZM15.5447 30.2973C15.7907 30.2693 16.0507 30.1603 16.3107 30.0233L26.5097 24.5413C28.0277 23.7343 28.6697 22.8043 28.6697 20.9453V9.2283C28.6697 9.0233 28.6567 8.8593 28.6287 8.6953L15.5447 15.8183Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.3984375 29.2578125"
          className={className}
        >
          <path
            d="              M13.6997 14.055L26.5917 6.822C26.4137 6.645 26.2227 6.508 25.9217 6.344L15.7907 0.615C15.0667 0.205 14.3827 0 13.6997 0C13.0157 0 12.3317 0.205 11.6207 0.615L1.4767 6.357C1.1897 6.508 0.9847 6.645 0.8207 6.822ZM12.9067 29.258V15.463L0.0957 8.271C0.0277 8.504 -0.0003 8.777 -0.0003 9.146V20.043C-0.0003 21.684 0.5607 22.367 1.7087 23.01L12.6057 29.121C12.7017 29.176 12.7967 29.23 12.9067 29.258ZM14.4927 29.258C14.6017 29.23 14.6977 29.176 14.7927 29.121L25.6897 23.01C26.8377 22.367 27.3987 21.684 27.3987 20.043V9.146C27.3987 8.777 27.3707 8.504 27.3027 8.271L14.4927 15.463Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.958984375 29.88671875"
          className={className}
        >
          <path
            d="              M13.9867 13.9731L26.9607 6.6991C26.7287 6.4801 26.4687 6.3031 26.1407 6.1251L16.5567 0.7381C15.7087 0.2461 14.8337 0.0001 13.9867 0.0001C13.1247 0.0001 12.2637 0.2461 11.4027 0.7381L1.8187 6.1251C1.5037 6.3031 1.2307 6.4801 1.0117 6.6991ZM12.9887 29.8871V15.7501L0.0957 8.4631C0.0277 8.7361 -0.0003 9.0231 -0.0003 9.3791V20.2891C-0.0003 22.2441 0.6837 23.0231 2.0097 23.7751L12.5917 29.7231C12.7287 29.7911 12.8517 29.8591 12.9887 29.8871ZM14.9847 29.8871C15.1077 29.8591 15.2437 29.7911 15.3677 29.7231L25.9627 23.7751C27.2757 23.0231 27.9587 22.2441 27.9587 20.2891V9.3791C27.9587 9.0231 27.9317 8.7361 27.8767 8.4631L14.9847 15.7501Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.740234375 29.75"
          className={className}
        >
          <path
            d="              M13.8767 14.082L26.7557 6.768C26.5507 6.562 26.3047 6.398 26.0037 6.234L16.3517 0.738C15.5177 0.26 14.6837 0 13.8767 0C13.0567 0 12.2227 0.26 11.3887 0.738L1.7497 6.234C1.4497 6.398 1.2027 6.562 0.9847 6.768ZM12.9337 29.75V15.723L0.1097 8.394C0.0277 8.695 -0.0003 9.023 -0.0003 9.434V20.084C-0.0003 22.066 0.6977 22.805 1.9547 23.529L12.6737 29.627C12.7557 29.682 12.8377 29.723 12.9337 29.75ZM14.8067 29.75C14.9027 29.723 14.9847 29.682 15.0797 29.627L25.7847 23.529C27.0567 22.805 27.7407 22.066 27.7407 20.084V9.434C27.7407 9.023 27.7127 8.695 27.6307 8.394L14.8067 15.723Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.123046875 29.982421875"
          className={className}
        >
          <path
            d="              M14.0687 13.8771L27.1117 6.6441C26.8787 6.4121 26.5917 6.2211 26.2497 6.0431L16.7207 0.7241C15.8457 0.2461 14.9567 0.0001 14.0687 0.0001C13.1797 0.0001 12.2777 0.2461 11.4157 0.7241L1.8867 6.0431C1.5447 6.2211 1.2577 6.4121 1.0257 6.6441ZM13.0157 29.9821V15.7641L0.0817 8.5171C0.0277 8.7641 -0.0003 9.0231 -0.0003 9.3381V20.4391C-0.0003 22.3811 0.6697 23.1871 2.0367 23.9531L12.5367 29.7911C12.7017 29.8731 12.8517 29.9551 13.0157 29.9821ZM15.1207 29.9821C15.2717 29.9551 15.4357 29.8731 15.5857 29.7911L26.0857 23.9531C27.4527 23.1871 28.1227 22.3811 28.1227 20.4391V9.3381C28.1227 9.0231 28.1097 8.7641 28.0547 8.5171L15.1207 15.7641Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.947265625 28.6015625"
          className={className}
        >
          <path
            d="              M13.4807 14.0276L26.3727 6.9046C26.2497 6.7676 26.1267 6.6716 25.8397 6.5076L15.0257 0.4786C14.4787 0.1636 13.9727 -0.0004 13.4807 -0.0004C12.9747 -0.0004 12.4687 0.1636 11.9217 0.4786L1.1077 6.5216C0.8477 6.6716 0.6977 6.7676 0.5747 6.9046ZM12.8657 28.6016V15.1206L0.0817 8.1206C0.0137 8.2716 -0.0003 8.4766 -0.0003 8.7906V20.0016C-0.0003 21.1916 0.3827 21.7926 1.3807 22.3396L12.5237 28.4646C12.6187 28.5196 12.7427 28.5876 12.8657 28.6016ZM14.0817 28.6016C14.2047 28.5876 14.3277 28.5196 14.4237 28.4646L25.5667 22.3396C26.5647 21.7926 26.9477 21.1916 26.9477 20.0016V8.7906C26.9477 8.4766 26.9337 8.2716 26.8657 8.1206L14.0817 15.1206Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.71484375 28.259765625"
          className={className}
        >
          <path
            d="              M13.3577 14.0136L26.2497 6.9456C26.1677 6.8226 26.0727 6.7406 25.7847 6.5896L14.6427 0.3966C14.1777 0.1366 13.7677 -0.0004 13.3577 -0.0004C12.9477 -0.0004 12.5367 0.1366 12.0727 0.3966L0.9297 6.6036C0.6697 6.7406 0.5467 6.8226 0.4647 6.9456ZM12.8377 28.2596V14.9436L0.0687 8.0386C0.0137 8.1486 -0.0003 8.3126 -0.0003 8.5996V19.9746C-0.0003 20.9316 0.2867 21.4926 1.2027 21.9976L12.4687 28.1226C12.5777 28.1646 12.7147 28.2596 12.8377 28.2596ZM13.8767 28.2596C13.9997 28.2596 14.1367 28.1646 14.2457 28.1226L25.5117 21.9976C26.4277 21.4926 26.7147 20.9316 26.7147 19.9746V8.5996C26.7147 8.3126 26.7017 8.1486 26.6467 8.0386L13.8767 14.9436Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}