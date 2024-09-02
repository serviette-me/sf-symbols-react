import { IconProps } from "../../types"

export default function MessageBadgeCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM19.5647 12.8511C20.7947 12.8511 21.8067 11.8261 21.8067 10.6091C21.8067 9.3791 20.7947 8.3671 19.5647 8.3671C18.3477 8.3671 17.3227 9.3791 17.3227 10.6091C17.3227 11.8261 18.3477 12.8511 19.5647 12.8511ZM14.7797 8.8591C11.1287 8.8591 8.2987 11.2661 8.2987 14.2731C8.2987 15.9691 9.2417 17.4181 10.6507 18.4571C10.8007 18.5661 10.7737 18.6761 10.6777 18.8811C10.4177 19.3731 10.0897 19.8511 9.8167 20.2211C9.4747 20.6581 9.6797 21.1501 10.2947 21.1501C10.9917 21.1501 12.2087 20.5351 13.5217 19.7561C13.6987 19.6461 13.8227 19.6051 13.9587 19.6331C14.1917 19.6601 14.4787 19.6741 14.7797 19.6741C18.4157 19.6741 21.2597 17.2671 21.2597 14.2731C21.2597 13.9451 21.2187 13.6171 21.1507 13.3161C20.6857 13.5761 20.1527 13.7541 19.5647 13.7541C17.8417 13.7541 16.4337 12.3051 16.4337 10.6091C16.4337 10.0761 16.5567 9.5701 16.8027 9.1191C16.1597 8.9551 15.4907 8.8591 14.7797 8.8591Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM19.3047 12.5646C20.6307 12.5646 21.7247 11.4566 21.7247 10.1176C21.7247 8.7906 20.6307 7.6976 19.3047 7.6976C17.9787 7.6976 16.8707 8.7906 16.8707 10.1176C16.8707 11.4566 17.9787 12.5646 19.3047 12.5646ZM14.2867 8.1206C10.3357 8.1206 7.2597 10.7046 7.2597 13.9046C7.2597 15.8316 8.4077 17.4726 10.1167 18.5796C10.2817 18.6756 10.2677 18.8126 10.1857 18.9906C9.9397 19.4686 9.5837 19.9196 9.2967 20.2616C8.9277 20.6996 9.0917 21.1776 9.7067 21.1776C10.4317 21.1776 11.7167 20.5896 13.0567 19.7836C13.2067 19.6876 13.3027 19.6466 13.4527 19.6606C13.6987 19.6876 13.9867 19.7016 14.2867 19.7016C18.2247 19.7016 21.3147 17.1176 21.3147 13.9046C21.3147 13.5766 21.2737 13.2616 21.2047 12.9476C20.6577 13.3166 20.0017 13.5356 19.3047 13.5356C17.4317 13.5356 15.8867 11.9906 15.8867 10.1176C15.8867 9.4886 16.0777 8.9006 16.3787 8.3806C15.7227 8.2036 15.0257 8.1206 14.2867 8.1206Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM19.4417 12.7284C20.7127 12.7284 21.7797 11.6624 21.7797 10.3904C21.7797 9.1054 20.7127 8.0664 19.4417 8.0664C18.1697 8.0664 17.1167 9.1054 17.1167 10.3904C17.1167 11.6624 18.1697 12.7284 19.4417 12.7284ZM14.5467 8.5174C10.7597 8.5174 7.8067 11.0054 7.8067 14.1094C7.8067 15.9144 8.8457 17.4454 10.4047 18.5254C10.5547 18.6214 10.5407 18.7444 10.4457 18.9354C10.1857 19.4274 9.8577 19.8924 9.5707 20.2484C9.2147 20.6854 9.4067 21.1644 10.0217 21.1644C10.7327 21.1644 11.9767 20.5764 13.3027 19.7694C13.4667 19.6734 13.5757 19.6324 13.7267 19.6464C13.9587 19.6734 14.2457 19.6874 14.5467 19.6874C18.3337 19.6874 21.2867 17.1994 21.2867 14.1094C21.2867 13.7814 21.2457 13.4534 21.1777 13.1524C20.6717 13.4664 20.0837 13.6584 19.4417 13.6584C17.6507 13.6584 16.1737 12.1684 16.1737 10.3904C16.1737 9.8024 16.3377 9.2554 16.6117 8.7774C15.9547 8.6134 15.2717 8.5174 14.5467 8.5174Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM18.9767 11.854C20.3577 11.854 21.4917 10.705 21.4917 9.324C21.4917 7.93 20.3577 6.809 18.9767 6.809C17.5957 6.809 16.4477 7.93 16.4477 9.324C16.4477 10.705 17.5957 11.854 18.9767 11.854ZM13.6167 7.096C9.3377 7.096 5.9747 9.898 5.9747 13.33C5.9747 15.49 7.3147 17.418 9.3787 18.539C9.5297 18.621 9.5427 18.758 9.4607 18.908C9.2147 19.359 8.8317 19.824 8.5447 20.152C8.1897 20.563 8.2987 21 8.8597 21C9.5837 21 10.9787 20.453 12.3317 19.646C12.4547 19.564 12.5367 19.537 12.6737 19.537C12.9747 19.551 13.2887 19.564 13.6167 19.564C17.8967 19.564 21.2597 16.775 21.2597 13.33C21.2597 12.893 21.1917 12.469 21.0547 12.045C20.4807 12.496 19.7557 12.77 18.9767 12.77C17.1037 12.77 15.5317 11.211 15.5317 9.324C15.5317 8.627 15.7497 7.998 16.1057 7.451C15.3257 7.232 14.4917 7.096 13.6167 7.096Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM19.1407 12.3731C20.5217 12.3731 21.6837 11.2111 21.6837 9.8031C21.6837 8.4081 20.5217 7.2601 19.1407 7.2601C17.7327 7.2601 16.5707 8.4081 16.5707 9.8031C16.5707 11.2111 17.7327 12.3731 19.1407 12.3731ZM13.9727 7.6291C9.8437 7.6291 6.6037 10.3361 6.6037 13.6721C6.6037 15.7361 7.8887 17.5141 9.7887 18.6481C9.9527 18.7441 9.9397 18.8811 9.8577 19.0451C9.6247 19.5101 9.2557 19.9471 8.9687 20.2751C8.5857 20.7131 8.7087 21.1911 9.3237 21.1911C10.0627 21.1911 11.4027 20.6171 12.7417 19.7971C12.8927 19.7151 12.9747 19.6601 13.1387 19.6741C13.3847 19.7011 13.6717 19.7011 13.9727 19.7011C18.1017 19.7011 21.3417 17.0081 21.3417 13.6721C21.3417 13.3301 21.3007 13.0151 21.2327 12.7011C20.6447 13.1391 19.9067 13.3981 19.1407 13.3981C17.1717 13.3981 15.5447 11.7711 15.5447 9.8031C15.5447 9.1051 15.7637 8.4491 16.1187 7.9021C15.4357 7.7241 14.7247 7.6291 13.9727 7.6291Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM19.0447 12.2634C20.4667 12.2634 21.6567 11.0744 21.6567 9.6254C21.6567 8.1894 20.4667 7.0134 19.0447 7.0134C17.6097 7.0134 16.4067 8.1894 16.4067 9.6254C16.4067 11.0744 17.6097 12.2634 19.0447 12.2634ZM13.7947 7.3554C9.5567 7.3554 6.2347 10.1304 6.2347 13.5354C6.2347 15.6814 7.5877 17.5274 9.5977 18.6894C9.7617 18.7854 9.7617 18.9354 9.6797 19.0864C9.4607 19.5374 9.0647 19.9614 8.7777 20.2754C8.3947 20.7124 8.5037 21.1914 9.1057 21.1914C9.8577 21.1914 11.2247 20.6304 12.5777 19.7964C12.7147 19.7144 12.7967 19.6734 12.9477 19.6874C13.2067 19.7014 13.4937 19.7144 13.7947 19.7144C18.0327 19.7144 21.3557 16.9394 21.3557 13.5354C21.3557 13.1934 21.3147 12.8784 21.2457 12.5644C20.6307 13.0294 19.8657 13.3164 19.0447 13.3164C17.0217 13.3164 15.3537 11.6624 15.3537 9.6254C15.3537 8.8864 15.5857 8.2034 15.9687 7.6284C15.2717 7.4514 14.5607 7.3554 13.7947 7.3554Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM19.2087 12.4549C20.5757 12.4549 21.6977 11.3199 21.6977 9.9399C21.6977 8.5719 20.5757 7.4509 19.2087 7.4509C17.8417 7.4509 16.7067 8.5719 16.7067 9.9399C16.7067 11.3199 17.8417 12.4549 19.2087 12.4549ZM14.1097 7.8479C10.0627 7.8479 6.8907 10.4999 6.8907 13.7679C6.8907 15.7769 8.1077 17.4999 9.9257 18.6209C10.0897 18.7169 10.0757 18.8539 9.9937 19.0179C9.7617 19.4959 9.3927 19.9339 9.1057 20.2619C8.7367 20.6989 8.8727 21.1919 9.4887 21.1919C10.2127 21.1919 11.5387 20.6039 12.8787 19.7969C13.0297 19.7009 13.1247 19.6599 13.2757 19.6739C13.5217 19.6879 13.8087 19.7009 14.1097 19.7009C18.1567 19.7009 21.3277 17.0489 21.3277 13.7679C21.3277 13.4399 21.2867 13.1249 21.2187 12.8109C20.6447 13.2069 19.9477 13.4529 19.2087 13.4529C17.2817 13.4529 15.6957 11.8669 15.6957 9.9399C15.6957 9.2699 15.8867 8.6409 16.2287 8.1079C15.5587 7.9299 14.8477 7.8479 14.1097 7.8479Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM18.9077 11.3062C20.2067 11.3062 21.2867 10.2262 21.2867 8.9142C21.2867 7.6152 20.2067 6.5352 18.9077 6.5352C17.5957 6.5352 16.5157 7.6152 16.5157 8.9142C16.5157 10.2262 17.5957 11.3062 18.9077 11.3062ZM13.3707 6.7672C9.0367 6.7672 5.6327 9.5972 5.6327 13.0702C5.6327 15.2582 6.9727 17.2672 9.0917 18.3472C9.2287 18.4162 9.2557 18.5392 9.1737 18.6762C8.9137 19.1402 8.5317 19.6602 8.2437 19.9882C7.9297 20.3442 8.0117 20.7402 8.5177 20.7402C9.2417 20.7402 10.6637 20.2202 12.0037 19.4552C12.1267 19.3732 12.1957 19.3592 12.3187 19.3592C12.6597 19.3592 13.0157 19.3872 13.3707 19.3872C17.7187 19.3872 21.1097 16.5432 21.1097 13.0702C21.1097 12.4822 21.0137 11.9222 20.8087 11.3752C20.2887 11.7852 19.6057 12.0452 18.9077 12.0452C17.1987 12.0452 15.7777 10.6232 15.7777 8.9142C15.7777 8.2992 15.9687 7.7242 16.2967 7.2322C15.3947 6.9312 14.4237 6.7672 13.3707 6.7672Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM18.8667 11.0191C20.1387 11.0191 21.1777 9.9801 21.1777 8.7091C21.1777 7.4371 20.1387 6.3851 18.8667 6.3851C17.5957 6.3851 16.5427 7.4371 16.5427 8.7091C16.5427 9.9801 17.5957 11.0191 18.8667 11.0191ZM13.2477 6.5761C8.8867 6.5761 5.4687 9.4471 5.4687 12.9331C5.4687 15.1351 6.7947 17.1851 8.9417 18.2381C9.0777 18.2931 9.1187 18.4161 9.0237 18.5531C8.7497 19.0041 8.3807 19.5641 8.0797 19.9061C7.7927 20.2341 7.8747 20.5901 8.3397 20.5901C9.0647 20.5901 10.5137 20.0841 11.8397 19.3461C11.9627 19.2771 12.0317 19.2501 12.1267 19.2501C12.4957 19.2501 12.8657 19.2911 13.2477 19.2911C17.6227 19.2911 21.0407 16.4201 21.0407 12.9331C21.0407 12.2641 20.9177 11.6351 20.6857 11.0191C20.1797 11.4161 19.5367 11.6621 18.8667 11.6621C17.2407 11.6621 15.9137 10.3221 15.9137 8.7091C15.9137 8.1211 16.0777 7.5741 16.3927 7.1091C15.4357 6.7671 14.3827 6.5761 13.2477 6.5761Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}