import { IconProps } from "../../types"

export default function FourCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM16.7347 21.1641C17.8277 21.1641 18.5257 20.5491 18.5257 19.2911V19.1411H18.7167C19.8927 19.1411 20.5897 18.5121 20.5897 17.5001C20.5897 16.4881 19.9067 15.8591 18.7307 15.8591H18.5257V11.3891C18.5257 9.8301 17.1987 8.6681 15.4217 8.6681C13.5487 8.6681 12.5367 9.2831 11.5257 11.0191C10.7457 12.3461 9.9527 13.7671 9.4747 14.7931C9.1187 15.5991 8.9827 16.2691 8.9827 16.8711C8.9827 18.2521 9.9667 19.1411 11.5257 19.1411H14.9437V19.2911C14.9437 20.5351 15.6547 21.1641 16.7347 21.1641ZM14.9437 15.8591H12.7287V15.7641C13.2207 14.6971 14.0817 12.9741 14.8067 11.5941H14.9437Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM16.2287 20.8086C17.0897 20.8086 17.6367 20.3026 17.6367 19.3046V18.3886H18.2517C19.0997 18.3886 19.6467 17.8966 19.6467 17.1176C19.6467 16.3516 19.1137 15.8596 18.2517 15.8596H17.6367V10.1306C17.6367 8.9276 16.6387 8.0526 15.2717 8.0526C13.8497 8.0526 13.0427 8.5316 12.2637 9.8166C11.1697 11.5386 9.9257 13.5076 9.1187 14.9566C8.8047 15.5726 8.6817 16.0786 8.6817 16.5836C8.6817 17.6776 9.4607 18.3886 10.6637 18.3886H14.8337V19.3046C14.8337 20.2886 15.3807 20.8086 16.2287 20.8086ZM14.8337 15.8596H11.5667V15.7636C12.3317 14.3286 13.6447 12.1816 14.7107 10.4046H14.8337Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM16.5017 21.0004C17.4867 21.0004 18.1017 20.4394 18.1017 19.3044V18.7984H18.4977C19.5097 18.7984 20.1387 18.2244 20.1387 17.3364C20.1387 16.4334 19.5367 15.8734 18.5117 15.8734H18.1017V10.8004C18.1017 9.4064 16.9397 8.3944 15.3537 8.3944C13.6857 8.3944 12.7827 8.9274 11.8807 10.4594C10.9507 11.9764 9.9397 13.6444 9.2967 14.8754C8.9687 15.5864 8.8457 16.1874 8.8457 16.7344C8.8457 17.9924 9.7207 18.7984 11.1157 18.7984H14.8887V19.3044C14.8887 20.4254 15.5177 21.0004 16.5017 21.0004ZM14.8887 15.8734H12.1817V15.7634C12.7967 14.5334 13.8767 12.6054 14.7657 11.0334H14.8887Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM15.4077 20.111C15.9137 20.111 16.2147 19.783 16.2147 19.236V17.186H17.4867C17.9097 17.186 18.1977 16.898 18.1977 16.475C18.1977 16.064 17.9097 15.764 17.4867 15.764H16.2147V8.449C16.2147 7.766 15.6957 7.314 14.9157 7.314C14.1777 7.314 13.7127 7.574 13.2757 8.244C11.9217 10.24 9.8167 13.357 8.7087 15.176C8.5037 15.518 8.4077 15.791 8.4077 16.105C8.4077 16.762 8.8597 17.186 9.5707 17.186H14.6287V19.236C14.6287 19.77 14.9297 20.111 15.4077 20.111ZM14.6287 15.764H10.0217V15.695C10.9917 14.027 13.2887 10.65 14.5467 8.764H14.6287Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM15.9007 20.5761C16.6247 20.5761 17.0627 20.1251 17.0627 19.3051V17.9101H17.9507C18.6077 17.9101 19.0317 17.5001 19.0317 16.8711C19.0317 16.2561 18.6207 15.8461 17.9507 15.8461H17.0627V9.3241C17.0627 8.3401 16.2827 7.6561 15.1617 7.6561C14.0407 7.6561 13.3707 8.0531 12.7417 9.0371C11.4437 11.0331 9.9117 13.3441 8.8867 15.0391C8.5997 15.5581 8.5037 15.9551 8.5037 16.3921C8.5037 17.3081 9.1327 17.9101 10.1167 17.9101H14.7657V19.3051C14.7657 20.1251 15.2027 20.5761 15.9007 20.5761ZM14.7657 15.8461H10.8277V15.7641C11.7717 14.0961 13.3577 11.6621 14.6567 9.6391H14.7657Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM15.7227 20.4534C16.3657 20.4534 16.7347 20.0294 16.7347 19.3044V17.6234H17.7867C18.3207 17.6234 18.6897 17.2674 18.6897 16.7344C18.6897 16.2014 18.3337 15.8324 17.7867 15.8324H16.7347V8.8734C16.7347 8.0114 16.0777 7.4374 15.1077 7.4374C14.1507 7.4374 13.5487 7.7794 13.0017 8.5994C11.5937 10.7324 9.8987 13.2484 8.7637 15.0934C8.4907 15.5454 8.3947 15.8734 8.3947 16.2834C8.3947 17.0894 8.9417 17.6234 9.8167 17.6234H14.7247V19.3044C14.7247 20.0154 15.0937 20.4534 15.7227 20.4534ZM14.7247 15.8324H10.4047V15.7504C11.4437 13.9594 13.1937 11.3614 14.6287 9.2014H14.7247Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM16.0367 20.6859C16.8297 20.6859 17.3087 20.2069 17.3087 19.3049V18.1149H18.0737C18.8127 18.1149 19.2907 17.6639 19.2907 16.9809C19.2907 16.2969 18.8257 15.8459 18.0877 15.8459H17.3087V9.6799C17.3087 8.5999 16.4337 7.8339 15.2027 7.8339C13.9587 7.8339 13.2347 8.2579 12.5367 9.3789C11.3207 11.2519 9.9117 13.4119 8.9827 14.9979C8.6957 15.5589 8.5857 16.0099 8.5857 16.4749C8.5857 17.4729 9.2697 18.1149 10.3637 18.1149H14.7927V19.3049C14.7927 20.1929 15.2717 20.6859 16.0367 20.6859ZM14.7927 15.8459H11.1427V15.7639C12.0177 14.1919 13.4807 11.8809 14.6837 9.9669H14.7927Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM15.0117 19.6742C15.3257 19.6742 15.5177 19.4552 15.5177 19.1402V16.6112H17.0757C17.3637 16.6112 17.5547 16.4062 17.5547 16.1462C17.5547 15.8872 17.3637 15.6812 17.0757 15.6812H15.5177V7.9022C15.5177 7.4512 15.1897 7.1502 14.6697 7.1502C14.2187 7.1502 13.9317 7.3142 13.6167 7.7652C12.3597 9.6112 9.7207 13.5082 8.6267 15.2852C8.5177 15.4762 8.4357 15.6812 8.4357 15.8872C8.4357 16.3382 8.7367 16.6112 9.2417 16.6112H14.5057V19.1402C14.5057 19.4552 14.7107 19.6742 15.0117 19.6742ZM14.5057 15.6812H9.5157V15.6132C10.4047 14.1372 13.3987 9.6932 14.4377 8.2032H14.5057Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM14.7927 19.4411C15.0117 19.4411 15.1487 19.2771 15.1487 19.0861V16.3101H16.8707C17.0757 16.3101 17.2127 16.1461 17.2127 15.9691C17.2127 15.7771 17.0757 15.6271 16.8707 15.6271H15.1487V7.6151C15.1487 7.2731 14.9297 7.0551 14.5467 7.0551C14.2457 7.0551 14.0407 7.1781 13.7947 7.5191C12.5777 9.2691 9.6657 13.5761 8.5857 15.3401C8.5177 15.4631 8.4487 15.6131 8.4487 15.7641C8.4487 16.1051 8.6677 16.3101 9.0777 16.3101H14.4507V19.0861C14.4507 19.2771 14.6017 19.4411 14.7927 19.4411ZM14.4507 15.6271H9.2697V15.5581C10.1037 14.1911 13.4667 9.2011 14.3687 7.8891H14.4507Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
