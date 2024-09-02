import { IconProps } from "../../types"

export default function SuitClubFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.888671875 28.57421875"
          className={className}
        >
          <path
            d="              M-0.0003 16.2967C-0.0003 20.2617 2.6117 22.9547 6.4257 22.9547C9.0237 22.9547 11.1287 21.7387 11.6757 19.8517H12.0317C11.8947 22.4357 9.0647 23.5427 8.1077 24.2267C6.5077 25.3747 6.8357 28.5747 9.4067 28.5747H19.4827C22.0527 28.5747 22.3807 25.3747 20.7817 24.2267C19.8237 23.5427 16.9937 22.4357 16.8577 19.8517H17.2127C17.7597 21.7387 19.8657 22.9547 22.4627 22.9547C26.3047 22.9547 28.8887 20.2757 28.8887 16.2967C28.8887 12.5507 26.2497 10.0077 22.3397 10.0077C21.5197 10.0077 20.6717 10.1447 19.8517 10.4457C20.8907 9.0917 21.2867 7.6157 21.2867 6.2067C21.2867 2.8707 18.5257 -0.0003 14.4507 -0.0003C10.3637 -0.0003 7.6017 2.8707 7.6017 6.2067C7.6017 7.6157 7.9977 9.0917 9.0367 10.4457C8.3397 10.1717 7.3557 10.0077 6.5487 10.0077C2.6387 10.0077 -0.0003 12.5507 -0.0003 16.2967Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.330078125 27.111328125"
          className={className}
        >
          <path
            d="              M-0.0003 15.8595C-0.0003 19.4685 2.5977 22.0935 6.1387 22.0935C8.3397 22.0935 10.3227 21.1775 11.0057 19.4415H11.2387C11.1837 21.6285 8.7637 22.9415 7.8887 23.7075C6.5897 24.8005 7.0547 27.1115 8.9687 27.1115H18.3617C20.2757 27.1115 20.7407 24.8005 19.4417 23.7075C18.5667 22.9415 16.1467 21.6285 16.0917 19.4415H16.3237C16.9937 21.1775 18.9907 22.0935 21.1917 22.0935C24.7457 22.0935 27.3297 19.4825 27.3297 15.8595C27.3297 12.3455 24.7737 9.6935 21.1777 9.6935C20.1387 9.6935 19.0727 9.9665 18.1697 10.5135C19.5367 9.1465 20.0297 7.5465 20.0297 6.0565C20.0297 2.7615 17.3227 -0.0005 13.6577 -0.0005C10.0077 -0.0005 7.3007 2.7615 7.3007 6.0565C7.3007 7.5465 7.7927 9.1465 9.1597 10.5135C8.3127 9.9805 7.1777 9.6935 6.1527 9.6935C2.5567 9.6935 -0.0003 12.3455 -0.0003 15.8595Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.150390625 27.876953125"
          className={className}
        >
          <path
            d="              M-0.0003 16.0779C-0.0003 19.8789 2.5977 22.5449 6.2887 22.5449C8.6957 22.5449 10.7597 21.4649 11.3617 19.6469H11.6617C11.5527 22.0529 8.9277 23.2559 7.9977 23.9809C6.5487 25.1019 6.9317 27.8769 9.2007 27.8769H18.9487C21.2187 27.8769 21.6017 25.1019 20.1527 23.9809C19.2367 23.2559 16.5977 22.0529 16.5017 19.6469H16.7887C17.4047 21.4649 19.4547 22.5449 21.8617 22.5449C25.5667 22.5449 28.1507 19.8929 28.1507 16.0779C28.1507 12.4409 25.5527 9.8439 21.7927 9.8439C20.8637 9.8439 19.9197 10.0489 19.0587 10.4729C20.2477 9.1059 20.6987 7.5739 20.6987 6.1249C20.6987 2.8159 17.9647 -0.0001 14.0817 -0.0001C10.1987 -0.0001 7.4507 2.8159 7.4507 6.1249C7.4507 7.5739 7.9027 9.1059 9.0917 10.4729C8.3257 10.0759 7.2737 9.8439 6.3577 9.8439C2.5977 9.8439 -0.0003 12.4409 -0.0003 16.0779Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.3203125 25.169921875"
          className={className}
        >
          <path
            d="              M-0.0003 15.0386C-0.0003 18.3206 2.4477 20.7406 5.7147 20.7406C7.6017 20.7406 9.4197 20.0426 10.2267 18.4976H10.3637C10.2537 20.3706 8.3947 21.8886 7.3967 22.8866C6.4807 23.8296 7.0277 25.1696 8.2577 25.1696H17.0627C18.2927 25.1696 18.8397 23.8296 17.9237 22.8866C16.9117 21.8886 15.0667 20.3706 14.9567 18.4976H15.0937C15.9007 20.0426 17.7187 20.7406 19.6057 20.7406C22.8727 20.7406 25.3207 18.3206 25.3207 15.0386C25.3207 11.8266 22.8317 9.1606 19.6467 9.1606C18.4437 9.1606 17.1717 9.5566 16.1737 10.3636C17.9097 8.9276 18.4297 7.2046 18.4297 5.7696C18.4297 2.5706 15.8317 -0.0004 12.6597 -0.0004C9.4747 -0.0004 6.8907 2.5706 6.8907 5.7696C6.8907 7.2046 7.3967 8.9276 9.1467 10.3636C8.1487 9.5566 6.8637 9.1606 5.6737 9.1606C2.4747 9.1606 -0.0003 11.8266 -0.0003 15.0386Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.33203125 26.154296875"
          className={className}
        >
          <path
            d="              M-0.0003 15.5727C-0.0003 18.9487 2.5837 21.5197 5.9477 21.5197C7.9027 21.5197 9.8167 20.8087 10.5687 19.1547H10.7457C10.7187 21.1097 8.5727 22.5447 7.7387 23.3657C6.6447 24.4047 7.1917 26.1547 8.6957 26.1547H17.6367C19.1407 26.1547 19.6877 24.4047 18.5937 23.3657C17.7597 22.5447 15.6137 21.1097 15.5857 19.1547H15.7637C16.5157 20.8087 18.4297 21.5197 20.3847 21.5197C23.7477 21.5197 26.3317 18.9627 26.3317 15.5727C26.3317 12.2087 23.8297 9.4747 20.4397 9.4747C19.2637 9.4747 18.0607 9.8297 17.0897 10.5407C18.6617 9.1737 19.2227 7.4787 19.2227 5.9477C19.2227 2.6657 16.5567 -0.0003 13.1657 -0.0003C9.7757 -0.0003 7.1097 2.6657 7.1097 5.9477C7.1097 7.4787 7.6697 9.1737 9.2417 10.5407C8.2987 9.8437 7.0687 9.4747 5.8927 9.4747C2.5017 9.4747 -0.0003 12.2087 -0.0003 15.5727Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.771484375 25.62109375"
          className={className}
        >
          <path
            d="              M-0.0003 15.4087C-0.0003 18.6757 2.5837 21.2047 5.8377 21.2047C7.6567 21.2047 9.5297 20.6037 10.3227 19.0037H10.4587C10.4727 20.8227 8.4767 22.3267 7.6567 23.1737C6.6717 24.1997 7.2737 25.6207 8.5447 25.6207H17.2267C18.4977 25.6207 19.0857 24.1997 18.1157 23.1737C17.2947 22.3267 15.2987 20.8227 15.3127 19.0037H15.4487C16.2417 20.6037 18.1157 21.2047 19.9197 21.2047C23.1877 21.2047 25.7717 18.6757 25.7717 15.4087C25.7717 12.1267 23.2967 9.3517 20.0297 9.3517C18.7717 9.3517 17.4867 9.7757 16.4887 10.5687C18.1837 9.1877 18.7717 7.4517 18.7717 5.8927C18.7717 2.6247 16.1327 -0.0003 12.8787 -0.0003C9.6387 -0.0003 6.9997 2.6247 6.9997 5.8927C6.9997 7.4517 7.5877 9.1877 9.2827 10.5687C8.2847 9.7757 6.9997 9.3517 5.7417 9.3517C2.4747 9.3517 -0.0003 12.1267 -0.0003 15.4087Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.755859375 26.564453125"
          className={className}
        >
          <path
            d="              M-0.0003 15.6818C-0.0003 19.1678 2.5837 21.7658 6.0297 21.7658C8.0937 21.7658 10.0347 20.9588 10.7457 19.2778H10.9647C10.9237 21.3278 8.6547 22.7088 7.8067 23.5018C6.6167 24.5688 7.1367 26.5648 8.8187 26.5648H17.9507C19.6327 26.5648 20.1387 24.5688 18.9627 23.5018C18.1017 22.7088 15.8457 21.3278 15.8047 19.2778H16.0097C16.7207 20.9588 18.6757 21.7658 20.7267 21.7658C24.1857 21.7658 26.7557 19.1818 26.7557 15.6818C26.7557 12.2638 24.2267 9.5568 20.7677 9.5568C19.6467 9.5568 18.4977 9.8848 17.5547 10.5278C19.0447 9.1468 19.5777 7.5058 19.5777 5.9888C19.5777 2.6938 16.8987 -0.0002 13.3847 -0.0002C9.8707 -0.0002 7.1917 2.6938 7.1917 5.9888C7.1917 7.5058 7.7247 9.1468 9.2147 10.5278C8.2987 9.8988 7.1097 9.5568 6.0017 9.5568C2.5297 9.5568 -0.0003 12.2638 -0.0003 15.6818Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.71875 24.5546875"
          className={className}
        >
          <path
            d="              M-0.0003 14.5608C-0.0003 17.8688 2.2697 20.1248 5.5367 20.1248C7.5327 20.1248 9.2697 19.3048 10.0897 17.8278H10.2407C9.9667 19.7698 8.2987 21.3008 7.0547 22.5038C6.2207 23.3238 6.6857 24.5548 7.8747 24.5548H16.8437C18.0327 24.5548 18.4977 23.3238 17.6637 22.5038C16.4197 21.3008 14.7517 19.7698 14.4787 17.8278H14.6157C15.4487 19.3048 17.1717 20.1248 19.1677 20.1248C22.4487 20.1248 24.7187 17.8688 24.7187 14.5608C24.7187 11.4298 22.2307 8.9008 19.1547 8.9008C18.0197 8.9008 16.7477 9.2698 15.7637 10.1038C17.5687 8.5718 17.9647 6.8628 17.9647 5.6058C17.9647 2.4878 15.4487 -0.0002 12.3597 -0.0002C9.2697 -0.0002 6.7537 2.4878 6.7537 5.6058C6.7537 6.8628 7.1507 8.5718 8.9547 10.1038C7.9707 9.2698 6.6987 8.9008 5.5647 8.9008C2.4747 8.9008 -0.0003 11.4298 -0.0003 14.5608Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.404296875 24.240234375"
          className={className}
        >
          <path
            d="              M-0.0003 14.3145C-0.0003 17.6365 2.1737 19.8105 5.4547 19.8105C7.5057 19.8105 9.1877 18.9355 10.0347 17.4865H10.1717C9.8167 19.4555 8.2437 21.0005 6.8767 22.3125C6.0837 23.0785 6.5077 24.2405 7.6837 24.2405H16.7207C17.8967 24.2405 18.3207 23.0785 17.5277 22.3125C16.1597 21.0005 14.5877 19.4555 14.2327 17.4865H14.3827C15.2167 18.9355 16.8987 19.8105 18.9487 19.8105C22.2307 19.8105 24.4047 17.6365 24.4047 14.3145C24.4047 11.2385 21.9297 8.7775 18.8947 8.7775C17.8007 8.7775 16.5297 9.1325 15.5447 9.9665C17.3907 8.3945 17.7327 6.6995 17.7327 5.5235C17.7327 2.4475 15.2577 0.0005 12.2087 0.0005C9.1467 0.0005 6.6717 2.4475 6.6717 5.5235C6.6717 6.6995 7.0277 8.3945 8.8597 9.9665C7.8747 9.1325 6.6037 8.7775 5.5097 8.7775C2.4747 8.7775 -0.0003 11.2385 -0.0003 14.3145Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
