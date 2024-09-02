import { IconProps } from "../../types"

export default function GCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM14.8477 21.1781C18.3617 21.1781 20.6307 18.9901 20.6307 16.1741V15.9691C20.6307 14.7111 20.0017 14.0551 18.7437 14.0551H16.1057C15.1617 14.0551 14.6697 14.5471 14.6697 15.3261C14.6697 16.1191 15.1757 16.6111 16.1057 16.6111H16.5707V16.7481C16.5707 17.5001 15.9827 18.0601 15.0257 18.0601C13.8637 18.0601 13.1387 16.7621 13.1387 14.9301C13.1387 13.1521 13.8497 11.9631 15.0257 11.9631C15.7227 11.9631 16.0507 12.3051 16.3657 12.7011C16.7347 13.1391 17.1577 13.5761 18.2927 13.5761C19.4277 13.5761 20.0977 12.9881 20.0977 12.0451C20.0977 11.7171 20.0297 11.3891 19.8927 11.1011C19.2637 9.6251 17.2947 8.6821 14.8477 8.6821C11.1697 8.6821 8.7227 11.1701 8.7227 14.9301C8.7227 18.7031 11.1697 21.1781 14.8477 21.1781Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM14.4237 20.7816C17.8417 20.7816 19.9747 18.7036 19.9747 15.8866V15.2856C19.9747 14.2876 19.4277 13.7406 18.4437 13.7406H15.3667C14.6427 13.7406 14.2457 14.1506 14.2457 14.7796C14.2457 15.3806 14.6567 15.8046 15.3667 15.8046H16.8577V16.3246C16.8577 17.4996 16.0237 18.3206 14.5197 18.3206C12.8377 18.3206 11.7437 16.7206 11.7437 14.3826C11.7437 12.0726 12.8237 10.5276 14.4917 10.5276C15.6137 10.5276 16.3517 11.0606 16.8027 11.9496C17.0897 12.3866 17.4317 12.7016 18.2107 12.7016C19.0587 12.7016 19.5917 12.2366 19.5917 11.4706C19.5917 11.1976 19.5367 10.9516 19.4277 10.6916C18.7847 9.0916 16.8987 7.9846 14.3967 7.9846C10.7867 7.9846 8.4217 10.4996 8.4217 14.3826C8.4217 18.2796 10.7867 20.7816 14.4237 20.7816Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM14.6427 21.0004C18.1157 21.0004 20.3167 18.8534 20.3167 16.0504V15.6544C20.3167 14.5194 19.7287 13.9184 18.6077 13.9184H15.7497C14.9157 13.9184 14.4647 14.3694 14.4647 15.0804C14.4647 15.7774 14.9297 16.2424 15.7497 16.2424H16.7067V16.5564C16.7067 17.5134 15.9957 18.1834 14.7927 18.1834C13.3847 18.1834 12.4827 16.7484 12.4827 14.6834C12.4827 12.6464 13.3577 11.2934 14.7797 11.2934C15.6677 11.2934 16.1877 11.7304 16.5707 12.3594C16.8987 12.7974 17.2947 13.1664 18.2657 13.1664C19.2497 13.1664 19.8517 12.6464 19.8517 11.7854C19.8517 11.4844 19.7967 11.1974 19.6737 10.9104C19.0317 9.3794 17.1037 8.3674 14.6287 8.3674C10.9917 8.3674 8.5857 10.8694 8.5857 14.6834C8.5857 18.4984 10.9917 21.0004 14.6427 21.0004Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM13.7817 20.057C16.9397 20.057 18.8667 18.115 18.8667 15.258V14.287C18.8667 13.713 18.5387 13.371 17.9917 13.371H14.2327C13.8227 13.371 13.5757 13.645 13.5757 14.014C13.5757 14.355 13.8227 14.656 14.2327 14.656H17.1857V15.449C17.1857 17.391 15.9827 18.635 13.8087 18.635C11.4437 18.635 9.8577 16.625 9.8577 13.645C9.8577 10.664 11.4437 8.641 13.7817 8.641C15.5037 8.641 16.8027 9.529 17.2537 11.033C17.4177 11.43 17.6227 11.594 17.9787 11.594C18.4297 11.594 18.7027 11.32 18.7027 10.842C18.7027 10.664 18.6757 10.5 18.6207 10.309C18.1157 8.709 16.4197 7.205 13.7537 7.205C10.3637 7.205 8.1487 9.748 8.1487 13.645C8.1487 17.541 10.3637 20.057 13.7817 20.057Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM14.1367 20.5081C17.5137 20.5081 19.5367 18.5121 19.5367 15.6951V14.8481C19.5367 14.0001 19.0727 13.5351 18.2657 13.5351H14.9027C14.3277 13.5351 13.9867 13.8901 13.9867 14.4101C13.9867 14.8891 14.3277 15.2851 14.9027 15.2851H17.0347V16.0371C17.0347 17.4861 16.0507 18.4711 14.1917 18.4711C12.1817 18.4711 10.8417 16.6931 10.8417 14.0271C10.8417 11.3751 12.1677 9.5981 14.1637 9.5981C15.5587 9.5981 16.5567 10.2671 17.0757 11.4431C17.3227 11.9081 17.6097 12.1541 18.1697 12.1541C18.8257 12.1541 19.2497 11.7441 19.2497 11.1011C19.2497 10.8551 19.2227 10.6641 19.1267 10.4181C18.4707 8.7361 16.6387 7.5331 14.1097 7.5331C10.5407 7.5331 8.2437 10.0761 8.2437 14.0271C8.2437 17.9921 10.5407 20.5081 14.1367 20.5081Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM13.9867 20.3574C17.3227 20.3574 19.3047 18.4024 19.3047 15.5864V14.5874C19.3047 13.8494 18.8667 13.4124 18.1567 13.4124H14.6287C14.1367 13.4124 13.8357 13.7404 13.8357 14.2054C13.8357 14.6154 14.1367 14.9844 14.6287 14.9844H17.1307V15.8734C17.1307 17.4864 16.0647 18.5524 14.0137 18.5524C11.8127 18.5524 10.3497 16.6794 10.3497 13.8224C10.3497 10.9924 11.7987 9.0784 13.9727 9.0784C15.5177 9.0784 16.6657 9.8164 17.2267 11.1704C17.4457 11.6344 17.7187 11.8264 18.1287 11.8264C18.7027 11.8264 19.0727 11.4704 19.0727 10.8964C19.0727 10.6644 19.0447 10.4864 18.9487 10.2674C18.3067 8.5454 16.4887 7.2734 13.9457 7.2734C10.4047 7.2734 8.1347 9.8304 8.1347 13.8224C8.1347 17.8284 10.4047 20.3574 13.9867 20.3574Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM14.2597 20.6309C17.6507 20.6309 19.7287 18.5939 19.7287 15.7769V15.0389C19.7287 14.1229 19.2227 13.6309 18.3477 13.6309H15.1077C14.4647 13.6309 14.0957 13.9999 14.0957 14.5739C14.0957 15.0939 14.4647 15.5039 15.1077 15.5039H16.9527V16.1599C16.9527 17.4999 16.0367 18.4019 14.3417 18.4019C12.4687 18.4019 11.2387 16.7069 11.2387 14.1779C11.2387 11.6759 12.4547 10.0079 14.3007 10.0079C15.5857 10.0079 16.4747 10.6099 16.9527 11.6619C17.2267 12.1129 17.5407 12.3869 18.1837 12.3869C18.9357 12.3869 19.4007 11.9629 19.4007 11.2659C19.4007 11.0059 19.3597 10.7869 19.2497 10.5409C18.6077 8.8869 16.7477 7.7249 14.2327 7.7249C10.6507 7.7249 8.3257 10.2539 8.3257 14.1779C8.3257 18.1149 10.6507 20.6309 14.2597 20.6309Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM13.5217 19.6602C16.4337 19.6602 18.2797 17.7462 18.2797 14.8342V13.8772C18.2797 13.5352 18.0877 13.3302 17.7737 13.3302H13.6857C13.4117 13.3302 13.2477 13.5212 13.2477 13.7672C13.2477 14.0002 13.4117 14.2052 13.6857 14.2052H17.2407V14.8882C17.2407 17.2812 15.8727 18.7302 13.5217 18.7302C10.9647 18.7302 9.2007 16.5562 9.2007 13.3982C9.2007 10.2402 10.9647 8.0662 13.5217 8.0662C15.5037 8.0662 16.9807 9.1602 17.2947 10.8692C17.3637 11.1702 17.4867 11.2932 17.7597 11.2932C18.0607 11.2932 18.2247 11.1152 18.2247 10.7872C18.2247 10.6502 18.2107 10.5132 18.1837 10.3632C17.8557 8.9412 16.3107 7.1232 13.5077 7.1232C10.3087 7.1232 8.1617 9.6522 8.1617 13.3982C8.1617 17.1442 10.3087 19.6602 13.5217 19.6602Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM13.3847 19.4551C16.1737 19.4551 17.9787 17.5551 17.9787 14.6011V13.6581C17.9787 13.4391 17.8687 13.2891 17.6637 13.2891H13.4117C13.2067 13.2891 13.0707 13.4391 13.0707 13.6311C13.0707 13.8221 13.2067 13.9731 13.4117 13.9731H17.2817V14.6011C17.2817 17.2131 15.8187 18.7711 13.3847 18.7711C10.7327 18.7711 8.8727 16.5151 8.8727 13.2621C8.8727 10.0081 10.7327 7.7521 13.3847 7.7521C15.4907 7.7521 17.0757 8.9691 17.3087 10.7731C17.3357 11.0331 17.4177 11.1291 17.6507 11.1291C17.8687 11.1291 17.9787 11.0061 17.9787 10.7461C17.9787 10.6371 17.9647 10.5141 17.9507 10.3771C17.7327 9.0511 16.2557 7.0821 13.3847 7.0821C10.2947 7.0821 8.1617 9.5841 8.1617 13.2621C8.1617 16.9391 10.2947 19.4551 13.3847 19.4551Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
