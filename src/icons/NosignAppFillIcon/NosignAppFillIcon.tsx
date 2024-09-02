import { IconProps } from "../../types"

export default function NosignAppFillIconIcon({
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
            d="              M24.8557 1.9555C23.3927 0.5055 21.5197 -0.0005 18.3337 -0.0005H8.4627C5.2907 -0.0005 3.4047 0.5055 1.9417 1.9555C0.4927 3.4045 -0.0003 5.2495 -0.0003 8.4625V18.3335C-0.0003 21.5465 0.4927 23.3925 1.9417 24.8415C3.4177 26.2905 5.2907 26.7965 8.4627 26.7965H18.3337C21.5197 26.7965 23.4067 26.2905 24.8557 24.8415C26.3047 23.3785 26.7967 21.5465 26.7967 18.3335V8.4625C26.7967 5.2495 26.3047 3.3905 24.8557 1.9555ZM13.4117 20.6305C9.4607 20.6305 6.1797 17.3495 6.1797 13.3985C6.1797 9.4335 9.4477 6.1655 13.4117 6.1655C17.4047 6.1655 20.6307 9.4065 20.6307 13.3985C20.6307 17.3635 17.3767 20.6305 13.4117 20.6305ZM12.3187 9.9395L16.8707 14.4645C16.9807 14.1365 17.0627 13.7675 17.0627 13.3985C17.0627 11.4565 15.3537 9.7485 13.4117 9.7485C13.0297 9.7485 12.6597 9.8165 12.3187 9.9395ZM9.7617 13.3985C9.7617 15.3395 11.4567 17.0485 13.4117 17.0485C13.8087 17.0485 14.1917 16.9805 14.5467 16.8435L9.9667 12.2635C9.8297 12.6195 9.7617 13.0015 9.7617 13.3985Z"
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
            d="              M24.2267 1.791C22.8047 0.369 20.8767 0 18.1287 0H7.8617C5.1267 0 3.1997 0.369 1.7777 1.791C0.3557 3.213 -0.0003 5.113 -0.0003 7.861V18.129C-0.0003 20.891 0.3417 22.805 1.7777 24.213C3.1997 25.635 5.1267 26.004 7.8747 26.004H18.1287C20.8767 26.004 22.8047 25.635 24.2267 24.213C25.6617 22.791 26.0037 20.891 26.0037 18.129V7.875C26.0037 5.1 25.6617 3.199 24.2267 1.791ZM13.0017 20.398C8.9687 20.398 5.6057 17.035 5.6057 13.016C5.6057 8.969 8.9547 5.619 13.0017 5.619C17.0487 5.619 20.3847 8.955 20.3847 13.016C20.3847 17.049 17.0347 20.398 13.0017 20.398ZM10.9377 9.01L16.9937 15.053C17.3357 14.451 17.5547 13.754 17.5547 13.016C17.5547 10.555 15.4497 8.435 13.0017 8.435C12.2497 8.435 11.5387 8.654 10.9377 9.01ZM8.4357 13.016C8.4357 15.463 10.5407 17.582 13.0017 17.582C13.7537 17.582 14.4647 17.363 15.0667 16.994L9.0097 10.924C8.6547 11.539 8.4357 12.25 8.4357 13.016Z"
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
            d="              M24.5687 1.8868C23.1057 0.4508 21.2187 -0.0002 18.2387 -0.0002H8.1757C5.2087 -0.0002 3.3087 0.4508 1.8597 1.8868C0.4237 3.3218 -0.0003 5.1958 -0.0003 8.1898V18.2518C-0.0003 21.2458 0.4237 23.1188 1.8597 24.5548C3.3227 25.9898 5.2087 26.4278 8.1897 26.4278H18.2387C21.2187 26.4278 23.1187 25.9898 24.5687 24.5548C26.0037 23.1058 26.4277 21.2458 26.4277 18.2518V8.1898C26.4277 5.1958 26.0037 3.3088 24.5687 1.8868ZM13.2067 20.5348C9.2287 20.5348 5.9067 17.2128 5.9067 13.2208C5.9067 9.2288 9.2147 5.9198 13.2067 5.9198C17.2267 5.9198 20.5217 9.2008 20.5217 13.2208C20.5217 17.2268 17.2127 20.5348 13.2067 20.5348ZM11.6757 9.5158L16.9257 14.7518C17.1587 14.2868 17.2947 13.7678 17.2947 13.2208C17.2947 11.0328 15.4087 9.1468 13.2067 9.1468C12.6597 9.1468 12.1267 9.2828 11.6757 9.5158ZM9.1327 13.2208C9.1327 15.4078 11.0197 17.3088 13.2067 17.3088C13.7817 17.3088 14.3147 17.1718 14.7927 16.9258L9.5157 11.6488C9.2697 12.1128 9.1327 12.6598 9.1327 13.2208Z"
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
            d="              M23.1327 1.5451C21.8617 0.2731 20.0977 0.0001 17.6227 0.0001H6.9457C4.5667 0.0001 2.8027 0.2871 1.5317 1.5451C0.2737 2.8161 -0.0003 4.5661 -0.0003 6.9451V17.6231C-0.0003 20.1111 0.2597 21.8611 1.5177 23.1191C2.8027 24.3771 4.5527 24.6641 7.0277 24.6641H17.6227C20.0977 24.6641 21.8747 24.3771 23.1327 23.1191C24.4047 21.8481 24.6637 20.1111 24.6637 17.6231V7.0271C24.6637 4.5531 24.4047 2.8031 23.1327 1.5451ZM12.3187 19.7831C8.2847 19.7831 4.8807 16.3791 4.8807 12.3461C4.8807 8.2991 8.2717 4.8941 12.3187 4.8941C16.3517 4.8941 19.7557 8.2991 19.7557 12.3461C19.7557 16.3921 16.3787 19.7831 12.3187 19.7831ZM8.8457 7.7111L16.9527 15.8181C17.6917 14.8481 18.1427 13.6441 18.1427 12.3461C18.1427 9.1741 15.4907 6.5081 12.3187 6.5081C11.0197 6.5081 9.8027 6.9591 8.8457 7.7111ZM6.4937 12.3461C6.4937 15.5171 9.1467 18.1831 12.3187 18.1831C13.6177 18.1831 14.8337 17.7191 15.7907 16.9801L7.6837 8.8731C6.9587 9.8441 6.4937 11.0471 6.4937 12.3461Z"
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
            d="              M23.8297 1.6683C22.4217 0.2593 20.4807 0.0003 17.9927 0.0003H7.4647C5.0177 0.0003 3.0627 0.2733 1.6677 1.6683C0.2597 3.0763 -0.0003 5.0043 -0.0003 7.4653V17.9783C-0.0003 20.4803 0.2597 22.4083 1.6547 23.8163C3.0767 25.2113 5.0177 25.4843 7.5057 25.4843H17.9927C20.4807 25.4843 22.4217 25.2113 23.8297 23.8163C25.2387 22.4083 25.4977 20.4803 25.4977 17.9783V7.4923C25.4977 5.0043 25.2387 3.0763 23.8297 1.6683ZM12.7287 20.2483C8.6547 20.2483 5.2367 16.8303 5.2367 12.7563C5.2367 8.6683 8.6407 5.2633 12.7287 5.2633C16.8167 5.2633 20.2207 8.6683 20.2207 12.7563C20.2207 16.8433 16.8167 20.2483 12.7287 20.2483ZM10.0627 8.4083L17.0767 15.4223C17.5687 14.6563 17.8687 13.7263 17.8687 12.7563C17.8687 9.9673 15.5177 7.6013 12.7287 7.6013C11.7437 7.6013 10.8277 7.9023 10.0627 8.4083ZM7.5877 12.7563C7.5877 15.5453 9.9397 17.9103 12.7287 17.9103C13.7127 17.9103 14.6427 17.5953 15.4087 17.0903L8.3947 10.0763C7.9027 10.8423 7.5877 11.7713 7.5877 12.7563Z"
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
            d="              M23.6117 1.6136C22.2167 0.2186 20.2477 -0.0004 17.9097 -0.0004H7.2597C4.9627 -0.0004 2.9937 0.2186 1.5997 1.6136C0.2047 3.0076 -0.0003 4.9626 -0.0003 7.2596V17.9106C-0.0003 20.2476 0.2047 22.2036 1.5997 23.5976C2.9937 24.9926 4.9627 25.2106 7.2867 25.2106H17.9097C20.2477 25.2106 22.2167 24.9926 23.6117 23.5976C25.0057 22.2036 25.2107 20.2476 25.2107 17.9106V7.2876C25.2107 4.9496 25.0057 3.0076 23.6117 1.6136ZM12.5777 20.1796C8.4907 20.1796 5.0317 16.7206 5.0317 12.6196C5.0317 8.5036 8.4627 5.0586 12.5777 5.0586C16.6797 5.0586 20.1387 8.5176 20.1387 12.6196C20.1387 16.7346 16.7067 20.1796 12.5777 20.1796ZM9.5567 8.0936L17.1177 15.6406C17.6917 14.7656 18.0607 13.7266 18.0607 12.6196C18.0607 9.6386 15.5587 7.1366 12.5777 7.1366C11.4707 7.1366 10.4317 7.4926 9.5567 8.0936ZM7.1097 12.6196C7.1097 15.5996 9.6117 18.1016 12.5777 18.1016C13.6997 18.1016 14.7387 17.7466 15.5997 17.1446L8.0527 9.5976C7.4787 10.4726 7.1097 11.5116 7.1097 12.6196Z"
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
            d="              M24.0077 1.7363C22.5857 0.3143 20.6447 0.0003 18.0467 0.0003H7.6427C5.0727 0.0003 3.1177 0.3143 1.7087 1.7363C0.3007 3.1443 -0.0003 5.0583 -0.0003 7.6423V18.0603C-0.0003 20.6723 0.3007 22.5863 1.7087 23.9943C3.1307 25.4023 5.0587 25.7163 7.6697 25.7163H18.0467C20.6447 25.7163 22.5857 25.4023 24.0077 23.9943C25.4157 22.5863 25.7167 20.6723 25.7167 18.0603V7.6703C25.7167 5.0583 25.4157 3.1313 24.0077 1.7363ZM12.8517 20.3303C8.7907 20.3303 5.4007 16.9253 5.4007 12.8793C5.4007 8.8043 8.7777 5.4273 12.8517 5.4273C16.9117 5.4273 20.2887 8.8043 20.2887 12.8793C20.2887 16.9393 16.9117 20.3303 12.8517 20.3303ZM10.4317 8.6813L17.0347 15.2713C17.4727 14.5743 17.7327 13.7543 17.7327 12.8793C17.7327 10.2263 15.4907 7.9703 12.8517 7.9703C11.9627 7.9703 11.1287 8.2443 10.4317 8.6813ZM7.9567 12.8793C7.9567 15.5173 10.1997 17.7733 12.8517 17.7733C13.7267 17.7733 14.5607 17.5133 15.2717 17.0623L8.6547 10.4593C8.2167 11.1563 7.9567 11.9903 7.9567 12.8793Z"
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
            d="              M22.5037 1.436C21.3967 0.342 19.9197 0 17.2407 0H6.5487C4.0467 0 2.5297 0.355 1.4357 1.449C0.3417 2.543 -0.0003 4.033 -0.0003 6.535V17.24C-0.0003 19.92 0.3277 21.41 1.4217 22.49C2.5297 23.584 4.0197 23.926 6.6857 23.926H17.2407C19.9197 23.926 21.4097 23.584 22.5037 22.49C23.5977 21.396 23.9397 19.92 23.9397 17.24V6.686C23.9397 4.006 23.5977 2.516 22.5037 1.436ZM11.9767 19.277C8.0257 19.277 4.6757 15.928 4.6757 11.977C4.6757 8.012 7.9977 4.676 11.9767 4.676C15.9137 4.676 19.2637 8.012 19.2637 11.977C19.2637 15.928 15.9417 19.277 11.9767 19.277ZM7.8887 7.205L16.7347 16.037C17.6777 14.943 18.2657 13.521 18.2657 11.977C18.2657 8.531 15.4087 5.674 11.9767 5.674C10.4177 5.674 8.9827 6.262 7.8887 7.205ZM5.6737 11.977C5.6737 15.408 8.5317 18.266 11.9767 18.266C13.5077 18.266 14.9437 17.691 16.0367 16.734L7.2047 7.902C6.2617 9.01 5.6737 10.418 5.6737 11.977Z"
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
            d="              M22.1897 1.3942C21.1637 0.3833 19.8107 0.0003 17.0487 0.0003H6.3297C3.7867 0.0003 2.3927 0.4103 1.3947 1.4082C0.3827 2.4202 -0.0003 3.7602 -0.0003 6.3302V17.0493C-0.0003 19.8383 0.3687 21.1913 1.3807 22.1763C2.3927 23.1743 3.7457 23.5703 6.5077 23.5703H17.0487C19.8107 23.5703 21.1777 23.1743 22.1897 22.1763C23.1877 21.1643 23.5567 19.8383 23.5567 17.0493V6.5083C23.5567 3.7323 23.1877 2.3792 22.1897 1.3942ZM11.7847 19.0173C7.8887 19.0173 4.5667 15.7093 4.5667 11.7993C4.5667 7.8753 7.8617 4.5663 11.7847 4.5663C15.6957 4.5663 19.0037 7.8753 19.0037 11.7993C19.0037 15.7093 15.7087 19.0173 11.7847 19.0173ZM7.3967 6.9593L16.6247 16.1743C17.6637 14.9983 18.3207 13.4673 18.3207 11.7993C18.3207 8.2173 15.3677 5.2503 11.7847 5.2503C10.1037 5.2503 8.5587 5.9063 7.3967 6.9593ZM5.2637 11.7993C5.2637 15.3673 8.2167 18.3343 11.7847 18.3343C13.4527 18.3343 14.9977 17.6773 16.1597 16.6253L6.9457 7.4103C5.9197 8.5863 5.2637 10.1173 5.2637 11.7993Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}