import { IconProps } from "../../types"

export default function FanSlashFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.212890625 31.568359375"
          className={className}
        >
          <path
            d="              M10.4177 0.0001C8.8317 0.0001 7.2867 0.4781 5.9337 1.2581L15.1487 10.4861V4.8811C15.1487 1.8051 13.4117 0.0001 10.4177 0.0001ZM30.4607 22.6411C30.4607 18.6071 27.1527 16.1331 20.8227 15.1621H26.6877C29.7637 15.1621 31.2127 13.4121 31.2127 10.4181C31.2127 5.2911 27.2477 1.1071 22.6407 1.1071C18.6487 1.1071 16.1877 4.3341 15.2027 10.5141L19.8517 15.1621L29.9827 25.2661C30.2837 24.4181 30.4607 23.5431 30.4607 22.6411ZM28.1917 29.9691C28.6837 30.4331 29.4907 30.4471 29.9547 29.9551C30.4197 29.4761 30.4477 28.6831 29.9547 28.2051L3.3767 1.6271C2.8847 1.1481 2.0777 1.1481 1.5997 1.6271C1.1207 2.1051 1.1207 2.9261 1.5997 3.3911ZM8.9277 30.4611C12.9197 30.4611 15.3807 27.2481 16.3657 21.0681L11.7027 16.4201L1.5857 6.3161C1.2847 7.1501 1.1077 8.0391 1.1077 8.9281C1.1077 12.9741 4.4157 15.4491 10.7457 16.4201H4.8807C1.8047 16.4201 -0.0003 18.1701 -0.0003 21.1641C-0.0003 25.9631 4.3207 30.4611 8.9277 30.4611ZM21.1507 31.5681C22.7367 31.5681 24.2677 31.1031 25.6347 30.3101L16.4197 21.0961V26.6871C16.4197 29.7771 18.1567 31.5681 21.1507 31.5681Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.310546875 30.48828125"
          className={className}
        >
          <path
            d="              M10.1717 0.0002C8.5587 0.0002 6.9587 0.5192 5.5777 1.3672L14.4377 10.2262V4.3882C14.4377 1.5862 12.8927 0.0002 10.1717 0.0002ZM29.4497 22.1072C29.4497 18.1422 25.7987 15.9002 19.2087 14.4242H26.0997C28.9027 14.4242 30.3107 12.8792 30.3107 10.1722C30.2967 5.4142 26.3457 1.0392 22.1077 1.0392C18.3067 1.0392 16.0647 4.3612 14.6837 10.4722L18.6487 14.4242L28.9027 24.6772C29.2437 23.8572 29.4497 22.9822 29.4497 22.1072ZM27.3437 28.9842C27.7947 29.4222 28.5337 29.4222 28.9707 28.9702C29.4087 28.5192 29.4217 27.7952 28.9707 27.3442L3.1447 1.5312C2.6937 1.0802 1.9547 1.0662 1.4907 1.5312C1.0667 1.9552 1.0667 2.7202 1.4907 3.1442ZM8.3677 29.4352C12.1677 29.4352 14.3827 26.1272 15.8047 20.0292L11.9627 16.2012L1.5857 5.8382C1.2437 6.6442 1.0387 7.5062 1.0387 8.3812C1.0387 12.3452 4.6757 14.5882 11.2517 16.0512H4.3887C1.5727 16.0512 -0.0003 17.5952 -0.0003 20.3162C-0.0003 24.9102 4.1427 29.4352 8.3677 29.4352ZM20.3167 30.4882C21.9297 30.4882 23.5157 29.9822 24.9097 29.1352L16.0507 20.2752V26.0992C16.0507 28.9022 17.6097 30.4882 20.3167 30.4882Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.7890625 31.0625"
          className={className}
        >
          <path
            d="              M10.2947 0.0003C8.7087 0.0003 7.1367 0.4923 5.7557 1.3123L14.8207 10.3633V4.6483C14.8207 1.6953 13.1657 0.0003 10.2947 0.0003ZM29.9827 22.3943C29.9827 18.3753 26.4957 16.0093 20.0157 14.8063H26.4137C29.3537 14.8063 30.7887 13.1523 30.7887 10.2953C30.7757 5.3453 26.8247 1.0803 22.3807 1.0803C18.4847 1.0803 16.1327 4.3473 14.9567 10.5003L19.2907 14.8063L29.4767 24.9923C29.7907 24.1583 29.9827 23.2833 29.9827 22.3943ZM27.7947 29.5043C28.2597 29.9553 29.0387 29.9683 29.4907 29.4903C29.9417 29.0253 29.9547 28.2733 29.4907 27.7953L3.2677 1.5863C2.7887 1.1073 2.0237 1.1073 1.5447 1.5863C1.0937 2.0373 1.0937 2.8303 1.5447 3.2813ZM8.6677 29.9823C12.5647 29.9823 14.9157 26.7153 16.1057 20.5763L11.9087 16.3923L1.5857 6.0843C1.2717 6.9183 1.0797 7.7793 1.0797 8.6683C1.0797 12.6873 4.5527 15.0523 11.0337 16.2423H4.6487C1.6957 16.2423 -0.0003 17.8963 -0.0003 20.7543C-0.0003 25.4573 4.2387 29.9823 8.6677 29.9823ZM20.7677 31.0623C22.3537 31.0623 23.9117 30.5703 25.2927 29.7503L16.2427 20.7133V26.4143C16.2427 29.3533 17.8967 31.0623 20.7677 31.0623Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.875 28.916015625"
          className={className}
        >
          <path
            d="              M9.9257 0.0003C8.1207 0.0003 6.3297 0.6703 4.8677 1.7503L13.5077 10.3773V3.7053C13.5077 1.3403 12.2087 0.0003 9.9257 0.0003ZM26.3867 27.5763C26.7017 27.8903 27.2207 27.8903 27.5347 27.5623C27.8637 27.2343 27.8637 26.7283 27.5347 26.4143L2.5017 1.3673C2.1877 1.0523 1.6677 1.0393 1.3397 1.3673C1.0257 1.6813 1.0257 2.2153 1.3397 2.5153ZM21.1227 1.1623C17.5407 1.1623 15.4907 4.5253 14.1227 11.0063L16.6117 13.4943H25.2107C27.5767 13.4943 28.8747 12.1953 28.8747 9.9123C28.8747 5.5783 25.0337 1.1623 21.1227 1.1623ZM1.1757 7.7653C1.1757 11.5393 4.9497 13.5213 12.0037 15.1763L1.8867 5.0583C1.4497 5.9063 1.1757 6.8223 1.1757 7.7653ZM27.7267 21.1503C27.7267 17.3633 23.9397 15.3813 16.8437 13.7263L27.0297 23.9123C27.4667 23.0373 27.7267 22.0933 27.7267 21.1503ZM7.7657 27.7133C11.3207 27.7133 13.2887 24.4043 14.7797 17.9653L12.2227 15.4223H3.7047C1.2577 15.4223 -0.0003 16.6523 -0.0003 18.9903C-0.0003 23.3243 3.8417 27.7133 7.7657 27.7133ZM19.0037 28.9163C20.7817 28.9023 22.5727 28.2603 24.0077 27.1933L15.4217 18.5933V25.2113C15.4217 27.5763 16.7067 28.9163 19.0037 28.9163Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.736328125 29.8046875"
          className={className}
        >
          <path
            d="              M10.0353 0.0004C8.4083 0.0004 6.7673 0.5464 5.3593 1.4494L13.9863 10.0764V4.0744C13.9863 1.4624 12.5643 0.0004 10.0353 0.0004ZM28.8063 21.7794C28.8063 17.8964 24.9783 15.8044 18.3203 13.9724H25.7303C28.3553 13.9724 29.7363 12.5504 29.7363 10.0214C29.7223 5.4964 25.7713 0.9984 21.7793 0.9984C18.1153 0.9984 16.0093 4.3884 14.3693 10.4594L17.8823 13.9724H17.8963L28.2323 24.3084C28.6013 23.5024 28.8063 22.6404 28.8063 21.7794ZM26.8103 28.3694C27.2343 28.7934 27.9313 28.7794 28.3553 28.3554C28.7653 27.9184 28.7793 27.2344 28.3553 26.8104L3.0073 1.4624C2.5843 1.0394 1.8863 1.0394 1.4493 1.4624C1.0393 1.8734 1.0393 2.5974 1.4493 3.0074ZM8.0393 28.7934C11.7033 28.7934 13.7673 25.4164 15.4493 19.3864L12.0453 15.9824L1.5993 5.5374C1.2303 6.3304 1.0113 7.1774 1.0113 8.0254C1.0113 11.9214 4.8263 14.0004 11.4843 15.8324H4.0883C1.4353 15.8324 0.0003 17.2264 0.0003 19.7834C0.0133 24.2404 4.0333 28.7934 8.0393 28.7934ZM19.7973 29.8044C21.4233 29.7914 23.0503 29.2714 24.4593 28.3824L15.8453 19.7694V25.7304C15.8453 28.3414 17.2673 29.8044 19.7973 29.8044Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.408203125 29.421875"
          className={className}
        >
          <path
            d="              M9.9533 0C8.3123 0 6.6443 0.574 5.2363 1.49L13.7263 9.98V3.91C13.7263 1.394 12.3733 0 9.9533 0ZM28.4373 21.588C28.4373 17.746 24.5273 15.75 17.8283 13.713H25.5253C28.0413 13.713 29.4083 12.359 29.4083 9.926C29.3943 5.551 25.4433 0.971 21.5883 0.971C17.9923 0.971 15.9553 4.402 14.1773 10.445L17.4593 13.713L27.8363 24.103C28.2183 23.297 28.4373 22.436 28.4373 21.588ZM26.5093 28.014C26.9203 28.424 27.5903 28.41 28.0003 28C28.3963 27.59 28.4103 26.92 28.0003 26.51L2.9123 1.436C2.5023 1.025 1.8323 1.012 1.4083 1.436C1.0113 1.832 1.0113 2.516 1.4083 2.926ZM7.8343 28.424C11.4293 28.424 13.4123 25.02 15.2443 19.018L12.0863 15.859L1.5993 5.359C1.2163 6.152 0.9983 6.986 0.9983 7.834C0.9983 11.676 4.8943 13.672 11.5803 15.709H3.9103C1.3533 15.709 0.0003 17.021 0.0003 19.482C0.0133 23.871 3.9653 28.424 7.8343 28.424ZM19.4963 29.422C21.1363 29.408 22.7773 28.875 24.1853 27.959L15.7093 19.482V25.525C15.7093 28.041 17.0623 29.422 19.4963 29.422Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.982421875 30.10546875"
          className={className}
        >
          <path
            d="              M10.0897 -0.0002C8.4627 -0.0002 6.8497 0.5468 5.4417 1.4078L14.1777 10.1448V4.2108C14.1777 1.5178 12.7017 -0.0002 10.0897 -0.0002ZM29.0797 21.9298C29.0797 18.0058 25.3207 15.8458 18.6897 14.1778H25.8807C28.5747 14.1778 29.9827 12.7008 29.9827 10.0898C29.9687 5.4688 26.0177 1.0118 21.9157 1.0118C18.1837 1.0118 16.0237 4.3748 14.4927 10.4588L18.2107 14.1778L28.5197 24.4728C28.8747 23.6528 29.0797 22.7908 29.0797 21.9298ZM27.0297 28.6288C27.4667 29.0668 28.1917 29.0668 28.6157 28.6288C29.0387 28.1778 29.0387 27.4808 28.6157 27.0428L3.0487 1.4898C2.6117 1.0528 1.9007 1.0528 1.4627 1.4898C1.0387 1.9138 1.0387 2.6528 1.4627 3.0758ZM8.1757 29.0668C11.8947 29.0668 14.0277 25.7308 15.5997 19.6598L12.0037 16.0778L1.5857 5.6598C1.2307 6.4668 1.0257 7.3148 1.0257 8.1758C1.0257 12.0998 4.7577 14.2598 11.3887 15.9278H4.2107C1.4907 15.9278 -0.0003 17.3908 -0.0003 20.0158C-0.0003 24.5278 4.0747 29.0668 8.1757 29.0668ZM20.0157 30.1058C21.6427 30.0918 23.2427 29.5718 24.6367 28.7108L15.9277 19.9878V25.8948C15.9277 28.5878 17.4047 30.1058 20.0157 30.1058Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.177734375 28.24609375"
          className={className}
        >
          <path
            d="              M9.885 0.0005C7.889 0.0005 5.92 0.8065 4.402 2.0915L13.207 10.8965V3.4455C13.207 1.2715 11.977 0.0005 9.885 0.0005ZM26.223 26.9885C26.428 27.1935 26.742 27.1935 26.934 26.9885C27.166 26.7835 27.139 26.4685 26.934 26.2775L1.955 1.2855C1.777 1.0935 1.463 1.0665 1.244 1.2855C1.053 1.4765 1.053 1.8045 1.244 1.9965ZM20.508 1.4085C16.967 1.4085 14.875 4.7035 14.055 11.7575L15.504 13.2075H24.787C26.961 13.2075 28.178 11.9905 28.178 9.8845C28.178 5.6325 24.5 1.4085 20.508 1.4085ZM1.408 7.6695C1.408 11.2385 4.771 13.1935 11.895 14.3005L2.256 4.6485C1.75 5.5785 1.408 6.6175 1.408 7.6695ZM26.77 20.5765C26.77 16.9805 23.434 15.0395 16.256 13.9455L25.963 23.6665C26.482 22.7095 26.77 21.6425 26.77 20.5765ZM7.656 26.7835C11.184 26.7835 13.139 23.5845 14.164 16.5705L12.633 15.0525H3.432C1.135 15.0525 0 16.1605 0 18.3475C0 22.6135 3.664 26.7835 7.656 26.7835ZM18.348 28.2465C20.33 28.2325 22.285 27.4535 23.775 26.1815L15.025 17.4315V24.8005C15.025 26.9745 16.242 28.2465 18.348 28.2465Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.822265625 27.890625"
          className={className}
        >
          <path
            d="              M9.871 -0.0003C7.766 -0.0003 5.729 0.8747 4.17 2.2697L13.057 11.1567V3.3087C13.057 1.2307 11.867 -0.0003 9.871 -0.0003ZM26.154 26.6877C26.291 26.8237 26.51 26.8237 26.633 26.6877C26.811 26.5367 26.77 26.3457 26.633 26.2087L1.682 1.2307C1.572 1.1207 1.367 1.0797 1.203 1.2307C1.066 1.3667 1.066 1.5857 1.203 1.7227ZM20.193 1.5317C16.68 1.5317 14.561 4.7847 14.027 12.1407L14.943 13.0567H24.582C26.66 13.0567 27.822 11.8807 27.822 9.8707C27.822 5.6597 24.227 1.5317 20.193 1.5317ZM1.545 7.6287C1.545 11.0877 4.689 13.0297 11.84 13.8357L2.461 4.4297C1.914 5.4137 1.545 6.5077 1.545 7.6287ZM26.291 20.2757C26.291 16.7887 23.188 14.8477 15.955 14.0547L25.416 23.5297C25.977 22.5317 26.291 21.4097 26.291 20.2757ZM7.615 26.2907C11.129 26.2907 13.057 23.1597 13.863 15.8597L12.838 14.8477H3.309C1.08 14.8477 0 15.9137 0 18.0197C0 22.2437 3.582 26.2907 7.615 26.2907ZM18.02 27.8907C20.098 27.8907 22.148 27.0297 23.666 25.6617L14.834 16.8297V24.5957C14.834 26.6597 16.01 27.8907 18.02 27.8907Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}