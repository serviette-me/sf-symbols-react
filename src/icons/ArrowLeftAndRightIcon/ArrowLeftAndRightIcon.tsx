import { IconProps } from "../../types"

export default function ArrowLeftAndRightIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.51953125 18.94921875"
          className={className}
        >
          <path
            d="              M-0.0003 9.4614C-0.0003 10.1444 0.2737 10.8554 0.7107 11.3064L7.6017 18.1704C8.1077 18.6754 8.7367 18.9494 9.3927 18.9494C10.8147 18.9494 11.7987 17.9234 11.7987 16.5844C11.7987 15.8044 11.4297 15.2444 10.9647 14.7934L9.0647 12.9474L7.6977 11.8394L10.3497 11.9764H18.1697L20.8227 11.8394L19.4547 12.9474L17.5547 14.7934C17.0897 15.2444 16.7207 15.8044 16.7207 16.5844C16.7207 17.9234 17.7047 18.9494 19.1267 18.9494C19.7837 18.9494 20.4117 18.6754 20.9177 18.1704L27.8087 11.3064C28.2457 10.8554 28.5197 10.1444 28.5197 9.4614C28.5197 8.7914 28.2457 8.0524 27.8087 7.6294L20.9177 0.7794C20.4117 0.2734 19.7837 0.0004 19.1267 0.0004C17.7047 0.0004 16.7207 1.0254 16.7207 2.3654C16.7207 3.1444 17.0897 3.7054 17.5547 4.1564L19.4547 5.9884L20.8227 7.0824L18.1697 6.9594H10.3497L7.6977 7.0824L9.0647 5.9884L10.9647 4.1564C11.4297 3.7054 11.7987 3.1444 11.7987 2.3654C11.7987 1.0254 10.8147 0.0004 9.3927 0.0004C8.7367 0.0004 8.1077 0.2734 7.6017 0.7794L0.7107 7.6294C0.2737 8.0524 -0.0003 8.7914 -0.0003 9.4614Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.7265625 17.923828125"
          className={className}
        >
          <path
            d="              M-0.0003 8.9548C-0.0003 9.4608 0.2047 9.9808 0.5607 10.3358L7.6567 17.3358C8.0257 17.7048 8.5177 17.9238 8.9957 17.9238C10.0767 17.9238 10.8007 17.1578 10.8007 16.1328C10.8007 15.5718 10.5547 15.1618 10.2127 14.8198L7.6697 12.3458L5.7017 10.6918L8.6137 10.8148H19.1137L22.0257 10.6918L20.0567 12.3458L17.5137 14.8198C17.1717 15.1618 16.9257 15.5718 16.9257 16.1328C16.9257 17.1578 17.6507 17.9238 18.7307 17.9238C19.2087 17.9238 19.7017 17.7048 20.0707 17.3358L27.1657 10.3358C27.5217 9.9808 27.7267 9.4608 27.7267 8.9548C27.7267 8.4488 27.5217 7.9298 27.1657 7.5738L20.0707 0.5738C19.7017 0.2048 19.2087 -0.0002 18.7307 -0.0002C17.6507 -0.0002 16.9257 0.7658 16.9257 1.7768C16.9257 2.3518 17.1717 2.7618 17.5137 3.1038L20.0567 5.5648L22.0257 7.2188L19.1137 7.0958H8.6137L5.7017 7.2188L7.6697 5.5648L10.2127 3.1038C10.5547 2.7618 10.8007 2.3518 10.8007 1.7768C10.8007 0.7658 10.0767 -0.0002 8.9957 -0.0002C8.5177 -0.0002 8.0257 0.2048 7.6567 0.5738L0.5607 7.5738C0.2047 7.9298 -0.0003 8.4488 -0.0003 8.9548Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.13671875 18.45703125"
          className={className}
        >
          <path
            d="              M-0.0003 9.2283C-0.0003 9.8163 0.2327 10.4453 0.6427 10.8423L7.6287 17.7873C8.0667 18.2243 8.6267 18.4573 9.2017 18.4573C10.4587 18.4573 11.3207 17.5543 11.3207 16.3793C11.3207 15.6953 11.0197 15.2033 10.6097 14.8063L8.4087 12.6603L6.7537 11.2933L9.5297 11.4293H18.6077L21.3827 11.2933L19.7427 12.6603L17.5277 14.8063C17.1307 15.2033 16.8167 15.6953 16.8167 16.3793C16.8167 17.5543 17.6777 18.4573 18.9497 18.4573C19.5097 18.4573 20.0707 18.2243 20.5217 17.7873L27.5077 10.8423C27.9047 10.4453 28.1367 9.8163 28.1367 9.2283C28.1367 8.6273 27.9047 7.9983 27.5077 7.6013L20.5217 0.6833C20.0707 0.2463 19.5097 0.0003 18.9497 0.0003C17.6777 0.0003 16.8167 0.9023 16.8167 2.0923C16.8167 2.7753 17.1307 3.2543 17.5277 3.6503L19.7427 5.7973L21.3827 7.1503L18.6077 7.0273H9.5297L6.7537 7.1503L8.4087 5.7973L10.6097 3.6503C11.0197 3.2543 11.3207 2.7753 11.3207 2.0923C11.3207 0.9023 10.4587 0.0003 9.2017 0.0003C8.6267 0.0003 8.0667 0.2463 7.6287 0.6833L0.6427 7.6013C0.2327 7.9983 -0.0003 8.6273 -0.0003 9.2283Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.33203125 16.556640625"
          className={className}
        >
          <path
            d="              M-0.0003 8.2853C-0.0003 8.5313 0.0957 8.7633 0.3007 8.9683L7.6837 16.2693C7.8617 16.4473 8.1207 16.5563 8.3537 16.5563C8.9007 16.5563 9.2697 16.1743 9.2697 15.6403C9.2697 15.3813 9.1737 15.1623 9.0097 14.9983L5.4827 11.5253L2.8027 9.1053L5.8787 9.2013H20.4527L23.5297 9.1053L20.8637 11.5253L17.3227 14.9983C17.1587 15.1623 17.0767 15.3813 17.0767 15.6403C17.0767 16.1743 17.4317 16.5563 17.9927 16.5563C18.2247 16.5563 18.4847 16.4473 18.6617 16.2693L26.0317 8.9683C26.2367 8.7633 26.3317 8.5313 26.3317 8.2853C26.3317 8.0253 26.2367 7.7933 26.0317 7.5883L18.6617 0.2873C18.4847 0.1092 18.2247 0.0003 17.9927 0.0003C17.4317 0.0003 17.0767 0.3833 17.0767 0.9163C17.0767 1.1762 17.1587 1.3942 17.3227 1.5583L20.8637 5.0313L23.5297 7.4653L20.4527 7.3553H5.8787L2.8027 7.4653L5.4827 5.0313L9.0097 1.5583C9.1737 1.3942 9.2697 1.1762 9.2697 0.9163C9.2697 0.3833 8.9007 0.0003 8.3537 0.0003C8.1207 0.0003 7.8617 0.1092 7.6837 0.2873L0.3007 7.5883C0.0957 7.7933 -0.0003 8.0253 -0.0003 8.2853Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.220703125 17.267578125"
          className={className}
        >
          <path
            d="              M-0.0003 8.6267C-0.0003 9.0237 0.1507 9.4197 0.4647 9.7067L7.6837 16.8167C7.9707 17.1037 8.3807 17.2677 8.7367 17.2677C9.5977 17.2677 10.1587 16.6657 10.1587 15.8457C10.1587 15.4217 10.0077 15.1077 9.7347 14.8477L6.7677 11.9627L4.4297 9.9527L7.5057 10.0757H19.7147L22.7907 9.9527L20.4397 11.9627L17.4727 14.8477C17.2127 15.1077 17.0487 15.4217 17.0487 15.8457C17.0487 16.6657 17.6227 17.2677 18.4847 17.2677C18.8397 17.2677 19.2497 17.1037 19.5237 16.8167L26.7557 9.7067C27.0567 9.4197 27.2207 9.0237 27.2207 8.6267C27.2207 8.2307 27.0567 7.8477 26.7557 7.5467L19.5237 0.4507C19.2497 0.1637 18.8397 -0.0003 18.4847 -0.0003C17.6227 -0.0003 17.0487 0.6017 17.0487 1.4217C17.0487 1.8457 17.2127 2.1597 17.4727 2.4197L20.4397 5.3047L22.7907 7.3147L19.7147 7.1777H7.5057L4.4297 7.3147L6.7677 5.3047L9.7347 2.4197C10.0077 2.1597 10.1587 1.8457 10.1587 1.4217C10.1587 0.6017 9.5977 -0.0003 8.7367 -0.0003C8.3807 -0.0003 7.9707 0.1637 7.6837 0.4507L0.4647 7.5467C0.1507 7.8477 -0.0003 8.2307 -0.0003 8.6267Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.93359375 16.884765625"
          className={className}
        >
          <path
            d="              M-0.0003 8.4493C-0.0003 8.7773 0.1367 9.0913 0.4097 9.3513L7.7107 16.5153C7.9437 16.7483 8.2987 16.8843 8.5997 16.8843C9.3247 16.8843 9.8027 16.3923 9.8027 15.6813C9.8027 15.3263 9.6937 15.0663 9.4747 14.8473L6.2617 11.7443L3.7047 9.5293L6.8767 9.6663H20.0427L23.2147 9.5293L20.6587 11.7443L17.4587 14.8473C17.2407 15.0663 17.1307 15.3263 17.1307 15.6813C17.1307 16.3923 17.6097 16.8843 18.3337 16.8843C18.6347 16.8843 18.9907 16.7483 19.2227 16.5153L26.5237 9.3513C26.7967 9.0913 26.9337 8.7773 26.9337 8.4493C26.9337 8.1073 26.7967 7.7933 26.5237 7.5333L19.2227 0.3693C18.9907 0.1363 18.6347 0.0003 18.3337 0.0003C17.6097 0.0003 17.1307 0.4923 17.1307 1.2033C17.1307 1.5583 17.2407 1.8183 17.4587 2.0373L20.6587 5.1543L23.2147 7.3553L20.0427 7.2183H6.8767L3.7047 7.3553L6.2617 5.1543L9.4747 2.0373C9.6937 1.8183 9.8027 1.5583 9.8027 1.2033C9.8027 0.4923 9.3247 0.0003 8.5997 0.0003C8.2987 0.0003 7.9437 0.1363 7.7107 0.3693L0.4097 7.5333C0.1367 7.7933 -0.0003 8.1073 -0.0003 8.4493Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.439453125 17.541015625"
          className={className}
        >
          <path
            d="              M-0.0003 8.7634C-0.0003 9.2144 0.1777 9.6524 0.5057 9.9664L7.6697 17.0354C7.9977 17.3634 8.4357 17.5414 8.8457 17.5414C9.8027 17.5414 10.4317 16.8714 10.4317 15.9684C10.4317 15.4764 10.2407 15.1214 9.9397 14.8344L7.1637 12.1134L4.9767 10.2674L7.9847 10.3904H19.4547L22.4627 10.2674L20.2757 12.1134L17.4867 14.8344C17.1997 15.1214 16.9937 15.4764 16.9937 15.9684C16.9937 16.8714 17.6367 17.5414 18.5937 17.5414C19.0037 17.5414 19.4417 17.3634 19.7557 17.0354L26.9337 9.9664C27.2617 9.6524 27.4397 9.2144 27.4397 8.7634C27.4397 8.3264 27.2617 7.8754 26.9337 7.5604L19.7557 0.5054C19.4417 0.1774 19.0037 0.0004 18.5937 0.0004C17.6367 0.0004 16.9937 0.6564 16.9937 1.5724C16.9937 2.0644 17.1997 2.4194 17.4867 2.7074L20.2757 5.4144L22.4627 7.2734L19.4547 7.1364H7.9847L4.9767 7.2734L7.1637 5.4144L9.9397 2.7074C10.2407 2.4194 10.4317 2.0644 10.4317 1.5724C10.4317 0.6564 9.8027 0.0004 8.8457 0.0004C8.4357 0.0004 7.9977 0.1774 7.6697 0.5054L0.5057 7.5604C0.1777 7.8754 -0.0003 8.3264 -0.0003 8.7634Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.552734375 16.091796875"
          className={className}
        >
          <path
            d="              M-0.0003 8.0528C-0.0003 8.2028 0.0547 8.3258 0.1637 8.4358L7.6427 15.9278C7.7517 16.0368 7.8747 16.0918 8.0257 16.0918C8.3397 16.0918 8.5587 15.8598 8.5587 15.5718C8.5587 15.4218 8.5037 15.2848 8.4217 15.1898L4.4297 11.2378L1.6137 8.5178L4.5667 8.5718H20.9867L23.9397 8.5178L21.1227 11.2378L17.1307 15.1898C17.0487 15.2848 16.9937 15.4218 16.9937 15.5718C16.9937 15.8598 17.2127 16.0918 17.5277 16.0918C17.6777 16.0918 17.8007 16.0368 17.9097 15.9278L25.3887 8.4358C25.4977 8.3258 25.5527 8.2028 25.5527 8.0528C25.5527 7.8888 25.4977 7.7658 25.3887 7.6558L17.9097 0.1638C17.8007 0.0548 17.6777 -0.0002 17.5277 -0.0002C17.2127 -0.0002 16.9937 0.2328 16.9937 0.5198C16.9937 0.6698 17.0487 0.8068 17.1307 0.9028L21.1227 4.8538L23.9397 7.5878L20.9867 7.5328H4.5667L1.6137 7.5878L4.4297 4.8538L8.4217 0.9028C8.5037 0.8068 8.5587 0.6698 8.5587 0.5198C8.5587 0.2328 8.3397 -0.0002 8.0257 -0.0002C7.8747 -0.0002 7.7517 0.0548 7.6427 0.1638L0.1637 7.6558C0.0547 7.7658 -0.0003 7.8888 -0.0003 8.0528Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.142578125 15.859375"
          className={className}
        >
          <path
            d="              M-0.0003 7.9298C-0.0003 8.0258 0.0277 8.0938 0.0957 8.1618L7.6287 15.7498C7.6977 15.8188 7.7517 15.8598 7.8617 15.8598C8.0527 15.8598 8.1897 15.7088 8.1897 15.5448C8.1897 15.4358 8.1617 15.3398 8.1077 15.2848L3.8967 11.0738L0.9977 8.2028L3.8827 8.2438H21.2597L24.1587 8.2028L21.2457 11.0738L17.0347 15.2848C16.9937 15.3398 16.9527 15.4358 16.9527 15.5448C16.9527 15.7088 17.0897 15.8598 17.2947 15.8598C17.3907 15.8598 17.4587 15.8188 17.5277 15.7498L25.0467 8.1618C25.1157 8.0938 25.1427 8.0258 25.1427 7.9298C25.1427 7.8208 25.1157 7.7518 25.0467 7.6968L17.5277 0.0958C17.4587 0.0278 17.3907 -0.0002 17.2947 -0.0002C17.0897 -0.0002 16.9527 0.1508 16.9527 0.3148C16.9527 0.4098 16.9937 0.5058 17.0347 0.5608L21.2457 4.7718L24.1587 7.6428L21.2597 7.6148H3.8827L0.9977 7.6428L3.8967 4.7718L8.1077 0.5608C8.1617 0.5058 8.1897 0.4098 8.1897 0.3148C8.1897 0.1508 8.0527 -0.0002 7.8617 -0.0002C7.7517 -0.0002 7.6977 0.0278 7.6287 0.0958L0.0957 7.6968C0.0277 7.7518 -0.0003 7.8208 -0.0003 7.9298Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
