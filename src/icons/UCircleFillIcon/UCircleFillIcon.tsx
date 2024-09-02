import { IconProps } from "../../types"

export default function UCircleFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.873046875 29.859375"
          className={className}
        >
          <path
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 21.6701C11.3337 21.6701 8.8187 19.7151 8.8187 16.8441V10.7731C8.8187 9.1191 9.6797 8.2171 11.1977 8.2171C12.7147 8.2171 13.5757 9.1331 13.5757 10.7731V16.3921C13.5757 17.2131 14.1367 17.8281 14.9297 17.8281C15.7367 17.8281 16.2967 17.2131 16.2967 16.3921V10.7731C16.2967 9.1331 17.1577 8.2171 18.6617 8.2171C20.1937 8.2171 21.0547 9.1191 21.0547 10.7731V16.8441C21.0547 19.7151 18.5387 21.6701 14.9297 21.6701Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.875 28.888671875"
          className={className}
        >
          <path
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 21.1226C10.9787 21.1226 8.6137 19.1956 8.6137 16.2836V9.6386C8.6137 8.4086 9.2557 7.7246 10.3637 7.7246C11.4847 7.7246 12.1267 8.4216 12.1267 9.6386V15.9416C12.1267 17.3356 13.0567 18.2656 14.4377 18.2656C15.8317 18.2656 16.7477 17.3356 16.7477 15.9416V9.6386C16.7477 8.4216 17.3907 7.7246 18.4977 7.7246C19.6187 7.7246 20.2617 8.4086 20.2617 9.6386V16.2836C20.2617 19.1956 17.8967 21.1226 14.4377 21.1226Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.408203125 29.408203125"
          className={className}
        >
          <path
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 21.4104C11.1697 21.4104 8.7227 19.4684 8.7227 16.5844V10.2404C8.7227 8.7914 9.4747 7.9844 10.8147 7.9844C12.1407 7.9844 12.8927 8.8044 12.8927 10.2404V16.1874C12.8927 17.2814 13.6167 18.0334 14.6977 18.0334C15.7777 18.0334 16.5157 17.2814 16.5157 16.1874V10.2404C16.5157 8.8044 17.2677 7.9844 18.5797 7.9844C19.9197 7.9844 20.6717 8.7914 20.6717 10.2404V16.5844C20.6717 19.4684 18.2387 21.4104 14.6977 21.4104Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 20.193C10.6367 20.193 8.5177 18.375 8.5177 15.545V8.162C8.5177 7.561 8.8457 7.205 9.3787 7.205C9.9397 7.205 10.2537 7.561 10.2537 8.162V15.395C10.2537 17.418 11.6757 18.717 13.7127 18.717C15.7497 18.717 17.1577 17.418 17.1577 15.395V8.162C17.1577 7.561 17.4867 7.205 18.0197 7.205C18.5797 7.205 18.9077 7.561 18.9077 8.162V15.545C18.9077 18.375 16.7757 20.193 13.7127 20.193Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 20.7671C10.7597 20.7671 8.4907 18.8531 8.4907 15.9001V8.9001C8.4907 7.9571 8.9827 7.4101 9.8297 7.4101C10.7047 7.4101 11.1977 7.9571 11.1977 8.9001V15.6401C11.1977 17.4181 12.3597 18.5391 14.1227 18.5391C15.8867 18.5391 17.0347 17.4181 17.0347 15.6401V8.9001C17.0347 7.9571 17.5407 7.4101 18.3887 7.4101C19.2637 7.4101 19.7557 7.9571 19.7557 8.9001V15.9001C19.7557 18.8531 17.4867 20.7671 14.1227 20.7671Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 20.5624C10.6367 20.5624 8.4217 18.6624 8.4217 15.6954V8.4904C8.4217 7.6974 8.8317 7.2184 9.5297 7.2184C10.2677 7.2184 10.6777 7.6974 10.6777 8.4904V15.4764C10.6777 17.4594 11.9767 18.6894 13.9457 18.6894C15.9137 18.6894 17.1987 17.4594 17.1987 15.4764V8.4904C17.1987 7.6974 17.6227 7.2184 18.3207 7.2184C19.0587 7.2184 19.4687 7.6974 19.4687 8.4904V15.6954C19.4687 18.6624 17.2537 20.5624 13.9457 20.5624Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.51953125 28.51953125"
          className={className}
        >
          <path
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 20.9179C10.8557 20.9179 8.5447 18.9899 8.5447 16.0649V9.2289C8.5447 8.1489 9.1057 7.5469 10.0627 7.5469C11.0467 7.5469 11.5937 8.1619 11.5937 9.2289V15.7769C11.5937 17.3769 12.6597 18.4159 14.2597 18.4159C15.8597 18.4159 16.9117 17.3769 16.9117 15.7769V9.2289C16.9117 8.1619 17.4727 7.5469 18.4297 7.5469C19.4137 7.5469 19.9747 8.1489 19.9747 9.2289V16.0649C19.9747 18.9899 17.6637 20.9179 14.2597 20.9179Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.3987 19.7152C10.6507 19.7152 8.6407 18.0192 8.6407 15.3402V7.7382C8.6407 7.3962 8.8597 7.1912 9.1737 7.1912C9.5017 7.1912 9.6937 7.3962 9.6937 7.7382V15.2852C9.6937 17.3772 11.2797 18.7582 13.3987 18.7582C15.5317 18.7582 17.1037 17.3772 17.1037 15.2852V7.7382C17.1037 7.3962 17.3227 7.1912 17.6367 7.1912C17.9647 7.1912 18.1567 7.3962 18.1567 7.7382V15.3402C18.1567 18.0192 16.1467 19.7152 13.3987 19.7152Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 19.4551C10.6637 19.4551 8.7087 17.8281 8.7087 15.2171V7.5191C8.7087 7.3011 8.8597 7.1641 9.0647 7.1641C9.2827 7.1641 9.4067 7.3011 9.4067 7.5191V15.2301C9.4067 17.3361 11.0737 18.7711 13.2477 18.7711C15.4077 18.7711 17.0757 17.3361 17.0757 15.2301V7.5191C17.0757 7.3011 17.2267 7.1641 17.4317 7.1641C17.6507 7.1641 17.7867 7.3011 17.7867 7.5191V15.2171C17.7867 17.8281 15.8317 19.4551 13.2477 19.4551Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}