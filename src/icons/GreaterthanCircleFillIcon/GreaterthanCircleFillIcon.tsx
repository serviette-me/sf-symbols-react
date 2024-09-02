import { IconProps } from "../../types"

export default function GreaterthanCircleFillIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM11.6077 20.5901C10.4587 20.5901 9.6387 19.7691 9.6387 18.5661C9.6387 17.5961 10.1037 17.0211 11.3477 16.5571L15.3667 15.0251V14.8611L11.3477 13.3161C10.1167 12.8511 9.6387 12.2771 9.6387 11.3071C9.6387 10.1031 10.4587 9.2831 11.6077 9.2831C12.0177 9.2831 12.3867 9.3791 12.7827 9.5571L20.2347 13.1251C21.1097 13.5491 21.5467 14.1231 21.5467 14.9981C21.5467 15.8181 21.0817 16.3511 20.2347 16.7481L12.7827 20.3161C12.3867 20.5081 12.0177 20.5901 11.6077 20.5901Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM10.9507 20.1656C10.0347 20.1656 9.3787 19.5096 9.3787 18.5936C9.3787 17.8286 9.7347 17.3766 10.6507 17.0076L16.2287 14.4926V14.3696L10.6507 11.7986C9.7477 11.4296 9.3787 10.9786 9.3787 10.2126C9.3787 9.3106 10.0347 8.6546 10.9377 8.6546C11.3067 8.6546 11.5797 8.7226 11.8807 8.8726L19.8107 12.9196C20.5217 13.2886 20.8907 13.7816 20.8907 14.4786C20.8907 15.1896 20.5217 15.6266 19.8107 15.9686L11.8807 19.9476C11.5797 20.0976 11.3067 20.1656 10.9507 20.1656Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM11.3067 20.3984C10.2537 20.3984 9.5157 19.6604 9.5157 18.5934C9.5157 17.7054 9.9257 17.1994 11.0197 16.7754L15.7777 14.7794V14.6294L11.0197 12.6054C9.9397 12.1954 9.5157 11.6754 9.5157 10.8004C9.5157 9.7344 10.2537 8.9964 11.2927 8.9964C11.6757 8.9964 12.0037 9.0784 12.3597 9.2424L20.0427 13.0434C20.8357 13.4254 21.2327 13.9724 21.2327 14.7524C21.2327 15.5314 20.8227 16.0234 20.0427 16.3924L12.3597 20.1524C12.0037 20.3164 11.6757 20.3984 11.3067 20.3984Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM10.1987 19.141C9.6797 19.141 9.2967 18.771 9.2967 18.266C9.2967 17.855 9.4747 17.596 9.9397 17.377L17.1167 13.727V13.645L9.9397 9.953C9.4887 9.721 9.2967 9.461 9.2967 9.051C9.2967 8.559 9.6657 8.189 10.1857 8.189C10.4177 8.189 10.5547 8.244 10.7457 8.326L18.8667 12.756C19.2907 12.988 19.5097 13.303 19.5097 13.713C19.5097 14.178 19.3187 14.451 18.8667 14.684L10.7457 19.004C10.5687 19.086 10.4177 19.141 10.1987 19.141Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM10.5407 19.8921C9.7757 19.8921 9.2147 19.3321 9.2147 18.5941C9.2147 17.9781 9.5017 17.5961 10.1987 17.2951L16.7887 14.1371V14.0411L10.1987 10.8281C9.5017 10.5141 9.2147 10.1311 9.2147 9.5151C9.2147 8.7911 9.7617 8.2301 10.5137 8.2301C10.8417 8.2301 11.0467 8.2991 11.3067 8.4221L19.5367 12.7831C20.1527 13.1111 20.4667 13.5491 20.4667 14.1371C20.4667 14.7651 20.1797 15.1621 19.5367 15.4761L11.3067 19.7011C11.0607 19.8241 10.8417 19.8921 10.5407 19.8921Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM10.2947 19.7284C9.6247 19.7284 9.1187 19.2364 9.1187 18.5934C9.1187 18.0464 9.3657 17.7324 9.9527 17.4594L17.0897 13.9454V13.8634L9.9527 10.2674C9.3787 9.9944 9.1187 9.6524 9.1187 9.1194C9.1187 8.4904 9.6117 7.9984 10.2677 7.9984C10.5817 7.9984 10.7597 8.0664 10.9787 8.1754L19.3867 12.7014C19.9477 13.0154 20.2347 13.4124 20.2347 13.9454C20.2347 14.5334 19.9747 14.8884 19.3867 15.1894L10.9787 19.5644C10.7737 19.6604 10.5817 19.7284 10.2947 19.7284Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM10.7187 20.0019C9.8847 20.0019 9.2827 19.4139 9.2827 18.5939C9.2827 17.9099 9.5977 17.4999 10.3907 17.1719L16.5427 14.2869V14.1779L10.3907 11.2519C9.6117 10.9099 9.2827 10.4859 9.2827 9.8169C9.2827 9.0099 9.8707 8.4219 10.6917 8.4219C11.0327 8.4219 11.2797 8.4899 11.5527 8.6129L19.6597 12.8519C20.3167 13.1929 20.6447 13.6449 20.6447 14.2869C20.6447 14.9429 20.3297 15.3669 19.6597 15.6949L11.5527 19.8109C11.2927 19.9339 11.0327 20.0019 10.7187 20.0019Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM10.0757 18.3752C9.7477 18.3752 9.5157 18.1562 9.5157 17.8422C9.5157 17.5952 9.6387 17.4312 9.9117 17.2952L17.1447 13.4532V13.3852L9.9117 9.5292C9.6387 9.3792 9.5157 9.2152 9.5157 8.9692C9.5157 8.6542 9.7477 8.4352 10.0627 8.4352C10.2127 8.4352 10.2947 8.4762 10.4177 8.5452L18.1697 12.8242C18.4297 12.9612 18.5527 13.1662 18.5527 13.4262C18.5527 13.6992 18.4297 13.8902 18.1697 14.0272L10.4177 18.2652C10.2947 18.3342 10.2127 18.3752 10.0757 18.3752Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM10.0077 17.9781C9.7887 17.9781 9.6387 17.8421 9.6387 17.6231C9.6387 17.4591 9.7207 17.3361 9.9117 17.2401L17.1447 13.3031V13.2341L9.9117 9.2971C9.7207 9.2011 9.6387 9.0781 9.6387 8.9141C9.6387 8.6951 9.7887 8.5581 10.0077 8.5581C10.1037 8.5581 10.1577 8.5861 10.2677 8.6401L17.8147 12.8381C17.9917 12.9471 18.0737 13.0841 18.0737 13.2621C18.0737 13.4531 17.9917 13.5901 17.8147 13.6851L10.2677 17.8831C10.1577 17.9371 10.1037 17.9781 10.0077 17.9781Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}