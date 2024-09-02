import { IconProps } from "../../types"

export default function SelectionPinInOutIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.6640625 40.099609375"
          className={className}
        >
          <path
            d="              M6.0157 31.1175H18.7717V33.8925C18.0337 34.5355 17.5547 35.4785 17.5547 36.5445C17.5547 38.4045 19.1817 40.0995 21.1097 40.0995C22.9827 40.0995 24.6637 38.4045 24.6637 36.5445C24.6637 35.5055 24.2677 34.6035 23.6247 33.9605V13.9455C23.6247 10.8005 21.7927 8.9825 18.6487 8.9825H5.8787V6.1665C6.6177 5.4965 7.1097 4.5525 7.1097 3.5545C7.1097 1.5035 5.6057 -0.0005 3.5547 -0.0005C1.6137 -0.0005 -0.0003 1.5855 -0.0003 3.5545C-0.0003 4.4705 0.3967 5.3455 1.0257 6.0015V26.1405C1.0257 29.2855 2.8577 31.1175 6.0157 31.1175ZM7.0277 26.2775C6.2617 26.2775 5.8787 25.9495 5.8787 25.1285V13.8225H17.6227C18.3887 13.8225 18.7717 14.1505 18.7717 14.9705V26.2775Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.501953125 37.830078125"
          className={className}
        >
          <path
            d="              M5.6327 29.2853H18.7987V32.4433C18.0467 32.9903 17.5547 33.8653 17.5547 34.8633C17.5547 36.4633 18.8947 37.8303 20.5217 37.8303C22.1207 37.8303 23.5017 36.4633 23.5017 34.8633C23.5017 33.8653 23.0507 33.0173 22.3267 32.4843V12.9063C22.3267 10.0903 20.7817 8.5453 17.9517 8.5453H4.7027V5.3593C5.4417 4.8123 5.9477 3.9373 5.9477 2.9673C5.9477 1.2853 4.6617 0.0003 2.9667 0.0003C1.3537 0.0003 -0.0003 1.3263 -0.0003 2.9673C-0.0003 3.8963 0.4647 4.7583 1.1757 5.3183V24.8553C1.1757 27.7263 2.7477 29.2853 5.6327 29.2853ZM6.1247 25.8403C5.1817 25.8403 4.7027 25.3613 4.7027 24.4043V12.0043H17.3767C18.3207 12.0043 18.7987 12.4823 18.7987 13.4393V25.8403Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.1171875 39.033203125"
          className={className}
        >
          <path
            d="              M5.8377 30.2559H18.7847V33.2089C18.0337 33.7969 17.5547 34.7269 17.5547 35.7519C17.5547 37.4879 19.0447 39.0329 20.8357 39.0329C22.5857 39.0329 24.1177 37.4879 24.1177 35.7519C24.1177 34.7269 23.6937 33.8519 23.0097 33.2499V13.4529C23.0097 10.4729 21.3147 8.7769 18.3207 8.7769H5.3187V5.7969C6.0707 5.1819 6.5487 4.2659 6.5487 3.2809C6.5487 1.4079 5.1547 -0.0001 3.2817 -0.0001C1.4907 -0.0001 -0.0003 1.4629 -0.0003 3.2809C-0.0003 4.2109 0.4237 5.0719 1.0937 5.6879V25.5389C1.0937 28.5469 2.8027 30.2559 5.8377 30.2559ZM6.6037 26.0719C5.7557 26.0719 5.3187 25.6759 5.3187 24.7869V12.9609H17.4997C18.3477 12.9609 18.7847 13.3579 18.7847 14.2459V26.0719Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.162109375 35.697265625"
          className={className}
        >
          <path
            d="              M4.9217 27.3438H19.0857V31.3768C18.2657 31.7188 17.6777 32.5258 17.6777 33.4548C17.6777 34.6988 18.6897 35.6968 19.9197 35.6968C21.1637 35.6968 22.1617 34.6988 22.1617 33.4548C22.1617 32.5258 21.5877 31.7188 20.7817 31.3908V11.7168C20.7817 9.4878 19.6327 8.3538 17.3907 8.3538H3.1307V4.3068C3.9237 3.9648 4.4847 3.1718 4.4847 2.2418C4.4847 1.0118 3.4867 -0.0002 2.2427 -0.0002C1.0117 -0.0002 -0.0003 1.0118 -0.0003 2.2418C-0.0003 3.1988 0.6017 4.0058 1.4357 4.3338V23.8988C1.4357 26.1958 2.6117 27.3438 4.9217 27.3438ZM4.9087 25.7438C3.7327 25.7438 3.1307 25.1148 3.1307 23.9528V9.9528H17.2947C18.4847 9.9528 19.0857 10.5818 19.0857 11.7578V25.7438Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.75 36.380859375"
          className={className}
        >
          <path
            d="              M5.4007 28.1096H18.8267V31.5546C18.0607 32.0056 17.5407 32.8396 17.5407 33.7836C17.5407 35.2046 18.7167 36.3806 20.1527 36.3806C21.5747 36.3806 22.7497 35.2046 22.7497 33.7836C22.7497 32.8396 22.2577 32.0196 21.5057 31.5546V12.2496C21.5057 9.6246 20.1247 8.2716 17.4997 8.2716H3.9377V4.8266C4.6897 4.3616 5.1957 3.5276 5.1957 2.5976C5.1957 1.1486 4.0607 -0.0004 2.5977 -0.0004C1.1757 -0.0004 -0.0003 1.1626 -0.0003 2.5976C-0.0003 3.5276 0.5057 4.3616 1.2577 4.8126V24.0356C1.2577 26.7146 2.6797 28.1096 5.4007 28.1096ZM5.5367 25.5526C4.4847 25.5526 3.9377 24.9786 3.9377 23.9256V10.8286H17.2267C18.2797 10.8286 18.8267 11.4026 18.8267 12.4546V25.5526Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.326171875 35.57421875"
          className={className}
        >
          <path
            d="              M5.2637 27.4531H18.8397V31.0621C18.0747 31.4591 17.5407 32.2661 17.5407 33.1821C17.5407 34.5081 18.6207 35.5741 19.9337 35.5741C21.2597 35.5741 22.3267 34.5081 22.3267 33.1821C22.3267 32.2661 21.8067 31.4591 21.0407 31.0621V11.8671C21.0407 9.3651 19.7557 8.1211 17.2407 8.1211H3.5137V4.4981C4.2657 4.1011 4.7847 3.3091 4.7847 2.3931C4.7847 1.0801 3.7187 0.0001 2.3927 0.0001C1.0797 0.0001 -0.0003 1.0801 -0.0003 2.3931C-0.0003 3.3221 0.5337 4.1291 1.3127 4.5251V23.5701C1.3127 26.1541 2.6387 27.4531 5.2637 27.4531ZM5.2227 25.3891C4.0877 25.3891 3.5137 24.7601 3.5137 23.6661V10.1851H17.1307C18.2657 10.1851 18.8397 10.8141 18.8397 11.9081V25.3891Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.064453125 37.0234375"
          className={className}
        >
          <path
            d="              M5.4957 28.6288H18.8127V31.9508C18.0607 32.4438 17.5547 33.2908 17.5547 34.2618C17.5547 35.7518 18.7987 37.0238 20.3027 37.0238C21.8067 37.0238 23.0647 35.7518 23.0647 34.2618C23.0647 33.2908 22.5997 32.4568 21.8617 31.9648V12.5368C21.8617 9.8298 20.3987 8.3947 17.6917 8.3947H4.2657V5.0727C5.0177 4.5667 5.5237 3.7188 5.5237 2.7617C5.5237 1.2168 4.3207 -0.0003 2.7617 -0.0003C1.2437 -0.0003 -0.0003 1.2437 -0.0003 2.7617C-0.0003 3.7048 0.4927 4.5388 1.2167 5.0448V24.4048C1.2167 27.1658 2.7067 28.6288 5.4957 28.6288ZM5.7967 25.6758C4.7847 25.6758 4.2657 25.1558 4.2657 24.1448V11.3478H17.2947C18.2927 11.3478 18.8127 11.8807 18.8127 12.8928V25.6758Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.943359375 35.861328125"
          className={className}
        >
          <path
            d="              M4.4847 27.1932H19.4137V31.8422C18.5257 32.0602 17.8557 32.8672 17.8557 33.8242C17.8557 34.9592 18.7847 35.8612 19.9067 35.8612C21.0407 35.8612 21.9437 34.9592 21.9437 33.8242C21.9437 32.8812 21.3007 32.0742 20.4257 31.8422V11.5112C20.4257 9.6252 19.4687 8.6812 17.5817 8.6812H2.6247V4.0062C3.4727 3.7602 4.0877 2.9802 4.0877 2.0372C4.0877 0.9292 3.1857 0.0002 2.0507 0.0002C0.9297 0.0002 -0.0003 0.9292 -0.0003 2.0372C-0.0003 3.0212 0.6977 3.8422 1.6137 4.0472V24.3362C1.6137 26.2222 2.5837 27.1932 4.4847 27.1932ZM4.5117 26.1952C3.2537 26.1952 2.6247 25.5662 2.6247 24.3222V9.6662H17.5277C18.7717 9.6662 19.4137 10.2952 19.4137 11.5392V26.1952Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.833984375 35.95703125"
          className={className}
        >
          <path
            d="              M4.2517 27.1113H19.5777V32.0883C18.6617 32.2523 17.9517 33.0583 17.9517 34.0153C17.9517 35.0823 18.8397 35.9573 19.8927 35.9573C20.9727 35.9573 21.8337 35.0823 21.8337 34.0153C21.8337 33.0723 21.1507 32.2653 20.2477 32.1013V26.8653C20.2477 26.8383 20.2617 26.8103 20.2617 26.7693C20.2617 26.7423 20.2477 26.7153 20.2477 26.6873V11.4023C20.2477 9.7073 19.3867 8.8453 17.6917 8.8453H2.3657V3.8423C3.2407 3.6503 3.8967 2.8843 3.8967 1.9413C3.8967 0.8883 3.0217 0.0003 1.9417 0.0003C0.8887 0.0003 -0.0003 0.8883 -0.0003 1.9413C-0.0003 2.9393 0.7517 3.7593 1.6957 3.8833V9.0923C1.6957 9.1193 1.6817 9.1463 1.6817 9.1743C1.6817 9.2153 1.6957 9.2423 1.6957 9.2693V24.5543C1.6957 26.2503 2.5707 27.1113 4.2517 27.1113ZM4.3067 26.4413C3.0217 26.4413 2.3657 25.8123 2.3657 24.5133V9.5153H17.6367C18.9357 9.5153 19.5777 10.1443 19.5777 11.4433V26.4413Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}