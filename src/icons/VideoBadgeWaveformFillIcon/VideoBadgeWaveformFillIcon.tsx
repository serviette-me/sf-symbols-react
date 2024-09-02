import { IconProps } from "../../types"

export default function VideoBadgeWaveformFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.630859375 28.916015625"
          className={className}
        >
          <path
            d="              M24.91 0.0003H11.744C8.012 0.0003 6.043 1.9683 6.043 5.4553V12.4963C6.59 12.1273 7.26 11.8943 7.984 11.8943C9.543 11.8943 10.869 12.9203 11.307 14.3553C11.375 14.3413 11.416 14.3413 11.484 14.3413C12.756 14.3413 13.836 15.0113 14.438 16.0233C14.479 16.0783 14.492 16.1193 14.52 16.1743C14.67 16.1463 14.82 16.1323 14.984 16.1323C16.912 16.1323 18.457 17.7053 18.457 19.6323V23.8983H24.897C28.629 23.8983 30.598 21.9293 30.598 18.4573V5.4413C30.598 1.9683 28.643 0.0003 24.91 0.0003ZM33.168 17.8003L36.654 20.7403C37.598 21.5333 38.404 22.0663 39.307 22.0663C40.633 22.0663 41.631 21.1773 41.631 19.6873V4.5523C41.631 3.0623 40.633 2.1743 39.307 2.1743C38.391 2.1743 37.611 2.7073 36.654 3.5003L33.168 6.4393ZM7.971 28.9163C8.504 28.9163 8.941 28.4783 8.941 27.9453V15.4763C8.941 14.9163 8.504 14.5063 7.971 14.5063C7.438 14.5063 7.014 14.9293 7.014 15.4763V27.9453C7.014 28.4783 7.424 28.9163 7.971 28.9163ZM4.457 27.0153C5.018 27.0153 5.441 26.5913 5.441 26.0583V17.3493C5.441 16.8303 5.018 16.3923 4.457 16.3923C3.924 16.3923 3.514 16.8303 3.514 17.3493V26.0583C3.514 26.6053 3.938 27.0153 4.457 27.0153ZM11.471 26.4683C12.018 26.4683 12.428 26.0313 12.428 25.4983V17.9103C12.428 17.3633 11.99 16.9533 11.471 16.9533C10.938 16.9533 10.514 17.3773 10.514 17.9103V25.4983C10.514 26.0313 10.938 26.4683 11.471 26.4683ZM14.971 24.6773C15.504 24.6773 15.914 24.2403 15.914 23.7073V19.7153C15.914 19.1543 15.49 18.7443 14.971 18.7443C14.41 18.7443 14 19.1683 14 19.7153V23.7073C14 24.2543 14.41 24.6773 14.971 24.6773ZM0.957 23.9803C1.504 23.9803 1.941 23.5433 1.941 23.0093V20.4123C1.941 19.8653 1.504 19.4413 0.957 19.4413C0.438 19.4413 0 19.8653 0 20.4123V23.0093C0 23.5433 0.438 23.9803 0.957 23.9803Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.673828125 27.80859375"
          className={className}
        >
          <path
            d="              M25.1428 0.0005H11.1428C7.9708 0.0005 6.0978 1.7775 6.0978 4.8945V12.1265C6.5348 11.8945 7.0408 11.7445 7.5738 11.7445C8.9008 11.7445 10.0348 12.5505 10.4858 13.6995C10.6368 13.6585 10.7738 13.6445 10.9238 13.6445C12.2908 13.6445 13.4258 14.4925 13.8628 15.6675C13.8908 15.7365 13.9038 15.7915 13.9178 15.8735C14.0408 15.8455 14.1508 15.8185 14.2868 15.8185C16.0778 15.8185 17.5138 17.2675 17.5138 19.0585V23.0505H25.0608C28.3148 23.0505 30.1058 21.2735 30.1058 18.1695V4.8805C30.1058 1.7775 28.3828 0.0005 25.1428 0.0005ZM32.3338 16.4745L36.5588 20.0975C37.2698 20.6995 37.9398 21.0825 38.6368 21.0825C39.8258 21.0825 40.6738 20.2615 40.6738 18.9495V4.2795C40.6738 2.9665 39.8258 2.1325 38.6368 2.1325C37.9398 2.1325 37.2698 2.5295 36.5588 3.1305L32.3338 6.7535ZM7.5738 27.8085C8.0528 27.8085 8.4358 27.4255 8.4358 26.9475V15.0255C8.4358 14.5195 8.0528 14.1505 7.5738 14.1505C7.0818 14.1505 6.7128 14.5335 6.7128 15.0255V26.9475C6.7128 27.4395 7.0818 27.8085 7.5738 27.8085ZM10.9238 25.9085C11.4158 25.9085 11.7848 25.5255 11.7848 25.0335V16.9125C11.7848 16.4335 11.4028 16.0505 10.9238 16.0505C10.4448 16.0505 10.0628 16.4335 10.0628 16.9125V25.0335C10.0628 25.5255 10.4448 25.9085 10.9238 25.9085ZM4.2108 25.6895C4.7028 25.6895 5.0998 25.2925 5.0998 24.8145V17.1305C5.0998 16.6665 4.7028 16.2695 4.2108 16.2695C3.7328 16.2695 3.3498 16.6665 3.3498 17.1305V24.8145C3.3498 25.3065 3.7458 25.6895 4.2108 25.6895ZM14.2738 23.7205C14.7658 23.7205 15.1348 23.3375 15.1348 22.8455V19.0995C15.1348 18.6075 14.7658 18.2245 14.2738 18.2245C13.7808 18.2245 13.4118 18.6215 13.4118 19.0995V22.8455C13.4118 23.3375 13.7808 23.7205 14.2738 23.7205ZM0.8478 23.0095C1.3538 23.0095 1.7358 22.6265 1.7358 22.1485V19.8105C1.7358 19.3185 1.3538 18.9355 0.8478 18.9355C0.3828 18.9355 -0.0002 19.3185 -0.0002 19.8105V22.1485C-0.0002 22.6265 0.3828 23.0095 0.8478 23.0095Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.1796875 28.3828125"
          className={className}
        >
          <path
            d="              M25.0196 0.0002H11.4706C7.9976 0.0002 6.0706 1.8732 6.0706 5.1812V12.3182C6.5626 12.0172 7.1636 11.8122 7.7926 11.8122C9.2426 11.8122 10.4866 12.7422 10.9236 14.0412C11.0336 14.0132 11.1156 14.0132 11.2246 14.0132C12.5376 14.0132 13.6446 14.7522 14.1776 15.8592C14.2056 15.9142 14.2186 15.9552 14.2466 16.0232C14.3696 15.9962 14.5056 15.9822 14.6566 15.9822C16.5156 15.9822 18.0196 17.4862 18.0196 19.3592V23.4882H24.9786C28.4786 23.4882 30.3656 21.6152 30.3656 18.3062V5.1812C30.3656 1.8732 28.5336 0.0002 25.0196 0.0002ZM32.7716 17.1722L36.6136 20.4392C37.4476 21.1362 38.1856 21.6012 39.0056 21.6012C40.2636 21.6012 41.1796 20.7402 41.1796 19.3322V4.4162C41.1796 3.0082 40.2636 2.1602 39.0056 2.1602C38.1856 2.1602 37.4476 2.6252 36.6136 3.3222L32.7716 6.5902ZM7.7796 28.3832C8.2986 28.3832 8.7086 27.9722 8.7086 27.4672V15.2582C8.7086 14.7242 8.2986 14.3282 7.7796 14.3282C7.2736 14.3282 6.8766 14.7382 6.8766 15.2582V27.4672C6.8766 27.9862 7.2736 28.3832 7.7796 28.3832ZM4.3476 26.3862C4.8676 26.3862 5.2776 25.9762 5.2776 25.4702V17.2402C5.2776 16.7482 4.8676 16.3382 4.3476 16.3382C3.8416 16.3382 3.4456 16.7482 3.4456 17.2402V25.4702C3.4456 25.9902 3.8556 26.3862 4.3476 26.3862ZM11.2106 26.1952C11.7306 26.1952 12.1266 25.7852 12.1266 25.2792V17.4312C12.1266 16.9122 11.7166 16.5152 11.2106 16.5152C10.7056 16.5152 10.2946 16.9262 10.2946 17.4312V25.2792C10.2946 25.7852 10.7056 26.1952 11.2106 26.1952ZM14.6426 24.2132C15.1626 24.2132 15.5586 23.8162 15.5586 23.2972V19.4142C15.5586 18.8942 15.1486 18.4982 14.6426 18.4982C14.1226 18.4982 13.7266 18.9082 13.7266 19.4142V23.2972C13.7266 23.8162 14.1226 24.2132 14.6426 24.2132ZM0.9026 23.5152C1.4356 23.5152 1.8456 23.1052 1.8456 22.5992V20.1252C1.8456 19.6052 1.4356 19.1952 0.9026 19.1952C0.4106 19.1952 -0.0004 19.6052 -0.0004 20.1252V22.5992C-0.0004 23.1052 0.4106 23.5152 0.9026 23.5152Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.34765625 26.591796875"
          className={className}
        >
          <path
            d="              M25.4161 0H10.4181C7.6971 0 6.0021 1.572 6.0021 4.361V11.772C6.2481 11.689 6.5081 11.635 6.7811 11.635C7.8481 11.635 8.7361 12.305 9.0371 13.221C9.2971 13.111 9.5571 13.043 9.8441 13.043C11.1421 13.043 12.2091 13.986 12.3871 15.217C12.4001 15.34 12.4001 15.477 12.4141 15.613C12.5641 15.518 12.7281 15.463 12.9201 15.463C14.3691 15.463 15.5041 16.611 15.5041 18.047V22.107H25.3341C28.1231 22.107 29.7361 20.535 29.7361 17.746V4.361C29.7361 1.572 28.2191 0 25.4161 0ZM31.3361 15.08L36.2711 19.236C36.7501 19.647 37.2561 19.893 37.7621 19.893C38.7191 19.893 39.3481 19.195 39.3481 18.129V3.979C39.3481 2.912 38.7191 2.215 37.7621 2.215C37.2561 2.215 36.7501 2.461 36.2711 2.871L31.3361 7.014ZM6.7951 26.592C7.1501 26.592 7.4371 26.305 7.4371 25.949V14.232C7.4371 13.863 7.1501 13.576 6.7951 13.576C6.4261 13.576 6.1391 13.863 6.1391 14.232V25.949C6.1391 26.318 6.4121 26.592 6.7951 26.592ZM9.8571 25.184C10.2261 25.184 10.5001 24.897 10.5001 24.527V15.613C10.5001 15.258 10.2261 14.984 9.8571 14.984C9.5021 14.984 9.2151 15.258 9.2151 15.613V24.527C9.2151 24.897 9.5021 25.184 9.8571 25.184ZM3.7191 24.254C4.0741 24.254 4.3611 23.981 4.3611 23.598V16.543C4.3611 16.188 4.0741 15.887 3.7191 15.887C3.3501 15.887 3.0761 16.188 3.0761 16.543V23.598C3.0761 23.981 3.3501 24.254 3.7191 24.254ZM12.9331 22.75C13.3031 22.75 13.5761 22.477 13.5761 22.107V18.047C13.5761 17.678 13.3031 17.391 12.9331 17.391C12.5641 17.391 12.2911 17.691 12.2911 18.047V22.107C12.2911 22.463 12.5641 22.75 12.9331 22.75ZM0.6421 21.998C1.0121 21.998 1.2851 21.725 1.2851 21.369V18.785C1.2851 18.43 1.0121 18.143 0.6421 18.143C0.2871 18.143 0.0001 18.43 0.0001 18.785V21.369C0.0001 21.725 0.2871 21.998 0.6421 21.998Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.072265625 27.111328125"
          className={className}
        >
          <path
            d="              M25.2928 0H10.7738C7.9438 0 6.1528 1.654 6.1528 4.525V11.894C6.4938 11.73 6.9048 11.635 7.3278 11.635C8.5038 11.635 9.5018 12.305 9.9668 13.275C10.1578 13.221 10.3498 13.193 10.5688 13.193C11.9898 13.193 13.1798 14.15 13.5078 15.435C13.5218 15.518 13.5218 15.586 13.5488 15.682C13.6308 15.641 13.7268 15.613 13.8358 15.613C15.5448 15.613 16.9118 16.994 16.9118 18.689V22.504H25.1838C28.1098 22.504 29.8048 20.85 29.8048 17.978V4.525C29.8048 1.654 28.2188 0 25.2928 0ZM31.8008 15.613L36.5038 19.674C37.0648 20.152 37.6528 20.467 38.2128 20.467C39.3208 20.467 40.0728 19.674 40.0728 18.484V4.088C40.0728 2.898 39.3208 2.105 38.2128 2.105C37.6528 2.105 37.0648 2.42 36.5038 2.898L31.8008 6.945ZM7.3278 27.111C7.7798 27.111 8.1348 26.756 8.1348 26.305V14.738C8.1348 14.273 7.7798 13.918 7.3278 13.918C6.8768 13.918 6.5218 14.273 6.5218 14.738V26.305C6.5218 26.769 6.8638 27.111 7.3278 27.111ZM10.5688 25.553C11.0328 25.553 11.3888 25.197 11.3888 24.746V16.269C11.3888 15.832 11.0328 15.477 10.5688 15.477C10.1308 15.477 9.7758 15.832 9.7758 16.269V24.746C9.7758 25.197 10.1308 25.553 10.5688 25.553ZM4.0608 24.828C4.5118 24.828 4.8668 24.473 4.8668 24.008V16.994C4.8668 16.557 4.5118 16.187 4.0608 16.187C3.6098 16.187 3.2538 16.557 3.2538 16.994V24.008C3.2538 24.473 3.6098 24.828 4.0608 24.828ZM13.8358 23.105C14.3008 23.105 14.6428 22.764 14.6428 22.299V18.703C14.6428 18.252 14.3008 17.896 13.8358 17.896C13.3848 17.896 13.0298 18.266 13.0298 18.703V22.299C13.0298 22.764 13.3848 23.105 13.8358 23.105ZM0.7928 22.394C1.2578 22.394 1.6138 22.039 1.6138 21.602V19.428C1.6138 18.977 1.2578 18.621 0.7928 18.621C0.3558 18.621 -0.0002 18.977 -0.0002 19.428V21.602C-0.0002 22.039 0.3558 22.394 0.7928 22.394Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.73046875 26.71484375"
          className={className}
        >
          <path
            d="              M25.3747 -0.0003H10.5547C7.9297 -0.0003 6.1657 1.5857 6.1657 4.3337V11.7577C6.4807 11.6487 6.8227 11.5797 7.1777 11.5797C8.2577 11.5797 9.2007 12.1817 9.6657 13.0427C9.8987 12.9747 10.1167 12.9337 10.3637 12.9337C11.8257 12.9337 13.0157 13.9587 13.2887 15.3127C13.3027 15.3947 13.3027 15.4767 13.3167 15.5727C13.3987 15.5317 13.4807 15.5037 13.5757 15.5037C15.2437 15.5037 16.5707 16.8437 16.5707 18.4847V22.2027H25.2387C27.9867 22.2027 29.6267 20.6177 29.6267 17.8827V4.3337C29.6267 1.5857 28.1227 -0.0003 25.3747 -0.0003ZM31.4867 15.1347L36.4627 19.4417C36.9277 19.8517 37.4747 20.1117 37.9667 20.1117C39.0327 20.1117 39.7307 19.3317 39.7307 18.2107V3.9927C39.7307 2.8707 39.0327 2.0917 37.9667 2.0917C37.4747 2.0917 36.9277 2.3517 36.4627 2.7617L31.4867 7.0547ZM7.1777 26.7147C7.6017 26.7147 7.9437 26.3727 7.9437 25.9497V14.5747C7.9437 14.1367 7.6017 13.7947 7.1777 13.7947C6.7407 13.7947 6.4117 14.1367 6.4117 14.5747V25.9497C6.4117 26.3867 6.7267 26.7147 7.1777 26.7147ZM10.3637 25.3477C10.8147 25.3477 11.1567 25.0057 11.1567 24.5817V15.9137C11.1567 15.4907 10.8147 15.1487 10.3637 15.1487C9.9527 15.1487 9.6117 15.4907 9.6117 15.9137V24.5817C9.6117 25.0057 9.9527 25.3477 10.3637 25.3477ZM3.9647 24.3497C4.4027 24.3497 4.7437 24.0077 4.7437 23.5707V16.9257C4.7437 16.4887 4.4027 16.1467 3.9647 16.1467C3.5407 16.1467 3.1997 16.4887 3.1997 16.9257V23.5707C3.1997 24.0077 3.5407 24.3497 3.9647 24.3497ZM13.5897 22.7637C14.0277 22.7637 14.3557 22.4497 14.3557 21.9977V18.4847C14.3557 18.0607 14.0277 17.7187 13.5897 17.7187C13.1527 17.7187 12.8247 18.0747 12.8247 18.4847V21.9977C12.8247 22.4357 13.1527 22.7637 13.5897 22.7637ZM0.7517 22.0527C1.2027 22.0527 1.5317 21.7107 1.5317 21.2867V19.2087C1.5317 18.7847 1.2027 18.4437 0.7517 18.4437C0.3277 18.4437 -0.0003 18.7847 -0.0003 19.2087V21.2867C-0.0003 21.7107 0.3277 22.0527 0.7517 22.0527Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.345703125 27.412109375"
          className={className}
        >
          <path
            d="              M25.2385 0.0001H10.9375C7.9705 0.0001 6.1385 1.7091 6.1385 4.6891V12.0041C6.5215 11.8121 6.9725 11.6891 7.4375 11.6891C8.6815 11.6891 9.7485 12.4141 10.1995 13.4671C10.3765 13.4121 10.5415 13.3851 10.7325 13.3851C12.1265 13.3851 13.2895 14.3011 13.6715 15.5451C13.6855 15.6131 13.6995 15.6821 13.7125 15.7641C13.8085 15.7361 13.9185 15.7091 14.0415 15.7091C15.7915 15.7091 17.1715 17.1171 17.1715 18.8531V22.7501H25.1425C28.2055 22.7501 29.9415 21.0411 29.9415 18.0601V4.6891C29.9415 1.7091 28.3005 0.0001 25.2385 0.0001ZM32.0335 15.9961L36.5315 19.8651C37.1605 20.3851 37.7895 20.7401 38.4045 20.7401C39.5525 20.7401 40.3455 19.9331 40.3455 18.6891V4.1701C40.3455 2.9391 39.5525 2.1331 38.4045 2.1331C37.7755 2.1331 37.1605 2.4751 36.5315 3.0081L32.0335 6.8631ZM7.4375 27.4121C7.9025 27.4121 8.2715 27.0431 8.2715 26.5781V14.8611C8.2715 14.3831 7.9025 14.0271 7.4375 14.0271C6.9725 14.0271 6.6035 14.3961 6.6035 14.8611V26.5781C6.6035 27.0571 6.9595 27.4121 7.4375 27.4121ZM10.7325 25.7031C11.2105 25.7031 11.5665 25.3341 11.5665 24.8691V16.5571C11.5665 16.0921 11.1975 15.7231 10.7325 15.7231C10.2815 15.7231 9.9125 16.0921 9.9125 16.5571V24.8691C9.9125 25.3341 10.2815 25.7031 10.7325 25.7031ZM4.1425 25.1971C4.6075 25.1971 4.9765 24.8281 4.9765 24.3631V17.0621C4.9765 16.5981 4.6075 16.2281 4.1425 16.2281C3.6775 16.2281 3.3085 16.5981 3.3085 17.0621V24.3631C3.3085 24.8421 3.6775 25.1971 4.1425 25.1971ZM14.0415 23.3791C14.5055 23.3791 14.8615 23.0231 14.8615 22.5451V18.8811C14.8615 18.4161 14.5055 18.0471 14.0415 18.0471C13.5625 18.0471 13.2075 18.4301 13.2075 18.8811V22.5451C13.2075 23.0101 13.5625 23.3791 14.0415 23.3791ZM0.8205 22.6681C1.2985 22.6681 1.6675 22.2991 1.6675 21.8481V19.5921C1.6675 19.1271 1.2985 18.7581 0.8205 18.7581C0.3695 18.7581 0.0005 19.1271 0.0005 19.5921V21.8481C0.0005 22.2991 0.3695 22.6681 0.8205 22.6681Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.85546875 26.44140625"
          className={className}
        >
          <path
            d="              M25.4705 0.0003H10.2265C7.3825 0.0003 5.7695 1.5723 5.7695 4.4293V11.7993C5.9195 11.7713 6.0975 11.7443 6.2615 11.7443C7.2735 11.7443 8.1075 12.4963 8.2035 13.4673C8.4905 13.3023 8.8045 13.1933 9.1605 13.1933C10.2405 13.1933 11.1285 14.0413 11.1975 15.1213C11.1975 15.2993 11.1975 15.4903 11.1975 15.6813C11.4435 15.5173 11.7305 15.4223 12.0445 15.4223C13.1795 15.4223 14.0955 16.3383 14.0955 17.4593V22.0113H25.4435C28.3005 22.0113 29.8865 20.4393 29.8865 17.5823V4.4293C29.8865 1.5723 28.3285 0.0003 25.4705 0.0003ZM31.1175 15.0113L36.0115 18.9903C36.5035 19.3733 36.9415 19.6193 37.4605 19.6193C38.2945 19.6193 38.8555 19.0313 38.8555 18.0473V3.9653C38.8555 2.9803 38.2945 2.3793 37.4605 2.3793C36.9415 2.3793 36.5035 2.6383 36.0115 3.0213L31.1175 6.9723ZM6.2615 26.4413C6.5355 26.4413 6.7535 26.2363 6.7535 25.9633V13.7953C6.7535 13.5213 6.5355 13.3023 6.2615 13.3023C6.0015 13.3023 5.7835 13.5213 5.7835 13.7953V25.9633C5.7835 26.2363 5.9885 26.4413 6.2615 26.4413ZM9.1605 24.9653C9.4335 24.9653 9.6385 24.7593 9.6385 24.4863V15.2443C9.6385 14.9703 9.4335 14.7653 9.1605 14.7653C8.8865 14.7653 8.6815 14.9703 8.6815 15.2443V24.4863C8.6815 24.7593 8.8865 24.9653 9.1605 24.9653ZM3.3765 24.1583C3.6505 24.1583 3.8555 23.9393 3.8555 23.6663V16.0503C3.8555 15.7913 3.6505 15.5723 3.3765 15.5723C3.1035 15.5723 2.8985 15.7913 2.8985 16.0503V23.6663C2.8985 23.9393 3.1035 24.1583 3.3765 24.1583ZM12.0585 22.7503C12.3325 22.7503 12.5375 22.5453 12.5375 22.2713V17.4593C12.5375 17.1993 12.3325 16.9803 12.0585 16.9803C11.7855 16.9803 11.5805 17.1993 11.5805 17.4593V22.2713C11.5805 22.5313 11.7855 22.7503 12.0585 22.7503ZM0.4785 21.9573C0.7515 21.9573 0.9575 21.7523 0.9575 21.4783V18.2523C0.9575 17.9783 0.7515 17.7733 0.4785 17.7733C0.2055 17.7733 -0.0005 17.9783 -0.0005 18.2523V21.4783C-0.0005 21.7523 0.2055 21.9573 0.4785 21.9573Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.595703125 26.373046875"
          className={className}
        >
          <path
            d="              M25.4982 -0.0001H10.1312C7.2192 -0.0001 5.6602 1.5719 5.6602 4.4569V11.8259C5.7562 11.8129 5.8792 11.7849 5.9882 11.7849C6.9862 11.7849 7.7932 12.5919 7.7792 13.5899C8.0802 13.3979 8.4082 13.2749 8.7912 13.2749C9.7892 13.2749 10.5822 14.0679 10.5682 15.0659C10.5682 15.2719 10.5682 15.5039 10.5682 15.7089C10.8692 15.5179 11.2112 15.3949 11.5942 15.3949C12.5782 15.3949 13.3712 16.1879 13.3712 17.1719V21.9569H25.4982C28.3962 21.9569 29.9692 20.3849 29.9692 17.4999V4.4569C29.9692 1.5719 28.3962 -0.0001 25.4982 -0.0001ZM30.9942 14.9709L35.8752 18.8539C36.3672 19.2499 36.7912 19.4819 37.3102 19.4819C38.0762 19.4819 38.5952 18.9489 38.5952 17.9919V3.9649C38.5952 3.0079 38.0762 2.4749 37.3102 2.4749C36.7912 2.4749 36.3672 2.7209 35.8752 3.1039L30.9942 6.9449ZM6.0022 26.3729C6.2202 26.3729 6.3982 26.1949 6.3982 25.9769V13.5629C6.3982 13.3439 6.2202 13.1659 6.0022 13.1659C5.7692 13.1659 5.6052 13.3439 5.6052 13.5629V25.9769C5.6052 26.1949 5.7692 26.3729 6.0022 26.3729ZM8.8042 24.8689C9.0232 24.8689 9.2012 24.6909 9.2012 24.4729V15.0529C9.2012 14.8339 9.0232 14.6559 8.8042 14.6559C8.5722 14.6559 8.4082 14.8339 8.4082 15.0529V24.4729C8.4082 24.6909 8.5722 24.8689 8.8042 24.8689ZM3.1992 24.1039C3.4182 24.1039 3.5952 23.9259 3.5952 23.7069V15.7909C3.5952 15.5859 3.4182 15.4079 3.1992 15.4079C2.9802 15.4079 2.8032 15.5859 2.8032 15.7909V23.7069C2.8032 23.9259 2.9802 24.1039 3.1992 24.1039ZM11.6072 22.7499C11.8262 22.7499 12.0042 22.5719 12.0042 22.3539V17.1719C12.0042 16.9529 11.8262 16.7749 11.6072 16.7749C11.3752 16.7749 11.2112 16.9529 11.2112 17.1719V22.3539C11.2112 22.5719 11.3752 22.7499 11.6072 22.7499ZM0.3962 21.9429C0.6152 21.9429 0.7932 21.7659 0.7932 21.5469V17.9789C0.7932 17.7459 0.6152 17.5819 0.3962 17.5819C0.1782 17.5819 0.0002 17.7459 0.0002 17.9789V21.5469C0.0002 21.7659 0.1782 21.9429 0.3962 21.9429Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
