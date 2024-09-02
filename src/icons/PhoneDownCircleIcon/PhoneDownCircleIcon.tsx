import { IconProps } from "../../types"

export default function PhoneDownCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM6.2067 16.0371C6.2067 17.2261 6.8907 18.0061 7.9567 18.0061C8.6547 18.0061 9.5157 18.0061 10.9377 17.5551C11.9077 17.2401 12.3457 16.7071 12.3457 15.7091V15.2711C12.3457 15.1211 12.3867 15.0251 12.5647 14.9571C12.7417 14.8891 13.6447 14.7111 14.9297 14.7111C16.2287 14.7111 17.1307 14.8891 17.3087 14.9571C17.4867 15.0251 17.5277 15.1211 17.5277 15.2711V15.7091C17.5277 16.7071 17.9507 17.2541 18.9357 17.5551C20.3577 18.0061 21.2187 18.0061 21.9157 18.0061C22.9687 18.0061 23.6657 17.2261 23.6657 16.0371V15.9141C23.6657 12.7971 19.9337 10.7321 14.9297 10.7321C9.9397 10.7321 6.2067 12.7971 6.2067 15.9141Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM5.4137 15.6406C5.4137 16.7476 6.0017 17.5406 7.0547 17.5406C7.7927 17.5406 8.6677 17.5276 10.1577 17.0626C11.0737 16.7616 11.4847 16.2836 11.4977 15.3126L11.5117 14.6696C11.5117 14.5056 11.5667 14.4106 11.7577 14.3416C12.0727 14.2326 13.0567 14.0546 14.4377 14.0546C15.8047 14.0546 16.7887 14.2326 17.1037 14.3416C17.2947 14.4106 17.3637 14.5056 17.3637 14.6696L17.3767 15.3126C17.3767 16.2836 17.7867 16.7756 18.7167 17.0626C20.1937 17.5276 21.0687 17.5406 21.8067 17.5406C22.8597 17.5406 23.4607 16.7476 23.4607 15.6406V15.5176C23.4607 12.1266 19.1817 10.2406 14.4377 10.2406C9.6937 10.2406 5.4137 12.1266 5.4137 15.5176Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM5.8237 15.8594C5.8237 17.0074 6.4807 17.8004 7.5327 17.8004C8.2437 17.8004 9.1187 17.7874 10.5687 17.3224C11.5257 17.0214 11.9357 16.5154 11.9487 15.5314V14.9984C11.9487 14.8344 11.9907 14.7524 12.1817 14.6704C12.4277 14.5884 13.3707 14.4104 14.6977 14.4104C16.0237 14.4104 16.9667 14.5884 17.2127 14.6704C17.4047 14.7524 17.4457 14.8344 17.4457 14.9984V15.5314C17.4587 16.5154 17.8687 17.0354 18.8257 17.3224C20.2757 17.7874 21.1507 17.8004 21.8617 17.8004C22.9137 17.8004 23.5707 17.0074 23.5707 15.8594V15.7224C23.5707 12.4964 19.5777 10.5134 14.6977 10.5134C9.8167 10.5134 5.8237 12.4964 5.8237 15.7224Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM4.4297 14.998C4.4297 15.859 4.8397 16.762 5.9337 16.762C6.7127 16.762 7.6017 16.734 9.1187 16.256C9.9397 16.01 10.3637 15.641 10.3767 14.656L10.3907 13.795C10.3907 13.631 10.4867 13.508 10.7187 13.426C11.1697 13.275 12.2497 13.084 13.6987 13.084C15.1617 13.084 16.2287 13.275 16.6937 13.426C16.9257 13.508 17.0217 13.631 17.0217 13.795L17.0347 14.656C17.0487 15.641 17.4727 16.01 18.2797 16.256C19.8107 16.734 20.6987 16.762 21.4647 16.762C22.5727 16.762 22.9687 15.859 22.9687 14.998V14.861C22.9687 11.238 18.1977 9.543 13.6987 9.543C9.2147 9.543 4.4297 11.238 4.4297 14.861Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM4.9077 15.3941C4.9077 16.4331 5.4417 17.2261 6.4937 17.2261C7.2457 17.2261 8.1347 17.1991 9.6527 16.7341C10.5547 16.4471 10.9377 16.0101 10.9507 15.0531L10.9647 14.2601C10.9647 14.1091 11.0467 14.0141 11.2387 13.9311C11.6487 13.8081 12.6877 13.6171 14.1097 13.6171C15.5317 13.6171 16.5707 13.8081 16.9807 13.9311C17.1857 14.0141 17.2537 14.1091 17.2537 14.2601L17.2677 15.0531C17.2817 16.0101 17.6777 16.4471 18.5797 16.7341C20.0837 17.1991 20.9867 17.2261 21.7387 17.2261C22.7907 17.2261 23.3237 16.4331 23.3237 15.3941V15.2581C23.3237 11.6891 18.7027 9.9121 14.1097 9.9121C9.5297 9.9121 4.9077 11.6891 4.9077 15.2581Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM4.6207 15.2444C4.6207 16.2554 5.1267 17.0624 6.1657 17.0624C6.9317 17.0624 7.8337 17.0214 9.3657 16.5564C10.2537 16.2694 10.6367 15.8594 10.6507 14.9024L10.6637 14.0414C10.6637 13.8904 10.7457 13.7814 10.9507 13.7124C11.4157 13.5624 12.4827 13.3714 13.9317 13.3714C15.3807 13.3714 16.4477 13.5624 16.9117 13.7124C17.1167 13.7814 17.1987 13.8904 17.1987 14.0414L17.2127 14.9024C17.2407 15.8594 17.6227 16.2694 18.4977 16.5564C20.0297 17.0214 20.9317 17.0624 21.6977 17.0624C22.7367 17.0624 23.2417 16.2554 23.2417 15.2444V15.1074C23.2417 11.4434 18.4297 9.7344 13.9317 9.7344C9.4337 9.7344 4.6207 11.4434 4.6207 15.1074Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM5.1267 15.5039C5.1267 16.5699 5.6877 17.3629 6.7407 17.3629C7.4787 17.3629 8.3667 17.3359 9.8707 16.8709C10.7737 16.5839 11.1697 16.1329 11.1837 15.1619L11.1977 14.4379C11.1977 14.2869 11.2657 14.1919 11.4707 14.1099C11.8397 13.9859 12.8517 13.8089 14.2457 13.8089C15.6547 13.8089 16.6657 13.9859 17.0347 14.1099C17.2407 14.1919 17.3087 14.2869 17.3087 14.4379V15.1619C17.3227 16.1329 17.7187 16.5839 18.6347 16.8709C20.1387 17.3359 21.0137 17.3629 21.7657 17.3629C22.8187 17.3629 23.3787 16.5699 23.3787 15.5039V15.3669C23.3787 11.8809 18.9077 10.0629 14.2457 10.0629C9.5977 10.0629 5.1267 11.8809 5.1267 15.3669Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM4.1977 14.6832C4.1977 15.3402 4.4567 16.3922 5.6327 16.3922C6.4117 16.3922 7.2867 16.3652 8.8047 15.8872C9.5157 15.6682 9.9937 15.3532 10.0077 14.3422L10.0347 13.4802C10.0347 13.2892 10.1447 13.1382 10.3907 13.0562C10.8687 12.9062 11.9357 12.7152 13.3987 12.7152C14.8617 12.7152 15.9417 12.9062 16.4197 13.0562C16.6657 13.1382 16.7757 13.2892 16.7757 13.4802L16.8027 14.3422C16.8167 15.3532 17.2947 15.6682 18.0057 15.8872C19.5237 16.3652 20.3987 16.3922 21.1637 16.3922C22.3537 16.3922 22.6137 15.3402 22.6137 14.6832V14.5472C22.6137 10.9652 17.8827 9.2832 13.3987 9.2832C8.9277 9.2832 4.1977 10.9652 4.1977 14.5472Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM4.0737 14.5191C4.0737 15.0661 4.2657 16.1871 5.4827 16.1871C6.2477 16.1871 7.1227 16.1601 8.6407 15.6811C9.2967 15.4761 9.8167 15.2031 9.8297 14.1641L9.8437 13.3161C9.8437 13.1111 9.9667 12.9471 10.2267 12.8651C10.7047 12.7011 11.7847 12.5101 13.2477 12.5101C14.7107 12.5101 15.8047 12.7011 16.2697 12.8651C16.5297 12.9471 16.6527 13.1111 16.6527 13.3161L16.6797 14.1641C16.6937 15.2031 17.1987 15.4761 17.8557 15.6811C19.3727 16.1601 20.2477 16.1871 21.0137 16.1871C22.2437 16.1871 22.4217 15.0661 22.4217 14.5191V14.3831C22.4217 10.8281 17.7187 9.1461 13.2477 9.1461C8.7777 9.1461 4.0737 10.8281 4.0737 14.3831Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}