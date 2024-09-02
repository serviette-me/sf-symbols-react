import { IconProps } from "../../types"

export default function RtCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM18.7987 20.1801C19.5237 20.1801 20.1117 19.5921 20.1117 18.8401V11.9761H20.9727C21.5467 11.9761 22.0257 11.4841 22.0257 10.8961C22.0257 10.3361 21.5467 9.8441 20.9727 9.8441H16.6117C16.0237 9.8441 15.5447 10.3361 15.5447 10.8961C15.5447 11.4841 16.0237 11.9761 16.6117 11.9761H17.4727V18.8401C17.4727 19.5921 18.0607 20.1801 18.7987 20.1801ZM9.4197 20.1931C10.2817 20.1931 10.7327 19.6601 10.7327 18.7991V16.4611H11.2107L12.0037 19.0451C12.2367 19.8241 12.6877 20.1931 13.3707 20.1931C14.0957 20.1931 14.6427 19.6461 14.6017 18.8671C14.5877 18.5941 14.5467 18.4301 14.4507 18.1831L13.6447 15.9141C14.4377 15.3261 14.7387 14.2051 14.7387 13.2071C14.7387 10.9511 13.4937 9.8441 11.3617 9.8441H9.4197C8.5447 9.8441 8.0937 10.3631 8.0937 11.2521V18.7991C8.0937 19.6741 8.5447 20.1931 9.4197 20.1931ZM10.7327 14.6701V11.8401H11.1287C11.7717 11.8401 12.0317 12.6191 12.0317 13.2621C12.0317 13.9451 11.7847 14.6701 11.1157 14.6701Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM18.4847 19.9196C19.1137 19.9196 19.6327 19.4006 19.6327 18.7576V11.0336H20.8907C21.4097 11.0336 21.8207 10.6096 21.8207 10.0766C21.8207 9.5706 21.4097 9.1466 20.8907 9.1466H16.0237C15.5037 9.1466 15.0797 9.5706 15.0797 10.0766C15.0797 10.6096 15.5037 11.0336 16.0237 11.0336H17.3087V18.7576C17.3087 19.4006 17.8277 19.9196 18.4847 19.9196ZM8.5727 19.9336C9.3107 19.9336 9.7347 19.4686 9.7347 18.7166V15.8726H10.6097L11.7307 18.9496C11.9487 19.6056 12.3187 19.9336 12.9337 19.9336C13.5217 19.9336 14.0277 19.5236 14.0137 18.7856C14.0137 18.5796 13.9457 18.3476 13.8357 18.0746L12.7827 15.3806C13.7267 14.8066 14.1227 13.6586 14.1227 12.5376C14.1227 10.2946 12.8237 9.1466 10.6917 9.1466H8.5727C7.8067 9.1466 7.3967 9.5976 7.3967 10.3636V18.7166C7.3967 19.4686 7.8067 19.9336 8.5727 19.9336ZM9.7347 14.2326V10.9376H10.4867C11.3337 10.9376 11.7577 11.7166 11.7577 12.5916C11.7577 13.4666 11.3747 14.2326 10.4867 14.2326Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM18.6487 20.0564C19.3317 20.0564 19.8787 19.5094 19.8787 18.8124V11.5394H20.9317C21.4787 11.5394 21.9297 11.0744 21.9297 10.5134C21.9297 9.9804 21.4787 9.5154 20.9317 9.5154H16.3377C15.7777 9.5154 15.3257 9.9804 15.3257 10.5134C15.3257 11.0744 15.7777 11.5394 16.3377 11.5394H17.3907V18.8124C17.3907 19.5094 17.9507 20.0564 18.6487 20.0564ZM9.0237 20.0844C9.8297 20.0844 10.2537 19.5784 10.2537 18.7574V16.1874H10.9237L11.8667 19.0044C12.0997 19.7284 12.5097 20.0844 13.1527 20.0844C13.8227 20.0844 14.3557 19.5914 14.3277 18.8394C14.3147 18.5934 14.2597 18.4024 14.1637 18.1424L13.2347 15.6684C14.1097 15.0934 14.4507 13.9454 14.4507 12.9064C14.4507 10.6504 13.1797 9.5294 11.0467 9.5294H9.0237C8.1897 9.5294 7.7657 10.0074 7.7657 10.8414V18.7574C7.7657 19.5784 8.1897 20.0844 9.0237 20.0844ZM10.2537 14.4784V11.4164H10.8277C11.5667 11.4164 11.9077 12.2094 11.9077 12.9474C11.9077 13.7264 11.5937 14.4784 10.8147 14.4784Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM7.5877 19.387C8.0797 19.387 8.3807 19.059 8.3807 18.553V14.82H9.9667L11.5797 18.758C11.7437 19.168 11.9767 19.387 12.4007 19.387C12.7827 19.387 13.1527 19.154 13.1527 18.607C13.1527 18.484 13.0977 18.279 13.0017 18.047L11.4707 14.479C12.5777 13.973 13.1657 12.852 13.1657 11.484C13.1657 9.379 11.9357 8.176 9.8577 8.176H7.5737C7.0547 8.176 6.7817 8.477 6.7817 8.996V18.553C6.7817 19.045 7.0817 19.387 7.5877 19.387ZM17.7867 19.4C18.2247 19.4 18.5797 19.045 18.5797 18.607V9.529H20.3847C20.7537 9.529 21.0547 9.229 21.0547 8.846C21.0547 8.477 20.7537 8.189 20.3847 8.189H15.0527C14.6697 8.189 14.3827 8.477 14.3827 8.846C14.3827 9.229 14.6697 9.529 15.0527 9.529H16.9937V18.607C16.9937 19.045 17.3497 19.4 17.7867 19.4ZM8.3807 13.604V9.461H9.7067C10.8687 9.461 11.5527 10.254 11.5527 11.525C11.5527 12.715 10.9787 13.604 9.7207 13.604Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM18.2797 19.7561C18.8537 19.7561 19.3187 19.2771 19.3187 18.6891V10.4181H20.8357C21.3147 10.4181 21.6977 10.0351 21.6977 9.5431C21.6977 9.0641 21.3147 8.6811 20.8357 8.6811H15.6547C15.1617 8.6811 14.7927 9.0641 14.7927 9.5431C14.7927 10.0351 15.1617 10.4181 15.6547 10.4181H17.2127V18.6891C17.2127 19.2771 17.6917 19.7561 18.2797 19.7561ZM8.0387 19.7561C8.6957 19.7561 9.0917 19.3321 9.0917 18.6481V15.4761H10.2407L11.5527 18.8811C11.7577 19.4551 12.0857 19.7561 12.6467 19.7561C13.1527 19.7561 13.6447 19.4411 13.6447 18.7301C13.6307 18.5531 13.5627 18.2931 13.4397 17.9921L12.2227 15.0391C13.2757 14.4651 13.7127 13.2891 13.7127 12.0991C13.7127 9.8711 12.4007 8.6951 10.2677 8.6951H8.0257C7.3417 8.6951 6.9587 9.1051 6.9587 9.7891V18.6481C6.9587 19.3181 7.3417 19.7561 8.0387 19.7561ZM9.0917 13.9451V10.3491H10.0757C11.0607 10.3491 11.5667 11.1291 11.5667 12.1401C11.5667 13.1521 11.1157 13.9451 10.0757 13.9451Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM18.1567 19.6464C18.7027 19.6464 19.1547 19.2094 19.1547 18.6484V10.0764H20.8087C21.2597 10.0764 21.6287 9.7074 21.6287 9.2424C21.6287 8.7914 21.2597 8.4214 20.8087 8.4214H15.4487C14.9847 8.4214 14.6157 8.7914 14.6157 9.2424C14.6157 9.7074 14.9847 10.0764 15.4487 10.0764H17.1577V18.6484C17.1577 19.2094 17.6097 19.6464 18.1567 19.6464ZM7.7387 19.6604C8.3537 19.6604 8.7227 19.2634 8.7227 18.6214V15.2574H10.0217L11.4437 18.8394C11.6487 19.3594 11.9487 19.6604 12.4957 19.6604C12.9477 19.6604 13.4257 19.4004 13.4257 18.6894C13.4257 18.5394 13.3437 18.2654 13.2067 17.9514L11.9077 14.8474C13.0157 14.2734 13.4937 13.0844 13.4937 11.8534C13.4937 9.6254 12.1677 8.4354 10.0347 8.4354H7.7247C7.0687 8.4354 6.7127 8.8324 6.7127 9.4744V18.6214C6.7127 19.2504 7.0817 19.6604 7.7387 19.6604ZM8.7227 13.7954V10.0214H9.8577C10.8967 10.0214 11.4707 10.8004 11.4707 11.8944C11.4707 12.9744 10.9647 13.7954 9.8577 13.7954Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM18.3617 19.8239C18.9627 19.8239 19.4547 19.3319 19.4547 18.7169V10.6779H20.8637C21.3557 10.6779 21.7517 10.2809 21.7517 9.7759C21.7517 9.2829 21.3557 8.8869 20.8637 8.8869H15.8187C15.3127 8.8869 14.9157 9.2829 14.9157 9.7759C14.9157 10.2809 15.3127 10.6779 15.8187 10.6779H17.2537V18.7169C17.2537 19.3319 17.7457 19.8239 18.3617 19.8239ZM8.2717 19.8379C8.9687 19.8379 9.3657 19.3869 9.3657 18.6759V15.6539H10.3907L11.6207 18.9079C11.8397 19.5099 12.1817 19.8379 12.7697 19.8379C13.3027 19.8379 13.8087 19.4829 13.8087 18.7579C13.7947 18.5669 13.7267 18.3199 13.6037 18.0329L12.4687 15.1899C13.4667 14.6149 13.8907 13.4529 13.8907 12.2909C13.8907 10.0489 12.5917 8.8869 10.4587 8.8869H8.2577C7.5467 8.8869 7.1507 9.3239 7.1507 10.0349V18.6759C7.1507 19.3869 7.5467 19.8379 8.2717 19.8379ZM9.3657 14.0819V10.6099H10.2537C11.1837 10.6099 11.6487 11.3889 11.6487 12.3319C11.6487 13.2889 11.2387 14.0819 10.2537 14.0819Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM7.3967 19.0172C7.7247 19.0172 7.9297 18.7992 7.9297 18.4702V14.2462H9.8847L11.7577 18.6482C11.8667 18.9082 12.0177 19.0172 12.2907 19.0172C12.5777 19.0172 12.7967 18.8262 12.7967 18.5122C12.7967 18.4292 12.7697 18.3062 12.7147 18.1832L10.8967 14.0002C12.0177 13.5902 12.7417 12.5512 12.7417 11.0192C12.7417 9.0642 11.6207 7.8342 9.6387 7.8342H7.3827C7.0407 7.8342 6.8497 8.0392 6.8497 8.3812V18.4702C6.8497 18.7992 7.0687 19.0172 7.3967 19.0172ZM17.2947 19.0722C17.5957 19.0722 17.8277 18.8402 17.8277 18.5532V8.8042H19.8237C20.0837 8.8042 20.2887 8.6132 20.2887 8.3402C20.2887 8.0802 20.0837 7.8752 19.8237 7.8752H14.5197C14.2597 7.8752 14.0547 8.0802 14.0547 8.3402C14.0547 8.6132 14.2597 8.8042 14.5197 8.8042H16.7757V18.5532C16.7757 18.8402 17.0077 19.0722 17.2947 19.0722ZM7.9297 13.3572V8.7362H9.5297C10.8417 8.7362 11.6757 9.5562 11.6757 11.0332C11.6757 12.3872 11.0057 13.3572 9.5427 13.3572Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM7.3007 18.8261C7.5467 18.8261 7.6977 18.6621 7.6977 18.4161V13.9451H9.8437L11.8397 18.5801C11.9217 18.7581 12.0447 18.8261 12.2227 18.8261C12.4687 18.8261 12.6187 18.6481 12.6187 18.4571C12.6187 18.3891 12.6057 18.3061 12.5647 18.2381L10.6097 13.7401C11.7167 13.3851 12.5237 12.3871 12.5237 10.7601C12.5237 8.9001 11.4707 7.6421 9.5157 7.6421H7.2867C7.0277 7.6421 6.8907 7.7931 6.8907 8.0531V18.4161C6.8907 18.6621 7.0687 18.8261 7.3007 18.8261ZM17.0487 18.8941C17.2677 18.8941 17.4317 18.7301 17.4317 18.5121V8.4351H19.5367C19.7417 8.4351 19.8927 8.2711 19.8927 8.0661C19.8927 7.8611 19.7417 7.7111 19.5367 7.7111H14.2597C14.0547 7.7111 13.8907 7.8611 13.8907 8.0661C13.8907 8.2711 14.0547 8.4351 14.2597 8.4351H16.6527V18.5121C16.6527 18.7301 16.8297 18.8941 17.0487 18.8941ZM7.6977 13.2341V8.3531H9.4337C10.8147 8.3531 11.7307 9.1871 11.7307 10.7731C11.7307 12.1951 11.0197 13.2341 9.4477 13.2341Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
