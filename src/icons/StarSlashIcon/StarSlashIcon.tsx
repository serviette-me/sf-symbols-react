import { IconProps } from "../../types"

export default function StarSlashIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.60122292169501 31.245806810977633"
          className={className}
        >
          <path
            d="              M24.3906 19.7015L31.0346 14.9435C32.3066 14.0405 32.8806 12.9335 32.4706 11.7575C32.0736 10.5685 30.9666 10.0075 29.4356 10.0355L21.3416 10.1035L18.8806 2.3515C18.4016 0.8615 17.5406 -0.0005 16.3106 -0.0005C15.0656 -0.0005 14.2046 0.8615 13.7266 2.3515L12.0996 7.4375L15.4076 10.7325L16.2556 7.4515C16.2696 7.3965 16.2826 7.3825 16.3106 7.3825C16.3236 7.3825 16.3376 7.3965 16.3516 7.4515L17.7456 12.8245C18.0736 14.1235 18.4836 14.3825 19.8376 14.3005L25.3886 13.9725C25.4426 13.9725 25.4706 13.9865 25.4706 13.9995C25.4706 14.0275 25.4566 14.0405 25.4156 14.0685L21.3556 16.6935ZM28.3006 30.0645C28.7926 30.5425 29.5996 30.5565 30.0646 30.0645C30.5426 29.5725 30.5566 28.7925 30.0646 28.3005L5.8646 4.1285C5.3866 3.6365 4.5796 3.6365 4.0876 4.1285C3.6226 4.6075 3.6226 5.4275 4.0876 5.8925ZM6.2616 30.7755C7.2596 31.5415 8.4896 31.3225 9.7476 30.3925L16.3106 25.5665L22.8456 30.3925C23.9116 31.1855 24.9916 31.4865 25.9216 31.0355C26.0176 30.9805 26.0996 30.9395 26.1816 30.8575L16.5976 21.4235C15.9406 20.7945 15.3806 20.8905 14.6696 21.4785L10.6906 24.7735C10.6636 24.8005 10.6366 24.8145 10.6226 24.7875C10.6086 24.7735 10.5956 24.7595 10.6086 24.7055L12.6466 19.5375C13.1516 18.2925 13.1246 17.8825 11.8806 17.0895L7.2046 14.0685C7.1636 14.0545 7.1496 14.0275 7.1496 13.9995C7.1496 13.9865 7.1906 13.9725 7.2456 13.9725L9.3646 14.0825L5.3046 10.0355H3.1576C1.6406 10.0355 0.5326 10.5685 0.1366 11.7445C-0.2874 12.9335 0.3006 14.0405 1.5716 14.9435L8.1756 19.6735L5.5776 27.3575C5.0856 28.7925 5.2906 30.0235 6.2616 30.7755Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.48851555530925 30.132598838024805"
          className={className}
        >
          <path
            d="              M23.394 18.7849L30.189 13.9319C31.241 13.1799 31.706 12.3049 31.392 11.3749C31.077 10.4589 30.202 10.0079 28.903 10.0219L20.386 10.0899L17.788 1.9409C17.392 0.6969 16.722 -0.0001 15.751 -0.0001C14.767 -0.0001 14.097 0.6969 13.7 1.9409L11.95 7.3829L14.425 9.8439L15.683 5.4549C15.696 5.3869 15.71 5.3589 15.751 5.3589C15.778 5.3589 15.792 5.3869 15.806 5.4549L17.692 12.0999C17.939 13.0289 18.321 13.2619 19.292 13.2209L26.196 12.9749C26.265 12.9749 26.292 12.9879 26.306 13.0159C26.306 13.0429 26.292 13.0699 26.237 13.1109L21.138 16.5429ZM27.659 28.9159C28.11 29.3539 28.849 29.3539 29.286 28.9159C29.724 28.4509 29.737 27.7399 29.286 27.2889L6.112 4.1559C5.661 3.7189 4.923 3.7049 4.472 4.1559C4.034 4.5939 4.034 5.3589 4.472 5.7829ZM6.044 29.7769C6.823 30.3789 7.794 30.1879 8.847 29.4219L15.751 24.3499L22.628 29.4219C23.599 30.1189 24.474 30.3379 25.239 29.8999C25.362 29.8179 25.458 29.7229 25.608 29.5179L16.23 21.2319C15.683 20.7399 15.163 20.7809 14.589 21.2459L9.312 25.4159C9.257 25.4429 9.23 25.4569 9.216 25.4299C9.189 25.4019 9.189 25.3889 9.202 25.3339L11.581 18.8399C11.923 17.9509 11.855 17.5269 10.993 16.9669L5.265 13.1109C5.21 13.0699 5.183 13.0429 5.196 13.0159C5.21 12.9879 5.237 12.9749 5.306 12.9749L9.161 13.0839L6.112 10.0489L2.571 10.0219C1.286 10.0219 0.411 10.4589 0.097 11.3609C-0.218 12.3049 0.247 13.1799 1.3 13.9319L8.259 18.9079L5.525 27.0159C5.114 28.2189 5.278 29.1899 6.044 29.7769Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.074740291440776 30.71057852322798"
          className={className}
        >
          <path
            d="              M23.9255 19.2634L30.6385 14.4644C31.8005 13.6304 32.3195 12.6324 31.9645 11.5664C31.5955 10.5134 30.6105 10.0074 29.1755 10.0214L20.8905 10.0894L18.3605 2.1464C17.9235 0.7794 17.1445 0.0004 16.0365 0.0004C14.9295 0.0004 14.1495 0.7794 13.7125 2.1464L12.0305 7.4104L14.9425 10.3084L15.9815 6.5074C15.9955 6.4394 16.0095 6.4254 16.0365 6.4254C16.0645 6.4254 16.0775 6.4394 16.1055 6.5074L17.7185 12.4684C18.0195 13.6034 18.4015 13.8494 19.5775 13.7814L25.7575 13.4944C25.8255 13.4944 25.8535 13.5074 25.8665 13.5354C25.8665 13.5484 25.8535 13.5764 25.7985 13.6174L21.2595 16.6114ZM27.9995 29.5174C28.4645 29.9684 29.2435 29.9824 29.6945 29.5174C30.1465 29.0394 30.1595 28.2874 29.6945 27.8224L5.9875 4.1424C5.5095 3.6644 4.7435 3.6644 4.2655 4.1424C3.8145 4.5934 3.8145 5.3864 4.2655 5.8374ZM6.1655 30.2964C7.0545 30.9804 8.1615 30.7894 9.3235 29.9274L16.0365 24.9924L22.7495 29.9274C23.7615 30.6794 24.7455 30.9394 25.6065 30.4884C25.7165 30.4334 25.7985 30.3514 25.9075 30.2144L16.4195 21.3284C15.8175 20.7544 15.2845 20.8364 14.6285 21.3694L10.0345 25.0744C9.9935 25.1014 9.9805 25.1154 9.9525 25.0874C9.9395 25.0744 9.9255 25.0464 9.9395 24.9924L12.1405 19.1954C12.5645 18.1294 12.5235 17.7054 11.4565 17.0214L6.2885 13.6174C6.2475 13.5894 6.2205 13.5484 6.2335 13.5354C6.2335 13.5074 6.2615 13.4944 6.3295 13.4944L9.2695 13.6034L5.6875 10.0354L2.8845 10.0214C1.4765 10.0214 0.4785 10.5134 0.1225 11.5524C-0.2605 12.6324 0.2735 13.6304 1.4485 14.4644L8.2165 19.3044L5.5505 27.1934C5.0995 28.5194 5.2765 29.6274 6.1655 30.2964Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.791207896663277 28.447187816787533"
          className={className}
        >
          <path
            d="              M21.5323 17.7052L28.9563 12.3592C29.6673 11.8532 29.9133 11.3342 29.7353 10.7872C29.5583 10.2542 29.0523 9.9802 28.1773 9.9802L18.9623 10.0352L16.1463 1.2442C15.8723 0.3962 15.4623 0.0002 14.9013 0.0002C14.3273 0.0002 13.9313 0.3962 13.6573 1.2442L11.5523 7.7652L12.8233 9.0232L14.8063 2.6112C14.8333 2.5152 14.8603 2.4742 14.9013 2.4742C14.9423 2.4742 14.9703 2.5152 14.9973 2.6112L17.5543 10.9512C17.7043 11.4292 18.0193 11.6352 18.4973 11.6212L27.2333 11.5122C27.3293 11.5122 27.3703 11.5122 27.3843 11.5532C27.3983 11.6072 27.3703 11.6352 27.2883 11.6892L20.3843 16.5562ZM26.8103 27.3982C27.1383 27.7132 27.6573 27.7132 27.9723 27.3982C28.2863 27.0702 28.2863 26.5642 27.9723 26.2362L6.1793 4.4982C5.8783 4.1832 5.3453 4.1702 5.0173 4.4982C4.7023 4.8122 4.7023 5.3452 5.0173 5.6602ZM5.7143 28.2462C6.1793 28.5882 6.7393 28.4922 7.4503 27.9722L14.9013 22.5172L22.3533 27.9722C23.0503 28.4922 23.6103 28.5742 24.0753 28.2462C24.2123 28.1502 24.2943 28.0272 24.4443 27.8082L15.4893 20.9452C15.1063 20.6582 14.6833 20.6582 14.3143 20.9452L7.3413 26.1952C7.2593 26.2502 7.2183 26.2772 7.1773 26.2362C7.1493 26.1952 7.1633 26.1812 7.1903 26.0862L10.0073 17.8142C10.1573 17.3632 10.0623 16.9802 9.6513 16.7072L2.5153 11.6892C2.4333 11.6352 2.3923 11.6072 2.4193 11.5532C2.4333 11.5122 2.4743 11.5122 2.5693 11.5122L8.8583 11.5802L7.2733 10.0082L1.6263 9.9802C0.7373 9.9802 0.2313 10.2542 0.0543 10.7872C-0.1237 11.3342 0.1363 11.8532 0.8473 12.3592L8.3393 17.7602L5.4403 26.5102C5.1533 27.3442 5.2633 27.9042 5.7143 28.2462Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.769107616017237 29.420111895899524"
          className={className}
        >
          <path
            d="              M22.7615 18.2114L29.6385 13.2754C30.5545 12.6194 30.9505 11.8944 30.6905 11.1284C30.4315 10.3774 29.7065 10.0074 28.5715 10.0214L19.7675 10.0764L17.0875 1.6814C16.7455 0.5874 16.1855 0.0004 15.3785 0.0004C14.5855 0.0004 14.0245 0.5874 13.6695 1.6814L11.8515 7.3554L13.7925 9.2694L15.3105 4.1694C15.3235 4.0874 15.3515 4.0744 15.3785 4.0744C15.4195 4.0744 15.4335 4.0874 15.4605 4.1694L17.6475 11.6344C17.8535 12.3184 18.2225 12.5504 18.9195 12.5234L26.6985 12.3454C26.7805 12.3454 26.8085 12.3594 26.8215 12.3864C26.8355 12.4274 26.8215 12.4414 26.7535 12.4824L20.9835 16.4474ZM27.2315 28.1644C27.6555 28.5874 28.3665 28.5874 28.7765 28.1644C29.1875 27.7404 29.2005 27.0564 28.7765 26.6324L6.2595 4.1834C5.8495 3.7594 5.1385 3.7464 4.7145 4.1834C4.3045 4.5934 4.3045 5.3044 4.7145 5.7144ZM5.9035 29.1344C6.5465 29.6274 7.3395 29.4624 8.2695 28.7934L15.3785 23.5704L22.4875 28.7934C23.3765 29.4354 24.1425 29.6134 24.7985 29.1754C24.9355 29.0804 25.0445 28.9434 25.2355 28.6704L15.9935 21.0954C15.5155 20.6994 15.0095 20.7264 14.5175 21.1094L8.4195 25.8264C8.3645 25.8534 8.3235 25.8804 8.2965 25.8394C8.2825 25.8124 8.2825 25.7984 8.2965 25.7304L10.8945 18.3884C11.1405 17.7324 11.0445 17.2944 10.4295 16.8844L4.0035 12.4824C3.9485 12.4554 3.9215 12.4274 3.9355 12.3864C3.9625 12.3594 3.9895 12.3454 4.0585 12.3454L9.0345 12.4414L6.6285 10.0484L2.1855 10.0214C1.0505 10.0074 0.3395 10.3774 0.0795 11.1284C-0.1805 11.8944 0.2025 12.6194 1.1325 13.2754L8.3105 18.4294L5.4935 26.7834C5.1245 27.8634 5.2615 28.6564 5.9035 29.1344Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.362625643319 29.0165521256913"
          className={className}
        >
          <path
            d="              M22.4093 17.8687L29.3273 12.8927C30.1753 12.2907 30.5173 11.6617 30.2983 10.9787C30.0793 10.3227 29.4373 9.9937 28.3843 10.0077L19.4293 10.0627L16.7083 1.5177C16.3803 0.5057 15.8883 -0.0003 15.1773 -0.0003C14.4803 -0.0003 13.9873 0.5057 13.6593 1.5177L11.8143 7.3147L13.4413 8.9417L15.1083 3.4317C15.1223 3.3497 15.1503 3.3227 15.1773 3.3227C15.2183 3.3227 15.2453 3.3497 15.2593 3.4317L17.6383 11.3477C17.8163 11.9087 18.1713 12.1407 18.7323 12.1267L27.0033 11.9767C27.0853 11.9767 27.1123 11.9767 27.1263 12.0177C27.1403 12.0587 27.1123 12.0857 27.0583 12.1267L20.9053 16.3787ZM27.0033 27.7407C27.4133 28.1507 28.0973 28.1507 28.4933 27.7407C28.8903 27.3167 28.9033 26.6607 28.4933 26.2497L6.3583 4.1837C5.9483 3.7737 5.2653 3.7597 4.8553 4.1837C4.4583 4.5797 4.4583 5.2637 4.8553 5.6737ZM5.8253 28.7657C6.3863 29.2027 7.0973 29.0527 7.9443 28.4377L15.1773 23.1187L22.4233 28.4377C23.2713 29.0527 23.9543 29.1897 24.5423 28.7657C24.7063 28.6427 24.8293 28.4787 25.0343 28.1777L15.8743 21.0137C15.4373 20.6717 14.9313 20.6717 14.4933 21.0137L7.9173 26.0317C7.8623 26.0727 7.8213 26.0997 7.7943 26.0587C7.7673 26.0317 7.7803 26.0177 7.7943 25.9357L10.5153 18.1157C10.7063 17.5817 10.5973 17.1587 10.1183 16.8297L3.3103 12.1267C3.2413 12.0857 3.2283 12.0587 3.2413 12.0177C3.2553 11.9767 3.2823 11.9767 3.3643 11.9767L8.9703 12.0727L6.9193 10.0347L1.9833 10.0077C0.9313 9.9937 0.2883 10.3227 0.0693 10.9787C-0.1627 11.6617 0.1923 12.2907 1.0403 12.8927L8.3413 18.1427L5.4833 26.6467C5.1423 27.6447 5.2653 28.3417 5.8253 28.7657Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.081907554234434 29.71522428705481"
          className={className}
        >
          <path
            d="              M23.0418 18.4432L29.8778 13.5492C30.8618 12.8512 31.2728 12.0582 30.9988 11.2242C30.7118 10.4042 29.9328 9.9942 28.7158 10.0082L20.0478 10.0762L17.3958 1.7772C17.0268 0.6152 16.4248 0.0002 15.5498 0.0002C14.6748 0.0002 14.0598 0.6152 13.6908 1.7772L11.8998 7.3552L14.0728 9.5022L15.4678 4.7172C15.4948 4.6352 15.5088 4.6212 15.5498 4.6212C15.5768 4.6212 15.5908 4.6352 15.6178 4.7172L17.6688 11.8262C17.9018 12.6192 18.2708 12.8512 19.0908 12.8102L26.4868 12.6052C26.5558 12.6052 26.5968 12.6192 26.6108 12.6462C26.6108 12.6872 26.5968 12.7012 26.5418 12.7422L21.0598 16.4742ZM27.4168 28.4782C27.8548 28.9022 28.5788 28.9162 29.0028 28.4782C29.4268 28.0412 29.4408 27.3442 29.0028 26.9062L6.2118 4.1562C5.7748 3.7322 5.0498 3.7192 4.6118 4.1562C4.1888 4.5802 4.1888 5.3182 4.6118 5.7422ZM5.9658 29.3942C6.6768 29.9412 7.5378 29.7642 8.5228 29.0532L15.5498 23.8982L22.5638 29.0532C23.4798 29.7232 24.2858 29.9142 24.9838 29.4762C25.1338 29.3942 25.2298 29.2582 25.4068 29.0252L16.1108 21.1502C15.6048 20.7132 15.0848 20.7402 14.5518 21.1642L8.8098 25.6352C8.7548 25.6622 8.7138 25.6892 8.6998 25.6622C8.6728 25.6352 8.6728 25.6212 8.6998 25.5392L11.2018 18.5662C11.4758 17.8142 11.4068 17.3902 10.6828 16.9122L4.5578 12.7422C4.5028 12.7152 4.4758 12.6872 4.4888 12.6462C4.5028 12.6192 4.5298 12.6052 4.5988 12.6052L9.0968 12.7152L6.4168 10.0352L2.3568 10.0082C1.1668 10.0082 0.3738 10.4042 0.0868 11.2242C-0.2002 12.0582 0.2368 12.8512 1.2078 13.5492L8.2898 18.6212L5.5148 26.8652C5.1318 28.0002 5.2688 28.8752 5.9658 29.3942Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.034162096451407 27.697139008983925"
          className={className}
        >
          <path
            d="              M20.3583 17.4724L28.4523 11.6344C28.9713 11.2524 29.1083 10.8824 28.9993 10.5274C28.8763 10.1714 28.5483 9.9394 27.8913 9.9534L18.3353 9.9664L15.3953 0.8754C15.1903 0.2464 14.9033 0.0004 14.5203 0.0004C14.1373 0.0004 13.8373 0.2464 13.6323 0.8754L11.2123 8.3534L11.9913 9.1194L14.3973 1.5174C14.4383 1.3944 14.4663 1.3394 14.5203 1.3394C14.5613 1.3394 14.6023 1.3944 14.6303 1.5174L17.4463 10.4044C17.5553 10.7734 17.8023 10.9514 18.1713 10.9514L27.5223 10.8824C27.6453 10.8824 27.7003 10.8824 27.7143 10.9374C27.7413 10.9924 27.6863 11.0334 27.5913 11.1014L19.6613 16.7894ZM26.5523 26.9334C26.7433 27.1254 27.0713 27.1254 27.2623 26.9334C27.4683 26.7284 27.4683 26.4144 27.2623 26.2224L5.9483 4.9214C5.7703 4.7304 5.4423 4.7034 5.2373 4.9214C5.0323 5.1134 5.0323 5.4414 5.2373 5.6324ZM5.5793 27.5484C5.8803 27.7814 6.2623 27.7544 6.7963 27.3714L14.5203 21.7244L22.2313 27.3714C22.7643 27.7544 23.1473 27.7814 23.4623 27.5484C23.5303 27.4944 23.5853 27.4254 23.6533 27.3164L14.9713 20.8494C14.6843 20.6304 14.3563 20.6304 14.0553 20.8494L6.5503 26.4004C6.4543 26.4554 6.4133 26.4964 6.3583 26.4554C6.3173 26.4274 6.3443 26.3734 6.3723 26.2634L9.3113 17.4044C9.4343 17.0484 9.3523 16.7484 9.0243 16.5294L1.4363 11.1014C1.3413 11.0334 1.3003 10.9924 1.3133 10.9374C1.3273 10.8824 1.3953 10.8824 1.5053 10.8824L8.6963 10.9374L7.7393 9.9664L1.1363 9.9534C0.4793 9.9394 0.1513 10.1714 0.0423 10.5274C-0.0807 10.8824 0.0553 11.2524 0.5893 11.6344L8.3543 17.2404L5.3603 26.3184C5.1553 26.9614 5.2643 27.3304 5.5793 27.5484Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.644754461798147 27.30745866352126"
          className={className}
        >
          <path
            d="              M19.7704 17.3496L28.1924 11.2656C28.6164 10.9516 28.6984 10.6636 28.6164 10.3906C28.5344 10.1176 28.3024 9.9256 27.7554 9.9256L18.0204 9.9396L15.0264 0.6836C14.8484 0.1636 14.6164 -0.0004 14.3294 -0.0004C14.0424 -0.0004 13.7964 0.1636 13.6184 0.6836L11.0484 8.6406L11.5674 9.1606L14.2064 0.9436C14.2334 0.8206 14.2744 0.7516 14.3294 0.7516C14.3844 0.7516 14.4114 0.8206 14.4524 0.9436L17.3914 10.1306C17.4874 10.4456 17.7064 10.5956 18.0074 10.5956L27.6864 10.5686C27.8094 10.5686 27.8784 10.5686 27.8914 10.6226C27.9194 10.6636 27.8644 10.7186 27.7554 10.7866L19.3054 16.8986ZM26.4284 26.7016C26.5524 26.8376 26.7704 26.8376 26.9074 26.7016C27.0574 26.5506 27.0444 26.3456 26.9074 26.2086L5.8394 5.1266C5.7164 5.0176 5.4974 4.9766 5.3464 5.1266C5.2104 5.2636 5.2104 5.4826 5.3464 5.6196ZM5.5114 27.1936C5.7434 27.3576 6.0304 27.3706 6.4544 27.0566L14.3294 21.3146L22.1904 27.0566C22.6144 27.3706 22.9014 27.3576 23.1474 27.1936C23.1884 27.1656 23.2294 27.1116 23.2574 27.0566L14.7254 20.7946C14.4664 20.6036 14.1924 20.6036 13.9324 20.7946L6.1534 26.4956C6.0574 26.5646 6.0034 26.6056 5.9484 26.5646C5.8934 26.5366 5.9344 26.4826 5.9624 26.3596L8.9694 17.1856C9.0794 16.8986 8.9834 16.6246 8.7104 16.4336L0.8894 10.7866C0.7944 10.7186 0.7394 10.6636 0.7534 10.6226C0.7664 10.5686 0.8354 10.5686 0.9584 10.5686L8.6284 10.5956L7.9714 9.9396L0.9034 9.9256C0.3564 9.9256 0.1104 10.1176 0.0284 10.3906C-0.0536 10.6636 0.0284 10.9516 0.4524 11.2656L8.3544 16.9806L5.3334 26.2226C5.1554 26.7556 5.2644 27.0296 5.5114 27.1936Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}