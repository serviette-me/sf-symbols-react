import { IconProps } from "../../types"

export default function SleepCircleFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.873046875 29.873046875"
          className={className}
        >
          <path
            d="              M14.9297 29.8734C23.1597 29.8734 29.8727 23.1604 29.8727 14.9294C29.8727 6.7124 23.1597 0.0004 14.9297 0.0004C6.7127 0.0004 -0.0003 6.7124 -0.0003 14.9294C-0.0003 23.1604 6.7127 29.8734 14.9297 29.8734ZM7.2327 14.9294C7.2327 10.6914 10.6917 7.2324 14.9297 7.2324C19.1817 7.2324 22.6407 10.6914 22.6407 14.9294C22.6407 19.1814 19.1817 22.6404 14.9297 22.6404C10.6917 22.6404 7.2327 19.1814 7.2327 14.9294ZM10.5137 14.9294C10.5137 15.0934 10.5277 15.3264 10.5547 15.3944H19.3187C19.3457 15.3264 19.3597 15.0934 19.3597 14.9294C19.3597 12.4684 17.3767 10.5004 14.9297 10.5004C12.4687 10.5004 10.5137 12.4824 10.5137 14.9294ZM11.8537 18.1154C12.6597 18.8944 13.7407 19.3594 14.9297 19.3594C16.1467 19.3594 17.2127 18.8944 18.0197 18.1154Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.875 28.875"
          className={className}
        >
          <path
            d="              M14.4377 28.8753C22.3667 28.8753 28.8747 22.3533 28.8747 14.4373C28.8747 6.5083 22.3537 0.0003 14.4377 0.0003C6.5077 0.0003 -0.0003 6.5083 -0.0003 14.4373C-0.0003 22.3533 6.5217 28.8753 14.4377 28.8753ZM6.2477 14.4373C6.2477 9.9263 9.9397 6.2342 14.4377 6.2342C18.9487 6.2342 22.6547 9.9263 22.6547 14.4373C22.6547 18.9353 18.9487 22.6403 14.4507 22.6403C9.9397 22.6403 6.2477 18.9353 6.2477 14.4373ZM8.9007 14.4373C8.9007 14.9163 8.9827 15.4083 9.1327 15.7913H19.7827C19.9197 15.4083 20.0017 14.9163 20.0017 14.4373C19.9887 11.3473 17.5137 8.8863 14.4377 8.8863C11.3617 8.8863 8.9007 11.3473 8.9007 14.4373ZM10.2947 18.0883C11.2927 19.2503 12.7827 19.9883 14.4507 19.9883C16.1187 19.9883 17.6097 19.2503 18.6077 18.0883Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.408203125 29.39453125"
          className={className}
        >
          <path
            d="              M14.6977 29.395C22.7777 29.395 29.4077 22.777 29.4077 14.697C29.4077 6.617 22.7777 0 14.6977 0C6.6167 0 -0.0003 6.617 -0.0003 14.697C-0.0003 22.777 6.6167 29.395 14.6977 29.395ZM6.7677 14.697C6.7677 10.336 10.3357 6.754 14.6977 6.754C19.0727 6.754 22.6407 10.336 22.6407 14.697C22.6407 19.059 19.0727 22.641 14.7107 22.641C10.3357 22.641 6.7677 19.059 6.7677 14.697ZM9.7477 14.697C9.7477 14.998 9.8027 15.353 9.8847 15.572H19.5367C19.6187 15.353 19.6597 14.998 19.6597 14.697C19.6597 11.936 17.4457 9.734 14.6977 9.734C11.9487 9.734 9.7477 11.949 9.7477 14.697ZM11.1157 18.102C12.0177 19.059 13.2887 19.66 14.7107 19.66C16.1327 19.66 17.4047 19.059 18.3067 18.102Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.42578125 27.42578125"
          className={className}
        >
          <path
            d="              M13.7127 27.4253C21.2187 27.4253 27.4257 21.2323 27.4257 13.7133C27.4257 6.2073 21.2187 0.0003 13.6987 0.0003C6.1937 0.0003 -0.0003 6.2073 -0.0003 13.7133C-0.0003 21.2323 6.2067 27.4253 13.7127 27.4253ZM5.2227 13.7133C5.2227 9.0503 9.0647 5.2093 13.7127 5.2093C18.3747 5.2093 22.2307 9.0503 22.2307 13.7133C22.2307 18.3753 18.3747 22.2163 13.7267 22.2163C9.0647 22.2163 5.2227 18.3753 5.2227 13.7133ZM6.8087 13.7133C6.8087 14.6293 6.9867 15.5043 7.3277 16.2973H20.1247C20.4667 15.5043 20.6447 14.6293 20.6447 13.7133C20.6307 9.8713 17.5407 6.7953 13.7127 6.7953C9.8847 6.7953 6.8087 9.8713 6.8087 13.7133ZM8.1347 17.7733C9.3787 19.4963 11.4157 20.6313 13.7267 20.6313C16.0367 20.6313 18.0737 19.4963 19.3187 17.7733Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.24609375 28.24609375"
          className={className}
        >
          <path
            d="              M14.1227 28.2465C21.8477 28.2465 28.2457 21.8615 28.2457 14.1235C28.2457 6.3985 21.8477 0.0005 14.1097 0.0005C6.3847 0.0005 -0.0003 6.3985 -0.0003 14.1235C-0.0003 21.8615 6.3987 28.2465 14.1227 28.2465ZM5.6057 14.1235C5.6057 9.4605 9.4607 5.5915 14.1227 5.5915C18.7987 5.5915 22.6677 9.4605 22.6677 14.1235C22.6677 18.7985 18.8127 22.6545 14.1367 22.6545C9.4607 22.6545 5.6057 18.7985 5.6057 14.1235ZM7.8747 14.1235C7.8747 14.8065 7.9977 15.4625 8.2167 16.0645H20.0707C20.2887 15.4625 20.4117 14.8065 20.4117 14.1235C20.3987 10.6365 17.5957 7.8615 14.1227 7.8615C10.6507 7.8615 7.8747 10.6365 7.8747 14.1235ZM9.2967 18.0875C10.4317 19.4965 12.1677 20.3985 14.1367 20.3985C16.1057 20.3985 17.8557 19.4965 18.9907 18.0875Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.890625 27.890625"
          className={className}
        >
          <path
            d="              M13.9457 27.8907C21.5737 27.8907 27.8907 21.5737 27.8907 13.9457C27.8907 6.3297 21.5607 -0.0003 13.9317 -0.0003C6.3167 -0.0003 -0.0003 6.3297 -0.0003 13.9457C-0.0003 21.5737 6.3297 27.8907 13.9457 27.8907ZM5.2497 13.9457C5.2497 9.1877 9.2007 5.2367 13.9457 5.2367C18.7167 5.2367 22.6677 9.1877 22.6677 13.9457C22.6677 18.7167 18.7307 22.6547 13.9587 22.6547C9.2007 22.6547 5.2497 18.7167 5.2497 13.9457ZM7.3007 13.9457C7.3007 14.7387 7.4377 15.5037 7.6977 16.2007H20.2347C20.4937 15.5037 20.6307 14.7387 20.6307 13.9457C20.6167 10.2267 17.6507 7.2737 13.9457 7.2737C10.2407 7.2737 7.3007 10.2267 7.3007 13.9457ZM8.7367 18.0737C9.9397 19.6187 11.8257 20.6167 13.9587 20.6167C16.0917 20.6167 17.9917 19.6187 19.2087 18.0737Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.51953125 28.533203125"
          className={className}
        >
          <path
            d="              M14.2597 28.5332C22.0797 28.5332 28.5197 22.0802 28.5197 14.2732C28.5197 6.4532 22.0667 0.0002 14.2457 0.0002C6.4397 0.0002 -0.0003 6.4532 -0.0003 14.2732C-0.0003 22.0802 6.4397 28.5332 14.2597 28.5332ZM5.8787 14.2732C5.8787 9.6662 9.6657 5.8792 14.2597 5.8792C18.8537 5.8792 22.6547 9.6662 22.6547 14.2732C22.6547 18.8672 18.8667 22.6542 14.2737 22.6542C9.6657 22.6542 5.8787 18.8672 5.8787 14.2732ZM8.3257 14.2732C8.3257 14.8612 8.4217 15.4492 8.6137 15.9552H19.9477C20.1247 15.4492 20.2347 14.8612 20.2347 14.2732C20.2207 10.9512 17.5687 8.3122 14.2597 8.3122C10.9507 8.3122 8.3257 10.9512 8.3257 14.2732ZM9.7207 18.0882C10.8007 19.4002 12.4417 20.2212 14.2737 20.2212C16.1057 20.2212 17.7457 19.4002 18.8257 18.0882Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.810546875 26.810546875"
          className={className}
        >
          <path
            d="              M13.4117 26.8109C20.7677 26.8109 26.8107 20.7679 26.8107 13.3989C26.8107 6.0429 20.7677 -0.0001 13.3987 -0.0001C6.0427 -0.0001 -0.0003 6.0429 -0.0003 13.3989C-0.0003 20.7679 6.0427 26.8109 13.4117 26.8109ZM5.1817 13.3989C5.1817 8.8869 8.9007 5.1679 13.4117 5.1679C17.9237 5.1679 21.6427 8.8869 21.6427 13.3989C21.6427 17.9099 17.9237 21.6289 13.4117 21.6289C8.9007 21.6289 5.1817 17.9099 5.1817 13.3989ZM6.1657 13.3989C6.1657 14.4789 6.3987 15.4899 6.8357 16.4059H19.9887C20.4257 15.4899 20.6577 14.4789 20.6577 13.3989C20.6577 9.3929 17.4047 6.1519 13.4117 6.1519C9.4067 6.1519 6.1657 9.3929 6.1657 13.3989ZM7.3557 17.3499C8.6407 19.3319 10.8687 20.6449 13.4117 20.6449C15.9547 20.6449 18.1837 19.3319 19.4687 17.3499Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.49609375 26.49609375"
          className={className}
        >
          <path
            d="              M13.2477 26.4965C20.5347 26.4965 26.4957 20.5355 26.4957 13.2485C26.4957 5.9605 20.5347 0.0005 13.2477 0.0005C5.9607 0.0005 -0.0003 5.9605 -0.0003 13.2485C-0.0003 20.5355 5.9607 26.4965 13.2477 26.4965ZM5.1677 13.2485C5.1677 8.8045 8.8047 5.1675 13.2477 5.1675C17.6917 5.1675 21.3417 8.8045 21.3417 13.2485C21.3417 17.6915 17.6917 21.3415 13.2477 21.3415C8.8047 21.3415 5.1677 17.6915 5.1677 13.2485ZM5.8377 13.2485C5.8377 14.4105 6.0977 15.4905 6.5757 16.4745H19.9197C20.3987 15.4905 20.6577 14.4105 20.6577 13.2485C20.6577 9.1605 17.3357 5.8375 13.2477 5.8375C9.1597 5.8375 5.8377 9.1605 5.8377 13.2485ZM6.9457 17.1585C8.2577 19.2635 10.5817 20.6585 13.2477 20.6585C15.9137 20.6585 18.2387 19.2635 19.5507 17.1585Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}