import { IconProps } from "../../types"

export default function AppIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.796875 26.796875"
          className={className}
        >
          <path
            d="              M24.8557 1.9555C23.3927 0.5055 21.5197 -0.0005 18.3337 -0.0005H8.4627C5.2907 -0.0005 3.4047 0.5055 1.9417 1.9555C0.4927 3.4045 -0.0003 5.2495 -0.0003 8.4625V18.3335C-0.0003 21.5465 0.4927 23.3925 1.9417 24.8415C3.4177 26.2905 5.2907 26.7965 8.4627 26.7965H18.3337C21.5197 26.7965 23.4067 26.2905 24.8557 24.8415C26.3047 23.3785 26.7967 21.5465 26.7967 18.3335V8.4625C26.7967 5.2495 26.3047 3.3905 24.8557 1.9555ZM21.9437 8.0805V18.7165C21.9437 20.1935 21.7517 20.8085 21.2867 21.2735C20.8227 21.7245 20.1937 21.9435 18.7307 21.9435H8.0797C6.6177 21.9435 5.9747 21.7245 5.5097 21.2735C5.0587 20.8085 4.8537 20.1935 4.8537 18.7165V8.0805C4.8537 6.5895 5.0587 5.9885 5.5097 5.5235C5.9747 5.0725 6.6177 4.8535 8.0797 4.8535H18.7307C20.1937 4.8535 20.8227 5.0725 21.2867 5.5235C21.7517 5.9885 21.9437 6.5895 21.9437 8.0805Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.00390625 26.00390625"
          className={className}
        >
          <path
            d="              M24.2267 1.791C22.8047 0.369 20.8767 0 18.1287 0H7.8617C5.1267 0 3.1997 0.369 1.7777 1.791C0.3557 3.213 -0.0003 5.113 -0.0003 7.861V18.129C-0.0003 20.891 0.3417 22.805 1.7777 24.213C3.1997 25.635 5.1267 26.004 7.8747 26.004H18.1287C20.8767 26.004 22.8047 25.635 24.2267 24.213C25.6617 22.791 26.0037 20.891 26.0037 18.129V7.875C26.0037 5.1 25.6617 3.199 24.2267 1.791ZM22.4767 7.492V18.512C22.4767 19.947 22.2847 20.986 21.6427 21.629C20.9997 22.271 19.9477 22.477 18.5117 22.477H7.4927C6.0567 22.477 5.0037 22.271 4.3617 21.629C3.7187 20.986 3.5277 19.947 3.5277 18.512V7.519C3.5277 6.057 3.7187 5.018 4.3617 4.375C5.0037 3.732 6.0707 3.527 7.5197 3.527H18.5117C19.9477 3.527 20.9997 3.732 21.6427 4.375C22.2847 5.018 22.4767 6.057 22.4767 7.492Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.427734375 26.427734375"
          className={className}
        >
          <path
            d="              M24.5687 1.8868C23.1057 0.4508 21.2187 -0.0002 18.2387 -0.0002H8.1757C5.2087 -0.0002 3.3087 0.4508 1.8597 1.8868C0.4237 3.3218 -0.0003 5.1958 -0.0003 8.1898V18.2518C-0.0003 21.2458 0.4237 23.1188 1.8597 24.5548C3.3227 25.9898 5.2087 26.4278 8.1897 26.4278H18.2387C21.2187 26.4278 23.1187 25.9898 24.5687 24.5548C26.0037 23.1058 26.4277 21.2458 26.4277 18.2518V8.1898C26.4277 5.1958 26.0037 3.3088 24.5687 1.8868ZM22.2027 7.8068V18.6208C22.2027 20.0838 21.9977 20.8908 21.4647 21.4508C20.9047 21.9978 20.0707 22.2028 18.6207 22.2028H7.8067C6.3577 22.2028 5.5237 21.9848 4.9627 21.4508C4.4297 20.8908 4.2247 20.0838 4.2247 18.6208V7.8208C4.2247 6.3438 4.4297 5.5368 4.9627 4.9898C5.5237 4.4438 6.3577 4.2378 7.8067 4.2378H18.6207C20.0707 4.2378 20.9047 4.4438 21.4647 4.9898C21.9977 5.5368 22.2027 6.3438 22.2027 7.8068Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.6640625 24.6640625"
          className={className}
        >
          <path
            d="              M23.1327 1.5451C21.8617 0.2731 20.0977 0.0001 17.6227 0.0001H6.9457C4.5667 0.0001 2.8027 0.2871 1.5317 1.5451C0.2737 2.8161 -0.0003 4.5661 -0.0003 6.9451V17.6231C-0.0003 20.1111 0.2597 21.8611 1.5177 23.1191C2.8027 24.3771 4.5527 24.6641 7.0277 24.6641H17.6227C20.0977 24.6641 21.8747 24.3771 23.1327 23.1191C24.4047 21.8481 24.6637 20.1111 24.6637 17.6231V7.0271C24.6637 4.5531 24.4047 2.8031 23.1327 1.5451ZM22.9687 6.6721V17.9921C22.9687 19.6191 22.7227 21.0411 21.8887 21.8751C21.0547 22.7231 19.6057 22.9691 17.9927 22.9691H6.6587C5.0587 22.9691 3.6097 22.7091 2.7617 21.8751C1.9277 21.0411 1.6957 19.6191 1.6957 17.9921V6.7541C1.6957 5.0581 1.9277 3.6091 2.7617 2.7751C3.5957 1.9281 5.0727 1.6951 6.7537 1.6951H17.9927C19.6057 1.6951 21.0547 1.9551 21.8887 2.7891C22.7227 3.6231 22.9687 5.0451 22.9687 6.6721Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.498046875 25.484375"
          className={className}
        >
          <path
            d="              M23.8297 1.6683C22.4217 0.2593 20.4807 0.0003 17.9927 0.0003H7.4647C5.0177 0.0003 3.0627 0.2733 1.6677 1.6683C0.2597 3.0763 -0.0003 5.0043 -0.0003 7.4653V17.9783C-0.0003 20.4803 0.2597 22.4083 1.6547 23.8163C3.0767 25.2113 5.0177 25.4843 7.5057 25.4843H17.9927C20.4807 25.4843 22.4217 25.2113 23.8297 23.8163C25.2387 22.4083 25.4977 20.4803 25.4977 17.9783V7.4923C25.4977 5.0043 25.2387 3.0763 23.8297 1.6683ZM22.8187 7.1233V18.3613C22.8187 19.7833 22.6267 21.0823 21.8747 21.8473C21.1097 22.6133 19.7837 22.8043 18.3747 22.8043H7.1227C5.7147 22.8043 4.3887 22.6133 3.6227 21.8473C2.8577 21.0823 2.6797 19.7833 2.6797 18.3613V7.1503C2.6797 5.7013 2.8577 4.3883 3.6097 3.6233C4.3747 2.8573 5.7147 2.6663 7.1507 2.6663H18.3747C19.7837 2.6663 21.1097 2.8713 21.8747 3.6363C22.6407 4.3883 22.8187 5.7013 22.8187 7.1233Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.2109375 25.2109375"
          className={className}
        >
          <path
            d="              M23.6117 1.6136C22.2167 0.2186 20.2477 -0.0004 17.9097 -0.0004H7.2597C4.9627 -0.0004 2.9937 0.2186 1.5997 1.6136C0.2047 3.0076 -0.0003 4.9626 -0.0003 7.2596V17.9106C-0.0003 20.2476 0.2047 22.2036 1.5997 23.5976C2.9937 24.9926 4.9627 25.2106 7.2867 25.2106H17.9097C20.2477 25.2106 22.2167 24.9926 23.6117 23.5976C25.0057 22.2036 25.2107 20.2476 25.2107 17.9106V7.2876C25.2107 4.9496 25.0057 3.0076 23.6117 1.6136ZM23.0097 6.9176V18.2926C23.0097 19.7016 22.8317 21.1636 21.9977 21.9846C21.1777 22.8186 19.7017 23.0096 18.2927 23.0096H6.9177C5.5097 23.0096 4.0337 22.8186 3.1997 21.9846C2.3787 21.1636 2.2017 19.7016 2.2017 18.2926V6.9586C2.2017 5.5096 2.3787 4.0466 3.1997 3.2126C4.0337 2.3926 5.5237 2.2016 6.9587 2.2016H18.2927C19.7017 2.2016 21.1777 2.3926 21.9977 3.2266C22.8317 4.0466 23.0097 5.5096 23.0097 6.9176Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.716796875 25.716796875"
          className={className}
        >
          <path
            d="              M24.0077 1.7363C22.5857 0.3143 20.6447 0.0003 18.0467 0.0003H7.6427C5.0727 0.0003 3.1177 0.3143 1.7087 1.7363C0.3007 3.1443 -0.0003 5.0583 -0.0003 7.6423V18.0603C-0.0003 20.6723 0.3007 22.5863 1.7087 23.9943C3.1307 25.4023 5.0587 25.7163 7.6697 25.7163H18.0467C20.6447 25.7163 22.5857 25.4023 24.0077 23.9943C25.4157 22.5863 25.7167 20.6723 25.7167 18.0603V7.6703C25.7167 5.0583 25.4157 3.1313 24.0077 1.7363ZM22.6677 7.2873V18.4293C22.6677 19.8653 22.4767 21.0543 21.7797 21.7653C21.0687 22.4763 19.8517 22.6813 18.4297 22.6813H7.2867C5.8657 22.6813 4.6487 22.4763 3.9377 21.7653C3.2267 21.0543 3.0487 19.8653 3.0487 18.4293V7.3143C3.0487 5.8653 3.2267 4.6753 3.9377 3.9653C4.6487 3.2543 5.8657 3.0483 7.3147 3.0483H18.4297C19.8517 3.0483 21.0687 3.2543 21.7797 3.9653C22.4907 4.6753 22.6677 5.8653 22.6677 7.2873Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.939453125 23.92578125"
          className={className}
        >
          <path
            d="              M22.5037 1.436C21.3967 0.342 19.9197 0 17.2407 0H6.5487C4.0467 0 2.5297 0.355 1.4357 1.449C0.3417 2.543 -0.0003 4.033 -0.0003 6.535V17.24C-0.0003 19.92 0.3277 21.41 1.4217 22.49C2.5297 23.584 4.0197 23.926 6.6857 23.926H17.2407C19.9197 23.926 21.4097 23.584 22.5037 22.49C23.5977 21.396 23.9397 19.92 23.9397 17.24V6.686C23.9397 4.006 23.5977 2.516 22.5037 1.436ZM22.9137 6.33V17.596C22.9137 19.482 22.5727 20.877 21.7387 21.725C20.8907 22.586 19.4827 22.914 17.5957 22.914H6.3297C4.4567 22.914 3.0347 22.572 2.1877 21.725C1.3397 20.877 1.0117 19.482 1.0117 17.596V6.467C1.0117 4.457 1.3397 3.035 2.1737 2.188C3.0217 1.326 4.4847 1.012 6.4807 1.012H17.5957C19.4827 1.012 20.8907 1.354 21.7387 2.201C22.5857 3.049 22.9137 4.43 22.9137 6.33Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.556640625 23.5703125"
          className={className}
        >
          <path
            d="              M22.1897 1.3942C21.1637 0.3833 19.8107 0.0003 17.0487 0.0003H6.3297C3.7867 0.0003 2.3927 0.4103 1.3947 1.4082C0.3827 2.4202 -0.0003 3.7602 -0.0003 6.3302V17.0493C-0.0003 19.8383 0.3687 21.1913 1.3807 22.1763C2.3927 23.1743 3.7457 23.5703 6.5077 23.5703H17.0487C19.8107 23.5703 21.1777 23.1743 22.1897 22.1763C23.1877 21.1643 23.5567 19.8383 23.5567 17.0493V6.5083C23.5567 3.7323 23.1877 2.3792 22.1897 1.3942ZM22.8867 6.1663V17.4043C22.8867 19.4413 22.5037 20.7953 21.6697 21.6563C20.8087 22.5313 19.4137 22.9003 17.4047 22.9003H6.1657C4.1427 22.9003 2.7477 22.5043 1.9007 21.6563C1.0387 20.7953 0.6697 19.4413 0.6697 17.4043V6.3432C0.6697 4.1702 1.0387 2.7482 1.8727 1.9002C2.7347 1.0252 4.1837 0.6702 6.3437 0.6702H17.4047C19.4137 0.6702 20.8087 1.0523 21.6697 1.9142C22.5177 2.7752 22.8867 4.1292 22.8867 6.1663Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
