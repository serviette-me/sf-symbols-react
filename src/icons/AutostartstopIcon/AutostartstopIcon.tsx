import { IconProps } from "../../types"

export default function AutostartstopIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.873046875 28.916139091619897"
          className={className}
        >
          <path
            d="              M-0.0003 14.9298C-0.0003 18.5798 1.6957 23.0368 4.1837 25.2518C5.4827 26.4418 6.9177 26.4688 7.8617 25.4978C8.9277 24.4048 8.5997 22.9138 7.6017 21.8068C5.8377 19.8648 4.8667 17.6098 4.8667 14.9298C4.8667 9.3648 9.3657 4.8668 14.9297 4.8668C20.4937 4.8668 25.0057 9.3648 25.0057 14.9298C24.9917 17.5688 24.0487 19.7968 22.3397 21.7108L21.5607 21.0138C20.6987 20.2208 19.7417 20.7678 19.6597 21.7518L19.1957 27.9178C19.1547 28.5878 19.5777 28.9978 20.2617 28.9028L26.8927 28.0278C27.9587 27.8908 28.2457 27.0298 27.3297 26.2088L25.9767 24.9788C28.3007 22.6958 29.8727 18.4438 29.8727 14.9298C29.8727 6.6988 23.1597 -0.0002 14.9297 -0.0002C6.7127 -0.0002 -0.0003 6.6988 -0.0003 14.9298ZM11.1977 20.1658C12.3317 20.1658 13.0297 19.5098 13.2887 18.2108L13.4257 17.6368H16.4477L16.5837 18.2108C16.8437 19.5098 17.5407 20.1658 18.6757 20.1658C19.9887 20.1658 20.7537 19.4138 20.7537 18.1558C20.7537 17.8278 20.6717 17.3628 20.4667 16.7208L18.4567 10.4868C17.8557 8.5588 16.7067 7.6698 14.8887 7.6698C13.1247 7.6698 12.0317 8.5448 11.4157 10.4868L9.4067 16.7208C9.2007 17.3628 9.1187 17.8278 9.1187 18.1558C9.1187 19.4138 9.8707 20.1658 11.1977 20.1658ZM14.0957 14.6288L14.8617 11.2518H15.0117L15.7637 14.6288Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.875 28.669327308584563"
          className={className}
        >
          <path
            d="              M-0.0003 14.4376C-0.0003 18.5666 2.0237 22.8316 5.0037 25.2386C5.9607 26.0586 7.0547 26.0036 7.6977 25.2386C8.3947 24.4046 8.1487 23.3376 7.3687 22.5726C5.0317 20.5626 3.6097 17.7186 3.5957 14.4376C3.5817 8.4216 8.4357 3.5956 14.4377 3.5956C20.4527 3.5956 25.2927 8.4216 25.2797 14.4376C25.2797 17.5686 23.9807 20.2886 21.8337 22.2856L20.8497 21.3286C20.0837 20.5766 19.2777 20.9996 19.1407 21.9436L18.3887 27.6036C18.2797 28.3146 18.7307 28.7516 19.4687 28.6566L25.4027 27.8496C26.4007 27.6996 26.7007 26.9606 25.8947 26.1956L24.4177 24.7596C27.0977 22.2986 28.8747 18.3066 28.8747 14.4376C28.8747 6.5076 22.3667 -0.0004 14.4377 -0.0004C6.5217 -0.0004 -0.0003 6.5076 -0.0003 14.4376ZM10.3227 19.8516C11.1427 19.8516 11.6617 19.4136 11.8947 18.4436L12.4687 16.7066H16.4197L16.9807 18.4436C17.2267 19.4136 17.7457 19.8516 18.5527 19.8516C19.5237 19.8516 20.0977 19.2906 20.0977 18.3746C20.0977 18.1156 20.0297 17.7736 19.8787 17.3086L16.9667 9.0236C16.5297 7.7106 15.6957 7.0816 14.4097 7.0816C13.1527 7.0816 12.3597 7.7106 11.9077 9.0236L8.9957 17.3086C8.8457 17.7736 8.7777 18.1156 8.7777 18.3746C8.7777 19.2906 9.3517 19.8516 10.3227 19.8516ZM13.0707 14.3696L14.3687 10.0356H14.5057L15.8047 14.3696Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.408203125 28.792729340576436"
          className={className}
        >
          <path
            d="              M-0.0003 14.6974C-0.0003 18.5804 1.8457 22.9414 4.5667 25.2524C5.7147 26.2634 6.9867 26.2504 7.7797 25.3754C8.6817 24.4044 8.3947 23.1194 7.4917 22.1754C5.4547 20.1934 4.2657 17.6644 4.2657 14.6974C4.2657 8.9144 8.9277 4.2654 14.6977 4.2654C20.4807 4.2654 25.1427 8.9144 25.1287 14.6974C25.1287 17.5684 24.0217 20.0294 22.1077 21.9704L21.2327 21.1644C20.3987 20.3984 19.5237 20.8774 19.4137 21.8474L18.8127 27.7674C18.7437 28.4514 19.1817 28.8754 19.8787 28.7794L26.1957 27.9454C27.2207 27.7954 27.5217 26.9884 26.6597 26.1954L25.2387 24.8824C27.7407 22.5044 29.4077 18.3754 29.4077 14.6974C29.4077 6.6174 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6174 -0.0003 14.6974ZM10.7867 20.0154C11.7717 20.0154 12.3727 19.4684 12.6327 18.3204L12.9747 17.1994H16.4337L16.7757 18.3204C17.0217 19.4684 17.6367 20.0154 18.6207 20.0154C19.7697 20.0154 20.4397 19.3594 20.4397 18.2524C20.4397 17.9644 20.3707 17.5544 20.1937 16.9944L17.7597 9.8024C17.2267 8.1624 16.2287 7.3824 14.6567 7.3824C13.1387 7.3824 12.1817 8.1484 11.6487 9.8024L9.2147 16.9944C9.0367 17.5544 8.9547 17.9644 8.9547 18.2524C8.9547 19.3594 9.6247 20.0154 10.7867 20.0154ZM13.6167 14.5054L14.6287 10.6774H14.7797L15.7907 14.5054Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.42578125 27.836833061129965"
          className={className}
        >
          <path
            d="              M-0.0003 13.713C-0.0003 18.416 2.5017 22.504 6.1247 25.061C6.5897 25.416 7.1507 25.293 7.4097 24.869C7.6697 24.432 7.5327 23.939 7.1097 23.625C3.9097 21.479 1.7777 17.869 1.7777 13.713C1.7497 7.096 7.0957 1.764 13.7127 1.764C20.3297 1.764 25.6757 7.096 25.6617 13.713C25.6487 17.418 23.9527 20.713 21.3007 22.9L19.9197 21.438C19.3727 20.863 18.8127 21.123 18.6617 21.861L17.6097 26.879C17.4867 27.535 17.8557 27.918 18.5257 27.822L23.6387 27.111C24.4457 26.988 24.6777 26.455 24.1307 25.867L22.4907 24.145C25.4567 21.574 27.4257 17.883 27.4257 13.713C27.4257 6.193 21.2187 0 13.7127 0C6.2067 0 -0.0003 6.193 -0.0003 13.713ZM9.2287 19.318C9.6117 19.318 9.8707 19.141 10.0487 18.635L11.1837 15.449H16.2417L17.3767 18.635C17.5407 19.127 17.8007 19.318 18.2107 19.318C18.6617 19.318 18.9907 19.004 18.9907 18.58C18.9907 18.416 18.9487 18.266 18.8667 18.047L14.8747 7.369C14.6697 6.822 14.2737 6.549 13.6987 6.549C13.1387 6.549 12.7417 6.822 12.5367 7.369L8.5447 18.047C8.4627 18.266 8.4217 18.416 8.4217 18.58C8.4217 19.018 8.7367 19.318 9.2287 19.318ZM11.6347 14.137L13.6447 8.477H13.7677L15.7907 14.137Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.24609375 28.50844338559928"
          className={className}
        >
          <path
            d="              M-0.0003 14.1231C-0.0003 18.5531 2.2287 22.6951 5.5367 25.2241C6.2617 25.8261 7.1507 25.7031 7.5877 25.0741C8.0667 24.4181 7.8617 23.6111 7.2187 23.0641C4.5117 21.0141 2.7887 17.8011 2.7757 14.1231C2.7617 7.8341 7.8337 2.7751 14.1227 2.7751C20.4117 2.7751 25.4847 7.8341 25.4707 14.1231C25.4567 17.5681 23.9397 20.6031 21.5197 22.6681L20.3987 21.5331C19.6877 20.8081 18.9767 21.1641 18.8127 22.0661L17.8687 27.3981C17.7327 28.1501 18.1837 28.6011 18.9487 28.4921L24.4457 27.7261C25.4027 27.5901 25.7027 26.9061 24.9787 26.1821L23.4477 24.6231C26.3457 22.0661 28.2457 18.2111 28.2457 14.1231C28.2457 6.3851 21.8477 0.0001 14.1227 0.0001C6.3987 0.0001 -0.0003 6.3851 -0.0003 14.1231ZM9.7617 19.6601C10.3767 19.6601 10.7867 19.3461 11.0057 18.5941L11.8397 16.1051H16.3927L17.2407 18.5941C17.4587 19.3461 17.8687 19.6601 18.4847 19.6601C19.2227 19.6601 19.6877 19.2091 19.6877 18.5251C19.6877 18.2931 19.6327 18.0471 19.5097 17.6911L16.0097 8.0941C15.6817 7.1641 15.0387 6.7131 14.1097 6.7131C13.1797 6.7131 12.5647 7.1641 12.2367 8.0941L8.7367 17.6911C8.6137 18.0471 8.5587 18.2931 8.5587 18.5121C8.5587 19.2091 9.0237 19.6601 9.7617 19.6601ZM12.4137 14.2191L14.0547 9.2691H14.1917L15.8317 14.2191Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.890625 28.41235399963779"
          className={className}
        >
          <path
            d="              M-0.0003 13.9454C-0.0003 18.5524 2.3517 22.6274 5.8377 25.2244C6.4397 25.6894 7.1917 25.5394 7.5327 24.9784C7.8747 24.4184 7.6977 23.7614 7.1367 23.3514C4.2247 21.2594 2.3377 17.8414 2.3237 13.9454C2.2967 7.4924 7.4917 2.3244 13.9457 2.3244C20.3987 2.3244 25.5937 7.4924 25.5667 13.9454C25.5527 17.5684 23.9117 20.7814 21.3417 22.9004L20.1527 21.6564C19.4687 20.9454 18.8127 21.2464 18.6347 22.1344L17.5687 27.2754C17.4177 28.0414 17.8687 28.5054 18.6617 28.3964L23.8987 27.6584C24.8417 27.5214 25.1427 26.8924 24.4727 26.1684L22.9137 24.5414C25.9217 21.9294 27.8907 18.1564 27.8907 13.9454C27.8907 6.3164 21.5737 0.0004 13.9457 0.0004C6.3297 0.0004 -0.0003 6.3164 -0.0003 13.9454ZM9.4477 19.5504C9.9397 19.5504 10.2947 19.3044 10.4997 18.6754L11.4977 15.7634H16.3927L17.3907 18.6754C17.5957 19.3044 17.9377 19.5504 18.4437 19.5504C19.0447 19.5504 19.4547 19.1544 19.4547 18.6074C19.4547 18.3884 19.4007 18.1974 19.3047 17.8964L15.4627 7.5744C15.2027 6.8634 14.6837 6.4944 13.9317 6.4944C13.1937 6.4944 12.6877 6.8634 12.4137 7.5744L8.5857 17.8964C8.4767 18.1974 8.4357 18.3884 8.4357 18.5934C8.4357 19.1684 8.8317 19.5504 9.4477 19.5504ZM12.0447 14.1234L13.8637 8.8324H14.0137L15.8317 14.1234Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.51953125 28.57681640625"
          className={className}
        >
          <path
            d="              M-0.0003 14.2599C-0.0003 18.5669 2.1467 22.7499 5.3047 25.2379C6.1387 25.9219 7.1097 25.8399 7.6287 25.1559C8.2027 24.4179 7.9847 23.5019 7.2867 22.8599C4.7437 20.8219 3.1447 17.7599 3.1307 14.2599C3.1167 8.0939 8.0937 3.1309 14.2597 3.1309C20.4257 3.1309 25.4027 8.0939 25.3887 14.2599C25.3747 17.5679 23.9527 20.4669 21.6567 22.5039L20.6037 21.4509C19.8517 20.7129 19.1137 21.0959 18.9487 22.0259L18.0877 27.4809C17.9647 28.2189 18.4157 28.6699 19.1677 28.5609L24.8557 27.7809C25.8397 27.6449 26.1267 26.9339 25.3747 26.1819L23.8707 24.6919C26.6737 22.1619 28.5197 18.2519 28.5197 14.2599C28.5197 6.4399 22.0797 -0.0001 14.2597 -0.0001C6.4397 -0.0001 -0.0003 6.4399 -0.0003 14.2599ZM10.0077 19.7419C10.7047 19.7419 11.1567 19.3729 11.3887 18.5259L12.1137 16.3649H16.4067L17.1307 18.5259C17.3637 19.3729 17.8147 19.7419 18.5117 19.7419C19.3457 19.7419 19.8657 19.2499 19.8657 18.4569C19.8657 18.2109 19.8107 17.9239 19.6737 17.5269L16.4197 8.5039C16.0507 7.4099 15.3257 6.8629 14.2327 6.8629C13.1657 6.8629 12.4687 7.3969 12.0997 8.5039L8.8457 17.5269C8.7087 17.9239 8.6547 18.2109 8.6547 18.4569C8.6547 19.2499 9.1737 19.7419 10.0077 19.7419ZM12.7007 14.2869L14.1917 9.5979H14.3277L15.8187 14.2869Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.810546875 27.08468287630356"
          className={className}
        >
          <path
            d="              M-0.0003 13.4122C-0.0003 18.2522 2.6937 22.3532 6.5077 24.8692C6.7817 25.0602 7.1097 24.9652 7.2457 24.7322C7.3827 24.4722 7.3147 24.1722 7.0547 23.9942C3.4867 21.7792 1.0387 17.9102 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.4117 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 17.2402 24.0077 20.6172 21.2737 22.9142L19.6327 21.1642C19.2367 20.7672 18.8127 20.9862 18.7027 21.4922L17.6637 26.3592C17.5687 26.8792 17.8277 27.1522 18.3337 27.0702L23.2967 26.3872C23.8987 26.3042 24.0627 25.8942 23.6797 25.4712L21.9437 23.6252C24.8687 21.1092 26.8107 17.5272 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.4117 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122ZM8.9277 19.0172C9.1877 19.0172 9.3237 18.9082 9.4337 18.5802L10.7457 15.0532H16.0367L17.3497 18.5802C17.4587 18.8942 17.6097 19.0172 17.8827 19.0172C18.1697 19.0172 18.3747 18.8262 18.3747 18.5662C18.3747 18.4572 18.3477 18.3882 18.3067 18.2382L14.0957 7.1232C13.9727 6.7812 13.7407 6.6172 13.3987 6.6172C13.0427 6.6172 12.8237 6.7812 12.6877 7.1232L8.4907 18.2382C8.4357 18.3882 8.4077 18.4572 8.4077 18.5532C8.4077 18.8402 8.5997 19.0172 8.9277 19.0172ZM11.0737 14.1502L13.3577 8.0122H13.4257L15.7087 14.1502Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.49609375 26.699296554178165"
          className={className}
        >
          <path
            d="              M-0.0003 13.2481C-0.0003 18.1561 2.8027 22.2711 6.6987 24.7461C6.8767 24.8691 7.0817 24.8011 7.1637 24.6501C7.2457 24.4861 7.1917 24.2811 7.0277 24.1851C3.2677 21.9301 0.6697 17.9241 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 17.1441 24.0347 20.5761 21.2457 22.9141L19.4827 21.0141C19.1677 20.7131 18.8127 20.8901 18.7307 21.2871L17.6917 26.0861C17.6097 26.5231 17.8147 26.7561 18.2517 26.6871L23.1187 26.0041C23.6247 25.9351 23.7477 25.5941 23.4477 25.2651L21.6697 23.3651C24.5687 20.8631 26.4957 17.3221 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481ZM8.7777 18.8531C8.9547 18.8531 9.0367 18.7851 9.1327 18.5391L10.5277 14.8341H15.9277L17.3357 18.5391C17.4177 18.7581 17.4997 18.8531 17.7327 18.8531C17.9097 18.8531 18.0607 18.7171 18.0607 18.5391C18.0607 18.4571 18.0467 18.4301 18.0197 18.3341L13.6987 6.9861C13.6037 6.7541 13.4527 6.6441 13.2477 6.6441C13.0017 6.6441 12.8517 6.7541 12.7697 6.9861L8.4487 18.3341C8.4217 18.4301 8.4077 18.4571 8.4077 18.5251C8.4077 18.7301 8.5317 18.8531 8.7777 18.8531ZM10.7867 14.1501L13.2067 7.7651H13.2617L15.6817 14.1501Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
