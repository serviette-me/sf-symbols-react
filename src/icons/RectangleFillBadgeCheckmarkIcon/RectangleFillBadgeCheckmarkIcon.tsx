import { IconProps } from "../../types"

export default function RectangleFillBadgeCheckmarkIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.49609375 29.23046875"
          className={className}
        >
          <path
            d="              M15.5035 27.1113H35.1365C38.5135 27.1113 40.4965 25.1293 40.4965 21.7523V5.3592C40.4965 1.9683 38.5135 0.0003 35.1365 0.0003H12.8245C9.4475 0.0003 7.4645 1.9683 7.4645 5.3592V12.0993C12.7695 12.1133 17.1445 16.4883 17.1445 21.7653C17.1445 23.7343 16.5425 25.5663 15.5035 27.1113ZM7.4515 29.2303C11.5395 29.2303 14.9025 25.8403 14.9025 21.7653C14.9025 17.7053 11.5395 14.3283 7.4515 14.3283C3.3765 14.3283 -0.0005 17.7053 -0.0005 21.7653C-0.0005 25.8403 3.3765 29.2303 7.4515 29.2303ZM6.8225 25.8943C6.3985 25.8943 5.9335 25.7993 5.6325 25.4573L3.4315 23.1193C3.1585 22.8043 2.9255 22.4493 2.9255 22.0393C2.9255 21.0133 3.7185 20.5353 4.4705 20.5353C4.8945 20.5353 5.2635 20.6443 5.5375 20.9593L6.6715 22.3263L9.4195 18.5663C9.7205 18.1423 10.1715 17.8963 10.6645 17.8963C11.5115 17.8963 12.1675 18.5803 12.1675 19.4003C12.1675 19.6603 12.0995 19.9743 11.9215 20.2203L8.0255 25.3612C7.7795 25.6893 7.3005 25.8943 6.8225 25.8943Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.83984375 28.4921875"
          className={className}
        >
          <path
            d="              M15.0388 26.1407H35.0138C38.1448 26.1407 39.8398 24.4457 39.8398 21.3417V4.7987C39.8398 1.6957 38.1448 -0.0003 35.0138 -0.0003H12.0318C8.9138 -0.0003 7.2048 1.6957 7.2048 4.7987V12.0447C12.2778 12.0447 16.4478 16.2287 16.4478 21.2867C16.4478 23.0647 15.9418 24.7327 15.0388 26.1407ZM7.2048 28.4917C11.1288 28.4917 14.3968 25.2247 14.3968 21.2867C14.3968 17.3497 11.1567 14.0957 7.2048 14.0957C3.2538 14.0957 -0.0002 17.3497 -0.0002 21.2867C-0.0002 25.2387 3.2538 28.4917 7.2048 28.4917ZM6.4668 25.2247C6.1528 25.2247 5.7698 25.1287 5.5367 24.8687L3.2808 22.4217C3.0628 22.1757 2.9118 21.8747 2.9118 21.5737C2.9118 20.8227 3.4998 20.3847 4.1018 20.3847C4.4708 20.3847 4.7578 20.5077 4.9628 20.7537L6.3848 22.3397L9.4198 18.1427C9.6528 17.8277 10.0078 17.6227 10.4048 17.6227C11.0468 17.6227 11.5798 18.1427 11.5798 18.7987C11.5798 19.0037 11.5117 19.2637 11.3618 19.4687L7.4378 24.8007C7.2328 25.0607 6.8638 25.2247 6.4668 25.2247Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.181640625 28.888671875"
          className={className}
        >
          <path
            d="              M15.2855 26.6605H35.0685C38.3355 26.6605 40.1815 24.8145 40.1815 21.5605V5.0995C40.1815 1.8455 38.3355 -0.0005 35.0685 -0.0005H12.4555C9.2015 -0.0005 7.3415 1.8455 7.3415 5.0995V12.0725C12.5375 12.0855 16.8165 16.3655 16.8165 21.5465C16.8165 23.4195 16.2555 25.1835 15.2855 26.6605ZM7.3415 28.8885C11.3475 28.8885 14.6695 25.5525 14.6695 21.5465C14.6695 17.5415 11.3615 14.2325 7.3415 14.2325C3.3225 14.2325 0.0005 17.5415 0.0005 21.5465C0.0005 25.5665 3.3225 28.8885 7.3415 28.8885ZM6.6585 25.5935C6.2895 25.5935 5.8515 25.4845 5.5785 25.1835L3.3635 22.7915C3.1175 22.5175 2.9255 22.1895 2.9255 21.8205C2.9255 20.9315 3.6095 20.4665 4.2935 20.4665C4.6895 20.4665 5.0175 20.5895 5.2635 20.8635L6.5355 22.3395L9.4195 18.3745C9.6935 18.0055 10.0895 17.7875 10.5415 17.7875C11.2935 17.7875 11.8945 18.3745 11.8945 19.1265C11.8945 19.3595 11.8265 19.6465 11.6485 19.8655L7.7515 25.1015C7.5195 25.4025 7.0955 25.5935 6.6585 25.5935Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.814453125 27.3984375"
          className={className}
        >
          <path
            d="              M14.0546 24.7595H34.7816C37.4606 24.7595 38.8146 23.3925 38.8146 20.7675V4.0055C38.8146 1.3675 37.4606 0.0005 34.7816 0.0005H10.8286C8.1626 0.0005 6.7946 1.3535 6.7946 4.0055V12.1955C11.4026 12.2095 15.1756 15.9825 15.1756 20.5895C15.1756 22.0935 14.7656 23.5295 14.0546 24.7595ZM6.7946 27.3985C10.4866 27.3985 13.5896 24.3225 13.5896 20.5895C13.5896 16.8575 10.5276 13.7945 6.7946 13.7945C3.0766 13.7945 -0.0004 16.8715 -0.0004 20.5895C-0.0004 24.3355 3.0766 27.3985 6.7946 27.3985ZM5.9476 24.1855C5.7556 24.1855 5.5096 24.0895 5.3596 23.9125L3.0896 21.4375C2.9536 21.2735 2.8846 21.0685 2.8846 20.8905C2.8846 20.4665 3.2126 20.1525 3.6226 20.1525C3.8966 20.1525 4.0746 20.2755 4.2106 20.4255L5.9196 22.2575L9.2556 17.6505C9.3926 17.4595 9.6116 17.3225 9.8716 17.3225C10.2676 17.3225 10.6226 17.6505 10.6226 18.0605C10.6226 18.2105 10.5546 18.3615 10.4456 18.5115L6.5766 23.8985C6.4396 24.0625 6.2206 24.1855 5.9476 24.1855Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.4296875 28.013671875"
          className={className}
        >
          <path
            d="              M14.7517 25.5253H34.9457C37.8987 25.5253 39.4297 23.9943 39.4297 21.0823V4.4433C39.4297 1.5173 37.8987 0.0003 34.9457 0.0003H11.5257C8.5727 0.0003 7.0407 1.5173 7.0407 4.4433V12.0043C11.9627 12.0043 16.0237 16.0503 16.0237 20.9723C16.0237 22.6273 15.5587 24.1853 14.7517 25.5253ZM7.0407 28.0133C10.8687 28.0133 14.0817 24.8283 14.0817 20.9723C14.0817 17.1173 10.8967 13.9453 7.0407 13.9453C3.1857 13.9453 -0.0003 17.1313 -0.0003 20.9723C-0.0003 24.8423 3.1857 28.0133 7.0407 28.0133ZM6.2477 24.7873C5.9887 24.7873 5.6737 24.6913 5.4687 24.4723L3.1857 21.9703C2.9937 21.7653 2.8987 21.5063 2.8987 21.2733C2.8987 20.6853 3.3497 20.2893 3.8827 20.2893C4.1977 20.2893 4.4437 20.4253 4.6077 20.6033L6.1937 22.3403L9.4197 17.8693C9.5977 17.6233 9.8987 17.4453 10.2407 17.4453C10.7597 17.4453 11.2107 17.8693 11.2107 18.4163C11.2107 18.5803 11.1427 18.7993 11.0057 18.9763L7.0547 24.4313C6.8907 24.6503 6.5757 24.7873 6.2477 24.7873Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.18359375 27.740234375"
          className={className}
        >
          <path
            d="              M14.574 25.1695H34.891C37.762 25.1695 39.184 23.7485 39.184 20.9315V4.2385C39.184 1.4215 37.762 -0.0005 34.891 -0.0005H11.238C8.381 -0.0005 6.945 1.4085 6.945 4.2385V11.9765C11.785 11.9765 15.764 15.9555 15.764 20.7945C15.764 22.3805 15.34 23.8715 14.574 25.1695ZM6.945 27.7405C10.719 27.7405 13.891 24.5955 13.891 20.7945C13.891 16.9945 10.76 13.8495 6.945 13.8495C3.145 13.8495 0 16.9945 0 20.7945C0 24.6235 3.145 27.7405 6.945 27.7405ZM6.111 24.5405C5.893 24.5405 5.605 24.4455 5.441 24.2535L3.117 21.7105C2.967 21.5335 2.898 21.2875 2.898 21.0955C2.898 20.6035 3.268 20.2345 3.746 20.2345C4.033 20.2345 4.252 20.3715 4.402 20.5355L6.084 22.3395L9.42 17.7185C9.57 17.4995 9.83 17.3355 10.145 17.3355C10.596 17.3355 11.006 17.7055 11.006 18.1835C11.006 18.3475 10.938 18.5255 10.814 18.7035L6.836 24.2265C6.686 24.4175 6.412 24.5405 6.111 24.5405Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.607421875 28.232421875"
          className={className}
        >
          <path
            d="              M14.875 25.785H34.973C37.994 25.785 39.607 24.199 39.607 21.205V4.594C39.607 1.6 37.994 0 34.973 0H11.744C8.723 0 7.109 1.6 7.109 4.594V12.018C12.1 12.031 16.201 16.133 16.201 21.109C16.201 22.818 15.723 24.418 14.875 25.785ZM7.109 28.232C10.978 28.232 14.219 24.992 14.219 21.109C14.219 17.227 11.006 14.014 7.109 14.014C3.213 14.014 0 17.227 0 21.109C0 25.02 3.213 28.232 7.109 28.232ZM6.344 24.979C6.057 24.979 5.715 24.883 5.496 24.637L3.213 22.162C3.021 21.943 2.912 21.67 2.912 21.396C2.912 20.74 3.418 20.33 3.978 20.33C4.307 20.33 4.58 20.467 4.758 20.672L6.275 22.34L9.42 17.992C9.625 17.705 9.939 17.527 10.309 17.527C10.883 17.527 11.375 17.992 11.375 18.58C11.375 18.771 11.307 18.99 11.156 19.195L7.219 24.596C7.041 24.828 6.699 24.979 6.344 24.979Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.322265625 26.90625"
          className={className}
        >
          <path
            d="              M13.3572 24.1994H34.6442C37.0642 24.1994 38.3222 22.9144 38.3222 20.5354V3.6774C38.3222 1.2984 37.0642 0.0004 34.6442 0.0004H10.2952C7.8752 0.0004 6.6032 1.2574 6.6032 3.6774V12.4824C10.8832 12.4964 14.4102 16.0234 14.4102 20.3024C14.4102 21.7114 14.0272 23.0504 13.3572 24.1994ZM6.6032 26.9064C10.1992 26.9064 13.1932 23.9254 13.1932 20.3024C13.1932 16.6794 10.2262 13.6994 6.6032 13.6994C2.9802 13.6994 0.0002 16.6934 0.0002 20.3024C0.0002 23.9394 2.9802 26.9064 6.6032 26.9064ZM5.7422 23.6794C5.5782 23.6794 5.3872 23.6114 5.2502 23.4614L3.0622 21.0544C2.9392 20.9184 2.8852 20.7544 2.8852 20.6034C2.8852 20.2614 3.1442 20.0294 3.4862 20.0294C3.7052 20.0294 3.8552 20.1524 3.9652 20.2614L5.7152 22.1344L9.0372 17.5544C9.1602 17.3904 9.3382 17.2954 9.5432 17.2954C9.8572 17.2954 10.1172 17.5414 10.1172 17.8694C10.1172 18.0054 10.0622 18.1294 9.9802 18.2524L6.2212 23.4334C6.1112 23.5844 5.9612 23.6794 5.7422 23.6794Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.076171875 26.66015625"
          className={className}
        >
          <path
            d="              M13.0155 23.912H34.5765C36.8595 23.912 38.0765 22.668 38.0765 20.398V3.514C38.0765 1.244 36.8595 0 34.5765 0H10.0215C7.7245 0 6.5075 1.217 6.5075 3.514V12.619C10.6365 12.647 14.0275 16.037 14.0275 20.152C14.0275 21.52 13.6585 22.805 13.0155 23.912ZM6.4945 26.66C10.0485 26.66 13.0015 23.734 13.0015 20.152C13.0015 16.584 10.0765 13.658 6.4945 13.658C2.9395 13.658 0.0005 16.598 0.0005 20.152C0.0005 23.734 2.9395 26.66 6.4945 26.66ZM5.6325 23.434C5.4825 23.434 5.3325 23.365 5.2095 23.215L3.0485 20.85C2.9395 20.727 2.8845 20.59 2.8845 20.453C2.8845 20.166 3.1175 19.947 3.4045 19.947C3.6095 19.947 3.7325 20.07 3.8415 20.18L5.6055 22.066L8.9415 17.5C9.0375 17.35 9.2015 17.268 9.3655 17.268C9.6385 17.268 9.8715 17.5 9.8715 17.773C9.8715 17.91 9.8165 18.006 9.7485 18.115L6.0565 23.201C5.9475 23.338 5.8245 23.434 5.6325 23.434Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}