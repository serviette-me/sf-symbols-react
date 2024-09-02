import { IconProps } from "../../types"

export default function StarIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.60122292169501 31.239551316878376"
          className={className}
        >
          <path
            d="              M6.2616 30.7755C7.2596 31.5415 8.4896 31.3225 9.7476 30.3925L16.3106 25.5665L22.8456 30.3925C24.1306 31.3225 25.3476 31.5415 26.3456 30.7755C27.3296 30.0235 27.5216 28.7925 27.0286 27.3575L24.4316 19.6735L31.0346 14.9435C32.3066 14.0405 32.8806 12.9335 32.4706 11.7575C32.0736 10.5685 30.9666 10.0075 29.4356 10.0355L21.3416 10.1035L18.8806 2.3515C18.4016 0.8615 17.5406 -0.0005 16.3106 -0.0005C15.0656 -0.0005 14.2046 0.8615 13.7266 2.3515L11.2656 10.1035L3.1576 10.0355C1.6406 10.0075 0.5326 10.5685 0.1366 11.7445C-0.2874 12.9335 0.3006 14.0405 1.5716 14.9435L8.1756 19.6735L5.5776 27.3575C5.0856 28.7925 5.2906 30.0235 6.2616 30.7755ZM10.6226 24.7875C10.6086 24.7735 10.5956 24.7595 10.6086 24.7055L12.6466 19.5375C13.0976 18.2795 13.1246 17.8825 11.8806 17.0895L7.2046 14.0685C7.1636 14.0545 7.1496 14.0275 7.1496 13.9995C7.1496 13.9865 7.1906 13.9725 7.2456 13.9725L12.7826 14.3005C14.1226 14.3285 14.5326 14.1235 14.8606 12.8245L16.2556 7.4515C16.2696 7.3965 16.2826 7.3825 16.3106 7.3825C16.3236 7.3825 16.3376 7.3965 16.3516 7.4515L17.7456 12.8245C18.0736 14.1235 18.4836 14.3285 19.8376 14.3005L25.3886 13.9725C25.4426 13.9725 25.4706 13.9865 25.4706 13.9995C25.4706 14.0275 25.4566 14.0405 25.4156 14.0685L20.7266 17.1035C19.4956 17.8965 19.5096 18.2795 19.9606 19.5375L21.9976 24.7055C22.0246 24.7595 21.9976 24.7735 21.9836 24.7875C21.9706 24.8145 21.9426 24.8005 21.9156 24.7735L17.6086 21.2325C16.5156 20.3845 16.0916 20.3845 14.9976 21.2325L10.6906 24.7735C10.6636 24.8005 10.6366 24.8145 10.6226 24.7875Z"
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
            d="              M6.044 29.7769C6.823 30.3789 7.794 30.1879 8.847 29.4219L15.751 24.3499L22.628 29.4219C23.694 30.1879 24.665 30.3789 25.444 29.7769C26.21 29.1899 26.374 28.2189 25.964 27.0159L23.23 18.9079L30.189 13.9319C31.241 13.1799 31.706 12.3049 31.392 11.3749C31.077 10.4589 30.202 10.0079 28.903 10.0219L20.386 10.0899L17.788 1.9409C17.392 0.6969 16.722 -0.0001 15.751 -0.0001C14.767 -0.0001 14.097 0.6969 13.7 1.9409L11.103 10.0899L2.571 10.0219C1.286 10.0079 0.411 10.4589 0.097 11.3609C-0.218 12.3049 0.247 13.1799 1.3 13.9319L8.259 18.9079L5.525 27.0159C5.114 28.2189 5.278 29.1899 6.044 29.7769ZM9.216 25.4299C9.189 25.4019 9.189 25.3889 9.202 25.3339L11.581 18.8399C11.896 17.9379 11.855 17.5269 10.993 16.9669L5.265 13.1109C5.21 13.0699 5.183 13.0429 5.196 13.0159C5.21 12.9879 5.237 12.9749 5.306 12.9749L12.21 13.2209C13.167 13.2479 13.55 13.0289 13.796 12.0999L15.683 5.4549C15.696 5.3869 15.71 5.3589 15.751 5.3589C15.778 5.3589 15.792 5.3869 15.806 5.4549L17.692 12.0999C17.939 13.0289 18.321 13.2479 19.292 13.2209L26.196 12.9749C26.265 12.9749 26.292 12.9879 26.306 13.0159C26.306 13.0429 26.292 13.0699 26.237 13.1109L20.495 16.9669C19.634 17.5409 19.593 17.9379 19.907 18.8399L22.286 25.3339C22.3 25.3889 22.3 25.4019 22.286 25.4299C22.259 25.4569 22.232 25.4429 22.177 25.4159L16.749 21.1369C15.97 20.5349 15.519 20.5349 14.739 21.1369L9.312 25.4159C9.257 25.4429 9.23 25.4569 9.216 25.4299Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.074740291440776 30.710567307231216"
          className={className}
        >
          <path
            d="              M6.1655 30.2964C7.0545 30.9804 8.1615 30.7894 9.3235 29.9274L16.0365 24.9924L22.7495 29.9274C23.9255 30.7894 25.0195 30.9804 25.9215 30.2964C26.7965 29.6274 26.9875 28.5194 26.5235 27.1934L23.8565 19.3044L30.6385 14.4644C31.8005 13.6304 32.3195 12.6324 31.9645 11.5664C31.5955 10.5134 30.6105 10.0074 29.1755 10.0214L20.8905 10.0894L18.3605 2.1464C17.9235 0.7794 17.1445 0.0004 16.0365 0.0004C14.9295 0.0004 14.1495 0.7794 13.7125 2.1464L11.1835 10.0894L2.8845 10.0214C1.4765 10.0074 0.4785 10.5134 0.1225 11.5524C-0.2605 12.6324 0.2735 13.6304 1.4485 14.4644L8.2165 19.3044L5.5505 27.1934C5.0995 28.5194 5.2765 29.6274 6.1655 30.2964ZM9.9525 25.0874C9.9395 25.0744 9.9255 25.0464 9.9395 24.9924L12.1405 19.1954C12.5365 18.1154 12.5235 17.7054 11.4565 17.0214L6.2885 13.6174C6.2475 13.5894 6.2205 13.5484 6.2335 13.5354C6.2335 13.5074 6.2615 13.4944 6.3295 13.4944L12.5095 13.7814C13.6715 13.8084 14.0675 13.6034 14.3555 12.4684L15.9815 6.5074C15.9955 6.4394 16.0095 6.4254 16.0365 6.4254C16.0645 6.4254 16.0775 6.4394 16.1055 6.5074L17.7185 12.4684C18.0195 13.6034 18.4015 13.8084 19.5775 13.7814L25.7575 13.4944C25.8255 13.4944 25.8535 13.5074 25.8665 13.5354C25.8665 13.5484 25.8535 13.5764 25.7985 13.6174L20.6165 17.0354C19.5645 17.7184 19.5505 18.1154 19.9335 19.1954L22.1345 24.9924C22.1485 25.0464 22.1485 25.0744 22.1205 25.0874C22.1065 25.1154 22.0795 25.1014 22.0385 25.0744L17.1985 21.1774C16.2695 20.4534 15.8175 20.4534 14.8745 21.1774L10.0345 25.0744C9.9935 25.1014 9.9805 25.1154 9.9525 25.0874Z"
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
            d="              M5.7143 28.2462C6.1793 28.5882 6.7393 28.4922 7.4503 27.9722L14.9013 22.5172L22.3533 27.9722C23.0503 28.4922 23.6243 28.5882 24.0753 28.2462C24.5403 27.9042 24.6493 27.3442 24.3623 26.5102L21.4503 17.7602L28.9563 12.3592C29.6673 11.8532 29.9133 11.3342 29.7353 10.7872C29.5583 10.2542 29.0523 9.9802 28.1773 9.9802L18.9623 10.0352L16.1463 1.2442C15.8723 0.3962 15.4623 0.0002 14.9013 0.0002C14.3273 0.0002 13.9313 0.3962 13.6573 1.2442L10.8413 10.0352L1.6263 9.9802C0.7373 9.9802 0.2313 10.2542 0.0543 10.7872C-0.1237 11.3342 0.1363 11.8532 0.8473 12.3592L8.3393 17.7602L5.4403 26.5102C5.1533 27.3442 5.2633 27.9042 5.7143 28.2462ZM7.1773 26.2362C7.1493 26.1952 7.1633 26.1812 7.1903 26.0862L10.0073 17.8142C10.1573 17.3632 10.0623 16.9802 9.6513 16.7072L2.5153 11.6892C2.4333 11.6352 2.3923 11.6072 2.4193 11.5532C2.4333 11.5122 2.4743 11.5122 2.5693 11.5122L11.3063 11.6212C11.7843 11.6352 12.0993 11.4292 12.2493 10.9512L14.8063 2.6112C14.8333 2.5152 14.8603 2.4742 14.9013 2.4742C14.9423 2.4742 14.9703 2.5152 14.9973 2.6112L17.5543 10.9512C17.7043 11.4292 18.0193 11.6352 18.4973 11.6212L27.2333 11.5122C27.3293 11.5122 27.3703 11.5122 27.3843 11.5532C27.3983 11.6072 27.3703 11.6352 27.2883 11.6892L20.1513 16.7072C19.7413 16.9802 19.6323 17.3632 19.7963 17.8142L22.6123 26.0862C22.6403 26.1812 22.6533 26.1952 22.6123 26.2362C22.5853 26.2772 22.5443 26.2502 22.4623 26.1952L15.4893 20.9452C15.1063 20.6582 14.6833 20.6582 14.3143 20.9452L7.3413 26.1952C7.2593 26.2502 7.2183 26.2772 7.1773 26.2362Z"
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
            d="              M5.9035 29.1344C6.5465 29.6274 7.3395 29.4624 8.2695 28.7934L15.3785 23.5704L22.4875 28.7934C23.4175 29.4624 24.2245 29.6274 24.8665 29.1344C25.4955 28.6564 25.6325 27.8634 25.2635 26.7834L22.4605 18.4294L29.6385 13.2754C30.5545 12.6194 30.9505 11.8944 30.6905 11.1284C30.4315 10.3774 29.7065 10.0074 28.5715 10.0214L19.7675 10.0764L17.0875 1.6814C16.7455 0.5874 16.1855 0.0004 15.3785 0.0004C14.5855 0.0004 14.0245 0.5874 13.6695 1.6814L10.9895 10.0764L2.1855 10.0214C1.0505 10.0074 0.3395 10.3774 0.0795 11.1284C-0.1805 11.8944 0.2025 12.6194 1.1325 13.2754L8.3105 18.4294L5.4935 26.7834C5.1245 27.8634 5.2615 28.6564 5.9035 29.1344ZM8.2965 25.8394C8.2825 25.8124 8.2825 25.7984 8.2965 25.7304L10.8945 18.3884C11.1265 17.7184 11.0445 17.2944 10.4295 16.8844L4.0035 12.4824C3.9485 12.4554 3.9215 12.4274 3.9355 12.3864C3.9625 12.3594 3.9895 12.3454 4.0585 12.3454L11.8375 12.5234C12.5485 12.5504 12.9035 12.3184 13.1085 11.6344L15.3105 4.1694C15.3235 4.0874 15.3515 4.0744 15.3785 4.0744C15.4195 4.0744 15.4335 4.0874 15.4605 4.1694L17.6475 11.6344C17.8535 12.3184 18.2225 12.5504 18.9195 12.5234L26.6985 12.3454C26.7805 12.3454 26.8085 12.3594 26.8215 12.3864C26.8355 12.4274 26.8215 12.4414 26.7535 12.4824L20.3415 16.8844C19.7125 17.3084 19.6305 17.7184 19.8625 18.3884L22.4605 25.7304C22.4875 25.7984 22.4875 25.8124 22.4605 25.8394C22.4335 25.8804 22.4055 25.8534 22.3515 25.8264L16.1855 21.0684C15.6245 20.6304 15.1325 20.6304 14.5855 21.0684L8.4195 25.8264C8.3645 25.8534 8.3235 25.8804 8.2965 25.8394Z"
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
            d="              M5.8253 28.7657C6.3863 29.2027 7.0973 29.0527 7.9443 28.4377L15.1773 23.1187L22.4233 28.4377C23.2713 29.0527 23.9683 29.2027 24.5423 28.7657C25.1033 28.3417 25.2263 27.6447 24.8843 26.6467L22.0263 18.1427L29.3273 12.8927C30.1753 12.2907 30.5173 11.6617 30.2983 10.9787C30.0793 10.3227 29.4373 9.9937 28.3843 10.0077L19.4293 10.0627L16.7083 1.5177C16.3803 0.5057 15.8883 -0.0003 15.1773 -0.0003C14.4803 -0.0003 13.9873 0.5057 13.6593 1.5177L10.9393 10.0627L1.9833 10.0077C0.9313 9.9937 0.2883 10.3227 0.0693 10.9787C-0.1627 11.6617 0.1923 12.2907 1.0403 12.8927L8.3413 18.1427L5.4833 26.6467C5.1423 27.6447 5.2653 28.3417 5.8253 28.7657ZM7.7943 26.0587C7.7673 26.0317 7.7803 26.0177 7.7943 25.9357L10.5153 18.1157C10.7063 17.5817 10.5973 17.1587 10.1183 16.8297L3.3103 12.1267C3.2413 12.0857 3.2283 12.0587 3.2413 12.0177C3.2553 11.9767 3.2823 11.9767 3.3643 11.9767L11.6363 12.1267C12.1963 12.1407 12.5523 11.9087 12.7303 11.3477L15.1083 3.4317C15.1223 3.3497 15.1503 3.3227 15.1773 3.3227C15.2183 3.3227 15.2453 3.3497 15.2593 3.4317L17.6383 11.3477C17.8163 11.9087 18.1713 12.1407 18.7323 12.1267L27.0033 11.9767C27.0853 11.9767 27.1123 11.9767 27.1263 12.0177C27.1403 12.0587 27.1123 12.0857 27.0583 12.1267L20.2493 16.8297C19.7713 17.1587 19.6613 17.5817 19.8533 18.1157L22.5733 25.9357C22.5873 26.0177 22.6013 26.0317 22.5733 26.0587C22.5463 26.0997 22.5053 26.0727 22.4503 26.0317L15.8743 21.0137C15.4373 20.6717 14.9313 20.6717 14.4933 21.0137L7.9173 26.0317C7.8623 26.0727 7.8213 26.0997 7.7943 26.0587Z"
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
            d="              M5.9658 29.3942C6.6768 29.9412 7.5378 29.7642 8.5228 29.0532L15.5498 23.8982L22.5638 29.0532C23.5478 29.7642 24.4088 29.9412 25.1198 29.3942C25.8178 28.8752 25.9538 28.0002 25.5708 26.8652L22.7958 18.6212L29.8778 13.5492C30.8618 12.8512 31.2728 12.0582 30.9988 11.2242C30.7118 10.4042 29.9328 9.9942 28.7158 10.0082L20.0478 10.0762L17.3958 1.7772C17.0268 0.6152 16.4248 0.0002 15.5498 0.0002C14.6748 0.0002 14.0598 0.6152 13.6908 1.7772L11.0518 10.0762L2.3568 10.0082C1.1668 9.9942 0.3738 10.4042 0.0868 11.2242C-0.2002 12.0582 0.2368 12.8512 1.2078 13.5492L8.2898 18.6212L5.5148 26.8652C5.1318 28.0002 5.2688 28.8752 5.9658 29.3942ZM8.6998 25.6622C8.6728 25.6352 8.6728 25.6212 8.6998 25.5392L11.2018 18.5662C11.4618 17.8012 11.4068 17.3902 10.6828 16.9122L4.5578 12.7422C4.5028 12.7152 4.4758 12.6872 4.4888 12.6462C4.5028 12.6192 4.5298 12.6052 4.5988 12.6052L12.0088 12.8102C12.8158 12.8382 13.1848 12.6192 13.4168 11.8262L15.4678 4.7172C15.4948 4.6352 15.5088 4.6212 15.5498 4.6212C15.5768 4.6212 15.5908 4.6352 15.6178 4.7172L17.6688 11.8262C17.9018 12.6192 18.2708 12.8382 19.0908 12.8102L26.4868 12.6052C26.5558 12.6052 26.5968 12.6192 26.6108 12.6462C26.6108 12.6872 26.5968 12.7012 26.5418 12.7422L20.4038 16.9122C19.6928 17.3902 19.6238 17.8012 19.8978 18.5662L22.3858 25.5392C22.4128 25.6212 22.4128 25.6352 22.3858 25.6622C22.3718 25.6892 22.3308 25.6622 22.2768 25.6352L16.4248 21.0822C15.7818 20.5762 15.3038 20.5762 14.6608 21.0822L8.8098 25.6352C8.7548 25.6622 8.7138 25.6892 8.6998 25.6622Z"
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
            d="              M5.5793 27.5484C5.8803 27.7814 6.2623 27.7544 6.7963 27.3714L14.5203 21.7244L22.2313 27.3714C22.7643 27.7544 23.1473 27.7814 23.4623 27.5484C23.7623 27.3304 23.8723 26.9614 23.6673 26.3184L20.6863 17.2404L28.4523 11.6344C28.9713 11.2524 29.1083 10.8824 28.9993 10.5274C28.8763 10.1714 28.5483 9.9394 27.8913 9.9534L18.3353 9.9664L15.3953 0.8754C15.1903 0.2464 14.9033 0.0004 14.5203 0.0004C14.1373 0.0004 13.8373 0.2464 13.6323 0.8754L10.7063 9.9664L1.1363 9.9534C0.4793 9.9394 0.1513 10.1714 0.0423 10.5274C-0.0807 10.8824 0.0553 11.2524 0.5893 11.6344L8.3543 17.2404L5.3603 26.3184C5.1553 26.9614 5.2643 27.3304 5.5793 27.5484ZM6.3583 26.4554C6.3173 26.4274 6.3443 26.3734 6.3723 26.2634L9.3113 17.4044C9.4343 17.0484 9.3523 16.7484 9.0243 16.5294L1.4363 11.1014C1.3413 11.0334 1.3003 10.9924 1.3133 10.9374C1.3273 10.8824 1.3953 10.8824 1.5053 10.8824L10.8563 10.9514C11.2253 10.9514 11.4713 10.7734 11.5943 10.4044L14.3973 1.5174C14.4383 1.3944 14.4663 1.3394 14.5203 1.3394C14.5613 1.3394 14.6023 1.3944 14.6303 1.5174L17.4463 10.4044C17.5553 10.7734 17.8023 10.9514 18.1713 10.9514L27.5223 10.8824C27.6453 10.8824 27.7003 10.8824 27.7143 10.9374C27.7413 10.9924 27.6863 11.0334 27.5913 11.1014L20.0033 16.5294C19.6883 16.7484 19.5933 17.0484 19.7163 17.4044L22.6553 26.2634C22.6823 26.3734 22.7103 26.4274 22.6693 26.4554C22.6283 26.4964 22.5733 26.4554 22.4773 26.4004L14.9713 20.8494C14.6843 20.6304 14.3563 20.6304 14.0553 20.8494L6.5503 26.4004C6.4543 26.4554 6.4133 26.4964 6.3583 26.4554Z"
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
            d="              M5.5114 27.1936C5.7434 27.3576 6.0304 27.3706 6.4544 27.0566L14.3294 21.3146L22.1904 27.0566C22.6144 27.3706 22.9014 27.3576 23.1474 27.1936C23.3804 27.0296 23.4894 26.7556 23.3114 26.2226L20.2904 16.9806L28.1924 11.2656C28.6164 10.9516 28.6984 10.6636 28.6164 10.3906C28.5344 10.1176 28.3024 9.9256 27.7554 9.9256L18.0204 9.9396L15.0264 0.6836C14.8484 0.1636 14.6164 -0.0004 14.3294 -0.0004C14.0424 -0.0004 13.7964 0.1636 13.6184 0.6836L10.6374 9.9396L0.9034 9.9256C0.3564 9.9256 0.1104 10.1176 0.0284 10.3906C-0.0536 10.6636 0.0284 10.9516 0.4524 11.2656L8.3544 16.9806L5.3334 26.2226C5.1554 26.7556 5.2644 27.0296 5.5114 27.1936ZM5.9484 26.5646C5.8934 26.5366 5.9344 26.4826 5.9624 26.3596L8.9694 17.1856C9.0794 16.8986 8.9834 16.6246 8.7104 16.4336L0.8894 10.7866C0.7944 10.7186 0.7394 10.6636 0.7534 10.6226C0.7664 10.5686 0.8354 10.5686 0.9584 10.5686L10.6374 10.5956C10.9524 10.5956 11.1574 10.4456 11.2534 10.1306L14.2064 0.9436C14.2334 0.8206 14.2744 0.7516 14.3294 0.7516C14.3844 0.7516 14.4114 0.8206 14.4524 0.9436L17.3914 10.1306C17.4874 10.4456 17.7064 10.5956 18.0074 10.5956L27.6864 10.5686C27.8094 10.5686 27.8784 10.5686 27.8914 10.6226C27.9194 10.6636 27.8644 10.7186 27.7554 10.7866L19.9344 16.4336C19.6614 16.6246 19.5794 16.8986 19.6754 17.1856L22.6824 26.3596C22.7234 26.4826 22.7514 26.5366 22.6964 26.5646C22.6554 26.6056 22.6004 26.5646 22.4914 26.4956L14.7254 20.7946C14.4664 20.6036 14.1924 20.6036 13.9324 20.7946L6.1534 26.4956C6.0574 26.5646 6.0034 26.6056 5.9484 26.5646Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
