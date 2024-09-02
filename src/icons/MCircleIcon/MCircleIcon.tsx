import { IconProps } from "../../types"

export default function MCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM10.2267 21.1781C11.2247 21.1781 11.8127 20.5621 11.8127 19.4691V14.2461H11.9487L13.4807 19.0721C13.6987 19.8101 14.1507 20.1801 14.8887 20.1801C15.6547 20.1801 16.0777 19.8511 16.3237 19.0861L17.9097 14.2461H18.0467V19.4691C18.0467 20.5621 18.6347 21.1781 19.6327 21.1781C20.6167 21.1781 21.2187 20.5621 21.2187 19.4691V10.9101C21.2187 9.5841 20.3167 8.6951 18.9357 8.6951C17.6637 8.6951 16.8847 9.3381 16.5017 10.6371L14.9847 15.6821H14.8887L13.3577 10.6371C12.9747 9.3241 12.1957 8.6951 10.9237 8.6951C9.5427 8.6951 8.6547 9.5841 8.6547 10.9101V19.4691C8.6547 20.5621 9.2287 21.1781 10.2267 21.1781Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM9.4197 20.7406C10.2407 20.7406 10.7187 20.2206 10.7187 19.3316V12.7696H10.8417L13.1797 19.1136C13.3847 19.7286 13.7817 20.0296 14.3967 20.0296C15.0387 20.0296 15.4217 19.7556 15.6407 19.1266L18.0197 12.7696H18.1427V19.3316C18.1427 20.2206 18.6207 20.7406 19.4277 20.7406C20.2347 20.7406 20.7127 20.2206 20.7127 19.3316V9.8026C20.7127 8.7636 20.0017 8.0666 18.9357 8.0666C17.9647 8.0666 17.3637 8.5316 17.0487 9.4746L14.4787 16.5566H14.3967L11.8127 9.4746C11.4977 8.5316 10.8827 8.0666 9.9257 8.0666C8.8597 8.0666 8.1487 8.7636 8.1487 9.8026V19.3316C8.1487 20.2206 8.6137 20.7406 9.4197 20.7406Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM9.8437 20.9724C10.7597 20.9724 11.2927 20.4124 11.2927 19.4004V13.5624H11.4297L13.3297 19.0994C13.5487 19.7834 13.9727 20.1114 14.6567 20.1114C15.3667 20.1114 15.7777 19.8104 16.0097 19.1134L17.9647 13.5624H18.0877V19.4004C18.0877 20.3984 18.6207 20.9724 19.5367 20.9724C20.4397 20.9724 20.9867 20.4124 20.9867 19.4004V10.4044C20.9867 9.2014 20.1657 8.4084 18.9357 8.4084C17.8007 8.4084 17.1037 8.9684 16.7617 10.0894L14.7517 16.0914H14.6567L12.6327 10.0894C12.2777 8.9554 11.5797 8.4084 10.4587 8.4084C9.2147 8.4084 8.4077 9.2014 8.4077 10.4044V19.4004C8.4077 20.3984 8.9417 20.9724 9.8437 20.9724Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM8.4357 19.975C8.9277 19.975 9.2147 19.66 9.2147 19.127V10.268H9.3107L12.8237 19.072C12.9887 19.482 13.2617 19.674 13.6857 19.674C14.1097 19.674 14.3967 19.482 14.5607 19.072L18.0737 10.268H18.1697V19.127C18.1697 19.646 18.4707 19.975 18.9357 19.975C19.4277 19.975 19.7147 19.66 19.7147 19.127V8.367C19.7147 7.752 19.2907 7.342 18.6757 7.342C18.1427 7.342 17.7867 7.574 17.5687 8.094L13.7407 17.746H13.6717L9.8167 8.094C9.6117 7.574 9.2557 7.342 8.7227 7.342C8.1077 7.342 7.6697 7.752 7.6697 8.367V19.127C7.6697 19.646 7.9707 19.975 8.4357 19.975Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM8.9007 20.4531C9.5977 20.4531 10.0077 20.0021 10.0077 19.2231V11.8121H10.1307L12.9887 19.1401C13.1937 19.6741 13.5347 19.9331 14.0817 19.9331C14.6427 19.9331 14.9977 19.6871 15.2027 19.1401L18.0877 11.8121H18.1977V19.2231C18.1977 19.9881 18.6077 20.4531 19.2907 20.4531C19.9887 20.4531 20.3987 20.0021 20.3987 19.2231V9.0921C20.3987 8.2441 19.7967 7.6561 18.9357 7.6561C18.1697 7.6561 17.6637 8.0121 17.4047 8.7361L14.1507 17.1031H14.0817L10.8147 8.7361C10.5407 8.0121 10.0487 7.6561 9.2827 7.6561C8.4217 7.6561 7.8207 8.2441 7.8207 9.0921V19.2231C7.8207 19.9881 8.2307 20.4531 8.9007 20.4531Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM8.6137 20.2894C9.2417 20.2894 9.6117 19.8784 9.6117 19.1684V11.2794H9.7347L12.8787 19.1544C13.0837 19.6464 13.3987 19.8784 13.9177 19.8784C14.4237 19.8784 14.7657 19.6464 14.9567 19.1544L18.1287 11.2794H18.2387V19.1684C18.2387 19.8654 18.6077 20.2894 19.2087 20.2894C19.8517 20.2894 20.2207 19.8784 20.2207 19.1684V8.6954C20.2207 7.9434 19.6877 7.4234 18.9357 7.4234C18.2797 7.4234 17.8417 7.7244 17.5957 8.3124L13.9727 17.4044H13.9047L10.2537 8.3124C10.0217 7.7244 9.5837 7.4234 8.9277 7.4234C8.1617 7.4234 7.6287 7.9434 7.6287 8.6954V19.1684C7.6287 19.8654 8.0117 20.2894 8.6137 20.2894Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM9.1327 20.5759C9.8707 20.5759 10.3227 20.0979 10.3227 19.2769V12.2229H10.4317L13.0707 19.1269C13.2757 19.7009 13.6447 19.9749 14.2187 19.9749C14.8207 19.9749 15.1757 19.7149 15.3947 19.1409L18.0607 12.2229H18.1697V19.2769C18.1697 20.0839 18.6207 20.5759 19.3457 20.5759C20.0977 20.5759 20.5347 20.0979 20.5347 19.2769V9.4059C20.5347 8.4629 19.8927 7.8339 18.9357 7.8339C18.0737 7.8339 17.5277 8.2439 17.2537 9.0509L14.3007 16.8709H14.2187L11.2387 9.0509C10.9507 8.2309 10.4047 7.8339 9.5567 7.8339C8.5997 7.8339 7.9567 8.4629 7.9567 9.4059V19.2769C7.9567 20.0839 8.3947 20.5759 9.1327 20.5759Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM8.2027 19.5782C8.5037 19.5782 8.6957 19.3872 8.6957 19.0722V8.9282H8.7637L12.7417 18.9902C12.8657 19.2772 13.0707 19.4282 13.3847 19.4282C13.7127 19.4282 13.9177 19.2772 14.0407 18.9902L18.0197 8.9282H18.1017V19.0722C18.1017 19.3872 18.2797 19.5782 18.5797 19.5782C18.8807 19.5782 19.0587 19.3872 19.0587 19.0722V7.9572C19.0587 7.5192 18.7577 7.2322 18.3337 7.2322C17.9507 7.2322 17.7047 7.3962 17.5277 7.8342L13.4257 18.1972H13.3577L9.2557 7.8342C9.0777 7.3962 8.8317 7.2322 8.4487 7.2322C8.0257 7.2322 7.7247 7.5192 7.7247 7.9572V19.0722C7.7247 19.3872 7.9157 19.5782 8.2027 19.5782Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM8.0797 19.3731C8.2847 19.3731 8.4217 19.2361 8.4217 19.0311V8.2301H8.4907L12.7007 18.9221C12.7967 19.1681 12.9747 19.2911 13.2347 19.2911C13.5077 19.2911 13.6717 19.1681 13.7817 18.9221L17.9787 8.2301H18.0467V19.0311C18.0467 19.2361 18.1837 19.3731 18.3887 19.3731C18.5937 19.3731 18.7307 19.2361 18.7307 19.0311V7.7241C18.7307 7.3831 18.4847 7.1641 18.1697 7.1641C17.8557 7.1641 17.6637 7.3011 17.5137 7.6831L13.2617 18.4301H13.1937L8.9547 7.6831C8.8047 7.3011 8.6137 7.1641 8.3127 7.1641C7.9847 7.1641 7.7517 7.3831 7.7517 7.7241V19.0311C7.7517 19.2361 7.8747 19.3731 8.0797 19.3731Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
