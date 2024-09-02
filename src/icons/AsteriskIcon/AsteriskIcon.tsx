import { IconProps } from "../../types"

export default function AsteriskIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.5234375 29.50390625"
          className={className}
        >
          <path
            d="              M13.2617 29.504C15.3537 29.504 16.5297 28.369 16.4887 26.346C16.4887 26.141 16.4747 25.812 16.4197 25.416L15.6677 18.799L20.4667 22.435C21.3967 23.16 22.4087 23.543 23.4197 23.543C25.2247 23.543 26.5237 22.189 26.5237 20.357C26.5237 18.894 25.7307 17.746 24.3357 17.185L18.4157 14.752L24.3357 12.318C25.7307 11.758 26.5237 10.609 26.5237 9.146C26.5237 7.314 25.2247 5.961 23.4197 5.961C22.4087 5.961 21.3967 6.344 20.4667 7.068L15.6677 10.705L16.4197 4.088C16.4747 3.691 16.4887 3.363 16.4887 3.158C16.5297 1.135 15.3537 0 13.2617 0C11.1697 0 10.0077 1.135 10.0347 3.158C10.0347 3.363 10.0487 3.691 10.1037 4.088L10.8557 10.705L6.0707 7.068C5.1407 6.344 4.1157 5.961 3.1037 5.961C1.3127 5.961 -0.0003 7.314 -0.0003 9.146C-0.0003 10.609 0.7927 11.758 2.1877 12.318L8.1077 14.752L2.1877 17.185C0.7927 17.746 -0.0003 18.894 -0.0003 20.357C-0.0003 22.189 1.3127 23.543 3.1037 23.543C4.1157 23.543 5.1407 23.16 6.0707 22.435L10.8557 18.799L10.1037 25.416C10.0487 25.812 10.0347 26.141 10.0347 26.346C10.0077 28.369 11.1697 29.504 13.2617 29.504Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.443359375 28.861328125"
          className={className}
        >
          <path
            d="              M12.7287 28.8609C14.2187 28.8609 15.0667 28.0269 15.0527 26.5509C15.0527 26.3589 15.0257 26.0999 15.0117 25.8129L14.5337 17.4999L21.1917 21.8889C21.8337 22.3539 22.5037 22.5719 23.1877 22.5719C24.4997 22.5719 25.4437 21.6019 25.4437 20.2619C25.4437 19.2089 24.9237 18.4569 23.8847 17.9919L16.4607 14.4239L23.8847 10.8689C24.9237 10.4039 25.4437 9.6389 25.4437 8.5999C25.4437 7.2739 24.4997 6.2749 23.1877 6.2749C22.5037 6.2749 21.8337 6.5079 21.1917 6.9729L14.5337 11.3609L15.0117 3.0349C15.0257 2.7479 15.0527 2.5019 15.0527 2.3109C15.0667 0.8339 14.2187 -0.0001 12.7287 -0.0001C11.2387 -0.0001 10.3907 0.8339 10.4047 2.3109C10.4047 2.5019 10.4177 2.7479 10.4457 3.0349L10.9237 11.3609L4.2517 6.9729C3.6097 6.5079 2.9397 6.2749 2.2557 6.2749C0.9567 6.2749 -0.0003 7.2599 -0.0003 8.5999C-0.0003 9.6389 0.5197 10.4039 1.5587 10.8689L8.9957 14.4239L1.5587 17.9919C0.5197 18.4569 -0.0003 19.2089 -0.0003 20.2619C-0.0003 21.6019 0.9567 22.5719 2.2557 22.5719C2.9397 22.5719 3.6097 22.3539 4.2517 21.8889L10.9237 17.4999L10.4457 25.8129C10.4177 26.0999 10.4047 26.3589 10.4047 26.5509C10.3907 28.0269 11.2387 28.8609 12.7287 28.8609Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.017578125 29.203125"
          className={className}
        >
          <path
            d="              M13.0157 29.2027C14.8207 29.2027 15.8317 28.2047 15.8047 26.4547C15.8047 26.2497 15.7907 25.9627 15.7497 25.6077L15.1347 18.1837L20.8087 22.1757C21.6017 22.7777 22.4497 23.0917 23.3107 23.0917C24.8827 23.0917 26.0177 21.9157 26.0177 20.3167C26.0177 19.0587 25.3477 18.0877 24.1177 17.5687L17.4867 14.6017L24.1177 11.6347C25.3477 11.1287 26.0177 10.1587 26.0177 8.9007C26.0177 7.3007 24.8827 6.1117 23.3107 6.1117C22.4497 6.1117 21.6017 6.4257 20.8087 7.0277L15.1347 11.0197L15.7497 3.5957C15.7907 3.2537 15.8047 2.9667 15.8047 2.7617C15.8317 0.9977 14.8207 -0.0003 13.0157 -0.0003C11.1977 -0.0003 10.1857 0.9977 10.2127 2.7617C10.2127 2.9667 10.2267 3.2537 10.2677 3.5957L10.8827 11.0197L5.2087 7.0277C4.4157 6.4257 3.5547 6.1117 2.7067 6.1117C1.1347 6.1117 -0.0003 7.3007 -0.0003 8.8867C-0.0003 10.1587 0.6697 11.1287 1.8867 11.6347L8.5317 14.6017L1.8867 17.5687C0.6697 18.0877 -0.0003 19.0587 -0.0003 20.3167C-0.0003 21.9157 1.1347 23.0917 2.7067 23.0917C3.5547 23.0917 4.4157 22.7777 5.2087 22.1757L10.8827 18.1837L10.2677 25.6077C10.2267 25.9627 10.2127 26.2497 10.2127 26.4547C10.1857 28.2047 11.1977 29.2027 13.0157 29.2027Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.486328125 28.341796875"
          className={className}
        >
          <path
            d="              M12.2637 28.3422C12.9197 28.3422 13.3167 27.9312 13.3167 27.2482C13.3167 27.1252 13.3027 26.9882 13.3027 26.8652L13.1797 15.7642L22.6677 21.3832C22.9277 21.5332 23.1597 21.6012 23.4337 21.6012C24.0487 21.6012 24.4867 21.1502 24.4867 20.5352C24.4867 20.0432 24.3087 19.7692 23.8167 19.5102L14.0277 14.1782L23.8167 8.8322C24.3087 8.5722 24.4867 8.2852 24.4867 7.8342C24.4867 7.2192 24.0487 6.7402 23.4337 6.7402C23.1597 6.7402 22.9277 6.8082 22.6677 6.9592L13.1797 12.5782L13.3027 1.4762C13.3027 1.3532 13.3167 1.2172 13.3167 1.0942C13.3167 0.4102 12.9197 0.0002 12.2637 0.0002C11.6077 0.0002 11.2107 0.4102 11.2107 1.0942C11.2107 1.2172 11.2247 1.3532 11.2247 1.4762L11.3477 12.5782L1.8317 6.9592C1.5587 6.8082 1.3267 6.7402 1.0527 6.7402C0.4517 6.7402 -0.0003 7.1912 -0.0003 7.8062C-0.0003 8.2852 0.1917 8.5582 0.6977 8.8322L10.4867 14.1782L0.6977 19.5102C0.1917 19.7832 -0.0003 20.0562 -0.0003 20.5352C-0.0003 21.1502 0.4517 21.6012 1.0527 21.6012C1.3267 21.6012 1.5587 21.5332 1.8317 21.3832L11.3477 15.7642L11.2247 26.8652C11.2247 26.9882 11.2107 27.1252 11.2107 27.2482C11.2107 27.9312 11.6077 28.3422 12.2637 28.3422Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.74609375 28.451171875"
          className={className}
        >
          <path
            d="              M12.3867 28.4508C13.4807 28.4508 14.1227 27.8088 14.1227 26.6878C14.1227 26.5098 14.1097 26.2908 14.0957 26.0858L13.8087 16.6658L21.6697 21.5328C22.1077 21.8338 22.5587 21.9708 23.0367 21.9708C24.0347 21.9708 24.7457 21.2188 24.7457 20.2068C24.7457 19.4138 24.4047 18.9078 23.5977 18.5118L15.2027 14.2328L23.5977 9.9398C24.4047 9.5428 24.7457 9.0368 24.7457 8.2578C24.7457 7.2328 24.0347 6.4938 23.0367 6.4938C22.5587 6.4938 22.1077 6.6308 21.6697 6.9318L13.8087 11.7848L14.0957 2.3788C14.1097 2.1598 14.1227 1.9548 14.1227 1.7768C14.1227 0.6558 13.4807 -0.0002 12.3867 -0.0002C11.2797 -0.0002 10.6367 0.6558 10.6367 1.7768C10.6367 1.9548 10.6507 2.1598 10.6637 2.3788L10.9517 11.7848L3.0897 6.9318C2.6387 6.6308 2.2017 6.4938 1.7227 6.4938C0.7247 6.4938 -0.0003 7.2328 -0.0003 8.2578C-0.0003 9.0368 0.3417 9.5428 1.1617 9.9398L9.5567 14.2328L1.1617 18.5118C0.3417 18.9078 -0.0003 19.4278 -0.0003 20.2068C-0.0003 21.2188 0.7247 21.9708 1.7227 21.9708C2.2017 21.9708 2.6387 21.8338 3.0897 21.5328L10.9517 16.6658L10.6637 26.0858C10.6507 26.2908 10.6367 26.5098 10.6367 26.6878C10.6367 27.8088 11.2797 28.4508 12.3867 28.4508Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.36328125 28.21875"
          className={className}
        >
          <path
            d="              M12.1957 28.2188C13.0837 28.2188 13.6037 27.6718 13.6037 26.7418C13.6037 26.5778 13.5897 26.3868 13.5897 26.2228L13.3987 16.2008L21.9297 21.3278C22.2717 21.5328 22.5857 21.6148 22.9417 21.6148C23.7617 21.6148 24.3637 21.0138 24.3637 20.1658C24.3637 19.5238 24.1177 19.1678 23.4337 18.7988L14.5057 14.1098L23.4337 9.4058C24.1177 9.0508 24.3637 8.6818 24.3637 8.0528C24.3637 7.2188 23.7757 6.6038 22.9417 6.6038C22.5857 6.6038 22.2717 6.6858 21.9297 6.8908L13.3987 12.0178L13.5897 1.9958C13.5897 1.8188 13.6037 1.6408 13.6037 1.4628C13.6037 0.5328 13.0837 -0.0002 12.1957 -0.0002C11.3067 -0.0002 10.7737 0.5328 10.7737 1.4628C10.7737 1.6408 10.7867 1.8188 10.7867 1.9958L10.9787 12.0178L2.4337 6.8908C2.0917 6.6858 1.7777 6.6038 1.4087 6.6038C0.5877 6.6038 -0.0003 7.2048 -0.0003 8.0528C-0.0003 8.6818 0.2457 9.0508 0.9437 9.4058L9.8707 14.1098L0.9437 18.7988C0.2457 19.1678 -0.0003 19.5238 -0.0003 20.1658C-0.0003 21.0138 0.5877 21.6148 1.4087 21.6148C1.7777 21.6148 2.0917 21.5328 2.4337 21.3278L10.9787 16.2008L10.7867 26.2228C10.7867 26.3868 10.7737 26.5778 10.7737 26.7418C10.7737 27.6718 11.3067 28.2188 12.1957 28.2188Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.046875 28.62890625"
          className={className}
        >
          <path
            d="              M12.5367 28.6289C13.7947 28.6289 14.5337 27.8909 14.5197 26.6189C14.5197 26.4419 14.5057 26.2089 14.4927 25.9629L14.1227 17.0219L21.4647 21.6699C21.9847 22.0529 22.5317 22.2309 23.1057 22.2309C24.2267 22.2309 25.0467 21.3829 25.0467 20.2209C25.0467 19.3179 24.6227 18.7029 23.7207 18.2789L15.7497 14.3149L23.7207 10.3359C24.6367 9.9119 25.0467 9.2969 25.0467 8.3949C25.0467 7.2459 24.2267 6.3989 23.1057 6.3989C22.5317 6.3989 21.9847 6.5759 21.4647 6.9449L14.1227 11.5939L14.4927 2.6519C14.5057 2.4059 14.5197 2.1879 14.5197 1.9959C14.5337 0.7249 13.7947 -0.0001 12.5367 -0.0001C11.2657 -0.0001 10.5277 0.7249 10.5407 1.9959C10.5407 2.1879 10.5547 2.4059 10.5687 2.6519L10.9377 11.5939L3.5957 6.9449C3.0627 6.5759 2.5157 6.3989 1.9547 6.3989C0.8207 6.3989 -0.0003 7.2329 -0.0003 8.3949C-0.0003 9.2969 0.4237 9.9119 1.3397 10.3359L9.3107 14.3149L1.3397 18.2789C0.4237 18.7029 -0.0003 19.3319 -0.0003 20.2209C-0.0003 21.3829 0.8207 22.2309 1.9547 22.2309C2.5157 22.2309 3.0627 22.0529 3.5957 21.6699L10.9377 17.0219L10.5687 25.9629C10.5547 26.2089 10.5407 26.4419 10.5407 26.6189C10.5277 27.8909 11.2657 28.6289 12.5367 28.6289Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.6640625 28.478515625"
          className={className}
        >
          <path
            d="              M12.3597 28.4785C12.7017 28.4785 12.9337 28.2325 12.9337 27.8905C12.9337 27.8225 12.9337 27.7535 12.9337 27.6995L12.8927 15.1755L23.6387 21.4235C23.8027 21.5335 23.9257 21.5605 24.0897 21.5605C24.4177 21.5605 24.6637 21.3005 24.6637 20.9865C24.6637 20.7125 24.5547 20.5625 24.3227 20.4255L13.3987 14.2325L24.3227 8.0395C24.5687 7.9025 24.6637 7.7385 24.6637 7.5055C24.6637 7.1915 24.4317 6.9045 24.0897 6.9045C23.9257 6.9045 23.8027 6.9455 23.6387 7.0405L12.8927 13.3025L12.9337 0.7795C12.9337 0.7105 12.9337 0.6425 12.9337 0.5745C12.9337 0.2325 12.7017 -0.0005 12.3597 -0.0005C12.0177 -0.0005 11.7847 0.2325 11.7847 0.5745C11.7847 0.6425 11.7847 0.7105 11.7847 0.7795L11.8267 13.3025L1.0257 7.0405C0.8617 6.9455 0.7387 6.9045 0.5747 6.9045C0.2457 6.9045 -0.0003 7.1645 -0.0003 7.4785C-0.0003 7.7385 0.1097 7.8885 0.3827 8.0395L11.2927 14.2325L0.3827 20.4255C0.1097 20.5765 -0.0003 20.7265 -0.0003 20.9865C-0.0003 21.3005 0.2457 21.5605 0.5747 21.5605C0.7387 21.5605 0.8617 21.5335 1.0257 21.4235L11.8267 15.1755L11.7847 27.6995C11.7847 27.7535 11.7847 27.8225 11.7847 27.8905C11.7847 28.2325 12.0177 28.4785 12.3597 28.4785Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.74609375 28.546875"
          className={className}
        >
          <path
            d="              M12.4137 28.5465C12.5917 28.5465 12.7427 28.3965 12.7427 28.2185C12.7427 28.1915 12.7427 28.1505 12.7427 28.1235V14.8745L24.1447 21.4645C24.2537 21.5335 24.3227 21.5465 24.4177 21.5465C24.6097 21.5465 24.7457 21.3965 24.7457 21.2325C24.7457 21.0685 24.6917 20.9725 24.5687 20.9045L13.0837 14.2735L24.5687 7.6425C24.7047 7.5745 24.7457 7.4515 24.7457 7.3415C24.7457 7.1775 24.6227 6.9995 24.4177 6.9995C24.3227 6.9995 24.2537 7.0135 24.1447 7.0815L12.7427 13.6715V0.4235C12.7427 0.3825 12.7427 0.3555 12.7427 0.3285C12.7427 0.1365 12.5917 -0.0005 12.4137 -0.0005C12.2367 -0.0005 12.0857 0.1365 12.0857 0.3285C12.0857 0.3555 12.0857 0.3825 12.0857 0.4235L12.0727 13.6715L0.6157 7.0815C0.4927 7.0135 0.4237 6.9995 0.3277 6.9995C0.1507 6.9995 -0.0003 7.1505 -0.0003 7.3145C-0.0003 7.4515 0.0687 7.5605 0.2187 7.6425L11.7027 14.2735L0.2187 20.9045C0.0687 20.9865 -0.0003 21.0815 -0.0003 21.2325C-0.0003 21.3965 0.1507 21.5465 0.3277 21.5465C0.4237 21.5465 0.4927 21.5335 0.6157 21.4645L12.0727 14.8745L12.0857 28.1235C12.0857 28.1505 12.0857 28.1915 12.0857 28.2185C12.0857 28.3965 12.2367 28.5465 12.4137 28.5465Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}