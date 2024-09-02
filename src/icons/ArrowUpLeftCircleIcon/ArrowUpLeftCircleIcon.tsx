import { IconProps } from "../../types"

export default function ArrowUpLeftCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM10.7597 19.2771C11.7987 19.2771 12.4277 18.5251 12.4277 17.3491V15.9961L12.2497 14.7381L13.5347 16.3101L17.1577 19.9201C17.6507 20.3981 18.1567 20.5901 18.7167 20.5901C19.8237 20.5901 20.7677 19.7831 20.7677 18.5801C20.7677 18.0471 20.5347 17.5001 20.1247 17.0901L16.4337 13.3981L14.8617 12.1131L16.0647 12.3321H17.5547C18.7167 12.3321 19.4547 11.7031 19.4547 10.6641C19.4547 9.6251 18.7027 8.9961 17.5137 8.9961H11.5387C10.0077 8.9961 9.0917 9.8981 9.0917 11.4161V17.3771C9.0917 18.5251 9.7347 19.2771 10.7597 19.2771Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM10.1987 18.3066C11.0197 18.3066 11.5387 17.7326 11.5387 16.8166V14.9566L11.3337 13.2616L12.9607 15.0936L17.2947 19.4276C17.6367 19.7556 18.0197 19.9066 18.4707 19.9066C19.3187 19.9066 19.9887 19.3046 19.9887 18.4026C19.9887 17.9926 19.8107 17.5816 19.5097 17.2946L15.1487 12.9196L13.2887 11.2926L14.9027 11.5116H16.8987C17.8007 11.5116 18.3887 10.9926 18.3887 10.1716C18.3887 9.3516 17.8007 8.8456 16.8847 8.8456H10.6507C9.5427 8.8456 8.8597 9.4476 8.8597 10.6096V16.8166C8.8597 17.7046 9.3787 18.3066 10.1987 18.3066Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM10.4997 18.8264C11.4297 18.8264 12.0037 18.1564 12.0037 17.1034V15.5174L11.8127 14.0544L13.2617 15.7504L17.2267 19.6874C17.6507 20.1114 18.0877 20.2754 18.5937 20.2754C19.5777 20.2754 20.3987 19.5644 20.3987 18.5114C20.3987 18.0334 20.1937 17.5414 19.8377 17.1994L15.8317 13.1794L14.1227 11.7304L15.5177 11.9494H17.2537C18.2797 11.9494 18.9487 11.3754 18.9487 10.4454C18.9487 9.5024 18.2797 8.9274 17.2127 8.9274H11.1287C9.7887 8.9274 8.9827 9.6934 8.9827 11.0474V17.1174C8.9827 18.1564 9.5567 18.8264 10.4997 18.8264Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM9.2417 17.008C9.7207 17.008 10.0347 16.693 10.0347 16.188V13.18L9.8987 10.938L11.6207 12.77L17.5277 18.662C17.6777 18.813 17.8687 18.922 18.1427 18.922C18.6077 18.922 18.9217 18.607 18.9217 18.129C18.9217 17.91 18.8127 17.705 18.6617 17.555L12.7557 11.635L10.8967 9.898L12.8787 10.035H16.1737C16.6797 10.035 17.0077 9.721 17.0077 9.256C17.0077 8.791 16.6937 8.49 16.1877 8.49H9.3377C8.8187 8.49 8.4767 8.75 8.4767 9.352V16.174C8.4767 16.666 8.7907 17.008 9.2417 17.008Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM9.8297 17.6781C10.5137 17.6781 10.9647 17.2131 10.9647 16.4611V14.2731L10.7597 12.3051L12.6057 14.3141L17.3907 19.0991C17.6367 19.3461 17.9237 19.4691 18.3067 19.4691C18.9907 19.4691 19.4957 19.0041 19.4957 18.2791C19.4957 17.9511 19.3457 17.6371 19.1137 17.4041L14.3147 12.6051L12.2907 10.7601L14.1637 10.9651H16.4747C17.2127 10.9651 17.6917 10.5271 17.6917 9.8441C17.6917 9.1741 17.2267 8.7361 16.4887 8.7361H10.0897C9.2417 8.7361 8.7227 9.1461 8.7227 10.0901V16.4471C8.7227 17.1721 9.1597 17.6781 9.8297 17.6781Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM9.6387 17.3364C10.2407 17.3364 10.6367 16.9124 10.6367 16.2694V13.9044L10.4317 11.7714L12.4007 13.8774L17.4317 18.9084C17.6227 19.0994 17.8827 19.2224 18.2107 19.2224C18.8127 19.2224 19.2227 18.8264 19.2227 18.2114C19.2227 17.9374 19.0857 17.6644 18.8947 17.4724L13.8497 12.4274L11.7167 10.4454L13.7407 10.6644H16.2287C16.8847 10.6644 17.3087 10.2674 17.3087 9.6664C17.3087 9.0644 16.8987 8.6684 16.2557 8.6684H9.7757C9.0777 8.6684 8.6267 8.9824 8.6267 9.7894V16.2424C8.6267 16.8714 9.0367 17.3364 9.6387 17.3364Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM9.9937 17.9509C10.7327 17.9509 11.2107 17.4319 11.2107 16.6109V14.5739L11.0057 12.7289L12.7557 14.6559L17.3497 19.2359C17.6367 19.5239 17.9647 19.6599 18.3747 19.6599C19.1407 19.6599 19.7147 19.1409 19.7147 18.3339C19.7147 17.9789 19.5367 17.6229 19.2777 17.3629L14.6697 12.7419L12.7147 10.9919L14.4787 11.1969H16.6527C17.4587 11.1969 17.9917 10.7329 17.9917 9.9939C17.9917 9.2419 17.4727 8.7769 16.6657 8.7769H10.3357C9.3657 8.7769 8.7777 9.2829 8.7777 10.3089V16.6109C8.7777 17.4039 9.2557 17.9509 9.9937 17.9509Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM8.7367 16.5972C9.0367 16.5972 9.2287 16.4062 9.2287 16.0922V12.2502L9.1877 9.8302L10.5957 11.3062L17.6367 18.3612C17.7327 18.4572 17.8557 18.5122 18.0327 18.5122C18.3337 18.5122 18.5257 18.3202 18.5257 18.0332C18.5257 17.8692 18.4567 17.7462 18.3617 17.6502L11.2927 10.5822L9.8167 9.1602L11.7307 9.2152H16.0917C16.4067 9.2152 16.6117 9.0102 16.6117 8.7222C16.6117 8.4492 16.4067 8.2582 16.1057 8.2582H8.7637C8.4627 8.2582 8.2717 8.4352 8.2717 8.7772V16.0782C8.2717 16.3922 8.4627 16.5972 8.7367 16.5972Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM8.4767 16.3791C8.6817 16.3791 8.8187 16.2421 8.8187 16.0231V9.2561L10.0627 10.5411L17.7047 18.1831C17.7737 18.2521 17.8557 18.3061 17.9917 18.3061C18.1837 18.3061 18.3207 18.1701 18.3207 17.9651C18.3207 17.8421 18.2797 17.7601 18.2107 17.6911L10.5547 10.0351L9.2557 8.7771H16.0507C16.2697 8.7771 16.4067 8.6401 16.4067 8.4351C16.4067 8.2581 16.2697 8.1351 16.0507 8.1351H8.4767C8.2987 8.1351 8.1617 8.2711 8.1617 8.4761V16.0231C8.1617 16.2421 8.2987 16.3791 8.4767 16.3791Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
