import { IconProps } from "../../types"

export default function CartCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM12.7287 19.0311H19.3727C19.8657 19.0311 20.2887 18.7031 20.2887 18.1421C20.2887 17.6091 19.8657 17.2811 19.3727 17.2811H13.0837C12.9477 17.2811 12.8657 17.2261 12.8517 17.0761L12.7827 16.6111H19.5917C20.6577 16.6111 21.2597 15.9961 21.4237 14.9021L21.7387 12.6461C21.7517 12.5511 21.7657 12.4281 21.7657 12.3051C21.7657 11.7441 21.4237 11.3341 20.6857 11.3341H11.9487L11.8807 10.9371C11.7437 10.2261 11.3617 9.8301 10.4997 9.8301H8.5177C7.9567 9.8301 7.4917 10.2951 7.4917 10.8691C7.4917 11.4431 7.9567 11.9081 8.5177 11.9081H10.0487L10.8557 17.3081C11.0197 18.4021 11.6487 19.0311 12.7287 19.0311ZM13.2477 22.2991C13.9727 22.2991 14.5467 21.7241 14.5467 21.0001C14.5467 20.2621 13.9727 19.6741 13.2477 19.6741C12.5237 19.6741 11.9217 20.2621 11.9217 21.0001C11.9217 21.7241 12.5237 22.2991 13.2477 22.2991ZM18.3337 22.2991C19.0447 22.2991 19.6327 21.7241 19.6327 21.0001C19.6327 20.2621 19.0447 19.6741 18.3337 19.6741C17.5957 19.6741 17.0077 20.2621 17.0077 21.0001C17.0077 21.7241 17.5957 22.2991 18.3337 22.2991Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM12.1817 18.8126H19.2227C19.6737 18.8126 20.0297 18.4976 20.0297 18.0056C20.0297 17.5276 19.6737 17.2126 19.2227 17.2126H12.3597C12.0997 17.2126 11.9217 17.0626 11.8807 16.7756L11.8127 16.2836H19.4827C20.5347 16.2836 21.0957 15.6676 21.2457 14.6286L21.6837 11.6486C21.6977 11.5526 21.7107 11.4296 21.7107 11.3476C21.7107 10.8966 21.4097 10.5816 20.8497 10.5816H10.9507L10.8557 9.9256C10.7457 9.2696 10.3087 8.8726 9.5707 8.8726H7.4097C6.9317 8.8726 6.5487 9.2556 6.5487 9.7616C6.5487 10.2536 6.9317 10.6366 7.4097 10.6366H9.2557L10.1857 17.1176C10.3497 18.2106 11.0197 18.8126 12.1817 18.8126ZM12.5367 22.1206C13.2477 22.1206 13.8087 21.5606 13.8087 20.8636C13.8087 20.1386 13.2477 19.5786 12.5367 19.5786C11.8397 19.5786 11.2797 20.1386 11.2797 20.8636C11.2797 21.5606 11.8397 22.1206 12.5367 22.1206ZM18.1427 22.1206C18.8537 22.1206 19.4137 21.5606 19.4137 20.8636C19.4137 20.1386 18.8537 19.5786 18.1427 19.5786C17.4457 19.5786 16.8707 20.1386 16.8707 20.8636C16.8707 21.5606 17.4457 22.1206 18.1427 22.1206Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM12.4687 18.9354H19.3047C19.7827 18.9354 20.1657 18.6074 20.1657 18.0884C20.1657 17.5684 19.7827 17.2544 19.3047 17.2544H12.7417C12.5507 17.2544 12.4137 17.1584 12.3867 16.9394L12.3187 16.4614H19.5367C20.6037 16.4614 21.1777 15.8454 21.3417 14.7794L21.7107 12.1814C21.7247 12.0864 21.7387 11.9634 21.7387 11.8674C21.7387 11.3614 21.4237 10.9784 20.7677 10.9784H11.4847L11.4027 10.4724C11.2797 9.7894 10.8687 9.3794 10.0627 9.3794H7.9977C7.4787 9.3794 7.0407 9.8164 7.0407 10.3494C7.0407 10.8824 7.4787 11.3204 7.9977 11.3204H9.6797L10.5407 17.2264C10.7047 18.3204 11.3477 18.9354 12.4687 18.9354ZM12.9067 22.2164C13.6307 22.2164 14.2047 21.6564 14.2047 20.9314C14.2047 20.2204 13.6307 19.6324 12.9067 19.6324C12.2087 19.6324 11.6207 20.2204 11.6207 20.9314C11.6207 21.6564 12.2087 22.2164 12.9067 22.2164ZM18.2387 22.2164C18.9487 22.2164 19.5367 21.6564 19.5367 20.9314C19.5367 20.2204 18.9487 19.6324 18.2387 19.6324C17.5277 19.6324 16.9397 20.2204 16.9397 20.9314C16.9397 21.6564 17.5277 22.2164 18.2387 22.2164Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM11.1157 18.334H19.0447C19.3727 18.334 19.6057 18.102 19.6057 17.746C19.6057 17.391 19.3727 17.158 19.0447 17.158H11.1837C10.6917 17.158 10.4317 16.939 10.3637 16.475L10.2677 15.654H19.2087C20.1797 15.654 20.6307 15.094 20.7677 14.164L21.3557 10.254C21.3827 10.172 21.3967 10.049 21.3967 10.008C21.3967 9.707 21.1777 9.516 20.8357 9.516H9.3517L9.2007 8.395C9.1467 7.916 8.7497 7.602 8.2307 7.602H5.7007C5.3597 7.602 5.1267 7.834 5.1267 8.189C5.1267 8.545 5.3597 8.777 5.7007 8.777H8.0797L9.2417 16.844C9.3787 17.801 9.9807 18.334 11.1157 18.334ZM11.5797 21.697C12.2497 21.697 12.7557 21.191 12.7557 20.535C12.7557 19.865 12.2497 19.346 11.5797 19.346C10.9237 19.346 10.4047 19.865 10.4047 20.535C10.4047 21.191 10.9237 21.697 11.5797 21.697ZM17.8827 21.697C18.5387 21.697 19.0587 21.191 19.0587 20.535C19.0587 19.865 18.5387 19.346 17.8827 19.346C17.2267 19.346 16.6937 19.865 16.6937 20.535C16.6937 21.191 17.2267 21.697 17.8827 21.697Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM11.8257 18.6621H19.1267C19.5647 18.6621 19.8657 18.3611 19.8657 17.9101C19.8657 17.4591 19.5647 17.1581 19.1267 17.1581H11.9077C11.5387 17.1581 11.3067 16.9531 11.2657 16.5841L11.1977 16.0781H19.4277C20.4527 16.0781 20.9727 15.4631 21.1227 14.4371L21.6427 10.9921C21.6567 10.9101 21.6697 10.7871 21.6697 10.7321C21.6697 10.3491 21.4097 10.0901 20.9587 10.0901H10.3087L10.1987 9.2561C10.1037 8.6541 9.6387 8.2581 8.9827 8.2581H6.7127C6.2617 8.2581 5.9337 8.5861 5.9337 9.0371C5.9337 9.4881 6.2617 9.8161 6.7127 9.8161H8.7367L9.7617 16.9941C9.9257 18.0741 10.6097 18.6621 11.8257 18.6621ZM12.0997 21.9981C12.7967 21.9981 13.3437 21.4511 13.3437 20.7671C13.3437 20.0561 12.7967 19.5101 12.0997 19.5101C11.4157 19.5101 10.8557 20.0561 10.8557 20.7671C10.8557 21.4511 11.4157 21.9981 12.0997 21.9981ZM18.0327 21.9981C18.7167 21.9981 19.2777 21.4511 19.2777 20.7671C19.2777 20.0561 18.7167 19.5101 18.0327 19.5101C17.3357 19.5101 16.7757 20.0561 16.7757 20.7671C16.7757 21.4511 17.3357 21.9981 18.0327 21.9981Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM11.6207 18.5804H19.0727C19.4957 18.5804 19.7697 18.2934 19.7697 17.8554C19.7697 17.4314 19.4957 17.1304 19.0727 17.1304H11.6487C11.2387 17.1304 10.9647 16.8984 10.9097 16.4744L10.8557 15.9554H19.3867C20.4117 15.9554 20.9177 15.3394 21.0687 14.3414L21.6157 10.6234C21.6427 10.5544 21.6567 10.4314 21.6567 10.3774C21.6567 10.0354 21.4097 9.8164 21.0137 9.8164H9.9527L9.8297 8.8864C9.7477 8.2984 9.2697 7.9164 8.6407 7.9164H6.3167C5.8927 7.9164 5.6057 8.2034 5.6057 8.6404C5.6057 9.0644 5.8927 9.3514 6.3167 9.3514H8.4487L9.5297 16.9124C9.6797 18.0054 10.3907 18.5804 11.6207 18.5804ZM11.8397 21.9294C12.5367 21.9294 13.0707 21.3824 13.0707 20.7124C13.0707 20.0154 12.5367 19.4684 11.8397 19.4684C11.1697 19.4684 10.6227 20.0154 10.6227 20.7124C10.6227 21.3824 11.1697 21.9294 11.8397 21.9294ZM17.9647 21.9294C18.6487 21.9294 19.1957 21.3824 19.1957 20.7124C19.1957 20.0154 18.6487 19.4684 17.9647 19.4684C17.2817 19.4684 16.7207 20.0154 16.7207 20.7124C16.7207 21.3824 17.2817 21.9294 17.9647 21.9294Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM11.9767 18.7309H19.1677C19.6057 18.7309 19.9337 18.4299 19.9337 17.9509C19.9337 17.4859 19.6057 17.1859 19.1677 17.1859H12.0997C11.7847 17.1859 11.5797 17.0079 11.5257 16.6659L11.4567 16.1599H19.4547C20.4807 16.1599 21.0277 15.5449 21.1777 14.5199L21.6567 11.2789C21.6697 11.1839 21.6977 11.0609 21.6977 10.9919C21.6977 10.5819 21.4097 10.3089 20.9177 10.3089H10.5817L10.4727 9.5429C10.3767 8.9279 9.9397 8.5309 9.2417 8.5309H7.0137C6.5487 8.5309 6.2067 8.8729 6.2067 9.3519C6.2067 9.8299 6.5487 10.1719 7.0137 10.1719H8.9547L9.9527 17.0489C10.1037 18.1289 10.7867 18.7309 11.9767 18.7309ZM12.2907 22.0529C12.9887 22.0529 13.5487 21.5059 13.5487 20.8089C13.5487 20.0979 12.9887 19.5369 12.2907 19.5369C11.5937 19.5369 11.0327 20.0979 11.0327 20.8089C11.0327 21.5059 11.5937 22.0529 12.2907 22.0529ZM18.0737 22.0529C18.7717 22.0529 19.3317 21.5059 19.3317 20.8089C19.3317 20.0979 18.7717 19.5369 18.0737 19.5369C17.3907 19.5369 16.8167 20.0979 16.8167 20.8089C16.8167 21.5059 17.3907 22.0529 18.0737 22.0529Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM10.4457 18.0192H19.0037C19.2367 18.0192 19.4007 17.8552 19.4007 17.6092C19.4007 17.3632 19.2367 17.1992 19.0037 17.1992H10.5687C9.9667 17.1992 9.7067 17.0082 9.6387 16.4742L9.4887 15.2852H18.9767C19.8787 15.2852 20.2477 14.7932 20.3707 13.9312L21.0137 9.7482C21.0277 9.6932 21.0547 9.5702 21.0547 9.5292C21.0547 9.2692 20.8907 9.1052 20.5897 9.1052H8.5587L8.3807 7.7522C8.3397 7.4102 8.0667 7.1912 7.6837 7.1912H4.8947C4.6757 7.1912 4.4977 7.3692 4.4977 7.6152C4.4977 7.8472 4.6757 8.0252 4.8947 8.0252H7.5877L8.8727 16.7482C8.9827 17.5412 9.4477 18.0192 10.4457 18.0192ZM11.2247 21.4102C11.8537 21.4102 12.3457 20.9312 12.3457 20.3032C12.3457 19.6742 11.8537 19.1952 11.2247 19.1952C10.6097 19.1952 10.1167 19.6742 10.1167 20.3032C10.1167 20.9312 10.6097 21.4102 11.2247 21.4102ZM17.7737 21.4102C18.3887 21.4102 18.8947 20.9312 18.8947 20.3032C18.8947 19.6742 18.3887 19.1952 17.7737 19.1952C17.1577 19.1952 16.6527 19.6742 16.6527 20.3032C16.6527 20.9312 17.1577 21.4102 17.7737 21.4102Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM10.0897 17.8551H18.9907C19.1547 17.8551 19.2907 17.7191 19.2907 17.5271C19.2907 17.3361 19.1547 17.1991 18.9907 17.1991H10.2537C9.5977 17.1991 9.3377 17.0351 9.2697 16.4741L9.0917 15.0801H18.8537C19.7287 15.0801 20.0567 14.6291 20.1797 13.8081L20.8357 9.4881C20.8637 9.4331 20.8767 9.3101 20.8767 9.2831C20.8767 9.0371 20.7407 8.9001 20.4667 8.9001H8.1487L7.9567 7.4241C7.9297 7.1501 7.7247 6.9731 7.3967 6.9731H4.4847C4.3207 6.9731 4.1837 7.1091 4.1837 7.3011C4.1837 7.4921 4.3207 7.6291 4.4847 7.6291H7.3417L8.6817 16.6931C8.7777 17.4041 9.1737 17.8551 10.0897 17.8551ZM11.0467 21.2601C11.6617 21.2601 12.1267 20.7811 12.1267 20.1801C12.1267 19.5641 11.6617 19.0991 11.0467 19.0991C10.4457 19.0991 9.9667 19.5641 9.9667 20.1801C9.9667 20.7811 10.4457 21.2601 11.0467 21.2601ZM17.7327 21.2601C18.3207 21.2601 18.7987 20.7811 18.7987 20.1801C18.7987 19.5641 18.3207 19.0991 17.7327 19.0991C17.1167 19.0991 16.6247 19.5641 16.6247 20.1801C16.6247 20.7811 17.1167 21.2601 17.7327 21.2601Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
