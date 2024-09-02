import { IconProps } from "../../types"

export default function LockOpenIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.23046875 29.326171875"
          className={className}
        >
          <path
            d="              M3.5687 29.3265H17.7047C20.0837 29.3265 21.2737 28.1235 21.2737 25.5115V14.6285C21.2737 12.2635 20.2757 11.0605 18.2517 10.8825V7.6835C18.2517 5.6055 19.6327 4.1975 21.5747 4.1975C23.4887 4.1975 24.9097 5.6055 24.9097 7.6835V10.6365C24.9097 11.8535 25.8807 12.8105 27.0707 12.8105C28.2597 12.8105 29.2307 11.8535 29.2307 10.6365V7.7245C29.2307 3.1175 26.0037 -0.0005 21.5747 -0.0005C17.1447 -0.0005 13.9317 3.1175 13.9317 7.7245V10.8555H3.5687C1.1757 10.8555 -0.0003 12.0585 -0.0003 14.6285V25.5115C-0.0003 28.1235 1.1757 29.3265 3.5687 29.3265ZM5.4137 25.1155C4.9357 25.1155 4.6897 24.8695 4.6897 24.3355V15.8325C4.6897 15.2855 4.9357 15.0665 5.4137 15.0665H15.8727C16.3517 15.0665 16.5707 15.2855 16.5707 15.8325V24.3355C16.5707 24.8695 16.3517 25.1155 15.8727 25.1155Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.68359375 28.0546875"
          className={className}
        >
          <path
            d="              M3.3227 28.0549H16.6527C18.8397 28.0549 19.9607 26.9199 19.9607 24.5269V14.3689C19.9607 12.2769 19.0727 11.1429 17.3357 10.9099V7.5199C17.3357 4.7439 19.1407 3.1309 21.3827 3.1309C23.6247 3.1309 25.4297 4.7439 25.4297 7.5199V10.4999C25.4297 11.5249 26.1677 12.2089 27.0707 12.2089C27.9457 12.2089 28.6837 11.5389 28.6837 10.4999V7.6699C28.6837 2.8029 25.3887 -0.0001 21.3827 -0.0001C17.3767 -0.0001 14.0957 2.8029 14.0957 7.6699V10.8689H3.3227C1.1207 10.8689 -0.0003 12.0179 -0.0003 14.3689V24.5269C-0.0003 26.9199 1.1207 28.0549 3.3227 28.0549ZM4.2797 24.9239C3.7457 24.9239 3.4457 24.6229 3.4457 24.0079V14.9019C3.4457 14.3009 3.7457 13.9999 4.2797 13.9999H15.6957C16.2287 13.9999 16.5157 14.3009 16.5157 14.9019V24.0079C16.5157 24.6229 16.2287 24.9239 15.6957 24.9239Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.970703125 28.724609375"
          className={className}
        >
          <path
            d="              M3.4457 28.7244H17.1997C19.4957 28.7244 20.6447 27.5484 20.6447 25.0464V14.5054C20.6447 12.2634 19.7147 11.0874 17.8277 10.8964V7.6014C17.8277 5.1954 19.4007 3.6914 21.4787 3.6914C23.5567 3.6914 25.1567 5.1954 25.1567 7.6014V10.5684C25.1567 11.6894 26.0177 12.5234 27.0707 12.5234C28.1097 12.5234 28.9707 11.7034 28.9707 10.5684V7.6974C28.9707 2.9534 25.7167 0.0004 21.4787 0.0004C17.2537 0.0004 14.0137 2.9534 14.0137 7.6974V10.8554H3.4457C1.1487 10.8554 -0.0003 12.0314 -0.0003 14.5054V25.0464C-0.0003 27.5484 1.1487 28.7244 3.4457 28.7244ZM4.8807 25.0194C4.3747 25.0194 4.1017 24.7464 4.1017 24.1714V15.3944C4.1017 14.8204 4.3747 14.5604 4.8807 14.5604H15.7907C16.2967 14.5604 16.5427 14.8204 16.5427 15.3944V24.1714C16.5427 24.7464 16.2967 25.0194 15.7907 25.0194Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.4375 26.509765625"
          className={className}
        >
          <path
            d="              M2.8987 26.5096H15.6547C17.4867 26.5096 18.5527 25.4156 18.5527 23.4476V13.6856C18.5527 12.0176 17.7867 10.9786 16.4477 10.7046V7.2736C16.4477 3.7046 18.7167 1.5996 21.6017 1.5996C24.4867 1.5996 26.7557 3.7046 26.7557 7.2736V10.2816C26.7557 10.8826 27.1387 11.1976 27.6037 11.1976C28.0407 11.1976 28.4377 10.9106 28.4377 10.2816V7.4516C28.4377 2.6386 25.3067 -0.0004 21.6017 -0.0004C17.8827 -0.0004 14.7657 2.6386 14.7657 7.4516V10.6226H2.8987C1.0667 10.6226 -0.0003 11.7306 -0.0003 13.6856V23.4476C-0.0003 25.4156 1.0667 26.5096 2.8987 26.5096ZM2.9257 24.9106C2.1877 24.9106 1.7087 24.3906 1.7087 23.5566V13.5766C1.7087 12.7426 2.1877 12.2226 2.9257 12.2226H15.6407C16.3787 12.2226 16.8437 12.7426 16.8437 13.5766V23.5566C16.8437 24.3906 16.3787 24.9106 15.6407 24.9106Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.328125 27.248046875"
          className={className}
        >
          <path
            d="              M3.1587 27.2484H15.9687C18.0467 27.2484 19.1267 26.1404 19.1267 23.8984V14.2184C19.1267 12.2914 18.3207 11.1974 16.7477 10.9374V7.3964C16.7477 4.1974 18.8127 2.4474 21.2597 2.4474C23.6937 2.4474 25.7717 4.1974 25.7717 7.3964V10.4314C25.7717 11.3064 26.3457 11.8124 27.0567 11.8124C27.7537 11.8124 28.3277 11.3474 28.3277 10.4314V7.6424C28.3277 2.5974 24.9927 0.0004 21.2597 0.0004C17.5277 0.0004 14.1917 2.5974 14.1917 7.6424V10.8824H3.1587C1.0797 10.8824 -0.0003 11.9904 -0.0003 14.2184V23.8984C-0.0003 26.1404 1.0797 27.2484 3.1587 27.2484ZM3.5547 24.8004C2.9937 24.8004 2.6527 24.4594 2.6527 23.8024V14.3144C2.6527 13.6584 2.9937 13.3304 3.5547 13.3304H15.5857C16.1597 13.3304 16.4747 13.6584 16.4747 14.3144V23.8024C16.4747 24.4594 16.1597 24.8004 15.5857 24.8004Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.13671875 26.796875"
          className={className}
        >
          <path
            d="              M3.0767 26.7973H15.5857C17.5957 26.7973 18.6617 25.7033 18.6617 23.5433V14.1233C18.6617 12.2913 17.8827 11.2243 16.4197 10.9513V7.3413C16.4197 3.8823 18.6347 2.0643 21.1917 2.0643C23.7477 2.0643 25.9627 3.8823 25.9627 7.3413V10.3773C25.9627 11.1833 26.4417 11.5933 27.0567 11.5933C27.6447 11.5933 28.1367 11.2243 28.1367 10.3773V7.6293C28.1367 2.4883 24.7597 0.0003 21.1917 0.0003C17.6097 0.0003 14.2597 2.4883 14.2597 7.6293V10.8823H3.0767C1.0667 10.8823 -0.0003 11.9763 -0.0003 14.1233V23.5433C-0.0003 25.7033 1.0667 26.7973 3.0767 26.7973ZM3.1447 24.7323C2.5567 24.7323 2.2147 24.3633 2.2147 23.6933V13.9723C2.2147 13.3023 2.5567 12.9473 3.1447 12.9473H15.5177C16.1187 12.9473 16.4477 13.3023 16.4477 13.9723V23.6933C16.4477 24.3633 16.1187 24.7323 15.5177 24.7323Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.478515625 27.603515625"
          className={className}
        >
          <path
            d="              M3.2267 27.6038H16.2557C18.3887 27.6038 19.4827 26.4828 19.4827 24.1718V14.2868C19.4827 12.2908 18.6487 11.1698 17.0077 10.9378V7.4508C17.0077 4.4438 18.9497 2.7478 21.3147 2.7478C23.6657 2.7478 25.6347 4.4438 25.6347 7.4508V10.4588C25.6347 11.4028 26.2637 11.9898 27.0567 11.9898C27.8357 11.9898 28.4787 11.4298 28.4787 10.4588V7.6558C28.4787 2.6938 25.1567 -0.0002 21.3147 -0.0002C17.4587 -0.0002 14.1507 2.6938 14.1507 7.6558V10.8828H3.2267C1.0937 10.8828 -0.0003 12.0038 -0.0003 14.2868V24.1718C-0.0003 26.4828 1.0937 27.6038 3.2267 27.6038ZM3.8687 24.8558C3.3227 24.8558 2.9937 24.5278 2.9937 23.8988V14.5738C2.9937 13.9318 3.3227 13.6168 3.8687 13.6168H15.6267C16.1877 13.6168 16.4887 13.9318 16.4887 14.5738V23.8988C16.4887 24.5278 16.1877 24.8558 15.6267 24.8558Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.833984375 26.154296875"
          className={className}
        >
          <path
            d="              M2.6657 26.1539H15.7497C17.3637 26.1539 18.4157 25.0329 18.4157 23.3239V13.1109C18.4157 11.6759 17.6637 10.6639 16.4747 10.3769V7.1919C16.4747 3.4589 18.8127 0.9979 22.1347 0.9979C25.4707 0.9979 27.7947 3.4589 27.7947 7.1919V10.1449C27.7947 10.4729 28.0547 10.6919 28.3147 10.6919C28.5747 10.6919 28.8337 10.4859 28.8337 10.1449V7.2049C28.8337 2.8299 26.0177 -0.0001 22.1347 -0.0001C18.2517 -0.0001 15.4357 2.8299 15.4357 7.2049V10.2809H2.6657C1.0667 10.2809 -0.0003 11.4019 -0.0003 13.1109V23.3239C-0.0003 25.0329 1.0667 26.1539 2.6657 26.1539ZM2.6387 25.1559C1.6957 25.1559 1.0387 24.4319 1.0387 23.3789V13.0429C1.0387 11.9899 1.6957 11.2789 2.6387 11.2789H15.7907C16.7347 11.2789 17.3767 11.9899 17.3767 13.0429V23.3789C17.3767 24.4319 16.7347 25.1559 15.7907 25.1559Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.0390625 25.94921875"
          className={className}
        >
          <path
            d="              M2.5567 25.9492H15.7907C17.2947 25.9492 18.3477 24.8422 18.3477 23.2562V12.8102C18.3477 11.4842 17.6097 10.4862 16.4887 10.1992V7.1372C16.4887 3.3222 18.8677 0.6702 22.4087 0.6702C25.9767 0.6702 28.3277 3.3222 28.3277 7.1372V10.0622C28.3277 10.2672 28.5197 10.4182 28.6837 10.4182C28.8477 10.4182 29.0387 10.2672 29.0387 10.0622V7.0822C29.0387 2.9262 26.3867 0.0002 22.4087 0.0002C18.4437 0.0002 15.7907 2.9262 15.7907 7.0822V10.1172H2.5567C1.0667 10.1172 -0.0003 11.2242 -0.0003 12.8102V23.2562C-0.0003 24.8422 1.0667 25.9492 2.5567 25.9492ZM2.4887 25.2792C1.4497 25.2792 0.7107 24.4592 0.7107 23.2972V12.7692C0.7107 11.6072 1.4497 10.7872 2.4887 10.7872H15.8727C16.9117 10.7872 17.6507 11.6072 17.6507 12.7692V23.2972C17.6507 24.4592 16.9117 25.2792 15.8727 25.2792Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
