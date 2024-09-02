import { IconProps } from "../../types"

export default function AtIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.203125 29.189453125"
          className={className}
        >
          <path
            d="              M-0.0003 14.6013C-0.0003 23.4203 6.2067 29.1893 15.3947 29.1893C17.5687 29.1893 18.8127 29.0523 19.6187 28.7243C20.3847 28.4103 20.7267 27.9593 20.7267 27.1383C20.7267 26.2223 20.1937 25.6073 19.0037 25.6073C18.6617 25.6073 18.3747 25.6343 18.0467 25.6483C17.4457 25.7163 16.8297 25.7853 15.8867 25.7853C8.5317 25.7853 3.8417 21.4373 3.8417 14.6703C3.8417 7.9293 8.4217 3.4043 15.0257 3.4043C21.2737 3.4043 25.4027 7.3693 25.4027 13.6853C25.4027 16.5153 24.5277 18.3883 23.1467 18.3883C22.2307 18.3883 21.7247 17.6643 21.7247 16.3923V9.8573C21.7247 8.3943 20.9317 7.5883 19.4827 7.5883C18.0607 7.5883 17.2677 8.3943 17.2677 9.8573V10.0353H16.8987C16.2147 8.4493 14.7517 7.5883 12.8517 7.5883C9.4477 7.5883 7.1777 10.3773 7.1777 14.6293C7.1777 19.0453 9.5707 21.9983 13.2067 21.9983C15.2027 21.9983 16.4887 21.0953 17.1987 19.3593H17.5407C18.1157 21.0133 19.7417 21.9573 22.0117 21.9573C26.4957 21.9573 29.2027 18.5393 29.2027 13.1253C29.2027 5.2913 23.4607 0.0003 15.0257 0.0003C6.1527 0.0003 -0.0003 5.9473 -0.0003 14.6013ZM14.5057 18.1563C13.0567 18.1563 12.1957 16.9123 12.1957 14.8063C12.1957 12.6873 13.0707 11.4163 14.5057 11.4163C15.9417 11.4163 16.8297 12.6873 16.8297 14.8063C16.8297 16.9123 15.9547 18.1563 14.5057 18.1563Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.779296875 29.134765625"
          className={className}
        >
          <path
            d="              M-0.0003 14.6017C-0.0003 23.5157 6.1527 29.1347 14.9437 29.1347C17.1577 29.1347 18.8667 28.9027 19.9337 28.5337C20.7947 28.2187 21.1227 27.7537 21.1227 27.0837C21.1227 26.3727 20.6577 25.8667 19.7967 25.8667C19.5507 25.8667 19.3047 25.8947 19.0037 25.9497C17.8687 26.1817 16.8437 26.3597 15.4077 26.3597C7.9847 26.3597 3.1037 21.9297 3.1037 14.6837C3.1037 7.6157 7.7927 2.7617 14.7107 2.7617C21.0407 2.7617 25.7847 6.7267 25.7847 13.4397C25.7847 16.9117 24.6507 19.2497 22.8317 19.2497C21.6287 19.2497 20.9457 18.4437 20.9457 17.0627V9.1737C20.9457 8.0667 20.3437 7.4377 19.2777 7.4377C18.2247 7.4377 17.6097 8.0667 17.6097 9.1737V10.0347H17.3637C16.6797 8.3947 15.0937 7.4377 13.1247 7.4377C9.6527 7.4377 7.2737 10.3497 7.2737 14.6427C7.2737 19.0317 9.7067 22.0387 13.3297 22.0387C15.3807 22.0387 16.8437 20.9997 17.5957 19.1677H17.8277C18.2517 20.9587 19.8787 22.0117 22.0937 22.0117C26.2497 22.0117 28.7797 18.4437 28.7797 13.1117C28.7797 5.2227 22.9827 -0.0003 14.7387 -0.0003C6.0567 -0.0003 -0.0003 5.8787 -0.0003 14.6017ZM14.1637 19.0317C12.2087 19.0317 11.0057 17.3907 11.0057 14.7247C11.0057 12.0587 12.2227 10.4047 14.1777 10.4047C16.1467 10.4047 17.3767 12.0447 17.3767 14.6837C17.3767 17.3637 16.1327 19.0317 14.1637 19.0317Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.01171875 29.17578125"
          className={className}
        >
          <path
            d="              M-0.0003 14.602C-0.0003 23.475 6.1797 29.176 15.1757 29.176C17.3767 29.176 18.8397 28.984 19.7697 28.643C20.5757 28.328 20.9177 27.863 20.9177 27.125C20.9177 26.305 20.4117 25.744 19.3727 25.744C19.0857 25.744 18.8127 25.758 18.4977 25.799C17.6507 25.949 16.8297 26.059 15.6547 26.059C8.2717 26.059 3.4997 21.67 3.4997 14.684C3.4997 7.779 8.1207 3.103 14.8747 3.103C21.1637 3.103 25.5797 7.068 25.5797 13.576C25.5797 16.707 24.5957 18.799 22.9957 18.799C21.9437 18.799 21.3557 18.033 21.3557 16.721V9.543C21.3557 8.244 20.6577 7.52 19.3867 7.52C18.1427 7.52 17.4317 8.244 17.4317 9.543V10.035H17.1167C16.4337 8.436 14.9157 7.52 12.9747 7.52C9.5427 7.52 7.2187 10.363 7.2187 14.643C7.2187 19.045 9.6387 22.025 13.2617 22.025C15.2847 22.025 16.6527 21.055 17.3767 19.277H17.6777C18.1837 20.986 19.8107 21.984 22.0527 21.984C26.3727 21.984 29.0117 18.498 29.0117 13.111C29.0117 5.264 23.2287 0 14.8887 0C6.1117 0 -0.0003 5.92 -0.0003 14.602ZM14.3417 18.58C12.6597 18.58 11.6347 17.145 11.6347 14.766C11.6347 12.387 12.6737 10.937 14.3557 10.937C16.0367 10.937 17.0897 12.387 17.0897 14.752C17.0897 17.131 16.0367 18.58 14.3417 18.58Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.287109375 29.0390625"
          className={className}
        >
          <path
            d="              M-0.0003 14.5058C-0.0003 23.3788 6.0157 29.0388 14.3827 29.0388C16.7347 29.0388 18.8397 28.7658 20.0977 28.3558C20.7947 28.1368 21.0407 27.7808 21.0407 27.3848C21.0407 26.9748 20.7407 26.6738 20.3297 26.6738C20.1527 26.6738 19.9337 26.7418 19.6467 26.7968C18.1567 27.1388 16.6247 27.3848 14.6697 27.3848C7.0277 27.3848 1.7907 22.4628 1.7907 14.5608C1.7907 7.0138 6.9317 1.6268 14.3557 1.6268C21.2327 1.6268 26.6187 6.0018 26.6187 13.2068C26.6187 17.6638 25.1287 20.5078 22.6547 20.5078C20.9457 20.5078 19.9477 19.3868 19.9477 17.5138V8.2028C19.9477 7.6428 19.6187 7.2868 19.0997 7.2868C18.5667 7.2868 18.2387 7.6428 18.2387 8.2028V10.3088H18.1427C17.4587 8.4628 15.6957 7.2868 13.5487 7.2868C10.0077 7.2868 7.5467 10.2948 7.5467 14.6558C7.5467 19.0038 9.9937 22.0118 13.5897 22.0118C15.7907 22.0118 17.4317 20.8218 18.2517 18.6898H18.3477C18.6487 20.7808 20.2347 22.0388 22.4217 22.0388C26.0727 22.0388 28.2867 18.4848 28.2867 13.1528C28.2867 5.2498 22.4907 -0.0002 14.3827 -0.0002C5.9607 -0.0002 -0.0003 5.8788 -0.0003 14.5058ZM13.8357 20.3578C11.1697 20.3578 9.4197 18.0878 9.4197 14.6428C9.4197 11.2248 11.1977 8.9138 13.8357 8.9138C16.5297 8.9138 18.2247 11.0738 18.2247 14.5198C18.2247 18.0608 16.4887 20.3578 13.8357 20.3578Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.505859375 29.107421875"
          className={className}
        >
          <path
            d="              M-0.0003 14.6147C-0.0003 23.5977 6.1247 29.1077 14.6567 29.1077C16.8987 29.1077 18.9077 28.8207 20.1527 28.4097C21.0547 28.1097 21.3687 27.6307 21.3687 27.0707C21.3687 26.4827 20.9457 26.0587 20.3167 26.0587C20.1247 26.0587 19.8927 26.0857 19.6187 26.1407C18.1427 26.4827 16.8577 26.7287 15.1077 26.7287C7.6427 26.7287 2.6247 22.2437 2.6247 14.6977C2.6247 7.4237 7.3967 2.3647 14.5197 2.3647C20.9047 2.3647 26.0447 6.3297 26.0447 13.2887C26.0447 17.1857 24.7327 19.8107 22.6407 19.8107C21.2457 19.8107 20.4527 18.9627 20.4527 17.5137V8.7367C20.4527 7.8747 19.9747 7.3557 19.1547 7.3557C18.3337 7.3557 17.8417 7.8747 17.8417 8.7367V10.0487H17.6637C16.9807 8.3807 15.3127 7.3557 13.3027 7.3557C9.7887 7.3557 7.3277 10.3357 7.3277 14.6567C7.3277 19.0317 9.8027 22.0667 13.4117 22.0667C15.5037 22.0667 17.0757 20.9587 17.8557 19.0587H18.0197C18.3477 20.9317 19.9607 22.0667 22.1487 22.0667C26.0857 22.0667 28.5057 18.3887 28.5057 13.1117C28.5057 5.1817 22.6817 -0.0003 14.5467 -0.0003C5.9887 -0.0003 -0.0003 5.8377 -0.0003 14.6147ZM13.9457 19.6057C11.6757 19.6057 10.2537 17.7047 10.2537 14.6837C10.2537 11.6757 11.6897 9.7757 13.9587 9.7757C16.2697 9.7757 17.7327 11.6487 17.7327 14.6287C17.7327 17.6637 16.2557 19.6057 13.9457 19.6057Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.35546875 29.09375"
          className={className}
        >
          <path
            d="              M-0.0003 14.6148C-0.0003 23.6248 6.0977 29.0938 14.4917 29.0938C16.7617 29.0938 18.9217 28.7798 20.2617 28.3418C21.2047 28.0408 21.5057 27.5488 21.5057 27.0428C21.5057 26.5368 21.1097 26.1548 20.6037 26.1548C20.4397 26.1548 20.2207 26.1818 19.9607 26.2498C18.2927 26.6598 16.8577 26.9338 14.9297 26.9338C7.4507 26.9338 2.3517 22.4218 2.3517 14.6978C2.3517 7.3008 7.1637 2.1468 14.4097 2.1468C20.8227 2.1468 26.1817 6.0978 26.1817 13.1938C26.1817 17.3358 24.7867 20.1248 22.5317 20.1248C21.0277 20.1248 20.1797 19.2498 20.1797 17.7598V8.4898C20.1797 7.7518 19.7697 7.3008 19.0727 7.3008C18.3887 7.3008 17.9647 7.7518 17.9647 8.4898V10.0488H17.8417C17.1447 8.3668 15.4357 7.3008 13.3987 7.3008C9.8577 7.3008 7.3687 10.3227 7.3687 14.6558C7.3687 19.0308 9.8437 22.0798 13.4527 22.0798C15.5727 22.0798 17.2127 20.9318 18.0057 18.9898H18.1287C18.3887 20.9177 20.0157 22.0938 22.1757 22.0938C25.9907 22.0938 28.3557 18.3477 28.3557 13.0978C28.3557 5.1548 22.5177 -0.0003 14.4377 -0.0003C5.9477 -0.0003 -0.0003 5.8107 -0.0003 14.6148ZM13.8227 19.9198C11.3747 19.9198 9.8167 17.8828 9.8167 14.6428C9.8167 11.4568 11.3887 9.4198 13.8357 9.4198C16.3517 9.4198 17.9377 11.4157 17.9377 14.5878C17.9377 17.8278 16.3107 19.9198 13.8227 19.9198Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.62890625 29.12109375"
          className={className}
        >
          <path
            d="              M-0.0003 14.6017C-0.0003 23.5567 6.1387 29.1207 14.7797 29.1207C17.0077 29.1207 18.8807 28.8617 20.0567 28.4647C20.9457 28.1507 21.2597 27.6717 21.2597 27.0707C21.2597 26.4417 20.8227 25.9627 20.0837 25.9627C19.8787 25.9627 19.6327 26.0037 19.3457 26.0587C18.0197 26.3457 16.8437 26.5647 15.2307 26.5647C7.7927 26.5647 2.8297 22.1077 2.8297 14.6837C2.8297 7.4917 7.5607 2.5297 14.6017 2.5297C20.9587 2.5297 25.9357 6.4937 25.9357 13.3437C25.9357 17.0627 24.7047 19.5647 22.7227 19.5647C21.4097 19.5647 20.6717 18.7307 20.6717 17.3087V8.9137C20.6717 7.9567 20.1387 7.3827 19.2087 7.3827C18.2797 7.3827 17.7457 7.9567 17.7457 8.9137V10.0347H17.5407C16.8437 8.3807 15.2167 7.3827 13.2207 7.3827C9.7347 7.3827 7.3007 10.3357 7.3007 14.6427C7.3007 19.0177 9.7617 22.0527 13.3707 22.0527C15.4487 22.0527 16.9807 20.9727 17.7457 19.0997H17.9377C18.3067 20.9317 19.9197 22.0387 22.1207 22.0387C26.1547 22.0387 28.6287 18.4027 28.6287 13.0977C28.6287 5.1957 22.8187 -0.0003 14.6287 -0.0003C6.0157 -0.0003 -0.0003 5.8517 -0.0003 14.6017ZM14.0407 19.3457C11.9077 19.3457 10.5817 17.5687 10.5817 14.6837C10.5817 11.8397 11.9217 10.0487 14.0547 10.0487C16.2147 10.0487 17.5817 11.8127 17.5817 14.6427C17.5817 17.5277 16.2007 19.3457 14.0407 19.3457Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.205078125 28.970703125"
          className={className}
        >
          <path
            d="              M-0.0003 14.3831C-0.0003 23.0781 5.8927 28.9711 14.2187 28.9711C16.7067 28.9711 18.7437 28.7521 19.8787 28.3961C20.2617 28.2731 20.4257 28.0821 20.4257 27.8221C20.4257 27.5621 20.2477 27.3851 19.9747 27.3851C19.7697 27.3851 19.5367 27.4801 19.2497 27.5351C17.9917 27.7951 16.3237 28.0001 14.3147 28.0001C6.4807 28.0001 1.0527 22.5171 1.0527 14.3961C1.0527 6.6311 6.6037 0.9711 14.2867 0.9711C21.7657 0.9711 27.1937 5.8921 27.1937 13.2341C27.1937 18.1151 25.5797 21.0411 22.8317 21.0411C20.8357 21.0411 19.6327 19.5921 19.6327 17.1991V7.8481C19.6327 7.5061 19.4417 7.2871 19.1267 7.2871C18.8127 7.2871 18.6207 7.5061 18.6207 7.8481V10.6781H18.5387C17.8967 8.5991 16.0367 7.2871 13.7407 7.2871C10.1987 7.2871 7.7797 10.2811 7.7797 14.6561C7.7797 18.9761 10.1987 21.9301 13.7537 21.9301C16.0777 21.9301 17.7187 20.6851 18.5667 18.3201H18.6487C18.9907 20.6171 20.5347 21.9711 22.7637 21.9711C26.1817 21.9711 28.2047 18.6621 28.2047 13.2211C28.2047 5.3731 22.4767 0.0001 14.3147 0.0001C5.9887 0.0001 -0.0003 5.9881 -0.0003 14.3831ZM13.8357 20.9451C10.9097 20.9451 8.8727 18.3751 8.8727 14.6561C8.8727 10.9511 10.9507 8.2581 13.8357 8.2581C16.7757 8.2581 18.6077 10.6371 18.6077 14.4371C18.6077 18.3751 16.7207 20.9451 13.8357 20.9451Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.1640625 28.943359375"
          className={className}
        >
          <path
            d="              M-0.0003 14.3281C-0.0003 22.9141 5.8237 28.9431 14.1507 28.9431C16.6937 28.9431 18.6897 28.7651 19.7557 28.4101C19.9887 28.3421 20.1117 28.2461 20.1117 28.0681C20.1117 27.8771 20.0017 27.7541 19.7967 27.7541C19.5777 27.7541 19.3317 27.8631 19.0447 27.9181C17.8967 28.1371 16.1597 28.3141 14.1367 28.3141C6.2067 28.3141 0.6697 22.5451 0.6697 14.3141C0.6697 6.4391 6.4397 0.6421 14.2597 0.6421C22.0387 0.6421 27.4937 5.8381 27.4937 13.2481C27.4937 18.3611 25.8127 21.3141 22.9137 21.3141C20.7817 21.3141 19.4827 19.6871 19.4827 17.0491V7.6701C19.4827 7.4511 19.3457 7.3011 19.1407 7.3011C18.9487 7.3011 18.8127 7.4511 18.8127 7.6701V10.8691H18.7437C18.1157 8.6811 16.2147 7.3011 13.8497 7.3011C10.3087 7.3011 7.9027 10.2811 7.9027 14.6561C7.9027 18.9631 10.3087 21.9021 13.8497 21.9021C16.2287 21.9021 17.8687 20.6171 18.7437 18.1291H18.8127C19.1547 20.5351 20.6857 21.9571 22.9277 21.9571C26.2367 21.9571 28.1637 18.7711 28.1637 13.2621C28.1637 5.4551 22.4627 0.0001 14.2737 0.0001C6.0017 0.0001 -0.0003 6.0431 -0.0003 14.3281ZM13.8357 21.2601C10.7737 21.2601 8.5997 18.5251 8.5997 14.6561C8.5997 10.8141 10.8277 7.9301 13.8357 7.9301C16.8987 7.9301 18.8127 10.4181 18.8127 14.4101C18.8127 18.5531 16.8297 21.2601 13.8357 21.2601Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}