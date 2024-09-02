import { IconProps } from "../../types"

export default function BellIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.845703125 30.54296875"
          className={className}
        >
          <path
            d="              M-0.0005 22.0796C-0.0005 23.9666 1.3125 25.2246 3.2945 25.2246H8.2715C8.3805 27.8086 10.8415 30.5426 14.9165 30.5426C19.0035 30.5426 21.4645 27.8086 21.5745 25.2246H26.5505C28.5335 25.2246 29.8455 23.9666 29.8455 22.0796C29.8455 20.2346 28.7515 18.9216 27.2895 17.8286C26.0445 16.8986 25.8675 15.2716 25.3885 11.9766C24.8285 7.7386 22.8455 4.3616 19.5505 3.1856C18.7715 1.2166 17.0485 -0.0004 14.9165 -0.0004C12.7965 -0.0004 11.0745 1.2166 10.2945 3.1856C6.9995 4.3616 5.0175 7.7386 4.4575 11.9766C3.9785 15.2716 3.8005 16.8986 2.5565 17.8286C1.0935 18.9216 -0.0005 20.2346 -0.0005 22.0796ZM6.0425 20.7406V20.6036C6.8635 20.2476 7.5465 19.8516 8.0395 19.1956C8.7915 18.1836 9.1325 15.2856 9.3655 13.0156C9.7205 9.3786 11.1015 7.7796 12.6875 7.3556C12.9745 7.2876 13.1665 7.1636 13.2485 6.6716C13.4125 5.4416 13.9995 4.7856 14.9165 4.7856C15.8455 4.7856 16.4335 5.4416 16.5975 6.6716C16.6795 7.1636 16.8715 7.2876 17.1585 7.3556C18.7445 7.7796 20.1245 9.3786 20.4805 13.0156C20.7125 15.2856 21.0955 18.1836 21.8065 19.1956C22.2855 19.8516 22.8185 20.2476 23.6525 20.6036V20.7406ZM12.8785 25.2246H16.9665C16.8845 26.3316 16.0375 27.1386 14.9165 27.1386C13.8085 27.1386 12.9605 26.3316 12.8785 25.2246Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.80859375 29.39453125"
          className={className}
        >
          <path
            d="              M-0.0003 21.8614C-0.0003 23.2974 1.0257 24.2674 2.6657 24.2674H8.0387C8.1487 26.8654 10.4177 29.3944 13.9047 29.3944C17.3907 29.3944 19.6597 26.8794 19.7697 24.2674H25.1427C26.7697 24.2674 27.8087 23.2974 27.8087 21.8614C27.8087 20.2614 26.5777 18.9904 25.2517 17.8284C24.1717 16.8984 23.9667 15.1074 23.6797 12.6734C23.3517 7.8614 21.6567 4.4294 18.1977 3.1854C17.5687 1.3124 15.9827 0.0004 13.9047 0.0004C11.8257 0.0004 10.2407 1.3124 9.6117 3.1854C6.1527 4.4294 4.4567 7.8614 4.1287 12.6734C3.8417 15.1074 3.6367 16.8984 2.5567 17.8284C1.2307 18.9904 -0.0003 20.2614 -0.0003 21.8614ZM4.3337 20.9864V20.8364C4.8807 20.4664 5.6327 19.8654 6.2347 19.1274C7.0957 18.0884 7.4917 15.7504 7.6697 13.2894C7.9157 8.4764 9.4887 6.7264 11.4567 6.1934C11.7717 6.1254 11.9627 5.9744 12.0037 5.5504C12.1137 4.2244 12.8107 3.4044 13.9047 3.4044C14.9977 3.4044 15.6957 4.2244 15.8047 5.5504C15.8457 5.9744 16.0367 6.1254 16.3517 6.1934C18.3207 6.7264 19.8927 8.4764 20.1247 13.2894C20.3027 15.7504 20.7267 18.0884 21.5747 19.1274C22.1757 19.8654 22.8457 20.4664 23.3927 20.8364V20.9864ZM11.4157 24.2674H16.3927C16.2967 25.7444 15.2847 26.7284 13.9047 26.7284C12.5237 26.7284 11.5117 25.7444 11.4157 24.2674Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.888671875 29.99609375"
          className={className}
        >
          <path
            d="              M-0.0002 21.9711C-0.0002 23.6521 1.1758 24.7731 2.9938 24.7731H8.1618C8.2718 27.3571 10.6508 29.9961 14.4508 29.9961C18.2388 29.9961 20.6168 27.3571 20.7268 24.7731H25.8948C27.7128 24.7731 28.8888 23.6521 28.8888 21.9711C28.8888 20.2481 27.7268 18.9491 26.3318 17.8281C25.1698 16.8981 24.9788 15.1891 24.5818 12.3051C24.1308 7.7931 22.2848 4.3891 18.9218 3.1851C18.2108 1.2581 16.5428 0.0001 14.4508 0.0001C12.3458 0.0001 10.6778 1.2581 9.9668 3.1851C6.6038 4.3891 4.7578 7.7931 4.3068 12.3051C3.9098 15.1891 3.7188 16.8981 2.5568 17.8281C1.1618 18.9491 -0.0002 20.2481 -0.0002 21.9711ZM5.2368 20.8491V20.7131C5.9338 20.3571 6.6448 19.8511 7.1778 19.1541C7.9848 18.1421 8.3668 15.5041 8.5718 13.1391C8.8728 8.9551 10.3358 7.2731 12.0998 6.8081C12.4138 6.7261 12.6058 6.5901 12.6598 6.1391C12.7968 4.8671 13.4398 4.1291 14.4508 4.1291C15.4488 4.1291 16.0918 4.8671 16.2288 6.1391C16.2828 6.5901 16.4748 6.7261 16.7888 6.8081C18.5528 7.2731 20.0158 8.9551 20.3168 13.1391C20.5218 15.5041 20.9178 18.1421 21.7108 19.1541C22.2308 19.8511 22.8458 20.3571 23.5298 20.7131V20.8491ZM12.1818 24.7731H16.7068C16.6118 26.0581 15.6818 26.9471 14.4508 26.9471C13.2068 26.9471 12.2778 26.0581 12.1818 24.7731Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.416015625 27.78125"
          className={className}
        >
          <path
            d="              M0.0005 21.7927C0.0005 22.5857 0.6015 23.1187 1.5855 23.1187H8.0525C8.1345 25.6757 10.0355 27.7817 12.7015 27.7817C15.3675 27.7817 17.2675 25.6757 17.3495 23.1187H23.8165C24.8005 23.1187 25.4165 22.5857 25.4165 21.7927C25.4165 20.4117 24.0765 19.2087 22.9275 17.9917C21.8205 16.7887 21.7105 14.3417 21.4785 12.1817C21.2595 7.5057 19.8785 4.3067 16.4065 3.1717C16.0095 1.3537 14.6015 -0.0003 12.7015 -0.0003C10.8005 -0.0003 9.3925 1.3537 9.0095 3.1717C5.5235 4.3067 4.1565 7.5057 3.9235 12.1817C3.6915 14.3417 3.5825 16.7887 2.4745 17.9917C1.3265 19.2087 0.0005 20.4117 0.0005 21.7927ZM2.0095 21.5197V21.3557C2.1735 20.8087 3.0895 19.8377 3.8825 18.9907C5.1135 17.6507 5.3455 15.2167 5.5915 12.3597C5.8515 7.2737 7.4235 5.3047 9.8025 4.6617C10.1995 4.5667 10.4175 4.3887 10.4595 4.0057C10.5545 2.5977 11.3755 1.5587 12.7015 1.5587C14.0275 1.5587 14.8475 2.5977 14.9435 4.0057C14.9845 4.3887 15.2035 4.5667 15.5995 4.6617C17.9785 5.3047 19.5505 7.2737 19.8105 12.3597C20.0565 15.2167 20.2895 17.6507 21.5195 18.9907C22.3125 19.8377 23.2285 20.8087 23.3925 21.3557V21.5197ZM9.6935 23.1187H15.7095C15.5995 25.0467 14.3825 26.2777 12.7015 26.2777C11.0195 26.2777 9.8025 25.0467 9.6935 23.1187Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.5234375 28.65625"
          className={className}
        >
          <path
            d="              M0.0003 21.7242C0.0003 22.8732 0.8753 23.6522 2.2833 23.6522H7.9023C8.0253 26.2632 10.1583 28.6562 13.2613 28.6562C16.3653 28.6562 18.4983 26.2772 18.6213 23.6522H24.2403C25.6623 23.6522 26.5233 22.8732 26.5233 21.7242C26.5233 20.2752 25.1973 19.0312 23.9533 17.8282C22.9963 16.8852 22.7633 14.9982 22.5863 13.1252C22.4083 7.9432 20.9043 4.4842 17.3363 3.1852C16.8163 1.3812 15.2993 0.0002 13.2613 0.0002C11.2243 0.0002 9.7073 1.3812 9.1873 3.1852C5.6193 4.4842 4.1153 7.9432 3.9373 13.1252C3.7593 14.9982 3.5413 16.8852 2.5703 17.8282C1.3403 19.0312 0.0003 20.2752 0.0003 21.7242ZM3.2673 21.1502V20.9862C3.6233 20.5902 4.4163 19.8652 5.0863 19.0862C6.0293 18.0062 6.4673 16.0512 6.6033 13.4532C6.7673 7.9022 8.4633 6.0562 10.6773 5.4552C11.0063 5.3732 11.1973 5.2092 11.2243 4.8402C11.2933 3.4452 12.0583 2.5152 13.2613 2.5152C14.4653 2.5152 15.2443 3.4452 15.2993 4.8402C15.3263 5.2092 15.5173 5.3732 15.8593 5.4552C18.0603 6.0562 19.7693 7.9022 19.9203 13.4532C20.0563 16.0512 20.5083 18.0062 21.4373 19.0862C22.1213 19.8652 22.8863 20.5902 23.2283 20.9862V21.1502ZM10.4863 23.6522H16.0373C15.9413 25.3612 14.8203 26.4692 13.2613 26.4692C11.7173 26.4692 10.5953 25.3612 10.4863 23.6522Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.798828125 28.24609375"
          className={className}
        >
          <path
            d="              M-0.0004 21.6421C-0.0004 22.6401 0.7656 23.2971 2.0646 23.2971H7.8336C7.9436 25.9351 10.0076 28.2461 12.8926 28.2461C15.7906 28.2461 17.8556 25.9491 17.9646 23.2971H23.7346C25.0196 23.2971 25.7986 22.6401 25.7986 21.6421C25.7986 20.2751 24.4046 19.0451 23.2286 17.8281C22.3266 16.8851 22.0806 14.9431 21.9706 13.3711C21.8746 7.9841 20.4806 4.5121 16.8436 3.1991C16.3786 1.4081 14.9156 0.0001 12.8926 0.0001C10.8826 0.0001 9.4066 1.4081 8.9556 3.1991C5.3186 4.5121 3.9236 7.9841 3.8286 13.3711C3.7186 14.9431 3.4726 16.8851 2.5706 17.8281C1.3806 19.0451 -0.0004 20.2751 -0.0004 21.6421ZM2.6526 21.2321V21.0681C2.8986 20.6721 3.7186 19.8651 4.4296 19.0721C5.4146 17.9781 5.8786 16.2151 6.0016 13.5491C6.1116 7.5741 7.8886 5.6741 10.2266 5.0311C10.5686 4.9491 10.7596 4.7851 10.7736 4.4301C10.8146 3.0081 11.6346 2.0101 12.8926 2.0101C14.1646 2.0101 14.9706 3.0081 15.0256 4.4301C15.0396 4.7851 15.2166 4.9491 15.5586 5.0311C17.9106 5.6741 19.6876 7.5741 19.7966 13.5491C19.9196 16.2151 20.3846 17.9781 21.3556 19.0721C22.0806 19.8651 22.8866 20.6721 23.1326 21.0681V21.2321ZM9.9666 23.2971H15.8316C15.7226 25.1561 14.5466 26.3181 12.8926 26.3181C11.2516 26.3181 10.0626 25.1561 9.9666 23.2971Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.0703125 28.970703125"
          className={className}
        >
          <path
            d="              M0 21.7933C0 23.0643 0.93 23.9253 2.447 23.9253H7.957C8.08 26.5233 10.268 28.9703 13.535 28.9703C16.803 28.9703 18.99 26.5373 19.113 23.9253H24.623C26.141 23.9253 27.07 23.0643 27.07 21.7933C27.07 20.2753 25.785 19.0173 24.514 17.8283C23.502 16.8983 23.283 15.0523 23.051 12.9333C22.805 7.9163 21.232 4.4703 17.705 3.1993C17.145 1.3533 15.586 0.0003 13.535 0.0003C11.484 0.0003 9.926 1.3533 9.365 3.1993C5.838 4.4703 4.266 7.9163 4.02 12.9333C3.787 15.0523 3.568 16.8983 2.557 17.8283C1.285 19.0173 0 20.2753 0 21.7933ZM3.719 21.0823V20.9313C4.156 20.5493 4.936 19.8653 5.578 19.1133C6.48 18.0473 6.904 15.9273 7.055 13.3843C7.26 8.1623 8.9 6.3433 11.006 5.7833C11.334 5.7013 11.525 5.5373 11.553 5.1543C11.635 3.7873 12.373 2.8983 13.535 2.8983C14.697 2.8983 15.436 3.7873 15.518 5.1543C15.545 5.5373 15.736 5.7013 16.064 5.7833C18.17 6.3433 19.811 8.1623 20.002 13.3843C20.166 15.9273 20.604 18.0473 21.492 19.1133C22.135 19.8653 22.859 20.5493 23.297 20.9313V21.0823ZM10.883 23.9253H16.188C16.092 25.5393 15.012 26.5783 13.535 26.5783C12.059 26.5783 10.979 25.5393 10.883 23.9253Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.91015625 27.166015625"
          className={className}
        >
          <path
            d="              M-0.0003 21.9839C-0.0003 22.5179 0.3827 22.8729 0.9707 22.8729H8.3537C8.4077 25.3339 10.0757 27.1659 12.4547 27.1659C14.8207 27.1659 16.5017 25.3339 16.5567 22.8729H23.9397C24.5277 22.8729 24.9097 22.5179 24.9097 21.9839C24.9097 20.5899 23.6527 19.4279 22.5587 18.2249C21.1777 16.6799 21.2327 13.5489 20.8357 10.6229C20.4527 6.8769 19.0857 4.0469 15.8187 3.1579C15.5317 1.2719 14.2047 -0.0001 12.4547 -0.0001C10.7047 -0.0001 9.3787 1.2719 9.0917 3.1579C5.8247 4.0469 4.4567 6.8769 4.0607 10.6229C3.6777 13.5489 3.7327 16.6799 2.3377 18.2249C1.2577 19.4279 -0.0003 20.5899 -0.0003 21.9839ZM1.1757 21.8889V21.7519C1.2307 20.9999 2.2827 19.8109 3.1447 18.8949C4.7307 17.2399 4.6347 13.9039 5.0727 10.7869C5.5237 6.8909 6.8227 4.8399 9.2417 4.1839C9.7207 4.0469 9.9937 3.8829 10.0487 3.4449C10.2267 2.0779 11.0607 0.9839 12.4547 0.9839C13.8497 0.9839 14.6837 2.0779 14.8617 3.4449C14.9157 3.8829 15.1897 4.0469 15.6547 4.1839C18.0877 4.8399 19.3727 6.8909 19.8247 10.7869C20.2617 13.9039 20.1797 17.2399 21.7517 18.8949C22.6267 19.8109 23.6797 20.9999 23.7347 21.7519V21.8889ZM9.3517 22.8729H15.5447C15.4497 24.9239 14.1777 26.2359 12.4547 26.2359C10.7327 26.2359 9.4607 24.9239 9.3517 22.8729Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.650390625 26.8515625"
          className={className}
        >
          <path
            d="              M0 22.0669C0 22.4769 0.26 22.7499 0.656 22.7499H8.504C8.545 25.1429 10.104 26.8519 12.318 26.8519C14.547 26.8519 16.105 25.1429 16.133 22.7499H23.994C24.377 22.7499 24.65 22.4769 24.65 22.0669C24.65 20.6719 23.434 19.5369 22.367 18.3339C20.836 16.6109 20.986 13.1249 20.508 9.8169C20.029 6.5489 18.676 3.8969 15.518 3.1449C15.285 1.2169 13.986 -0.0001 12.318 -0.0001C10.65 -0.0001 9.365 1.2169 9.133 3.1449C5.975 3.8969 4.621 6.5489 4.143 9.8169C3.664 13.1249 3.801 16.6109 2.283 18.3339C1.217 19.5369 0 20.6719 0 22.0669ZM0.752 22.0669V21.9299C0.738 21.0819 1.859 19.7829 2.775 18.8399C4.539 17.0079 4.279 13.2209 4.813 9.9669C5.359 6.6859 6.521 4.5799 8.955 3.9239C9.475 3.7869 9.762 3.6089 9.844 3.1579C10.049 1.7909 10.883 0.6699 12.318 0.6699C13.754 0.6699 14.602 1.7909 14.807 3.1579C14.875 3.6089 15.176 3.7869 15.682 3.9239C18.129 4.5799 19.291 6.6859 19.838 9.9669C20.371 13.2209 20.111 17.0079 21.875 18.8399C22.777 19.7829 23.898 21.0819 23.898 21.9299V22.0669ZM9.174 22.7499H15.463C15.367 24.8419 14.068 26.2089 12.318 26.2089C10.582 26.2089 9.283 24.8419 9.174 22.7499Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
