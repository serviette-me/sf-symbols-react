import { IconProps } from "../../types"

export default function PopcornFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.71484375 35.84765625"
          className={className}
        >
          <path
            d="              M0.2327 10.1309C1.1617 9.5159 2.2557 9.2149 3.3767 9.2149C4.9907 9.2149 6.5897 9.8709 7.6427 11.2249C8.7227 9.8439 10.5137 9.1469 12.2637 9.1469C14.0547 9.1469 15.8047 9.8439 16.8987 11.2249C17.9377 9.8709 19.5507 9.2149 21.1777 9.2149C22.3537 9.2149 23.5297 9.5699 24.4867 10.2539C24.7327 9.6799 24.8827 9.0369 24.8827 8.3539C24.8827 5.6739 23.2697 3.8009 20.8637 3.6369C20.0707 2.1329 18.8537 1.3129 17.3087 1.3129C16.2967 1.3129 15.3397 1.6539 14.5747 2.2559C14.3417 2.2009 14.0687 2.1879 13.8357 2.2009C13.0837 0.8479 11.6347 -0.0001 10.0627 -0.0001C8.0797 -0.0001 6.4527 1.1209 6.0297 2.6389C5.1547 2.7479 4.3747 3.5139 4.2107 4.3609C1.8867 4.4299 -0.0003 6.3569 -0.0003 8.7359C-0.0003 9.2149 0.0817 9.6799 0.2327 10.1309ZM10.5407 33.6329H13.0427C12.4827 32.7439 12.1957 31.6779 12.1957 30.5429C12.1957 28.5609 13.1527 26.7969 14.7107 25.7439L15.6957 14.9159C15.9137 12.5239 14.0687 11.3749 12.2637 11.3749C10.4727 11.3749 8.6267 12.5239 8.8457 14.9159ZM7.0407 33.6329H8.2847L6.5077 14.4099C6.3167 12.3729 4.7717 11.4019 3.2407 11.4019C1.5037 11.4019 -0.2053 12.7009 0.2737 15.1899L3.0487 29.8459C3.4867 32.1699 4.6757 33.6329 7.0407 33.6329ZM20.9047 21.6699C21.6427 21.6699 22.3267 21.7929 22.9687 22.0249L24.2677 15.1899C24.7457 12.7009 23.0367 11.4019 21.3007 11.4019C19.7697 11.4019 18.2247 12.3729 18.0337 14.4099L17.2407 22.8869C18.2797 22.1069 19.5507 21.6699 20.9047 21.6699ZM20.9047 35.8479C22.3127 35.8479 23.5427 35.1229 24.0077 34.0289C25.6487 33.6059 26.7147 32.1969 26.7147 30.5429C26.7147 29.2169 25.8807 27.8499 24.5817 27.1109C24.3227 25.1969 22.8317 23.9119 20.9047 23.9119C19.0317 23.9119 17.5137 25.1839 17.1177 27.0839C15.5037 27.5079 14.4517 28.9019 14.4517 30.5429C14.4517 32.3889 15.6677 33.8239 17.5687 34.1109C18.3067 35.1499 19.6187 35.8479 20.9047 35.8479Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.744140625 35.21875"
          className={className}
        >
          <path
            d="              M0.4103 10.0485C1.2713 9.5295 2.2833 9.2555 3.3083 9.2555C4.8263 9.2555 6.3433 9.8715 7.3413 11.1285C8.3673 9.7345 10.1173 8.9965 11.8403 8.9965C13.5903 8.9965 15.3123 9.7345 16.3513 11.1285C17.3493 9.8715 18.8673 9.2555 20.4123 9.2555C21.4373 9.2555 22.4763 9.5425 23.3513 10.1035C23.7073 9.4745 23.9253 8.7505 23.9253 7.9575C23.9253 5.4415 22.3673 3.6775 20.0703 3.5685C19.4003 2.1465 18.2523 1.2985 16.7483 1.2985C15.7633 1.2985 14.8613 1.6265 14.1503 2.2425C13.8633 2.1605 13.4943 2.1325 13.1793 2.1875C12.5093 0.8475 11.1423 0.0005 9.6253 0.0005C7.6563 0.0005 6.2073 1.1625 5.8793 2.5155C4.9083 2.5155 4.0883 3.3765 4.0063 4.2655C1.7913 4.2655 0.0003 6.0845 0.0003 8.3265C0.0003 8.9275 0.1233 9.5015 0.4103 10.0485ZM10.1443 33.0035H12.5373V32.9765C11.9353 32.1155 11.6073 31.0625 11.6073 29.9415C11.6073 27.9725 12.6053 26.2095 14.2463 25.2385L15.2163 14.5335C15.4353 12.0995 13.4803 11.0465 11.8403 11.0465C10.2133 11.0465 8.2573 12.0995 8.4763 14.5335ZM6.5493 33.0035H8.1213L6.3983 14.2055C6.2073 12.2225 4.7033 11.2795 3.1993 11.2795C1.4493 11.2795 -0.3007 12.6055 0.1773 15.1625L2.9123 29.5855C3.3083 31.7185 4.3883 33.0035 6.5493 33.0035ZM19.8923 21.4515C20.7403 21.4515 21.5193 21.6425 22.2163 21.9845L23.5153 15.1625C23.9943 12.6055 22.2443 11.2795 20.4803 11.2795C18.9903 11.2795 17.4723 12.2225 17.2953 14.2055L16.5153 22.6405C17.4313 21.9025 18.6073 21.4515 19.8923 21.4515ZM19.8923 35.2185C21.2593 35.2185 22.4903 34.4665 23.0093 33.3595C24.7463 32.9355 25.7443 31.5135 25.7443 29.9415C25.7443 28.5335 24.8413 27.1255 23.2973 26.6195C23.1463 24.7875 21.7383 23.5155 19.8923 23.5155C18.0883 23.5155 16.6793 24.7595 16.4473 26.5505C14.7113 26.9065 13.6723 28.3555 13.6723 29.9415C13.6723 31.6235 14.7933 33.0725 16.6663 33.4005C17.3083 34.4945 18.5803 35.2185 19.8923 35.2185Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.25 35.546875"
          className={className}
        >
          <path
            d="              M0.314 10.0895C1.217 9.5155 2.27 9.2285 3.336 9.2285C4.908 9.2285 6.48 9.8575 7.492 11.1695C8.559 9.7895 10.322 9.0785 12.072 9.0785C13.836 9.0785 15.572 9.7895 16.639 11.1695C17.664 9.8575 19.236 9.2285 20.822 9.2285C21.916 9.2285 23.037 9.5565 23.953 10.1715C24.254 9.5835 24.432 8.9005 24.432 8.1625C24.432 5.5645 22.846 3.7325 20.494 3.5955C19.756 2.1325 18.566 1.3125 17.049 1.3125C16.037 1.3125 15.107 1.6405 14.369 2.2425C14.109 2.1875 13.795 2.1605 13.521 2.2015C12.811 0.8475 11.402 -0.0005 9.857 -0.0005C7.875 -0.0005 6.33 1.1345 5.961 2.5705C5.031 2.6385 4.238 3.4455 4.115 4.3205C1.846 4.3475 0 6.2205 0 8.5315C0 9.0785 0.096 9.5975 0.314 10.0895ZM10.35 33.3325H12.811V33.3185C12.223 32.4435 11.922 31.3905 11.922 30.2555C11.922 28.2735 12.893 26.5235 14.492 25.4985L15.477 14.7385C15.682 12.3315 13.795 11.2105 12.072 11.2105C10.35 11.2105 8.449 12.3315 8.668 14.7385ZM6.809 33.3325H8.203L6.453 14.3145C6.262 12.3045 4.744 11.3475 3.227 11.3475C1.477 11.3475 -0.246 12.6465 0.232 15.1755L2.98 29.7225C3.404 31.9515 4.539 33.3325 6.809 33.3325ZM20.426 21.5605C21.219 21.5605 21.943 21.7245 22.613 21.9985L23.912 15.1755C24.391 12.6465 22.668 11.3475 20.918 11.3475C19.4 11.3475 17.869 12.3045 17.691 14.3145L16.898 22.7635C17.883 21.9985 19.1 21.5605 20.426 21.5605ZM20.426 35.5465C21.82 35.5465 23.051 34.8085 23.529 33.7145C25.225 33.2905 26.25 31.8695 26.25 30.2555C26.25 28.8885 25.389 27.5075 23.98 26.8785C23.762 25.0055 22.326 23.7205 20.426 23.7205C18.58 23.7205 17.117 24.9785 16.803 26.8245C15.135 27.2205 14.082 28.6425 14.082 30.2555C14.082 32.0335 15.258 33.4685 17.145 33.7695C17.828 34.8355 19.127 35.5465 20.426 35.5465Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.10315978835292 33.82421875"
          className={className}
        >
          <path
            d="              M0.6013 9.6382C1.3943 9.1602 2.3373 8.9002 3.2813 8.9002C4.6893 8.9002 6.0973 9.4742 7.0133 10.6912C7.9293 9.3102 9.5563 8.5172 11.1833 8.5172C12.8243 8.5172 14.4373 9.3102 15.3673 10.6912C16.2693 9.4742 17.6913 8.9002 19.1133 8.9002C20.0563 8.9002 20.9993 9.1602 21.7923 9.6662C22.2713 9.0372 22.5723 8.2442 22.5723 7.3422C22.5723 5.1402 21.0543 3.5272 18.9763 3.4862C18.5253 2.1872 17.4453 1.2712 16.0093 1.2712C15.1073 1.2712 14.2733 1.6272 13.6713 2.2282C13.2613 2.0782 12.7143 2.0642 12.2363 2.1742C11.6893 0.8472 10.4453 0.0002 9.0233 0.0002C7.2453 0.0002 6.0153 1.0392 5.7553 2.1872C4.6343 2.0102 3.5953 2.9672 3.5953 4.1152C1.6673 4.0742 0.0543 5.7282 0.0543 7.6832C0.0543 8.3812 0.2323 9.0372 0.6013 9.6382ZM9.5013 31.9242H12.1673V31.7602C11.4023 30.9802 10.9513 29.9142 10.9513 28.7242C10.9513 26.9332 11.9493 25.3062 13.5353 24.4862L14.5193 13.6172C14.7243 11.2522 12.7693 10.1032 11.1833 10.1032C9.6113 10.1032 7.6423 11.2522 7.8473 13.6172ZM5.8653 31.9242H8.0793L6.4113 13.5212C6.2203 11.4432 4.7303 10.4592 3.2263 10.4592C1.4083 10.4592 -0.4107 11.8812 0.0813 14.4782L2.8703 29.2302C3.1993 30.9392 4.0873 31.9242 5.8653 31.9242ZM18.4433 21.0412C19.3723 21.0412 20.2063 21.2732 20.9313 21.6972L22.2853 14.4782C22.7903 11.8812 20.9583 10.4592 19.1403 10.4592C17.6503 10.4592 16.1463 11.4432 15.9543 13.5212L15.1343 22.5862C15.8723 21.6422 17.0763 21.0412 18.4433 21.0412ZM18.4433 33.8242C19.7553 33.8242 20.9583 33.0172 21.4233 31.8692C23.1873 31.5682 24.1033 30.2152 24.1033 28.7522C24.1033 27.3162 23.1733 26.0042 21.5873 25.7582C21.6013 23.9672 20.2613 22.6272 18.4433 22.6272C16.7203 22.6272 15.3943 23.8712 15.3393 25.5392C13.6303 25.8122 12.5503 27.2212 12.5503 28.7242C12.5503 30.3102 13.6853 31.6912 15.5033 31.8962C15.8723 33.0312 17.0763 33.8242 18.4433 33.8242Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.115234375 34.80859375"
          className={className}
        >
          <path
            d="              M0.5197 10.0074C1.3397 9.5294 2.2967 9.2834 3.2537 9.2834C4.7307 9.2834 6.1937 9.8574 7.1507 11.0604C8.1487 9.6524 9.8577 8.9004 11.5797 8.9004C13.3027 8.9004 15.0117 9.6524 15.9957 11.0604C16.9667 9.8574 18.4297 9.2834 19.9197 9.2834C20.8637 9.2834 21.8067 9.5294 22.6137 10.0074C23.0647 9.3374 23.3107 8.5584 23.3107 7.6974C23.3107 5.2914 21.7927 3.5954 19.5777 3.5134C18.9627 2.1604 17.8687 1.2854 16.3787 1.2854C15.4357 1.2854 14.5467 1.6134 13.8767 2.2284C13.5627 2.1324 13.1247 2.1054 12.7697 2.1734C12.1407 0.8344 10.8147 0.0004 9.3377 0.0004C7.3827 0.0004 6.0427 1.1754 5.7697 2.4204C4.7577 2.3654 3.8967 3.2814 3.8687 4.1974C1.7497 4.1564 -0.0003 5.9064 -0.0003 8.0664C-0.0003 8.7364 0.1507 9.3794 0.5197 10.0074ZM9.8847 32.6074H12.2087V32.5524C11.5937 31.7054 11.2387 30.6664 11.2387 29.5584C11.2387 27.5894 12.2777 25.8264 13.9587 24.8964L14.9157 14.2734C15.1347 11.8264 13.1117 10.8284 11.5797 10.8284C10.0357 10.8284 8.0117 11.8264 8.2307 14.2734ZM6.2347 32.6074H8.0117L6.3297 14.0824C6.1527 12.1404 4.6617 11.1974 3.1857 11.1974C1.4087 11.1974 -0.3693 12.5504 0.1227 15.1344L2.8297 29.4084C3.2127 31.4184 4.2107 32.6074 6.2347 32.6074ZM19.2497 21.3284C20.1657 21.3284 20.9997 21.5464 21.7387 21.9434L23.0237 15.1344C23.5297 12.5504 21.7387 11.1974 19.9747 11.1974C18.4847 11.1974 17.0077 12.1404 16.8297 14.0824L16.0647 22.4764C16.8847 21.7654 18.0197 21.3284 19.2497 21.3284ZM19.2497 34.8084C20.5897 34.8084 21.8207 34.0564 22.3807 32.9214C24.1717 32.5114 25.1157 31.0624 25.1157 29.5584C25.1157 28.0824 24.1717 26.6464 22.4767 26.2914C22.3947 24.5134 21.0407 23.2554 19.2497 23.2554C17.4997 23.2554 16.1467 24.4864 16.0097 26.2094C14.2187 26.5234 13.1797 28.0004 13.1797 29.5584C13.1797 31.1444 14.2327 32.5934 16.0917 32.9494C16.6657 34.0564 17.9107 34.8084 19.2497 34.8084Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.7734375 34.576171875"
          className={className}
        >
          <path
            d="              M0.6017 9.98C1.3947 9.543 2.3247 9.311 3.2407 9.311C4.6897 9.311 6.1117 9.871 7.0547 11.033C8.0257 9.625 9.7347 8.846 11.4297 8.846C13.1387 8.846 14.8337 9.625 15.8047 11.033C16.7617 9.871 18.1977 9.311 19.6607 9.311C20.5487 9.311 21.4377 9.529 22.2167 9.953C22.6957 9.27 22.9827 8.463 22.9827 7.561C22.9827 5.209 21.4787 3.555 19.3047 3.5C18.7307 2.174 17.6637 1.285 16.1877 1.285C15.2577 1.285 14.3827 1.613 13.7267 2.215C13.3987 2.119 12.9337 2.092 12.5367 2.174C11.9357 0.848 10.6507 0 9.1877 0C7.2457 0 5.9607 1.189 5.7287 2.379C4.6897 2.283 3.8147 3.24 3.8147 4.17C1.7227 4.102 -0.0003 5.824 -0.0003 7.916C-0.0003 8.641 0.1777 9.311 0.6017 9.98ZM9.7477 32.389H12.0447V32.32C11.4027 31.486 11.0467 30.447 11.0467 29.34C11.0467 27.385 12.0857 25.621 13.8087 24.719L14.7517 14.137C14.9707 11.676 12.9197 10.705 11.4297 10.705C9.9527 10.705 7.8887 11.676 8.1077 14.137ZM6.0707 32.389H7.9567L6.2887 14.014C6.1247 12.086 4.6487 11.156 3.1717 11.156C1.4087 11.156 -0.3963 12.51 0.1097 15.135L2.7887 29.312C3.1587 31.254 4.1157 32.389 6.0707 32.389ZM18.8947 21.246C19.8517 21.246 20.7267 21.492 21.4787 21.93L22.7637 15.135C23.2697 12.51 21.4647 11.156 19.6877 11.156C18.2247 11.156 16.7477 12.086 16.5707 14.014L15.8187 22.395C16.5977 21.684 17.6917 21.246 18.8947 21.246ZM18.8947 34.576C20.2207 34.576 21.4517 33.824 22.0387 32.676C23.8577 32.266 24.7737 30.83 24.7737 29.354C24.7737 27.836 23.8027 26.4 22.0257 26.113C21.9707 24.377 20.6587 23.119 18.8947 23.119C17.1717 23.119 15.8597 24.336 15.7777 26.018C13.9457 26.305 12.9067 27.795 12.9067 29.34C12.9067 30.871 13.9177 32.32 15.7777 32.703C16.3247 33.824 17.5407 34.576 18.8947 34.576Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.388671875 34.97265625"
          className={className}
        >
          <path
            d="              M0.4783 10.0214C1.3263 9.5294 2.2973 9.2694 3.2813 9.2694C4.7853 9.2694 6.2613 9.8574 7.2463 11.0744C8.2573 9.6794 9.9803 8.9274 11.7033 8.9274C13.4253 8.9274 15.1483 9.6794 16.1603 11.0744C17.1313 9.8574 18.6343 9.2694 20.1383 9.2694C21.1233 9.2694 22.1073 9.5294 22.9413 10.0354C23.3513 9.3924 23.5843 8.6274 23.5843 7.8064C23.5843 5.3594 22.0393 3.6234 19.7973 3.5274C19.1543 2.1464 18.0473 1.2854 16.5433 1.2854C15.5863 1.2854 14.6973 1.6134 14.0003 2.2284C13.6993 2.1324 13.2893 2.1054 12.9473 2.1734C12.3043 0.8344 10.9653 0.0004 9.4743 0.0004C7.5063 0.0004 6.1253 1.1624 5.8243 2.4614C4.8263 2.4194 3.9923 3.3224 3.9373 4.2244C1.7773 4.1974 0.0003 5.9744 0.0003 8.1624C0.0003 8.8184 0.1503 9.4194 0.4783 10.0214ZM9.9943 32.7714H12.3593V32.7304C11.7443 31.8824 11.4163 30.8304 11.4163 29.7094C11.4163 27.7534 12.4273 25.9904 14.0953 25.0334L15.0523 14.3824C15.2713 11.9354 13.2753 10.9104 11.7033 10.9104C10.1173 10.9104 8.1213 11.9354 8.3403 14.3824ZM6.3713 32.7714H8.0663L6.3573 14.1364C6.1793 12.1684 4.6893 11.2244 3.1993 11.2244C1.4353 11.2244 -0.3417 12.5644 0.1643 15.1484L2.8713 29.4764C3.2673 31.5414 4.2933 32.7714 6.3713 32.7714ZM19.5373 21.3694C20.4123 21.3694 21.2323 21.5744 21.9573 21.9574L23.2423 15.1484C23.7343 12.5644 21.9703 11.2244 20.2073 11.2244C18.7163 11.2244 17.2133 12.1684 17.0353 14.1364L16.2693 22.5444C17.1313 21.8064 18.2793 21.3694 19.5373 21.3694ZM19.5373 34.9724C20.8903 34.9724 22.1213 34.2204 22.6543 33.0994C24.4313 32.6894 25.3883 31.2534 25.3883 29.7224C25.3883 28.2734 24.4723 26.8514 22.8453 26.4274C22.7223 24.6234 21.3553 23.3654 19.5373 23.3654C17.7593 23.3654 16.3923 24.5954 16.2153 26.3454C14.4373 26.6874 13.3983 28.1364 13.3983 29.7094C13.3983 31.3494 14.4783 32.7984 16.3513 33.1404C16.9533 34.2344 18.1973 34.9724 19.5373 34.9724Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.25355845377865 32.853515625"
          className={className}
        >
          <path
            d="              M0.6407 9.2147C1.4197 8.6677 2.3907 8.3667 3.3607 8.3667C4.7417 8.3667 6.1087 8.9687 6.9707 10.2677C7.8177 8.9137 9.3357 8.1207 10.8807 8.1207C12.4257 8.1207 13.9427 8.9137 14.7907 10.2677C15.6517 8.9687 17.0327 8.3667 18.4137 8.3667C19.4387 8.3667 20.4507 8.7087 21.2707 9.3247C21.7227 8.7497 22.0637 7.9847 22.0637 7.0687C22.0637 5.0857 20.5327 3.5277 18.5917 3.5137C18.2907 2.2287 17.1837 1.2847 15.8157 1.2847C14.9407 1.2847 14.1477 1.6677 13.6147 2.2697C13.0957 2.0647 12.4527 2.0507 11.8647 2.2147C11.3867 0.8887 10.1967 -0.0003 8.8157 -0.0003C7.2847 -0.0003 6.0957 0.8747 5.8217 1.9547C4.5777 1.6677 3.3477 2.6117 3.3477 4.0607C1.6107 4.0467 0.1617 5.6187 0.1617 7.3967C0.1617 8.0797 0.3117 8.6957 0.6407 9.2147ZM9.1987 31.3357H12.3567V31.0627C11.4407 30.3517 10.8667 29.2307 10.8667 27.9457C10.8667 26.3597 11.8107 24.9237 13.2047 24.1997L14.2297 12.9607C14.4217 10.7187 12.6027 9.3377 10.8807 9.3377C9.1717 9.3377 7.3397 10.7187 7.5447 12.9607ZM5.6307 31.3357H8.2687L6.6017 12.9067C6.3827 10.6097 4.8517 9.5707 3.3197 9.5707C1.4607 9.5707 -0.4123 11.0747 0.0797 13.6447L3.0187 29.1487C3.2787 30.5567 4.0717 31.3357 5.6307 31.3357ZM17.8807 20.7817C18.7557 20.7817 19.5487 21.0137 20.2187 21.4237L21.6817 13.6447C22.1737 11.0747 20.3137 9.5707 18.4547 9.5707C16.9097 9.5707 15.3787 10.6097 15.1597 12.9067L14.2577 22.8457C14.9277 21.6157 16.3087 20.7817 17.8807 20.7817ZM17.8807 32.8537C19.1657 32.8537 20.3547 31.9787 20.6557 30.8167C22.3377 30.6797 23.2537 29.4357 23.2537 27.9997C23.2537 26.6467 22.3647 25.5117 21.0247 25.3337C21.1207 23.4477 19.7537 21.9977 17.8807 21.9977C16.1437 21.9977 14.7907 23.2837 14.7907 24.9507C13.2317 25.1837 12.0837 26.4957 12.0837 27.9457C12.0837 29.6137 13.3957 30.8987 15.1597 30.8707C15.3107 31.9927 16.4857 32.8537 17.8807 32.8537Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.81556404546337 32.34765625"
          className={className}
        >
          <path
            d="              M0.6539 8.9819C1.4469 8.4079 2.4169 8.0939 3.4019 8.0939C4.7549 8.0939 6.1219 8.7089 6.9559 10.0349C7.7629 8.7089 9.2259 7.9019 10.7299 7.9019C12.2199 7.9019 13.6829 8.7089 14.5029 10.0349C15.3369 8.7089 16.7039 8.0939 18.0579 8.0939C19.1239 8.0939 20.1769 8.4629 20.9969 9.1329C21.4489 8.5859 21.8039 7.8339 21.8039 6.9179C21.8039 5.0449 20.2589 3.4999 18.3859 3.4999C18.1669 2.2289 17.0459 1.2719 15.7059 1.2719C14.8589 1.2719 14.0789 1.6679 13.5869 2.2699C13.0269 2.0369 12.3159 2.0369 11.6729 2.2149C11.2359 0.8889 10.0739 -0.0001 8.7059 -0.0001C7.2979 -0.0001 6.1359 0.7789 5.8629 1.8179C4.5639 1.4899 3.2239 2.4199 3.2239 4.0329C1.5829 4.0329 0.2019 5.5649 0.2019 7.2319C0.2019 7.9019 0.3659 8.5039 0.6539 8.9819ZM9.0479 31.0219H12.4519V30.6799C11.4539 30.0099 10.8249 28.8609 10.8249 27.5349C10.8249 26.0449 11.7279 24.7049 13.0269 24.0349L14.0789 12.6059C14.2709 10.4319 12.5069 8.9409 10.7299 8.9409C8.9389 8.9409 7.1889 10.4319 7.3799 12.6059ZM5.5069 31.0219H8.3779L6.6969 12.5649C6.4779 10.1719 4.9189 9.1059 3.3609 9.1059C1.4739 9.1059 -0.4131 10.6499 0.0789 13.2069L3.0869 29.0799C3.3329 30.3519 4.0719 31.0219 5.5069 31.0219ZM17.5929 20.6309C18.4409 20.6309 19.2059 20.8629 19.8489 21.2599L21.3799 13.2069C21.8719 10.6499 19.9859 9.1059 18.0989 9.1059C16.5399 9.1059 14.9819 10.1719 14.7629 12.5649L13.8059 22.9689C14.4489 21.5879 15.9109 20.6309 17.5929 20.6309ZM17.5929 32.3479C18.8649 32.3479 20.0399 31.4319 20.2589 30.2699C21.8859 30.2009 22.8159 29.0249 22.8159 27.5899C22.8159 26.2909 21.9409 25.2519 20.7379 25.0879C20.8739 23.1739 19.4929 21.6559 17.5929 21.6559C15.8429 21.6559 14.4899 22.9689 14.5029 24.6369C13.0269 24.8419 11.8509 26.1129 11.8509 27.5349C11.8509 29.2309 13.2449 30.4749 14.9819 30.3379C15.0229 31.4589 16.1849 32.3479 17.5929 32.3479Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
